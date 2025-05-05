import { ServiceVerticalTemplate } from "@/components/service-vertical-template"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "AI Mower Solutions for Pressure Washing Companies | SweatyJob",
  description:
    "Transform your pressure washing business with AI mowing technology in a $1.5-2B market growing at 4-6% annually. Convert one-time jobs into recurring revenue streams. Add AI mowing with zero upfront costs or inventory.",
  keywords:
    "pressure washing business expansion, AI mowers for pressure washers, recurring revenue, subscription model, property maintenance",
}

export default function PressureWashingPros() {
  const data = {
    ...serviceVerticalsData["pressure-washing"],
    marketStats: {
      size: "Estimated $1.5–2 billion",
      growth: "4–6% CAGR",
      drivers: ["Property maintenance", "Curb appeal", "Commercial contracts"],
      trends: ["Eco-friendly detergents", "Mobile service platforms"],
      integrationPotential:
        "SweatyJob's platform could help pressure washing companies transition from one-time service models to ongoing property maintenance packages, creating more predictable revenue streams",
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
