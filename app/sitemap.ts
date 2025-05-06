import type { MetadataRoute } from "next"
import { createClient } from "@supabase/supabase-js"

// Add this function to generate competitor comparison URLs
async function getCompetitorUrls() {
  try {
    // Create a server-side Supabase client
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || "",
      process.env.SUPABASE_SERVICE_ROLE_KEY || "",
    )

    // Get competitors data
    const { data: competitors } = await supabase.from("competitors").select("name, city, state").limit(100) // Adjust based on how many you want to include

    if (!competitors || competitors.length === 0) {
      return []
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sweatyjob.com"

    // Generate URLs for each competitor
    return competitors.map((competitor) => {
      const name = competitor.name.toLowerCase().replace(/\s+/g, "-")
      const city = competitor.city?.toLowerCase().replace(/\s+/g, "-") || ""
      const state = competitor.state?.toLowerCase() || ""

      return {
        url: `${baseUrl}/compare/${name}-${city}-${state}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      }
    })
  } catch (error) {
    console.error("Error generating competitor URLs:", error)
    return []
  }
}

// In the sitemap function, add the competitor URLs
export default async function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sweatyjob.com"

  // Richmond neighborhoods for SEO
  const neighborhoods = [
    "fan-district",
    "church-hill",
    "westover-hills",
    "ginter-park",
    "woodland-heights",
    "windsor-farms",
    "battery-park",
    "bellevue",
    "laburnum-park",
    "sherwood-park",
    "rosedale",
  ]

  // Services for SEO
  const services = [
    "lawn-mowing",
    "pressure-washing",
    "window-cleaning",
    "flower-bed-maintenance",
    "grill-cleaning",
    "deck-maintenance",
  ]

  // Base pages
  const basePages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/realtor`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/neighborhoods`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/waitlist`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/robots/lawn-mowing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/robots/lawn-mower-repair`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/robots/lawn-mower-rental`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/robots/lawn-mower-repair#mobile`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/robots/lawn-mower-repair#services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  // Generate neighborhood pages
  const neighborhoodPages = neighborhoods.map((neighborhood) => ({
    url: `${baseUrl}/neighborhoods/${neighborhood}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  // Generate service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Generate neighborhood+service combination pages for maximum SEO coverage
  const neighborhoodServicePages = neighborhoods.flatMap((neighborhood) =>
    services.map((service) => ({
      url: `${baseUrl}/neighborhoods/${neighborhood}/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  )

  // Get competitor comparison URLs
  const competitorPages = await getCompetitorUrls()

  return [...basePages, ...neighborhoodPages, ...servicePages, ...neighborhoodServicePages, ...competitorPages]
}
