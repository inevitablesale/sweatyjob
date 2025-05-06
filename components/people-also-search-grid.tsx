"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"
import Link from "next/link"

interface Competitor {
  title: string
  totalScore: string
  reviewsCount: string
}

interface PeopleAlsoSearchGridProps {
  competitors: Competitor[]
  city: string
  state: string
}

export default function PeopleAlsoSearchGrid({ competitors, city, state }: PeopleAlsoSearchGridProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Function to generate slug from competitor name
  const generateSlug = (name: string): string => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .concat(`-${city.toLowerCase().replace(/\s+/g, "-")}-${state.toLowerCase().replace(/\s+/g, "-")}`)
  }

  // Function to render stars based on rating
  const renderStars = (rating: string) => {
    const numRating = Number.parseFloat(rating)
    const fullStars = Math.floor(numRating)
    const hasHalfStar = numRating % 1 >= 0.5

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {competitors.map((competitor, index) => (
        <Link
          href={`/compare/${generateSlug(competitor.title)}`}
          key={index}
          className="block"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Card
            className={`transition-all duration-200 h-full ${
              hoveredIndex === index ? "shadow-lg transform -translate-y-1" : "shadow"
            }`}
          >
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">{competitor.title}</h3>
              <div className="flex justify-between items-center mb-2">
                {renderStars(competitor.totalScore)}
                <span className="text-sm text-gray-500">{competitor.reviewsCount} reviews</span>
              </div>
              <div className="mt-4 text-sm text-blue-600 font-medium">Compare with SweatyJob →</div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
