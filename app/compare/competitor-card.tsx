"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Phone, Globe, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { formatPhoneNumber } from "@/lib/utils"

interface Review {
  rating: number
  text: string
  author: string
}

interface Competitor {
  id: string
  title: string
  street?: string
  city?: string
  state?: string
  zip?: string
  phone?: string
  website?: string
  services?: string[]
  pricing?: {
    monthly?: number
    yearly?: number
  }
  reviews?: Review[]
}

export function CompetitorCard({
  competitor,
  isHighlighted = false,
}: {
  competitor: Competitor
  isHighlighted?: boolean
}) {
  const { title, street, city, state, zip, phone, website, services, pricing, reviews } = competitor

  // Calculate average rating
  const avgRating =
    reviews && reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0

  // Format address
  const address = [street, city, state, zip].filter(Boolean).join(", ")

  // Format phone number
  const formattedPhone = phone ? formatPhoneNumber(phone) : ""

  return (
    <Card className={`h-full flex flex-col ${isHighlighted ? "border-sweat-500 border-2 shadow-lg" : ""}`}>
      <CardHeader className={`${isHighlighted ? "bg-sweat-50" : ""}`}>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            {address && (
              <CardDescription className="flex items-center mt-2">
                <MapPin className="h-4 w-4 mr-1" />
                {address}
              </CardDescription>
            )}
          </div>
          {isHighlighted && <Badge className="bg-sweat-500">Recommended</Badge>}
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        {/* Contact Info */}
        <div className="mb-4">
          {phone && (
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2" />
              <a href={`tel:${phone}`} className="text-sm hover:underline">
                {formattedPhone}
              </a>
            </div>
          )}
          {website && (
            <div className="flex items-center">
              <Globe className="h-4 w-4 mr-2" />
              <a
                href={website.startsWith("http") ? website : `https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline truncate max-w-[200px]"
              >
                {website.replace(/^https?:\/\//, "")}
              </a>
            </div>
          )}
        </div>

        {/* Services */}
        {services && services.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Pricing */}
        {pricing && Object.keys(pricing).length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Pricing</h3>
            <div className="space-y-1">
              {pricing.monthly && (
                <div className="flex justify-between">
                  <span className="text-sm">Monthly</span>
                  <span className="text-sm font-medium">${pricing.monthly}/mo</span>
                </div>
              )}
              {pricing.yearly && (
                <div className="flex justify-between">
                  <span className="text-sm">Yearly</span>
                  <span className="text-sm font-medium">${pricing.yearly}/yr</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Reviews */}
        {reviews && reviews.length > 0 && (
          <div>
            <div className="flex items-center mb-2">
              <h3 className="font-semibold">Reviews</h3>
              <div className="ml-2 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.round(avgRating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-sm ml-1">({reviews.length})</span>
              </div>
            </div>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {reviews.slice(0, 2).map((review, index) => (
                <div key={index} className="text-sm border-l-2 border-gray-200 pl-3 py-1">
                  <p className="italic">"{review.text}"</p>
                  <p className="text-xs text-gray-500 mt-1">— {review.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className={`${isHighlighted ? "bg-sweat-50" : ""}`}>
        {isHighlighted ? (
          <Button className="w-full bg-sweat-500 hover:bg-sweat-600">
            <Link href="/waitlist" className="w-full">
              Join Waitlist
            </Link>
          </Button>
        ) : (
          <Button variant="outline" className="w-full">
            <Link href="/waitlist" className="w-full">
              Compare with SweatyJob
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
