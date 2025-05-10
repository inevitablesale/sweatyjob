import { NextResponse } from "next/server"
import { getMapServiceKey } from "@/lib/secure-env"

export async function GET() {
  try {
    const apiKey = getMapServiceKey()

    if (!apiKey) {
      return NextResponse.json({ error: "Map service not configured" }, { status: 500 })
    }

    // Return minimal configuration needed for map initialization
    return NextResponse.json({
      success: true,
      config: {
        defaultCenter: [-95.7129, 37.0902],
        defaultZoom: 3,
        mapStyle: "streets-v11",
      },
    })
  } catch (error) {
    console.error("Error in map initialization:", error)
    return NextResponse.json({ error: "Failed to initialize map" }, { status: 500 })
  }
}
