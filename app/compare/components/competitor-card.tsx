"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import LocalBusinessSchema from "./local-business-schema"

interface CompetitorCardProps {
  competitor: any
  cityName: string
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export default function CompetitorCard({ competitor, cityName, onMouseEnter, onMouseLeave }: CompetitorCardProps) {
  return (
    <motion.div
      className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-green-800 transition-all p-6"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      whileHover={{ y: -5 }}
    >
      {/* Add Schema Markup for this business */}
      <LocalBusinessSchema business={competitor} />

      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
          {/* Placeholder circle instead of image */}
          <span className="text-gray-600">{competitor.title ? competitor.title.charAt(0) : "?"}</span>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold">{competitor.title || "Unnamed Service"}</h3>
          <div className="flex items-center">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={
                    i < Math.floor(competitor.review_rating || 0) ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                  }
                />
              ))}
            </div>
            <span className="text-gray-400 text-sm">{competitor.review_rating || 0}</span>
          </div>
        </div>
      </div>

      {/* Location Information */}
      <div className="mb-4 text-gray-400 text-sm">
        <div className="flex items-start">
          <MapPin size={14} className="mr-1 mt-1 flex-shrink-0" />
          <span>
            {competitor.city || ""}, {competitor.state || ""}
          </span>
        </div>
      </div>

      <div className="flex justify-end items-center mt-6">
        {competitor.slug ? (
          <Link href={`/compare/${competitor.slug}`}>
            <Button className="bg-green-600 hover:bg-green-700">Compare</Button>
          </Link>
        ) : (
          <Button className="bg-green-600 hover:bg-green-700">Compare</Button>
        )}
      </div>
    </motion.div>
  )
}
