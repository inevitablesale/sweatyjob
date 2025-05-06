"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { MapPin } from "lucide-react"

interface POI {
  name: string
  type: string
  distance: number
}

interface POIDataDisplayProps {
  city: string
  state: string
  competitor?: string
}

export default function POIDataDisplay({ city, state, competitor }: POIDataDisplayProps) {
  const [data, setData] = useState<POI[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        console.log(`Fetching POI data for ${city}, ${state}...`)

        // First get coordinates
        const geocodeResponse = await fetch(
          `/api/geocode?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`,
        )

        if (!geocodeResponse.ok) {
          throw new Error(`Failed to geocode: ${geocodeResponse.status} ${geocodeResponse.statusText}`)
        }

        const geocodeData = await geocodeResponse.json()
        console.log("Geocode response:", geocodeData)

        if (!geocodeData.coordinates) {
          throw new Error("Failed to get coordinates")
        }

        const { lat, lng } = geocodeData.coordinates

        // Now get POI data
        const poiResponse = await fetch(`/api/points-of-interest?latitude=${lat}&longitude=${lng}&radius=2`)

        if (!poiResponse.ok) {
          throw new Error(`Failed to fetch POI data: ${poiResponse.status} ${poiResponse.statusText}`)
        }

        const poiData = await poiResponse.json()
        console.log("POI API response:", poiData)

        if (poiData.error) {
          throw new Error(poiData.error)
        }

        setData(poiData.slice(0, 5)) // Limit to 5 POIs
      } catch (err) {
        console.error("Error fetching POI data:", err)
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
          <h3 className="text-xl font-bold mb-2 text-yellow-400">NEARBY ATTRACTIONS</h3>
          <p className="text-gray-300 mb-4">
            Our service covers all areas around {city}, including these popular locations.
          </p>
          <p className="text-red-500">Error loading POI data: {error}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mb-8 bg-gray-900 border-gray-700">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2 text-yellow-400">NEARBY ATTRACTIONS</h3>
        <p className="mb-4 text-gray-300">
          Our service covers all areas around {city}, including these popular locations.
        </p>

        {loading ? (
          <div className="space-y-3">
            <p className="text-gray-500">
              Loading nearby attractions in {city.toUpperCase()}, {state.toUpperCase()}...
            </p>
            <Skeleton className="h-4 w-3/4 bg-gray-800" />
            <Skeleton className="h-4 w-2/3 bg-gray-800" />
            <Skeleton className="h-4 w-4/5 bg-gray-800" />
            <Skeleton className="h-4 w-1/2 bg-gray-800" />
          </div>
        ) : (
          <ul className="space-y-2 text-gray-300">
            {data.length > 0 ? (
              data.map((poi, index) => (
                <li key={index} className="flex items-start">
                  <MapPin className="mr-2 text-yellow-400 flex-shrink-0 mt-1" size={16} />
                  <span>
                    <span className="font-semibold">{poi.name}</span>
                    {poi.distance && (
                      <span className="text-sm text-gray-400"> ({poi.distance.toFixed(1)} miles away)</span>
                    )}
                  </span>
                </li>
              ))
            ) : (
              <p>No nearby attractions found.</p>
            )}
          </ul>
        )}
      </CardContent>
    </Card>
  )
}
