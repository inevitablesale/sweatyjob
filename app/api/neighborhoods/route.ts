import { type NextRequest, NextResponse } from "next/server"

interface Neighborhood {
  name: string
  city: string
  state: string
}

// This is a free approach to get neighborhood data
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const city = searchParams.get("city")
  const state = searchParams.get("state")

  if (!city || !state) {
    return NextResponse.json({ error: "Missing city or state parameter" }, { status: 400 })
  }

  try {
    // First, try to get neighborhoods from our own database
    const neighborhoods = await getNeighborhoodsFromDatabase(city, state)

    if (neighborhoods && neighborhoods.length > 0) {
      return NextResponse.json({ neighborhoods })
    }

    // If we don't have data in our database, try OpenStreetMap via Overpass API
    const osmNeighborhoods = await getNeighborhoodsFromOSM(city, state)

    if (osmNeighborhoods && osmNeighborhoods.length > 0) {
      // Save these to our database for future use
      // saveNeighborhoodsToDatabase(city, state, osmNeighborhoods)
      return NextResponse.json({ neighborhoods: osmNeighborhoods })
    }

    // If all else fails, return an empty array
    return NextResponse.json({ neighborhoods: [] })
  } catch (error) {
    console.error("Error fetching neighborhoods:", error)
    return NextResponse.json({ error: "Failed to fetch neighborhoods" }, { status: 500 })
  }
}

// Function to get neighborhoods from our database
async function getNeighborhoodsFromDatabase(city: string, state: string): Promise<Neighborhood[]> {
  // This is where you would query your database
  // For now, we'll just return hardcoded data for Richmond
  if (city.toLowerCase() === "richmond" && state.toLowerCase() === "va") {
    return [
      { name: "Battery Park", city: "Richmond", state: "VA" },
      { name: "Bellevue", city: "Richmond", state: "VA" },
      { name: "Ginter Park", city: "Richmond", state: "VA" },
      { name: "The Fan", city: "Richmond", state: "VA" },
      { name: "Church Hill", city: "Richmond", state: "VA" },
      { name: "Museum District", city: "Richmond", state: "VA" },
      { name: "Carytown", city: "Richmond", state: "VA" },
      { name: "Scotts Addition", city: "Richmond", state: "VA" },
      { name: "Jackson Ward", city: "Richmond", state: "VA" },
      { name: "Shockoe Bottom", city: "Richmond", state: "VA" },
      { name: "Manchester", city: "Richmond", state: "VA" },
      { name: "Oregon Hill", city: "Richmond", state: "VA" },
      { name: "Carver", city: "Richmond", state: "VA" },
      { name: "Randolph", city: "Richmond", state: "VA" },
      { name: "Woodland Heights", city: "Richmond", state: "VA" },
      { name: "Forest Hill", city: "Richmond", state: "VA" },
      { name: "Westover Hills", city: "Richmond", state: "VA" },
      { name: "Windsor Farms", city: "Richmond", state: "VA" },
      { name: "Northside", city: "Richmond", state: "VA" },
    ]
  }

  // Add more cities as needed

  return []
}

// Function to get neighborhoods from OpenStreetMap via Overpass API
async function getNeighborhoodsFromOSM(city: string, state: string): Promise<Neighborhood[]> {
  try {
    // First, get the bounding box for the city
    const geocodeUrl = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}&country=USA&format=json&limit=1`

    const geocodeResponse = await fetch(geocodeUrl, {
      headers: {
        "User-Agent": "SweatyJob/1.0", // OSM requires a user agent
      },
    })

    if (!geocodeResponse.ok) {
      throw new Error("Failed to geocode city")
    }

    const geocodeData = await geocodeResponse.json()

    if (!geocodeData || geocodeData.length === 0) {
      return []
    }

    const { boundingbox } = geocodeData[0]

    // Now query Overpass API for neighborhoods within this bounding box
    const overpassQuery = `
      [out:json];
      area[name="${city}"][admin_level~"[48]"];
      node["place"="neighbourhood"](area);
      out body;
    `

    const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`

    const overpassResponse = await fetch(overpassUrl, {
      headers: {
        "User-Agent": "SweatyJob/1.0",
      },
    })

    if (!overpassResponse.ok) {
      throw new Error("Failed to query Overpass API")
    }

    const overpassData = await overpassResponse.json()

    if (!overpassData || !overpassData.elements) {
      return []
    }

    // Transform the data
    const neighborhoods: Neighborhood[] = overpassData.elements.map((element: any) => ({
      name: element.tags.name,
      city,
      state,
    }))

    return neighborhoods
  } catch (error) {
    console.error("Error fetching from OSM:", error)
    return []
  }
}
