import { type NextRequest, NextResponse } from "next/server"

const ATTOM_API_KEY = "67d69b140c2c97dfadd3f9f7f96e9f6b"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const city = searchParams.get("city")
  const state = searchParams.get("state")

  if (!city || !state) {
    return NextResponse.json({ error: "City and state are required" }, { status: 400 })
  }

  try {
    // First, look up the geoIdV4 for the city
    const lookupUrl = `https://api.gateway.attomdata.com/v4/location/lookup?name=${encodeURIComponent(city)}, ${encodeURIComponent(state)}&geographyTypeAbbreviation=CI`

    const lookupResponse = await fetch(lookupUrl, {
      headers: {
        Accept: "application/json",
        APIKey: ATTOM_API_KEY,
      },
    })

    if (!lookupResponse.ok) {
      throw new Error(`ATTOM API lookup responded with status: ${lookupResponse.status}`)
    }

    const lookupData = await lookupResponse.json()

    if (!lookupData.locations || lookupData.locations.length === 0) {
      return NextResponse.json({ error: "Location not found in ATTOM database" }, { status: 404 })
    }

    // Find the best match from the results
    const bestMatch =
      lookupData.locations.find(
        (loc: any) =>
          loc.name.toLowerCase().includes(city.toLowerCase()) &&
          loc.stateAbbreviation.toLowerCase() === state.toLowerCase(),
      ) || lookupData.locations[0]

    const geoIdV4 = bestMatch.geoIdV4

    // Now get the community data using the geoIdV4
    const communityUrl = `https://api.gateway.attomdata.com/v4/neighborhood/community?geoIdV4=${geoIdV4}`

    const communityResponse = await fetch(communityUrl, {
      headers: {
        Accept: "application/json",
        APIKey: ATTOM_API_KEY,
      },
    })

    if (!communityResponse.ok) {
      throw new Error(`ATTOM API community responded with status: ${communityResponse.status}`)
    }

    const communityData = await communityResponse.json()
    return NextResponse.json(communityData)
  } catch (error) {
    console.error("Error fetching ATTOM community data:", error)
    return NextResponse.json({ error: "Failed to fetch community data" }, { status: 500 })
  }
}
