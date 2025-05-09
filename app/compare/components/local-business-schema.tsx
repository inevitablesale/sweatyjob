interface LocalBusinessSchemaProps {
  business: {
    id: string
    name: string
    city?: string
    state?: string
    lat?: number
    lng?: number
    street?: string
    google_maps_url?: string
    phone?: string
    website?: string
    postal_code?: string
    rating?: number
    reviews?: number
    services?: string[]
    description?: string
    hours?: string
    priceRange?: string
    yearEstablished?: number
  }
}

export default function LocalBusinessSchema({ business }: LocalBusinessSchemaProps) {
  // Create the structured data object
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://sweatyjob.com/compare/competitors/${business.id}`,
    name: business.name,
    description:
      business.description ||
      `${business.name} provides lawn mowing and lawn care services in ${business.city}, ${business.state}.`,
    image: business.logo || "",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.street || "",
      addressLocality: business.city || "",
      addressRegion: business.state || "",
      postalCode: business.postal_code || "",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.lat || 0,
      longitude: business.lng || 0,
    },
    url: business.website || "",
    telephone: business.phone || "",
    sameAs: business.google_maps_url ? [business.google_maps_url] : [],
    openingHoursSpecification: business.hours
      ? {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00",
        }
      : undefined,
    priceRange: business.priceRange || "$$",
    foundingDate: business.yearEstablished ? `${business.yearEstablished}` : undefined,
    aggregateRating: business.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: business.rating,
          reviewCount: business.reviews || 0,
          bestRating: "5",
          worstRating: "1",
        }
      : undefined,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lawn Care Services",
      itemListElement: business.services
        ? business.services.map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service,
            },
          }))
        : [],
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
