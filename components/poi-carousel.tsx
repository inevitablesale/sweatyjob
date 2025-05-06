"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PoiProps {
  id: string
  name: string
  type: string
  address: string
  coordinates: {
    latitude: number
    longitude: number
  }
  distance: number
}

interface PoiCarouselProps {
  pois: PoiProps[]
  city: string
}

export default function PoiCarousel({ pois, city }: PoiCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Group POIs by type
  const poiByType: Record<string, PoiProps[]> = {}
  pois.forEach((poi) => {
    const type = poi.type || "Other"
    if (!poiByType[type]) {
      poiByType[type] = []
    }
    poiByType[type].push(poi)
  })

  // Get unique types
  const poiTypes = Object.keys(poiByType)

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % poiTypes.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + poiTypes.length) % poiTypes.length)
  }

  if (poiTypes.length === 0) return null

  const currentType = poiTypes[currentIndex]
  const currentPois = poiByType[currentType]

  return (
    <Card className="mb-12">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Points of Interest in {city}</h2>
          <div className="flex items-center">
            <Button variant="outline" size="icon" onClick={prevSlide} className="mr-2">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm">
              {currentIndex + 1} of {poiTypes.length}
            </span>
            <Button variant="outline" size="icon" onClick={nextSlide} className="ml-2">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <h3 className="text-xl font-medium mb-4 capitalize">{currentType}s</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentPois.slice(0, 6).map((poi) => (
            <div key={poi.id} className="border rounded-lg p-4">
              <h4 className="font-medium">{poi.name}</h4>
              <p className="text-sm text-gray-500 flex items-center mt-1">
                <MapPin className="h-3 w-3 mr-1" />
                {poi.address}
              </p>
              {poi.distance && <p className="text-sm text-gray-500 mt-1">{poi.distance.toFixed(1)} miles away</p>}
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-600">
          While you're enjoying {city}'s {currentType}s, SweatyJob's robots are taking care of your lawn. No more
          scheduling conflicts or waiting for the lawn service to finish before you can enjoy your day.
        </p>
      </CardContent>
    </Card>
  )
}
