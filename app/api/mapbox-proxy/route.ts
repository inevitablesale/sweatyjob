import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")

  if (!query) {
    return NextResponse.json({ error: "Query parameter is required" }, { status: 400 })
  }

  try {
    const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

    if (!mapboxToken) {
      return NextResponse.json({ error: "Mapbox token not configured" }, { status: 500 })
    }

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxToken}&limit=1&types=place`,
      { headers: { "Content-Type": "application/json" } },
    )

    if (!response.ok) {
      throw new Error(`Mapbox API error: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in Mapbox proxy:", error)
    return NextResponse.json({ error: "Failed to geocode location" }, { status: 500 })
  }
}
