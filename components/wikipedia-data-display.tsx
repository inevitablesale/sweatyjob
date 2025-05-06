"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from "next/image"

interface WikipediaData {
  title: string
  extract: string
  image: string | null
}

interface WikipediaDataDisplayProps {
  city: string
  state: string
  competitor?: string
}

export default function WikipediaDataDisplay({ city, state, competitor }: WikipediaDataDisplayProps) {
  const [wikiData, setWikiData] = useState<WikipediaData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWikipediaData = async () => {
      try {
        setLoading(true)
        setError(null)
        console.log(`Fetching Wikipedia data for ${city}, ${state}...`)

        const response = await fetch(
          `/api/wikipedia-city-data?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`,
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch Wikipedia data: ${response.status} ${response.statusText}`)
        }

        const result = await response.json()
        console.log("Wikipedia API response:", result)

        if (result.error) {
          throw new Error(result.error)
        }

        setWikiData(result)
      } catch (err) {
        console.error("Error fetching Wikipedia data:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    if (city && state) {
      fetchWikipediaData()
    }
  }, [city, state])

  if (error) {
    return (
      <Card className="mb-8 bg-red-50 border-red-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">ABOUT {city.toUpperCase()}</h3>
          <p className="text-red-600 mb-4">
            We understand {city} better than {competitor || "the competition"} ever will. Our technology is tailored to
            local conditions.
          </p>
          <p className="text-red-500">Error loading Wikipedia data: {error}</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="mb-8 bg-gray-900 border-gray-700">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-2 text-yellow-400">ABOUT {city.toUpperCase()}</h3>
        <p className="mb-4 text-gray-300">
          We understand {city} better than {competitor || "the competition"} ever will. Our technology is tailored to
          local conditions.
        </p>

        {loading ? (
          <div className="space-y-3">
            <p className="text-gray-500">
              Loading information about {city.toUpperCase()}, {state.toUpperCase()}...
            </p>
            <Skeleton className="h-64 w-full bg-gray-800" />
            <Skeleton className="h-4 w-3/4 bg-gray-800" />
            <Skeleton className="h-4 w-2/3 bg-gray-800" />
            <Skeleton className="h-4 w-4/5 bg-gray-800" />
          </div>
        ) : (
          <>
            {wikiData?.image && (
              <div className="mb-4 relative h-64 w-full">
                <Image
                  src={wikiData.image || "/placeholder.svg"}
                  alt={`${city}, ${state}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <div
              className="prose prose-invert max-w-none text-gray-300"
              dangerouslySetInnerHTML={{ __html: wikiData?.extract || "" }}
            />
          </>
        )}
      </CardContent>
    </Card>
  )
}
