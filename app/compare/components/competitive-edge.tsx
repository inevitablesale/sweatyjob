"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MapPin, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"

interface CityData {
  name: string
  state: string
  count: number
}

interface CompetitiveEdgeProps {
  cities: CityData[]
}

export default function CompetitiveEdge({ cities = [] }: CompetitiveEdgeProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [visibleCities, setVisibleCities] = useState(6)

  // Filter cities based on search
  const filteredCities = cities.filter(
    (city) =>
      city.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      city.state?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Show more cities
  const loadMore = () => {
    setVisibleCities((prev) => prev + 6)
  }

  // Get city image
  const getCityImage = (city: string, state: string) => {
    return `/placeholder.svg?height=200&width=300&query=aerial view ${city} ${state}`
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="text-green-500">DOMINATE</span> YOUR LOCAL COMPETITION
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find lawn care options in your city and discover why our AI robot mowers CRUSH the competition.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative max-w-md mx-auto mb-12">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            type="text"
            placeholder="Search your city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 py-6 bg-gray-800 border-gray-700 text-white"
          />
        </div>

        {/* City grid */}
        {filteredCities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredCities.slice(0, visibleCities).map((city, index) => (
              <div
                key={`${city.name}-${city.state}-${index}`}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-green-900/30 transition-all hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={getCityImage(city.name, city.state) || "/placeholder.svg"}
                    alt={`${city.name}, ${city.state}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center mb-1">
                      <MapPin className="h-5 w-5 text-green-500 mr-1" />
                      <span className="text-lg font-bold">
                        {city.name}, {city.state}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">{city.count || "Multiple"} competitors</span>
                      <span className="bg-green-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        WE BEAT THEM ALL
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-sm text-gray-300 mb-4">
                    {city.count > 15
                      ? `${city.name} has ${city.count} lawn services, but NONE offer daily mowing with AI robots.`
                      : `The ${city.count || "multiple"} lawn services in ${city.name} can't compete with our robot mowers.`}
                  </p>

                  <a
                    href={`/book?city=${encodeURIComponent(city.name)}&state=${encodeURIComponent(city.state)}`}
                    className="inline-flex items-center text-green-500 hover:text-green-400 font-bold"
                  >
                    GET YOUR ROBOT MOWER <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-800 rounded-xl">
            <p className="text-2xl font-bold text-gray-300">No cities found matching your search.</p>
            <p className="text-gray-400 mt-2">Try another search term or browse our available cities.</p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2 rounded-lg"
            >
              SHOW ALL CITIES
            </button>
          </div>
        )}

        {/* Load more button */}
        {filteredCities.length > visibleCities && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold px-8 py-3 rounded-lg inline-flex items-center"
            >
              LOAD MORE CITIES <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
