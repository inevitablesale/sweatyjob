"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

interface CompetitorLocationMapProps {
  locations: {
    name: string
    lat: number
    lng: number
  }[]
  centerLat?: number
  centerLng?: number
  zoom?: number
}

export default function CompetitorLocationMapClient({
  locations,
  centerLat = 37.7749,
  centerLng = -122.4194,
  zoom = 10,
}: CompetitorLocationMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    if (!mapContainer.current) return

    const initializeMap = async () => {
      // Initialize map with a dummy token - we'll use our proxy for actual requests
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [centerLng, centerLat],
        zoom: zoom,
        accessToken: "pk.dummy.token",
        transformRequest: (url, resourceType) => {
          // Only transform requests for tiles, sprites, fonts, etc.
          if (
            resourceType === "Tile" ||
            url.includes("mapbox://styles") ||
            url.includes("mapbox://sprites") ||
            url.includes("mapbox://fonts")
          ) {
            // Extract the path from the URL
            let urlObj
            try {
              urlObj = new URL(url)
            } catch (e) {
              // If the URL is not valid, try to parse it as a mapbox:// URL
              if (url.startsWith("mapbox://")) {
                // For mapbox:// URLs, we need to convert them to https://api.mapbox.com/...
                const mapboxPath = url.replace("mapbox://", "")
                return {
                  url: `/api/mapbox-proxy?path=${encodeURIComponent(mapboxPath)}`,
                  headers: {},
                  credentials: "same-origin",
                }
              }
              return { url }
            }

            // Construct a new URL that points to our proxy
            return {
              url: `/api/mapbox-proxy?path=${encodeURIComponent(urlObj.pathname)}&search=${encodeURIComponent(urlObj.search)}`,
              headers: {},
              credentials: "same-origin",
            }
          }
          return { url }
        },
      })

      map.current.on("load", () => {
        setMapLoaded(true)
      })
    }

    initializeMap()

    return () => {
      if (map.current) {
        map.current.remove()
      }
    }
  }, [centerLat, centerLng, zoom])

  useEffect(() => {
    if (!mapLoaded || !map.current) return

    // Add markers for each location
    locations.forEach((location) => {
      const marker = new mapboxgl.Marker()
        .setLngLat([location.lng, location.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${location.name}</h3>`))
        .addTo(map.current!)
    })
  }, [locations, mapLoaded])

  return (
    <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
      <div ref={mapContainer} className="h-full w-full" />
    </div>
  )
}
