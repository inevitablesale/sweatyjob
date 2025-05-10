import { type NextRequest, NextResponse } from "next/server"
import { getMapServiceKey } from "@/lib/secure-env"

export async function GET(request: NextRequest) {
  try {
    const apiKey = getMapServiceKey()

    if (!apiKey) {
      return NextResponse.json({ error: "Map service not configured" }, { status: 500 })
    }

    // Return the necessary map configuration without exposing the token directly
    return NextResponse.json({
      success: true,
      mapConfig: {
        style: "mapbox://styles/mapbox/streets-v11",
        // Other non-sensitive configuration options
        center: [-95.7129, 37.0902], // US center
        zoom: 3,
      },
    })
  } catch (error) {
    console.error("Error in map style API:", error)
    return NextResponse.json({ error: "Failed to get map configuration" }, { status: 500 })
  }
}
