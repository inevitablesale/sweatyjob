"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

interface ColorfulMapProps {
  center?: [number, number]
  zoom?: number
  markers?: Array<{
    coordinates: [number, number]
    color: string
    title: string
    description?: string
  }>
  style?: "streets" | "outdoors" | "light" | "dark" | "satellite" | "satellite-streets"
  width?: string
  height?: string
}

export default function ColorfulMap({
  center = [-77.436, 37.5407], // Richmond, VA as default
  zoom = 10,
  markers = [],
  style = "streets",
  width = "100%",
  height = "500px",
}: ColorfulMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapStyles, setMapStyles] = useState<Record<string, string>>({
    streets: "mapbox://styles/mapbox/streets-v12",
    outdoors: "mapbox://styles/mapbox/outdoors-v12",
    light: "mapbox://styles/mapbox/light-v11",
    dark: "mapbox://styles/mapbox/dark-v11",
    satellite: "mapbox://styles/mapbox/satellite-v9",
    "satellite-streets": "mapbox://styles/mapbox/satellite-streets-v12",
  })

  // Fetch map initialization data from our secure API
  useEffect(() => {
    async function initializeMap() {
      try {
        const response = await fetch("/api/mapbox-init")
        if (!response.ok) {
          throw new Error("Failed toinitialize map")
        }
        const data = await response.json()
        if (data.mapStyles) {
          setMapStyles(data.mapStyles)
        }
      } catch (error) {
        console.error("Error initializing map:", error)
      }
    }

    initializeMap()
  }, [])

  useEffect(() => {
    if (!mapContainer.current || map.current) return

    // Use a server-side API to handle token-based operations
    // The token is now managed by the server and not exposed to the client
    mapboxgl.accessToken = "" // We'll use our proxy API instead of direct token

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyles[style],
      center: center,
      zoom: zoom,
      transformRequest: (url, resourceType) => {
        // For all requests to Mapbox APIs, redirect through our proxy
        if (url.startsWith("https://api.mapbox.com") || url.startsWith("https://tiles.mapbox.com")) {
          // Add a parameter to indicate this request should be proxied
          return {
            url: `/api/mapbox-proxy?originalUrl=${encodeURIComponent(url)}`,
            headers: {
              "Content-Type": "application/json",
            },
          }
        }
        return { url }
      },
    })

    map.current.on("load", () => {
      setMapLoaded(true)
    })

    return () => {
      map.current?.remove()
    }
  }, [center, zoom, style, mapStyles])

  // Add markers when map is loaded
  useEffect(() => {
    if (!mapLoaded || !map.current) return

    // Add markers
    markers.forEach((marker) => {
      // Create a DOM element for the marker
      const el = document.createElement("div")
      el.className = "custom-marker"
      el.style.backgroundColor = marker.color
      el.style.width = "20px"
      el.style.height = "20px"
      el.style.borderRadius = "50%"
      el.style.border = "2px solid white"
      el.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)"

      // Add a pulse effect
      const pulse = document.createElement("div")
      pulse.className = "pulse"
      pulse.style.backgroundColor = marker.color
      pulse.style.opacity = "0.4"
      el.appendChild(pulse)

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h3 style="margin: 0; font-weight: 600;">${marker.title}</h3>
         ${marker.description ? `<p style="margin: 5px 0 0;">${marker.description}</p>` : ""}`,
      )

      // Add marker to map
      new mapboxgl.Marker(el).setLngLat(marker.coordinates).setPopup(popup).addTo(map.current)
    })

    // Add a colorful heatmap layer if there are enough markers
    if (markers.length > 5) {
      // Convert markers to GeoJSON
      const points = {
        type: "FeatureCollection",
        features: markers.map((marker) => ({
          type: "Feature",
          properties: {
            intensity: Math.random() * 0.5 + 0.5, // Random intensity between 0.5 and 1
          },
          geometry: {
            type: "Point",
            coordinates: marker.coordinates,
          },
        })),
      }

      // Add source and layer if they don't exist
      if (!map.current.getSource("points")) {
        map.current.addSource("points", {
          type: "geojson",
          data: points,
        })

        map.current.addLayer({
          id: "heatmap-layer",
          type: "heatmap",
          source: "points",
          paint: {
            "heatmap-weight": ["get", "intensity"],
            "heatmap-intensity": 0.6,
            "heatmap-color": [
              "interpolate",
              ["linear"],
              ["heatmap-density"],
              0,
              "rgba(0, 0, 255, 0)",
              0.2,
              "rgba(0, 255, 255, 0.3)",
              0.4,
              "rgba(0, 255, 0, 0.5)",
              0.6,
              "rgba(255, 255, 0, 0.7)",
              0.8,
              "rgba(255, 0, 0, 0.8)",
              1,
              "rgba(255, 0, 255, 0.9)",
            ],
            "heatmap-radius": 30,
            "heatmap-opacity": 0.7,
          },
        })
      }
    }
  }, [mapLoaded, markers])

  return (
    <>
      <div ref={mapContainer} style={{ width, height, borderRadius: "8px" }} />
      <style jsx global>{`
        .custom-marker {
          cursor: pointer;
          position: relative;
        }
        .pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: pulse 1.5s infinite;
          top: 0;
          left: 0;
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          70% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
}
