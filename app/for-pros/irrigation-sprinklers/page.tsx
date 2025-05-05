import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Irrigation & Sprinkler Companies | SweatyJob",
  description:
    "Combine irrigation expertise with AI mowing technology in a market growing at 5-7% annually. Create a complete lawn care system that maximizes water efficiency and customer satisfaction. Add AI mowing to your service offerings with zero upfront costs or inventory.",
  keywords:
    "irrigation business expansion, sprinkler companies, AI mowers for irrigation professionals, smart lawn ecosystem, irrigation market growth",
}

export default function IrrigationSprinklersPros() {
  const data = {
    ...serviceVerticalsData["irrigation-sprinklers"],
    marketStats: {
      size: "Irrigation services are a major segment within landscaping, contributing billions annually",
      growth: "5–7% CAGR",
      drivers: [
        "Water conservation mandates",
        "Drought in key states (e.g., California)",
        "Technology adoption (smart irrigation)",
      ],
      trends: ["Smart controllers", "Drip irrigation systems", "Integration with landscape design"],
      integrationPotential:
        "AI mowers can incorporate soil moisture monitoring to work in tandem with irrigation systems, optimizing both mowing schedules and watering efficiency",
    },
    roiImpacts: [
      {
        title: "Smart Lawn Ecosystem",
        description: "Create a complete automated lawn solution combining watering and mowing technologies.",
        before: "Irrigation-Only Systems",
        after: "Integrated Lawn Technology",
      },
      {
        title: "Increased Service Frequency",
        description: "Transform seasonal irrigation check-ups into regular monthly service visits.",
        before: "Quarterly Service Visits",
        after: "Monthly Maintenance Touchpoints",
      },
      {
        title: "Premium Service Tier",
        description: "Offer a higher-margin complete lawn automation package to tech-savvy customers.",
        before: "Basic Irrigation Services",
        after: "Premium Lawn Technology Suite",
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
