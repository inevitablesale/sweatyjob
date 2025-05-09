"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Loader2 } from "lucide-react"

interface ServiceAreaMapProps {
  city: string
  state: string
  longitude: number
  latitude: number
  mapboxToken: string
}

export default function ServiceAreaMap({ city, state, longitude, latitude, mapboxToken }: ServiceAreaMapProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mapUrl, setMapUrl] = useState<string | null>(null)

  useEffect(() => {
    // Validate coordinates
    if (isNaN(longitude) || isNaN(latitude)) {
      console.error("Invalid coordinates:", { longitude, latitude })
      setError("Invalid coordinates provided")
      setLoading(false)
      return
    }

    if (!mapboxToken) {
      console.error("Mapbox token not found")
      setError("Map configuration error")
      setLoading(false)
      return
    }

    try {
      // Construct the map URL
      const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-l+3b82f6(${longitude},${latitude})/${longitude},${latitude},11,0/600x300@2x?access_token=${mapboxToken}`
      console.log("🗺️ Constructed map URL (token hidden):", url.split("?")[0])
      setMapUrl(url)
      setLoading(false)
    } catch (err) {
      console.error("Error constructing map URL:", err)
      setError("Error loading map")
      setLoading(false)
    }
  }, [longitude, latitude, mapboxToken])

  if (loading) {
    return (
      <div className="relative h-[300px] rounded-lg overflow-hidden bg-slate-700 flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-blue-400 animate-spin" />
      </div>
    )
  }

  if (error || !mapUrl) {
    return (
      <div className="relative h-[300px] rounded-lg overflow-hidden bg-slate-700 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <p className="text-red-400 font-bold mb-2">Error</p>
          <p>{error || "Unable to load map"}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[300px] rounded-lg overflow-hidden">
      <Image
        src={mapUrl || "/placeholder.svg"}
        alt={`Map of ${city}, ${state} service area`}
        fill
        className="object-cover"
        unoptimized={true}
      />
    </div>
  )
}
