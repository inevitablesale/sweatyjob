"use server"

// Server action for geocoding to avoid exposing the Mapbox token
export async function getCityCoordinates(city: string, state: string) {
  try {
    const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN
    if (!mapboxToken) {
      console.error("Mapbox token not found")
      return null
    }

    const query = encodeURIComponent(`${city}, ${state}`)
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxToken}&limit=1&types=place`,
      { cache: "force-cache" }, // Cache the response to improve performance
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch coordinates: ${response.statusText}`)
    }

    const data = await response.json()

    if (data.features && data.features.length > 0) {
      const [longitude, latitude] = data.features[0].center
      return { latitude, longitude }
    }

    return null
  } catch (error) {
    console.error("Error fetching city coordinates:", error)
    return null
  }
}
