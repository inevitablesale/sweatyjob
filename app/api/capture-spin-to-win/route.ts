import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const phone = formData.get("phone") as string
    const prize = formData.get("prize") as string

    if (!phone) {
      return NextResponse.json({ error: "Phone number is required" }, { status: 400 })
    }

    // Create Supabase client
    const supabase = createClient()

    // Insert into leads table with spin-to-win source
    const { error } = await supabase.from("leads").insert({
      phone: phone,
      source: "spin-to-win",
      notes: `Won prize: ${prize}`,
      status: "new",
    })

    if (error) {
      console.error("Error inserting lead:", error)
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in capture-spin-to-win:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
