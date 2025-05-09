"use client"
import Link from "next/link"
import { MapPin, Phone, Globe, Star, ChevronRight, Clock, Calendar, Scissors } from "lucide-react"

interface Competitor {
  id?: string
  title: string
  slug?: string
  city?: string
  state?: string
  lat?: number
  lng?: number
  street?: string
  category?: string
  google_maps_url?: string
  phone?: string
  website?: string
  postal_code?: string
  rating?: number
  review_count?: number
  price_range?: string
  services?: string[]
  description?: string
  hours?: Record<string, string>
  founded?: string
}

interface CityDetailViewProps {
  city: string
  state: string
  competitors: Competitor[]
  onClose: () => void
}

export default function CityDetailView({ city, state, competitors, onClose }: CityDetailViewProps) {
  // Sort competitors by rating (if available)
  const sortedCompetitors = [...competitors].sort((a, b) => {
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

  // Calculate average rating
  const ratings = competitors.filter((c) => c.rating).map((c) => c.rating as number)
  const avgRating =
    ratings.length > 0 ? (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1) : null

  // Get service categories
  const categories = Array.from(new Set(competitors.map((c) => c.category || "Other")))

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-2xl w-full">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-green-200" aria-label="Close">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-start">
          <MapPin className="h-6 w-6 mr-2 flex-shrink-0 mt-1" />
          <div>
            <h2 className="text-2xl font-bold">
              {city}, {state}
            </h2>
            <p className="text-green-100">{competitors.length} lawn care services available</p>
          </div>
        </div>

        {avgRating && (
          <div className="mt-2 flex items-center">
            <div className="bg-green-700 rounded-full px-3 py-1 inline-flex items-center">
              <Star className="h-4 w-4 text-yellow-300 mr-1" fill="currentColor" />
              <span className="font-bold">{avgRating}</span>
              <span className="text-sm text-green-200 ml-1">avg rating</span>
            </div>
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="p-4 bg-gray-50 border-b">
        <h3 className="text-sm font-medium text-gray-500 mb-2">Available Services</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Competitor List */}
      <div className="max-h-96 overflow-y-auto">
        {sortedCompetitors.map((competitor, index) => (
          <div key={competitor.id || index} className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-gray-900">{competitor.title}</h3>
              {competitor.rating && (
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
                  <span className="font-medium">{competitor.rating}</span>
                  {competitor.review_count && (
                    <span className="text-xs text-gray-500 ml-1">({competitor.review_count})</span>
                  )}
                </div>
              )}
            </div>

            {competitor.category && <p className="text-sm text-gray-500 mt-1">{competitor.category}</p>}

            {competitor.description && (
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{competitor.description}</p>
            )}

            <div className="mt-3 flex flex-wrap gap-3">
              {competitor.phone && (
                <a
                  href={`tel:${competitor.phone}`}
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <Phone className="h-4 w-4 mr-1" />
                  <span>{competitor.phone}</span>
                </a>
              )}

              {competitor.website && (
                <a
                  href={competitor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  <span>Website</span>
                </a>
              )}

              {competitor.google_maps_url && (
                <a
                  href={competitor.google_maps_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>Directions</span>
                </a>
              )}
            </div>

            {/* Additional details */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-500">
              {competitor.founded && (
                <div className="flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  <span>Est. {competitor.founded}</span>
                </div>
              )}

              {competitor.services && competitor.services.length > 0 && (
                <div className="flex items-center">
                  <Scissors className="h-3 w-3 mr-1" />
                  <span>{competitor.services.length} services</span>
                </div>
              )}

              {competitor.hours && (
                <div className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{Object.keys(competitor.hours).length} days open</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 bg-gray-50 border-t flex justify-between items-center">
        <p className="text-sm text-gray-500">Compare lawn care options in {city}</p>
        <Link
          href={`/compare?city=${encodeURIComponent(city)}&state=${encodeURIComponent(state)}`}
          className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          View all services
          <ChevronRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
