import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Tree Care Companies | SweatyJob",
  description:
    "Expand your tree care business with AI mowing technology in a $25-30B market growing at 4-5% annually. Create comprehensive property care packages that increase service frequency. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "tree care business expansion, AI mowers for arborists, recurring revenue, property care packages, tree health monitoring",
}

export default function TreeCarePros() {
  const data = {
    ...serviceVerticalsData["tree-care"],
    marketStats: {
      size: "Estimated $25–30 billion (industry consensus)",
      growth: "4–5% CAGR",
      drivers: ["Storm damage", "Urban tree planting initiatives", "Property value enhancement"],
      trends: ["Disease management", "Drone inspections", "Eco-friendly treatments"],
      integrationPotential:
        "AI mowers can potentially include tree health monitoring during regular mowing operations, providing added value through early detection of issues requiring professional tree care services",
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
