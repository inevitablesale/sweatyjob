import { NextResponse } from "next/server"
import { geoSearchWikipedia } from "@/lib/wiki-api"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const latitude = searchParams.get("lat")
  const longitude = searchParams.get("lon")
  const radius = searchParams.get("radius") ? Number.parseInt(searchParams.get("radius")!) : 10000
  const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : 10

  if (!latitude || !longitude) {
    return NextResponse.json({ error: "Missing required parameters: lat and lon" }, { status: 400 })
  }

  try {
    const results = await geoSearchWikipedia(Number.parseFloat(latitude), Number.parseFloat(longitude), radius, limit)

    return NextResponse.json({ results })
  } catch (error) {
    console.error("Error in Wikipedia geosearch API route:", error)
    return NextResponse.json({ error: "Failed to perform Wikipedia geosearch" }, { status: 500 })
  }
}
