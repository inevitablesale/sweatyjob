import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Landscape Design Companies | SweatyJob",
  description:
    "Expand your landscape design business with AI mowing technology in a market that's part of the $153B landscaping industry growing at 5-6% annually. Create ongoing relationships after installation projects are complete. Add AI mowing with zero upfront costs.",
  keywords:
    "landscape design business expansion, AI mowers for landscape designers, recurring revenue, ongoing customer relationships, landscape design market growth",
}

export default function LandscapeDesignPros() {
  const data = {
    ...serviceVerticalsData["landscape-design"],
    marketStats: {
      size: "Part of the $153 billion landscaping industry (2024)",
      growth: "5–6% CAGR",
      drivers: ["Home improvement trends", "Commercial property upgrades", "Sustainability initiatives"],
      trends: ["Native plantings", "Eco-friendly materials", "3D/virtual design tools"],
      integrationPotential:
        "AI mower technology can be incorporated into landscape designs from the beginning, allowing for optimized lawn layouts that facilitate autonomous mowing",
    },
    roiImpacts: [
      {
        title: "Project to Subscription Conversion",
        description: "Transform one-time landscape installations into ongoing monthly revenue.",
        before: "Project-Based Income",
        after: "Recurring Revenue Streams",
      },
      {
        title: "Increased Project Values",
        description: "Include AI mower technology in landscape designs to boost overall project costs.",
        before: "Standard Design Projects",
        after: "Premium Technology Designs",
      },
      {
        title: "Ongoing Client Relationships",
        description: "Maintain connections with clients long after installation is complete.",
        before: "Project Completion Disconnect",
        after: "Continuous Client Engagement",
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
