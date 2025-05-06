"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface CensusData {
  population: number
  medianIncome: number
  homeOwnershipRate: number
  medianHomeValue: number
}

interface CensusDataDisplayProps {
  city: string
  state: string
  competitor?: string
}

export default function CensusDataDisplay({ city, state, competitor }: CensusDataDisplayProps) {
  const [data, setData] = useState<CensusData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        console.log(`Fetching census data for ${city}, ${state}...`)

        const response = await fetch(
          `/api/census-data?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`,
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch census data: ${response.status} ${response.statusText}`)
        }

        const result = await response.json()
        console.log("Census API response:", result)

        if (result.error) {
          throw new Error(result.error)
        }

        setData(result)
      } catch (err) {
        console.error("Error fetching census data:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (city && state) {
      fetchData()
    }
  }, [city, state])

  if (error) {
    return (
      <Card className="mb-8 bg-gray-900 border-gray-700">
        <CardContent className="pt-6">
          <h3 className="text-xl font-bold mb-2 text-yellow-400">LOCAL HOMEOWNER DATA</h3>
          <p className="text-gray-300 mb-4">
            We understand {city} better than {competitor || "the competition"} ever will. Our technology is tailored to
            local conditions.
          </p>
          <p className="text-red-500">Error loading census data: {error}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mb-8 bg-gray-900 border-gray-700">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2 text-yellow-400">LOCAL HOMEOWNER DATA</h3>
        <p className="mb-4 text-gray-300">
          We understand {city} better than {competitor || "the competition"} ever will. Our technology is tailored to
          local conditions.
        </p>

        {loading ? (
          <div className="space-y-3">
            <p className="text-gray-500">
              Loading census data for {city.toUpperCase()}, {state.toUpperCase()}...
            </p>
            <Skeleton className="h-4 w-3/4 bg-gray-800" />
            <Skeleton className="h-4 w-2/3 bg-gray-800" />
            <Skeleton className="h-4 w-4/5 bg-gray-800" />
            <Skeleton className="h-4 w-1/2 bg-gray-800" />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            <div>
              <p className="font-semibold text-yellow-400">Population</p>
              <p>{data?.population?.toLocaleString() || "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-400">Median Income</p>
              <p>${data?.medianIncome?.toLocaleString() || "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-400">Home Ownership</p>
              <p>{data?.homeOwnershipRate ? `${data.homeOwnershipRate}%` : "N/A"}</p>
            </div>
            <div>
              <p className="font-semibold text-yellow-400">Median Home Value</p>
              <p>${data?.medianHomeValue?.toLocaleString() || "N/A"}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
