import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Mosquito Control Companies | SweatyJob",
  description:
    "Enhance your mosquito control business with AI mowing in a $900M-$1.2B market growing at 6-8% annually. Create complete outdoor solutions that retain customers longer. Add AI mowing to your service offerings with zero upfront costs or inventory.",
  keywords:
    "mosquito control business expansion, AI mowers for mosquito companies, recurring revenue, customer retention, mosquito control market growth",
}

export default function MosquitoControlPros() {
  const data = {
    ...serviceVerticalsData["mosquito-control"],
    marketStats: {
      size: "$900 million–$1.2 billion (industry reports)",
      growth: "6–8% CAGR",
      drivers: [
        "Expanding mosquito-borne disease concerns",
        "Municipal contracts",
        "Residential demand for outdoor comfort",
      ],
      trends: ["Use of smart traps", "Biological control methods", "Targeted spraying technologies"],
      integrationPotential:
        "Regular mowing helps reduce mosquito breeding grounds, creating natural synergies between these services. AI mowers could incorporate mosquito monitoring or treatment capabilities.",
    },
    roiImpacts: [
      {
        title: "Year-Round Business Model",
        description: "Generate revenue during off-season months when mosquito treatments aren't needed.",
        before: "Seasonal Business Cycle",
        after: "Consistent Monthly Income",
      },
      {
        title: "Increased Treatment Efficacy",
        description: "Regularly mowed lawns reduce mosquito resting areas and improve treatment coverage.",
        before: "Variable Mosquito Control",
        after: "Enhanced Protection Results",
      },
      {
        title: "Complete Outdoor Solution",
        description: "Offer customers a comprehensive approach to outdoor comfort and enjoyment.",
        before: "Single-Focus Service",
        after: "Total Outdoor Experience",
      },
    ],
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
      roiImpacts={data.roiImpacts}
    />
  )
}
