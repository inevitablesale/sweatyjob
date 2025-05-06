import { type NextRequest, NextResponse } from "next/server"

const ATTOM_API_KEY = "67d69b140c2c97dfadd3f9f7f96e9f6b"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")
  const address = searchParams.get("address")
  const radius = searchParams.get("radius") || "2" // Default 2 miles
  const category = searchParams.get("category") || "" // Optional category filter

  if ((!lat || !lng) && !address) {
    return NextResponse.json({ error: "Either coordinates or address is required" }, { status: 400 })
  }

  try {
    let url = "https://api.gateway.attomdata.com/v4/neighborhood/poi?"

    // Add either point or address parameter
    if (lat && lng) {
      url += `point=POINT(${lng},${lat})&radius=${radius}`
    } else if (address) {
      url += `address=${encodeURIComponent(address)}&radius=${radius}`
    }

    // Add optional category filter
    if (category) {
      url += `&categoryName=${encodeURIComponent(category)}`
    }

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
        APIKey: ATTOM_API_KEY,
      },
    })

    if (!response.ok) {
      throw new Error(`ATTOM API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching ATTOM POI data:", error)
    return NextResponse.json({ error: "Failed to fetch POI data" }, { status: 500 })
  }
}
