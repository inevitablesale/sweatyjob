import { NextResponse } from "next/server"
import { captureLead, scheduleAppointment } from "@/lib/lead-capture"

export async function POST(request: Request) {
  try {
    const { customerInfo, service } = await request.json()

    if (!customerInfo || !service) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Validate appointment date and time
    if (!customerInfo.appointmentDate || !customerInfo.appointmentTime) {
      return NextResponse.json({ error: "Missing appointment date or time" }, { status: 400 })
    }

    // Format appointment date and time
    const [hours, minutes] = customerInfo.appointmentTime.split(":").map(Number)

    // Create a proper date object with the appointment date and time
    const appointmentDateTime = new Date(
      `${customerInfo.appointmentDate}T${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`,
    )

    if (isNaN(appointmentDateTime.getTime())) {
      return NextResponse.json({ error: "Invalid time value" }, { status: 400 })
    }

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
      source: service.includes("Mowing") ? "standard_mowing" : "appointment_booking",
      status: "appointment_scheduled",
      notes: customerInfo.notes || `Service requested: ${service}`,
    })

    // Then, schedule the appointment
    const { appointmentId } = await scheduleAppointment(leadId, {
      serviceType: service,
      appointmentDate: appointmentDateTime.toISOString(),
      timeSlot: customerInfo.appointmentTime,
      notes: customerInfo.notes || `Name: ${customerInfo.firstName} ${customerInfo.lastName}`,
      address: customerInfo.address,
      coordinates: customerInfo.coordinates,
      email: customerInfo.email,
      phone: customerInfo.phone,
    })

    return NextResponse.json({
      success: true,
      leadId,
      appointmentId,
    })
  } catch (error: any) {
    console.error("Error scheduling appointment:", error)
    return NextResponse.json({ error: error.message || "Failed to schedule appointment" }, { status: 500 })
  }
}
