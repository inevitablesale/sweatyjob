import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import CompetitorDetailPageClient from "./CompetitorDetailPageClient"
import { fetchWikipediaArticle } from "@/lib/wiki-api"
import { getCityCoordinates } from "@/app/actions/geocoding"
import { getNeighborhoodText } from "@/lib/neighborhood-utils"
import { SchemaMarkup } from "@/app/components/seo/schema-markup"
import {
  LawnServiceComparisonSchema,
  LawnMowingServiceSchema,
  LawnMowingFAQSchema,
  LawnMowingLocalBusinessSchema,
  LawnMowingHowToSchema,
  RobotMowerProductSchema,
  LawnMowingBreadcrumbSchema,
  SpeakableLawnMowingSchema,
  LawnMowingVideoSchema,
} from "@/app/schema/lawn-mowing-schema"

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

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams: { city?: string }
}) {
  const supabase = createServerComponentClient({ cookies })
  const { data: competitor } = await supabase.from("competitors").select("*").eq("slug", params.slug).single()

  // Get city from competitor data or search params, with fallback
  const cityFromData = competitor?.city || searchParams.city || "richmond"
  const cityName = cityFromData.charAt(0).toUpperCase() + cityFromData.slice(1).replace("-", " ")
  const competitorTitle = competitor?.title || competitor?.name || "Traditional Lawn Service"

  return {
    title: `${competitorTitle} vs SweatyJob | Lawn Mowing Service in ${cityName}`,
    description: `Compare SweatyJob's robot lawn mowing service with ${competitorTitle} in ${cityName}. Daily mowing at $79/month vs weekly service at $160-200/month.`,
    openGraph: {
      title: `${competitorTitle} vs SweatyJob | Lawn Mowing Service in ${cityName}`,
      description: `Compare SweatyJob's robot lawn mowing service with ${competitorTitle} in ${cityName}. Daily mowing at $79/month vs weekly service at $160-200/month.`,
      type: "website",
      locale: "en_US",
      url: `https://sweatyjob.com/compare/${params.slug}`,
      siteName: "SweatyJob",
      images: [
        {
          url: "https://www.bestmow.com/cdn/shop/files/30.png?v=1744042530&width=3600",
          width: 3600,
          height: 2025,
          alt: "SweatyJob Robot Lawn Mower creating perfect stripes",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${competitorTitle} vs SweatyJob | Lawn Mowing Service in ${cityName}`,
      description: `Compare SweatyJob's robot lawn mowing service with ${competitorTitle} in ${cityName}. Daily mowing at $79/month vs weekly service at $160-200/month.`,
      images: ["https://www.bestmow.com/cdn/shop/files/30.png?v=1744042530&width=3600"],
    },
    alternates: {
      canonical: `https://sweatyjob.com/compare/${params.slug}`,
    },
  }
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

  // Get city from competitor data, not from search params
  const competitorCity = competitor.city || ""
  const competitorState = competitor.state || ""

  if (competitorCity && competitorState) {
    // Get city information from Wikipedia
    cityInfo = await getCityInfo(competitorCity, competitorState)

    // Get city coordinates
    console.log(`🔍 Server: Fetching coordinates for ${competitorCity}, ${competitorState}`)
    cityCoordinates = await getCityCoordinates(competitorCity, competitorState)
    console.log(`✅ Server: City coordinates:`, cityCoordinates?.features?.[0]?.center || "Not found")

    // Get neighborhood text
    console.log(`🔍 Server: Fetching neighborhood text for ${competitorCity}, ${competitorState}`)
    neighborhoodText = await getNeighborhoodText(competitorCity, competitorState)
    console.log(`✅ Server: Neighborhood text length: ${neighborhoodText?.length || 0}`)
  }

  // Use the city from competitor data, not from search params
  const cityName = competitorCity.charAt(0).toUpperCase() + competitorCity.slice(1).replace("-", " ")
  const stateName = competitorState
  const competitorTitle = competitor.title || competitor.name

  // Create customized schema objects with the competitor and city information
  const customizedServiceSchema = {
    ...LawnMowingServiceSchema,
    name: `Robot Lawn Mowing Service Near Me in ${cityName}`,
    description: `Professional robot lawn mowing service in ${cityName}. Daily mowing with AI technology for a perfect lawn without the work. Starting at $79/month.`,
    areaServed: [
      cityName,
      ...(LawnMowingServiceSchema.areaServed as string[]).filter((area) => !area.includes(cityName)),
    ],
  }

  const customizedFAQSchema = {
    ...LawnMowingFAQSchema,
    mainEntity: LawnMowingFAQSchema.mainEntity.map((faq: any) => ({
      ...faq,
      name: faq.name.replace(/Richmond/g, cityName),
      acceptedAnswer: {
        ...faq.acceptedAnswer,
        text: faq.acceptedAnswer.text.replace(/Richmond/g, cityName),
      },
    })),
  }

  const customizedLocalBusinessSchema = {
    ...LawnMowingLocalBusinessSchema,
    name: `SweatyJob Robot Lawn Mowing in ${cityName}`,
    address: {
      ...LawnMowingLocalBusinessSchema.address,
      addressLocality: cityName,
      addressRegion: stateName || "VA",
    },
    geo: cityCoordinates?.features?.[0]?.center
      ? {
          "@type": "GeoCoordinates",
          latitude: cityCoordinates.features[0].center[1],
          longitude: cityCoordinates.features[0].center[0],
        }
      : LawnMowingLocalBusinessSchema.geo,
  }

  const customizedHowToSchema = {
    ...LawnMowingHowToSchema,
    name: `How To Get Started With Robot Lawn Mowing Service in ${cityName}`,
    description: `Step-by-step guide to setting up robot lawn mowing service for your ${cityName} home`,
  }

  const customizedProductSchema = {
    ...RobotMowerProductSchema,
    name: `SweatyJob Robot Lawn Mower Service in ${cityName}`,
    description: `AI-powered robot lawn mower service that cuts your grass daily for a perfect lawn in ${cityName} without the work.`,
  }

  const customizedBreadcrumbSchema = {
    ...LawnMowingBreadcrumbSchema,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sweatyjob.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compare",
        item: "https://sweatyjob.com/compare",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${competitorTitle} vs SweatyJob`,
        item: `https://sweatyjob.com/compare/${params.slug}`,
      },
    ],
  }

  const customizedSpeakableSchema = {
    ...SpeakableLawnMowingSchema,
    name: `Compare Robot Lawn Mowing Services in ${cityName}`,
    description: `Compare robot lawn mowing services with ${competitorTitle} in ${cityName}. Daily mowing at $79/month versus weekly service at $160-240/month.`,
  }

  // Updated Video Schema with the absolute URL for the thumbnail
  const customizedVideoSchema = {
    ...LawnMowingVideoSchema,
    name: `Robot Lawn Mowing Service Demo in ${cityName}`,
    description: `See how our robot mower service works to keep your ${cityName} lawn perfectly maintained every day.`,
    thumbnailUrl: "https://www.bestmow.com/cdn/shop/files/30.png?v=1744042530&width=3600",
    uploadDate: new Date().toISOString().split("T")[0], // Use current date formatted as YYYY-MM-DD
  }

  // Customize the comparison schema with the city name
  const customizedComparisonSchema = {
    ...LawnServiceComparisonSchema,
    abstract: `Comparison of robot lawn mowing services versus traditional lawn care services in ${cityName}, ${stateName || "VA"}`,
  }

  return (
    <>
      {/* All Schema Markup for SEO */}
      <SchemaMarkup schema={customizedServiceSchema} />
      <SchemaMarkup schema={customizedFAQSchema} />
      <SchemaMarkup schema={customizedLocalBusinessSchema} />
      <SchemaMarkup schema={customizedHowToSchema} />
      <SchemaMarkup schema={customizedProductSchema} />
      <SchemaMarkup schema={customizedBreadcrumbSchema} />
      <SchemaMarkup schema={customizedSpeakableSchema} />
      <SchemaMarkup schema={customizedVideoSchema} />
      <SchemaMarkup schema={customizedComparisonSchema} />

      <CompetitorDetailPageClient
        competitor={competitor}
        cityInfo={cityInfo}
        cityCoordinates={cityCoordinates}
        neighborhoodText={neighborhoodText}
        searchParams={searchParams}
      />
    </>
  )
}
