"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getCityImageUrl } from "@/lib/city-images"

interface CityData {
  city: string
  state: string
  count: number
  lat?: number
  lng?: number
}

interface CityCardsProps {
  cityData: CityData[]
}

export default function CityCards({ cityData }: CityCardsProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCities, setFilteredCities] = useState<CityData[]>(cityData)

  // Log the received props on component mount
  useEffect(() => {
    console.log("CityCards received cityData:", cityData)
  }, [cityData])

  const itemsPerPage = 9
  const totalPages = Math.ceil(filteredCities.length / itemsPerPage)

  // Filter cities based on search term
  useEffect(() => {
    const filtered = cityData.filter(
      (city) =>
        city.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.state.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredCities(filtered)
    setCurrentPage(1) // Reset to first page when search changes
  }, [searchTerm, cityData])

  // Get current page items
  const currentCities = filteredCities.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Handle page navigation
  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  // Get city image based on name (for visual variety)
  const getCityImage = (city: string, state: string) => {
    // Create a consistent key for the city
    const cityKey = `${city}-${state}`.toLowerCase().replace(/\s+/g, "-")

    // Map of known cities to their image URLs
    const cityImages: Record<string, string> = {
      "dallas-texas": "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?q=80&w=800&auto=format&fit=crop",
      "portland-oregon": "https://images.unsplash.com/photo-1572206912757-5a78ff4d79be?q=80&w=800&auto=format&fit=crop",
      "austin-texas": "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=800&auto=format&fit=crop",
      "seattle-washington":
        "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=800&auto=format&fit=crop",
      "chicago-illinois":
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
      "new-york-new-york":
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
      "los-angeles-california":
        "https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=800&auto=format&fit=crop",
      "san-francisco-california":
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop",
      "denver-colorado": "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?q=80&w=800&auto=format&fit=crop",
      "phoenix-arizona": "https://images.unsplash.com/photo-1558059340-5a4d30ad2a1a?q=80&w=800&auto=format&fit=crop",
      "fremont-california":
        "https://images.unsplash.com/photo-1569416078500-3857b00616f8?q=80&w=800&auto=format&fit=crop",
      "san-jose-california":
        "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?q=80&w=800&auto=format&fit=crop",
      "chandler-arizona":
        "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?q=80&w=800&auto=format&fit=crop",
      "gilbert-arizona": "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=800&auto=format&fit=crop",
      "scottsdale-arizona":
        "https://images.unsplash.com/photo-1571144501473-8f24e8d1da01?q=80&w=800&auto=format&fit=crop",
      "plano-texas": "https://images.unsplash.com/photo-1598881034666-9b3e9072a58e?q=80&w=800&auto=format&fit=crop",
    }

    // Return the specific image if available
    if (cityImages[cityKey]) {
      return cityImages[cityKey]
    }

    // Otherwise, use a placeholder with the city name
    return `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(city)}%20${encodeURIComponent(state)}%20city`
  }

  // Get message based on number of options
  const getOptionsMessage = (count: number) => {
    if (count > 20) return "Many options available"
    if (count > 10) return "Several options available"
    if (count > 5) return "Some options available"
    return "Limited options available"
  }

  return (
    <div>
      {/* Debug info */}
      {process.env.NODE_ENV !== "production" && (
        <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
          <p className="font-mono text-sm">Total cities: {cityData.length}</p>
          <p className="font-mono text-sm">Filtered cities: {filteredCities.length}</p>
          <p className="font-mono text-sm">
            Current page: {currentPage} of {totalPages}
          </p>
        </div>
      )}

      {/* Search bar */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search by city or state..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-6"
          />
        </div>
      </div>

      {/* City cards grid */}
      {currentCities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCities.map((city, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={getCityImageUrl(city.city, city.state, "medium") || "/placeholder.svg"}
                  alt={`${city.city}, ${city.state}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{city.city}</h3>
                  <p className="text-sm">{city.state}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-600">{city.count}</span>
                    <span className="text-gray-600 ml-2">lawn services</span>
                  </div>
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    We Beat Them All
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  The {city.count} lawn services in {city.city} can't compete with our robot mowers.
                </p>
                <Link href={`/compare?city=${encodeURIComponent(city.city)}&state=${encodeURIComponent(city.state)}`}>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Get Your Robot Mower</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-xl text-gray-500">No cities found matching your search.</p>
          <p className="text-gray-400 mt-2">Try a different search term or browse all cities.</p>
          <Button variant="outline" className="mt-4" onClick={() => setSearchTerm("")}>
            Show All Cities
          </Button>
        </div>
      )}

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-8">
          <Button variant="outline" size="sm" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex space-x-1">
            {/* First page */}
            {currentPage > 2 && (
              <Button variant={currentPage === 1 ? "default" : "outline"} size="sm" onClick={() => goToPage(1)}>
                1
              </Button>
            )}

            {/* Ellipsis if needed */}
            {currentPage > 3 && <span className="flex items-center justify-center px-3 py-2">...</span>}

            {/* Page before current */}
            {currentPage > 1 && (
              <Button variant="outline" size="sm" onClick={() => goToPage(currentPage - 1)}>
                {currentPage - 1}
              </Button>
            )}

            {/* Current page */}
            <Button variant="default" size="sm">
              {currentPage}
            </Button>

            {/* Page after current */}
            {currentPage < totalPages && (
              <Button variant="outline" size="sm" onClick={() => goToPage(currentPage + 1)}>
                {currentPage + 1}
              </Button>
            )}

            {/* Ellipsis if needed */}
            {currentPage < totalPages - 2 && <span className="flex items-center justify-center px-3 py-2">...</span>}

            {/* Last page */}
            {currentPage < totalPages - 1 && (
              <Button
                variant={currentPage === totalPages ? "default" : "outline"}
                size="sm"
                onClick={() => goToPage(totalPages)}
              >
                {totalPages}
              </Button>
            )}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}

      {/* Page indicator */}
      {totalPages > 1 && (
        <p className="text-center text-sm text-gray-500 mt-4">
          Page {currentPage} of {totalPages} • Showing {currentCities.length} of {filteredCities.length} cities
        </p>
      )}
    </div>
  )
}
