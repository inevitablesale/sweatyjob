import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import CompetitorDetailPageClient from "./CompetitorDetailPageClient"
import { fetchWikipediaArticle } from "@/lib/wiki-api"
import { getCityCoordinates } from "@/app/actions/geocoding"
import { getNeighborhoodText } from "@/lib/neighborhood-utils"
import { SchemaMarkup } from "@/app/components/seo/schema-markup"
import { LawnServiceComparisonSchema } from "@/app/schema/lawn-mowing-schema"
import InlineForm from "../InlineForm"

interface Competitor {
  id: string
  name: string
  title?: string
  logo: string
  city?: string
  state?: string
  slug: string
}

async function getCompetitorBySlug(slug: string): Promise<Competitor | null> {
  console.log(`🔍 Server: Fetching competitor data for slug: ${slug}`)
  const supabase = createServerComponentClient({ cookies })
  const { data, error } = await supabase.from("competitors").select("*").eq("slug", slug).single()

  if (error) {
    console.error(`❌ Server: Error fetching competitor:`, error)
    return null
  }

  console.log(`✅ Server: Competitor data retrieved:`, data)
  return data
}

async function getCityInfo(city: string, state: string) {
  console.log(`🔍 Server: Fetching city info for: ${city}, ${state}`)

  // Direct call to Wikipedia API using our utility function
  const wikiArticle = await fetchWikipediaArticle(`${city}, ${state}`)

  if (wikiArticle) {
    console.log(`✅ Server: Wikipedia article found for "${city}, ${state}"`)
    return wikiArticle
  }

  // If first attempt fails, try alternative format
  console.log(`🔍 Server: Trying alternative format: ${city} (${state})`)
  const alternativeArticle = await fetchWikipediaArticle(`${city} (${state})`)

  if (alternativeArticle) {
    console.log(`✅ Server: Wikipedia article found for "${city} (${state})"`)
    return alternativeArticle
  }

  console.log(`⚠️ Server: No Wikipedia article found for ${city}, ${state}`)
  return null
}

export default async function CompetitorDetailPage({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { city?: string }
}) {
  const competitor = await getCompetitorBySlug(params.slug)

  if (!competitor) {
    return <div>Competitor not found</div>
  }

  // Fetch additional data
  let cityInfo = null
  let cityCoordinates = null
  let neighborhoodText = null

  if (competitor.city && competitor.state) {
    // Get city information from Wikipedia
    cityInfo = await getCityInfo(competitor.city, competitor.state)

    // Get city coordinates
    console.log(`🔍 Server: Fetching coordinates for ${competitor.city}, ${competitor.state}`)
    cityCoordinates = await getCityCoordinates(competitor.city, competitor.state)
    console.log(`✅ Server: City coordinates:`, cityCoordinates?.features?.[0]?.center || "Not found")

    // Get neighborhood text
    console.log(`🔍 Server: Fetching neighborhood text for ${competitor.city}, ${competitor.state}`)
    neighborhoodText = await getNeighborhoodText(competitor.city, competitor.state)
    console.log(`✅ Server: Neighborhood text length: ${neighborhoodText?.length || 0}`)
  }

  return (
    <>
      <SchemaMarkup schema={LawnServiceComparisonSchema} />
      <CompetitorDetailPageClient
        competitor={competitor}
        cityInfo={cityInfo}
        cityCoordinates={cityCoordinates}
        neighborhoodText={neighborhoodText}
        searchParams={searchParams}
      />

      <section id="get-started" className="py-16 bg-black">
        <div className="max-w-xl mx-auto px-4">
          <InlineForm />
        </div>
      </section>
    </>
  )
}
