import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Holiday Lighting Companies | SweatyJob",
  description:
    "Transform your seasonal holiday lighting business into a year-round revenue generator with AI mowing technology in a $600-800M market growing at 6-8% annually. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "holiday lighting business expansion, AI mowers for lighting companies, recurring revenue, year-round business, seasonal business solution",
}

export default function HolidayLightingPros() {
  const data = {
    ...serviceVerticalsData["holiday-lighting"],
    marketStats: {
      size: "Estimated $600–800 million",
      growth: "6–8% CAGR",
      drivers: ["Seasonal demand", "Commercial displays", "Premium residential services"],
      trends: ["LED lighting", "Smart controls", "Rental/installation packages"],
      integrationPotential:
        "Holiday lighting companies can leverage AI mowing as their off-season business, creating year-round revenue and maintaining customer relationships throughout the calendar year",
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
