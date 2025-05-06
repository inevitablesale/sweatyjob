import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const city = searchParams.get("city")
    const state = searchParams.get("state")

    if (!city || !state) {
      return NextResponse.json({ error: "City and state parameters are required" }, { status: 400 })
    }

    console.log(`Wikipedia API: Fetching data for ${city}, ${state}`)

    // Construct the search query
    const searchQuery = `${city}, ${state}`

    // First, search for the page
    const searchUrl = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(searchQuery)}&format=json&origin=*`

    const searchResponse = await fetch(searchUrl)

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text()
      console.error(`Wikipedia search API error: ${errorText}`)
      return NextResponse.json(
        {
          error: `Failed to search Wikipedia: ${searchResponse.status} ${searchResponse.statusText}`,
          details: errorText,
        },
        { status: searchResponse.status },
      )
    }

    const searchData = await searchResponse.json()

    if (!searchData.query || !searchData.query.search || searchData.query.search.length === 0) {
      console.log(`No Wikipedia results found for: ${searchQuery}`)
      return NextResponse.json({ error: "No Wikipedia page found" }, { status: 404 })
    }

    // Get the page title from the first search result
    const pageTitle = searchData.query.search[0].title

    // Now get the page content and images
    const contentUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|images&exintro=1&explaintext=1&titles=${encodeURIComponent(pageTitle)}&format=json&origin=*`

    const contentResponse = await fetch(contentUrl)

    if (!contentResponse.ok) {
      const errorText = await contentResponse.text()
      console.error(`Wikipedia content API error: ${errorText}`)
      return NextResponse.json(
        {
          error: `Failed to fetch Wikipedia content: ${contentResponse.status} ${contentResponse.statusText}`,
          details: errorText,
        },
        { status: contentResponse.status },
      )
    }

    const contentData = await contentResponse.json()

    // Extract the page ID and content
    const pages = contentData.query.pages
    const pageId = Object.keys(pages)[0]
    const extract = pages[pageId].extract

    // Get the first image from the page
    let imageUrl = null
    if (pages[pageId].images && pages[pageId].images.length > 0) {
      // Get image details for the first image
      const imageName = pages[pageId].images[0].title

      const imageInfoUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(imageName)}&prop=imageinfo&iiprop=url&format=json&origin=*`

      const imageInfoResponse = await fetch(imageInfoUrl)

      if (imageInfoResponse.ok) {
        const imageInfoData = await imageInfoResponse.json()
        const imagePages = imageInfoData.query.pages
        const imagePageId = Object.keys(imagePages)[0]

        if (imagePages[imagePageId].imageinfo && imagePages[imagePageId].imageinfo.length > 0) {
          imageUrl = imagePages[imagePageId].imageinfo[0].url
        }
      }
    }

    // If we didn't get an image from the page images, try to get one from the page thumbnail
    if (!imageUrl) {
      const thumbnailUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&pithumbsize=500&titles=${encodeURIComponent(pageTitle)}&format=json&origin=*`

      const thumbnailResponse = await fetch(thumbnailUrl)

      if (thumbnailResponse.ok) {
        const thumbnailData = await thumbnailResponse.json()
        const thumbnailPages = thumbnailData.query.pages
        const thumbnailPageId = Object.keys(thumbnailPages)[0]

        if (thumbnailPages[thumbnailPageId].thumbnail) {
          imageUrl = thumbnailPages[thumbnailPageId].thumbnail.source
        }
      }
    }

    const result = {
      title: pageTitle,
      extract,
      imageUrl,
    }

    console.log(`Wikipedia API: Found data for ${city}, ${state}:`, {
      title: result.title,
      extractLength: result.extract?.length || 0,
      hasImage: !!result.imageUrl,
    })

    return NextResponse.json(result)
  } catch (error) {
    console.error("Wikipedia data error:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch Wikipedia data",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
