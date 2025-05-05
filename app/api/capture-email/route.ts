import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(request: Request) {
  try {
    const { email, source } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Create a Supabase client
    const supabase = createClient()

    // Insert the email into the leads table
    const { data, error } = await supabase.from("leads").insert([
      {
        email,
        source: source || "exit-intent-popup",
        status: "new",
        created_at: new Date().toISOString(),
      },
    ])

    if (error) {
      console.error("Error inserting email into Supabase:", error)
      return NextResponse.json({ error: "Failed to save email" }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
