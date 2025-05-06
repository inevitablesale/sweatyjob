"use client"

import { useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

interface MarketMapClientProps {
  center: [number, number]
  zoom: number
  markers?: Array<{
    coordinates: [number, number]
    title: string
  }>
}

export default function MarketMapClient({ center, zoom, markers = [] }: MarketMapClientProps) {
  const [mapInitialized, setMapInitialized] = useState(false)

  useEffect(() => {
    // Initialize map without setting the token directly
    const initializeMap = async () => {
      try {
        const mapContainer = document.getElementById("market-map")

        if (!mapContainer || mapInitialized) return

        // Use our proxy endpoint instead of direct Mapbox API access
        // This avoids exposing the token in client-side code
        const map = new mapboxgl.Map({
          container: "market-map",
          style: "/api/mapbox-proxy?endpoint=styles/v1/mapbox/streets-v11",
          center,
          zoom,
          transformRequest: (url, resourceType) => {
            // Proxy Mapbox requests through our secure endpoint
            if (url.startsWith("https://api.mapbox.com")) {
              const endpoint = url.replace("https://api.mapbox.com/", "")
              const queryString = url.includes("?") ? url.split("?")[1] : ""

              return {
                url: `/api/mapbox-proxy?endpoint=${encodeURIComponent(endpoint)}&query=${encodeURIComponent(queryString)}`,
              }
            }
            return { url }
          },
        })

        // Add markers
        markers.forEach((marker) => {
          new mapboxgl.Marker()
            .setLngLat(marker.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${marker.title}</h3>`))
            .addTo(map)
        })

        setMapInitialized(true)
      } catch (error) {
        console.error("Error initializing map:", error)
      }
    }

    initializeMap()

    return () => {
      // Cleanup if needed
    }
  }, [center, zoom, markers, mapInitialized])

  return <div id="market-map" className="w-full h-[400px] rounded-lg shadow-md" />
}
