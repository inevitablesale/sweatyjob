import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Outdoor Lighting Companies | SweatyJob",
  description:
    "Create complete outdoor living solutions by combining lighting and AI mowing in a $3-4B market growing at 5-7% annually. Enhance lighting effects with perfect lawns. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "outdoor lighting business expansion, AI mowers for lighting companies, recurring lighting revenue, complete outdoor solutions, property enhancement",
}

export default function OutdoorLightingPros() {
  const data = {
    ...serviceVerticalsData["outdoor-lighting"],
    marketStats: {
      size: "$3–4 billion (landscape lighting segment)",
      growth: "5–7% CAGR",
      drivers: ["Security", "Aesthetics", "Energy efficiency"],
      trends: ["Solar-powered lights", "Smart controls", "Integrated design"],
      integrationPotential:
        "Outdoor lighting companies can enhance their lighting designs with consistently maintained lawns through AI mowing, creating complementary services that improve overall property aesthetics and generate recurring revenue",
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
