import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Pest Control Companies | SweatyJob",
  description:
    "Expand your pest control business with AI mowing technology in a $26.2B market growing at 5% annually. Create bundled services and increase customer retention. Add AI mowing to your service offerings with zero upfront costs or inventory.",
  keywords:
    "pest control business expansion, AI mowers for pest companies, recurring revenue, customer retention, pest control market growth",
}

export default function PestControlPros() {
  const data = {
    ...serviceVerticalsData["pest-control"],
    marketStats: {
      size: "$26.2 billion (2024)",
      growth: "~5% CAGR (industry consensus)",
      drivers: [
        "Rising urbanization",
        "Climate change increasing pest prevalence",
        "Regulatory focus on public health",
      ],
      trends: ["Integrated pest management", "Eco-friendly chemicals", "Digital scheduling and monitoring systems"],
      integrationPotential:
        "AI mowers can incorporate pest monitoring capabilities during lawn maintenance, creating integrated service opportunities for the same customer base",
    },
    roiImpacts: [
      {
        title: "Complementary Service Revenue",
        description: "Add a natural upsell to your pest control services with AI mowing.",
        before: "Single Service Income",
        after: "Multi-Service Revenue Streams",
      },
      {
        title: "Reduced Cancellation Rates",
        description: "Create multiple service touchpoints that make customers less likely to switch providers.",
        before: "30-40% Annual Churn",
        after: "Under 15% Annual Churn",
      },
      {
        title: "Enhanced Treatment Effectiveness",
        description: "Consistently mowed lawns improve pest treatment penetration and effectiveness.",
        before: "Variable Treatment Results",
        after: "Consistent Pest Control Success",
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
