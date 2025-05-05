import { NextResponse } from "next/server"
import { headers } from "next/headers"
import stripe from "@/lib/stripe"
import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/lib/supabase/database.types"

// Initialize Supabase admin client
const supabaseAdmin = createClient<Database>(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "",
)

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get("stripe-signature") as string

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET || "")
  } catch (error: any) {
    console.error(`Webhook signature verification failed: ${error.message}`)
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object
      await handleCheckoutSessionCompleted(session)
      break
    }
    case "invoice.paid": {
      const invoice = event.data.object
      await handleInvoicePaid(invoice)
      break
    }
    case "customer.subscription.updated": {
      const subscription = event.data.object
      await handleSubscriptionUpdated(subscription)
      break
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object
      await handleSubscriptionDeleted(subscription)
      break
    }
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}

async function handleCheckoutSessionCompleted(session: any) {
  // Get subscription details
  const subscription = await stripe.subscriptions.retrieve(session.subscription)
  const userId = session.metadata.userId
  const plan = session.metadata.plan

  // Update user profile with subscription details
  await supabaseAdmin
    .from("profiles")
    .update({
      subscription_status: "active",
      subscription_plan: plan,
      stripe_subscription_id: subscription.id,
      subscription_start_date: new Date(subscription.current_period_start * 1000).toISOString(),
      subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
    })
    .eq("id", userId)

  // Record payment
  await supabaseAdmin.from("payments").insert({
    user_id: userId,
    amount: session.amount_total,
    currency: session.currency,
    status: "succeeded",
    stripe_payment_id: session.payment_intent,
    payment_method: "card",
  })
}

async function handleInvoicePaid(invoice: any) {
  const subscription = await stripe.subscriptions.retrieve(invoice.subscription)
  const customerId = invoice.customer

  // Find user by Stripe customer ID
  const { data: profiles } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("stripe_customer_id", customerId)
    .limit(1)

  if (!profiles || profiles.length === 0) {
    console.error(`No user found with Stripe customer ID: ${customerId}`)
    return
  }

  const userId = profiles[0].id

  // Update subscription dates
  await supabaseAdmin
    .from("profiles")
    .update({
      subscription_status: "active",
      subscription_start_date: new Date(subscription.current_period_start * 1000).toISOString(),
      subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
    })
    .eq("id", userId)

  // Record payment
  await supabaseAdmin.from("payments").insert({
    user_id: userId,
    amount: invoice.amount_paid,
    currency: invoice.currency,
    status: "succeeded",
    stripe_payment_id: invoice.payment_intent,
    stripe_invoice_id: invoice.id,
    payment_method: "card",
    payment_method_last4: invoice.payment_method_details?.card?.last4,
  })
}

async function handleSubscriptionUpdated(subscription: any) {
  // Find user by subscription ID
  const { data: profiles } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("stripe_subscription_id", subscription.id)
    .limit(1)

  if (!profiles || profiles.length === 0) {
    console.error(`No user found with subscription ID: ${subscription.id}`)
    return
  }

  const userId = profiles[0].id

  // Update subscription status
  await supabaseAdmin
    .from("profiles")
    .update({
      subscription_status: subscription.status,
      subscription_end_date: new Date(subscription.current_period_end * 1000).toISOString(),
    })
    .eq("id", userId)
}

async function handleSubscriptionDeleted(subscription: any) {
  // Find user by subscription ID
  const { data: profiles } = await supabaseAdmin
    .from("profiles")
    .select("id")
    .eq("stripe_subscription_id", subscription.id)
    .limit(1)

  if (!profiles || profiles.length === 0) {
    console.error(`No user found with subscription ID: ${subscription.id}`)
    return
  }

  const userId = profiles[0].id

  // Update subscription status
  await supabaseAdmin
    .from("profiles")
    .update({
      subscription_status: "canceled",
    })
    .eq("id", userId)
}
