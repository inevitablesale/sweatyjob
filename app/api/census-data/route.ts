import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get("city")
    const state = searchParams.get("state")
    const zipCode = searchParams.get("zipCode")

    console.log(`Census API: Received request for ${city}, ${state}, zip: ${zipCode}`)

    if (!zipCode && (!city || !state)) {
      return NextResponse.json({ error: "Either zipCode or city and state parameters are required" }, { status: 400 })
    }

    const apiKey = process.env.CENSUS_API_KEY

    if (!apiKey) {
      return NextResponse.json({ error: "Census API key is not configured" }, { status: 500 })
    }

    // If we have a zip code, use that directly
    if (zipCode) {
      return fetchCensusByZip(zipCode, apiKey)
    }

    // Try multiple approaches to get the most accurate data
    return fetchCensusByPlace(city!, state!, apiKey)
  } catch (error) {
    console.error("Census data error:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch census data",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}

async function fetchCensusByZip(zipCode: string, apiKey: string) {
  console.log(`Census API: Fetching data for zip code ${zipCode}`)

  try {
    // Fetch median household income data
    const incomeUrl = `https://api.census.gov/data/2019/acs/acs5?get=B19013_001E&for=zip%20code%20tabulation%20area:${zipCode}&key=${apiKey}`
    const incomeResponse = await fetch(incomeUrl)

    if (!incomeResponse.ok) {
      throw new Error(`Failed to fetch income data: ${incomeResponse.status} ${incomeResponse.statusText}`)
    }

    const incomeData = await incomeResponse.json()

    // Fetch population data
    const populationUrl = `https://api.census.gov/data/2019/acs/acs5?get=B01003_001E&for=zip%20code%20tabulation%20area:${zipCode}&key=${apiKey}`
    const populationResponse = await fetch(populationUrl)

    if (!populationResponse.ok) {
      throw new Error(`Failed to fetch population data: ${populationResponse.status} ${populationResponse.statusText}`)
    }

    const populationData = await populationResponse.json()

    // Fetch housing data
    const housingUrl = `https://api.census.gov/data/2019/acs/acs5?get=B25077_001E&for=zip%20code%20tabulation%20area:${zipCode}&key=${apiKey}`
    const housingResponse = await fetch(housingUrl)

    if (!housingResponse.ok) {
      throw new Error(`Failed to fetch housing data: ${housingResponse.status} ${housingResponse.statusText}`)
    }

    const housingData = await housingResponse.json()

    // Fetch homeownership data
    const homeownershipUrl = `https://api.census.gov/data/2019/acs/acs5?get=B25003_002E,B25003_001E&for=zip%20code%20tabulation%20area:${zipCode}&key=${apiKey}`
    const homeownershipResponse = await fetch(homeownershipUrl)

    if (!homeownershipResponse.ok) {
      throw new Error(
        `Failed to fetch homeownership data: ${homeownershipResponse.status} ${homeownershipResponse.statusText}`,
      )
    }

    const homeownershipData = await homeownershipResponse.json()

    // Fetch household size data
    const householdSizeUrl = `https://api.census.gov/data/2019/acs/acs5?get=B25010_001E&for=zip%20code%20tabulation%20area:${zipCode}&key=${apiKey}`
    const householdSizeResponse = await fetch(householdSizeUrl)

    if (!householdSizeResponse.ok) {
      throw new Error(
        `Failed to fetch household size data: ${householdSizeResponse.status} ${householdSizeResponse.statusText}`,
      )
    }

    const householdSizeData = await householdSizeResponse.json()

    // Extract the actual values from the Census API responses
    const medianIncome = incomeData[1]?.[0] !== null ? Number.parseInt(incomeData[1][0]) : null
    const population = populationData[1]?.[0] !== null ? Number.parseInt(populationData[1][0]) : null
    const medianHomeValue = housingData[1]?.[0] !== null ? Number.parseInt(housingData[1][0]) : null

    // Calculate homeownership rate
    let homeownershipRate = null
    if (homeownershipData[1] && homeownershipData[1][0] !== null && homeownershipData[1][1] !== null) {
      const ownerOccupied = Number.parseInt(homeownershipData[1][0])
      const totalHouseholds = Number.parseInt(homeownershipData[1][1])
      if (totalHouseholds > 0) {
        homeownershipRate = Math.round((ownerOccupied / totalHouseholds) * 100)
      }
    }

    const householdSize =
      householdSizeData[1]?.[0] !== null ? Number.parseFloat(householdSizeData[1][0]).toFixed(1) : null

    const result = {
      zipCode,
      medianIncome,
      population,
      medianHomeValue,
      homeownershipRate,
      householdSize,
    }

    console.log("Census API: Returning zip code census data:", result)
    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in fetchCensusByZip:", error)
    throw error
  }
}

async function fetchCensusByPlace(city: string, state: string, apiKey: string) {
  console.log(`Census API: Fetching data for place ${city}, ${state}`)

  try {
    // First, try to get data using the metropolitan statistical area (MSA) for larger cities
    try {
      const msaData = await fetchCensusByMSA(city, state, apiKey)
      if (msaData) {
        console.log(`Census API: Successfully retrieved MSA data for ${city}, ${state}`)
        return NextResponse.json({
          city,
          state,
          ...msaData,
          dataSource: "Metropolitan Statistical Area",
        })
      }
    } catch (msaError) {
      console.log(`Census API: Could not retrieve MSA data for ${city}, ${state}:`, msaError)
    }

    // Get state FIPS code
    const stateFipsUrl = `https://api.census.gov/data/2010/dec/sf1?get=NAME&for=state:*&key=${apiKey}`
    const stateFipsResponse = await fetch(stateFipsUrl)

    if (!stateFipsResponse.ok) {
      throw new Error(`Failed to fetch state FIPS: ${stateFipsResponse.status} ${stateFipsResponse.statusText}`)
    }

    const stateFipsData = await stateFipsResponse.json()
    const stateEntry = stateFipsData.find((entry: any) => entry[0].toLowerCase().includes(state.toLowerCase()))

    if (!stateEntry) {
      throw new Error(`State not found: ${state}`)
    }

    const stateFips = stateEntry[1]
    console.log(`Census API: Found state FIPS code for ${state}: ${stateFips}`)

    // Try to get place data
    const placesUrl = `https://api.census.gov/data/2019/acs/acs5?get=NAME&for=place:*&in=state:${stateFips}&key=${apiKey}`
    const placesResponse = await fetch(placesUrl)

    if (!placesResponse.ok) {
      throw new Error(`Failed to fetch places: ${placesResponse.status} ${placesResponse.statusText}`)
    }

    const placesData = await placesResponse.json()

    // Try different variations of the city name to find a match
    const cityVariations = [
      city.toLowerCase(),
      city.toLowerCase().replace("saint", "st."),
      city.toLowerCase().replace("st.", "saint"),
      city.toLowerCase().replace(/\s+/g, ""),
      city.toLowerCase().split(" ")[0], // First word only
    ]

    let placeEntry = null
    for (const cityVar of cityVariations) {
      placeEntry = placesData.find((entry: any) => entry[0].toLowerCase().includes(cityVar))
      if (placeEntry) break
    }

    if (!placeEntry) {
      // If we can't find the place, try county data as a fallback
      return fetchCensusByCounty(city, state, stateFips, apiKey)
    }

    const placeFips = placeEntry[2]
    console.log(`Census API: Found place FIPS code for ${city}: ${placeFips}`)

    // Fetch all data in parallel for efficiency
    const [incomeData, populationData, housingData, homeownershipData, householdSizeData] = await Promise.all([
      fetchCensusData(`B19013_001E`, `place:${placeFips}`, stateFips, apiKey),
      fetchCensusData(`B01003_001E`, `place:${placeFips}`, stateFips, apiKey),
      fetchCensusData(`B25077_001E`, `place:${placeFips}`, stateFips, apiKey),
      fetchCensusData(`B25003_002E,B25003_001E`, `place:${placeFips}`, stateFips, apiKey),
      fetchCensusData(`B25010_001E`, `place:${placeFips}`, stateFips, apiKey),
    ])

    // Extract the actual values from the Census API responses
    const medianIncome = incomeData[1]?.[0] !== null ? Number.parseInt(incomeData[1][0]) : null
    const population = populationData[1]?.[0] !== null ? Number.parseInt(populationData[1][0]) : null
    const medianHomeValue = housingData[1]?.[0] !== null ? Number.parseInt(housingData[1][0]) : null

    // Calculate homeownership rate
    let homeownershipRate = null
    if (homeownershipData[1] && homeownershipData[1][0] !== null && homeownershipData[1][1] !== null) {
      const ownerOccupied = Number.parseInt(homeownershipData[1][0])
      const totalHouseholds = Number.parseInt(homeownershipData[1][1])
      if (totalHouseholds > 0) {
        homeownershipRate = Math.round((ownerOccupied / totalHouseholds) * 100)
      }
    }

    const householdSize =
      householdSizeData[1]?.[0] !== null ? Number.parseFloat(householdSizeData[1][0]).toFixed(1) : null

    const result = {
      city,
      state,
      medianIncome,
      population,
      medianHomeValue,
      homeownershipRate,
      householdSize,
      dataSource: "Place",
    }

    console.log("Census API: Returning place census data:", result)
    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in fetchCensusByPlace:", error)

    // If all else fails, try county data
    try {
      const stateFipsUrl = `https://api.census.gov/data/2010/dec/sf1?get=NAME&for=state:*&key=${apiKey}`
      const stateFipsResponse = await fetch(stateFipsUrl)
      const stateFipsData = await stateFipsResponse.json()
      const stateEntry = stateFipsData.find((entry: any) => entry[0].toLowerCase().includes(state.toLowerCase()))

      if (stateEntry) {
        const stateFips = stateEntry[1]
        return fetchCensusByCounty(city, state, stateFips, apiKey)
      }
    } catch (countyError) {
      console.error("Error in county fallback:", countyError)
    }

    throw error
  }
}

async function fetchCensusByMSA(city: string, state: string, apiKey: string) {
  // This function attempts to get data for Metropolitan Statistical Areas
  // Useful for large cities where place-based data might be incomplete

  try {
    // Get list of all MSAs
    const msaUrl = `https://api.census.gov/data/2019/acs/acs5?get=NAME&for=metropolitan%20statistical%20area/micropolitan%20statistical%20area:*&key=${apiKey}`
    const msaResponse = await fetch(msaUrl)

    if (!msaResponse.ok) {
      throw new Error(`Failed to fetch MSAs: ${msaResponse.status} ${msaResponse.statusText}`)
    }

    const msaData = await msaResponse.json()

    // Find MSA that contains our city
    const cityVariations = [
      city.toLowerCase(),
      city.toLowerCase().replace("saint", "st."),
      city.toLowerCase().replace("st.", "saint"),
    ]

    let msaEntry = null
    for (const cityVar of cityVariations) {
      msaEntry = msaData.find(
        (entry: any) =>
          entry[0].toLowerCase().includes(cityVar) && entry[0].toLowerCase().includes(state.toLowerCase()),
      )
      if (msaEntry) break
    }

    if (!msaEntry) {
      return null
    }

    const msaCode = msaEntry[1]
    console.log(`Census API: Found MSA code for ${city}, ${state}: ${msaCode}`)

    // Fetch all data in parallel for efficiency
    const [incomeData, populationData, housingData, homeownershipData, householdSizeData] = await Promise.all([
      fetchCensusData(
        `B19013_001E`,
        `metropolitan statistical area/micropolitan statistical area:${msaCode}`,
        null,
        apiKey,
      ),
      fetchCensusData(
        `B01003_001E`,
        `metropolitan statistical area/micropolitan statistical area:${msaCode}`,
        null,
        apiKey,
      ),
      fetchCensusData(
        `B25077_001E`,
        `metropolitan statistical area/micropolitan statistical area:${msaCode}`,
        null,
        apiKey,
      ),
      fetchCensusData(
        `B25003_002E,B25003_001E`,
        `metropolitan statistical area/micropolitan statistical area:${msaCode}`,
        null,
        apiKey,
      ),
      fetchCensusData(
        `B25010_001E`,
        `metropolitan statistical area/micropolitan statistical area:${msaCode}`,
        null,
        apiKey,
      ),
    ])

    // Extract the actual values from the Census API responses
    const medianIncome = incomeData[1]?.[0] !== null ? Number.parseInt(incomeData[1][0]) : null
    const population = populationData[1]?.[0] !== null ? Number.parseInt(populationData[1][0]) : null
    const medianHomeValue = housingData[1]?.[0] !== null ? Number.parseInt(housingData[1][0]) : null

    // Calculate homeownership rate
    let homeownershipRate = null
    if (homeownershipData[1] && homeownershipData[1][0] !== null && homeownershipData[1][1] !== null) {
      const ownerOccupied = Number.parseInt(homeownershipData[1][0])
      const totalHouseholds = Number.parseInt(homeownershipData[1][1])
      if (totalHouseholds > 0) {
        homeownershipRate = Math.round((ownerOccupied / totalHouseholds) * 100)
      }
    }

    const householdSize =
      householdSizeData[1]?.[0] !== null ? Number.parseFloat(householdSizeData[1][0]).toFixed(1) : null

    return {
      medianIncome,
      population,
      medianHomeValue,
      homeownershipRate,
      householdSize,
    }
  } catch (error) {
    console.error("Error in fetchCensusByMSA:", error)
    return null
  }
}

async function fetchCensusByCounty(city: string, state: string, stateFips: string, apiKey: string) {
  console.log(`Census API: Attempting to fetch county data for ${city}, ${state}`)

  try {
    // Get counties in the state
    const countiesUrl = `https://api.census.gov/data/2019/acs/acs5?get=NAME&for=county:*&in=state:${stateFips}&key=${apiKey}`
    const countiesResponse = await fetch(countiesUrl)

    if (!countiesResponse.ok) {
      throw new Error(`Failed to fetch counties: ${countiesResponse.status} ${countiesResponse.statusText}`)
    }

    const countiesData = await countiesResponse.json()

    // Try to find a county that might contain our city
    // This is a best-effort approach and might not always work
    const countyEntry = countiesData[1] // Just use the first county as a fallback

    if (!countyEntry) {
      throw new Error(`No counties found in state: ${state}`)
    }

    const countyFips = countyEntry[2]
    console.log(`Census API: Using county FIPS code: ${countyFips} for ${city}, ${state}`)

    // Fetch all data in parallel for efficiency
    const [incomeData, populationData, housingData, homeownershipData, householdSizeData] = await Promise.all([
      fetchCensusData(`B19013_001E`, `county:${countyFips}`, stateFips, apiKey),
      fetchCensusData(`B01003_001E`, `county:${countyFips}`, stateFips, apiKey),
      fetchCensusData(`B25077_001E`, `county:${countyFips}`, stateFips, apiKey),
      fetchCensusData(`B25003_002E,B25003_001E`, `county:${countyFips}`, stateFips, apiKey),
      fetchCensusData(`B25010_001E`, `county:${countyFips}`, stateFips, apiKey),
    ])

    // Extract the actual values from the Census API responses
    const medianIncome = incomeData[1]?.[0] !== null ? Number.parseInt(incomeData[1][0]) : null
    const population = populationData[1]?.[0] !== null ? Number.parseInt(populationData[1][0]) : null
    const medianHomeValue = housingData[1]?.[0] !== null ? Number.parseInt(housingData[1][0]) : null

    // Calculate homeownership rate
    let homeownershipRate = null
    if (homeownershipData[1] && homeownershipData[1][0] !== null && homeownershipData[1][1] !== null) {
      const ownerOccupied = Number.parseInt(homeownershipData[1][0])
      const totalHouseholds = Number.parseInt(homeownershipData[1][1])
      if (totalHouseholds > 0) {
        homeownershipRate = Math.round((ownerOccupied / totalHouseholds) * 100)
      }
    }

    const householdSize =
      householdSizeData[1]?.[0] !== null ? Number.parseFloat(householdSizeData[1][0]).toFixed(1) : null

    const result = {
      city,
      state,
      medianIncome,
      population,
      medianHomeValue,
      homeownershipRate,
      householdSize,
      dataSource: "County (approximation)",
    }

    console.log("Census API: Returning county census data as fallback:", result)
    return NextResponse.json(result)
  } catch (error) {
    console.error("Error in fetchCensusByCounty:", error)
    throw error
  }
}

// Helper function to fetch census data with a specific variable and geography
async function fetchCensusData(variable: string, forClause: string, inClause: string | null, apiKey: string) {
  const url = inClause
    ? `https://api.census.gov/data/2019/acs/acs5?get=${variable}&for=${forClause}&in=state:${inClause}&key=${apiKey}`
    : `https://api.census.gov/data/2019/acs/acs5?get=${variable}&for=${forClause}&key=${apiKey}`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Failed to fetch census data (${variable}): ${response.status} ${response.statusText}`)
  }

  return response.json()
}
