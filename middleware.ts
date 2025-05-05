import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { cityData } from "./lib/market-data/cities"
import { neighborhoods } from "./app/neighborhoods/index"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname

  // Handle redirects for specific paths
  if (pathname === "/waitlist") {
    return NextResponse.redirect(new URL("/purchase/smart-yard", request.url))
  }

  // Handle direct neighborhood-service redirects
  // This regex matches patterns like /neighborhood-name-service-name
  const directServiceRegex = /^\/([a-zA-Z0-9-]+)-([a-zA-Z0-9-]+)$/
  const directServiceMatch = pathname.match(directServiceRegex)

  if (directServiceMatch) {
    const [, possibleNeighborhood, possibleService] = directServiceMatch

    // Check if this is a neighborhood-service pattern we should redirect
    const neighborhood = neighborhoods.find((n) => n.slug === possibleNeighborhood)
    if (neighborhood) {
      return NextResponse.redirect(new URL(`/neighborhoods/${possibleNeighborhood}/${possibleService}`, request.url))
    }
  }

  // Handle neighborhood-service redirects with more complex patterns
  // This regex matches patterns like /neighborhood-name-service-type
  const neighborhoodServiceRegex = /^\/([a-zA-Z0-9-]+)-([a-zA-Z0-9-]+)-([a-zA-Z0-9-]+)$/
  const match = pathname.match(neighborhoodServiceRegex)

  if (match) {
    const [, part1, part2, part3] = match

    // First, check if the full "part1-part2" is a valid neighborhood
    const combinedNeighborhood = `${part1}-${part2}`
    const neighborhood = neighborhoods.find((n) => n.slug === combinedNeighborhood)

    if (neighborhood) {
      // If it's a valid neighborhood, redirect to the proper URL structure
      return NextResponse.redirect(new URL(`/neighborhoods/${combinedNeighborhood}/${part3}`, request.url))
    }

    // If not a combined neighborhood, check if part1 alone is a neighborhood
    const singleNeighborhood = neighborhoods.find((n) => n.slug === part1)
    if (singleNeighborhood) {
      // If it's a valid single-word neighborhood, redirect to the proper URL structure
      return NextResponse.redirect(new URL(`/neighborhoods/${part1}/${part2}-${part3}`, request.url))
    }
  }

  // Handle the specific case for San Jose
  if (pathname === "/partners/markets/jose/san") {
    return NextResponse.redirect(new URL("/partners/markets/california/san-jose", request.url))
  }

  // Check if the path matches the pattern /partners/markets/X/Y
  const marketPathRegex = /^\/partners\/markets\/([^/]+)\/([^/]+)$/
  const marketMatch = pathname.match(marketPathRegex)

  if (marketMatch) {
    const [, possibleState, possibleCity] = marketMatch

    // Check if this might be a reversed city/state
    // First, see if we can find a city that matches the "state" parameter
    let foundCity = null
    let foundState = null

    // Look through all city data
    for (const [key, data] of Object.entries(cityData)) {
      // Check if the "state" parameter matches a city name
      if (data.city.toLowerCase().replace(/\s+/g, "-") === possibleState.toLowerCase()) {
        foundCity = data.city
        foundState = data.state
        break
      }
    }

    // If we found a match and the "city" parameter is part of the state name
    if (foundCity && foundState && foundState.toLowerCase().includes(possibleCity.toLowerCase())) {
      // This is likely a reversed city/state URL
      const correctStateSlug = foundState.toLowerCase().replace(/\s+/g, "-")
      const correctCitySlug = foundCity.toLowerCase().replace(/\s+/g, "-")

      return NextResponse.redirect(new URL(`/partners/markets/${correctStateSlug}/${correctCitySlug}`, request.url))
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|images|.*\\.png$).*)"],
}
