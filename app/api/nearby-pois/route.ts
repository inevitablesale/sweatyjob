import { NextResponse } from "next/server"

export async function GET(request: Request) {
  console.log("🔍 API: /api/nearby-pois endpoint called")

  // Get query parameters
  const url = new URL(request.url)
  const latitude = url.searchParams.get("latitude")
  const longitude = url.searchParams.get("longitude")
  const radius = url.searchParams.get("radius") || "1500"

  if (!latitude || !longitude) {
    console.error("❌ API: Missing required parameters: latitude and longitude")
    return NextResponse.json({ error: "Missing required parameters: latitude and longitude" }, { status: 400 })
  }

  console.log(`🔍 API: Fetching POIs near lat: ${latitude}, lng: ${longitude}, radius: ${radius}m`)

  try {
    // Use Mapbox API to get nearby points of interest
    const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

    if (!mapboxToken) {
      console.error("❌ API: MAPBOX_ACCESS_TOKEN is not defined")
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 })
    }

    const mapboxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/park.json?proximity=${longitude},${latitude}&limit=10&access_token=${mapboxToken}`

    console.log(`📤 API: Calling Mapbox API: ${mapboxUrl.replace(mapboxToken, "REDACTED")}`)

    const response = await fetch(mapboxUrl)

    if (!response.ok) {
      console.error(`❌ API: Mapbox API error: ${response.status} ${response.statusText}`)
      return NextResponse.json({ error: "Error fetching points of interest" }, { status: response.status })
    }

    const data = await response.json()
    console.log(`✅ API: Received ${data.features?.length || 0} POIs from Mapbox`)

    return NextResponse.json(data)
  } catch (error) {
    console.error("❌ API: Error in nearby-pois route:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
