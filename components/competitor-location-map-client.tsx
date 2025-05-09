"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { Loader2 } from "lucide-react"

// Define types for our POIs and neighborhoods
interface Feature {
  id: string
  name: string
  category: string
  address: string
  latitude: number
  longitude: number
  distance: number
  place_type?: string[]
}

interface CompetitorLocationMapClientProps {
  city: string
  state: string
  competitorName: string
  competitorAddress?: string
  lat: number | null | undefined
  lng: number | null | undefined
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
  const markersRef = useRef<mapboxgl.Marker[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [features, setFeatures] = useState<Feature[]>([])
  const [neighborhoods, setNeighborhoods] = useState<string[]>([])
  const [poisLoading, setPoisLoading] = useState(false)
  const [mapAnalyticsEnabled, setMapAnalyticsEnabled] = useState(true)
  const [poiCount, setPoiCount] = useState(0)
  const [debugInfo, setDebugInfo] = useState<string>("")
  const [mapboxToken, setMapboxToken] = useState<string>("")

  // Validate coordinates
  const isValidCoordinate = (coord: number | null | undefined): boolean => {
    return (
      coord !== null &&
      coord !== undefined &&
      !isNaN(coord) &&
      isFinite(coord) &&
      // Add additional validation for reasonable coordinate ranges
      coord > -180 &&
      coord < 180
    )
  }

  const validLat = isValidCoordinate(lat) ? Number(lat) : null
  const validLng = isValidCoordinate(lng) ? Number(lng) : null

  // Fetch the Mapbox token from our server API
  const fetchMapboxToken = async () => {
    try {
      const response = await fetch("/api/mapbox-token")
      if (!response.ok) {
        throw new Error("Failed to fetch Mapbox token")
      }
      const data = await response.json()
      return data.token
    } catch (error) {
      console.error("Error fetching Mapbox token:", error)
      return null
    }
  }

  // Add map data caching function
  const fetchCachedMapData = async (lat: number, lng: number, radius: number, type: string) => {
    // Create a cache key based on the parameters
    const cacheKey = `map-data-${lat.toFixed(4)}-${lng.toFixed(4)}-${radius}-${type}`

    // Check if we have cached data
    if (typeof window !== "undefined") {
      try {
        const cachedData = localStorage.getItem(cacheKey)
        if (cachedData) {
          const parsedData = JSON.parse(cachedData)
          const cacheTime = parsedData.timestamp
          const now = Date.now()

          // Use cache if less than 24 hours old
          if (now - cacheTime < 24 * 60 * 60 * 1000) {
            console.log(`🗃️ Using cached map data for ${type}`)
            return parsedData.data
          }
        }
      } catch (e) {
        console.error("Error parsing cached map data:", e)
      }
    }

    // Fetch fresh data if no cache or cache expired
    console.log(`🔍 Fetching fresh map data for ${type}`)
    const response = await fetch(`/api/nearby-pois?lat=${lat}&lng=${lng}&radius=${radius}&type=${type}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch ${type}: ${response.status}`)
    }

    const data = await response.json()

    // Cache the result
    if (typeof window !== "undefined") {
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          timestamp: Date.now(),
          data,
        }),
      )
    }

    return data
  }

  // Add analytics tracking function
  const trackMapEvent = useCallback(
    (eventName: string, details = {}) => {
      if (!mapAnalyticsEnabled) return

      if (typeof window !== "undefined" && "gtag" in window) {
        // @ts-ignore - gtag might not be typed
        window.gtag?.("event", eventName, {
          event_category: "Map",
          ...details,
        })
      }
    },
    [mapAnalyticsEnabled],
  )

  // Initialize map when component mounts
  useEffect(() => {
    console.log(`🗺️ Map component received coordinates: lat=${lat}, lng=${lng} for ${city}, ${state}`)

    // Clear any previous error
    setError(null)

    // Validate coordinates
    if (!validLat || !validLng) {
      console.error(`❌ Invalid coordinates in map component: lat=${lat}, lng=${lng}`)
      setError(`Invalid coordinates provided for ${city}, ${state}. Map cannot be displayed.`)
      setLoading(false)
      return
    }

    if (!mapboxgl.supported()) {
      setError("Your browser does not support Mapbox GL")
      setLoading(false)
      return
    }

    if (!mapContainer.current) {
      setError("Map container not found")
      setLoading(false)
      return
    }

    console.log(`✅ Valid coordinates in map component: lat=${validLat}, lng=${validLng}`)
    initializeMap(validLat, validLng)

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }

      // Clear all markers
      markersRef.current.forEach((marker) => marker.remove())
      markersRef.current = []
    }
  }, [city, state, lat, lng, validLat, validLng, competitorName])

  // Function to fit map bounds to include all markers
  const fitMapToMarkers = () => {
    if (!map.current) return

    try {
      // If we have markers, fit to them
      if (markersRef.current.length > 0) {
        const bounds = new mapboxgl.LngLatBounds()
        markersRef.current.forEach((marker) => {
          const lngLat = marker.getLngLat()
          // Only include coordinates that are likely in the US
          if (lngLat.lat > 24 && lngLat.lat < 50 && lngLat.lng > -125 && lngLat.lng < -66) {
            bounds.extend(lngLat)
          }
        })

        // If we have valid bounds, fit to them
        if (!bounds.isEmpty()) {
          map.current.fitBounds(bounds, {
            padding: 50,
            maxZoom: 15,
          })
          return
        }
      }

      // Fallback to continental US view
      map.current.fitBounds(
        [
          [-125, 24], // Southwest coordinates
          [-66, 50], // Northeast coordinates
        ],
        {
          padding: 50,
          maxZoom: 15,
        },
      )

      console.log("✅ Map fitted to continental US (fallback)")
    } catch (error) {
      console.error("❌ Error fitting map to markers:", error)

      // Additional fallback
      if (map.current) {
        map.current.setCenter([-98.5795, 39.8283]) // Center of US
        map.current.setZoom(4) // Zoom level to show most of US
      }
    }
  }

  // Extract map initialization to a separate function
  const initializeMap = async (mapLat: number, mapLng: number) => {
    try {
      setLoading(true)

      // Set a temporary token for Mapbox
      // This will be replaced by our proxy approach
      mapboxgl.accessToken = "pk.dummy.token"

      // Add this check before creating the map
      if (validLat && validLng) {
        // Basic check for US coordinates
        const isLikelyUS = validLat > 24 && validLat < 50 && validLng > -125 && validLng < -66
        if (!isLikelyUS) {
          console.error(`❌ Coordinates appear to be outside the US: lat=${validLat}, lng=${validLng}`)
          setError(`The provided coordinates appear to be invalid for ${city}, ${state}. Please try again.`)
          setLoading(false)
          return
        }
      }

      // Create map instance with validated coordinates
      map.current = new mapboxgl.Map({
        container: mapContainer.current!,
        style: "mapbox://styles/mapbox/dark-v11", // Dark style works well for our theme
        center: [mapLng, mapLat],
        zoom: 9.5, // Increased zoom level for better visibility of 50-mile radius
        attributionControl: false,
        transformRequest: (url, resourceType) => {
          // Intercept requests to Mapbox API and redirect them through our proxy
          if (url.startsWith("https://api.mapbox.com") || url.startsWith("https://events.mapbox.com")) {
            return {
              url: `/api/mapbox-proxy?url=${encodeURIComponent(url)}`,
              headers: {
                "Content-Type": "application/json",
              },
            }
          }
          return { url }
        },
      })

      // Add service radius visualization
      const addServiceRadius = () => {
        if (!map.current) return

        // Create a 50-mile service radius circle (80470 meters)
        const radiusInMeters = 80470 // 50 miles in meters

        map.current.addSource("service-radius", {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [mapLng, mapLat],
            },
            properties: {
              radius: radiusInMeters,
            },
          },
        })

        map.current.addLayer({
          id: "service-radius-fill",
          type: "circle",
          source: "service-radius",
          paint: {
            "circle-radius": {
              stops: [
                [0, 0],
                [20, radiusInMeters * 2],
              ],
              base: 2,
            },
            "circle-color": "#22c55e",
            "circle-opacity": 0.15,
            "circle-stroke-width": 3,
            "circle-stroke-color": "#22c55e",
            "circle-stroke-opacity": 0.8,
          },
        })
      }

      // Add keyboard navigation support
      const setupAccessibility = () => {
        if (!map.current || !mapContainer.current) return

        // Make map container focusable
        mapContainer.current.tabIndex = 0
        mapContainer.current.setAttribute(
          "aria-label",
          "Interactive map showing competitor locations and points of interest",
        )

        // Add keyboard event listeners
        mapContainer.current.addEventListener("keydown", (e) => {
          if (!map.current) return

          const panAmount = 50 // pixels

          switch (e.key) {
            case "ArrowUp":
              map.current.panBy([0, -panAmount])
              trackMapEvent("map_keyboard_navigation", { key: "ArrowUp" })
              e.preventDefault()
              break
            case "ArrowDown":
              map.current.panBy([0, panAmount])
              trackMapEvent("map_keyboard_navigation", { key: "ArrowDown" })
              e.preventDefault()
              break
            case "ArrowLeft":
              map.current.panBy([-panAmount, 0])
              trackMapEvent("map_keyboard_navigation", { key: "ArrowLeft" })
              e.preventDefault()
              break
            case "ArrowRight":
              map.current.panBy([panAmount, 0])
              trackMapEvent("map_keyboard_navigation", { key: "ArrowRight" })
              e.preventDefault()
              break
            case "+":
              map.current.zoomIn()
              trackMapEvent("map_keyboard_navigation", { key: "ZoomIn" })
              e.preventDefault()
              break
            case "-":
              map.current.zoomOut()
              trackMapEvent("map_keyboard_navigation", { key: "ZoomOut" })
              e.preventDefault()
              break
          }
        })
      }

      // Add map event tracking
      const setupMapAnalytics = () => {
        if (!map.current) return

        map.current.on("zoomend", () => {
          trackMapEvent("map_zoom", { zoom_level: map.current?.getZoom() })
        })

        map.current.on("dragend", () => {
          const center = map.current?.getCenter()
          trackMapEvent("map_pan", {
            lat: center?.lat.toFixed(4),
            lng: center?.lng.toFixed(4),
          })
        })
      }

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

      // Add competitor marker
      const competitorMarker = new mapboxgl.Marker({ color: "#ef4444" }) // Red marker
        .setLngLat([mapLng, mapLat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25, className: "dark-text-popup" }).setHTML(
            `<h3 style="color: #111; font-weight: bold;">${competitorName}</h3>
             <p style="color: #333;">${city}, ${state}</p>`,
          ),
        )
        .addTo(map.current)

      // Add SweatyJob marker (slightly offset)
      const sweatyJobMarker = new mapboxgl.Marker({ color: "#22c55e" }) // Green marker
        .setLngLat([mapLng + 0.003, mapLat + 0.002]) // Slight offset
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
        
        /* Make markers more visible */
        .custom-marker {
          box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
          border: 2px solid white !important;
        }
      `
        document.head.appendChild(style)

        // Disable POI layer - we don't want to show Mapbox's built-in POIs
        map.current.setLayoutProperty("poi-label", "visibility", "none")

        // Enable POI layer for real points of interest
        // This uses Mapbox's built-in POI data
        map.current.setLayoutProperty("poi-label", "visibility", "visible")

        // Customize POI layer to make it more visible
        map.current.setPaintProperty("poi-label", "text-color", "#ffffff")
        map.current.setPaintProperty("poi-label", "text-halo-color", "#000000")
        map.current.setPaintProperty("poi-label", "text-halo-width", 1)

        // Do NOT filter POIs - show all categories
        // Remove any existing filters on the poi-label layer
        try {
          map.current.setFilter("poi-label", null)
        } catch (e) {
          console.log("Could not remove filter from poi-label layer", e)
        }

        // Add service radius
        addServiceRadius()

        // Setup accessibility
        setupAccessibility()

        // Setup analytics
        setupMapAnalytics()

        // Fetch neighborhoods and POIs
        fetchAllLocations()

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

  // Update to fetch all locations without filtering
  const fetchAllLocations = async () => {
    if (!validLat || !validLng) {
      console.error("Cannot fetch locations: Invalid coordinates", { lat: validLat, lng: validLng })
      return
    }

    setPoisLoading(true)
    try {
      // Don't fetch any POIs or neighborhoods - just set up the radius
      if (map.current) {
        // Fit map to show the 50-mile radius
        setTimeout(() => {
          if (map.current) {
            // Set zoom level to show 50-mile radius properly
            map.current.setZoom(9.5)
          }
        }, 500)
      }
    } catch (error) {
      console.error("❌ Error setting up map:", error)
    } finally {
      setPoisLoading(false)
    }
  }

  // Update to fetch all locations without filtering
  const addPoiMarkers = (features: Feature[]) => {
    if (!map.current) {
      console.error("Cannot add POI markers: map is not initialized")
      return
    }

    console.log(`🔍 Adding ${features.length} POI markers to map`)
    setDebugInfo(`Adding ${features.length} POI markers to map...`)

    // Define colors for different POI categories
    const categoryColors: Record<string, string> = {
      food: "#f97316", // Orange
      shop: "#06b6d4", // Cyan
      park: "#22c55e", // Green
      school: "#3b82f6", // Blue
      medical: "#ef4444", // Red
      poi: "#a855f7", // Purple
      other: "#64748b", // Slate
    }

    let addedCount = 0
    let errorCount = 0

    // NO LIMIT - show all POIs
    features.forEach((feature) => {
      // Skip if coordinates are invalid
      if (
        !feature.longitude ||
        !feature.latitude ||
        isNaN(feature.longitude) ||
        isNaN(feature.latitude) ||
        !isFinite(feature.longitude) ||
        !isFinite(feature.latitude)
      ) {
        console.error(`❌ Invalid coordinates for POI: ${feature.name}`, feature)
        errorCount++
        return
      }

      // Inside the addPoiMarkers function, add this check before creating each marker
      if (feature.latitude < 24 || feature.latitude > 50 || feature.longitude < -125 || feature.longitude > -66) {
        console.log(`⚠️ Skipping marker outside US bounds: ${feature.name} at ${feature.latitude},${feature.longitude}`)
        return // Skip this marker
      }

      // Get color based on category
      const color = categoryColors[feature.category] || categoryColors.other

      try {
        // Create a custom element for the marker
        const el = document.createElement("div")
        el.className = "custom-marker"
        el.setAttribute("data-category", feature.category)
        el.style.backgroundColor = color
        el.style.width = "20px"
        el.style.height = "20px"
        el.style.borderRadius = "50%"
        el.style.border = "2px solid white"
        el.style.cursor = "pointer"

        // Create a marker for this POI
        const marker = new mapboxgl.Marker({
          element: el,
          scale: 0.8, // Make markers slightly smaller
        })
          .setLngLat([feature.longitude, feature.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25, className: "dark-text-popup" }).setHTML(
              `<h3 style="color: #111; font-weight: bold;">${feature.name}</h3>
             <p style="color: #333;">${feature.category.charAt(0).toUpperCase() + feature.category.slice(1)}</p>
             <p style="color: #555; font-size: 12px;">${feature.address || ""}</p>
             <div style="margin-top: 8px;">
               <a href="https://www.google.com/maps/search/?api=1&query=${feature.latitude},${feature.longitude}" 
                  target="_blank" rel="noopener noreferrer" 
                  style="color: #2563eb; text-decoration: underline; font-size: 12px;">
                 View on Google Maps
               </a>
             </div>`,
            ),
          )
          .addTo(map.current)

        // Track marker clicks
        el.addEventListener("click", () => {
          trackMapEvent("marker_click", {
            marker_type: feature.category,
            marker_name: feature.name,
          })
        })

        // Store marker reference for cleanup
        markersRef.current.push(marker)
        addedCount++
      } catch (error) {
        console.error(`❌ Error adding marker for ${feature.name}:`, error)
        errorCount++
      }
    })

    console.log(`✅ Successfully added ${addedCount} POI markers to map (${errorCount} errors)`)
    setDebugInfo(`Added ${addedCount} POI markers to map (${errorCount} errors)`)
  }

  // Function to add neighborhood markers
  const addNeighborhoodMarkers = (features: Feature[]) => {
    if (!map.current) return

    console.log(`🔍 Adding ${features.length} neighborhood markers to map`)

    features.forEach((feature) => {
      // Skip if coordinates are invalid
      if (
        !feature.longitude ||
        !feature.latitude ||
        isNaN(feature.longitude) ||
        isNaN(feature.latitude) ||
        !isFinite(feature.longitude) ||
        !isFinite(feature.latitude)
      ) {
        console.error(`❌ Invalid coordinates for neighborhood: ${feature.name}`, feature)
        return
      }

      try {
        // Create a custom element for the marker
        const el = document.createElement("div")
        el.className = "custom-marker"
        el.setAttribute("data-category", "neighborhood")
        el.style.backgroundColor = "#8a2be2" // Purple for neighborhoods
        el.style.width = "24px" // Slightly larger than POIs
        el.style.height = "24px"
        el.style.borderRadius = "50%"
        el.style.border = "2px solid white"
        el.style.cursor = "pointer"

        // Create a marker for this neighborhood
        const marker = new mapboxgl.Marker({
          element: el,
        })
          .setLngLat([feature.longitude, feature.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25, className: "dark-text-popup" }).setHTML(
              `<h3 style="color: #111; font-weight: bold;">${feature.name}</h3>
               <p style="color: #333;">Neighborhood</p>
               <p style="color: #555; font-size: 12px;">${feature.address || ""}</p>`,
            ),
          )
          .addTo(map.current)

        // Track marker clicks
        el.addEventListener("click", () => {
          trackMapEvent("marker_click", {
            marker_type: "neighborhood",
            marker_name: feature.name,
          })
        })

        // Store marker reference for cleanup
        markersRef.current.push(marker)
      } catch (error) {
        console.error(`❌ Error adding marker for neighborhood ${feature.name}:`, error)
      }
    })

    console.log(`✅ Successfully added ${features.length} neighborhood markers to map`)
  }

  // Add a button to manually fit bounds
  const handleFitBounds = () => {
    fitMapToMarkers()
  }

  // Add a button to manually reload POIs
  const handleReloadPOIs = () => {
    if (!map.current) return

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove())
    markersRef.current = []

    // Reload data
    fetchAllLocations()
  }

  // Replace the return statement with this enhanced version:
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
            <button
              onClick={() => {
                setError(null)
                setLoading(true)
                if (validLat && validLng) {
                  initializeMap(validLat, validLng)
                }
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Retry Loading Map
            </button>
          </div>
        </div>
      )}

      {/* Simplified Map Legend */}
      <div className="absolute bottom-2 right-2 z-10 bg-white bg-opacity-90 p-2 rounded-md">
        <div className="text-xs font-medium text-slate-800 mb-1">Map Legend</div>
        <div className="flex items-center space-x-1 mb-1">
          <div style={{ width: 12, height: 12, backgroundColor: "#ef4444", borderRadius: "50%" }}></div>
          <span className="text-xs text-slate-700">{competitorName}</span>
        </div>
        <div className="flex items-center space-x-1 mb-1">
          <div style={{ width: 12, height: 12, backgroundColor: "#22c55e", borderRadius: "50%" }}></div>
          <span className="text-xs text-slate-700">SweatyJob</span>
        </div>
        <div className="flex items-center space-x-1">
          <div style={{ width: 12, height: 12, backgroundColor: "#22c55e", borderRadius: "50%" }}></div>
          <span className="text-xs text-slate-700">50-mile service radius</span>
        </div>
      </div>

      <div ref={mapContainer} className="h-full w-full" />

      {/* Accessibility instructions */}
      <div className="sr-only">Map showing 50-mile service radius around competitor location.</div>
    </div>
  )
}
