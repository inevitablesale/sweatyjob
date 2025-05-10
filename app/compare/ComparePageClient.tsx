"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronRight, MapPin, Search, Star, Check } from "lucide-react"
import { VoiceOptimizedContent } from "@/components/voice-optimized-content"

interface City {
  id: string
  name: string
}

interface Competitor {
  id: string
  slug: string
  title: string
  logo: string
  review_text: string
  review_rating: number
  price_range: string
  city: string
  pros: string[]
  cons: string[]
}

interface ComparePageClientProps {
  cities: City[]
  competitors: Competitor[]
}

export default function ComparePageClient({ cities, competitors }: ComparePageClientProps) {
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCompetitors, setFilteredCompetitors] = useState<Competitor[]>([])
  const [expandedFaqs, setExpandedFaqs] = useState<Record<string, boolean>>({})
  const [visibleListings, setVisibleListings] = useState<number>(5)
  const [showRobotForm, setShowRobotForm] = useState(false)

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    lawnSize: "small",
  })

  // Form validation errors
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    phone?: string
    address?: string
  }>({})

  // Refs for scrolling
  const searchSectionRef = useRef<HTMLDivElement>(null)

  // Popular search terms
  const popularSearches = [
    "lawn mowing near me",
    "best lawn care service",
    "affordable lawn mowing",
    "robot lawn mower service",
    "weekly lawn service",
    "lawn maintenance companies",
    "local lawn care",
    "professional lawn service",
  ]

  // FAQ questions
  const mainFaqs = [
    "What makes robot mowers better than traditional lawn services?",
    "How does SweatyJob's robot mowing service work?",
    "Is robot mowing safe for pets and children?",
    "What happens if my robot mower needs maintenance?",
    "Can robot mowers handle all lawn types and sizes?",
  ]

  const moreFaqs = [
    "What is the lawn mowing service near me cost?",
    "Where can I find affordable lawn mowing near me?",
    "What are lawn mowing near me prices?",
    "Can I get lawn mowing and maintenance near me?",
    "Where can I find lawn care and mowing near me?",
    "Is there lawn mowing and trimming near me?",
    "Where can I find lawn mowing and gardening services near me?",
    "Is there lawn mowing and weeding service near me?",
    "What is the average price for lawn mowing near me?",
    "Can I get lawn mowing and garden maintenance near me?",
    "Are there lawn mowing companies near me?",
    "Where can I find lawn mowing contractors near me?",
    "Can I get same day lawn mowing near me?",
    "Can I get same day lawn mowing service near me?",
    "Where can I find lawn mowing equipment near me?",
    "Can I get online estimates for lawn mowing service near me?",
    "Are there lawn mowing gigs near me?",
    "Are there lawn mowing companies near me hiring?",
    "Are there lawn mowing jobs near me?",
    "Are there lawn mowing jobs near me part time?",
  ]

  // Group competitors by city - only do this once on component mount
  const competitorsByCity = useRef<Record<string, Competitor[]>>({}).current

  // Initialize competitorsByCity only once
  useEffect(() => {
    // Only process if it hasn't been processed yet
    if (Object.keys(competitorsByCity).length === 0) {
      competitors.forEach((competitor) => {
        if (!competitor.city) return

        const cityId = competitor.city.toLowerCase().replace(/\s+/g, "-")
        if (!competitorsByCity[cityId]) {
          competitorsByCity[cityId] = []
        }
        competitorsByCity[cityId].push(competitor)
      })
    }
  }, [competitors, competitorsByCity])

  // Update filtered competitors when search term or selected city changes
  useEffect(() => {
    if (selectedCity) {
      const cityCompetitors = competitorsByCity[selectedCity] || []

      if (searchTerm) {
        setFilteredCompetitors(
          cityCompetitors.filter(
            (comp) =>
              comp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              (comp.review_text && comp.review_text.toLowerCase().includes(searchTerm.toLowerCase())),
          ),
        )
      } else {
        setFilteredCompetitors(cityCompetitors)
      }
    } else {
      setFilteredCompetitors([])
    }
  }, [searchTerm, selectedCity, competitorsByCity])

  const toggleFaq = (faqId: string) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [faqId]: !prev[faqId],
    }))
  }

  const handleCitySelect = (cityId: string) => {
    setSelectedCity(cityId)
    setVisibleListings(5) // Reset visible listings when changing city

    // Scroll to the listings section after a short delay to allow rendering
    setTimeout(() => {
      const listingsSection = document.getElementById("service-listings")
      if (listingsSection) {
        listingsSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  const loadMoreListings = () => {
    setVisibleListings((prev) => prev + 5)
  }

  const handleSearch = () => {
    // Reset city selection if search contains a city name
    const cityMatch = cities.find((city) => searchTerm.toLowerCase().includes(city.name.toLowerCase()))

    if (cityMatch) {
      setSelectedCity(cityMatch.id)
    }

    // If search contains "near me" or similar terms but no city,
    // keep the current city selection or prompt to select a city
    if (
      !cityMatch &&
      selectedCity === null &&
      (searchTerm.toLowerCase().includes("near me") ||
        searchTerm.toLowerCase().includes("best") ||
        searchTerm.toLowerCase().includes("affordable"))
    ) {
      // Show a message to select a city
      alert("Please select a city to find services near you")
    }

    // Filter competitors based on search term
    if (selectedCity) {
      const cityCompetitors = competitorsByCity[selectedCity] || []
      setFilteredCompetitors(
        cityCompetitors.filter(
          (comp) =>
            comp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (comp.review_text && comp.review_text.toLowerCase().includes(searchTerm.toLowerCase())) ||
            searchTerm.toLowerCase().includes("best") ||
            searchTerm.toLowerCase().includes("affordable") ||
            searchTerm.toLowerCase().includes("near me"),
        ),
      )
    }
  }

  const scrollToSearch = () => {
    if (searchSectionRef.current) {
      searchSectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const newErrors: {
      name?: string
      email?: string
      phone?: string
      address?: string
    } = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[\d+\-$$$$ ]{10,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    } else if (formData.address.trim().length < 5) {
      newErrors.address = "Please enter a complete address"
    }

    // If there are errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)

    // Show success message or redirect
    alert("Thanks for your interest! We'll contact you shortly to get your robot mower set up.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      lawnSize: "small",
    })
    setShowRobotForm(false)
  }

  const voiceSearchFaqs = [
    {
      question: "How much does robot lawn mowing cost compared to traditional services?",
      answer:
        "Robot lawn mowing costs $79 per month for daily mowing, while traditional services cost $160-240 monthly for just weekly service. Our robot mowers provide better results at half the cost.",
    },
    {
      question: "What are the benefits of robot lawn mowing over traditional services?",
      answer:
        "Robot lawn mowers provide daily cutting instead of weekly, creating a healthier, denser lawn. They operate quietly, produce zero emissions, and work in most weather conditions, all while saving you money.",
    },
    {
      question: "How do I choose the best lawn mowing service near me?",
      answer:
        "Compare frequency of service, cost per month, quality of results, and environmental impact. Robot mowers offer daily service at $79/month with zero emissions, while traditional services only come weekly at $160-240/month.",
    },
    {
      question: "Are robot lawn mowers worth the investment?",
      answer:
        "Yes, robot lawn mowers are worth the investment. They provide daily mowing at half the cost of traditional weekly services, create healthier lawns, and eliminate the hassle of scheduling and supervising lawn care.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[100vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/modern-home-lawn-hero.png"
            alt="Modern home with beautiful lawn"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
          <div className="max-w-4xl">
            <h1 className="text-[3.5rem] md:text-[5rem] font-bold leading-[1.1]">
              <div className="text-white">
                Find & Compare the <span className="text-green-500">Best</span>
              </div>
              <div className="text-green-500 text-[3.5rem] md:text-[5rem]">Lawn Mowing Services</div>
              <div className="text-white">Near You</div>
            </h1>

            <p className="text-xl md:text-2xl mt-6 mb-10 max-w-3xl">
              Discover how SweatyJob's robot mowers outperform traditional lawn services in your area with daily mowing
              at half the cost.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowRobotForm(!showRobotForm)}
                className="bg-green-600 text-white px-8 py-4 rounded-md font-bold hover:bg-green-500 transition-colors text-center text-lg"
              >
                Get Your Robot Mower
              </button>
              <button
                onClick={scrollToSearch}
                className="bg-white text-black px-8 py-4 rounded-md font-bold hover:bg-gray-200 transition-colors text-center text-lg"
              >
                Compare Services
              </button>
            </div>
          </div>

          {/* Inline Form */}
          {showRobotForm && (
            <div className="mt-12 bg-[#111827] rounded-xl p-6 max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-center">Get Your Robot Mower</h2>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className={`w-full bg-gray-900 border ${
                      errors.name ? "border-red-500" : "border-gray-700"
                    } rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className={`w-full bg-gray-900 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className={`w-full bg-gray-900 border ${
                      errors.phone ? "border-red-500" : "border-gray-700"
                    } rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500`}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-1">
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    required
                    className={`w-full bg-gray-900 border ${
                      errors.address ? "border-red-500" : "border-gray-700"
                    } rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500`}
                  />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>

                <div>
                  <label htmlFor="lawnSize" className="block text-sm font-medium text-gray-300 mb-1">
                    Lawn Size
                  </label>
                  <select
                    id="lawnSize"
                    name="lawnSize"
                    value={formData.lawnSize}
                    onChange={handleFormChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="small">Small (under 1/4 acre)</option>
                    <option value="medium">Medium (1/4 to 1/2 acre)</option>
                    <option value="large">Large (1/2 to 1 acre)</option>
                    <option value="xlarge">Extra Large (over 1 acre)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-md font-bold hover:bg-green-500 transition-colors"
                  >
                    Submit Request
                  </button>
                </div>

                <p className="text-xs text-gray-400 text-center mt-4">
                  By submitting this form, you agree to our Terms of Service and Privacy Policy. We'll contact you
                  within 24 hours to schedule your free consultation.
                </p>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-16 px-6 md:px-12 bg-[#111827] rounded-xl mx-6 md:mx-12 mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 speakable-content">How to Choose the Best Lawn Mowing Service</h2>
          <ol className="space-y-6">
            <li className="flex gap-4 speakable-content">
              <span className="text-xl font-bold text-white">1.</span>
              <div>
                <span className="font-bold">Compare pricing:</span>{" "}
                <span className="text-gray-300">
                  Traditional services cost $160-200/month for weekly mowing, while robot mowers cost $79/month for
                  daily service.
                </span>
              </div>
            </li>
            <li className="flex gap-4 speakable-content">
              <span className="text-xl font-bold text-white">2.</span>
              <div>
                <span className="font-bold">Check service frequency:</span>{" "}
                <span className="text-gray-300">
                  Daily mowing (robot mowers) creates a healthier, more consistent lawn than weekly service.
                </span>
              </div>
            </li>
            <li className="flex gap-4 speakable-content">
              <span className="text-xl font-bold text-white">3.</span>
              <div>
                <span className="font-bold">Consider environmental impact:</span>{" "}
                <span className="text-gray-300">
                  Robot mowers produce zero emissions compared to gas-powered equipment.
                </span>
              </div>
            </li>
            <li className="flex gap-4 speakable-content">
              <span className="text-xl font-bold text-white">4.</span>
              <div>
                <span className="font-bold">Read customer reviews:</span>{" "}
                <span className="text-gray-300">Look for services with 4+ star ratings and positive testimonials.</span>
              </div>
            </li>
            <li className="flex gap-4 speakable-content">
              <span className="text-xl font-bold text-white">5.</span>
              <div>
                <span className="font-bold">Verify service area:</span>{" "}
                <span className="text-gray-300">
                  Ensure the company services your specific neighborhood or zip code.
                </span>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Search Section */}
      <section ref={searchSectionRef} id="search-section" className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search cities, states, or zip codes..."
              className="w-full bg-[#111827] border border-gray-700 rounded-full py-4 px-12 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              aria-label="Search for lawn mowing services"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-500 transition-colors"
              aria-label="Search"
            >
              Search
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-gray-400 mb-4">Popular searches:</h3>
            <div className="flex flex-wrap gap-3">
              {popularSearches.map((term, index) => (
                <button
                  key={index}
                  className="bg-[#111827] text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
                  onClick={() => {
                    setSearchTerm(term)
                    setTimeout(handleSearch, 100) // Small delay to ensure state is updated
                  }}
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* City Selection */}
      <section className="py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Select a City</h2>
          <div className="space-y-4">
            {cities.map((city) => (
              <button
                key={city.id}
                onClick={() => handleCitySelect(city.id)}
                className={`w-full text-left p-6 rounded-xl flex justify-between items-center transition-colors ${
                  selectedCity === city.id ? "bg-[#111827] border border-gray-700" : "bg-[#0c1322] hover:bg-[#111827]"
                }`}
                aria-pressed={selectedCity === city.id}
              >
                <div>
                  <h3 className="text-xl font-bold">{city.name}</h3>
                  <p className="text-gray-400">{competitorsByCity[city.id]?.length || 0} lawn services</p>
                </div>
                <ChevronRight className="h-6 w-6 text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section id="service-listings" className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {selectedCity ? (
            <>
              <h2 className="text-3xl font-bold mb-8">
                Lawn Services in {cities.find((c) => c.id === selectedCity)?.name || ""}
              </h2>

              {filteredCompetitors.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* SweatyJob Card - Always show this first */}
                    <div className="bg-green-800 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                          <span className="text-green-800">SJ</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">SweatyJob Robot Mower</h3>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                            ))}
                            <span className="ml-2">5.0 (243)</span>
                          </div>
                        </div>
                        <div className="ml-auto">
                          <span className="text-2xl font-bold">$79/mo</span>
                        </div>
                      </div>

                      <p className="text-gray-200 mb-4">Automated daily mowing with zero emissions and app control</p>

                      <div className="flex items-center mb-4">
                        <MapPin className="h-5 w-5 text-gray-300 mr-2" />
                        <span className="text-gray-200">
                          Available throughout {cities.find((c) => c.id === selectedCity)?.name || ""}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-300 mr-2" />
                          <span>Daily mowing vs. weekly service</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-300 mr-2" />
                          <span>50% cheaper than competitors</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-green-300 mr-2" />
                          <span>Zero emissions, whisper quiet</span>
                        </li>
                      </ul>

                      <button
                        onClick={() => {
                          setShowRobotForm(true)
                          window.scrollTo({ top: 0, behavior: "smooth" })
                        }}
                        className="block w-full bg-white text-green-800 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
                      >
                        Get Started
                      </button>
                    </div>

                    {/* First competitor card */}
                    {filteredCompetitors.slice(0, 1).map((competitor) => (
                      <div key={competitor.id} className="bg-[#111827] rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                            {competitor.title.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{competitor.title}</h3>
                            <div className="flex items-center">
                              {[...Array(Math.floor(competitor.review_rating || 5))].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                              ))}
                              <span className="ml-2">{competitor.review_rating || 5}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center mb-4">
                          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                          <span className="text-gray-300">{competitor.city}</span>
                        </div>

                        <div className="mb-6">
                          <p className="text-gray-300 line-clamp-3">
                            {competitor.review_text || "Traditional lawn mowing service with scheduled visits."}
                          </p>
                        </div>

                        <Link
                          href={`/compare/${competitor.slug || competitor.id}`}
                          className="block w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-500 transition-colors text-center"
                        >
                          Compare
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Additional competitor listings */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {filteredCompetitors.slice(1, visibleListings).map((competitor) => (
                      <div key={competitor.id} className="bg-[#111827] rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-xl font-bold mr-3">
                            {competitor.title.charAt(0)}
                          </div>
                          <div>
                            <h3 className="font-bold">{competitor.title}</h3>
                            <div className="flex items-center">
                              {[...Array(Math.floor(competitor.review_rating || 4))].map((_, i) => (
                                <Star key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" />
                              ))}
                              <span className="ml-2 text-sm">{competitor.review_rating || 4}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center mb-3 text-sm">
                          <MapPin className="h-4 w-4 text-gray-400 mr-2" />
                          <span className="text-gray-300">{competitor.city}</span>
                        </div>

                        <div className="mb-4">
                          <p className="text-gray-300 text-sm line-clamp-2">
                            {competitor.review_text || "Traditional lawn mowing service with scheduled visits."}
                          </p>
                        </div>

                        <Link
                          href={`/compare/${competitor.slug || competitor.id}`}
                          className="block w-full bg-gray-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-600 transition-colors text-center"
                        >
                          Compare
                        </Link>
                      </div>
                    ))}
                  </div>

                  {/* Load more button */}
                  {filteredCompetitors.length > visibleListings && (
                    <div className="text-center">
                      <button
                        onClick={loadMoreListings}
                        className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                      >
                        See More Listings
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-[#111827] rounded-xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">No lawn services found in this area</h3>
                  <p className="text-gray-400 mb-6">
                    We couldn't find any traditional lawn services in this area, but SweatyJob's robot mowing is
                    available!
                  </p>
                  <button
                    onClick={() => {
                      setShowRobotForm(true)
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }}
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-500 transition-colors"
                  >
                    Get Started with SweatyJob
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="bg-[#111827] rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Select a City to Compare Lawn Services</h3>
              <p className="text-gray-400 mb-6">
                Choose a city from the list above to see available lawn mowing services in your area.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">How We Compare</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="py-4 px-6 text-left">Feature</th>
                  <th className="py-4 px-6 text-center text-green-500">SweatyJob</th>
                  <th className="py-4 px-6 text-center">Traditional Services</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">Mowing Frequency</td>
                  <td className="py-4 px-6 text-center text-green-500">Daily</td>
                  <td className="py-4 px-6 text-center">Weekly</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">Monthly Cost</td>
                  <td className="py-4 px-6 text-center text-green-500">$79</td>
                  <td className="py-4 px-6 text-center">$160-$200</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">Noise Level</td>
                  <td className="py-4 px-6 text-center text-green-500">Silent</td>
                  <td className="py-4 px-6 text-center">Loud</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="py-4 px-6">Emissions</td>
                  <td className="py-4 px-6 text-center text-green-500">Zero</td>
                  <td className="py-4 px-6 text-center">High</td>
                </tr>
                <tr>
                  <td className="py-4 px-6">Scheduling</td>
                  <td className="py-4 px-6 text-center text-green-500">Automated</td>
                  <td className="py-4 px-6 text-center">Manual</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <span className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center mr-3">?</span>
            Frequently Asked Questions About Lawn Mowing Services
          </h2>
          <div className="space-y-4">
            {mainFaqs.map((faq, index) => (
              <div key={index} className="bg-[#111827] rounded-xl overflow-hidden">
                <button
                  className="w-full text-left p-6 flex justify-between items-center"
                  onClick={() => toggleFaq(`main-${index}`)}
                  aria-expanded={expandedFaqs[`main-${index}`]}
                  aria-controls={`faq-content-main-${index}`}
                >
                  <h3 className="text-xl font-medium faq-question">{faq}</h3>
                  <ChevronDown
                    className={`h-6 w-6 transition-transform ${expandedFaqs[`main-${index}`] ? "rotate-180" : ""}`}
                  />
                </button>
                {expandedFaqs[`main-${index}`] && (
                  <div className="p-6 pt-0 text-gray-300 faq-answer" id={`faq-content-main-${index}`}>
                    <p>
                      {index === 0 &&
                        "Robot mowers provide daily cutting instead of weekly service, resulting in a healthier lawn. They're environmentally friendly with zero emissions, operate silently, and cost about half as much as traditional services. Plus, there's no scheduling hassle - they work automatically."}
                      {index === 1 &&
                        "We install a boundary wire around your lawn that guides the robot. The mower works daily, automatically returning to its charging station when needed. You control everything through our app, including scheduling and height adjustments."}
                      {index === 2 &&
                        "Absolutely. Our robot mowers have advanced safety features including lift sensors that immediately stop the blades if the mower is picked up, obstacle detection to avoid pets and children, and boundary recognition to stay within your lawn."}
                      {index === 3 &&
                        "Our service includes all maintenance as part of your monthly fee. If your mower needs attention, we're automatically notified through the app, and we'll schedule a service visit at no additional cost."}
                      {index === 4 &&
                        "Our robot mowers work well on most residential lawns up to 1 acre. They can handle slopes up to 35% and various grass types. During your free consultation, we'll assess your lawn to ensure it's suitable for our service."}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 md:px-12 bg-green-800 rounded-xl mx-6 md:mx-12 my-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to upgrade your lawn care?</h2>
          <p className="text-xl text-gray-200 mb-8">Join thousands of homeowners who've switched to robot mowing.</p>
          <button
            onClick={() => {
              setShowRobotForm(true)
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="inline-block bg-white text-green-800 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Get Your Robot Mower Today
          </button>
        </div>
      </section>

      {/* More FAQs */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">More Lawn Mowing Service FAQs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {moreFaqs.slice(0, 10).map((faq, index) => (
                <div key={index} className="bg-[#111827] rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-4 flex justify-between items-center"
                    onClick={() => toggleFaq(`more-left-${index}`)}
                    aria-expanded={expandedFaqs[`more-left-${index}`]}
                    aria-controls={`faq-content-more-left-${index}`}
                  >
                    <h3 className="font-medium faq-question">{faq}</h3>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedFaqs[`more-left-${index}`] ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedFaqs[`more-left-${index}`] && (
                    <div className="p-4 pt-0 text-gray-300 faq-answer" id={`faq-content-more-left-${index}`}>
                      <p>
                        SweatyJob offers the most affordable lawn mowing service at just $79/month for daily robot
                        mowing, compared to traditional services that cost $160-200/month for weekly mowing.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {moreFaqs.slice(10, 20).map((faq, index) => (
                <div key={index} className="bg-[#111827] rounded-xl overflow-hidden">
                  <button
                    className="w-full text-left p-4 flex justify-between items-center"
                    onClick={() => toggleFaq(`more-right-${index}`)}
                    aria-expanded={expandedFaqs[`more-right-${index}`]}
                    aria-controls={`faq-content-more-right-${index}`}
                  >
                    <h3 className="font-medium faq-question">{faq}</h3>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${expandedFaqs[`more-right-${index}`] ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedFaqs[`more-right-${index}`] && (
                    <div className="p-4 pt-0 text-gray-300 faq-answer" id={`faq-content-more-right-${index}`}>
                      <p>
                        With SweatyJob, you don't need to worry about scheduling or availability. Our robot mowers work
                        daily, providing consistent lawn care without the need to coordinate with traditional lawn
                        services.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <VoiceOptimizedContent
        title="Compare Lawn Mowing Services Near You"
        description="Robot lawn mowing provides daily cutting at $79 per month, while traditional services only offer weekly mowing at $160-240 monthly. Our robot mowers create healthier, denser lawns with less environmental impact."
        faqs={voiceSearchFaqs}
      />
    </div>
  )
}
