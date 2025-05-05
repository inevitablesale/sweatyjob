import { NextResponse } from "next/server"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies })

  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()

    return NextResponse.json({
      authenticated: !!session,
      user: session?.user || null,
    })
  } catch (error) {
    console.error("Error checking authentication:", error)
    return NextResponse.json(
      {
        authenticated: false,
        error: "Failed to check authentication status",
      },
      { status: 500 },
    )
  }
}
