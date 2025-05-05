import { serviceVerticalsData } from "../service-verticals-data"
import { notFound } from "next/navigation"
import { ServiceVerticalTemplate } from "@/components/service-vertical-template"

export function generateStaticParams() {
  return Object.keys(serviceVerticalsData).map((slug) => ({
    slug,
  }))
}

export default function ServiceVerticalPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const serviceData = serviceVerticalsData[slug as keyof typeof serviceVerticalsData]

  if (!serviceData) {
    notFound()
  }

  // Ensure we have a valid hero image or use a fallback
  const heroImage = serviceData.heroImage || `/images/pros/${slug}-pro.jpg`

  return (
    <ServiceVerticalTemplate
      title={serviceData.title}
      slug={slug}
      description={serviceData.description}
      icon={serviceData.icon}
      heroImage={heroImage}
      benefits={serviceData.benefits}
      integration={serviceData.integration}
      faqs={serviceData.faqs}
      marketStats={serviceData.marketStats}
      roiImpacts={serviceData.roiImpacts}
    />
  )
}
