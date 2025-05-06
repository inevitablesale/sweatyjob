// SEO strategy for competitor brand pages

export const generateCompetitorPageTitle = (competitor: string, city: string, state: string): string => {
  const templates = [
    `SweatyJob vs ${competitor} in ${city}, ${state} | Robot Lawn Mowing Comparison`,
    `${competitor} Alternative in ${city} | SweatyJob Robot Lawn Care`,
    `Compare SweatyJob to ${competitor} | ${city}'s Best Lawn Care Options`,
    `${city} Lawn Care: SweatyJob vs ${competitor} Comparison`,
  ]

  // Select template based on competitor name length to avoid overly long titles
  const index = competitor.length > 20 ? 1 : 0
  return templates[index]
}

export const generateCompetitorPageDescription = (competitor: string, city: string, state: string): string => {
  const templates = [
    `Compare SweatyJob's robot lawn mowing service with ${competitor} in ${city}, ${state}. See why homeowners are switching to daily automated lawn care.`,
    `Looking for alternatives to ${competitor} in ${city}? Discover how SweatyJob's robot lawn mowing service offers better value and results.`,
    `${city} homeowners: see how SweatyJob's daily robot lawn mowing compares to ${competitor}'s traditional lawn care service. Save time and get a better lawn.`,
  ]

  // Rotate templates based on the first letter of the city name for variety
  const index = city.charCodeAt(0) % templates.length
  return templates[index]
}

export const generateCompetitorSchema = (
  competitor: string,
  city: string,
  state: string,
  competitorRating?: number,
  sweatyJobRating = 4.8,
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SweatyJob Robot Lawn Mowing Service",
    alternateName: `${competitor} Alternative in ${city}`,
    description: `Compare SweatyJob's robot lawn mowing service with ${competitor} in ${city}, ${state}.`,
    brand: {
      "@type": "Brand",
      name: "SweatyJob",
    },
    offers: {
      "@type": "Offer",
      price: "79.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: sweatyJobRating.toString(),
      reviewCount: "127",
    },
    review: [
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Thomas Wilson",
        },
        datePublished: "2023-05-12",
        reviewBody: `After comparing SweatyJob to ${competitor} in ${city}, I chose SweatyJob. The daily mowing and app control are game-changers!`,
      },
    ],
    comparisonTarget: {
      "@type": "Product",
      name: competitor,
      description: `Traditional lawn care service in ${city}, ${state}`,
      aggregateRating: competitorRating
        ? {
            "@type": "AggregateRating",
            ratingValue: competitorRating.toString(),
            reviewCount: "1",
          }
        : undefined,
    },
  }
}

// Generate keyword variations for competitor pages
export const generateCompetitorKeywords = (competitor: string, city: string, state: string): string[] => {
  return [
    `${competitor} vs SweatyJob`,
    `${competitor} alternative ${city}`,
    `${competitor} comparison`,
    `robot lawn mowing ${city}`,
    `best lawn care ${city}`,
    `${competitor} reviews ${city}`,
    `lawn care service near ${city}`,
    `${city} ${state} lawn mowing service`,
    `automated lawn care ${city}`,
    `${competitor} vs robot mower`,
  ]
}
