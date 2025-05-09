"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, MapPin, ArrowLeft, Check, X, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SchemaMarkup } from "@/app/components/seo/schema-markup"
import { VideoModal } from "@/components/video-modal"
import { InlineLeadForm } from "@/components/inline-lead-form"
import CompetitorLocationMapClient from "@/components/competitor-location-map-client"

// Helper function that acknowledges when we don't have specific neighborhood data
function getNeighborhoodText(city: string): string {
  // For Richmond, we have actual data from the neighborhoods array
  if (city.toLowerCase() === "richmond") {
    return "including Battery Park, Bellevue, Ginter Park, The Fan, and Church Hill"
  }

  // For other cities, be honest about not having specific data
  return "throughout all neighborhoods"
}

interface Competitor {
  id: number
  title: string
  slug: string
  city: string
  state: string
  street?: string
  postal_code?: string
  review_rating?: number
  services?: string[]
  description?: string
  price?: string
  keywords?: string[]
  website?: string
  phone?: string
  email?: string
  reviewer_name?: string
  review_text?: string
}

interface CityInfo {
  extract?: string
  thumbnail?: {
    source?: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
}

interface VideoInfo {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  contentUrl: string
  embedUrl: string
}

interface ComparisonFeature {
  feature: string
  sweatyjob: string
  sweatyjobValue: boolean
  competitor: string
  competitorValue: boolean
  description: string
}

interface Faq {
  question: string
  answer: string
}

interface Schema {
  "@context": string
  "@type": string
  name: string
  description: string
  speakable?: any
  mainEntity?: any
}

interface SweatyJobLocalBusinessSchema {
  "@context": string
  "@type": string
  name: string
  image: string
  "@id": string
  url: string
  telephone: string
  priceRange: string
  address: any
  geo: any
  areaServed: any[]
  sameAs: string[]
  openingHoursSpecification: any
  description: string
  makesOffer: any
}

interface MerchantProductSchema {
  "@context": string
  "@type": string
  name: string
  description: string
  brand: any
  sku: string
  mpn: string
  image: string
  offers: any
  aggregateRating: any
  review: any
  additionalProperty: any[]
}

interface VideoObjectSchema {
  "@context": string
  "@type": string
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  contentUrl: string
  embedUrl: string
  potentialAction: any
}

interface ReviewSchema {
  "@context": string
  "@type": string
  itemReviewed: any
  reviewRating: any
  author: any
  reviewBody: string
}

interface CompetitorDetailPageClientProps {
  competitor: Competitor
  cityInfo: CityInfo | null
  videoInfo: VideoInfo
  comparisonFeatures: ComparisonFeature[]
  faqs: Faq[]
  structuredData: Schema
  sweatyJobLocalBusinessSchema: SweatyJobLocalBusinessSchema
  merchantProductSchema: MerchantProductSchema
  videoObjectSchema: VideoObjectSchema
  reviewSchema: ReviewSchema | null
}

export default function CompetitorDetailPageClient({
  competitor,
  cityInfo,
  videoInfo,
  comparisonFeatures,
  faqs,
  structuredData,
  sweatyJobLocalBusinessSchema,
  merchantProductSchema,
  videoObjectSchema,
  reviewSchema,
}: CompetitorDetailPageClientProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Schema */}
      <SchemaMarkup schema={structuredData} />
      <SchemaMarkup schema={sweatyJobLocalBusinessSchema} />
      <SchemaMarkup schema={merchantProductSchema} />
      <SchemaMarkup schema={videoObjectSchema} />
      {reviewSchema && <SchemaMarkup schema={reviewSchema} />}

      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <Link href="/compare" className="flex items-center text-green-500 hover:text-green-400 mb-6">
            <ArrowLeft size={16} className="mr-2" />
            Back to all lawn services
          </Link>

          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 voice-search-optimized">
                {competitor.title} vs <span className="text-green-500">SweatyJob</span> | Lawn Mowing Service Near Me in{" "}
                {competitor.city}
              </h1>
              <p className="text-xl text-gray-300 mb-4 voice-search-optimized">
                Compare {competitor.title} with SweatyJob's robot lawn mowing service in {competitor.city},{" "}
                {competitor.state}. We serve homes {getNeighborhoodText(competitor.city)}. Daily mowing at $79/month vs
                weekly service at $160-200/month.
              </p>

              {/* Location and Rating */}
              <div className="flex items-center text-gray-400 mb-2">
                <MapPin size={16} className="mr-2" />
                <span>
                  {competitor.city}, {competitor.state}
                </span>
              </div>

