import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface NeighborhoodRepairPageProps {
  neighborhood: {
    name: string
    slug: string
    description: string
    image: string
  }
  children?: ReactNode
}

export default function NeighborhoodRepairPage({ neighborhood, children }: NeighborhoodRepairPageProps) {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Lawn Mower Repair Near Me in ${neighborhood.name}, Richmond VA`,
            serviceType: "Robot Lawn Mowing",
            description: `Looking for lawn mower repair in ${neighborhood.name}, Richmond? Our robot mowing service is the perfect alternative. No repairs, no maintenance, just $79/month.`,
            provider: {
              "@type": "LocalBusiness",
              name: "SweatyJob",
              telephone: "+18045739825",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Richmond",
                addressRegion: "VA",
                addressCountry: "US",
              },
            },
            areaServed: {
              "@type": "City",
              name: "Richmond",
              containsPlace: {
                "@type": "Place",
                name: neighborhood.name,
              },
            },
            offers: {
              "@type": "Offer",
              price: "79",
              priceCurrency: "USD",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                Lawn Mower Repair Near Me in {neighborhood.name}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                <span className="text-green-600">{neighborhood.name}</span> Lawn Mower Repair Alternative
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                Looking for lawn mower repair in {neighborhood.name}, Richmond? Save time and money with our robot
                mowing service. No more repairs, no maintenance, just a perfect lawn every day.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Same-day service in {neighborhood.name}</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Daily mowing vs. waiting for repairs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>All maintenance and service included</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Just $79/month - less than typical repair services</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="mr-4">
                  <Link href="/get-started">Get Started Today</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href={`/neighborhoods/${neighborhood.slug}`}>About {neighborhood.name}</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={neighborhood.image || "/placeholder.svg"}
                alt={`${neighborhood.name} Richmond VA neighborhood`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Robot Mowing Over Lawn Mower Repair?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-700">Traditional Lawn Mower Repair</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Unexpected repair costs ($150-$400 per repair)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Wait days or weeks for repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Need to transport heavy equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Ongoing maintenance costs (oil, filters, gas)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Your time spent mowing (104+ hours/year)</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-700">SweatyJob Robot Mowing</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Predictable monthly cost ($79/month)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Daily mowing - always looks perfect</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>We handle all maintenance and repairs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Zero-emission, eco-friendly solution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Reclaim your weekends - no more mowing</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/book">Schedule Your Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {children}

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Forget About Lawn Mower Repairs Forever?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join your neighbors in {neighborhood.name} who have switched to our robot mowing service. Enjoy a perfectly
            maintained lawn without the hassle of repairs, maintenance, or mowing.
          </p>
          <Button asChild size="lg">
            <Link href="/get-started">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
