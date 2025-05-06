import { type NextRequest, NextResponse } from "next/server"

// This API route handles geocoding city/state to coordinates
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const city = searchParams.get("city")
  const state = searchParams.get("state")

  if (!city || !state) {
    return NextResponse.json({ error: "City and state are required" }, { status: 400 })
  }

  try {
    // Get MapBox token
    const tokenResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ""}/api/get-mapbox-token`)
    const { token } = await tokenResponse.json()

    if (!token) {
      throw new Error("No MapBox token available")
    }

    // Geocode the city/state to get coordinates
    const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      city + ", " + state,
    )}.json?access_token=${token}&types=place`

    const geocodeResponse = await fetch(geocodeUrl)
    const geocodeData = await geocodeResponse.json()

    if (!geocodeData.features || geocodeData.features.length === 0) {
      return NextResponse.json({ error: "Location not found" }, { status: 404 })
    }

    const [lng, lat] = geocodeData.features[0].center
    const placeName = geocodeData.features[0].place_name
    const bbox = geocodeData.features[0].bbox

    return NextResponse.json({
      coordinates: { lat, lng },
      placeName,
      bbox,
    })
  } catch (error) {
    console.error("Error geocoding location:", error)
    return NextResponse.json({ error: "Failed to geocode location" }, { status: 500 })
  }
}
