import { NextResponse } from "next/server"

// This route provides a secure proxy for Mapbox requests without exposing the token
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const endpoint = searchParams.get("endpoint")
    const query = searchParams.get("query")

    if (!endpoint) {
      return NextResponse.json({ error: "Missing endpoint parameter" }, { status: 400 })
    }

    // Use the server-side token (not the NEXT_PUBLIC one)
    const token = process.env.MAPBOX_ACCESS_TOKEN

    if (!token) {
      console.error("Mapbox token is missing in environment variables")
      return NextResponse.json({ error: "Mapbox configuration missing" }, { status: 500 })
    }

    // Build the Mapbox API URL
    let mapboxUrl = `https://api.mapbox.com/${endpoint}?access_token=${token}`

    // Add query parameters if provided
    if (query) {
      mapboxUrl += `&${query}`
    }

    console.log(`Proxying request to Mapbox: ${endpoint}`)

    // Proxy the request to Mapbox
    const response = await fetch(mapboxUrl)

    if (!response.ok) {
      console.error(`Mapbox API error: ${response.status} ${response.statusText}`)
      return NextResponse.json({ error: `Mapbox API error: ${response.status}` }, { status: response.status })
    }

    const data = await response.json()

    // Return the data without exposing the token
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error proxying Mapbox request:", error)
    return NextResponse.json({ error: "Failed to process Mapbox request" }, { status: 500 })
  }
}
