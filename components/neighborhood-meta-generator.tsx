"use client"

import { useEffect, useState } from "react"

interface NeighborhoodMetaGeneratorProps {
  latitude: number
  longitude: number
  radius?: number
}

export default function NeighborhoodMetaGenerator({
  latitude,
  longitude,
  radius = 5000,
}: NeighborhoodMetaGeneratorProps) {
  const [neighborhoods, setNeighborhoods] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNeighborhoods = async () => {
      try {
        const response = await fetch(
          `/api/nearby-pois?lat=${latitude}&lng=${longitude}&radius=${radius}&type=neighborhood`,
        )

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`)
        }

        const data = await response.json()

        if (data.neighborhoods && data.neighborhoods.length > 0) {
          setNeighborhoods(data.neighborhoods)
        } else {
          setError("No neighborhoods found")
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchNeighborhoods()
  }, [latitude, longitude, radius])

  if (loading) {
    return <div className="text-sm text-gray-400">Loading neighborhood data...</div>
  }

  if (error) {
    return <div className="text-sm text-red-400">Error: {error}</div>
  }

  if (neighborhoods.length === 0) {
    return <div className="text-sm text-gray-400">No neighborhoods found in this area</div>
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-bold mb-2">Nearby Neighborhoods</h3>
      <p>{neighborhoods.join(", ")}</p>

      <div className="mt-4">
        <h4 className="text-sm font-bold">Meta Description</h4>
        <textarea
          className="w-full h-24 p-2 mt-1 bg-gray-700 text-white rounded"
          readOnly
          value={`SweatyJob offers lawn care services in ${neighborhoods.join(", ")} and surrounding areas. Get professional lawn maintenance from the experts.`}
        />
      </div>
    </div>
  )
}
