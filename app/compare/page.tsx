"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { motion } from "framer-motion"
import { Search, ChevronRight, ArrowRight, HelpCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getSupabaseClient } from "@/lib/supabase/client"
import { SchemaMarkup } from "@/app/components/seo/schema-markup"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CompetitorCard from "./components/competitor-card"
import SweatyJobCard from "./components/sweatyjob-card"

// Define a city type for our derived cities
interface City {
  id: string // Using city name as ID
  name: string
  state: string
  count: number
  image?: string
}

export default function ComparePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const cityParam = searchParams.get("city")
  const stateParam = searchParams.get("state")

  const [searchTerm, setSearchTerm] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [competitors, setCompetitors] = useState<any[]>([])
  const [cities, setCities] = useState<City[]>([])
  const [activeCity, setActiveCity] = useState<string | null>(null)
  const [hoveredCompetitor, setHoveredCompetitor] = useState<number | null>(null)
  const [filteredCities, setFilteredCities] = useState<City[]>([])
  const [noResults, setNoResults] = useState(false)
  const [popularSearches, setPopularSearches] = useState<string[]>([
    "lawn mowing near me",
    "best lawn care service",
    "affordable lawn mowing",
    "robot lawn mower service",
    "weekly lawn service",
    "lawn maintenance companies",
    "local lawn care",
    "professional lawn service",
  ])
  const supabase = getSupabaseClient()
  const [visibleCompetitors, setVisibleCompetitors] = useState(5)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  const listingsRef = useRef<HTMLDivElement>(null)

  // Load initial data
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      // Fetch competitors data from Supabase
      const { data: competitorsData, error: competitorsError } = await supabase.from("competitors").select("*")

      if (competitorsError) {
        console.error("Error fetching competitors:", competitorsError)
        throw competitorsError
      }

      // Extract unique cities from competitors data with null checks
      const cityMap = new Map<string, City>()

      competitorsData.forEach((comp) => {
        if (comp.city && comp.state) {
          const cityKey = `${comp.city}-${comp.state}`.toLowerCase()

          if (cityMap.has(cityKey)) {
            // Increment count for existing city
            const existingCity = cityMap.get(cityKey)!
            existingCity.count += 1
            cityMap.set(cityKey, existingCity)
          } else {
            // Add new city
            cityMap.set(cityKey, {
              id: cityKey,
              name: comp.city,
              state: comp.state,
              count: 1,
              image: `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(`${comp.city} ${comp.state} skyline`)}`,
            })
          }
        }
      })

      // Convert map to array and sort by count (most competitors first)
      const citiesArray = Array.from(cityMap.values()).sort((a, b) => b.count - a.count)

      setCities(citiesArray)
      setFilteredCities(citiesArray)
      setCompetitors(competitorsData || [])

      // Only set active city if it's in the URL parameters
      if (cityParam && stateParam) {
        const cityKey = `${cityParam}-${stateParam}`.toLowerCase()
        if (cityMap.has(cityKey)) {
          setActiveCity(cityKey)
        }
      }
      // Otherwise, no city is selected by default

      if (isInitialLoad) {
        setIsInitialLoad(false)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      // Handle error state here
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredCities(cities)
      setNoResults(false)
      return
    }

    // Normalize search term
    const normalizedSearch = searchTerm.toLowerCase().trim()
    let foundMatch = false

    // First, check for exact city matches since this should take priority
    const cityNameMatches = cities.filter((city) => {
      return normalizedSearch.includes(city.name.toLowerCase())
    })

    if (cityNameMatches.length > 0) {
      // If we have city matches, prioritize them
      setFilteredCities(cityNameMatches)
      setActiveCity(cityNameMatches[0].id)
      setNoResults(false)
      return
    }

    // Handle proximity-based searches like "near New York"
    let locationSearch = normalizedSearch
    if (normalizedSearch.includes("near")) {
      // Extract the location after "near"
      const nearMatch = normalizedSearch.match(/near\s+(.+)/i)
      if (nearMatch && nearMatch[1]) {
        locationSearch = nearMatch[1].trim()

        // Find cities that match the location
        const cityMatches = cities.filter((city) => {
          const cityName = city.name.toLowerCase()
          const stateName = city.state.toLowerCase()
          return cityName.includes(locationSearch) || stateName.includes(locationSearch)
        })

        if (cityMatches.length > 0) {
          setFilteredCities(cityMatches)
          setActiveCity(cityMatches[0].id)
          setNoResults(false)
          return
        }
      }
    }

    // Check for competitor matches with null checks
    const matchingCompetitors = competitors.filter((comp) => {
      // Match by name
      if (comp.title && comp.title.toLowerCase().includes(normalizedSearch)) return true

      // Match by services
      if (
        comp.services &&
        Array.isArray(comp.services) &&
        comp.services.some((service) => service && service.toLowerCase().includes(normalizedSearch))
      )
        return true

      // Match by keywords
      if (
        comp.keywords &&
        Array.isArray(comp.keywords) &&
        comp.keywords.some(
          (keyword) =>
            keyword &&
            (keyword.toLowerCase().includes(normalizedSearch) || normalizedSearch.includes(keyword.toLowerCase())),
        )
      )
        return true

      // Match by review text (if available)
      if (comp.reviews_text && comp.reviews_text.toLowerCase().includes(normalizedSearch)) return true

      return false
    })

    // If we found matching competitors, show cities that have these competitors
    if (matchingCompetitors.length > 0) {
      const citiesWithMatchingCompetitors = cities.filter((city) =>
        matchingCompetitors.some(
          (comp) =>
            comp.city?.toLowerCase() === city.name.toLowerCase() &&
            comp.state?.toLowerCase() === city.state.toLowerCase(),
        ),
      )

      if (citiesWithMatchingCompetitors.length > 0) {
        setFilteredCities(citiesWithMatchingCompetitors)
        setActiveCity(citiesWithMatchingCompetitors[0].id)
        setNoResults(false)
        foundMatch = true
      }
    }

    // If no competitor matches, check for city/state matches
    if (!foundMatch) {
      const cityMatches = cities.filter((city) => {
        const cityState = `${city.name}, ${city.state}`.toLowerCase()
        const stateOnly = city.state.toLowerCase()
        const cityOnly = city.name.toLowerCase()

        return (
          cityState.includes(normalizedSearch) || stateOnly === normalizedSearch || cityOnly.includes(normalizedSearch)
        )
      })

      if (cityMatches.length > 0) {
        setFilteredCities(cityMatches)
        setActiveCity(cityMatches[0].id)
        setNoResults(false)
        foundMatch = true
      }
    }

    // Check for service-related searches as a fallback
    if (!foundMatch) {
      const serviceTerms = [
        "lawn",
        "mowing",
        "care",
        "grass",
        "yard",
        "service",
        "maintenance",
        "robot",
        "affordable",
        "best",
      ]

      const isServiceSearch =
        serviceTerms.some((term) => normalizedSearch.includes(term)) ||
        popularSearches.some((term) => normalizedSearch.includes(term.toLowerCase()))

      if (isServiceSearch) {
        // For general service searches, show all cities
        setFilteredCities(cities)
        setActiveCity(cities[0].id)
        setNoResults(false)
        foundMatch = true
      }
    }

    // If no match found
    if (!foundMatch) {
      setFilteredCities([])
      setNoResults(true)
    }
  }

  // Get competitors for a specific city
  const getCompetitorsForCity = (cityName: string, stateName: string) => {
    // Get all competitors for this city with null checks
    const cityCompetitors = competitors.filter(
      (comp) =>
        comp.city?.toLowerCase() === cityName.toLowerCase() && comp.state?.toLowerCase() === stateName.toLowerCase(),
    )

    // If no search term, return all competitors for the city
    if (!searchTerm.trim()) {
      return cityCompetitors
    }

    const normalizedSearch = searchTerm.toLowerCase().trim()

    // If the search specifically mentions this city, return all competitors
    if (normalizedSearch.includes(cityName.toLowerCase())) {
      return cityCompetitors
    }

    // Handle proximity-based searches
    if (normalizedSearch.includes("near")) {
      // Extract the location after "near"
      const nearMatch = normalizedSearch.match(/near\s+(.+)/i)
      if (nearMatch && nearMatch[1]) {
        // If the location matches this city, return all competitors
        const locationSearch = nearMatch[1].trim()
        if (
          cityName.toLowerCase().includes(locationSearch) ||
          cityCompetitors.some((comp) => comp.city?.toLowerCase().includes(locationSearch))
        ) {
          return cityCompetitors
        }
      }
    }

    // Filter competitors based on search term with null checks
    const matchingCompetitors = cityCompetitors.filter((comp) => {
      // Match by name
      if (comp.title && comp.title.toLowerCase().includes(normalizedSearch)) return true

      // Match by services - check if services exists and is an array
      if (
        comp.services &&
        Array.isArray(comp.services) &&
        comp.services.some((service) => service && service.toLowerCase().includes(normalizedSearch))
      )
        return true

      // Match by keywords - check if keywords exists and is an array
      if (
        comp.keywords &&
        Array.isArray(comp.keywords) &&
        comp.keywords.some(
          (keyword) =>
            keyword &&
            (keyword.toLowerCase().includes(normalizedSearch) || normalizedSearch.includes(keyword.toLowerCase())),
        )
      )
        return true

      // Match by review text (if available)
      if (comp.reviews_text && comp.reviews_text.toLowerCase().includes(normalizedSearch)) return true

      return false
    })

    // If we have specific matches, return those
    if (matchingCompetitors.length > 0) {
      return matchingCompetitors
    }

    // Special sorting for certain search terms
    if (normalizedSearch.includes("affordable")) {
      return cityCompetitors.sort((a, b) => (a.price?.length || 0) - (b.price?.length || 0))
    }

    if (normalizedSearch.includes("best")) {
      return cityCompetitors.sort((a, b) => (b.review_rating || 0) - (a.review_rating || 0))
    }

    if (normalizedSearch.includes("robot") || normalizedSearch.includes("mower")) {
      return cityCompetitors.filter(
        (comp) =>
          (comp.services &&
            Array.isArray(comp.services) &&
            comp.services.some((s) => s && s.toLowerCase().includes("robot"))) ||
          (comp.title && comp.title.toLowerCase().includes("robot")),
      )
    }

    // Default: return all competitors for this city
    return cityCompetitors
  }

  const handleShowMore = () => {
    // Increase the number of visible competitors by 5 each time
    setVisibleCompetitors((prev) => prev + 5)
  }

  // Get active city data
  const getActiveCity = () => {
    if (activeCity === null) return null
    return cities.find((city) => city.id === activeCity) || null
  }

  const activeCityData = getActiveCity()

  // Custom FAQs for the compare page - nationwide focus (unique questions not in extendedFAQs)
  const compareFAQs = [
    {
      question: "What makes robot mowers better than traditional lawn services?",
      answer:
        "Robot mowers provide daily mowing instead of weekly service, creating a healthier lawn with finer clippings that act as natural fertilizer. They're whisper-quiet, produce zero emissions, eliminate scheduling hassles, and cost about half as much as traditional services ($79/month vs. $160-200/month).",
    },
    {
      question: "How does SweatyJob's robot mowing service work?",
      answer:
        "We install a robot mower at your property that automatically mows your lawn daily. The mower operates within a defined boundary, uses sensors to navigate around obstacles, and returns to its charging station when needed. You get a perfectly maintained lawn without any effort on your part.",
    },
    {
      question: "Is robot mowing safe for pets and children?",
      answer:
        "Yes, our robot mowers are equipped with advanced safety features including lift sensors that immediately stop the blades if the mower is lifted, obstacle detection to avoid collisions, and PIN-protected controls to prevent unauthorized use. They're designed to be completely safe around children, pets, and wildlife.",
    },
    {
      question: "What happens if my robot mower needs maintenance?",
      answer:
        "Your $79/month subscription includes all maintenance. If your robot mower needs attention, our technicians will be automatically notified through the mower's monitoring system, and we'll schedule a service visit. You don't need to worry about repairs, blade sharpening, or any maintenance tasks.",
    },
    {
      question: "Can robot mowers handle all lawn types and sizes?",
      answer:
        "Our robot mowers can handle most residential lawns up to 1/2 acre, including various grass types and terrains with slopes up to 35%. For larger properties or unusual configurations, we offer custom solutions. During installation, we'll assess your specific lawn conditions to ensure optimal performance.",
    },
  ]

  // Extended FAQs for SEO
  const extendedFAQs = [
    {
      question: "What is the lawn mowing service near me cost?",
      answer:
        "The cost of lawn mowing services varies by location and lawn size, but typically ranges from $40-50 per visit for traditional services. SweatyJob's robot mowing service costs a flat $79 per month regardless of lawn size (up to 1/2 acre), which includes daily mowing, maintenance, and support.",
    },
    {
      question: "Where can I find affordable lawn mowing near me?",
      answer:
        "SweatyJob offers the most affordable lawn mowing solution at just $79/month for daily robot mowing. This is approximately 50% cheaper than traditional services while providing daily rather than weekly service. Check availability in your area on our website.",
    },
    {
      question: "What are lawn mowing near me prices?",
      answer:
        "Lawn mowing prices typically range from $40-50 per visit or $160-200 monthly for weekly service from traditional providers. SweatyJob's robot mowing service costs just $79 monthly for daily mowing, making it the most cost-effective option while providing more frequent service.",
    },
    {
      question: "Can I get lawn mowing and maintenance near me?",
      answer:
        "Yes, SweatyJob provides comprehensive lawn mowing and maintenance services. Our $79/month robot mowing service includes daily mowing, regular maintenance of the robot, blade sharpening, and technical support. We handle everything so you don't have to worry about lawn maintenance.",
    },
    {
      question: "Where can I find lawn care and mowing near me?",
      answer:
        "SweatyJob provides complete lawn care and mowing services nationwide. Our robot mowers deliver daily mowing that promotes healthier grass growth. The frequent mowing creates fine grass clippings that act as natural fertilizer, improving your lawn's health and appearance.",
    },
    {
      question: "Is there lawn mowing and trimming near me?",
      answer:
        "SweatyJob's robot mowing service handles the mowing portion of your lawn care needs. For comprehensive care including trimming, we offer add-on services that can be scheduled through our app. Our robot mowers handle the daily mowing while our professionals can handle trimming and edging as needed.",
    },
    {
      question: "Where can I find lawn mowing and gardening services near me?",
      answer:
        "SweatyJob's primary service is daily robot lawn mowing for $79/month. We also offer add-on gardening services including flower bed maintenance, garden weeding, and seasonal planting in many service areas. Check our website for availability of these additional services in your location.",
    },
    {
      question: "Is there lawn mowing and weeding service near me?",
      answer:
        "SweatyJob's robot mowers handle daily lawn mowing, which naturally reduces weed growth by promoting denser, healthier grass. For additional weed control, we offer add-on weeding services in many areas that can be scheduled through our app. Check our website for service availability in your area.",
    },
    {
      question: "What is the average price for lawn mowing near me?",
      answer:
        "The average price for traditional lawn mowing services is $40-50 per visit or $160-200 monthly for weekly service. Prices vary based on lawn size and location. SweatyJob's robot mowing service costs a flat $79 monthly for daily mowing regardless of lawn size (up to 1/2 acre).",
    },
    {
      question: "Can I get lawn mowing and garden maintenance near me?",
      answer:
        "Yes, SweatyJob offers daily robot lawn mowing for $79/month and additional garden maintenance services in many areas. Our add-on services include flower bed maintenance, garden weeding, and seasonal planting that can be scheduled through our app as needed.",
    },
    {
      question: "Where can I find the best lawn mowing service near me?",
      answer:
        "SweatyJob consistently outperforms traditional lawn services in customer satisfaction, lawn health, and value. Our robots mow daily (not just weekly), creating a healthier lawn with finer clippings that act as natural fertilizer. They're whisper-quiet, produce zero emissions, and eliminate scheduling hassles - all at about half the cost.",
    },
    {
      question: "Can I find lawn mowing near me cheap?",
      answer:
        "Yes, SweatyJob offers the cheapest effective lawn mowing solution at just $79/month for daily robot mowing. This is significantly cheaper than traditional services that charge $160-200/month for just weekly mowing. Our service includes all maintenance and support with no hidden fees.",
    },
    {
      question: "Are there lawn mowing companies near me?",
      answer:
        "There are numerous lawn mowing companies in most areas, but SweatyJob offers a revolutionary alternative with our robot mowing service. Unlike traditional companies that visit weekly, our robots provide daily mowing at about half the cost ($79/month vs. $160-200/month for traditional services).",
    },
    {
      question: "Where can I find lawn mowing contractors near me?",
      answer:
        "While there are many lawn mowing contractors available in most areas, SweatyJob eliminates the need for contractors entirely. Our robot mowing service provides daily mowing for $79/month with no scheduling hassles, no noise, and no emissions - all for about half the cost of traditional contractors.",
    },
    {
      question: "Can I get same day lawn mowing near me?",
      answer:
        "Yes! With SweatyJob's robot mowing service, your lawn gets mowed every day automatically. Installation can often be scheduled same-day or within 24-48 hours in our service areas. Unlike traditional services that require scheduling and waiting, our robots work autonomously on your schedule.",
    },
    {
      question: "Can I get same day lawn mowing service near me?",
      answer:
        "SweatyJob's robot mowing service works daily, automatically maintaining your lawn. Installation can often be scheduled same-day or within 24-48 hours in our service areas. Once installed, your lawn will be mowed daily without any scheduling or waiting.",
    },
    {
      question: "Where can I find lawn mowing equipment near me?",
      answer:
        "With SweatyJob's robot mowing service, you don't need to purchase any lawn mowing equipment. We provide the robot mower, installation, maintenance, and support all for $79/month. This eliminates the need to buy, store, maintain, or repair any lawn equipment yourself.",
    },
    {
      question: "Can I get online estimates for lawn mowing service near me?",
      answer:
        "Yes, SweatyJob provides instant online estimates for our robot mowing service. Simply visit our website, enter your address, and you'll immediately see if service is available in your area and the flat rate of $79/month for daily mowing (for lawns up to 1/2 acre).",
    },
    {
      question: "Are there lawn mowing gigs near me?",
      answer:
        "While there may be lawn mowing gigs available in your area, SweatyJob offers a more reliable and consistent solution. Our robot mowing service provides daily mowing for $79/month, eliminating the uncertainty and scheduling issues that often come with gig-based lawn services.",
    },
    {
      question: "Are there lawn mowing companies near me hiring?",
      answer:
        "SweatyJob is frequently expanding our service areas and hiring for installation technicians and maintenance specialists. Visit our careers page to see current openings in your area. We're revolutionizing the lawn care industry with our robot mowing technology.",
    },
    {
      question: "Are there lawn mowing jobs near me?",
      answer:
        "SweatyJob is frequently hiring for installation technicians and maintenance specialists as we expand our robot mowing service. Visit our careers page to see current openings. We offer competitive pay and the opportunity to work with cutting-edge lawn care technology.",
    },
    {
      question: "Are there lawn mowing jobs near me part time?",
      answer:
        "SweatyJob offers both full-time and part-time positions as we expand our robot mowing service. We frequently hire installation technicians and maintenance specialists on flexible schedules. Visit our careers page to see current part-time openings in your area.",
    },
    {
      question: "Where can I find local lawn mowing services near me?",
      answer:
        "SweatyJob provides robot mowing services in numerous locations nationwide. Our service is expanding rapidly to new areas. To check if we service your specific location, simply enter your address on our website for instant verification of availability.",
    },
  ]

  // Reset visible competitors when changing cities
  useEffect(() => {
    if (activeCity !== null) {
      setVisibleCompetitors(5) // Reset to initial 5 when changing cities
    }
  }, [activeCity])

  // Scroll to listings when a city is selected
  useEffect(() => {
    if (activeCity && listingsRef.current && !isInitialLoad) {
      // Small delay to ensure content is rendered
      const timer = setTimeout(() => {
        listingsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [activeCity, isInitialLoad])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO Schema */}
      <SchemaMarkup
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Compare Lawn Mowing Services Near Me | Find the Best Lawn Care",
          description:
            "Compare top-rated lawn mowing services near you. Find and compare the best lawn care, grass cutting, and yard maintenance services in your area.",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: competitors.map((comp, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "LocalBusiness",
                name: comp.title || "Lawn Service",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: comp.street || "",
                  addressLocality: comp.city || "",
                  addressRegion: comp.state || "",
                  addressCountry: "US",
                },
              },
            })),
          },
        }}
      />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/modern-house-lawn.png"
            alt="Beautiful lawn with robot mower"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Find & Compare the <span className="text-green-500">Best Lawn Mowing Services</span> Near You
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover how SweatyJob's robot mowers outperform traditional lawn services in your area with daily mowing
              at half the cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg">
                Get Your Robot Mower
              </Button>
              <Button
                variant="outline"
                className="border-white text-black bg-white hover:bg-white/90 px-8 py-6 text-lg"
                onClick={() => {
                  document.getElementById("search-section")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Compare Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Snippet Optimized Section */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">How to Choose the Best Lawn Mowing Service</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-300">
              <li>
                <strong>Compare pricing:</strong> Traditional services cost $160-200/month for weekly mowing, while
                robot mowers cost $79/month for daily service.
              </li>
              <li>
                <strong>Check service frequency:</strong> Daily mowing (robot mowers) creates a healthier, more
                consistent lawn than weekly service.
              </li>
              <li>
                <strong>Consider environmental impact:</strong> Robot mowers produce zero emissions compared to
                gas-powered equipment.
              </li>
              <li>
                <strong>Read customer reviews:</strong> Look for services with 4+ star ratings and positive
                testimonials.
              </li>
              <li>
                <strong>Verify service area:</strong> Ensure the company services your specific neighborhood or zip
                code.
              </li>
            </ol>
          </div>
        </div>
      </div>

      {/* Split Screen Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel - Cities */}
        <div className="lg:w-1/3 bg-black border-r border-gray-800">
          {/* Search Bar */}
          <div id="search-section" className="p-6 border-b border-gray-800">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
              <Input
                type="text"
                placeholder="Search cities, states, or zip codes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="pl-10 py-6 bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 rounded-full"
              />
              <Button
                onClick={handleSearch}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 rounded-full px-4 h-10"
              >
                Search
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="mt-4">
              <p className="text-sm text-gray-400 mb-2">Popular searches:</p>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term, index) => (
                  <button
                    key={index}
                    className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-full"
                    onClick={() => {
                      setSearchTerm(term)
                      handleSearch()
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cities List */}
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Select a City</h2>
            {noResults ? (
              <div className="bg-gray-900 p-4 rounded-lg text-center">
                <p className="text-gray-400">No matches found for your search term.</p>
                <p className="text-gray-400 mt-2">Try searching for a city name, state, or zip code.</p>
              </div>
            ) : isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="p-4 rounded-lg bg-gray-900 animate-pulse">
                    <div className="h-5 bg-gray-800 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredCities.map((city) => (
                  <motion.div
                    key={city.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all ${
                      activeCity === city.id ? "bg-green-900" : "bg-gray-900 hover:bg-gray-800"
                    }`}
                    onClick={() => {
                      setActiveCity(city.id)
                      setIsInitialLoad(false) // Ensure we know this is a user selection
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-lg">
                          {city.name}, {city.state}
                        </h3>
                        <p className="text-gray-400">{city.count} lawn services</p>
                      </div>
                      <ChevronRight size={20} className="text-gray-500" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* SweatyJob Promo */}
          <div className="mt-auto p-6 bg-gradient-to-r from-green-900 to-green-800 rounded-lg mx-4 mb-4">
            <h3 className="font-bold text-xl mb-2">SweatyJob Robot Mowers</h3>
            <p className="text-gray-200 mb-4">
              Outperforms ALL traditional lawn services with daily mowing at half the cost.
            </p>
            <Button className="w-full bg-white text-green-900 hover:bg-gray-100">Learn More</Button>
          </div>
        </div>

        {/* Right Panel - Content */}
        <div className="lg:w-2/3 relative">
          {activeCityData ? (
            <>
              {/* City Hero */}
              <div className="relative h-[40vh]">
                <Image
                  src={activeCityData.image || "/placeholder.svg"}
                  alt={`${activeCityData.name}, ${activeCityData.state} lawn mowing services`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h1 className="text-4xl font-bold mb-2">
                    Lawn Mowing Services in {activeCityData.name}, {activeCityData.state}
                  </h1>
                  <p className="text-xl text-gray-300">
                    <span className="text-green-500 font-bold">{activeCityData.count}</span> lawn services compared
                  </p>
                </div>
              </div>

              {/* Competitors Grid */}
              <div className="p-8" ref={listingsRef}>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Top Lawn Mowing Services</h2>
                  <Link
                    href={`/compare/city/${encodeURIComponent(activeCityData.name)}/${encodeURIComponent(activeCityData.state)}`}
                    className="text-green-500 hover:text-green-400 flex items-center"
                  >
                    View all {activeCityData.count} services
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Get all competitors for this city but only show the visible number */}
                  {getCompetitorsForCity(activeCityData.name, activeCityData.state)
                    .slice(0, visibleCompetitors)
                    .map((competitor) => (
                      <CompetitorCard
                        key={competitor.id}
                        competitor={competitor}
                        cityName={activeCityData.name}
                        onMouseEnter={() => setHoveredCompetitor(competitor.id)}
                        onMouseLeave={() => setHoveredCompetitor(null)}
                      />
                    ))}

                  {/* SweatyJob Comparison Card - always show this */}
                  <SweatyJobCard cityName={activeCityData.name} stateName={activeCityData.state} />
                </div>

                {/* Show More button - only show if there are more competitors to display */}
                {getCompetitorsForCity(activeCityData.name, activeCityData.state).length > visibleCompetitors && (
                  <div className="mt-6 text-center">
                    <Button
                      onClick={handleShowMore}
                      variant="outline"
                      className="border-green-600 text-green-500 hover:bg-green-900/20"
                    >
                      Show More Competitors
                    </Button>
                  </div>
                )}

                {/* Comparison Table */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">How We Compare</h2>

                  <div className="overflow-hidden rounded-xl border border-gray-800">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-900">
                          <th className="p-4 text-left">Feature</th>
                          <th className="p-4 text-left text-green-500">SweatyJob</th>
                          <th className="p-4 text-left">Traditional Services</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-800">
                        <tr className="bg-gray-900 bg-opacity-50">
                          <td className="p-4">Mowing Frequency</td>
                          <td className="p-4 text-green-500">Daily</td>
                          <td className="p-4">Weekly</td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-30">
                          <td className="p-4">Monthly Cost</td>
                          <td className="p-4 text-green-500">$79</td>
                          <td className="p-4">$160-$200</td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-50">
                          <td className="p-4">Noise Level</td>
                          <td className="p-4 text-green-500">Silent</td>
                          <td className="p-4">Loud</td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-30">
                          <td className="p-4">Emissions</td>
                          <td className="p-4 text-green-500">Zero</td>
                          <td className="p-4">High</td>
                        </tr>
                        <tr className="bg-gray-900 bg-opacity-50">
                          <td className="p-4">Scheduling</td>
                          <td className="p-4 text-green-500">Automated</td>
                          <td className="p-4">Manual</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* FAQ Section for Voice Search and Featured Snippets */}
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <HelpCircle className="mr-2" size={24} />
                    Frequently Asked Questions About Lawn Mowing Services
                  </h2>

                  <Accordion type="single" collapsible className="bg-gray-900 rounded-xl overflow-hidden">
                    {compareFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-800">
                        <AccordionTrigger className="px-6 py-4 hover:bg-gray-800 text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-gray-300">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-gradient-to-r from-green-900 to-green-800 rounded-xl p-8 text-center">
                  <h2 className="text-2xl font-bold mb-2">Ready to upgrade your lawn care?</h2>
                  <p className="text-gray-300 mb-6">Join thousands of homeowners who've switched to robot mowing.</p>
                  <Button className="bg-white text-green-900 hover:bg-gray-100 px-8 py-6 text-lg">
                    Get Your Robot Mower Today
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-8 max-w-2xl mx-auto">
                <div className="mb-8 flex justify-center">
                  <MapPin size={64} className="text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Select a city to compare lawn services</h2>
                <p className="text-gray-400 text-xl mb-8">
                  Choose a city from the list on the left to see top-rated lawn care services in that area.
                </p>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Why compare lawn services?</h3>
                  <ul className="text-gray-300 space-y-2 text-left">
                    <li>• Find the most affordable options in your area</li>
                    <li>• Compare traditional services vs. robot mowing</li>
                    <li>• See real customer ratings and reviews</li>
                    <li>• Discover services that match your specific needs</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Extended FAQ Section for SEO */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-white">More Lawn Mowing Service FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Accordion type="single" collapsible className="bg-gray-900 rounded-xl overflow-hidden">
              {extendedFAQs.slice(0, Math.ceil(extendedFAQs.length / 2)).map((faq, index) => (
                <AccordionItem key={index} value={`faq-extra-1-${index}`} className="border-b border-gray-800">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800 text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Accordion type="single" collapsible className="bg-gray-900 rounded-xl overflow-hidden">
              {extendedFAQs.slice(Math.ceil(extendedFAQs.length / 2)).map((faq, index) => (
                <AccordionItem key={index} value={`faq-extra-2-${index}`} className="border-b border-gray-800">
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-800 text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-300">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
