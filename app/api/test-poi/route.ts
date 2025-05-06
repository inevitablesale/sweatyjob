import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const city = searchParams.get("city") || "Richmond"
  const state = searchParams.get("state") || "VA"

  try {
    // Call our points-of-interest API
    const response = await fetch(
      `${request.nextUrl.origin}/api/points-of-interest?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`,
      { cache: "no-store" },
    )

    if (!response.ok) {
      throw new Error(`Points of Interest API responded with status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in test POI route:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch points of interest",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
