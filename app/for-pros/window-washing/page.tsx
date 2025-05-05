import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Window Washing Companies | SweatyJob",
  description:
    "Expand your window washing business with AI mowing technology in a $2-3B market growing at 4-5% annually. Create comprehensive property care packages that increase service frequency. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "window washing business expansion, AI mowers for window washers, recurring revenue, property care packages, customer retention",
}

export default function WindowWashingPros() {
  const data = {
    ...serviceVerticalsData["window-washing"],
    marketStats: {
      size: "Estimated $2–3 billion",
      growth: "4–5% CAGR",
      drivers: ["Commercial building boom", "High-rise maintenance", "Residential demand"],
      trends: ["Water-fed pole systems", "Eco-friendly cleaning solutions"],
      integrationPotential:
        "Window washing companies can leverage AI mowing as part of complete property presentation packages, maintaining consistent customer touchpoints and creating more predictable revenue",
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
