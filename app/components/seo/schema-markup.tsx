import type React from "react"

interface SchemaMarkupProps {
  schema: Record<string, any>
}

export const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ schema }) => {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

// Home page schema
export const HomePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SweatyJob Robot Lawn Mowing",
  url: "https://sweatyjob.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://sweatyjob.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
}

// Repair Alternative Schema
export const RepairAlternativeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lawn Mower Repair Alternative",
  serviceType: "Robot Lawn Mowing",
  description:
    "Instead of repairing your lawn mower, switch to our robot mowing service. No more repairs, maintenance, or hassle.",
  provider: {
    "@type": "LocalBusiness",
    name: "SweatyJob",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Richmond",
      addressRegion: "VA",
    },
  },
  areaServed: "Richmond, VA",
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
  },
}

// Robot Mower Schema
export const RobotMowerSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Robot Lawn Mower Service",
  description: "Daily lawn mowing with AI-powered robot mowers",
  brand: {
    "@type": "Brand",
    name: "SweatyJob",
  },
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
  },
}

// Service Schema
export const ServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lawn Mowing Service Near Me",
  serviceType: "Robot Lawn Mowing",
  provider: {
    "@type": "LocalBusiness",
    name: "SweatyJob",
  },
  areaServed: "Richmond, VA",
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
  },
}

// Equipment Alternative Schema
export const EquipmentAlternativeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lawn Mowing Equipment Alternative",
  serviceType: "Robot Lawn Mowing",
  description: "No need to buy or rent lawn mowing equipment. Our robot service handles everything.",
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
  },
}
