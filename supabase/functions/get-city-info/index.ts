// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

interface WikipediaArticle {
  pageid: number
  title: string
  extract: string
  description?: string
  thumbnail?: {
    source: string
    width: number
    height: number
  }
  coordinates?: {
    lat: number
    lon: number
  }
}

// Helper function to handle API errors
function handleApiError(response: Response, message: string): never {
  console.error(`Wikipedia API Error (${response.status}): ${message}`)
  throw new Error(`Wikipedia API Error: ${message}`)
}

// Main function to fetch Wikipedia article data
async function fetchWikipediaArticle(title: string): Promise<WikipediaArticle | null> {
  try {
    // URL encode the title properly
    const encodedTitle = encodeURIComponent(title)

    // Construct the API URL with all the properties we need
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages|coordinates|description&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=600&titles=${encodedTitle}&origin=*`

    // Make the API request
    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "SweatyJob/1.0 (https://sweatyjob.com; info@sweatyjob.com)",
      },
    })

    if (!response.ok) {
      return handleApiError(response, `Failed to fetch article for "${title}"`)
    }

    const data = await response.json()

    // Wikipedia API returns pages in an object with page IDs as keys
    const pages = data.query?.pages
    if (!pages) {
      console.error("No pages found in Wikipedia response")
      return null
    }

    // Get the first (and usually only) page
    const pageId = Object.keys(pages)[0]
    const page = pages[pageId]

    // Check if we got a valid page or a "missing" indicator
    if (page.missing || pageId === "-1") {
      console.warn(`Wikipedia article not found for "${title}"`)
      return null
    }

    // Construct our response object
    const article: WikipediaArticle = {
      pageid: Number.parseInt(pageId),
      title: page.title,
      extract: page.extract || `No extract available for ${title}`,
      description: page.description,
    }

    // Add thumbnail if available
    if (page.thumbnail) {
      article.thumbnail = {
        source: page.thumbnail.source,
        width: page.thumbnail.width,
        height: page.thumbnail.height,
      }
    }

    // Add coordinates if available
    if (page.coordinates && page.coordinates.length > 0) {
      article.coordinates = {
        lat: page.coordinates[0].lat,
        lon: page.coordinates[0].lon,
      }
    }

    return article
  } catch (error) {
    console.error("Error fetching Wikipedia article:", error)
    return null
  }
}

// Function to get city information from Wikipedia
async function getCityInfo(city: string, state: string): Promise<any | null> {
  try {
    // Try different query formats to find the best match
    const queries = [`${city}, ${state}`, `${city} (${state})`, `${city}`]

    for (const query of queries) {
      const article = await fetchWikipediaArticle(query)
      if (article) {
        return {
          ...article,
          imageUrl: article.thumbnail?.source,
        }
      }
    }

    // If no direct match, try searching
    return null
  } catch (error) {
    console.error(`Error getting city info for ${city}, ${state}:`, error)
    return null
  }
}

serve(async (req) => {
  // This is needed if you're planning to invoke your function from a browser.
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: { "Access-Control-Allow-Origin": "*" } })
  }

  try {
    const { city, state } = await req.json()

    if (!city || !state) {
      return new Response(JSON.stringify({ error: "Missing required parameters: city and state" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const cityInfo = await getCityInfo(city, state)

    if (!cityInfo) {
      return new Response(
        JSON.stringify({
          error: `No information found for ${city}, ${state}`,
          fallbackImage: `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(`${city} ${state} city`)}`,
        }),
        { status: 404, headers: { "Content-Type": "application/json" } },
      )
    }

    return new Response(JSON.stringify(cityInfo), { headers: { "Content-Type": "application/json" } })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
})
