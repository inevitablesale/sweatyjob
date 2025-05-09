import { NextResponse } from "next/server"
import { searchWikipedia } from "@/lib/wiki-api"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("query")
  const limit = searchParams.get("limit") ? Number.parseInt(searchParams.get("limit")!) : 5

  if (!query) {
    return NextResponse.json({ error: "Missing required parameter: query" }, { status: 400 })
  }

  try {
    const results = await searchWikipedia(query, limit)

    return NextResponse.json({ results })
  } catch (error) {
    console.error("Error in Wikipedia search API route:", error)
    return NextResponse.json({ error: "Failed to search Wikipedia" }, { status: 500 })
  }
}
