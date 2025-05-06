"use client"

import type React from "react"
import { Check, Clock, Leaf, Shield, Star, ArrowRight, Users } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

interface CompetitorProps {
  name: string
  city: string
  state: string
  address?: string
  latitude?: number
  longitude?: number
  description?: string
  review_text?: string
  reviewer_name?: string
  review_rating?: number
  price_level?: string
  category_name?: string
  website?: string
  people_also_search?: Array<{
    title: string
    totalScore: string
    reviewsCount: string
    slug?: string
  }>
}

interface SeoKeywordsProps {
  robotLawnMower: string
  lawnMowerRepair: string
  lawnMowerRental: string
}

interface WikipediaDataProps {
  title?: string
  extract?: string
  imageUrl?: string
}

interface CensusDataProps {
  population?: number
  medianIncome?: number
  medianHomeValue?: number
  medianAge?: number
  homeownershipRate?: number
  householdSize?: number | string
  dataSource?: string
}

interface PoiProps {
  id: string
  name: string
  type: string
  address: string
  coordinates: {
    latitude: number
    longitude: number
  }
  distance: number
}

interface EnhancedComparisonProps {
  competitor: CompetitorProps
  wikipediaData: WikipediaDataProps | null
  censusData: CensusDataProps | null
  poiData: PoiProps[]
  seoKeywords: SeoKeywordsProps
  slug: string
}

