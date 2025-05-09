import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get("path")
  const query = searchParams.get("query")

  if (!path && !query) {
    return NextResponse.json({ error: "Path or query parameter is required" }, { status: 400 })
  }

  // Use the server-side environment variable
  const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN

  let url: string

  if (query) {
    url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${mapboxToken}`
  } else {
    // Handle mapbox:// URLs
    if (path.startsWith("mapbox://")) {
      const mapboxPath = path.replace("mapbox://", "")
      url = `https://api.mapbox.com/${mapboxPath}?access_token=${mapboxToken}`
    } else {
      // Handle regular URLs
      url = `https://api.mapbox.com${path}?access_token=${mapboxToken}`
    }
  }

  try {
    const response = await fetch(url)
    const contentType = response.headers.get("content-type")

    // If the response is JSON, parse it and return it
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json()
      return NextResponse.json(data)
    }

    // Otherwise, return the response as is
    const data = await response.arrayBuffer()
    return new NextResponse(data, {
      headers: {
        "Content-Type": contentType || "application/octet-stream",
        "Cache-Control": "max-age=3600",
      },
    })
  } catch (error) {
    console.error("Error proxying Mapbox request:", error)
    return NextResponse.json({ error: "Failed to proxy Mapbox request" }, { status: 500 })
  }
}
