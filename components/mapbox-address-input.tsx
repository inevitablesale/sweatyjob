"use client"

import { useState, useEffect, useRef } from "react"
import { Search, MapPin, Loader2 } from "lucide-react"

interface MapboxAddressInputProps {
  onAddressSelect: (
    address: string,
    coordinates: { lat: number; lng: number },
    city: string,
    state: string,
    zipCode: string,
  ) => void
}

export function MapboxAddressInput({ onAddressSelect }: MapboxAddressInputProps) {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const searchTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!query) return

    // Clear previous timeout
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
    }

    // Set a new timeout to debounce the search
    searchTimeout.current = setTimeout(async () => {
      setIsLoading(true)
      setError(null)

      try {
        // Use our secure proxy endpoint instead of directly calling Mapbox
        const encodedQuery = encodeURIComponent(query)
        const proxyParams = encodeURIComponent(`country=us&types=address&limit=5&proximity=-77.436,37.5407`)

        const response = await fetch(
          `/api/mapbox-proxy?endpoint=geocoding/v5/mapbox.places/${encodedQuery}.json&query=${proxyParams}`,
        )

        if (!response.ok) {
          throw new Error(`Geocoding search failed: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()
        setResults(data.features || [])
      } catch (error) {
        console.error("Error searching for address:", error)
        setError("Failed to search for address. Please try again.")
      } finally {
        setIsLoading(false)
      }
    }, 500)

    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current)
      }
    }
  }, [query])

  const handleAddressSelect = (result: any) => {
    const { place_name, center } = result
    const coordinates = { lat: center[1], lng: center[0] }

    // Extract city, state, and zip from context
    let city = ""
    let state = ""
    let zipCode = ""

    result.context?.forEach((context: any) => {
      if (context.id.startsWith("place")) {
        city = context.text
      } else if (context.id.startsWith("region")) {
        state = context.text
      } else if (context.id.startsWith("postcode")) {
        zipCode = context.text
      }
    })

    onAddressSelect(place_name, coordinates, city, state, zipCode)
    setResults([])
    setQuery("")
  }

  return (
    <div className="relative">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your address"
          className="w-full pl-10 pr-4 py-3 bg-night-700 border border-night-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sweat-500"
        />
        {isLoading && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
          </div>
        )}
      </div>

      {error && <div className="mt-2 text-red-500 text-sm">{error}</div>}

      {results.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-night-800 border border-night-700 rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1">
            {results.map((result) => (
              <li
                key={result.id}
                className="px-4 py-2 hover:bg-night-700 cursor-pointer flex items-start"
                onClick={() => handleAddressSelect(result)}
              >
                <MapPin className="h-5 w-5 text-sweat-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{result.place_name}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
