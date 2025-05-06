"use client"

import { useState, useEffect } from "react"
import LocalWeatherWidget from "./local-weather-widget"
import CityDataDisplay from "./city-data-display"
import ComparisonTemplate from "./comparison-template"
import LocalAreaMap from "./local-area-map"
import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"

interface CompetitorData {
  id: string
  name: string
  city: string
  state: string
  description?: string
  reviewSnippet?: string
  reviewAuthor?: string
  pricing?: string
  features?: {
    noRainCancellations: boolean
    service24_7: boolean
    appMonitoring: boolean
    noContracts: boolean
  }
  latitude?: number
  longitude?: number
}

interface CityComparisonPageProps {
  competitor: CompetitorData
}

export default function CityComparisonPage({ competitor }: CityComparisonPageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return <div className="animate-pulse">Loading comparison...</div>
  }

  // Default features if not provided
  const features = [
    {
      name: "No-rain cancellations",
      sweatyJob: true,
      competitor: competitor.features?.noRainCancellations ?? false,
    },
    {
      name: "24/7 service",
      sweatyJob: true,
      competitor: competitor.features?.service24_7 ?? false,
    },
    {
      name: "App monitoring",
      sweatyJob: true,
      competitor: competitor.features?.appMonitoring ?? false,
    },
    {
      name: "No contracts",
      sweatyJob: true,
      competitor: competitor.features?.noContracts ?? false,
    },
  ]

  const city = competitor.city || "Norfolk"
  const state = competitor.state || "Virginia"
  const competitorName = competitor.name || "Traditional Lawn Service"
  const reviewSnippet = competitor.reviewSnippet || "They did a good job, but were hard to schedule again."
  const reviewAuthor = competitor.reviewAuthor || "Local Customer"
  const competitorPrice = competitor.pricing || "$120/mo"

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">
        See how we compare in {city}, {state}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <LocalWeatherWidget city={city} state={state} />
        <CityDataDisplay city={city} state={state} />
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <MapPin className="h-5 w-5 text-blue-600" />
          Local Lifestyle
        </h3>
        <p className="text-gray-700 mt-2">
          Whether you live in {city} or spend weekends exploring {state}, there's no reason to waste time mowing your
          own lawn. Let the bots handle it — while you enjoy your Saturday.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold">About {city}</h3>
        <p className="text-gray-700 mt-2">
          {city} is known for its beautiful neighborhoods and parks. So it's no surprise that smart home solutions like
          robot mowing are catching on fast.
        </p>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <Star className="h-5 w-5 text-yellow-500" />
          Customer Experience
        </h3>
        <h4 className="font-medium text-gray-800 mt-3">What {competitorName} Customers Say</h4>
        <blockquote className="border-l-4 border-gray-300 pl-4 my-3 italic">
          "{reviewSnippet}"<footer className="text-gray-600 not-italic mt-1">— {reviewAuthor}</footer>
        </blockquote>
        <p className="text-gray-700 mt-2">
          It's a common story in {city}, and exactly why we designed Sweaty Job to work on autopilot.
        </p>
      </div>

      <ComparisonTemplate
        competitorName={competitorName}
        features={features}
        sweatyJobPrice="$99/mo"
        competitorPrice={competitorPrice}
      />

      <div className="bg-white p-4 rounded-lg shadow-md my-6">
        <h3 className="text-lg font-semibold mb-3">Service Area</h3>
        <p className="text-gray-700 mb-4">
          Yes, we serve all of {city}. If you see your neighborhood on the map — we've got you covered.
        </p>

        <div className="h-64 w-full rounded-lg overflow-hidden">
          <LocalAreaMap city={city} state={state} latitude={competitor.latitude} longitude={competitor.longitude} />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <h3 className="text-xl font-bold mb-2">Get Started with Sweaty Job</h3>
        <p className="text-gray-700 mb-4">No contracts. Cancel anytime. 30-day satisfaction guarantee.</p>
        <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg">Check Availability</Button>
      </div>
    </div>
  )
}
