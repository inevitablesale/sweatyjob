import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Lawn Care Companies | SweatyJob",
  description:
    "Transform your lawn care business with AI mowing technology in a $61.7B market growing at 5.2% annually. Increase recurring revenue and reduce customer churn. Add AI mowing to your service offerings with zero upfront costs or inventory.",
  keywords:
    "lawn care business expansion, AI mowers for lawn companies, recurring revenue, customer retention, lawn care market growth",
}

export default function LawnCarePros() {
  const data = {
    ...serviceVerticalsData["lawn-care"],
    marketStats: {
      size: "$61.7 billion (2025), with broader landscaping reaching $293.3 billion (2024)",
      growth: "5.2% CAGR (2025–2030), with projections of 5.4% through 2033",
      businesses: "Over 600,000 businesses; highly fragmented with both residential and commercial segments",
      segments: "Commercial segment holds 54% market share; residential is fastest-growing with ~6% CAGR",
      trends: [
        "Technology adoption (robotic/AI mowers, smart irrigation)",
        "Sustainability focus",
        "Subscription service models",
        "High consumer demand for outdoor aesthetics",
      ],
      savingsImpact: "Replace 2-3 workers and save $15K-30K annually in labor costs",
    },
    roiImpacts: [
      {
        title: "Recurring Revenue Streams",
        description: "Transform seasonal lawn care into year-round income with AI mowing subscriptions.",
        before: "Seasonal Cash Flow",
        after: "Predictable Monthly Revenue",
      },
      {
        title: "Enhanced Customer Retention",
        description: "Keep clients longer with bundled lawn care and AI mowing packages.",
        before: "High Customer Turnover",
        after: "Long-Term Client Relationships",
      },
      {
        title: "Premium Service Positioning",
        description: "Stand out from competitors with cutting-edge lawn technology.",
        before: "Standard Lawn Service",
        after: "Tech-Forward Lawn Solution",
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
