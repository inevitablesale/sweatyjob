import { NextResponse } from "next/server"
import stripe from "@/lib/stripe"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get("sessionId")

  if (!sessionId) {
    return NextResponse.json({ error: "Session ID is required" }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    return NextResponse.json({
      customerName: session.metadata?.customerName || null,
      customerEmail: session.metadata?.customerEmail || null,
      plan: session.metadata?.plan || null,
    })
  } catch (error: any) {
    console.error("Error retrieving checkout session:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
