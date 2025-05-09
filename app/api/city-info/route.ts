import { NextResponse } from "next/server"
import { getCityInfo } from "@/lib/wiki-api"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")
  const state = searchParams.get("state")

  if (!city || !state) {
    return NextResponse.json({ error: "Missing required parameters: city and state" }, { status: 400 })
  }

  try {
    const cityInfo = await getCityInfo(city, state)

    if (!cityInfo) {
      return NextResponse.json(
        {
          error: `No information found for ${city}, ${state}`,
          fallbackImage: `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(`${city} ${state} city`)}`,
        },
        { status: 404 },
      )
    }

    return NextResponse.json(cityInfo)
  } catch (error) {
    console.error(`Error fetching city info for ${city}, ${state}:`, error)
    return NextResponse.json(
      {
        error: "Failed to fetch city information",
        fallbackImage: `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(`${city} ${state} city`)}`,
      },
      { status: 500 },
    )
  }
}
