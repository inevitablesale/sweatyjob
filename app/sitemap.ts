import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
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

  return [...basePages, ...neighborhoodPages, ...servicePages, ...neighborhoodServicePages]
}
