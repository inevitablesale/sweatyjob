import { Suspense } from "react"
import CompetitorLocationMapClient from "./competitor-location-map-client"

interface CompetitorLocationMapProps {
  city: string
  state: string
  competitorName: string
  competitorAddress?: string
  lat?: number
  lng?: number
}

export default function CompetitorLocationMap({
  city,
  state,
  competitorName,
  competitorAddress,
  lat,
  lng,
}: CompetitorLocationMapProps) {
  // Default coordinates for the city if specific competitor coordinates aren't provided
  // Still fall back to Richmond if all else fails
  const defaultLat = lat || 37.5407 // Default to Richmond, VA if not specified
  const defaultLng = lng || -77.436

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <Suspense
        fallback={
          <div className="w-full h-full bg-gray-800 animate-pulse flex items-center justify-center text-gray-500">
            Loading map...
          </div>
        }
      >
        <CompetitorLocationMapClient
          city={city}
          state={state}
          competitorName={competitorName}
          competitorAddress={competitorAddress}
          lat={defaultLat}
          lng={defaultLng}
        />
      </Suspense>
    </div>
  )
}
