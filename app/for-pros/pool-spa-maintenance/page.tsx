import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Pool & Spa Maintenance Companies | SweatyJob",
  description:
    "Expand your pool and spa business with AI mowing technology in a $7-8B market growing at 4-5% annually. Create complete outdoor living packages that increase customer value. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "pool maintenance business expansion, spa companies, AI mowers for pool professionals, outdoor living packages, automated property maintenance",
}

export default function PoolSpaMaintenancePros() {
  const data = {
    ...serviceVerticalsData["pool-spa-maintenance"],
    marketStats: {
      size: "$7–8 billion (industry estimates)",
      growth: "4–5% CAGR",
      drivers: ["Growth in residential pools", "Aging pool infrastructure", "Health/safety regulations"],
      trends: ["Robotic cleaners", "Smart monitoring systems", "Chemical automation"],
      integrationPotential:
        "AI mowers operating around pool areas could incorporate monitoring for water levels or debris, complementing pool maintenance services and creating a more comprehensive property care solution",
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
