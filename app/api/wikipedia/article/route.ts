import { NextResponse } from "next/server"
import { fetchWikipediaArticle } from "@/lib/wiki-api"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title")

  if (!title) {
    return NextResponse.json({ error: "Missing required parameter: title" }, { status: 400 })
  }

  try {
    const article = await fetchWikipediaArticle(title)

    if (!article) {
      return NextResponse.json({ error: `No Wikipedia article found for "${title}"` }, { status: 404 })
    }

    return NextResponse.json(article)
  } catch (error) {
    console.error("Error in Wikipedia article API route:", error)
    return NextResponse.json({ error: "Failed to fetch Wikipedia article" }, { status: 500 })
  }
}
