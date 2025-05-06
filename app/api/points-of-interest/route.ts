import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get("city")
    const state = searchParams.get("state")
    const latitude = searchParams.get("latitude")
    const longitude = searchParams.get("longitude")

    console.log(`POI API: Received parameters:`, { city, state, latitude, longitude })

    // If we have lat/long, use those directly
    if (latitude && longitude) {
      return fetchPointsOfInterestByCoordinates(latitude, longitude)
    }

    // If we have city/state, geocode them first
    if (city && state) {
      return geocodeAndFetchPOI(city, state)
    }

    // If we don't have either set of parameters
    return NextResponse.json(
      {
        error: "Either latitude/longitude or city/state parameters are required",
      },
      { status: 400 },
    )
  } catch (error) {
    console.error("Points of interest error:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch points of interest",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

async function geocodeAndFetchPOI(city: string, state: string) {
  console.log(`POI API: Geocoding ${city}, ${state}`)

  const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

  if (!mapboxToken) {
    return NextResponse.json({ error: "Mapbox access token is not configured" }, { status: 500 })
  }

  // First geocode the city and state to get coordinates
  const geocodeUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    city,
  )}, ${encodeURIComponent(state)}.json?access_token=${mapboxToken}&limit=1`

  const geocodeResponse = await fetch(geocodeUrl)

  if (!geocodeResponse.ok) {
    const errorText = await geocodeResponse.text()
    console.error(`Mapbox Geocoding API error: ${errorText}`)
    return NextResponse.json(
      {
        error: `Failed to geocode location: ${geocodeResponse.status} ${geocodeResponse.statusText}`,
        details: errorText,
      },
      { status: geocodeResponse.status },
    )
  }

  const geocodeData = await geocodeResponse.json()

  if (!geocodeData.features || geocodeData.features.length === 0) {
    console.error("No geocoding results found for:", { city, state })
    return NextResponse.json(
      {
        error: `Location not found: ${city}, ${state}`,
      },
      { status: 404 },
    )
  }

  const [longitude, latitude] = geocodeData.features[0].center
  console.log(`POI API: Geocoded ${city}, ${state} to:`, { latitude, longitude })

  // Now fetch POIs with the coordinates
  return fetchPointsOfInterestByCoordinates(latitude.toString(), longitude.toString())
}

async function fetchPointsOfInterestByCoordinates(latitude: string, longitude: string) {
  console.log(`POI API: Fetching POIs for coordinates:`, { latitude, longitude })

  const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

  if (!mapboxToken) {
    return NextResponse.json({ error: "Mapbox access token is not configured" }, { status: 500 })
  }

  // Fetch points of interest from Mapbox
  // We'll search for parks, attractions, and landmarks
  const categories = ["park", "museum", "landmark", "attraction", "garden"]
  const pois = []

  for (const category of categories) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${category}.json?proximity=${longitude},${latitude}&limit=3&access_token=${mapboxToken}`

    const response = await fetch(url)

    if (!response.ok) {
      console.error(`Mapbox API error for ${category}:`, await response.text())
      continue
    }

    const data = await response.json()

    if (data && data.features && Array.isArray(data.features)) {
      for (const feature of data.features) {
        pois.push({
          id: feature.id,
          name: feature.text,
          type: category,
          address: feature.place_name,
          coordinates: {
            latitude: feature.center[1],
            longitude: feature.center[0],
          },
          distance: feature.properties?.distance || 0,
        })
      }
    }
  }

  console.log(`POI API: Found ${pois.length} points of interest`)
  return NextResponse.json(pois)
}
