import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import ComparePageClient from "./ComparePageClient"
import {
  LawnMowingServiceSchema,
  LawnMowingFAQSchema,
  LawnMowingLocalBusinessSchema,
  LawnMowingBreadcrumbSchema,
  SpeakableLawnMowingSchema,
  LawnServiceComparisonSchema,
} from "@/app/schema/lawn-mowing-schema"
import { SchemaMarkup } from "@/app/components/seo/schema-markup"

export const metadata: Metadata = {
  title: "Compare Lawn Mowing Services Near Me | SweatyJob Robot Mower",
  description:
    "Find and compare the best lawn mowing services near you. SweatyJob's robot mowers outperform traditional lawn services with daily mowing at half the cost.",
  openGraph: {
    title: "Compare Lawn Mowing Services Near Me | SweatyJob Robot Mower",
    description:
      "Find and compare the best lawn mowing services near you. SweatyJob's robot mowers outperform traditional lawn services with daily mowing at half the cost.",
    images: ["/lawn-mowing-service-comparison.png"],
  },
  keywords:
    "lawn mowing near me, lawn mowing service near me, affordable lawn mowing, lawn mowing prices, lawn care service, best lawn mowing service, cheap lawn mowing near me, residential lawn mowing",
}

export default async function ComparePage() {
  const supabase = createClient()

  // Fetch all unique cities from the competitors table
  const { data: cities, error: citiesError } = await supabase
    .from("competitors")
    .select("city")
    .not("city", "is", null)
    .order("city")

  if (citiesError) {
    console.error("Error fetching cities:", citiesError)
  }

  // Get unique cities
  const uniqueCities = cities
    ? Array.from(new Set(cities.map((item) => item.city)))
        .filter(Boolean)
        .map((city) => ({
          id: city.toLowerCase().replace(/\s+/g, "-"),
          name: city,
        }))
    : []

  // Fetch all competitors
  const { data: competitors, error: competitorsError } = await supabase.from("competitors").select("*").order("title")

  if (competitorsError) {
    console.error("Error fetching competitors:", competitorsError)
  }

  return (
    <>
      {/* Schema Markup for SEO */}
      <SchemaMarkup schema={LawnMowingServiceSchema} />
      <SchemaMarkup schema={LawnMowingFAQSchema} />
      <SchemaMarkup schema={LawnMowingLocalBusinessSchema} />
      <SchemaMarkup schema={LawnMowingBreadcrumbSchema} />
      <SchemaMarkup schema={SpeakableLawnMowingSchema} />
      <SchemaMarkup schema={LawnServiceComparisonSchema} />

      <ComparePageClient cities={uniqueCities} competitors={competitors || []} />
    </>
  )
}
