import { NextResponse } from "next/server"
import { getServerSupabaseClient } from "@/lib/supabase/server"
import stripe from "@/lib/stripe"

export async function POST(request: Request) {
  try {
    const supabase = getServerSupabaseClient()
    const { data: userData } = await supabase.auth.getUser()

    if (!userData.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get user profile
    const { data: profile } = await supabase.from("profiles").select("*").eq("id", userData.user.id).single()

    // Create or retrieve Stripe customer
    let customerId = profile?.stripe_customer_id

    if (!customerId) {
      const customer = await stripe.customers.create({
        email: userData.user.email,
        name: `${profile?.first_name || ""} ${profile?.last_name || ""}`.trim() || undefined,
        metadata: {
          userId: userData.user.id,
        },
      })
      customerId = customer.id

      // Update profile with Stripe customer ID
      await supabase
        .from("profiles")
        .update({
          stripe_customer_id: customerId,
        })
        .eq("id", userData.user.id)
    }

    // Create setup intent
    const setupIntent = await stripe.setupIntents.create({
      customer: customerId,
      payment_method_types: ["card"],
      usage: "off_session",
    })

    return NextResponse.json({ clientSecret: setupIntent.client_secret })
  } catch (error: any) {
    console.error("Error creating setup intent:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
