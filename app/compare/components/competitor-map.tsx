"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { MapPin, Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CityCards from "./city-cards"
import { getCityImageUrl } from "@/lib/city-images"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

interface Competitor {
  id?: string
  title: string
  slug?: string
  city?: string
  state?: string
  lat?: number
  lng?: number
  category?: string
  latOffset?: number
  lngOffset?: number
  street?: string
  google_maps_url?: string
  phone?: string
  website?: string
  postal_code?: string
  rating?: number
  review_count?: number
  price_range?: string
  services?: string[]
  description?: string
}

interface CompetitorMapProps {
  competitors: any[]
  lawnCareSuggestions?: string[]
}

// Cache for geocoded locations to avoid repeated API calls
const geocodeCache: Record<string, { lat: number; lng: number }> = {}

// No categories to exclude - show all competitors
const EXCLUDED_CATEGORIES: string[] = []

export default function CompetitorMap({ competitors, lawnCareSuggestions = [] }: CompetitorMapProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("map")
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [mapStyle, setMapStyle] = useState("mapbox://styles/mapbox/dark-v11")
  const [showAnimation, setShowAnimation] = useState(false)
  const [currentSuggestionIndex, setCurrentSuggestionIndex] = useState(0)
  const [markersAdded, setMarkersAdded] = useState(false)
  const markersRef = useRef<mapboxgl.Marker[]>([])
  const [pendingGeocode, setPendingGeocode] = useState(0)
  const [geocodeComplete, setGeocodeComplete] = useState(false)
  const popupRef = useRef<mapboxgl.Popup | null>(null)
  const [cityData, setCityData] = useState<any[]>([])
  const mapRef = useRef<HTMLDivElement>(null)

  // Define category colors
  const categoryColors: Record<string, string> = {
    "Robot Mowers": "#22c55e", // Green
    "Lawn Mowing": "#ef4444", // Red
    "Lawn Care": "#3b82f6", // Blue
    Landscaping: "#f59e0b", // Amber
    Garden: "#8b5cf6", // Purple
    Other: "#64748b", // Slate
  }

  // Filter out competitors with excluded categories
  const filteredCompetitors = competitors.filter(
    (competitor) => !EXCLUDED_CATEGORIES.includes(competitor.category || ""),
  )

  // Get default category if not specified
  const getCategory = (competitor: Competitor) => {
    return competitor.category || "Other"
  }

  // Get color for a competitor based on category
  const getCompetitorColor = (competitor: Competitor) => {
    const category = getCategory(competitor)
    return categoryColors[category] || categoryColors["Other"]
  }

  // Rotate through lawn care suggestions
  useEffect(() => {
    if (lawnCareSuggestions.length === 0) return

    const interval = setInterval(() => {
      setCurrentSuggestionIndex((prevIndex) => (prevIndex + 1) % lawnCareSuggestions.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [lawnCareSuggestions])

  // Initialize map
  useEffect(() => {
    if (!mapContainer.current || map.current) return

    // Initialize map with custom style
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: mapStyle,
      center: [-98.5795, 39.8283], // Center of US
      zoom: 3, // Lower zoom level to show entire US
      accessToken: "", // We'll use our proxy API instead of direct token access
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
      projection: "mercator", // Use mercator instead of globe for better performance
    })

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), "top-right")

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), "top-right")

    // Add geolocate control
    map.current.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
      "top-right",
    )

    // Set map loaded state
    map.current.on("load", () => {
      console.log("Map loaded")
      setMapLoaded(true)
    })

    // Clean up on unmount
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
      // Clear any markers
      markersRef.current.forEach((marker) => marker.remove())
      markersRef.current = []
    }
  }, [mapStyle])

  // Group competitors by city and state
  const groupCompetitorsByLocation = (competitors: Competitor[]) => {
    const locationGroups = new Map<
      string,
      {
        competitors: Competitor[]
        lat: number | null
        lng: number | null
        city: string
        state: string
      }
    >()

    competitors.forEach((competitor) => {
      if (!competitor.city || !competitor.state) {
        return // Skip competitors without city/state
      }

      // Normalize city and state names (remove case sensitivity)
      const city = competitor.city.trim()
      const state = competitor.state.trim()

      // Skip unknown locations
      if (city.toLowerCase() === "unknown" || state.toLowerCase() === "unknown") {
        return
      }

      const locationKey = `${city}, ${state}`

      if (!locationGroups.has(locationKey)) {
        locationGroups.set(locationKey, {
          competitors: [competitor],
          lat: competitor.lat || null,
          lng: competitor.lng || null,
          city,
          state,
        })
      } else {
        const group = locationGroups.get(locationKey)!
        group.competitors.push(competitor)

        // Use the first valid coordinates we find
        if ((!group.lat || !group.lng) && competitor.lat && competitor.lng) {
          group.lat = competitor.lat
          group.lng = competitor.lng
        }
      }
    })

    return Array.from(locationGroups.values())
  }

  // Geocode a location using Mapbox API
  const geocodeLocation = async (city: string, state: string): Promise<{ lat: number; lng: number }> => {
    const cacheKey = `${city}, ${state}`.toLowerCase()

    // Check cache first
    if (geocodeCache[cacheKey]) {
      return geocodeCache[cacheKey]
    }

    // Default coordinates (center of US)
    const defaultCoords = { lat: 39.8283, lng: -98.5795 }

    try {
      // Use our proxy endpoint to avoid exposing API key in client
      const response = await fetch(`/api/mapbox-proxy?query=${encodeURIComponent(`${city}, ${state}, USA`)}`)

      if (!response.ok) {
        throw new Error(`Geocoding failed: ${response.statusText}`)
      }

      const data = await response.json()

      if (data.features && data.features.length > 0) {
        const [lng, lat] = data.features[0].center
        const result = { lat, lng }

        // Cache the result
        geocodeCache[cacheKey] = result
        return result
      }

      return defaultCoords
    } catch (error) {
      console.error(`Error geocoding ${city}, ${state}:`, error)
      return defaultCoords
    }
  }

  // Helper function to get coordinates for cities
  const getCityCoordinates = (city?: string, state?: string) => {
    // Default coordinates (center of US)
    const defaultCoords = { lat: 39.8283, lng: -98.5795 }

    if (!city || !state) return defaultCoords

    // Normalize the input
    const normalizedKey = `${city.trim()}, ${state.trim()}`

    // Map of common cities to their coordinates
    const cityCoords: Record<string, { lat: number; lng: number }> = {
      // Original cities
      "richmond, va": { lat: 37.5407, lng: -77.436 },
      "norfolk, va": { lat: 36.8508, lng: -76.2859 },
      "virginia beach, va": { lat: 36.8529, lng: -75.978 },
      "charlottesville, va": { lat: 38.0293, lng: -78.4767 },
      "roanoke, va": { lat: 37.271, lng: -79.9414 },
      "alexandria, va": { lat: 38.8048, lng: -77.0469 },
      "lynchburg, va": { lat: 37.4138, lng: -79.1422 },
      "chesapeake, va": { lat: 36.7682, lng: -76.2875 },
      "newport news, va": { lat: 37.0871, lng: -76.473 },
      "hampton, va": { lat: 37.0299, lng: -76.3452 },
      "new york, ny": { lat: 40.7128, lng: -74.006 },
      "los angeles, ca": { lat: 34.0522, lng: -118.2437 },
      "chicago, il": { lat: 41.8781, lng: -87.6298 },
      "houston, tx": { lat: 29.7604, lng: -95.3698 },
      "phoenix, az": { lat: 33.4484, lng: -112.074 },
      "philadelphia, pa": { lat: 39.9526, lng: -75.1652 },
      "san antonio, tx": { lat: 29.4241, lng: -98.4936 },
      "san diego, ca": { lat: 32.7157, lng: -117.1611 },
      "dallas, tx": { lat: 32.7767, lng: -96.797 },
      "san jose, ca": { lat: 37.3382, lng: -121.8863 },
      "austin, tx": { lat: 30.2672, lng: -97.7431 },
      "denver, co": { lat: 39.7392, lng: -104.9903 },
      "seattle, wa": { lat: 47.6062, lng: -122.3321 },
      "portland, or": { lat: 45.5051, lng: -122.675 },
      "san francisco, ca": { lat: 37.7749, lng: -122.4194 },
      "las vegas, nv": { lat: 36.1699, lng: -115.1398 },
      "salt lake city, ut": { lat: 40.7608, lng: -111.891 },
      "albuquerque, nm": { lat: 35.0844, lng: -106.6504 },
      "minneapolis, mn": { lat: 44.9778, lng: -93.265 },
      "kansas city, mo": { lat: 39.0997, lng: -94.5786 },
      "st. louis, mo": { lat: 38.627, lng: -90.1994 },
      "new orleans, la": { lat: 29.9511, lng: -90.0715 },
      "miami, fl": { lat: 25.7617, lng: -80.1918 },
      "orlando, fl": { lat: 28.5383, lng: -81.3792 },
      "atlanta, ga": { lat: 33.749, lng: -84.388 },
      "nashville, tn": { lat: 36.1627, lng: -86.7816 },
      "detroit, mi": { lat: 42.3314, lng: -83.0458 },
      "boston, ma": { lat: 42.3601, lng: -71.0589 },
      "pittsburgh, pa": { lat: 40.4406, lng: -79.9959 },
      "san jose, california": { lat: 37.3382, lng: -121.8863 },
      "gretna, louisiana": { lat: 29.9146, lng: -90.0539 },
      "watertown, massachusetts": { lat: 42.3709, lng: -71.1828 },
      "irvington, new jersey": { lat: 40.7248, lng: -74.2292 },
      "clarksville, indiana": { lat: 38.2973, lng: -85.7591 },
      "golden, colorado": { lat: 39.7555, lng: -105.2211 },
      "bayonne, new jersey": { lat: 40.6687, lng: -74.1143 },
      "pantego, texas": { lat: 32.7154, lng: -97.1547 },
      "irvine, california": { lat: 33.6846, lng: -117.8265 },
      "fremont, california": { lat: 37.5485, lng: -121.9886 },
      "chandler, arizona": { lat: 33.3062, lng: -111.8413 },
      "gilbert, arizona": { lat: 33.3528, lng: -111.789 },
      "scottsdale, arizona": { lat: 33.4942, lng: -111.9261 },
      "plano, texas": { lat: 33.0198, lng: -96.6989 },
      "anchorage, alaska": { lat: 61.2181, lng: -149.9003 },
      "chesapeake, virginia": { lat: 36.7682, lng: -76.2875 },
      "chula vista, california": { lat: 32.6401, lng: -117.0842 },
      "virginia beach, virginia": { lat: 36.8529, lng: -75.978 },
      "lakewood, ohio": { lat: 41.4824, lng: -81.7983 },
      "tucson, arizona": { lat: 32.2226, lng: -110.9747 },
      "honolulu, hawaii": { lat: 21.3069, lng: -157.8583 },
      "pembroke pines, florida": { lat: 26.0128, lng: -80.3377 },
      "sewell, new jersey": { lat: 39.7737, lng: -75.1462 },
      "columbus, ohio": { lat: 39.9612, lng: -82.9988 },
      "indianapolis, indiana": { lat: 39.7684, lng: -86.1581 },
      "charlotte, north carolina": { lat: 35.2271, lng: -80.8431 },
      "memphis, tennessee": { lat: 35.1495, lng: -90.049 },
      "baltimore, maryland": { lat: 39.2904, lng: -76.6122 },
      "milwaukee, wisconsin": { lat: 43.0389, lng: -87.9065 },
      "sacramento, california": { lat: 38.5816, lng: -121.4944 },
      "kansas city, kansas": { lat: 39.1141, lng: -94.6275 },
      "omaha, nebraska": { lat: 41.2565, lng: -95.9345 },
      "raleigh, north carolina": { lat: 35.7796, lng: -78.6382 },
      "tampa, florida": { lat: 27.9506, lng: -82.4572 },
      "cleveland, ohio": { lat: 41.4993, lng: -81.6944 },
      "tulsa, oklahoma": { lat: 36.154, lng: -95.9928 },
      "oakland, california": { lat: 37.8044, lng: -122.2712 },
      "cincinnati, ohio": { lat: 39.1031, lng: -84.512 },
      // New cities from the latest console logs
      "ludlow, kentucky": { lat: 39.0931, lng: -84.5452 },
      "windsor, ontario": { lat: 42.3149, lng: -83.0364 },
      "fort worth, texas": { lat: 32.7555, lng: -97.3308 },
      "north kansas city, missouri": { lat: 39.1396, lng: -94.5786 },
      "arlington, virginia": { lat: 38.8799, lng: -77.1067 },
      "west roxbury, massachusetts": { lat: 42.2798, lng: -71.1411 },
      "lexington, kentucky": { lat: 38.0406, lng: -84.5037 },
      "bakersfield, california": { lat: 35.3733, lng: -119.0187 },
      "portsmouth, virginia": { lat: 36.8354, lng: -76.2983 },
      "broomall, pennsylvania": { lat: 39.9715, lng: -75.3538 },
      "buffalo, new york": { lat: 42.8864, lng: -78.8784 },
      "santa ana, california": { lat: 33.7455, lng: -117.8677 },
      "anaheim, california": { lat: 33.8366, lng: -117.9143 },
      "jacksonville, florida": { lat: 30.3322, lng: -81.6557 },
      "oklahoma city, oklahoma": { lat: 35.4676, lng: -97.5164 },
      "stockton, california": { lat: 37.9577, lng: -121.2908 },
      "linden, new jersey": { lat: 40.6221, lng: -74.2445 },
      "city of orange, new jersey": { lat: 40.7684, lng: -74.2354 },
      "winston-salem, north carolina": { lat: 36.0999, lng: -80.244 },
      "riverside, california": { lat: 33.9806, lng: -117.3755 },
      "boise, idaho": { lat: 43.615, lng: -116.2023 },
      "lincoln, nebraska": { lat: 40.8136, lng: -96.7026 },
      "toledo, ohio": { lat: 41.6528, lng: -83.5379 },
      "spokane valley, washington": { lat: 47.6732, lng: -117.2393 },
      "winthrop, massachusetts": { lat: 42.3792, lng: -70.9819 },
      "wichita, kansas": { lat: 37.6872, lng: -97.3301 },
      "fresno, california": { lat: 36.7378, lng: -119.7871 },
      "manchaca, texas": { lat: 30.1369, lng: -97.8411 },
      "washington, district of columbia": { lat: 38.9072, lng: -77.0369 },
      "beaverton, oregon": { lat: 45.4871, lng: -122.8037 },
      "staten island, new york": { lat: 40.5795, lng: -74.1502 },
      "little canada, minnesota": { lat: 45.0261, lng: -93.0885 },
      "louisville, kentucky": { lat: 38.2527, lng: -85.7585 },
      "henrico, virginia": { lat: 37.5407, lng: -77.436 },
      "baton rouge, louisiana": { lat: 30.4515, lng: -91.1871 },
      "durham, north carolina": { lat: 35.994, lng: -78.8986 },
      "medley, florida": { lat: 25.8898, lng: -80.3267 },
      "lubbock, texas": { lat: 33.5779, lng: -101.8552 },
      "henderson, nevada": { lat: 36.0395, lng: -114.9817 },
      "hialeah, florida": { lat: 25.8575, lng: -80.2781 },
      "chelsea, massachusetts": { lat: 42.3917, lng: -71.0328 },
      "fort wayne, indiana": { lat: 41.0793, lng: -85.1394 },
      "north las vegas, nevada": { lat: 36.1989, lng: -115.1175 },
      "greensboro, north carolina": { lat: 36.0726, lng: -79.792 },
      "lyndhurst, new jersey": { lat: 40.8126, lng: -74.1224 },
      "rowlett, texas": { lat: 32.9029, lng: -96.5638 },
      "arlington, texas": { lat: 32.7357, lng: -97.1081 },
      "jersey city, new jersey": { lat: 40.7178, lng: -74.0431 },
      "corpus christi, texas": { lat: 27.8006, lng: -97.3964 },
      "east palo alto, california": { lat: 37.4688, lng: -122.1411 },
      "everett, massachusetts": { lat: 42.4084, lng: -71.0537 },
      "laredo, texas": { lat: 27.5306, lng: -99.4803 },
      "grove city, ohio": { lat: 39.8814, lng: -83.0929 },
      "wilmington, california": { lat: 33.7866, lng: -118.2987 },
      "queen creek, arizona": { lat: 33.2487, lng: -111.6343 },
      "irving, texas": { lat: 32.814, lng: -96.9489 },
      "nicholasville, kentucky": { lat: 37.8807, lng: -84.573 },
      "covington, kentucky": { lat: 39.0837, lng: -84.5086 },
      "garland, texas": { lat: 32.9126, lng: -96.6389 },
      "reno, nevada": { lat: 39.5296, lng: -119.8138 },
      "white plains, new york": { lat: 41.034, lng: -73.7629 },
      "garden city, idaho": { lat: 43.6254, lng: -116.2946 },
      "newark, new jersey": { lat: 40.7357, lng: -74.1724 },
      "falls church, virginia": { lat: 38.8847, lng: -77.1711 },
      "richardson, texas": { lat: 32.9483, lng: -96.7299 },
      "amherst, new york": { lat: 42.9764, lng: -78.7986 },
      "west sacramento, california": { lat: 38.5805, lng: -121.5302 },
      "costa mesa, california": { lat: 33.6411, lng: -117.9188 },
      "union, new jersey": { lat: 40.6976, lng: -74.2632 },
      "east st louis, illinois": { lat: 38.6247, lng: -90.15 },
      "morrisville, north carolina": { lat: 35.8235, lng: -78.8256 },
      "shoreline, washington": { lat: 47.7557, lng: -122.3415 },
      "mcfarland, wisconsin": { lat: 43.0169, lng: -89.2901 },
      "tustin, california": { lat: 33.7458, lng: -117.8261 },
      "council bluffs, iowa": { lat: 41.2619, lng: -95.8608 },
      "colton, california": { lat: 34.0739, lng: -117.3136 },
      "glendale, arizona": { lat: 33.5387, lng: -112.186 },
    }

    // Try to find the city in our coordinates map (case insensitive)
    for (const [key, coords] of Object.entries(cityCoords)) {
      if (normalizedKey.toLowerCase() === key.toLowerCase()) {
        return coords
      }
    }

    // If we can't find an exact match, try matching just the city and state separately
    for (const [key, coords] of Object.entries(cityCoords)) {
      const [cityName, stateAbbr] = key.split(", ")
      if (
        city.toLowerCase() === cityName.toLowerCase() &&
        (state.toLowerCase() === stateAbbr.toLowerCase() || state.toLowerCase().startsWith(stateAbbr.toLowerCase()))
      ) {
        return coords
      }
    }

    // Try matching just the city name as a fallback
    for (const [key, coords] of Object.entries(cityCoords)) {
      const [cityName] = key.split(", ")
      if (city.toLowerCase() === cityName.toLowerCase()) {
        return coords
      }
    }

    // If we still don't have coordinates, check the geocode cache
    const cacheKey = `${city}, ${state}`.toLowerCase()
    if (geocodeCache[cacheKey]) {
      return geocodeCache[cacheKey]
    }

    // Return default coordinates if all else fails
    return defaultCoords
  }

  // Add markers directly to the map instead of using GeoJSON
  useEffect(() => {
    if (!map.current || !mapLoaded || filteredCompetitors.length === 0) return

    console.log(`Processing ${filteredCompetitors.length} competitors for map display`)

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove())
    markersRef.current = []

    // Group competitors by location
    const locationGroups = groupCompetitorsByLocation(filteredCompetitors)
    console.log(`Grouped competitors into ${locationGroups.length} locations`)

    // Track locations that need geocoding
    const locationsToGeocode: { city: string; state: string; index: number }[] = []
    const markers: (mapboxgl.Marker | null)[] = new Array(locationGroups.length).fill(null)

    // First pass: add markers for locations with known coordinates
    locationGroups.forEach((group, index) => {
      // Get coordinates for this location
      let lat = group.lat
      let lng = group.lng

      // If we don't have coordinates, try to get them from the city/state
      if (!lat || !lng) {
        const cityCoords = getCityCoordinates(group.city, group.state)

        // Only use city coordinates if they're not the default (center of US)
        if (cityCoords.lat !== 39.8283 || cityCoords.lng !== -98.5795) {
          lat = cityCoords.lat
          lng = cityCoords.lng
        } else {
          // Queue this location for geocoding
          locationsToGeocode.push({ city: group.city, state: group.state, index })
          return
        }
      }

      // Create and add marker
      markers[index] = createMarker(group, lat, lng)
    })

    // Filter out null markers and add to map
    const validMarkers = markers.filter(Boolean) as mapboxgl.Marker[]
    markersRef.current = validMarkers

    // If we have markers, fit the map to show them
    if (validMarkers.length > 0) {
      const bounds = new mapboxgl.LngLatBounds()
      validMarkers.forEach((marker) => {
        bounds.extend(marker.getLngLat())
      })

      map.current.fitBounds(bounds, {
        padding: { top: 50, bottom: 50, left: 50, right: 50 },
        maxZoom: 5,
      })
    }

    // Add custom CSS for dark popups
    const style = document.createElement("style")
    style.innerHTML = `
      .mapboxgl-popup-content {
        background-color: white !important;
        color: #111827 !important;
        border-radius: 8px !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        padding: 0 !important;
        overflow: hidden !important;
        max-width: 320px !important;
      }
      .mapboxgl-popup-tip {
        border-top-color: white !important;
        border-bottom-color: white !important;
      }
      .city-popup {
        max-height: 400px;
        overflow-y: auto;
        scrollbar-width: thin;
      }
      .city-popup::-webkit-scrollbar {
        width: 6px;
      }
      .city-popup::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      .city-popup::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px;
      }
      .city-popup::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      .competitor-card {
        transition: all 0.2s ease;
      }
    `
    document.head.appendChild(style)

    setMarkersAdded(true)
    console.log(`Added ${validMarkers.length} location markers to the map`)

    // Second pass: geocode locations with unknown coordinates
    if (locationsToGeocode.length > 0) {
      console.log(`Need to geocode ${locationsToGeocode.length} locations`)
      setPendingGeocode(locationsToGeocode.length)

      // Process geocoding in batches to avoid rate limits
      const batchSize = 5
      const processBatch = async (batch: typeof locationsToGeocode) => {
        const promises = batch.map(async ({ city, state, index }) => {
          try {
            // Use our proxy endpoint to avoid exposing API key in client
            const response = await fetch(`/api/mapbox-proxy?query=${encodeURIComponent(`${city}, ${state}, USA`)}`)

            if (!response.ok) {
              throw new Error(`Geocoding failed: ${response.statusText}`)
            }

            const data = await response.json()

            if (data.features && data.features.length > 0) {
              const [lng, lat] = data.features[0].center
              const group = locationGroups[index]

              // Ensure coords is declared before use
              const coords = { lat, lng }

              if (coords.lat !== 39.8283 || coords.lng !== -98.5795) {
                const marker = createMarker(group, coords.lat, coords.lng)
                markersRef.current.push(marker)

                // Update bounds to include new marker
                if (map.current) {
                  const bounds = new mapboxgl.LngLatBounds()
                  markersRef.current.forEach((m) => bounds.extend(m.getLngLat()))
                  map.current.fitBounds(bounds, {
                    padding: { top: 50, bottom: 50, left: 50, right: 50 },
                    maxZoom: 5,
                  })
                }
              } else {
                console.log(`Geocoding failed for ${city}, ${state}`)
              }
            } else {
              console.log(`Geocoding failed for ${city}, ${state}`)
            }
          } catch (error) {
            console.error(`Error processing location ${city}, ${state}:`, error)
          }

          // Update pending count
          setPendingGeocode((prev) => Math.max(0, prev - 1))
        })

        await Promise.all(promises)
      }

      // Process in batches
      const processBatches = async () => {
        for (let i = 0; i < locationsToGeocode.length; i += batchSize) {
          const batch = locationsToGeocode.slice(i, i + batchSize)
          await processBatch(batch)

          // Small delay between batches to avoid rate limits
          if (i + batchSize < locationsToGeocode.length) {
            await new Promise((resolve) => setTimeout(resolve, 500))
          }
        }
        setGeocodeComplete(true)
      }

      processBatches()
    } else {
      setGeocodeComplete(true)
    }
  }, [filteredCompetitors, mapLoaded])

  // Function to fit all markers in the view
  const fitAllMarkersInView = () => {
    if (!map.current || markersRef.current.length === 0) return

    const bounds = new mapboxgl.LngLatBounds()
    markersRef.current.forEach((marker) => {
      bounds.extend(marker.getLngLat())
    })

    map.current.fitBounds(bounds, {
      padding: { top: 50, bottom: 50, left: 50, right: 50 },
      maxZoom: 5,
    })
  }

  // Call the function when geocoding is complete
  useEffect(() => {
    if (geocodeComplete && markersRef.current.length > 0) {
      fitAllMarkersInView()
    }
  }, [geocodeComplete])

  // Helper function to create a marker
  const createMarker = (
    group: { competitors: Competitor[]; city: string; state: string },
    lat: number,
    lng: number,
  ) => {
    const count = group.competitors.length
    const size = Math.min(40, Math.max(15, 15 + count * 2))

    // Determine the most common category in this group
    const categoryCount: Record<string, number> = {}
    group.competitors.forEach((comp) => {
      const category = getCategory(comp)
      categoryCount[category] = (categoryCount[category] || 0) + 1
    })

    // Find the most common category
    let dominantCategory = "Other"
    let maxCount = 0
    for (const [category, count] of Object.entries(categoryCount)) {
      if (count > maxCount) {
        maxCount = count
        dominantCategory = category
      }
    }

    // Get color based on the dominant category
    const markerColor = categoryColors[dominantCategory] || categoryColors["Other"]

    // Create a custom marker element
    const el = document.createElement("div")
    el.className = "custom-marker"
    el.style.width = `${size}px`
    el.style.height = `${size}px`
    el.style.borderRadius = "50%"
    el.style.backgroundColor = markerColor // Use category color
    el.style.border = "2px solid white"
    el.style.cursor = "pointer"
    el.style.display = "flex"
    el.style.alignItems = "center"
    el.style.justifyContent = "center"

    // Add count to large markers
    if (count > 1) {
      el.style.fontSize = `${Math.min(16, 10 + count / 5)}px`
      el.style.fontWeight = "bold"
      el.style.color = "white"
      el.innerText = count.toString()
    }

    // Add a tooltip
    el.title = `${group.city}, ${group.state} - ${count} lawn care services`

    // Create and add the marker
    const marker = new mapboxgl.Marker(el).setLngLat([lng, lat]).addTo(map.current!)

    // Add popup on click with enhanced design
    marker.getElement().addEventListener("click", () => {
      // Close any existing popup
      if (popupRef.current) {
        popupRef.current.remove()
      }

      // Sort competitors by rating (if available)
      const sortedCompetitors = [...group.competitors].sort((a, b) => {
        // Sort by rating first (if available)
        if (a.rating && b.rating) return b.rating - a.rating
        if (a.rating) return -1
        if (b.rating) return 1

        // Then by review count (if available)
        if (a.review_count && b.review_count) return b.review_count - a.review_count
        if (a.review_count) return -1
        if (b.review_count) return 1

        // Finally by name
        return a.title.localeCompare(b.title)
      })

      // Get top competitors (limit to 5 for performance)
      const topCompetitors = sortedCompetitors.slice(0, 5)

      // Calculate average rating
      const ratings = group.competitors.filter((c) => c.rating).map((c) => c.rating as number)
      const avgRating =
        ratings.length > 0 ? (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1) : null

      // Create HTML for the popup
      const popupContent = `
        <div class="city-popup">
          <!-- Header -->
          <div class="bg-green-600 text-white p-3">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="font-bold text-lg">${group.city}, ${group.state}</h3>
                <p class="text-sm text-green-100">${count} lawn care services available</p>
              </div>
              ${
                avgRating
                  ? `
                <div class="flex items-center bg-green-700 px-2 py-1 rounded">
                  <span class="text-yellow-300 mr-1">★</span>
                  <span class="font-bold">${avgRating}</span>
                </div>
              `
                  : ""
              }
            </div>
          </div>
          
          <!-- Services Summary -->
          <div class="p-3 border-b border-gray-200 bg-gray-50">
            <div class="flex flex-wrap gap-1">
              ${Object.entries(categoryColors)
                .slice(0, 4)
                .map(
                  ([category, color]) => `
                <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium" 
                      style="background-color: ${color}20; color: ${color}">
                  ${category}
                </span>
              `,
                )
                .join("")}
            </div>
          </div>
          
          <!-- Top Competitors -->
          <div class="divide-y divide-gray-100">
            ${topCompetitors
              .map(
                (comp) => `
              <div class="competitor-card p-3 hover:bg-gray-50">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-medium text-gray-900">${comp.title}</h4>
                    ${comp.category ? `<p class="text-xs text-gray-500">${comp.category}</p>` : ""}
                  </div>
                  ${
                    comp.rating
                      ? `
                    <div class="flex items-center">
                      <span class="text-yellow-500 mr-1">★</span>
                      <span class="text-sm font-medium">${comp.rating}</span>
                      ${comp.review_count ? `<span class="text-xs text-gray-500 ml-1">(${comp.review_count})</span>` : ""}
                    </div>
                  `
                      : ""
                  }
                </div>
                
                <div class="mt-2 flex flex-wrap gap-2">
                  ${
                    comp.phone
                      ? `
                    <a href="tel:${comp.phone}" class="inline-flex items-center text-xs text-blue-600 hover:text-blue-800">
                      <svg class="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      Call
                    </a>
                  `
                      : ""
                  }
                </div>
              </div>
            `,
              )
              .join("")}
          </div>
          
          <!-- Footer -->
          <div class="p-3 bg-gray-50 border-t border-gray-200">
            <div class="flex justify-between items-center">
              <p class="text-xs text-gray-500">
                ${count > topCompetitors.length ? `Showing top ${topCompetitors.length} of ${count} services` : `Showing all ${count} services`}
              </p>
              <a href="/compare?city=${encodeURIComponent(group.city)}&state=${encodeURIComponent(group.state)}" 
                 class="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-800">
                View all
                <svg class="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      `

      // Create and show the popup
      popupRef.current = new mapboxgl.Popup({
        offset: 25,
        className: "city-popup-container",
        maxWidth: "320px",
      })
        .setLngLat([lng, lat])
        .setHTML(popupContent)
        .addTo(map.current!)

      // Add event listener to close popup reference when closed
      popupRef.current.on("close", () => {
        popupRef.current = null
      })
    })

    return marker
  }

  // Get unique categories from competitors
  const categories = Array.from(new Set(filteredCompetitors.map((competitor) => getCategory(competitor)))).sort()

  useEffect(() => {
    // Extract unique cities from competitors
    const cities = new Map()

    competitors.forEach((competitor) => {
      if (competitor.city && competitor.state) {
        const key = `${competitor.city}, ${competitor.state}`
        if (!cities.has(key)) {
          cities.set(key, {
            city: competitor.city,
            state: competitor.state,
            count: 1,
            lat: competitor.lat,
            lng: competitor.lng,
          })
        } else {
          const city = cities.get(key)
          city.count++
          cities.set(key, city)
        }
      }
    })

    // Convert to array and sort by count
    const sortedCities = Array.from(cities.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 50) // Limit to top 50 cities

    setCityData(sortedCities)
  }, [competitors])

  // Simulate map loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Featured cities for the grid view
  const featuredCities = [
    { city: "Dallas", state: "Texas", count: 42 },
    { city: "Portland", state: "Oregon", count: 28 },
    { city: "Austin", state: "Texas", count: 35 },
    { city: "Seattle", state: "Washington", count: 31 },
    { city: "Chicago", state: "Illinois", count: 47 },
    { city: "New York", state: "New York", count: 63 },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Lawn Care Services Near You</h2>
          <p className="text-lg text-gray-600 mb-8">
            Compare traditional lawn services with our robot mowers in cities across the country.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <Input
              type="text"
              placeholder="Search by city or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>

          <TabsContent value="map" className="mt-4">
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <div className="relative">
                  {!mapLoaded ? (
                    <div className="h-[600px] bg-gray-200 flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                        <p className="text-gray-600">Loading map of lawn care services...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-[600px] bg-gray-100 relative" ref={mapRef}>
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/70"></div>
                      <Image
                        src="/usa-map-with-cities.png"
                        alt="Map of lawn care services"
                        fill
                        className="object-cover"
                      />

                      {/* City markers */}
                      {cityData.slice(0, 15).map((city, index) => (
                        <div
                          key={index}
                          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                          style={{
                            left: `${30 + Math.random() * 40}%`,
                            top: `${20 + Math.random() * 60}%`,
                          }}
                        >
                          <div className="relative group">
                            <div className="flex flex-col items-center">
                              <div className="bg-green-500 text-white p-2 rounded-full shadow-lg">
                                <MapPin size={16} />
                              </div>
                              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <div className="bg-white px-3 py-1 rounded shadow-lg text-sm whitespace-nowrap">
                                  {city.city}, {city.state} ({city.count})
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2">Explore Lawn Care Services</h3>
                        <p className="mb-4">
                          We found {competitors.length} lawn care services in {cityData.length} cities.
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {cityData.slice(0, 5).map((city, index) => (
                            <Link
                              key={index}
                              href={`/robots?city=${encodeURIComponent(city.city)}&state=${encodeURIComponent(city.state)}`}
                              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm transition-colors"
                            >
                              {city.city}, {city.state}
                            </Link>
                          ))}
                          <span className="bg-white/10 px-3 py-1 rounded-full text-sm">
                            +{cityData.length - 5} more
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredCities.slice(0, 3).map((city, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-40">
                    <Image
                      src={getCityImageUrl(city.city, city.state, "medium") || "/placeholder.svg"}
                      alt={`${city.city}, ${city.state}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="font-bold">
                        {city.city}, {city.state}
                      </h3>
                      <p className="text-sm">{city.count} lawn services</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="grid" className="mt-4">
            <CityCards cityData={cityData.length > 0 ? cityData : featuredCities} />
          </TabsContent>
        </Tabs>

        {/* Popular searches */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Popular Searches</h3>
          <div className="flex flex-wrap gap-2">
            {lawnCareSuggestions.slice(0, 15).map((suggestion, index) => (
              <Link
                key={index}
                href={`/search?q=${encodeURIComponent(suggestion)}`}
                className="bg-white hover:bg-gray-50 border border-gray-200 px-4 py-2 rounded-full text-sm transition-colors"
              >
                {suggestion}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