              {competitor.review_rating && (
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(competitor.review_rating || 0)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-gray-400">{competitor.review_rating} rating</span>
                </div>
              )}
            </div>

            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg" asChild>
              <a href="#get-started">Try SweatyJob Instead</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Featured Snippet Optimized Section */}
        <div className="mb-16 voice-search-optimized">
          <h2 className="text-3xl font-bold mb-6 text-center">Lawn Mowing Service Near Me in {competitor.city}</h2>
          <div className="bg-gray-900 rounded-xl p-8">
            <p className="text-xl mb-4">
              Looking for lawn mowing service near you in {competitor.city}? Here's a quick comparison:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-green-500">SweatyJob Robot Mowing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Price:</strong> $79/month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Frequency:</strong> Daily mowing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Noise:</strong> Whisper quiet
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Emissions:</strong> Zero emissions
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">{competitor.title}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <X size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Price:</strong> $160-200/month
                    </span>
                  </li>
                  <li className="flex items-start">
                    <X size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Frequency:</strong> Weekly mowing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <X size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Noise:</strong> Loud gas engines
                    </span>
                  </li>
                  <li className="flex items-start">
                    <X size={20} className="text-red-500 mr-2 mt-1 flex-shrink-0" />
                    <span>
                      <strong>Emissions:</strong> High carbon footprint
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Video Demo Section - Moved up for better visibility and featured snippet optimization */}
        <VideoSection videoInfo={videoInfo} competitor={competitor} />

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">How We Compare</h2>

          <div className="overflow-hidden rounded-xl border border-gray-800">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center text-green-500">SweatyJob</th>
                  <th className="p-4 text-center">{competitor.title}</th>
                  <th className="p-4 text-left hidden md:table-cell">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {comparisonFeatures.map((feature, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-900 bg-opacity-50" : "bg-gray-900 bg-opacity-30"}
                  >
                    <td className="p-4 font-medium">{feature.feature}</td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-green-500 mb-1">{feature.sweatyjob}</span>
                        {feature.sweatyjobValue ? (
                          <Check size={20} className="text-green-500" />
                        ) : (
                          <X size={20} className="text-red-500" />
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className="mb-1">{feature.competitor}</span>
                        {feature.competitorValue ? (
                          <Check size={20} className="text-green-500" />
                        ) : (
                          <X size={20} className="text-red-500" />
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-gray-400 hidden md:table-cell">{feature.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose SweatyJob?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Daily mowing creates a healthier, more consistent lawn</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Half the cost of traditional services ($79/month vs $160-200/month)</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Zero emissions, whisper-quiet operation</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>No scheduling hassles - works autonomously</span>
              </li>
              <li className="flex items-start">
                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span>Professional installation and maintenance included</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">About {competitor.title}</h3>
            <p className="text-gray-300 mb-4">
              {competitor.description ||
                `${competitor.title} is a lawn care service provider operating in ${competitor.city}, ${competitor.state}. They offer traditional lawn mowing services on a weekly schedule.`}
            </p>

            {competitor.services && competitor.services.length > 0 && (
              <div className="mb-4">
                <h4 className="font-bold mb-2">Services Offered:</h4>
                <div className="flex flex-wrap gap-2">
                  {competitor.services.map((service, index) => (
                    <span key={index} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {competitor.price && (
              <p className="text-gray-300">
                <span className="font-bold">Pricing:</span> {competitor.price}
              </p>
            )}
          </div>
        </div>

        {/* Robot Lawnmower Technology Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Advanced Robot Lawnmower Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Robot Lawnmower Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Wire-Free Navigation:</strong> Our robot lawnmowers use advanced GPS and vision technology
                    instead of boundary wires
                  </span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Versatile Lawn Size:</strong> Works for small gardens up to large 1.5-acre properties
                  </span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Affordable Cost:</strong> Just $79/month instead of $600-$3,500 upfront purchase
                  </span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Easy Setup:</strong> Professional installation with no technical knowledge required
                  </span>
                </li>
                <li className="flex items-start">
                  <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>
                    <strong>Smart Technology:</strong> AI-powered navigation adapts to your specific lawn
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Our Robot Lawnmower?</h3>
              <p className="text-gray-300 mb-4">
                Unlike traditional services like {competitor.title} or DIY mowing, our robot lawnmowers provide daily
                cutting for a consistently perfect lawn. Whether you have a small garden or a large 2-acre property, our
                technology adapts to your specific needs.
              </p>
              <p className="text-gray-300 mb-4">
                With no boundary wires to install or maintain, our setup process is simple and clean. The robot works in
                various conditions, handles slopes up to 35 degrees, and operates quietly enough to run at night.
              </p>
              <p className="text-gray-300">
                At $79/month, you get all the benefits of a premium robot lawnmower (worth $1,500-$3,500) without the
                large upfront cost or maintenance hassles. It's the smart, affordable way to achieve a perfect lawn in{" "}
                {competitor.city}.
              </p>
            </div>
          </div>
        </div>

        {/* Competitor Review Section - Only shown if review data exists */}
        {competitor.review_text && competitor.reviewer_name && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">What Customers Say About {competitor.title}</h2>
            <div className="bg-gray-900 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Quote size={40} className="text-gray-600 mr-4" />
                <div>
                  <div className="flex mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(competitor.review_rating || 0)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-600"
                        }
                      />
                    ))}
                  </div>
                  <p className="font-bold">{competitor.reviewer_name}</p>
                </div>
              </div>
              <p className="text-gray-300 italic text-lg">"{competitor.review_text}"</p>
              <div className="mt-6 bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-green-500 mb-2">Why SweatyJob is Better:</h4>
                <p className="text-gray-300">
                  While {competitor.title} has some satisfied customers, SweatyJob offers daily mowing instead of weekly
                  service, at about half the monthly cost. Our robot mowers operate quietly and produce zero emissions,
                  addressing common complaints about traditional lawn services like noise and scheduling inconvenience.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* City Information Section - Only shown if Wikipedia data exists */}
        {cityInfo && cityInfo.extract && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              About {competitor.city}, {competitor.state}
            </h2>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <div className="md:flex">
                {cityInfo.thumbnail && cityInfo.thumbnail.source && (
                  <div className="md:w-1/3">
                    <img
                      src={cityInfo.thumbnail.source || "/placeholder.svg"}
                      alt={`${competitor.city}, ${competitor.state}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className={`p-8 ${cityInfo.thumbnail && cityInfo.thumbnail.source ? "md:w-2/3" : "w-full"}`}>
                  <p className="text-gray-300 mb-4">{cityInfo.extract}</p>
                  <div className="bg-gray-800 p-4 rounded-lg">
                    <h4 className="font-bold text-green-500 mb-2">SweatyJob in {competitor.city}:</h4>
                    <p className="text-gray-300">
                      SweatyJob is proud to serve the residents of {competitor.city} with our innovative robot lawn
                      mowing service. Our daily mowing service is perfect for the local climate and lawn conditions,
                      providing a consistently beautiful yard without the noise and emissions of traditional services
                      like {competitor.title}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Service Area Map */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            SweatyJob Service Area Near {competitor.title} in {competitor.city}
          </h2>
          <div className="bg-gray-900 rounded-xl p-8">
            {cityInfo?.geo ? (
              <div className="h-[400px]">
                <CompetitorLocationMapClient
                  city={competitor.city}
                  state={competitor.state}
                  competitorName={competitor.title}
                  lat={cityInfo.geo.latitude}
                  lng={cityInfo.geo.longitude}
                />
              </div>
            ) : (
              <div className="rounded-lg bg-slate-800 p-8 text-center">
                <p className="text-white">Map data unavailable for this location</p>
              </div>
            )}
            <div className="mt-6 bg-gray-800 p-4 rounded-lg">
              <h4 className="font-bold text-green-500 mb-2">SweatyJob Coverage in {competitor.city}:</h4>
              <p className="text-gray-300">
                Our robot mowing service is available throughout {competitor.city} and surrounding areas{" "}
                {getNeighborhoodText(competitor.city)}. The map shows our service area (green) in relation to{" "}
                {competitor.title}'s location (red). We provide daily robot mowing service to residential properties
                throughout the region.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-800 rounded-xl p-8 text-center mb-16">
          <h2 className="text-2xl font-bold mb-2">Ready to upgrade your lawn care?</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join thousands of homeowners who've switched from {competitor.title} to SweatyJob's robot mowing service.
            Get daily mowing at half the cost with no noise or emissions.
          </p>
          <Button className="bg-white text-green-900 hover:bg-gray-100 px-8 py-6 text-lg" asChild>
            <a href="#get-started">Get Your Robot Mower Today</a>
          </Button>
        </div>

        {/* Lead Capture Form */}
        <div className="mb-16">
          <InlineLeadForm
            source={`competitor-${competitor.slug}`}
            title="Get Your Robot Mower Today"
            description={`Ready to upgrade from ${competitor.title}? Enter your phone number to schedule a free consultation and see how much you can save with SweatyJob.`}
          />
        </div>

        {/* FAQ Section - Optimized for Featured Snippets */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Lawn Mowing Service Near Me FAQs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.slice(0, 10).map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 faq-question">{faq.question}</h3>
                <p className="text-gray-300 faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center">More Lawn Mowing Service Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.slice(10, 20).map((faq, index) => (
                <div key={index + 10} className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 faq-question">{faq.question}</h3>
                  <p className="text-gray-300 faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Lawn Mowing Near Me Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.slice(20, 30).map((faq, index) => (
                <div key={index + 20} className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 faq-question">{faq.question}</h3>
                  <p className="text-gray-300 faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Local Lawn Mowing Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.slice(30, 40).map((faq, index) => (
                <div key={index + 30} className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 faq-question">{faq.question}</h3>
                  <p className="text-gray-300 faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Affordable Lawn Mowing Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.slice(40, 50).map((faq, index) => (
                <div key={index + 40} className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2 faq-question">{faq.question}</h3>
                  <p className="text-gray-300 faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Robot Lawnmower FAQs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 faq-question">How much is a robot lawnmower?</h3>
                <p className="text-gray-300 faq-answer">
                  Robot lawnmowers typically cost $600-$3,500 to purchase outright. With SweatyJob, you get a premium
                  robot lawnmower service for just $79/month with no large upfront cost, including maintenance and
                  support.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 faq-question">How to set up a robot lawnmower?</h3>
                <p className="text-gray-300 faq-answer">
                  With SweatyJob, we handle the entire setup process. Our professional installation includes property
                  assessment, precision mapping with no boundary wires needed, charging station setup, and app
                  configuration.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 faq-question">Are there robot lawnmowers without wires?</h3>
                <p className="text-gray-300 faq-answer">
                  Yes, SweatyJob's advanced robot lawnmowers use GPS, RTK positioning, and computer vision to navigate
                  without physical boundary wires, eliminating wire installation and maintenance issues.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 faq-question">Is there a robot lawnmower for small gardens?</h3>
                <p className="text-gray-300 faq-answer">
                  Yes, SweatyJob's robot mowing service is perfect for small gardens in {competitor.city}, providing
                  daily mowing at $79/month. Our robots are compact, quiet, and efficient, ideal for small urban or
                  suburban spaces.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 faq-question">Can robot lawnmowers handle dog poop?</h3>
                <p className="text-gray-300 faq-answer">
                  While our robot lawnmowers have obstacle detection, it's recommended to pick up pet waste before
                  mowing. Our daily mowing schedule makes this easier as you'll likely notice waste before the robot
                  encounters it.
                </p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 faq-question">Is there a robot lawnmower for 2 acres?</h3>
                <p className="text-gray-300 faq-answer">
                  Yes, SweatyJob's commercial-grade robot mowers can handle properties up to 1.5 acres per unit. For
                  2-acre properties, we can deploy multiple coordinated units at $79/month per unit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Enhanced VideoSection component optimized for featured snippets
export function VideoSection({ videoInfo, competitor }: { videoInfo: VideoInfo; competitor: Competitor }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Log video info to console for debugging
  console.log("Video Info:", videoInfo)

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Watch: Robot Lawn Mowing vs {competitor.title} in {competitor.city}
      </h2>
      <div className="bg-gray-900 rounded-xl p-8">
        <div
          className="aspect-video bg-black/50 rounded-lg overflow-hidden relative flex items-center justify-center cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
          role="button"
          aria-label={`Play video: ${videoInfo.name}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsModalOpen(true)
              e.preventDefault()
            }
          }}
        >
          <img
            src={videoInfo.thumbnailUrl || "/placeholder.svg"}
            alt={videoInfo.name}
            className="w-full h-full object-cover absolute inset-0 group-hover:opacity-80 transition-opacity"
          />
          <div className="relative z-10 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 transform group-hover:scale-110 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </div>

          {/* Video duration overlay - helps with featured snippets */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">1:30</div>
        </div>

        {/* Video description - optimized for featured snippets */}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">{videoInfo.name}</h3>
          <p className="text-gray-300">{videoInfo.description}</p>

          {/* Video metadata - helps with featured snippets */}
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              1:30
            </span>
            <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-xs flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
              HD Quality
            </span>
            <span className="bg-green-900 text-green-100 px-3 py-1 rounded-full text-xs flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              Exclusive Demo
            </span>
          </div>

          {/* Key points from the video - helps with featured snippets */}
          <div className="mt-6 bg-gray-800 p-4 rounded-lg">
            <h4 className="font-bold text-green-500 mb-2">What You'll See in This Video:</h4>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li>How SweatyJob's robot mower navigates your lawn</li>
              <li>The difference in cut quality compared to {competitor.title}</li>
              <li>How quiet our mowers are compared to traditional services</li>
              <li>How our robot lawnmower works without wires and handles various lawn sizes</li>
            </ol>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoInfo.contentUrl}
        title={videoInfo.name}
      />
    </div>
  )
}
