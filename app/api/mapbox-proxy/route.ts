import { type NextRequest, NextResponse } from "next/server"
import { getMapServiceKey } from "@/lib/secure-env"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
  }

  try {
    // Get the key securely without direct environment variable reference
    const apiKey = getMapServiceKey()

    if (!apiKey) {
      return NextResponse.json({ error: "Geocoding service not configured" }, { status: 500 })
    }

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${apiKey}&limit=1&types=place`,
      { headers: { "Content-Type": "application/json" } },
    )

    if (!response.ok) {
      throw new Error(`Geocoding API error: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in geocoding proxy:", error)
    return NextResponse.json({ error: "Failed to geocode location" }, { status: 500 })
  }
}
