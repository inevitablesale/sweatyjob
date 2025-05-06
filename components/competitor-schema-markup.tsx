"use client"

import { JsonLd } from "react-schemaorg"

interface CompetitorSchemaMarkupProps {
  competitor: any
  city: string
  state: string
  reviews: any[]
  geocode?: { lat: number; lng: number }
}

export default function CompetitorSchemaMarkup({
  competitor,
  city,
  state,
  reviews,
  geocode,
}: CompetitorSchemaMarkupProps) {
  // Format schema data for competitor
  const competitorSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: competitor.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: competitor.city || city,
      addressRegion: competitor.state || state,
      addressCountry: "US",
    },
    ...(competitor.phone && { telephone: competitor.phone }),
    ...(competitor.website && { url: competitor.website }),
    ...(competitor.google_rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: competitor.google_rating,
        reviewCount: competitor.google_review_count || 10,
      },
    }),
    ...(geocode && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: geocode.lat,
        longitude: geocode.lng,
      },
    }),
  }

  // Format schema for SweatyJob
  const sweatyJobSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SweatyJob",
    description: `SweatyJob provides premium lawn care services in ${city}, ${state} with automated robotic mowers for daily lawn maintenance.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: state,
      addressCountry: "US",
    },
    telephone: "(800) SWEATY-JOB",
    url: "https://sweatyjob.com",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "250",
    },
  }

  // Format comparison page schema
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `SweatyJob vs ${competitor.name} - Lawn Care Comparison in ${city}, ${state}`,
    description: `Compare SweatyJob's modern lawn care service with ${competitor.name} in ${city}, ${state}. See how our daily robotic mowing outperforms ${competitor.name}'s traditional approach.`,
    about: [
      {
        "@type": "Thing",
        name: "Lawn Care",
      },
      {
        "@type": "Thing",
        name: "Robotic Lawn Mowers",
      },
    ],
    mentions: [
      {
        "@type": "Thing",
        name: competitor.name,
      },
      {
        "@type": "Thing",
        name: `${city}, ${state}`,
      },
    ],
  }

  // Format FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How does SweatyJob compare to ${competitor.name} in ${city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `SweatyJob offers daily robotic lawn mowing while ${competitor.name} typically provides weekly or bi-weekly service. Our automated approach ensures your lawn is always at the perfect height, with no noise pollution or scheduling hassles.`,
        },
      },
      {
        "@type": "Question",
        name: `Is SweatyJob more expensive than ${competitor.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `When you consider the daily service, enhanced lawn health benefits, and elimination of additional services like dethatching, aeration, and overseeding, SweatyJob offers significantly better value compared to ${competitor.name}'s traditional service model.`,
        },
      },
      {
        "@type": "Question",
        name: `Which is better for lawn health, SweatyJob or ${competitor.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `SweatyJob's daily micro-cutting approach creates a healthier, more resilient lawn compared to ${competitor.name}'s less frequent mowing. Our approach results in denser turf, stronger root systems, natural weed suppression, and better drought resistance.`,
        },
      },
    ],
  }

  return (
    <>
      <JsonLd item={competitorSchema} />
      <JsonLd item={sweatyJobSchema} />
      <JsonLd item={comparisonSchema} />
      <JsonLd item={faqSchema} />
    </>
  )
}
