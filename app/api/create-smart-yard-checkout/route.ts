import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"
import { captureLead } from "@/lib/lead-capture"

export async function POST(request: Request) {
  try {
    const { customerInfo, plan } = await request.json()

    // Validate required fields
    if (!customerInfo.email || !customerInfo.firstName || !customerInfo.lastName || !customerInfo.address) {
      return NextResponse.json({ error: "Missing required customer information" }, { status: 400 })
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
        metadata: {
          source: "website_purchase",
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
        metadata: {
          source: "website_purchase",
        },
      })
    }

    // Store customer info using our unified lead capture system
    const { id: leadId } = await captureLead({
      firstName: customerInfo.firstName,
      lastName: customerInfo.lastName,
      email: customerInfo.email,
      phone: customerInfo.phone,
      address: customerInfo.address,
      city: customerInfo.city,
      state: customerInfo.state,
      zipCode: customerInfo.zipCode,
      source: "smart_yard_purchase",
      status: "checkout_started",
      stripeCustomerId: customer.id,
    })

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
      customer: customer.id,
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${request.headers.get("origin")}/purchase/success?session_id={CHECKOUT_SESSION_ID}&lead_id=${leadId}`,
      cancel_url: `${request.headers.get("origin")}/purchase/smart-yard?canceled=true`,
      metadata: {
        leadId,
        customerEmail: customerInfo.email,
        customerName: `${customerInfo.firstName} ${customerInfo.lastName}`,
        plan,
      },
      billing_address_collection: "auto",
      customer_update: {
        address: "auto",
        name: "auto",
      },
      phone_number_collection: {
        enabled: true,
      },
    })

    return NextResponse.json({ sessionId: session.id, leadId })
  } catch (error: any) {
    console.error("Error creating checkout session:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
