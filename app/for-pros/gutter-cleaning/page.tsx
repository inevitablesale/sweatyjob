import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Gutter Cleaning Companies | SweatyJob",
  description:
    "Expand your gutter cleaning business with AI mowing technology in a $700M-$1B market growing at 3-5% annually. Create year-round relationships with seasonal customers. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "gutter cleaning business expansion, AI mowers for gutter cleaners, recurring revenue, year-round business, property maintenance",
}

export default function GutterCleaningPros() {
  const data = {
    ...serviceVerticalsData["gutter-cleaning"],
    marketStats: {
      size: "Estimated $700 million–$1 billion",
      growth: "3–5% CAGR",
      drivers: ["Home maintenance", "Stormwater management", "Insurance requirements"],
      trends: ["Robotic gutter cleaners", "Bundled maintenance services"],
      integrationPotential:
        "SweatyJob's platform could help gutter cleaning companies maintain customer relationships between seasonal service appointments, providing consistent value and communication",
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