export default function EnhancedCompetitorComparison({
  competitor,
  wikipediaData,
  censusData,
  poiData,
  seoKeywords,
  slug,
}: EnhancedComparisonProps) {
  // Get price estimate based on price_level
  const getCompetitorPrice = () => {
    switch (competitor.price_level) {
      case "$$$":
        return 150
      case "$$":
        return 120
      case "$":
        return 90
      default:
        return 120
    }
  }

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    zipCode: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // FAQs for the page
  const faqs = [
    {
      question: `How does SweatyJob compare to ${competitor.name}?`,
      answer: `While ${competitor.name} offers traditional lawn mowing services with weekly or bi-weekly visits, SweatyJob provides daily automated mowing with robotic lawn mowers for a consistently perfect lawn. We're more affordable at $79/month compared to ${competitor.name}'s approximately $${getCompetitorPrice()}/month, and we offer a 30-day risk-free trial.`,
    },
    {
      question: `Is SweatyJob available in the same areas as ${competitor.name} in ${competitor.city}?`,
      answer: `Yes, SweatyJob is available in most areas serviced by ${competitor.name} in ${competitor.city}, ${competitor.state}. Enter your address on our site to instantly check if we service your specific location.`,
    },
    {
      question: `What are the advantages of SweatyJob over ${competitor.name}?`,
      answer: `Unlike ${competitor.name}, SweatyJob offers daily mowing (not just weekly), zero-emissions technology, no noise pollution, smart app monitoring, and consistent results regardless of weather. Plus, we offer a 30-day risk-free trial so you can experience the difference without commitment.`,
    },
    {
      question: `How much can I save by switching from ${competitor.name} to SweatyJob?`,
      answer: `Typical ${competitor.name} customers in ${competitor.city} pay around $${getCompetitorPrice()}/month for weekly service. SweatyJob costs just $79/month for daily service, potentially saving you $${getCompetitorPrice() - 79}/month while providing more frequent, consistent lawn care.`,
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/capture-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: `competitor-comparison-${competitor.name}`,
          type: "national-lead",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("Failed to submit form")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Brand Banner - Prominently featuring competitor name for SEO */}
      <div className="bg-black text-white py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold">
            <span className="text-yellow-500">{competitor.name}</span> vs SweatyJob Comparison
          </h1>
          <div className="mt-2 md:mt-0">
            <button 
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm"
            >
              Try SweatyJob Risk-Free
            </button>
          </div>
        </div>
      </div>

      {/* Wikipedia Image Hero Section */}
      {wikipediaData?.imageUrl ? (
        <div className="relative h-60 md:h-96 w-full">
          <Image 
            src={wikipediaData.imageUrl || "/placeholder.svg"} 
            alt={`${competitor.city}, ${competitor.state}`} 
            layout="fill" 
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              {competitor.name} Alternative in {competitor.city}
            </h2>
            <p className="text-lg md:text-xl opacity-90 max-w-3xl">
              The smarter way to maintain your lawn in {competitor.city}, {competitor.state}
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-green-700 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {competitor.name} Alternative in {competitor.city}
            </h2>
            <p className="text-xl opacity-90">
              The smarter way to maintain your lawn in {competitor.city}, {competitor.state}
            </p>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* At-a-glance comparison - Immediate value proposition */}
        <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
          <div className="bg-green-700 p-4 text-white">
            <h3 className="text-xl font-bold">SweatyJob vs {competitor.name}: At a Glance</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="border-b md:border-b-0 md:border-r border-gray-200 p-6">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <Clock className="w-5 h-5 mr-2" /> Service Frequency
              </h4>
              <p className="font-bold">{competitor.name}:</p>
              <p className="text-gray-700 mb-2">Weekly or bi-weekly visits</p>
              <p className="font-bold text-green-700">SweatyJob:</p>
              <p className="text-green-800 font-medium">Daily automated mowing</p>
            </div>
            <div className="border-b md:border-b-0 md:border-r border-gray-200 p-6">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <Star className="w-5 h-5 mr-2" /> Monthly Cost
              </h4>
              <p className="font-bold">{competitor.name}:</p>
              <p className="text-gray-700 mb-2">${getCompetitorPrice()}/month (estimated)</p>
              <p className="font-bold text-green-700">SweatyJob:</p>
              <p className="text-green-800 font-medium">$79/month with 30-day trial</p>
            </div>
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-3 flex items-center">
                <Leaf className="w-5 h-5 mr-2" /> Key Benefits
              </h4>
              <p className="font-bold">{competitor.name}:</p>
              <p className="text-gray-700 mb-2">Professional equipment, scheduled service</p>
              <p className="font-bold text-green-700">SweatyJob:</p>
              <p className="text-green-800 font-medium">Daily mowing, weather-independent, eco-friendly</p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 text-center">
            <button
              onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })} 
              className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded font-bold"
            >
              Check Availability in Your Area
            </button>
          </div>
        </div>

        {/* Main Content Layout - Two-column on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            {/* City Context with Wikipedia Info - SEO rich content */}
            {wikipediaData?.extract && (
              <div className="bg-white rounded-lg shadow p-6 mb-8">
                <h3 className="text-xl font-semibold mb-2">About {competitor.city}, {competitor.state}</h3>
                <p className="text-gray-700 mb-2">
                  {wikipediaData.extract.substring(0, 300)}
                  {wikipediaData.extract.length > 300 ? '...' : ''}
                </p>
                <p className="text-sm text-gray-500">
                  SweatyJob provides robot lawn mowing services throughout {competitor.city}, serving the same areas as {competitor.name} but with daily automated care.
                </p>
              </div>
            )}

            {/* Detailed Comparison - Side-by-side */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Detailed Comparison: {competitor.name} vs SweatyJob</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Service Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-bold mb-2">{competitor.name}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>Scheduled weekly visits</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>Noisy gas-powered equipment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>Crew arrives during business hours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>Weather-dependent scheduling</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-green-200 bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-700 mb-2">SweatyJob</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>Daily automated mowing</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>Quiet, battery-powered robots</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>Works on your schedule, day or night</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>Functions in light rain conditions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Lawn Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-bold mb-2">{competitor.name}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>Looks great the day of service</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>Gradually becomes overgrown</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>Can scalp lawn in some areas</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-green-200 bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-700 mb-2">SweatyJob</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>Consistently perfect height every day</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>Mulches clippings for healthier lawn</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>Promotes thicker, more resilient grass</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Business Practices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-bold mb-2">{competitor.name}</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>Multi-year contracts common</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>No money-back guarantee</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-gray-700 mr-2">•</span>
                        <span>Carbon emissions from equipment</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border border-green-200 bg-green-50 rounded p-4">
                    <h4 className="font-bold text-green-700 mb-2">SweatyJob</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>Month-to-month service</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>30-day risk-free trial</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span>Eco-friendly zero-emission technology</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section - SEO rich content */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About {competitor.name} vs SweatyJob</h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1/3 width on desktop */}
          <div className="lg:col-span-1">
            {/* Lead Capture Form */}
            <div id="lead-form" className="bg-white rounded-lg shadow p-6 mb-8 sticky top-4">
              <h3 className="text-xl font-bold mb-4 text-center">Try SweatyJob Risk-Free</h3>
              <p className="text-sm text-gray-700 mb-6 text-center">
                Ready to switch from {competitor.name}? Enter your info to check availability in your area.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
                  <h3 className="text-lg font-bold mb-2 text-green-800">Thanks for your interest!</h3>
                  <p className="text-green-700">
                    We'll be in touch shortly to discuss how SweatyJob can transform your lawn care experience.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-black text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-black text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-black text-sm"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-black text-sm"
                      placeholder="12345"
                    />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full p-2 border border-gray-300 rounded text-black text-sm"
                      placeholder="123 Main St"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded transition-colors"
                  >
                    {isSubmitting ? "Submitting..." : "Check Availability"}
                  </button>
                  <div className="flex flex-wrap items-center justify-center text-xs text-gray-600">
                    <div className="flex items-center mr-2 mb-1">
                      <Shield className="h-3 w-3 mr-1" />
                      <span>30-Day Risk-Free</span>
                    </div>
                    <div className="flex items-center mr-2 mb-1">
                      <Check className="h-3 w-3 mr-1" />
                      <span>Cancel Anytime</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <Star className="h-3 w-3 mr-1" />
                      <span>100% Satisfaction</span>
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Customer Testimonial */}
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Customer Review</h3>
              <div className="mb-2 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="italic text-gray-700 mb-4">
                "I switched from {competitor.name} to SweatyJob last year and couldn't be happier. My lawn looks amazing every day, not just on service day, and I'm saving money too!"
              </p>
              <p className="font-semibold">— Michael T., {competitor.city} resident</p>
            </div>

            {/* Local Service Areas */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-4">We Serve All {competitor.city} Areas</h3>
              <p className="text-gray-700 mb-4">
                SweatyJob provides robot lawn mowing service throughout {competitor.city}, {competitor.state}, serving all neighborhoods where {competitor.name} operates:
              </p>
              <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm">
                {Array.from({ length: 6 }).map((_, i) => (
                  <li key={i} className="flex items-center">
                    <ArrowRight className="h-3 w-3 text-green-600 mr-1" />
                    <span>{competitor.city} {i + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Partner Business Section - Distinct with B2B messaging */}
        <div className="mt-16 border-t-4 border-blue-600 pt-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 text-white">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 mr-3" />
                <h2 className="text-2xl font-bold">Partner with SweatyJob in {competitor.city}</h2>
              </div>
              <p className="mb-6 text-blue-100">
                Are you a lawn care professional or service provider in {competitor.city}? Partner with SweatyJob to access our growing customer base and boost your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white bg-opacity-10 p-4 rounded">
                  <h3 className="font-bold text-lg mb-2 text-blue-100">For Landscapers & Lawn Pros</h3>
                  <ul className="space-y-2 text-blue-50">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Offer complementary services our mowers don't cover</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Reduce equipment overhead by focusing on specialized services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Access pre-qualified customers without marketing costs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded">
                  <h3 className="font-bold text-lg mb-2 text-blue-100">For Service Businesses</h3>
                  <ul className="space-y-2 text-blue-50">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Offer exclusive deals to SweatyJob customers</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Co-branded marketing opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Leveraged advertising in premium neighborhoods</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Partner CTA */}
              <div className="flex justify-center">
                <a 
                  href="/partners"
                  className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-

Now, let's create a new component for the B2B partner section at the bottom with distinct messaging:

\
