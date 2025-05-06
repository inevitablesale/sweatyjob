import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { createClient } from "@/lib/supabase/server"
import CompetitorFAQSection from "@/components/competitor-faq-section"
import CompetitorFeatureComparison from "@/components/competitor-feature-comparison"
import PartnerB2BSection from "@/components/partner-b2b-section"
import { Breadcrumb } from "@/components/breadcrumb"
import WikipediaDataDisplay from "@/components/wikipedia-data-display"
import CensusDataDisplay from "@/components/census-data-display"
import POIDataDisplay from "@/components/poi-data-display"
import LocalWeatherWidget from "@/components/local-weather-widget"
import PeopleAlsoSearchGrid from "@/components/people-also-search-grid"
import { generateCityIntro, generateMarketInsights, generateCompetitorComparison } from "@/lib/content-templates"

// Import Schema markup component
import CompetitorSchemaMarkup from "@/components/competitor-schema-markup"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params

  // Fetch competitor data
  const supabase = createClient()
  const { data: competitor } = await supabase.from("competitors").select("*").eq("slug", slug).single()

  if (!competitor) {
    return {
      title: "Competitor Not Found",
      description: "The requested competitor comparison could not be found.",
    }
  }

  // Format the competitor name and location for SEO
  const competitorName = competitor.title || ""
  const location = competitor.city && competitor.state ? `${competitor.city}, ${competitor.state}` : "Your Area"

  return {
    title: `SweatyJob vs ${competitorName} in ${location} | Lawn Care Comparison`,
    description: `Compare SweatyJob's modern lawn care service with ${competitorName} in ${location}. See how our daily robotic mowing outperforms ${competitorName}'s traditional approach.`,
    openGraph: {
      title: `SweatyJob vs ${competitorName} - Lawn Care Comparison`,
      description: `See how SweatyJob's innovative lawn care service compares to ${competitorName} in ${location}. Daily robotic mowing, smart technology, and better pricing.`,
      type: "website",
    },
  }
}

