"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Leaf, Shield, Zap, CheckCircle, Phone } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { neighborhoods } from "./index"
import { useState, useEffect } from "react"

export default function NeighborhoodsPage() {
  // Track which images have failed to load
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({})
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Add this after the useState declarations
  useEffect(() => {
    // Preload all neighborhood images
    neighborhoods.forEach((neighborhood, index) => {
      const img = new Image()
      img.src = neighborhood.image
      img.onerror = () => {
        setFailedImages((prev) => ({ ...prev, [index]: true }))
      }
    })
  }, [])

  // Function to handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>, index: number) => {
    // Set a default fallback image URL
    const fallbackImage = "/images/robot-mower.jpg"

    // Update the image source
    e.currentTarget.src = neighborhoods[index].fallbackImage || fallbackImage

    // Mark this image as failed in state
    setFailedImages((prev) => ({ ...prev, [index]: true }))
  }

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || phone.length < 10) return

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/capture-phone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          source: "neighborhoods-page",
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setPhone("")
      }
    } catch (error) {
      console.error("Error submitting phone:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-night-900 pt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold mb-4">
            RICHMOND DOMINATION
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase">
            LAWN MOWING NEAR ME IN RICHMOND NEIGHBORHOODS
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            LOOKING FOR AFFORDABLE LAWN MOWING NEAR YOU? We offer the BEST lawn mowing service in Richmond neighborhoods
            with SAME-DAY setup available. If you don't see your area, TEXT US NOW and we'll put you at the TOP of our
            waitlist!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {neighborhoods.map((neighborhood, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-night-800 rounded-lg overflow-hidden group border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]"
            >
              <div className="h-48 relative">
                <img
                  src={neighborhoods[index].image || "/placeholder.svg"}
                  alt={neighborhood.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => handleImageError(e, index)}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                  <h3 className="text-xl font-bold text-white">{neighborhood.name.toUpperCase()}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4 line-clamp-3">{neighborhood.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {neighborhood.services.slice(0, 3).map((service, i) => (
                    <span key={i} className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold">
                      {service}
                    </span>
                  ))}
                  {neighborhood.services.length > 3 && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-bold">
                      +{neighborhood.services.length - 3} more
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold"
                  asChild
                >
                  <Link href={`/neighborhoods/${neighborhood.slug}`}>
                    CLAIM YOUR SPOT <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Types Section */}
        <div className="mt-16 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8 text-center uppercase">
            LAWN MOWING SERVICES NEAR YOU
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Regular Service */}
            <div className="bg-night-800 p-6 rounded-lg border-2 border-yellow-500">
              <h3 className="text-2xl font-bold text-white mb-4">REGULAR LAWN MOWING</h3>
              <p className="text-gray-300 mb-4">
                Our robot mowers provide DAILY lawn maintenance for a perfectly manicured yard all the time. No more
                waiting for weekly service!
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Daily mowing at the perfect height</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Prices from just $79/month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Available in all Richmond neighborhoods</span>
                </li>
              </ul>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
                <Link href="/purchase/smart-yard">GET STARTED</Link>
              </Button>
            </div>

            {/* One-Time Service */}
            <div className="bg-night-800 p-6 rounded-lg border-2 border-yellow-500">
              <h3 className="text-2xl font-bold text-white mb-4">SAME-DAY LAWN MOWING</h3>
              <p className="text-gray-300 mb-4">
                Need your lawn mowed TODAY? We offer SAME-DAY setup of our robot mowers in most Richmond neighborhoods!
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Quick same-day installation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">One-time setup fee of $249</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Perfect for real estate showings and events</span>
                </li>
              </ul>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold" asChild>
                <Link href="/purchase/smart-yard">BOOK NOW</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500 p-8 rounded-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-black text-yellow-500 rounded-full text-sm font-bold mb-4">
                DON'T MISS OUT
              </span>
              <h2 className="text-3xl font-black text-black mb-4 uppercase">NOT SEEING YOUR NEIGHBORHOOD?</h2>
              <p className="text-lg text-black mb-6 font-medium">
                STOP WAITING! We're expanding FAST and your neighborhood could be NEXT. Text us RIGHT NOW or drop your
                number below. We'll put you at the TOP of our waitlist!
              </p>

              {!isSubmitted ? (
                <form onSubmit={handlePhoneSubmit} className="flex gap-2">
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white border-black text-black placeholder:text-gray-500"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-black hover:bg-gray-800 text-yellow-500 font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "SENDING..." : "SUBMIT"}
                  </Button>
                </form>
              ) : (
                <div className="bg-black text-yellow-500 p-4 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <p className="font-bold">THANKS! We'll text you ASAP about availability.</p>
                  </div>
                </div>
              )}

              <div className="mt-4">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-yellow-500 font-bold" asChild>
                  <a href="sms:8045739825" className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    TEXT US NOW: 804-573-9825
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <img
                src="https://www.bestmow.com/cdn/shop/files/bestmow_robot_mower_slid_2.webp?v=1737858458"
                alt="SweatyJob AI Mower"
                className="w-full rounded-lg border-4 border-black"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold mb-4">
            THE RICHMOND TAKEOVER
          </span>
          <h2 className="text-4xl font-black text-white mb-4 uppercase">WHY WE'RE CRUSHING IT IN RICHMOND</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI mowers are DOMINATING Richmond's neighborhoods. We're not just cutting grass - we're REVOLUTIONIZING
            how Richmond homeowners think about lawn care!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-night-800 p-6 rounded-lg border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Historic Areas</h3>
              <p className="text-gray-300">
                Our SILENT mowers preserve Richmond's historic charm while delivering PERFECT lawns. No noise, no
                emissions, just RESULTS!
              </p>
            </div>
            <div className="bg-night-800 p-6 rounded-lg border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Urban Properties</h3>
              <p className="text-gray-300">
                Small urban lot? PERFECT! Our AI mowers navigate tight spaces with PRECISION that human mowers can't
                match!
              </p>
            </div>
            <div className="bg-night-800 p-6 rounded-lg border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)]">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 uppercase">Suburban Homes</h3>
              <p className="text-gray-300">
                STOP wasting your weekends! Our mowers work DAILY to keep your suburban property looking IMMACULATE
                24/7!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-night-800 p-8 rounded-lg border-2 border-yellow-500">
          <h3 className="text-2xl font-black text-white mb-4 text-center uppercase">THE OPPORTUNITY IS NOW</h3>
          <p className="text-lg text-center text-gray-300 mb-6">
            While your neighbors are STILL pushing old gas mowers in the Richmond heat, YOU can be relaxing on your deck
            enjoying your PERFECT lawn. Don't wait - the EARLY ADOPTERS win!
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-black text-lg" asChild>
              <Link href="/book">
                GET STARTED TODAY <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Import the Input component at the top
import { Input } from "@/components/ui/input"
