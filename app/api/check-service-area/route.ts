import { NextResponse } from "next/server"

// Calculate distance between two coordinates using the Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 3958.8 // Earth's radius in miles
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  return distance
}

export async function POST(request: Request) {
  try {
    const { coordinates, centerCoordinates, radius } = await request.json()

    if (!coordinates || !centerCoordinates || !radius) {
      return NextResponse.json({ error: "Missing required parameters" }, { status: 400 })
    }

    // Calculate distance between the provided coordinates and the center
    const distance = calculateDistance(coordinates.lat, coordinates.lng, centerCoordinates.lat, centerCoordinates.lng)

    // Check if the distance is within the radius
    const isWithinServiceArea = distance <= radius

    return NextResponse.json({
      isWithinServiceArea,
      distance,
      unit: "miles",
    })
  } catch (error: any) {
    console.error("Error checking service area:", error)
    return NextResponse.json({ error: error.message || "Failed to check service area" }, { status: 500 })
  }
}
