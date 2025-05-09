import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  const url = searchParams.get("url")
  const proximity = searchParams.get("proximity")
  const radius = searchParams.get("radius") || "5000"
  const type = searchParams.get("type") || "geocoding"

  // Get the Mapbox token from environment variables (server-side only)
  const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

  if (!mapboxToken) {
    return NextResponse.json({ error: "Mapbox token not configured" }, { status: 500 })
  }

  try {
    let response

    // Handle different types of Mapbox API requests
    if (type === "style" && url) {
      // Handle style requests
      response = await fetch(`${url}?access_token=${mapboxToken}`, { headers: { "Content-Type": "application/json" } })
    } else if (query) {
      // Handle geocoding requests
      const proximityParam = proximity ? `&proximity=${proximity}` : ""
      const radiusParam = radius ? `&radius=${radius}` : ""

      response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxToken}${proximityParam}${radiusParam}&limit=5`,
        { headers: { "Content-Type": "application/json" } },
      )
    } else {
      return NextResponse.json({ error: "Invalid request parameters" }, { status: 400 })
    }

    if (!response.ok) {
      throw new Error(`Mapbox API error: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in Mapbox proxy:", error)
    return NextResponse.json({ error: "Failed to process Mapbox request" }, { status: 500 })
  }
}
