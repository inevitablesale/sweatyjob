import { NextResponse } from "next/server"

export async function GET() {
  try {
    // Get the MapBox token from environment variables
    const token = process.env.MAPBOX_ACCESS_TOKEN

    if (!token) {
      console.error("MAPBOX_ACCESS_TOKEN not found in environment variables")
      return NextResponse.json({ error: "MapBox token not configured" }, { status: 500 })
    }

    // Log the token (first few characters) for debugging
    console.log(`MapBox token available (starts with: ${token.substring(0, 5)}...)`)

    return NextResponse.json({ token })
  } catch (error) {
    console.error("Error retrieving MapBox token:", error)
    return NextResponse.json({ error: "Failed to retrieve MapBox token" }, { status: 500 })
  }
}
