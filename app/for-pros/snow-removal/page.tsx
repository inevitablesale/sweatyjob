import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Snow Removal Companies | SweatyJob",
  description:
    "Transform your seasonal snow removal business into a year-round operation with AI mowing technology in a $20-22B market growing at 3-4% annually. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "snow removal business expansion, AI mowers for snow removal companies, year-round revenue, seasonal business solution, property maintenance",
}

export default function SnowRemovalPros() {
  const data = {
    ...serviceVerticalsData["snow-removal"],
    marketStats: {
      size: "$20–22 billion (includes all snow & ice management)",
      growth: "3–4% CAGR",
      drivers: ["Urbanization", "Liability concerns", "Unpredictable winters"],
      trends: ["GPS fleet tracking", "Eco-friendly deicers", "Subscription models"],
      integrationPotential:
        "Snow removal companies can transition seamlessly to AI mowing services in warmer months, creating year-round revenue and maintaining consistent customer relationships regardless of season",
    },
  }

  return (
    <ServiceVerticalTemplate
      title={data.title}
      slug={data.slug}
      description={data.description}
      icon={data.icon}
      heroImage={data.heroImage}
      benefits={data.benefits}
      integration={data.integration}
      faqs={data.faqs}
      removeImages={false}
      marketStats={data.marketStats}
    />
  )
}