export default async function ComparisonPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Log the template being loaded
  console.log("Loading template: Competitor Comparison Page for", slug)

  // Fetch competitor data with reviews
  const supabase = createClient()
  const { data: competitor, error: competitorError } = await supabase
    .from("competitors")
    .select("*")
    .eq("slug", slug)
    .single()

  if (competitorError || !competitor) {
    console.error("Error fetching competitor:", competitorError)
    notFound()
  }

  // Parse people_also_search JSON if it exists
  let peopleAlsoSearch = []
  try {
    if (competitor.people_also_search) {
      if (typeof competitor.people_also_search === "string") {
        peopleAlsoSearch = JSON.parse(competitor.people_also_search)
      } else {
        peopleAlsoSearch = competitor.people_also_search
      }
      console.log("People also search data:", peopleAlsoSearch)
    }
  } catch (error) {
    console.error("Error parsing people_also_search:", error)
  }

  // Extract reviews directly from the competitor object using review_text
  let competitorReviews = []
  try {
    if (competitor.review_text) {
      // If it's a single review
      competitorReviews = [
        {
          review_text: competitor.review_text,
          reviewer_name: competitor.reviewer_name || "Customer",
          review_rating: competitor.review_rating || competitor.google_rating || 4,
        },
      ]
    }
  } catch (error) {
    console.error("Error processing review data:", error)
  }

  // Extract city and state data
  const cityName = competitor.city || ""
  const stateName = competitor.state || ""

  // Prepare data containers
  let wikiData = null
  let censusData = null
  let poiData = null
  let weatherData = null
  let geocodeData = null
  let localAreaData = null

  if (cityName && stateName) {
    try {
      // 1. Fetch Wikipedia data
      const wikiResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/wikipedia-city-data?city=${encodeURIComponent(cityName)}&state=${encodeURIComponent(stateName)}`,
        { next: { revalidate: 86400 } }, // Cache for 24 hours
      )
      if (wikiResponse.ok) {
        wikiData = await wikiResponse.json()
        console.log("Wikipedia data fetched successfully:", wikiData?.title)
      }
    } catch (error) {
      console.error("Error fetching Wikipedia data:", error)
    }

    try {
      // 2. Fetch Census data
      const censusResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/census-data?city=${encodeURIComponent(cityName)}&state=${encodeURIComponent(stateName)}`,
        { next: { revalidate: 86400 } }, // Cache for 24 hours
      )
      if (censusResponse.ok) {
        censusData = await censusResponse.json()
        console.log("Census data fetched successfully for:", cityName)
      }
    } catch (error) {
      console.error("Error fetching Census data:", error)
    }

    try {
      // 3. Get geocode data for coordinates
      const geocodeResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/geocode?city=${encodeURIComponent(cityName)}&state=${encodeURIComponent(stateName)}`,
        { next: { revalidate: 86400 } }, // Cache for 24 hours
      )
      if (geocodeResponse.ok) {
        geocodeData = await geocodeResponse.json()
        console.log("Geocode data fetched successfully for:", cityName)

        // 4. If we have coordinates, fetch Points of Interest
        if (geocodeData?.coordinates) {
          const { lat, lng } = geocodeData.coordinates
          const poiResponse = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/points-of-interest?latitude=${lat}&longitude=${lng}`,
            { next: { revalidate: 86400 } }, // Cache for 24 hours
          )
          if (poiResponse.ok) {
            poiData = await poiResponse.json()
            console.log("POI data fetched successfully for:", cityName)
          }
        }
      }
    } catch (error) {
      console.error("Error fetching geocode or POI data:", error)
    }

    try {
      // 5. Fetch Weather data
      const weatherResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/weather?city=${encodeURIComponent(cityName)}&state=${encodeURIComponent(stateName)}`,
        { cache: "no-store" }, // Weather data should be fresh
      )
      if (weatherResponse.ok) {
        weatherData = await weatherResponse.json()
        console.log("Weather data fetched successfully for:", cityName)
      }
    } catch (error) {
      console.error("Error fetching weather data:", error)
    }

    try {
      // 6. Fetch local area data for additional insights
      const localAreaResponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/local-area-data?city=${encodeURIComponent(cityName)}&state=${encodeURIComponent(stateName)}`,
        { next: { revalidate: 86400 } }, // Cache for 24 hours
      )
      if (localAreaResponse.ok) {
        localAreaData = await localAreaResponse.json()
        console.log("Local area data fetched successfully for:", cityName)
      }
    } catch (error) {
      console.error("Error fetching local area data:", error)
    }
  }

  // Generate dynamic content using templates
  const cityData = {
    name: cityName,
    state: stateName,
    population: censusData?.population,
    medianIncome: censusData?.medianIncome,
    medianHomeValue: censusData?.medianHomeValue,
    homeownershipRate: censusData?.homeownershipRate ? censusData.homeownershipRate / 100 : undefined,
    wikipediaExtract: wikiData?.extract,
  }

  const competitorData = {
    name: competitor.title,
    reviewText: competitor.review_text,
    reviewerName: competitor.reviewer_name,
    rating: competitor.google_rating,
    priceLevel: competitor.price_level || "$$",
    category: competitor.business_category || "Lawn Care",
  }

  // Log which content templates are being used
  console.log("Generating content with templates: cityIntro, marketInsights, competitorComparison")

  const cityIntro = generateCityIntro(cityData)
  const marketInsights = generateMarketInsights(cityData)
  const competitorComparisonText = generateCompetitorComparison(competitorData, cityData)

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Comparisons", href: "/compare" },
    { label: `vs ${competitor.title}`, href: `/compare/${slug}` },
  ]

  // Get Wikipedia image URL
  const wikiImageUrl = wikiData?.image || wikiData?.imageUrl || null

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup for SEO */}
      <CompetitorSchemaMarkup
        competitor={competitor}
        city={cityName}
        state={stateName}
        reviews={competitorReviews || []}
        geocode={geocodeData?.coordinates}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-2 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section with Wikipedia Image */}
      <section className="relative">
        <div className="relative h-[400px] w-full">
          <Image
            src={
              wikiImageUrl ||
              `/placeholder.svg?height=800&width=1200&query=${encodeURIComponent(`${cityName || "/placeholder.svg"} ${stateName} landscape`)}`
            }
            alt={`${cityName}, ${stateName} - Compare SweatyJob to ${competitor.title}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <div className="text-center text-white p-8 max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">SweatyJob vs {competitor.title}</h1>
              <p className="text-xl md:text-2xl mb-6">
                Lawn Care Comparison in {cityName}, {stateName}
              </p>
              <a
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-yellow-400 hover:bg-yellow-500"
              >
                Try SweatyJob Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section with Dynamic Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Comparing SweatyJob to {competitor.title} in {cityName}
          </h2>

          <div className="prose prose-lg max-w-none">
            <p>{cityIntro}</p>

            <p>{marketInsights}</p>

            <p>{competitorComparisonText}</p>
          </div>
        </div>
      </section>

      {/* Weather Widget */}
      {weatherData && (
        <section className="py-8 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <LocalWeatherWidget weatherData={weatherData} city={cityName} competitor={competitor.title} />
          </div>
        </section>
      )}

      {/* Feature Comparison Table */}
      <CompetitorFeatureComparison
        competitorName={competitor.title}
        city={cityName}
        competitorData={competitor}
        reviews={competitorReviews || []}
      />

      {/* People Also Search Section */}
      {peopleAlsoSearch && peopleAlsoSearch.length > 0 && (
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">People Also Compare</h2>
            <PeopleAlsoSearchGrid competitors={peopleAlsoSearch} city={cityName} state={stateName} />
          </div>
        </section>
      )}

      {/* City Data Section - 3 column layout */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{cityName} Community Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WikipediaDataDisplay city={cityName} state={stateName} competitor={competitor.title} />
            <CensusDataDisplay city={cityName} state={stateName} competitor={competitor.title} />
            <POIDataDisplay city={cityName} state={stateName} competitor={competitor.title} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <CompetitorFAQSection
        competitorName={competitor.title}
        city={cityName}
        state={stateName}
        censusData={censusData}
      />

      {/* Call to Action */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade from {competitor.title}?</h2>
          <p className="text-xl mb-8">
            Experience the SweatyJob difference with our modern approach to lawn care in {cityName}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/book"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Partner B2B Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Partner With SweatyJob in {cityName}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Are you a lawn care professional looking to expand your business? Join our network of partners and access
              new revenue streams in {cityName}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Expand Your Business</h3>
              <p className="text-gray-300">
                Partner with SweatyJob to offer robotic mowing solutions to your existing customers. Increase your
                revenue without increasing labor costs.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Access New Technology</h3>
              <p className="text-gray-300">
                Get exclusive access to our cutting-edge robotic mowers and technology platform. Stay ahead of
                competitors like {competitor.title}.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-yellow-400">Local Market Insights</h3>
              <p className="text-gray-300">
                Leverage our detailed market data for {cityName} to target high-value neighborhoods and grow your
                customer base strategically.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/partners/form"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-black bg-yellow-400 hover:bg-yellow-500"
            >
              Become a Partner Today
            </a>
          </div>
        </div>
      </section>

      {/* Original Partner B2B Section - Hidden but kept for reference */}
      <div className="hidden">
        <PartnerB2BSection
          competitorName={competitor.title}
          city={cityName}
          state={stateName}
          censusData={censusData}
          poiData={poiData}
          localAreaData={localAreaData}
        />
      </div>
    </div>
  )
}
