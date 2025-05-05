import { NextResponse } from "next/server"

export async function GET() {
  // Only return the publishable key, which is safe to expose to the client
  return NextResponse.json({
    publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "",
  })
}
