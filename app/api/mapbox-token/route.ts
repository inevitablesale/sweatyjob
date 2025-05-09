import { NextResponse } from "next/server"

export async function GET() {
  // This is a server-side API route, so it's safe to access environment variables here
  const token = process.env.MAPBOX_ACCESS_TOKEN

  if (!token) {
    return NextResponse.json({ error: "Mapbox token not configured" }, { status: 500 })
  }

  // Return the token to the client
  return NextResponse.json({ token })
}
