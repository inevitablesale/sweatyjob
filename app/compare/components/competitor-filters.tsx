"use client"

import { useState } from "react"
import { X } from "lucide-react"

interface CompetitorFiltersProps {
  onFilterChange: (filters: any) => void
}

export default function CompetitorFilters({ onFilterChange }: CompetitorFiltersProps) {
  const [priceRange, setPriceRange] = useState<string[]>([])
  const [services, setServices] = useState<string[]>([])
  const [ratings, setRatings] = useState<string[]>([])

  const handlePriceToggle = (price: string) => {
    if (priceRange.includes(price)) {
      setPriceRange(priceRange.filter((p) => p !== price))
    } else {
      setPriceRange([...priceRange, price])
    }
  }

  const handleServiceToggle = (service: string) => {
    if (services.includes(service)) {
      setServices(services.filter((s) => s !== service))
    } else {
      setServices([...services, service])
    }
  }

  const handleRatingToggle = (rating: string) => {
    if (ratings.includes(rating)) {
      setRatings(ratings.filter((r) => r !== rating))
    } else {
      setRatings([...ratings, rating])
    }
  }

  const applyFilters = () => {
    onFilterChange({
      priceRange,
      services,
      ratings,
    })
  }

  const clearFilters = () => {
    setPriceRange([])
    setServices([])
    setRatings([])
    onFilterChange({})
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg">Filter Results</h3>
        <button onClick={clearFilters} className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
          <X className="h-4 w-4 mr-1" />
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Price Range */}
        <div>
          <h4 className="font-medium mb-2">Price Range</h4>
          <div className="space-y-2">
            {["$", "$$", "$$$", "$$$$"].map((price) => (
              <label key={price} className="flex items-center">
                <input
                  type="checkbox"
                  checked={priceRange.includes(price)}
                  onChange={() => handlePriceToggle(price)}
                  className="rounded text-green-600 focus:ring-green-500 mr-2"
                />
                <span>{price}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-medium mb-2">Services</h4>
          <div className="space-y-2">
            {["Mowing", "Fertilization", "Weed Control", "Aeration", "Seeding"].map((service) => (
              <label key={service} className="flex items-center">
                <input
                  type="checkbox"
                  checked={services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                  className="rounded text-green-600 focus:ring-green-500 mr-2"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Ratings */}
        <div>
          <h4 className="font-medium mb-2">Ratings</h4>
          <div className="space-y-2">
            {["4+", "3+", "2+", "1+"].map((rating) => (
              <label key={rating} className="flex items-center">
                <input
                  type="checkbox"
                  checked={ratings.includes(rating)}
                  onChange={() => handleRatingToggle(rating)}
                  className="rounded text-green-600 focus:ring-green-500 mr-2"
                />
                <span>{rating} Stars</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={applyFilters}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </div>
  )
}
