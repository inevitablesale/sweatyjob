"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

interface MarketMapProps {
  center: [number, number]
  zoom: number
  serviceableZipCodes?: string[]
  className?: string
  markets?: {
    city: string
    state: string
    latitude: number
    longitude: number
    homeownershipRate: number
    averageLawnSize: "small" | "medium" | "large"
    demandScore: number
  }[]
}

export function MarketMap({ center, zoom, serviceableZipCodes, className, markets }: MarketMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapboxToken, setMapboxToken] = useState<string | null>(null)

  // Fetch the Mapbox token from our API
  useEffect(() => {
    async function fetchMapboxToken() {
      try {
        const response = await fetch("/api/get-mapbox-token")
        const data = await response.json()
        if (data.token) {
          setMapboxToken(data.token)
        } else {
          console.error("Failed to get Mapbox token:", data.error)
        }
      } catch (error) {
        console.error("Error fetching Mapbox token:", error)
      }
    }

    fetchMapboxToken()
  }, [])

  // Initialize map once we have the token
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return

    // Initialize map only once
    if (map.current) return

    mapboxgl.accessToken = mapboxToken

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: center,
      zoom: zoom,
    })

    // Wait for both the load event and style.load event
    map.current.on("load", () => {
      setMapLoaded(true)

      // Add service area visualization
      const serviceAreaGeojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [center[0] - 0.1, center[1] - 0.1],
                  [center[0] + 0.1, center[1] - 0.1],
                  [center[0] + 0.1, center[1] + 0.1],
                  [center[0] - 0.1, center[1] + 0.1],
                  [center[0] - 0.1, center[1] - 0.1],
                ],
              ],
            },
          },
        ],
      }

      // Add source and layer
      if (map.current) {
        map.current.addSource("serviceArea", {
          type: "geojson",
          data: serviceAreaGeojson,
        })

        map.current.addLayer({
          id: "serviceAreaLayer",
          type: "fill",
          source: "serviceArea",
          paint: {
            "fill-color": "#008000",
            "fill-opacity": 0.2,
          },
        })

        // Add markers after the style has loaded
        if (markets) {
          markets.forEach((market) => {
            const el = document.createElement("div")
            el.className = "marker"
            el.style.width = "10px"
            el.style.height = "10px"
            el.style.borderRadius = "50%"
            el.style.backgroundColor = getColorForDemand(market.demandScore)
            el.style.cursor = "pointer"

            new mapboxgl.Marker(el)
              .setLngLat([market.longitude, market.latitude])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setHTML(
                  `<h3>${market.city}, ${market.state}</h3><p>Homeownership: ${
                    market.homeownershipRate * 100
                  }%</p><p>Lawn Size: ${market.averageLawnSize}</p><p>Demand: ${market.demandScore}</p>`,
                ),
              )
              .addTo(map.current)
          })
        }
      }
    })

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [center, zoom, markets, mapboxToken])

  function getColorForDemand(demandScore: number): string {
    if (demandScore > 7) return "red"
    if (demandScore > 5) return "orange"
    return "green"
  }

  return <div ref={mapContainer} className={`map-container ${className}`} style={{ height: "400px" }} />
}
