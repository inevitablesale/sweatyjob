"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import "@/app/components/map-styles.css"

interface ServiceAreaMapProps {
  city: string
  state: string
  longitude: number
  latitude: number
}

export default function ServiceAreaMap({ city, state, longitude, latitude }: ServiceAreaMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    // Initialize the map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longitude, latitude],
      zoom: 11,
      attributionControl: false,
      transformRequest: (url, resourceType) => {
        // Proxy Mapbox requests through our API route
        if (url.startsWith("https://api.mapbox.com") || url.startsWith("https://tiles.mapbox.com")) {
          const proxyUrl = new URL("/api/mapbox-proxy", window.location.origin)
          proxyUrl.searchParams.append("path", url.replace("https://api.mapbox.com", ""))
          return {
            url: proxyUrl.toString(),
          }
        }
        return { url }
      },
    })

    // Add navigation control
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

    // Add marker for the city center
    new mapboxgl.Marker({ color: "#3b82f6" })
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>${city}, ${state}</h3><p>Service area center</p>`))
      .addTo(map.current)

    // Add a circle to represent the service area
    map.current.on("load", () => {
      if (!map.current) return

      // Add a source for the service area circle
      map.current.addSource("service-area", {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          properties: {},
        },
      })

      // Add a circle layer
      map.current.addLayer({
        id: "service-area-fill",
        type: "circle",
        source: "service-area",
        paint: {
          "circle-radius": {
            stops: [
              [0, 0],
              [10, 10000], // 10km radius at zoom level 10
              [15, 20000], // 20km radius at zoom level 15
            ],
            base: 2,
          },
          "circle-color": "#3b82f6",
          "circle-opacity": 0.2,
          "circle-stroke-width": 2,
          "circle-stroke-color": "#3b82f6",
          "circle-stroke-opacity": 0.6,
        },
      })

      setLoaded(true)
    })

    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [longitude, latitude, city, state])

  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-700 bg-opacity-50">
          <div className="text-white">Loading map...</div>
        </div>
      )}
    </div>
  )
}
