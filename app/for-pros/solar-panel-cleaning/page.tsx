import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Solar Panel Cleaning Companies | SweatyJob",
  description:
    "Combine solar panel cleaning with AI mowing in a $600-900M market growing at 8-10% annually. Create recurring revenue while enhancing solar efficiency. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "solar panel cleaning business expansion, AI mowers for solar companies, recurring revenue, eco-friendly services, sustainable property care",
}

export default function SolarPanelCleaningPros() {
  const data = {
    ...serviceVerticalsData["solar-panel-cleaning"],
    marketStats: {
      size: "Estimated $600–900 million",
      growth: "8–10% CAGR, mirroring solar panel installations",
      drivers: ["Rapid solar adoption", "Efficiency maintenance", "Commercial contracts"],
      trends: ["Robotic cleaners", "Waterless systems", "Bundled maintenance"],
      integrationPotential:
        "Solar panel cleaning companies can offer comprehensive eco-friendly property solutions by combining clean energy maintenance with sustainable lawn care through AI mowers, appealing to environmentally conscious homeowners",
    },
    roiImpacts: [
      {
        title: "Eco-Friendly Service Bundle",
        description: "Create a complete green property package that appeals to environmentally conscious homeowners.",
        before: "Single Green Service",
        after: "Complete Eco-Property Solution",
      },
      {
        title: "Increased Service Frequency",
        description: "Transform quarterly panel cleanings into monthly property maintenance visits.",
        before: "Periodic Service Visits",
        after: "Regular Monthly Touchpoints",
      },
      {
        title: "Enhanced Customer Value",
        description: "Boost your average revenue per customer with complementary green services.",
        before: "$200-300 Per Visit",
        after: "$150-200 Monthly Recurring",
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
