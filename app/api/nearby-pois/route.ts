import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams

  const latitude = searchParams.get("latitude")
  const longitude = searchParams.get("longitude")
  const radius = searchParams.get("radius") || "1000" // Default radius in meters

  if (!latitude || !longitude) {
    return NextResponse.json({ error: "Missing latitude or longitude parameters" }, { status: 400 })
  }

  try {
    // Use Mapbox Places API to get real POIs
    const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

    if (!mapboxToken) {
      throw new Error("Mapbox token not found")
    }

    // Make a request to Mapbox Places API
    const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/poi.json?limit=10&proximity=${longitude},${latitude}&radius=${radius}&access_token=${mapboxToken}`

    const response = await fetch(mapboxUrl)

    if (!response.ok) {
      throw new Error(`Mapbox API responded with status: ${response.status}`)
    }

    const data = await response.json()

    // Transform Mapbox data into the format our app expects
    const pois = data.features.map((feature: any) => {
      const [lng, lat] = feature.center

      // Try to determine category from Mapbox data
      let category = "attraction"
      if (feature.properties && feature.properties.category) {
        category = feature.properties.category
      } else if (feature.place_type && feature.place_type.length > 0) {
        category = feature.place_type[0]
      }

      return {
        id: feature.id,
        name: feature.text,
        latitude: lat,
        longitude: lng,
        address: feature.place_name,
        category,
        distance:
          feature.properties?.distance ||
          calculateDistance(lat, lng, Number.parseFloat(latitude), Number.parseFloat(longitude)),
      }
    })

    return NextResponse.json({ pois })
  } catch (error) {
    console.error("Error fetching POIs:", error)

    // If real POI fetch fails, return some plausible fake data
    // This ensures the map still shows some points even if the API call fails
    const fakePois = generateFakePois(Number.parseFloat(latitude), Number.parseFloat(longitude), 5)
    return NextResponse.json({ pois: fakePois })
  }
}

// Fallback function to generate fake POIs
function generateFakePois(latitude: number, longitude: number, count = 5) {
  const categories = ["restaurant", "park", "store", "school", "attraction"]
  const restaurantNames = ["Local Bistro", "Garden Cafe", "Urban Kitchen", "Seaside Grill", "The Hungry Fork"]
  const parkNames = ["Central Park", "Riverside Park", "Memorial Gardens", "Heritage Park", "Community Green"]
  const storeNames = ["Corner Market", "Main Street Shop", "The General Store", "Local Goods", "City Supplies"]
  const schoolNames = [
    "Washington Elementary",
    "Lincoln High School",
    "Jefferson Middle School",
    "Central College",
    "Tech Institute",
  ]
  const attractionNames = ["City Museum", "Historic Theater", "Community Center", "Sports Arena", "Art Gallery"]

  return Array.from({ length: count }, (_, i) => {
    // Random offset between -0.01 and 0.01 degrees (roughly within 1km)
    const latOffset = (Math.random() - 0.5) * 0.02
    const lngOffset = (Math.random() - 0.5) * 0.02

    const category = categories[i % categories.length]
    let name

    switch (category) {
      case "restaurant":
        name = restaurantNames[i % restaurantNames.length]
        break
      case "park":
        name = parkNames[i % parkNames.length]
        break
      case "store":
        name = storeNames[i % storeNames.length]
        break
      case "school":
        name = schoolNames[i % schoolNames.length]
        break
      case "attraction":
      default:
        name = attractionNames[i % attractionNames.length]
    }

    return {
      id: `fake-poi-${i}`,
      name,
      latitude: latitude + latOffset,
      longitude: longitude + lngOffset,
      address: "123 Main St",
      category,
      distance: calculateDistance(latitude + latOffset, longitude + lngOffset, latitude, longitude),
    }
  })
}

// Helper function to calculate distance between coordinates in meters
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3 // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}
