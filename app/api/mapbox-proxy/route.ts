export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const path = searchParams.get("path")
  const search = searchParams.get("search") || ""

  if (!path) {
    return new Response("Path parameter is required", { status: 400 })
  }

  let url

  // Handle mapbox:// URLs
  if (path.startsWith("mapbox://")) {
    const mapboxPath = path.replace("mapbox://", "")
    url = `https://api.mapbox.com/${mapboxPath}`
  } else {
    // Handle regular URLs
    url = `https://api.mapbox.com${path}`
  }

  // Add the search parameters if they exist
  if (search && search !== "null" && search !== "undefined") {
    url += search
  }

  // Add the access token
  const separator = url.includes("?") ? "&" : "?"
  url += `${separator}access_token=${process.env.MAPBOX_ACCESS_TOKEN}`

  try {
    const response = await fetch(url)
    const contentType = response.headers.get("content-type")

    // If the response is JSON, parse it and return it
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json()
      return new Response(JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "max-age=3600",
        },
      })
    }

    // Otherwise, return the response as is
    const data = await response.arrayBuffer()
    return new Response(data, {
      headers: {
        "Content-Type": contentType || "application/octet-stream",
        "Cache-Control": "max-age=3600",
      },
    })
  } catch (error) {
    console.error("Error proxying Mapbox request:", error)
    return new Response("Error proxying Mapbox request", { status: 500 })
  }
}
