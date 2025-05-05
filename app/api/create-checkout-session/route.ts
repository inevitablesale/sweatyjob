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

    const { plan } = await request.json()

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

    // Use the provided product ID for the smart yard membership
    const productId = "prod_S6yrDkljkQ7GpR"

    // Get the price ID for the selected plan
    let priceId: string

    if (plan === "founding") {
      // Use the specific price ID for the founding member plan
      priceId = "price_1RCku4DKnI7xAHMKgcmTYZBx"
    } else {
      // For the standard plan, fetch the higher priced option
      const prices = await stripe.prices.list({
        product: productId,
        active: true,
      })

      // Find the standard price (assuming it's the higher price)
      const standardPrice = prices.data
        .filter((price) => price.id !== "price_1RCku4DKnI7xAHMKgcmTYZBx") // Exclude the founding price
        .sort((a, b) => (b.unit_amount || 0) - (a.unit_amount || 0))[0]

      priceId = standardPrice.id
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${request.headers.get("origin")}/dashboard?success=true`,
      cancel_url: `${request.headers.get("origin")}/dashboard/subscribe?canceled=true`,
      metadata: {
        userId: userData.user.id,
        plan,
      },
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error: any) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
