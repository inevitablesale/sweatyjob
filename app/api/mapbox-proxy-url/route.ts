import { type NextRequest, NextResponse } from "next/server"
import { getMapServiceKey } from "@/lib/secure-env"

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url")

  if (!url) {
    return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
  }

  try {
    const apiKey = getMapServiceKey()

    if (!apiKey) {
      return NextResponse.json({ error: "Map service not configured" }, { status: 500 })
    }

    // Add the token to the URL on the server side
    const secureUrl = `${url}${url.includes("?") ? "&" : "?"}access_token=${apiKey}`

    const response = await fetch(secureUrl)

    if (!response.ok) {
      throw new Error(`Map API error: ${response.statusText}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error in map proxy:", error)
    return NextResponse.json({ error: "Failed to proxy map request" }, { status: 500 })
  }
}
