import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { SchemaMarkup } from "@/app/components/seo/schema-markup"
import { LawnServiceComparisonSchema } from "@/app/schema/lawn-mowing-schema"

type Props = {
  params: { slug: string }
  searchParams: { city?: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const supabase = createClient()
  const { data: competitor } = await supabase.from("competitors").select("*").eq("slug", params.slug).single()

  return {
    title: competitor
      ? `SweatyJob vs ${competitor.title} | Lawn Mowing Service Comparison`
      : "Compare Lawn Mowing Services | SweatyJob",
    description: `Compare SweatyJob's robot lawn mowing service with ${
      competitor?.title || "traditional lawn services"
    }. See how our daily mowing at $79/month compares to traditional weekly service.`,
    openGraph: {
      title: competitor
        ? `SweatyJob vs ${competitor.title} | Lawn Mowing Service Comparison`
        : "Compare Lawn Mowing Services | SweatyJob",
      description: `Compare SweatyJob's robot lawn mowing service with ${
        competitor?.title || "traditional lawn services"
      }. See how our daily mowing at $79/month compares to traditional weekly service.`,
    },
  }
}

export default async function Page({ params, searchParams }: Props) {
  const supabase = createClient()

  // Get the competitor details
  const { data: competitor } = await supabase.from("competitors").select("*").eq("slug", params.slug).single()

  // Get city information if provided
  let city = null
  if (searchParams.city) {
    const { data: cityData } = await supabase.from("competitors").select("city").eq("city", searchParams.city).single()

    if (cityData) {
      city = cityData.city
    }
  }

  return (
    <>
      <SchemaMarkup schema={LawnServiceComparisonSchema} />

      <div className="min-h-screen bg-black text-white pt-16">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 speakable-content">
            SweatyJob vs {competitor?.title || "Traditional Lawn Service"}
          </h1>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl speakable-content">
            See how SweatyJob's robot mowing service compares to {competitor?.title || "traditional lawn services"}
            {city ? ` in ${city}` : ""}.
          </p>

          {/* Placeholder for the actual comparison page component */}
          <p className="text-gray-400">
            Detailed comparison coming soon. This page will show a side-by-side comparison of SweatyJob's robot mowing
            service and {competitor?.title || "the selected lawn service"}.
          </p>
        </div>
      </div>
    </>
  )
}
