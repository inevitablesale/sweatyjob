"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, Star, Check, X, MapPin, Play } from "lucide-react"
import { ExpandedFAQSection } from "@/components/expanded-faq-section"
import LocalBusinessSchema from "../components/local-business-schema"
import { VoiceOptimizedContent } from "@/app/components/seo/voice-optimized-content"
import InlineForm from "../InlineForm"

interface CompetitorDetailPageClientProps {
  competitor: {
    id: string
    name: string
    title?: string
    logo: string
    city?: string
    state?: string
    slug: string
    review_text?: string
    review_rating?: number
    pros?: string[]
    cons?: string[]
    reviewer_name?: string
  }
  cityInfo?: any
  cityCoordinates?: any
  neighborhoodText?: string
  searchParams: { city?: string }
}

export default function CompetitorDetailPageClient({
  competitor,
  cityInfo,
  cityCoordinates,
  neighborhoodText,
  searchParams,
}: CompetitorDetailPageClientProps) {
  const city = searchParams.city || "richmond"
  const cityName = competitor.city
    ? competitor.city.charAt(0).toUpperCase() + competitor.city.slice(1).replace(/-/g, " ")
    : city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ")

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [lat, setLat] = useState<number | null>(null)
  const [lng, setLng] = useState<number | null>(null)
  const [pois, setPois] = useState<any[]>([])
  const [poisLoading, setPoisLoading] = useState(false)

  // Use competitor.title if available, otherwise use competitor.name
  const competitorTitle = competitor.title || competitor.name

  // This would normally come from an API or database
  const competitorDetails = {
    description: `${competitorTitle} is a traditional lawn care service that offers scheduled maintenance on a weekly or bi-weekly basis.`,
    pros: competitor.pros || [
      "Established brand with years of experience",
      "Multiple service packages available",
      "Seasonal treatments offered",
    ],
    cons: competitor.cons || [
      "Requires scheduling and coordination",
      "Weather-dependent service",
      "Inconsistent quality between visits",
      "Noisy gas-powered equipment",
      "Higher long-term costs",
    ],
    services: [
      { name: "Mowing Frequency", sweatyjob: "Daily mowing", competitor: "Weekly mowing" },
      { name: "Monthly Cost", sweatyjob: "$79/month", competitor: "$160-200/month" },
      { name: "Noise Level", sweatyjob: "Whisper quiet", competitor: "Loud gas engines" },
      { name: "Emissions", sweatyjob: "Zero emissions", competitor: "High carbon footprint" },
      { name: "Scheduling", sweatyjob: "Automated", competitor: "Manual booking" },
      { name: "Grass Health", sweatyjob: "Excellent", competitor: "Good" },
    ],
    features: [
      {
        name: "Wire-Free Navigation",
        description: "Our robot lawnmowers use advanced GPS and vision technology instead of boundary wires",
      },
      { name: "Versatile Lawn Size", description: "Works for small gardens up to large 1.5-acre properties" },
      { name: "Affordable Cost", description: "Just $79/month instead of $600-$3,500 upfront purchase" },
      { name: "Easy Setup", description: "Professional installation with no technical knowledge required" },
      { name: "Smart Technology", description: "AI-powered navigation adapts to your specific lawn" },
    ],
    whyChoose: [
      "Daily mowing creates a healthier, more consistent lawn",
      "Half the cost of traditional services ($79/month vs $160-200/month)",
      "Zero emissions, whisper-quiet operation",
      "No scheduling hassles - works autonomously",
    ],
    // Comprehensive FAQs organized by category
    faqs: [
      // Lawn Mowing Service Near Me FAQs
      {
        question: `How much is lawn mowing near me in ${cityName}?`,
        answer: `In ${cityName}, SweatyJob's robot lawn mowing service costs $79 per month for daily mowing. Traditional services like ${competitorTitle} typically charge $40-60 per visit or $160-200 monthly for weekly service. SweatyJob provides 7x more frequent mowing at approximately half the monthly cost.`,
      },
      {
        question: `What's the best lawn mowing service near me in ${cityName}?`,
        answer: `The best lawn mowing service in ${cityName} is SweatyJob, which provides daily robot mowing for $79/month. Unlike ${competitorTitle}'s weekly service, SweatyJob mows every day, operates silently, produces zero emissions, and costs about half as much monthly. Our customers consistently report healthier, more attractive lawns.`,
      },
      {
        question: `Are there affordable lawn mowing services near me in ${cityName}?`,
        answer: `Yes, SweatyJob offers the most affordable lawn mowing in ${cityName} at $79/month for daily robot mowing. This is approximately 50% cheaper than ${competitorTitle} and other traditional services while providing daily rather than weekly service. Installation and maintenance are included in this price.`,
      },
      {
        question: `What are lawn mowing service near me prices in ${cityName}?`,
        answer: `Lawn mowing service prices in ${cityName} vary by provider. SweatyJob charges $79/month for daily robot mowing, while ${competitorTitle} and similar traditional services typically charge $40-60 per visit or $160-200 monthly for weekly service. SweatyJob provides 7x more frequent mowing at about half the monthly cost.`,
      },
      {
        question: `Is there a cheap lawn mowing service near me in ${cityName}?`,
        answer: `Yes, SweatyJob offers the most affordable lawn mowing in ${cityName} at $79/month for daily robot mowing. This is significantly cheaper than ${competitorTitle}'s weekly service which costs approximately $160-200 monthly. Despite the lower price, you get daily mowing instead of just weekly service.`,
      },
      {
        question: `Is there a lawn mowing service near me open now in ${cityName}?`,
        answer: `Yes, SweatyJob's robot mowers operate 24/7 in ${cityName}, unlike ${competitorTitle} which only operates during business hours. Once installed, our robots work automatically every day regardless of time, ensuring your lawn always looks freshly cut without waiting for service appointments.`,
      },
      {
        question: `What's the lawn mowing service near me cost in ${cityName}?`,
        answer: `In ${cityName}, lawn mowing service costs vary. SweatyJob charges $79/month for daily robot mowing, while ${competitorTitle} and similar services typically charge $160-200/month for weekly mowing. SweatyJob's service includes professional installation, maintenance, and daily mowing at about half the monthly cost.`,
      },
      {
        question: `Where can I find lawn mowing near me in ${cityName}?`,
        answer: `You can find lawn mowing services in ${cityName} through SweatyJob, which provides daily robot mowing throughout the area. We serve homes throughout ${cityName}. Check availability for your specific address at SweatyJob.com.`,
      },
      {
        question: `What are lawn mowing near me prices in ${cityName}?`,
        answer: `In ${cityName}, lawn mowing prices range from $40-60 per visit for traditional services like ${competitorTitle}, totaling $160-200 monthly for weekly service. SweatyJob offers a more affordable alternative at $79/month for daily robot mowing, which is about half the monthly cost while providing 7x more frequent service.`,
      },
      {
        question: `Can I get lawn mowing and maintenance near me in ${cityName}?`,
        answer: `Yes, SweatyJob provides comprehensive lawn mowing and maintenance in ${cityName} for $79/month. Our service includes daily robot mowing, regular maintenance of the robot, blade sharpening, and technical support. Unlike ${competitorTitle}'s weekly service, our daily mowing creates a consistently maintained, healthier lawn.`,
      },
      // More Lawn Mowing Service Questions
      {
        question: `What lawn care and mowing near me options are available in ${cityName}?`,
        answer: `In ${cityName}, you have two main lawn care options: traditional services like ${competitorTitle} that provide weekly mowing at $160-200/month, or SweatyJob's innovative robot mowing service that provides daily mowing for $79/month. Our service promotes healthier lawns through daily micro-clippings that act as natural fertilizer.`,
      },
      {
        question: `Is there lawn mowing and trimming near me in ${cityName}?`,
        answer: `SweatyJob provides daily robot mowing throughout ${cityName} for $79/month. While our robots handle the mowing, we recommend occasional trimming for edges. Many customers find they need much less trimming with our service compared to ${competitorTitle} because our robots maintain a consistent lawn height daily.`,
      },
      {
        question: `Are there lawn mowing and gardening services near me in ${cityName}?`,
        answer: `Yes, SweatyJob offers daily robot mowing services throughout ${cityName} for $79/month. While we specialize in lawn mowing, many customers pair our service with local gardening services. Our daily mowing creates a beautiful backdrop for garden beds, unlike the weekly service from ${competitorTitle}.`,
      },
      {
        question: `What's the most affordable lawn mowing service near me in ${cityName}?`,
        answer: `SweatyJob offers the most affordable lawn mowing service in ${cityName} at $79/month for daily robot mowing. This is approximately 50% less than what ${competitorTitle} charges for just weekly service ($160-200/month), making SweatyJob the best value lawn care option in the area.`,
      },
      {
        question: `Is there a lawn mowing and weeding service near me in ${cityName}?`,
        answer: `SweatyJob provides daily robot mowing throughout ${cityName} for $79/month. Our frequent mowing helps prevent many weeds from establishing and going to seed, unlike the weekly service from ${competitorTitle}. For persistent weeds, we recommend pairing our service with occasional targeted weed treatment.`,
      },
      // Lawn Mowing Near Me Pricing
      {
        question: `Is there same day lawn mowing near me in ${cityName}?`,
        answer: `Yes! With SweatyJob's robot mowing service in ${cityName}, your lawn gets mowed every day automatically. Installation can often be scheduled within 24-48 hours. Unlike ${competitorTitle} which requires advance booking, our robots work autonomously on your schedule for just $79/month.`,
      },
      {
        question: `Is there same day lawn mowing service near me in ${cityName}?`,
        answer: `SweatyJob provides same-day mowing every day in ${cityName} through our robot mowing service for $79/month. Once installed, your lawn is mowed daily without any scheduling or waiting, unlike ${competitorTitle}'s weekly service that requires booking in advance and costs $160-200/month.`,
      },
      {
        question: `Can I get online estimates for lawn mowing service near me in ${cityName}?`,
        answer: `Yes! SweatyJob offers instant online pricing for our robot mowing service in ${cityName} at $79/month for lawns up to 1/2 acre, regardless of specific dimensions. Unlike ${competitorTitle} which may require an in-person estimate, our service has simple, transparent pricing.`,
      },
      {
        question: `Are there local lawn mowing services near me in ${cityName}?`,
        answer: `Yes, SweatyJob provides local robot mowing services throughout ${cityName} for $79/month, serving the same areas as ${competitorTitle}. Our local team handles the professional installation and maintenance of your robot mower, ensuring excellent service with local knowledge and support.`,
      },
      // Robot Lawnmower FAQs
      {
        question: `How much is a robot lawnmower?`,
        answer: `Robot lawnmowers typically cost $600-$3,500 to purchase outright. With SweatyJob, you get a premium robot lawnmower service for just $79/month with no large upfront cost, including maintenance and support.`,
      },
      {
        question: `How to set up a robot lawnmower?`,
        answer: `With SweatyJob, we handle the entire setup process. Our professional installation includes property assessment, precision mapping with no boundary wires needed, charging station setup, and app configuration.`,
      },
      {
        question: `Are there robot lawnmowers without wires?`,
        answer: `Yes, SweatyJob's advanced robot lawnmowers use GPS, RTK positioning, and computer vision to navigate without physical boundary wires, eliminating wire installation and maintenance issues.`,
      },
      {
        question: `Is there a robot lawnmower for small gardens?`,
        answer: `Yes, SweatyJob's robot mowing service is perfect for small gardens in ${cityName}, providing daily mowing at $79/month. Our robots are compact, quiet, and efficient, ideal for small urban or suburban spaces.`,
      },
      {
        question: `Can robot lawnmowers handle dog poop?`,
        answer: `While our robot lawnmowers have obstacle detection, it's recommended to pick up pet waste before mowing. Our daily mowing schedule makes this easier as you'll likely notice waste before the robot encounters it.`,
      },
      {
        question: `Is there a robot lawnmower for 2 acres?`,
        answer: `Yes, SweatyJob's commercial-grade robot mowers can handle properties up to 1.5 acres per unit. For 2-acre properties, we can deploy multiple coordinated units at $79/month per unit.`,
      },
    ],
    // Voice search optimized FAQs (shorter, more direct answers)
    voiceSearchFaqs: [
      {
        question: `How much does lawn mowing cost in ${cityName}?`,
        answer: `SweatyJob's robot lawn mowing costs $79 per month in ${cityName} for daily mowing. Traditional services like ${competitorTitle} charge $160-200 monthly for weekly service.`,
      },
      {
        question: `What's the best lawn mowing service in ${cityName}?`,
        answer: `SweatyJob is the best lawn mowing service in ${cityName}, providing daily robot mowing for $79 per month, compared to ${competitorTitle}'s weekly service at $160-200 per month.`,
      },
      {
        question: `How does robot lawn mowing work?`,
        answer: `SweatyJob's robot mowers use GPS and computer vision to navigate your lawn daily, cutting grass to the perfect height. They're quiet, environmentally friendly, and cost $79 monthly in ${cityName}.`,
      },
      {
        question: `Is robot lawn mowing better than traditional mowing?`,
        answer: `Yes, robot lawn mowing is better because it mows daily instead of weekly, costs half as much at $79 monthly, operates silently, and produces zero emissions compared to ${competitorTitle}'s gas-powered equipment.`,
      },
      {
        question: `Can I get same-day lawn mowing service in ${cityName}?`,
        answer: `With SweatyJob's robot mowers, your lawn is mowed every day automatically. Installation can be scheduled within 24-48 hours in ${cityName}, unlike ${competitorTitle} which requires advance booking.`,
      },
    ],
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("get-started")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Set coordinates from server-side data
  useEffect(() => {
    if (cityCoordinates && cityCoordinates.features && cityCoordinates.features.length > 0) {
      const [longitude, latitude] = cityCoordinates.features[0].center
      setLat(latitude)
      setLng(longitude)
      console.log(`✅ Client: Set coordinates to lat: ${latitude}, lng: ${longitude}`)
    }
  }, [cityCoordinates])

  // Fetch POIs when coordinates are available
  useEffect(() => {
    const fetchPOIs = async () => {
      if (!lat || !lng) return

      console.log(`🔍 API Call: Fetching POIs near ${lat},${lng} with radius 1500m`)

      try {
        setPoisLoading(true)
        const url = `/api/nearby-pois?latitude=${lat}&longitude=${lng}&radius=1500`
        console.log(`📤 Request URL: ${url}`)

        const response = await fetch(url)

        // Log response details
        console.log(`📥 Response Status: ${response.status} ${response.statusText}`)
        console.log(`📥 Response Headers:`, Object.fromEntries(response.headers.entries()))

        // Check content type to ensure we're getting JSON
        const contentType = response.headers.get("content-type")
        console.log(`📥 Content-Type: ${contentType}`)

        if (!contentType || !contentType.includes("application/json")) {
          console.error("❌ Error: Expected JSON response but got:", contentType)

          // Try to log the response body for debugging
          try {
            const text = await response.text()
            console.error("❌ Response body (first 500 chars):", text.substring(0, 500))
          } catch (e) {
            console.error("❌ Could not read response body:", e)
          }

          setPoisLoading(false)
          return
        }

        if (response.ok) {
          const data = await response.json()
          console.log(`✅ POIs data received:`, data)
          console.log(`✅ Number of POIs found: ${data.features?.length || 0}`)
          setPois(data.features || [])
        } else {
          console.error(`❌ Error response: ${response.status} ${response.statusText}`)
        }
      } catch (err) {
        console.error("❌ Error fetching POIs:", err)
        // Don't let this error break the component
      } finally {
        setPoisLoading(false)
      }
    }

    if (lat && lng) {
      fetchPOIs()
    }
  }, [lat, lng])

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href={`/compare?city=${city}`} className="inline-flex items-center text-gray-400 hover:text-white mb-6">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Comparison
          </Link>

          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {competitorTitle} vs <span className="text-green-500">SweatyJob</span> Lawn Mowing Service Near Me in{" "}
                {cityName}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Compare {competitorTitle} with SweatyJob's robot lawn mowing service in {cityName}
                {competitor.state ? `, ${competitor.state}` : ""}. We serve homes throughout all neighborhoods. Daily
                mowing at $79/month vs weekly service at $160-200/month.
              </p>

              <div className="flex items-center mb-8">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-300">
                  {cityName}
                  {competitor.state ? `, ${competitor.state}` : ""}
                </span>

                <div className="flex items-center ml-6">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-300">5 rating</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  href={`https://www.bestmow.com/54di4z`}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-md transition duration-200"
                >
                  Try Robotic Mowing Instead
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Voice Search Optimized Content - Hidden visually but available to screen readers */}
      <div className="sr-only">
        <VoiceOptimizedContent
          title={`Compare ${competitorTitle} vs SweatyJob Lawn Mowing in ${cityName}`}
          description={`Find the best lawn mowing service in ${cityName}. SweatyJob offers daily robot mowing for $79/month, while ${competitorTitle} provides weekly service for $160-200/month.`}
          faqs={competitorDetails.voiceSearchFaqs}
          cityName={cityName}
          competitorName={competitorTitle}
        />
      </div>

      {/* City Information Section (if available) */}
      {cityInfo && cityInfo.extract && (
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About {cityName}</h2>
            <div className="bg-gray-800 rounded-lg p-8">
              <div className="flex flex-col md:flex-row gap-8">
                {cityInfo.thumbnail && (
                  <div className="md:w-1/3">
                    <img
                      src={cityInfo.thumbnail.source || "/placeholder.svg"}
                      alt={cityName}
                      className="rounded-lg w-full h-auto"
                    />
                  </div>
                )}
                <div className={cityInfo.thumbnail ? "md:w-2/3" : "w-full"}>
                  <p className="text-lg text-gray-300 mb-4">{cityInfo.extract.substring(0, 500)}...</p>
                  {neighborhoodText && (
                    <div className="mt-6">
                      <h3 className="text-xl font-bold mb-3">Neighborhoods in {cityName}</h3>
                      <p className="text-gray-300">{neighborhoodText}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Comparison Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Lawn Mowing Service Near Me in {cityName}</h2>

          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-xl mb-8">
              Looking for lawn mowing service near you in {cityName}? Here's a quick comparison:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-500 mb-4">SweatyJob Robot Mowing</h3>
                <ul className="space-y-3">
                  {competitorDetails.services.slice(0, 4).map((service, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{service.name}:</span> {service.sweatyjob}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-4">{competitorTitle}</h3>
                <ul className="space-y-3">
                  {competitorDetails.services.slice(0, 4).map((service, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{service.name}:</span> {service.competitor}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Watch: Robot Lawn Mowing vs {competitorTitle} in {cityName}
          </h2>

          <div className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/robot-mower-in-action.png"
              onClick={handlePlayVideo}
            >
              <source
                src="https://www.bestmow.com/cdn/shop/videos/c/vp/962096c1d1224dc78b09087c9a8c7ef8/962096c1d1224dc78b09087c9a8c7ef8.HD-1080p-7.2Mbps-44563247.mp4?v=0"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                onClick={handlePlayVideo}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <div className="bg-green-500 rounded-full p-5 flex items-center justify-center">
                  <Play className="h-10 w-10 text-white" fill="white" />
                </div>
              </button>
            )}
          </div>

          <div className="max-w-4xl mx-auto mt-8">
            <h3 className="text-2xl font-bold mb-4">
              SweatyJob Robot Mower Demo - Better Than {competitorTitle} in {cityName}
            </h3>
            <p className="text-gray-300 mb-6">
              See how SweatyJob's robot mower works daily in {cityName}, providing better lawn care than{" "}
              {competitorTitle} at half the cost.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center">
                <span className="text-gray-300 mr-2">1:30</span>
              </div>
              <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center">
                <span className="text-gray-300">HD Quality</span>
              </div>
              <div className="bg-green-800 px-4 py-2 rounded-full flex items-center">
                <span className="text-white">Exclusive Demo</span>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-green-500 mb-4">What You'll See in This Video:</h4>
              <ol className="space-y-3 list-decimal pl-5">
                <li className="text-gray-300">How SweatyJob's robot mower navigates your lawn</li>
                <li className="text-gray-300">The difference in cut quality compared to {competitorTitle}</li>
                <li className="text-gray-300">How quiet our mowers are compared to traditional services</li>
                <li className="text-gray-300">
                  How our robot lawnmower works without wires and handles various lawn sizes
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Compare</h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-4 px-6 text-left text-xl font-bold">Feature</th>
                  <th className="py-4 px-6 text-left text-xl font-bold text-green-500">SweatyJob</th>
                  <th className="py-4 px-6 text-left text-xl font-bold">{competitorTitle}</th>
                  <th className="py-4 px-6 text-left text-xl font-bold">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {competitorDetails.services.map((service, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-6 px-6 font-medium">{service.name}</td>
                    <td className="py-6 px-6">
                      <div className="flex items-center">
                        <span className="text-green-500 font-medium mr-2">{service.sweatyjob}</span>
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex items-center">
                        <span className="mr-2">{service.competitor}</span>
                        <X className="h-5 w-5 text-red-500" />
                      </div>
                    </td>
                    <td className="py-6 px-6 text-gray-300">
                      {index === 0 && "Daily mowing creates a healthier, more consistent lawn."}
                      {index === 1 && "SweatyJob costs about half as much for 7x more frequent service."}
                      {index === 2 && "Our robots operate quietly, even early morning or late evening."}
                      {index === 3 && "SweatyJob robots are 100% electric and environmentally friendly."}
                      {index === 4 && "No need to schedule or be home - our robots work autonomously."}
                      {index === 5 && "Daily micro-clippings act as natural fertilizer for your lawn."}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose & About Competitor */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Why Choose SweatyJob?</h3>
              <ul className="space-y-4">
                {competitorDetails.whyChoose.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">About {competitorTitle}</h3>
              <p className="text-gray-300">
                {competitorTitle} is a lawn care service provider operating in {cityName}
                {competitor.state ? `, ${competitor.state}` : ""}. They offer traditional lawn mowing services on a
                weekly schedule.
              </p>
              {competitor.review_text && (
                <div className="mt-4">
                  <p className="text-gray-300">{competitor.review_text}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Robot Lawnmower Technology</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Robot Lawnmower Features</h3>
              <ul className="space-y-6">
                {competitorDetails.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{feature.name}:</span> {feature.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Why Choose Our Robot Lawnmower?</h3>
              <p className="text-gray-300 mb-6">
                Unlike traditional services like {competitorTitle} or DIY mowing, our robot lawnmowers provide daily
                cutting for a consistently perfect lawn. Whether you have a small garden or a large 2-acre property, our
                technology adapts to your specific needs.
              </p>
              <p className="text-gray-300 mb-6">
                With no boundary wires to install or maintain, our setup process is simple and clean. The robot works in
                various conditions, handles slopes up to 35 degrees, and operates quietly enough to run at night.
              </p>
              <p className="text-gray-300">
                At $79/month, you get all the benefits of a premium robot lawnmower (worth $1,500-$3,500) without the
                large upfront cost or maintenance hassles. It's the smart, affordable way to maintain your lawn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Customers Say About {competitorTitle}</h2>

          <div className="bg-gray-900 p-8 rounded-lg">
            <div className="flex items-start">
              <div className="text-5xl text-gray-700 mr-6">"</div>
              <div>
                <div className="flex mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <p className="font-medium mb-2">{competitor.reviewer_name || "Verified Customer"}</p>
                <p className="text-xl italic mb-6">
                  "{competitor.review_text || `${competitorTitle} provides regular lawn service in ${cityName}.`}"
                </p>

                <div className="bg-gray-800 p-6 rounded-lg">
                  <h4 className="text-green-500 font-medium mb-3">Why SweatyJob is Better:</h4>
                  <p className="text-gray-300">
                    While {competitorTitle} has some satisfied customers, SweatyJob offers daily mowing instead of
                    weekly service, at about half the monthly cost. Our robot mowers operate quietly and produce zero
                    emissions, addressing common complaints about traditional lawn services like noise and scheduling
                    inconvenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Points of Interest (if available) */}
      {!poisLoading && pois.length > 0 ? (
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Points of Interest Near {cityName}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pois.slice(0, 6).map((poi, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{poi.text}</h3>
                  <p className="text-gray-300 mb-4">{poi.properties?.category || "Local Attraction"}</p>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-300">{poi.place_name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : poisLoading ? (
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-center mb-6">Points of Interest Near {cityName}</h2>
            <p className="text-gray-300">Loading nearby attractions...</p>
          </div>
        </section>
      ) : null}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <ExpandedFAQSection faqs={competitorDetails.faqs} title={`${competitorTitle} vs SweatyJob FAQs`} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade from {competitorTitle}?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of homeowners who have switched to SweatyJob's robotic lawn service and enjoy a perfectly
            maintained lawn without the hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`https://www.bestmow.com/54di4z`}
              className="px-8 py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started With Robotic Mowing
            </Link>
            <Link
              href="/compare"
              className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Compare More Services
            </Link>
          </div>
        </div>
      </section>

      {/* Inline Form Section */}
      <section id="get-started" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Get Started with SweatyJob</h2>
          <div className="max-w-3xl mx-auto">
            <InlineForm />
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <LocalBusinessSchema city={city} />
    </div>
  )
}
