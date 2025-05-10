"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Check, X, ChevronRight } from "lucide-react"

interface Competitor {
  id: string
  name: string
  logo: string
  description: string
  pros: string[]
  cons: string[]
  rating: number
  priceRange: string
  url: string
}

interface CompetitorCardProps {
  competitor: Competitor
  city: string
}

export default function CompetitorCard({ competitor, city }: CompetitorCardProps) {
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ")

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-all hover:scale-[1.02]">
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] relative mr-3 flex-shrink-0">
            <Image
              src={competitor.logo || "/placeholder.svg"}
              alt={`${competitor.name} Logo`}
              fill
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{competitor.name}</h3>
        </div>
        <div className="flex items-center bg-white rounded-full px-3 py-1">
          <Star className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" />
          <span className="font-bold">{competitor.rating.toFixed(1)}</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Traditional Lawn Service</h4>
          <p className="text-gray-600">{competitor.description}</p>
        </div>

        <div className="mb-4">
          <h5 className="font-semibold mb-2 text-green-700">Pros:</h5>
          <ul className="space-y-2">
            {competitor.pros.map((pro, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h5 className="font-semibold mb-2 text-red-700">Cons:</h5>
          <ul className="space-y-2">
            {competitor.cons.map((con, index) => (
              <li key={index} className="flex items-start">
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{con}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-sm text-gray-500">Price Range</span>
            <div className="text-2xl font-bold text-gray-900">{competitor.priceRange}</div>
          </div>
          <div className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
            Available in {cityName}
          </div>
        </div>

        <Link
          href={`${competitor.url}?city=${city}`}
          className="block w-full bg-gray-200 text-gray-800 text-center py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors flex items-center justify-center"
        >
          Compare Details
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
