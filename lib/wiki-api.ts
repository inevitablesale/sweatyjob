// This is a simplified version - you would need to implement the full function
export interface WikipediaArticle {
  title?: string
  extract?: string
  thumbnail?: {
    source: string
    width: number
    height: number
  }
  coordinates?: {
    lat: number
    lon: number
  }
  description?: string
}

export async function fetchWikipediaArticle(title: string): Promise<WikipediaArticle | null> {
  if (!title) {
    console.log(`⚠️ Wiki API: No title provided`)
    return null
  }

  const encodedTitle = encodeURIComponent(title)
  console.log(`🔍 Wiki API: Fetching article for "${title}" (encoded: ${encodedTitle})`)

  try {
    // Construct the Wikipedia API URL
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts|pageimages|coordinates|description&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=600&titles=${encodedTitle}&origin=*`
    console.log(`📤 Wiki API URL: ${apiUrl}`)

    // Make the request
    const response = await fetch(apiUrl)
    console.log(`📥 Wiki API Response Status: ${response.status} ${response.statusText}`)

    if (!response.ok) {
      console.error(`❌ Wiki API error: ${response.status}`)
      throw new Error(`Wikipedia API error: ${response.status}`)
    }

    const data = await response.json()
    console.log(`📥 Wiki API Response received`)

    // Process the response
    const pages = data.query?.pages
    if (!pages) {
      console.log(`⚠️ Wiki API: No pages in response`)
      return null
    }

    // Get the first page (there should only be one)
    const pageId = Object.keys(pages)[0]
    if (pageId === "-1") {
      console.log(`⚠️ Wiki API: No results found for "${title}"`)
      return null // No results
    }

    const page = pages[pageId]
    console.log(`✅ Wiki API: Article found for "${title}", page ID: ${pageId}`)
    console.log(`✅ Wiki API: Article has extract: ${!!page.extract}, has thumbnail: ${!!page.thumbnail}`)

    return {
      title: page.title,
      extract: page.extract,
      thumbnail: page.thumbnail,
      coordinates: page.coordinates?.[0],
      description: page.description,
    }
  } catch (error) {
    console.error(`❌ Wiki API Error fetching article for "${title}":`, error)
    return null
  }
}
