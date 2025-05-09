import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  // Get parameters with fallbacks
  const lat = searchParams.get("lat") || searchParams.get("latitude")
  const lng = searchParams.get("lng") || searchParams.get("longitude")
  const radius = searchParams.get("radius") || "5000" // Default 5km radius
  const type = searchParams.get("type") || "all" // Can be "poi", "neighborhood", or "all"

  console.log(`[POI API] Fetching ${type} for lat=${lat}, lng=${lng}, radius=${radius}`)

  // Validate coordinates
  if (!lat || !lng || isNaN(Number(lat)) || isNaN(Number(lng))) {
    console.error(`[POI API] Invalid coordinates: lat=${lat}, lng=${lng}`)
    return NextResponse.json(
      {
        error: "Invalid coordinates",
        features: [],
        neighborhoods: [],
      },
      { status: 400 },
    )
  }

  try {
    // Use Mapbox Places API to find nearby POIs or neighborhoods
    // Server-side only
    const mapboxAccessToken = process.env.MAPBOX_ACCESS_TOKEN

    if (!mapboxAccessToken) {
      console.error("[POI API] Mapbox access token not found")
      return NextResponse.json(
        {
          error: "Mapbox access token not found",
          features: [],
          neighborhoods: [],
        },
        { status: 500 },
      )
    }

    // Determine what to search for based on type parameter
    let searchQuery = "poi"
    if (type === "neighborhood") {
      searchQuery = "neighborhood"
    }

    console.log(`[POI API] Calling Mapbox Places API for ${searchQuery}`)

    // Add a timeout to the fetch request
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery}.json?proximity=${lng},${lat}&radius=${radius}&limit=25&types=poi,place,address&access_token=${mapboxAccessToken}`,
      { signal: controller.signal },
    )

    clearTimeout(timeoutId)

    if (!response.ok) {
      console.error(`[POI API] Mapbox API error: ${response.status} ${response.statusText}`)
      throw new Error(`Mapbox API error: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    console.log(`[POI API] Found ${data.features?.length || 0} features`)

    // Transform the response
    const features =
      data.features
        ?.map((feature: any) => {
          // Extract category from Mapbox response
          let category = "other"

          // Check if this is a neighborhood
          if (feature.id?.includes("neighborhood") || feature.place_type?.includes("neighborhood")) {
            category = "neighborhood"
          }
          // Check for other place types with more detailed categorization
          else if (feature.place_type?.includes("poi")) {
            // Try to categorize based on properties first
            if (feature.properties?.category) {
              category = feature.properties.category
            }
            // Then try to categorize based on text content with more comprehensive keywords
            else if (
              feature.text?.toLowerCase().includes("park") ||
              feature.text?.toLowerCase().includes("garden") ||
              feature.text?.toLowerCase().includes("field") ||
              feature.text?.toLowerCase().includes("playground") ||
              feature.text?.toLowerCase().includes("recreation")
            ) {
              category = "park"
            } else if (
              feature.text?.toLowerCase().includes("school") ||
              feature.text?.toLowerCase().includes("college") ||
              feature.text?.toLowerCase().includes("university") ||
              feature.text?.toLowerCase().includes("academy") ||
              feature.text?.toLowerCase().includes("education")
            ) {
              category = "school"
            } else if (
              feature.text?.toLowerCase().includes("restaurant") ||
              feature.text?.toLowerCase().includes("cafe") ||
              feature.text?.toLowerCase().includes("bar") ||
              feature.text?.toLowerCase().includes("food") ||
              feature.text?.toLowerCase().includes("diner") ||
              feature.text?.toLowerCase().includes("grill") ||
              feature.text?.toLowerCase().includes("bistro") ||
              feature.text?.toLowerCase().includes("pizza") ||
              feature.text?.toLowerCase().includes("coffee")
            ) {
              category = "food"
            } else if (
              feature.text?.toLowerCase().includes("shop") ||
              feature.text?.toLowerCase().includes("store") ||
              feature.text?.toLowerCase().includes("mall") ||
              feature.text?.toLowerCase().includes("market") ||
              feature.text?.toLowerCase().includes("retail") ||
              feature.text?.toLowerCase().includes("outlet")
            ) {
              category = "shop"
            } else if (
              feature.text?.toLowerCase().includes("hospital") ||
              feature.text?.toLowerCase().includes("clinic") ||
              feature.text?.toLowerCase().includes("medical") ||
              feature.text?.toLowerCase().includes("doctor") ||
              feature.text?.toLowerCase().includes("health") ||
              feature.text?.toLowerCase().includes("pharmacy")
            ) {
              category = "medical"
            } else {
              category = "poi" // Default to generic POI if we can't determine a specific category
            }
          }
          // Check for address place types
          else if (feature.place_type?.includes("address")) {
            category = "address"
          }

          // Validate coordinates before returning
          if (
            !feature.center ||
            feature.center.length < 2 ||
            isNaN(feature.center[0]) ||
            isNaN(feature.center[1]) ||
            !isFinite(feature.center[0]) ||
            !isFinite(feature.center[1])
          ) {
            console.error(`[POI API] Invalid coordinates for feature: ${feature.id}`, feature.center)
            return null
          }

          return {
            id: feature.id,
            name: feature.text,
            category: category,
            address: feature.place_name,
            latitude: feature.center[1],
            longitude: feature.center[0],
            distance: feature.properties?.distance || 0,
            place_type: feature.place_type, // Include the raw place_type for debugging
          }
        })
        .filter(Boolean) || [] // Filter out null values

    // Filter by type if requested
    let filteredFeatures = features
    if (type === "neighborhood") {
      filteredFeatures = features.filter((f) => f.category === "neighborhood")
      console.log(`[POI API] Filtered to ${filteredFeatures.length} neighborhoods`)
    } else if (type === "poi") {
      filteredFeatures = features.filter((f) => f.category !== "neighborhood")
      console.log(`[POI API] Filtered to ${filteredFeatures.length} POIs (non-neighborhoods)`)
    } else {
      console.log(`[POI API] Returning all ${filteredFeatures.length} features (no filtering)`)
    }

    // If we have no features, generate some fake ones
    if (filteredFeatures.length === 0) {
      console.log(`[POI API] No features found in the requested area`)
      return NextResponse.json({
        features: [],
        neighborhoods: [],
        message: "No points of interest found in this area",
      })
    }

    console.log(`[POI API] Returning ${filteredFeatures.length} filtered features`)
    return NextResponse.json({
      features: filteredFeatures,
      // Include a list of neighborhoods for meta descriptions
      neighborhoods: features.filter((f) => f.category === "neighborhood").map((n) => n.name),
      source: "mapbox",
    })
  } catch (error) {
    console.error("[POI API] Error fetching data:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch map data",
        features: [],
        neighborhoods: [],
      },
      { status: 500 },
    )
  }
}
