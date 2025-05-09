export interface WikipediaArticle {
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

// Get authentication headers using environment variables
function getAuthHeaders() {
  const headers: HeadersInit = {
    "Api-User-Agent": "SweatyJob/1.0",
  }

  // Add authentication if credentials are available
  if (process.env.WIKI_ACCESS_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.WIKI_ACCESS_TOKEN}`
  }

  return headers
}

// Main function to fetch Wikipedia article data
export async function fetchWikipediaArticle(title: string): Promise<WikipediaArticle | null> {
  try {
    // URL encode the title properly
    const encodedTitle = encodeURIComponent(title)

    // Construct the API URL with all the properties we need
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages|coordinates|description&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=600&titles=${encodedTitle}&origin=*`

    console.log(`🔗 Wikipedia API URL: ${apiUrl}`)

    // Make the API request with auth headers if available
    const response = await fetch(apiUrl, {
      headers: getAuthHeaders(),
    })

    console.log(`📡 Wikipedia API response status: ${response.status} ${response.statusText}`)

    if (!response.ok) {
      console.error(`❌ Wikipedia API error: Failed to fetch article for "${title}" with status ${response.status}`)
      return handleApiError(response, `Failed to fetch article for "${title}"`)
    }

    const data = await response.json()
    console.log(`📊 Wikipedia API raw response:`, JSON.stringify(data, null, 2))

    // Wikipedia API returns pages in an object with page IDs as keys
    const pages = data.query?.pages
    if (!pages) {
      console.error("❌ No pages found in Wikipedia response")
      return null
    }

    // Get the first (and usually only) page
    const pageId = Object.keys(pages)[0]
    const page = pages[pageId]

    // Check if we got a valid page or a "missing" indicator
    if (page.missing || pageId === "-1") {
      console.warn(`⚠️ Wikipedia article not found for "${title}"`)
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
      console.log(`🖼️ Wikipedia thumbnail found: ${page.thumbnail.source}`)
    }

    // Add coordinates if available
    if (page.coordinates && page.coordinates.length > 0) {
      article.coordinates = {
        lat: page.coordinates[0].lat,
        lon: page.coordinates[0].lon,
      }
      console.log(`🌍 Wikipedia coordinates found: lat=${page.coordinates[0].lat}, lon=${page.coordinates[0].lon}`)
    } else {
      console.log(`ℹ️ No coordinates in Wikipedia article for "${title}"`)
    }

    console.log(`✅ Wikipedia article found for "${title}"`)
    console.log(`📊 Wikipedia response:`, {
      pageid: article.pageid,
      title: article.title,
      extract_length: article.extract.length,
      has_thumbnail: !!article.thumbnail,
      has_coordinates: !!article.coordinates,
    })

    // If the extract is empty, try to get more content:
    if (!article.extract || article.extract.length < 10) {
      console.log(`⚠️ Wikipedia extract is empty or too short for "${title}", trying to get full content`)

      // Try to get the full article content without the intro-only flag
      const fullContentUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages|coordinates|description&explaintext=1&piprop=thumbnail&pithumbsize=600&titles=${encodedTitle}&origin=*`

      try {
        const fullResponse = await fetch(fullContentUrl, {
          headers: getAuthHeaders(),
        })

        if (fullResponse.ok) {
          const fullData = await fullResponse.json()
          const fullPage = fullData.query?.pages[pageId]

          if (fullPage && fullPage.extract) {
            article.extract = fullPage.extract.substring(0, 1000) + "..."
            console.log(`✅ Retrieved full content for "${title}", length: ${article.extract.length}`)
          }
        }
      } catch (error) {
        console.error(`❌ Error fetching full content for "${title}":`, error)
      }
    }

    // Make sure we return a valid extract even if it's empty
    if (!article.extract || article.extract.length < 10) {
      article.extract = `${title} is a location with information available on Wikipedia.`
    }

    return article
  } catch (error) {
    console.error("❌ Error fetching Wikipedia article:", error)
    return null
  }
}

// Function to search Wikipedia for articles
export async function searchWikipedia(query: string, limit = 5): Promise<any[]> {
  try {
    const encodedQuery = encodeURIComponent(query)
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodedQuery}&srlimit=${limit}&origin=*`

    const response = await fetch(apiUrl, {
      headers: getAuthHeaders(),
    })

    if (!response.ok) {
      return handleApiError(response, `Failed to search for "${query}"`)
    }

    const data = await response.json()
    return data.query?.search || []
  } catch (error) {
    console.error("Error searching Wikipedia:", error)
    return []
  }
}

// Function to get geosearch results from Wikipedia
export async function geoSearchWikipedia(
  latitude: number,
  longitude: number,
  radius = 10000,
  limit = 10,
): Promise<any[]> {
  try {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=geosearch&gscoord=${latitude}|${longitude}&gsradius=${radius}&gslimit=${limit}&origin=*`

    const response = await fetch(apiUrl, {
      headers: getAuthHeaders(),
    })

    if (!response.ok) {
      return handleApiError(response, `Failed to perform geosearch at coordinates (${latitude}, ${longitude})`)
    }

    const data = await response.json()
    return data.query?.geosearch || []
  } catch (error) {
    console.error("Error performing Wikipedia geosearch:", error)
    return []
  }
}

// Function to get image URLs for a Wikipedia article
// Function to get city information from Wikipedia
export async function getCityInfo(city: string, state: string): Promise<any | null> {
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
    const searchResults = await searchWikipedia(`${city} ${state} city`)
    if (searchResults.length > 0) {
      const topResult = searchResults[0]
      const article = await fetchWikipediaArticle(topResult.title)
      if (article) {
        return {
          ...article,
          imageUrl: article.thumbnail?.source,
        }
      }
    }

    return null
  } catch (error) {
    console.error(`Error getting city info for ${city}, ${state}:`, error)
    return null
  }
}
