import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Driveway Sealing Companies | SweatyJob",
  description:
    "Expand your driveway sealing business with AI mowing technology in a $1-1.5B market growing at 3-5% annually. Create year-round relationships with seasonal customers. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "driveway sealing business expansion, AI mowers for driveway companies, recurring revenue, year-round business, property maintenance",
}

export default function DrivewaySealing() {
  const data = {
    ...serviceVerticalsData["driveway-sealing"],
    marketStats: {
      size: "Estimated $1–1.5 billion",
      growth: "3–5% CAGR",
      drivers: ["Asphalt maintenance", "Weather protection", "Property value"],
      trends: ["Eco-friendly sealants", "Bundled exterior services"],
      integrationPotential:
        "Driveway sealing companies can leverage AI mowing to maintain customer relationships between sealing appointments, potentially shortening the resealing cycle through more consistent property care",
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
