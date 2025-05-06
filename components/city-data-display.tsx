"use client"

import { useEffect, useState } from "react"
import { Building, Users, MapPin } from "lucide-react"

interface CityData {
  population: number
  medianHomeValue: number
  medianIncome: number
  description: string
}

export default function CityDataDisplay({ city, state }: { city: string; state: string }) {
  const [cityData, setCityData] = useState<CityData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCityData = async () => {
      if (!city || !state) {
        setLoading(false)
        setError("Location information missing")
        return
      }

      try {
        const response = await fetch(
          `/api/local-area-data?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`,
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch city data: ${response.status}`)
        }

        const data = await response.json()
        setCityData(data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching city data:", err)
        setError("Unable to load city data")
        setLoading(false)
      }
    }

    fetchCityData()
  }, [city, state])

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    )
  }

  if (error || !cityData) {
    // Fallback content if we can't load real data
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <MapPin className="h-5 w-5 text-green-600" />
          Local Insights
        </h3>
        <p className="text-gray-700 mt-2">
          {city} is home to many homeowners and busy families who don't have time to chase down unreliable lawn crews.
          That's why low-maintenance, always-on services like Sweaty Job are taking off here.
        </p>
      </div>
    )
  }

  const formattedPopulation = cityData.population.toLocaleString()
  const formattedHomeValue = cityData.medianHomeValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  })

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <MapPin className="h-5 w-5 text-green-600" />
        Local Insights
      </h3>
      <p className="text-gray-700 mt-2">
        {city} is home to nearly {formattedPopulation} residents — with many homeowners and busy families who don't have
        time to chase down unreliable lawn crews. With a median home value of {formattedHomeValue}, residents here value
        professional, reliable property maintenance. That's why low-maintenance, always-on services like Sweaty Job are
        taking off here.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">Pop: {formattedPopulation}</span>
        </div>
        <div className="flex items-center gap-1">
          <Building className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">Homes: {formattedHomeValue}</span>
        </div>
      </div>
    </div>
  )
}
