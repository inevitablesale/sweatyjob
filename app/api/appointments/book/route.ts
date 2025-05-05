import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"
import { captureLead, scheduleAppointment } from "@/lib/lead-capture"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: Request) {
  try {
    const { customerInfo, service, price } = await request.json()

    if (!customerInfo || !service || !price) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Create or retrieve Stripe customer
    let customer

    // Check if customer already exists with this email
    const customers = await stripe.customers.list({
      email: customerInfo.email,
      limit: 1,
    })

    if (customers.data.length > 0) {
      // Update existing customer
      customer = await stripe.customers.update(customers.data[0].id, {
        name: `${customerInfo.firstName} ${customerInfo.lastName}`,
        phone: customerInfo.phone,
        address: {
          line1: customerInfo.address,
          city: customerInfo.city,
          state: customerInfo.state,
          postal_code: customerInfo.zipCode,
          country: "US",
        },
      })
    } else {
      // Create new customer
      customer = await stripe.customers.create({
        email: customerInfo.email,
        name: `${customerInfo.firstName} ${customerInfo.lastName}`,
        phone: customerInfo.phone,
        address: {
          line1: customerInfo.address,
          city: customerInfo.city,
          state: customerInfo.state,
          postal_code: customerInfo.zipCode,
          country: "US",
        },
      })
    }

    // Convert 12-hour time format to 24-hour format if needed
    let timeSlot = customerInfo.appointmentTime

    // Check if the time is in 12-hour format (contains AM/PM)
    if (timeSlot.includes("AM") || timeSlot.includes("PM")) {
      const [timePart, period] = timeSlot.split(" ")
      let [hours, minutes] = timePart.split(":").map(Number)

      // Convert to 24-hour format
      if (period === "PM" && hours < 12) {
        hours += 12
      } else if (period === "AM" && hours === 12) {
        hours = 0
      }

      timeSlot = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    }

    // Format appointment date
    const appointmentDateTime = new Date(`${customerInfo.appointmentDate}T${timeSlot}:00`)

    // First, capture or update the lead
    const { id: leadId } = await captureLead({
      firstName: customerInfo.firstName,
      lastName: customerInfo.lastName,
      email: customerInfo.email,
      phone: customerInfo.phone,
      address: customerInfo.address,
      city: customerInfo.city,
      state: customerInfo.state,
      zipCode: customerInfo.zipCode,
      coordinates: customerInfo.coordinates,
      source: "appointment_booking",
      status: "appointment_scheduled",
      stripeCustomerId: customer.id,
    })

    // Then, schedule the appointment
    const { appointmentId } = await scheduleAppointment(leadId, {
      serviceType: service,
      appointmentDate: appointmentDateTime.toISOString(),
      timeSlot: timeSlot,
      notes: `Service: ${service}`,
      address: customerInfo.address,
      coordinates: customerInfo.coordinates,
      stripeCustomerId: customer.id,
      email: customerInfo.email,
      phone: customerInfo.phone,
    })

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price,
      currency: "usd",
      customer: customer.id,
      metadata: {
        appointmentId,
        leadId,
        service,
      },
      automatic_payment_methods: {
        enabled: true,
      },
    })

    // Update appointment with payment intent ID
    await supabase
      .from("appointments")
      .update({
        stripe_session_id: paymentIntent.id,
      })
      .eq("id", appointmentId)

    // Update the part at the end where we mark time slots as unavailable
    // Mark the booked time slot and buffer slots as unavailable
    const [bookedHour, bookedMinute] = timeSlot.split(":").map(Number)
    const bufferTimeSlots = [timeSlot]

    // Add 2-hour buffer before and after
    for (let i = 1; i <= 2; i++) {
      // Add slots before
      const beforeHour = (bookedHour - i + 24) % 24
      bufferTimeSlots.push(`${beforeHour.toString().padStart(2, "0")}:${bookedMinute.toString().padStart(2, "0")}`)

      // Add slots after
      const afterHour = (bookedHour + i) % 24
      bufferTimeSlots.push(`${afterHour.toString().padStart(2, "0")}:${bookedMinute.toString().padStart(2, "0")}`)
    }

    // Update all affected time slots
    for (const timeSlot of bufferTimeSlots) {
      await supabase
        .from("available_time_slots")
        .update({
          is_available: false,
        })
        .eq("date", customerInfo.appointmentDate)
        .eq("time_slot", timeSlot)
    }

    return NextResponse.json({
      appointmentId,
      leadId,
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error: any) {
    console.error("Error booking appointment:", error)
    return NextResponse.json({ error: error.message || "Failed to book appointment" }, { status: 500 })
  }
}
