"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Star, Check, X, MapPin } from "lucide-react"
import ExpandedFaqSection from "@/components/expanded-faq-section"
import LocalBusinessSchema from "../components/local-business-schema"

interface CompetitorDetailPageClientProps {
  competitor: {
    id: string
    name: string
    logo: string
  }
}

export default function CompetitorDetailPageClient({ competitor }: CompetitorDetailPageClientProps) {
  const searchParams = useSearchParams()
  const city = searchParams.get("city") || "richmond"
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ")

  // This would normally come from an API or database
  const competitorDetails = {
    description: `${competitor.name} is a traditional lawn care service that offers scheduled maintenance on a weekly or bi-weekly basis.`,
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
      sweatyjob: { monthly: 99, yearly: 1188 },
      competitor: { monthly: 160, yearly: 1920 },
    },
    faqs: [
      {
        question: `How does SweatyJob compare to ${competitor.name}?`,
        answer: `SweatyJob offers daily automated lawn maintenance with robotic mowers, while ${competitor.name} provides traditional scheduled service with manual labor. SweatyJob's approach results in a consistently manicured lawn without the noise, emissions, or scheduling hassles of ${competitor.name}'s service.`,
      },
      {
        question: `Is SweatyJob more expensive than ${competitor.name}?`,
        answer: `While ${competitor.name} might appear less expensive initially, SweatyJob typically costs less over time. ${competitor.name}'s prices often increase annually, and they may charge extra for services that SweatyJob includes standard. When comparing total annual costs, most homeowners save 30-40% with SweatyJob.`,
      },
      {
        question: `Does ${competitor.name} offer any services that SweatyJob doesn't?`,
        answer: `${competitor.name} and SweatyJob both offer core lawn maintenance services. While ${competitor.name} may offer some specialized treatments, SweatyJob partners with experts for any additional services you might need, ensuring you get comprehensive lawn care without compromise.`,
      },
      {
        question: `How does the quality compare between SweatyJob and ${competitor.name}?`,
        answer: `${competitor.name}'s quality can vary based on crew, schedule, and weather. SweatyJob's robotic mowers provide consistent daily cutting at the optimal height for grass health, resulting in a denser, healthier lawn with fewer weeds and better drought resistance compared to ${competitor.name}'s less frequent mowing.`,
      },
      {
        question: `What happens if I'm not satisfied with the service?`,
        answer: `SweatyJob offers a satisfaction guarantee with easy cancellation if you're not happy. ${competitor.name} typically requires contracts that can be difficult to cancel. SweatyJob's transparent policies and responsive customer service make resolving any issues much simpler than with ${competitor.name}.`,
      },
    ],
  }

  // Call Wikipedia API to get city information
  const [cityInfo, setCityInfo] = useState<any>(null)

  useEffect(() => {
    const fetchCityInfo = async () => {
      try {
        // Log that we're calling the Wikipedia API
        console.log(`Calling Wikipedia API for city: ${cityName}`)

        const response = await fetch(`/api/wikipedia/article?title=${cityName}`)
        const data = await response.json()

        // Log the response from the Wikipedia API
        console.log("Wikipedia API response:", data)

        if (data && data.extract) {
          setCityInfo(data)
        } else {
          // Try with state added if first attempt fails
          const responseWithState = await fetch(`/api/wikipedia/article?title=${cityName}, Virginia`)
          const dataWithState = await responseWithState.json()

          console.log("Wikipedia API response with state:", dataWithState)

          if (dataWithState && dataWithState.extract) {
            setCityInfo(dataWithState)
          }
        }
      } catch (error) {
        console.error("Error fetching city info:", error)
      }
    }

    fetchCityInfo()
  }, [cityName])

  // Calculate savings
  const annualSavings = competitorDetails.pricing.competitor.yearly - competitorDetails.pricing.sweatyjob.yearly
  const savingsPercentage = Math.round((annualSavings / competitorDetails.pricing.competitor.yearly) * 100)

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-green-800 text-white">
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">SweatyJob vs {competitor.name}</h1>
              <p className="text-xl text-green-100 max-w-2xl">
                See how our robotic lawn service compares to {competitor.name} in {cityName}. Save time, money, and
                enjoy a better lawn.
              </p>
            </div>

            <div className="mt-8 md:mt-0 flex items-center bg-white rounded-lg p-4">
              <div className="w-16 h-16 relative mr-4">
                <Image src="/images/sweatyjob-logo.png" alt="SweatyJob Logo" fill className="object-contain" />
              </div>
              <div className="text-2xl font-bold text-green-800">VS</div>
              <div className="w-16 h-16 relative ml-4">
                <Image
                  src={competitor.logo || "/placeholder.svg"}
                  alt={`${competitor.name} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">See the Difference</h2>
            <p className="text-gray-600 mb-6">
              Watch how SweatyJob's robotic mowers transform lawn care compared to {competitor.name}'s traditional
              approach.
            </p>

            <div className="bg-black rounded-lg overflow-hidden aspect-video relative">
              <video className="w-full h-full object-cover" controls poster="/robot-mower-in-action.png">
                <source
                  src="https://www.bestmow.com/cdn/shop/videos/c/vp/962096c1d1224dc78b09087c9a8c7ef8/962096c1d1224dc78b09087c9a8c7ef8.HD-1080p-7.2Mbps-44563247.mp4?v=0"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="mt-4">
              <h3 className="font-semibold mb-2">What you'll see in this video:</h3>
              <ol className="list-decimal pl-5 space-y-1">
                <li>SweatyJob's robotic mower in action</li>
                <li>The perfect cut height for optimal lawn health</li>
                <li>Quiet, emissions-free operation</li>
                <li>Smart navigation and obstacle avoidance</li>
                <li>App-based monitoring and control</li>
              </ol>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Comparison</h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left font-semibold text-gray-900 border-b">Service</th>
                    <th className="p-3 text-center font-semibold text-gray-900 border-b">SweatyJob</th>
                    <th className="p-3 text-center font-semibold text-gray-900 border-b">{competitor.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {competitorDetails.services.map((service, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                      <td className="p-3 border-b">{service.name}</td>
                      <td className="p-3 border-b text-center bg-green-50">{service.sweatyjob}</td>
                      <td className="p-3 border-b text-center">{service.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Annual Cost Comparison</h3>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <p className="text-sm text-gray-500">SweatyJob</p>
                    <p className="text-2xl font-bold text-gray-900">${competitorDetails.pricing.sweatyjob.yearly}</p>
                    <p className="text-sm text-gray-500">(${competitorDetails.pricing.sweatyjob.monthly}/month)</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">{competitor.name}</p>
                    <p className="text-2xl font-bold text-gray-900">${competitorDetails.pricing.competitor.yearly}</p>
                    <p className="text-sm text-gray-500">(${competitorDetails.pricing.competitor.monthly}/month)</p>
                  </div>
                </div>

                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-center font-bold text-green-800">
                    Save ${annualSavings} per year ({savingsPercentage}%) with SweatyJob
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            SweatyJob vs {competitor.name}: Pros & Cons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <div className="w-10 h-10 relative mr-3">
                  <Image src="/images/sweatyjob-logo.png" alt="SweatyJob Logo" fill className="object-contain" />
                </div>
                SweatyJob
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Daily mowing at optimal grass height</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Zero emissions, whisper-quiet operation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No scheduling hassles or weather cancellations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Real-time monitoring and smart alerts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lower long-term cost with predictable pricing</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Initial setup investment</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>May require minor yard modifications</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <div className="w-10 h-10 relative mr-3">
                  <Image
                    src={competitor.logo || "/placeholder.svg"}
                    alt={`${competitor.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                {competitor.name}
              </h3>

              <div className="mb-6">
                <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
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
                <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
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
          </div>
        </div>
      </section>

      {/* City Information Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-green-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">{cityName} Lawn Care Information</h2>
            </div>

            {cityInfo ? (
              <div>
                <p className="text-gray-600 mb-4">{cityInfo.extract}</p>
                <p className="text-gray-600 mb-4">
                  In {cityName}, lawn care needs are specific to the local climate and soil conditions. SweatyJob's
                  robotic mowers are programmed to adapt to these local conditions, providing better results than{" "}
                  {competitor.name}'s one-size-fits-all approach.
                </p>
              </div>
            ) : (
              <p className="text-gray-600">Loading city information...</p>
            )}

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Did You Know?</h3>
              <p className="text-gray-700">
                Homeowners in {cityName} who switch to SweatyJob from {competitor.name} report saving an average of 5
                hours per month in lawn care coordination and oversight.
              </p>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Satisfaction</h2>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-sm text-gray-500">SweatyJob</p>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-1" fill="currentColor" />
                    <p className="text-2xl font-bold text-gray-900">4.8</p>
                    <p className="text-sm text-gray-500 ml-2">out of 5</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500">{competitor.name}</p>
                  <div className="flex items-center">
                    <Star className="h-6 w-6 text-yellow-400 mr-1" fill="currentColor" />
                    <p className="text-2xl font-bold text-gray-900">3.2</p>
                    <p className="text-sm text-gray-500 ml-2">out of 5</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Reliability</p>
                  <div className="flex items-center">
                    <div className="h-2 bg-green-500 rounded-full w-[95%] mr-2"></div>
                    <span className="text-sm">95%</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="h-2 bg-gray-300 rounded-full w-[65%] mr-2"></div>
                    <span className="text-sm">65%</span>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-1">Quality</p>
                  <div className="flex items-center">
                    <div className="h-2 bg-green-500 rounded-full w-[92%] mr-2"></div>
                    <span className="text-sm">92%</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="h-2 bg-gray-300 rounded-full w-[70%] mr-2"></div>
                    <span className="text-sm">70%</span>
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-1">Value for Money</p>
                  <div className="flex items-center">
                    <div className="h-2 bg-green-500 rounded-full w-[90%] mr-2"></div>
                    <span className="text-sm">90%</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="h-2 bg-gray-300 rounded-full w-[55%] mr-2"></div>
                    <span className="text-sm">55%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

          <ExpandedFaqSection faqs={competitorDetails.faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade from {competitor.name}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of homeowners who have switched to SweatyJob's robotic lawn service and enjoy a perfectly
            maintained lawn without the hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="px-8 py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/compare"
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Compare More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <LocalBusinessSchema city={city} />
    </div>
  )
}
