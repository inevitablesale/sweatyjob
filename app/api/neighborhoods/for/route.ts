import { NextResponse } from "next/server"

// This is a route handler that will catch any requests to /api/neighborhoods/for
// and redirect them appropriately
export function GET(request: Request) {
  const url = new URL(request.url)
  const path = url.searchParams.get("path") || ""

  // If the path is /neighborhoods/for/pros or starts with it
  if (path === "/neighborhoods/for/pros" || path.startsWith("/neighborhoods/for/pros/")) {
    // Extract the part after /pros/ if it exists
    const subPath = path.replace("/neighborhoods/for/pros", "")
    return NextResponse.redirect(new URL(`/for-pros${subPath}`, request.url))
  }

  // For any other /neighborhoods/for/* paths, return 404
  return new Response("Not Found", { status: 404 })
}
