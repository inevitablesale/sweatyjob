"use client"

import { useEffect, useRef, useState } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { Loader2 } from "lucide-react"

// Add an interface for the POI data structure
interface POI {
  id: string
  name: string
  latitude: number
  longitude: number
  address: string
  category: string
  distance: number
}

interface CompetitorLocationMapClientProps {
  city: string
  state: string
  competitorName: string
  competitorAddress?: string
  lat: number
  lng: number
}

export default function CompetitorLocationMapClient({
  city,
  state,
  competitorName,
  competitorAddress,
  lat,
  lng,
}: CompetitorLocationMapClientProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pois, setPois] = useState<POI[]>([])
  const [poisLoading, setPoisLoading] = useState(false)

  // Fetch POIs from our custom API endpoint
  useEffect(() => {
    const fetchPOIs = async () => {
      if (isNaN(lat) || isNaN(lng)) return

      try {
        setPoisLoading(true)
        const response = await fetch(`/api/nearby-pois?latitude=${lat}&longitude=${lng}&radius=1500`)

        if (!response.ok) {
          throw new Error(`Failed to fetch POIs: ${response.status}`)
        }

        const data = await response.json()
        console.log("📍 Fetched POIs:", data.pois)
        setPois(data.pois)
      } catch (err) {
        console.error("Error fetching POIs:", err)
      } finally {
        setPoisLoading(false)
      }
    }

    if (lat && lng) {
      fetchPOIs()
    }
  }, [lat, lng])

  useEffect(() => {
    console.log(`🗺️ Map component received coordinates: lat=${lat}, lng=${lng} for ${city}, ${state}`)

    if (!mapboxgl.supported()) {
      setError("Your browser does not support Mapbox GL")
      setLoading(false)
      return
    }

    // Validate coordinates
    if (!mapContainer.current) {
      setError("Map container not found")
      setLoading(false)
      return
    }

    if (isNaN(lat) || isNaN(lng)) {
      console.error(`❌ Invalid coordinates in map component: lat=${lat}, lng=${lng}`)
      setError(`Invalid coordinates provided: lat=${lat}, lng=${lng}`)
      setLoading(false)
      return
    }

    console.log(`✅ Valid coordinates in map component: lat=${lat}, lng=${lng}`)

    // Initialize map
    const initializeMap = async () => {
      try {
        setLoading(true)
        setError(null)

        mapboxgl.accessToken = "" // We'll use our proxy API instead of direct token access

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: "mapbox://styles/mapbox/dark-v11", // Dark style works well for our theme
          center: [lng, lat],
          zoom: 12,
          attributionControl: false,
          transformRequest: (url, resourceType) => {
            // Transform mapbox:// URLs to use our proxy
            if (url.startsWith("mapbox://") || url.includes("api.mapbox.com")) {
              // Extract the path from the URL
              let urlObj
              try {
                urlObj = new URL(url)
                return {
                  url: `/api/mapbox-proxy?path=${encodeURIComponent(urlObj.pathname)}&search=${encodeURIComponent(
                    urlObj.search,
                  )}`,
                  headers: {},
                  credentials: "same-origin",
                }
              } catch (e) {
                // If the URL is not valid, try to parse it as a mapbox:// URL
                if (url.startsWith("mapbox://")) {
                  const mapboxPath = url.replace("mapbox://", "")
                  return {
                    url: `/api/mapbox-proxy?path=${encodeURIComponent(mapboxPath)}`,
                    headers: {},
                    credentials: "same-origin",
                  }
                }
              }
            }
            return { url }
          },
        })

        // Add navigation controls
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

        // Add competitor marker
        const competitorMarker = new mapboxgl.Marker({ color: "#ef4444" }) // Red marker
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25, className: "dark-text-popup" }).setHTML(
              `<h3 style="color: #111; font-weight: bold;">${competitorName}</h3>
               <p style="color: #333;">${city}, ${state}</p>`,
            ),
          )
          .addTo(map.current)

        // Add SweatyJob marker (slightly offset)
        const sweatyJobMarker = new mapboxgl.Marker({ color: "#22c55e" }) // Green marker
          .setLngLat([lng + 0.003, lat + 0.002]) // Slight offset
          .setPopup(
            new mapboxgl.Popup({ offset: 25, className: "dark-text-popup" }).setHTML(
              `<h3 style="color: #111; font-weight: bold;">SweatyJob</h3>
               <p style="color: #333;">Robot Lawn Mowing Service</p>`,
            ),
          )
          .addTo(map.current)

        // Wait for map to load
        map.current.on("load", () => {
          if (!map.current) return

          // Add custom CSS for popups to ensure text is readable
          const style = document.createElement("style")
          style.textContent = `
            .dark-text-popup .mapboxgl-popup-content {
              background-color: rgba(255, 255, 255, 0.95);
              border-radius: 8px;
              padding: 12px;
              box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }
            .dark-text-popup .mapboxgl-popup-tip {
              border-top-color: rgba(255, 255, 255, 0.95);
            }
            .dark-text-popup h3 {
              margin: 0 0 5px 0;
              font-size: 16px;
            }
            .dark-text-popup p {
              margin: 0;
              font-size: 14px;
            }
          `
          document.head.appendChild(style)

          // Enable POI layer for real points of interest
          // This uses Mapbox's built-in POI data
          map.current.setLayoutProperty("poi-label", "visibility", "visible")

          // Customize POI layer to make it more visible
          map.current.setPaintProperty("poi-label", "text-color", "#ffffff")
          map.current.setPaintProperty("poi-label", "text-halo-color", "#000000")
          map.current.setPaintProperty("poi-label", "text-halo-width", 1)

          // Filter POIs to show only relevant categories
          map.current.setFilter("poi-label", [
            "in",
            ["get", "class"],
            [
              "literal",
              [
                "park",
                "garden",
                "golf",
                "cemetery",
                "playground",
                "school",
                "college",
                "university",
                "hospital",
                "pharmacy",
                "restaurant",
                "cafe",
                "bar",
                "grocery",
                "supermarket",
                "department_store",
                "shopping_mall",
                "place_of_worship",
                "town_hall",
                "community_centre",
              ],
            ],
          ])

          // Add custom POIs from our API
          if (pois.length > 0 && map.current) {
            console.log(`Adding ${pois.length} custom POIs to map`)

            // Define marker colors by category
            const categoryColors: Record<string, string> = {
              restaurant: "#FFD700", // Gold
              park: "#00FF00", // Green
              store: "#1E90FF", // Blue
              school: "#FF8C00", // Orange
              attraction: "#FF00FF", // Magenta
              default: "#FFFFFF", // White
            }

            // Add each POI as a marker
            pois.forEach((poi) => {
              const color = categoryColors[poi.category] || categoryColors.default

              new mapboxgl.Marker({ color })
                .setLngLat([poi.longitude, poi.latitude])
                .setPopup(
                  new mapboxgl.Popup({ offset: 25, className: "dark-text-popup" }).setHTML(
                    `<h3 style="color: #111; font-weight: bold;">${poi.name}</h3>
                     <p style="color: #333;">${poi.category}</p>
                     <p style="color: #555; font-size: 12px;">${poi.address || ""}</p>
                     <p style="color: #555; font-size: 12px;">Distance: ${Math.round(poi.distance)}m</p>`,
                  ),
                )
                .addTo(map.current!)
            })
          }

          setLoading(false)
        })

        // Handle errors
        map.current.on("error", (e) => {
          console.error("Mapbox error:", e)
          setError("Error loading map")
          setLoading(false)
        })
      } catch (err) {
        console.error("Error initializing map:", err)
        setError(err instanceof Error ? err.message : "Error initializing map")
        setLoading(false)
      }
    }

    initializeMap()

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [city, state, lat, lng, competitorName, pois])

  return (
    <div className="relative rounded-lg overflow-hidden h-full">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 bg-opacity-75 z-10">
          <Loader2 className="h-8 w-8 text-blue-400 animate-spin" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 bg-opacity-75 z-10">
          <div className="text-white text-center p-4">
            <p className="text-red-400 font-bold mb-2">Error</p>
            <p>{error}</p>
          </div>
        </div>
      )}
      {poisLoading && !loading && (
        <div className="absolute top-2 right-2 bg-slate-800 bg-opacity-75 rounded-md p-2 z-10">
          <Loader2 className="h-4 w-4 text-blue-400 animate-spin" />
        </div>
      )}
      <div ref={mapContainer} className="h-full w-full" />
    </div>
  )
}
