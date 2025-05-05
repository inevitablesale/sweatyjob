import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/lib/supabase/database.types"

// Initialize Supabase client
const supabase = createClient<Database>(process.env.SUPABASE_URL || "", process.env.SUPABASE_ANON_KEY || "")

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")

    if (!id) {
      return NextResponse.json({ error: "Appointment ID is required" }, { status: 400 })
    }

    // Fetch appointment details
    const { data, error } = await supabase.from("appointments").select("*").eq("id", id).single()

    if (error) {
      throw error
    }

    if (!data) {
      return NextResponse.json({ error: "Appointment not found" }, { status: 404 })
    }

    // Format appointment data for the client
    const appointment = {
      id: data.id,
      address: data.address,
      appointmentDate: data.appointment_date,
      timeSlot: data.time_slot,
      status: data.status,
    }

    return NextResponse.json({ appointment })
  } catch (error: any) {
    console.error("Error fetching appointment details:", error)
    return NextResponse.json({ error: error.message || "Failed to fetch appointment details" }, { status: 500 })
  }
}
