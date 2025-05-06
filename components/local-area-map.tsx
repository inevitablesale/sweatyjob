"use client"

import { useEffect, useRef, useState } from "react"

interface MapProps {
  center: {
    lat: number
    lng: number
  }
  zoom: number
  markers?: Array<{
    position: {
      lat: number
      lng: number
    }
    title: string
  }>
}

export default function LocalAreaMap({ center, zoom, markers = [] }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapboxToken, setMapboxToken] = useState<string | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Fetch Mapbox token
    const fetchMapboxToken = async () => {
      try {
        const response = await fetch("/api/get-mapbox-token")
        if (response.ok) {
          const data = await response.json()
          setMapboxToken(data.token)
        }
      } catch (error) {
        console.error("Error fetching Mapbox token:", error)
      }
    }

    fetchMapboxToken()
  }, [])

  useEffect(() => {
    if (!mapboxToken || !mapRef.current || mapLoaded) return

    // Load Mapbox script
    const script = document.createElement("script")
    script.src = "https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"
    script.async = true
    script.onload = () => {
      // Initialize map
      if (window.mapboxgl) {
        window.mapboxgl.accessToken = mapboxToken

        const map = new window.mapboxgl.Map({
          container: mapRef.current!,
          style: "mapbox://styles/mapbox/streets-v12",
          center: [center.lng, center.lat],
          zoom: zoom,
        })

        // Add markers
        markers.forEach((marker) => {
          const el = document.createElement("div")
          el.className = "marker"
          el.style.backgroundImage = "url(https://docs.mapbox.com/mapbox-gl-js/assets/pin.svg)"
          el.style.width = "30px"
          el.style.height = "30px"
          el.style.backgroundSize = "100%"

          new window.mapboxgl.Marker(el)
            .setLngLat([marker.position.lng, marker.position.lat])
            .setPopup(new window.mapboxgl.Popup({ offset: 25 }).setHTML(`<h3>${marker.title}</h3>`))
            .addTo(map)
        })

        setMapLoaded(true)
      }
    }

    document.head.appendChild(script)

    // Add Mapbox CSS
    const link = document.createElement("link")
    link.href = "https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(script)
      document.head.removeChild(link)
    }
  }, [mapboxToken, center, zoom, markers, mapLoaded])

  return (
    <div ref={mapRef} style={{ width: "100%", height: "100%" }}>
      {!mapboxToken && (
        <div className="flex items-center justify-center h-full bg-gray-100">
          <p>Loading map...</p>
        </div>
      )}
    </div>
  )
}
