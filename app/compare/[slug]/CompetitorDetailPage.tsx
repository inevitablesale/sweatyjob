"use client"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star, Check, X, ArrowRight } from "lucide-react"

interface CompetitorDetailPageProps {
  competitor: {
    slug: string
    title: string
    logo: string
  }
}

export default function CompetitorDetailPage({ competitor }: CompetitorDetailPageProps) {
  const searchParams = useSearchParams()
  const city = searchParams.get("city") || "richmond"
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ")

  // This would normally come from an API or database
  const competitorDetails = {
    description: `${competitor.title} is a traditional lawn care service that offers scheduled maintenance on a weekly or bi-weekly basis.`,
    pros: [
      "Established brand with years of experience",
      "Multiple service packages available",
      "Seasonal treatments offered",
    ],
    cons: [
      "Requires scheduling and coordination",
      "Weather-dependent service",
      "Inconsistent quality between visits",
      "Noisy gas-powered equipment",
      "Higher long-term costs",
    ],
    services: [
      { name: "Lawn Mowing", sweatyjob: "Daily automated mowing", competitor: "Weekly scheduled service" },
      { name: "Scheduling", sweatyjob: "No scheduling needed", competitor: "Must schedule in advance" },
      { name: "Weather Impact", sweatyjob: "Minimal disruption", competitor: "Cancellations common" },
      { name: "Noise Level", sweatyjob: "Whisper quiet", competitor: "Very loud" },
      { name: "Environmental", sweatyjob: "Zero emissions", competitor: "High emissions" },
      { name: "Monitoring", sweatyjob: "Real-time app tracking", competitor: "No monitoring available" },
    ],
    pricing: {
      sweatyjob: { monthly: 79, yearly: 948 },
      competitor: { monthly: 160, yearly: 1920 },
    },
  }

  // Calculate savings
  const annualSavings = competitorDetails.pricing.competitor.yearly - competitorDetails.pricing.sweatyjob.yearly
  const savingsPercentage = Math.round((annualSavings / competitorDetails.pricing.competitor.yearly) * 100)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 to-green-700">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link
            href={`/compare?city=${city}`}
            className="inline-flex items-center text-green-200 hover:text-white mb-6"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Comparison
          </Link>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                SweatyJob <span className="text-yellow-400">VS</span> {competitor.title}
              </h1>
              <p className="text-xl text-green-100 max-w-2xl">
                See why our robotic lawn service DESTROYS {competitor.title} in {cityName}. Save time, money, and enjoy
                a better lawn.
              </p>
            </div>

            <div className="mt-8 md:mt-0 flex items-center bg-black/20 rounded-lg p-4">
              <div className="w-16 h-16 relative mr-4 bg-white rounded-full p-1">
                <Image src="/images/sweatyjob-logo.png" alt="SweatyJob Logo" fill className="object-contain" />
              </div>
              <div className="text-2xl font-bold text-yellow-400">VS</div>
              <div className="w-16 h-16 relative ml-4 bg-white rounded-full p-1">
                <Image
                  src={competitor.logo || "/placeholder.svg"}
                  alt={`${competitor.title} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">Why SweatyJob CRUSHES {competitor.title}</h2>

            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">The Problem with {competitor.title}</h3>
              <p className="text-gray-300 mb-6">{competitorDetails.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-green-400">Their Pros:</h4>
                <ul className="space-y-2">
                  {competitorDetails.pros.map((pro, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-red-400">Their Cons:</h4>
                <ul className="space-y-2">
                  {competitorDetails.cons.map((con, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Annual Cost Comparison</h3>

              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="text-center mb-6 md:mb-0">
                  <p className="text-sm text-gray-400">SweatyJob</p>
                  <p className="text-4xl font-bold text-green-400">${competitorDetails.pricing.sweatyjob.yearly}</p>
                  <p className="text-sm text-gray-400">(${competitorDetails.pricing.sweatyjob.monthly}/month)</p>
                </div>

                <div className="text-4xl font-bold text-yellow-400">VS</div>

                <div className="text-center mt-6 md:mt-0">
                  <p className="text-sm text-gray-400">{competitor.title}</p>
                  <p className="text-4xl font-bold text-red-400">${competitorDetails.pricing.competitor.yearly}</p>
                  <p className="text-sm text-gray-400">(${competitorDetails.pricing.competitor.monthly}/month)</p>
                </div>
              </div>

              <div className="bg-green-900 p-4 rounded-lg text-center">
                <p className="text-lg font-bold text-white">
                  SAVE ${annualSavings} PER YEAR ({savingsPercentage}%) WITH SWEATYJOB
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-yellow-400">Feature Comparison</h2>

            <div className="bg-gray-900 rounded-xl overflow-hidden mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-center font-semibold">SweatyJob</th>
                    <th className="p-4 text-center font-semibold">{competitor.title}</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorDetails.services.map((service, index) => (
                    <tr key={index} className="border-t border-gray-800">
                      <td className="p-4">{service.name}</td>
                      <td className="p-4 text-center bg-green-900/30">{service.sweatyjob}</td>
                      <td className="p-4 text-center">{service.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Customer Satisfaction</h3>

              <div className="flex justify-between items-center mb-8">
                <div className="text-center">
                  <p className="text-sm text-gray-400">SweatyJob</p>
                  <div className="flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-400" fill="currentColor" />
                    <p className="text-3xl font-bold ml-2">4.9</p>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-400">{competitor.title}</p>
                  <div className="flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-400" fill="currentColor" />
                    <p className="text-3xl font-bold ml-2">3.2</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="font-medium mb-2">Reliability</p>
                  <div className="flex items-center mb-1">
                    <span className="w-20 text-sm">SweatyJob</span>
                    <div className="h-2 bg-green-500 rounded-full w-[95%] mx-2"></div>
                    <span className="text-sm">95%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm">{competitor.title}</span>
                    <div className="h-2 bg-red-500 rounded-full w-[65%] mx-2"></div>
                    <span className="text-sm">65%</span>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Quality</p>
                  <div className="flex items-center mb-1">
                    <span className="w-20 text-sm">SweatyJob</span>
                    <div className="h-2 bg-green-500 rounded-full w-[92%] mx-2"></div>
                    <span className="text-sm">92%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm">{competitor.title}</span>
                    <div className="h-2 bg-red-500 rounded-full w-[70%] mx-2"></div>
                    <span className="text-sm">70%</span>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Value</p>
                  <div className="flex items-center mb-1">
                    <span className="w-20 text-sm">SweatyJob</span>
                    <div className="h-2 bg-green-500 rounded-full w-[98%] mx-2"></div>
                    <span className="text-sm">98%</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-20 text-sm">{competitor.title}</span>
                    <div className="h-2 bg-red-500 rounded-full w-[55%] mx-2"></div>
                    <span className="text-sm">55%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-green-900 to-green-700 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to UPGRADE from {competitor.title}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of homeowners who have switched to SweatyJob and never looked back. Perfect lawn. Zero
            effort. Guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors text-lg flex items-center justify-center"
            >
              START YOUR FREE TRIAL
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/compare"
              className="px-8 py-4 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-colors text-lg"
            >
              Compare More Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
