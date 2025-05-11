// Add logging to the geocoding utility function

export async function getCityCoordinates(city: string, state: string) {
  if (!city) {
    console.log(`⚠️ Geocoding: No city provided`)
    return null
  }

  console.log(`🔍 Geocoding: Getting coordinates for ${city}, ${state}`)

  try {
    const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

    if (!mapboxToken) {
      console.error(`❌ Geocoding: Mapbox token is missing`)
      throw new Error("Mapbox token is missing")
    }

    const query = `${city}, ${state}`
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      query,
    )}.json?access_token=${mapboxToken}&limit=1`

    console.log(`📤 Geocoding: Calling Mapbox API for "${query}"`)

    const response = await fetch(geocodingUrl)
    console.log(`📥 Geocoding: Response status: ${response.status} ${response.statusText}`)

    if (!response.ok) {
      console.error(`❌ Geocoding: Mapbox API error: ${response.status}`)
      throw new Error(`Mapbox API error: ${response.status}`)
    }

    const data = await response.json()
    console.log(`✅ Geocoding: Found ${data.features?.length || 0} results for "${query}"`)

    if (data.features && data.features.length > 0) {
      console.log(`✅ Geocoding: Coordinates for "${query}": ${data.features[0].center}`)
    }

    return data
  } catch (error) {
    console.error(`❌ Geocoding: Error getting coordinates for ${city}, ${state}:`, error)
    return null
  }
}
