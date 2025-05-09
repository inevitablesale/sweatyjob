/**
 * Utility functions for fetching neighborhood data from Wikipedia
 */

// Function to get neighborhoods for a city using Wikipedia's GeoSearch API
async function getNeighborhoodsFromWikipedia(city: string, state: string): Promise<string[] | null> {
  console.log(`🔍 Searching for neighborhoods in ${city}, ${state}`)

  try {
    // First, get the coordinates for the city
    const cityCoordinates = await getCityCoordinates(city, state)

    if (!cityCoordinates) {
      console.error(`❌ Could not find coordinates for ${city}, ${state}`)
      return null
    }

    console.log(`🌍 Using coordinates for ${city}: lat=${cityCoordinates.latitude}, lon=${cityCoordinates.longitude}`)

    // Use Wikipedia's GeoSearch API to find articles near these coordinates
    const geoSearchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${cityCoordinates.latitude}|${cityCoordinates.longitude}&gsradius=10000&gslimit=50&format=json&origin=*`
    console.log(`🔍 GeoSearch URL: ${geoSearchUrl}`)

    const response = await fetch(geoSearchUrl, {
      headers: {
        "User-Agent": "SweatyJob/1.0 (https://sweatyjob.com; info@sweatyjob.com)",
      },
    })

    if (!response.ok) {
      console.error(`❌ Wikipedia GeoSearch API responded with status: ${response.status}`)
      return null
    }

    const data = await response.json()
    console.log(`📊 GeoSearch found ${data.query.geosearch.length} nearby articles`)

    // Filter results to likely neighborhoods
    // This is a heuristic approach - we look for titles that contain common neighborhood indicators
    const neighborhoodKeywords = [
      "neighborhood",
      "district",
      "heights",
      "park",
      "village",
      "gardens",
      "hills",
      "square",
      "terrace",
      "commons",
      "estates",
      "historic district",
    ]

    const cityLower = city.toLowerCase()
    const stateLower = state.toLowerCase()

    // Extract potential neighborhood names
    const neighborhoods = data.query.geosearch
      .filter((item: any) => {
        const title = item.title.toLowerCase()

        // Skip articles about the city itself
        if (title === cityLower || title === `${cityLower}, ${stateLower}`) {
          return false
        }

        // Include if it contains a neighborhood keyword
        return neighborhoodKeywords.some((keyword) => title.includes(keyword.toLowerCase()))
      })
      .map((item: any) => {
        // Clean up the title to extract just the neighborhood name
        let name = item.title

        // Remove city and state from the name if present
        name = name.replace(new RegExp(`${city},?\\s*${state}`, "i"), "")
        name = name.replace(new RegExp(`${city}`, "i"), "")

        // Remove common suffixes
        name = name.replace(/(neighborhood|district|historic district)$/i, "")

        // Trim whitespace and commas
        name = name.trim().replace(/^,|,$/g, "").trim()

        return name
      })
      .filter(Boolean) // Remove empty strings

    if (neighborhoods.length > 0) {
      console.log(`✅ Found ${neighborhoods.length} neighborhoods via GeoSearch: ${neighborhoods.join(", ")}`)
      return neighborhoods
    }

    console.log(`⚠️ No neighborhoods found via GeoSearch`)
    return null
  } catch (error) {
    console.error(`❌ Error fetching neighborhoods from Wikipedia:`, error)
    return null
  }
}

// Helper function to get city coordinates using Mapbox
async function getCityCoordinates(city: string, state: string) {
  try {
    // This should only be used server-side
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

// Function to format neighborhood list as text
export function formatNeighborhoodList(neighborhoods: string[]): string {
  if (!neighborhoods || neighborhoods.length === 0) {
    return "throughout all neighborhoods"
  }

  // Limit to 5 neighborhoods for readability
  const limitedList = neighborhoods.slice(0, 5)

  if (limitedList.length === 1) {
    return limitedList[0]
  }

  if (limitedList.length === 2) {
    return `${limitedList[0]} and ${limitedList[1]}`
  }

  const lastNeighborhood = limitedList[limitedList.length - 1]
  return `${limitedList.slice(0, -1).join(", ")}, and ${lastNeighborhood}`
}

// Function to get neighborhood text with fallback for known cities
export async function getNeighborhoodText(city: string, state: string): Promise<string> {
  console.log(`🏙️ Getting neighborhood text for ${city}, ${state}`)

  try {
    // Try to fetch from Wikipedia
    const neighborhoods = await getNeighborhoodsFromWikipedia(city, state)

    if (neighborhoods && neighborhoods.length > 0) {
      return formatNeighborhoodList(neighborhoods)
    }

    // If we don't have data, be transparent about it
    console.log(`⚠️ No neighborhoods found, using generic text`)
    return `throughout ${city}`
  } catch (error) {
    console.error(`❌ Error getting neighborhoods for ${city}, ${state}:`, error)
    return `throughout ${city}`
  }
}
