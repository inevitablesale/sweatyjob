import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Exterior Painting Companies | SweatyJob",
  description:
    "Expand your exterior painting business with AI mowing technology in a market that's part of the $40B+ painting industry growing at 4-5% annually. Create ongoing relationships after painting projects are complete. Add AI mowing with zero upfront costs.",
  keywords:
    "exterior painting business expansion, AI mowers for painters, recurring revenue, ongoing customer relationships, property maintenance",
}

export default function ExteriorPaintingPros() {
  const data = {
    ...serviceVerticalsData["exterior-painting"],
    marketStats: {
      size: "Part of the $40+ billion painting contractors industry",
      growth: "4–5% CAGR",
      drivers: ["Home improvement cycles", "Weathering", "Property sales"],
      trends: ["Low-VOC paints", "Drone-based inspections"],
      integrationPotential:
        "Exterior painting companies can leverage AI mowing services to maintain relationships with customers between paint jobs, potentially leading to earlier repaint opportunities and expanded service offerings",
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
