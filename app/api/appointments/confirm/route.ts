import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/lib/supabase/database.types"
import stripe from "@/lib/stripe"

// Initialize Supabase client
const supabase = createClient<Database>(process.env.SUPABASE_URL || "", process.env.SUPABASE_SERVICE_ROLE_KEY || "")

export async function POST(request: Request) {
  try {
    const { appointmentId, paymentIntentId } = await request.json()

    if (!appointmentId || !paymentIntentId) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Verify payment intent status
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId)

    if (paymentIntent.status !== "succeeded") {
      return NextResponse.json({ error: "Payment has not been completed" }, { status: 400 })
    }

    // Update appointment status
    const { error } = await supabase
      .from("appointments")
      .update({
        status: "confirmed",
      })
      .eq("id", appointmentId)

    if (error) {
      throw error
    }

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error confirming appointment:", error)
    return NextResponse.json({ error: error.message || "Failed to confirm appointment" }, { status: 500 })
  }
}
