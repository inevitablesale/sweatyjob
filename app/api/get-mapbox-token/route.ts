import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Use MAPBOX_ACCESS_TOKEN (server-side only) instead of NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    const token = process.env.MAPBOX_ACCESS_TOKEN

    if (!token) {
      return NextResponse.json({ error: "Mapbox token not configured" }, { status: 500 })
    }

    // Return the token
    return NextResponse.json({ token })
  } catch (error) {
    console.error("Error getting Mapbox token:", error)
    return NextResponse.json({ error: "Failed to get Mapbox token" }, { status: 500 })
  }
}
