import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/lib/supabase/database.types"

// Initialize Supabase client
const supabase = createClient<Database>(process.env.SUPABASE_URL || "", process.env.SUPABASE_ANON_KEY || "")

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get("date")

    if (!date) {
      return NextResponse.json({ error: "Date parameter is required" }, { status: 400 })
    }

    // First, get all available time slots for the given date
    const { data: availableSlots, error: availableSlotsError } = await supabase
      .from("available_time_slots")
      .select("time_slot")
      .eq("date", date)
      .eq("is_available", true)
      .order("time_slot")

    if (availableSlotsError) {
      throw availableSlotsError
    }

    // Next, get booked appointments for the given date
    const { data: bookedAppointments, error: bookedError } = await supabase
      .from("appointments")
      .select("time_slot")
      .eq("appointment_date::date", date) // Extract date part only
      .neq("status", "cancelled")
      .order("time_slot")

    if (bookedError) {
      throw bookedError
    }

    // Create a set of time slots to exclude (booked slots plus buffer time)
    const excludedTimeSlots = new Set()

    bookedAppointments.forEach((appointment) => {
      const bookedTime = appointment.time_slot
      const [bookedHour, bookedMinute] = bookedTime.split(":").map(Number)

      // Add the booked time slot
      excludedTimeSlots.add(bookedTime)

      // Add buffer slots (2 hours before and after)
      for (let i = 1; i <= 2; i++) {
        // Add slots before
        const beforeHour = (bookedHour - i + 24) % 24
        excludedTimeSlots.add(`${beforeHour.toString().padStart(2, "0")}:${bookedMinute.toString().padStart(2, "0")}`)

        // Add slots after
        const afterHour = (bookedHour + i) % 24
        excludedTimeSlots.add(`${afterHour.toString().padStart(2, "0")}:${bookedMinute.toString().padStart(2, "0")}`)
      }
    })

    // Filter available time slots to exclude booked slots and buffer times
    const finalAvailableTimes = availableSlots
      .map((slot) => slot.time_slot)
      .filter((timeSlot) => !excludedTimeSlots.has(timeSlot))

    return NextResponse.json({ availableTimes: finalAvailableTimes })
  } catch (error: any) {
    console.error("Error fetching available times:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch available times" }, { status: 500 })
  }
}
