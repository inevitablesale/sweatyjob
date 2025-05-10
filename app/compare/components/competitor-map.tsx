"use client"

import { MapPin } from "lucide-react"

interface CompetitorMapProps {
  city: string
  competitors: any[]
}

export default function CompetitorMap({ city, competitors }: CompetitorMapProps) {
  return (
    <div className="h-full w-full bg-gray-100 flex items-center justify-center">
      <div className="text-center p-8">
        <MapPin className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Service Area Map</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Interactive map showing SweatyJob's service coverage compared to {competitors.length} competitors in{" "}
          {city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ")}.
        </p>
      </div>
    </div>
  )
}
