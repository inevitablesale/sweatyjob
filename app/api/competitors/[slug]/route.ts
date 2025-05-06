import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug

  if (!slug) {
    return NextResponse.json({ error: "Slug is required" }, { status: 400 })
  }

  try {
    const supabase = createClient()

    // Query the competitors table
    const { data: competitor, error } = await supabase.from("competitors").select("*").eq("slug", slug).single()

    if (error) {
      console.error("Error fetching competitor:", error)
      return NextResponse.json({ error: "Failed to fetch competitor" }, { status: 500 })
    }

    if (!competitor) {
      return NextResponse.json({ error: "Competitor not found" }, { status: 404 })
    }

    // Get reviews for this competitor if available
    const { data: reviews } = await supabase
      .from("competitor_reviews")
      .select("*")
      .eq("competitor_id", competitor.id)
      .limit(5)

    // Format the response
    const formattedCompetitor = {
      id: competitor.id,
      name: competitor.name,
      slug: competitor.slug,
      city: competitor.city || "Norfolk",
      state: competitor.state || "Virginia",
      description: competitor.description,
      website: competitor.website,
      phone: competitor.phone,
      address: competitor.address,
      latitude: competitor.latitude || 36.8508,
      longitude: competitor.longitude || -76.2859,
      pricing: competitor.pricing || "$120/mo",
      reviewSnippet:
        reviews && reviews.length > 0 ? reviews[0].text : "They did a good job, but were hard to schedule again.",
      reviewAuthor: reviews && reviews.length > 0 ? reviews[0].author : "Local Customer",
      features: {
        noRainCancellations: competitor.no_rain_cancellations || false,
        service24_7: competitor.service_24_7 || false,
        appMonitoring: competitor.app_monitoring || false,
        noContracts: competitor.no_contracts || false,
      },
    }

    return NextResponse.json(formattedCompetitor)
  } catch (error) {
    console.error("Error in competitor API:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
