import { Card, CardContent } from "@/components/ui/card"
import Script from "next/script"

const serviceAreas = [
  {
    name: "The Fan",
    description: "Robot lawn mowing services in The Fan neighborhood of Richmond, VA.",
  },
  {
    name: "Church Hill",
    description: "Robot lawn mowing services in Church Hill neighborhood of Richmond, VA.",
  },
  {
    name: "Carytown",
    description: "Robot lawn mowing services in Carytown neighborhood of Richmond, VA.",
  },
  {
    name: "Scott's Addition",
    description: "Robot lawn mowing services in Scott's Addition neighborhood of Richmond, VA.",
  },
  {
    name: "Shockoe Bottom",
    description: "Robot lawn mowing services in Shockoe Bottom neighborhood of Richmond, VA.",
  },
  {
    name: "Museum District",
    description: "Robot lawn mowing services in Museum District neighborhood of Richmond, VA.",
  },
  {
    name: "Jackson Ward",
    description: "Robot lawn mowing services in Jackson Ward neighborhood of Richmond, VA.",
  },
  {
    name: "Manchester",
    description: "Robot lawn mowing services in Manchester neighborhood of Richmond, VA.",
  },
]

export function ServiceAreas() {
  // Create schema for each service area
  const serviceAreaSchemas = serviceAreas.map((area) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Robot Lawn Mowing in ${area.name}, Richmond VA`,
    serviceType: "Robot Lawn Mowing",
    provider: {
      "@type": "LocalBusiness",
      name: "SweatyJob",
    },
    areaServed: {
      "@type": "City",
      name: area.name,
      containedIn: {
        "@type": "City",
        name: "Richmond",
        containedIn: {
          "@type": "State",
          name: "Virginia",
        },
      },
    },
    description: area.description,
    offers: {
      "@type": "Offer",
      price: "79",
      priceCurrency: "USD",
    },
  }))

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Service Areas in Richmond, VA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide robot lawn mowing services throughout Richmond and these neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-medium mb-2">{area.name}</h3>
                <p className="text-gray-600 text-sm">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Inject the service area schemas */}
        <Script id="service-area-schemas" type="application/ld+json">
          {JSON.stringify(serviceAreaSchemas)}
        </Script>
      </div>
    </section>
  )
}
