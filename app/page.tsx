"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Clock, Zap, DollarSign, ThumbsUp, CheckCircle, CheckCircle2, X, Flame, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
// Import the new LawnComparisonSection component
import { TechSpecsSection } from "@/components/tech-specs-section"
import {
  LawnMowingServiceSchema,
  LawnMowingFAQSchema,
  LawnMowingLocalBusinessSchema,
  LawnMowingHowToSchema,
  RobotMowerProductSchema,
  LawnMowingBreadcrumbSchema,
  LawnMowingVideoSchema,
} from "@/app/schema/lawn-mowing-schema"
import { VideoModal } from "@/components/video-modal"

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [showUrgencyBanner, setShowUrgencyBanner] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const productImages = [
    "https://sjc.microlink.io/ig0XUyoCut0OFQNOPrbB0OvmMhNnJZYdHim0PJaD2frKiA-jRrBXZqxFFzQsygkv9y0bokg4Y3CU9RX9mUJO3Q.jpeg", // bestmow-robot-mower-perfect-lawn.png
    "https://www.bestmow.com/cdn/shop/files/9a75df4f373a7569536ca569b911255b.png?v=1735137115", // bestmow-robot-mower-tech.png
    "https://www.bestmow.com/cdn/shop/files/WechatIMG92.png?v=1734451473", // bestmow-robot-mower-yellow.png
    "https://www.bestmow.com/cdn/shop/files/a6a5046a0f38ef6c041297b0845d7f87.png?v=1735137310", // bestmow-robot-mower-garden.png
    "https://www.bestmow.com/cdn/shop/files/20250227-195829.937-5_7a89b793-1d08-4a00-8ddc-fdda6efd415b.webp?v=1741178190", // bestmow-robot-mower-closeup.webp
  ]

  useEffect(() => {
    setIsClient(true)

    // Show urgency banner after 10 seconds
    const bannerTimer = setTimeout(() => {
      setShowUrgencyBanner(true)
    }, 10000)

    // Rotate hero images every 5 seconds
    const imageRotationTimer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length)
    }, 5000)

    return () => {
      clearTimeout(bannerTimer)
      clearInterval(imageRotationTimer)
    }
  }, [])

  const handleCallNow = () => {
    window.location.href = "/purchase/smart-yard"
  }

  return (
    <main className="bg-black text-white">
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LawnMowingServiceSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LawnMowingFAQSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LawnMowingLocalBusinessSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LawnMowingHowToSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(RobotMowerProductSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LawnMowingBreadcrumbSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LawnMowingVideoSchema) }} />
      {/* Exit Intent Popup */}
      <ExitIntentPopup />
      {/* Urgency Banner */}
      {showUrgencyBanner && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-yellow-500 text-black py-3 z-40 shadow-lg"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-2 sm:mb-0">
              <Flame className="h-6 w-6 mr-2 animate-pulse" />
              <p className="font-bold text-lg">LIMITED SPOTS AVAILABLE THIS MONTH!</p>
            </div>
            <Button
              onClick={() => (window.location.href = "/purchase/smart-yard")}
              className="bg-black text-yellow-500 hover:bg-gray-900 font-bold"
            >
              CLAIM YOUR SPOT NOW
            </Button>
          </div>
        </motion.div>
      )}
      {/* Hero Section - UPDATED HEADLINE */}
      <section className="relative min-h-screen flex items-center overflow-hidden border-b-4 border-yellow-500 pt-24">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="h-full w-full"
          >
            <Image
              src={productImages[currentImageIndex] || "/placeholder.svg"}
              alt="SmartYard robotic mower in action"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-16 -left-8 text-yellow-500 text-9xl font-black opacity-10">79</div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-none">
                LAWN MOWING <span className="text-yellow-500">SERVICE</span> NEAR ME
              </h1>

              <div className="bg-yellow-500 h-2 w-32 mb-8"></div>

              <p className="text-xl md:text-2xl font-bold mb-8 text-gray-300">
                Richmond's #1 robot lawn mowing service. Just $79/month. Same-day setup available. Why repair your old
                mower when you can upgrade to daily robot mowing?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={() => (window.location.href = "/purchase/smart-yard")}
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md flex items-center gap-2"
                >
                  GET STARTED NOW <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsVideoModalOpen(true)}
                  className="border-2 border-yellow-500 bg-black hover:bg-black/80 text-yellow-500 text-lg font-bold px-8 py-6 rounded-md relative overflow-hidden group"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                    WATCH THE DEMO
                  </span>
                  <span className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>No contracts</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>100% satisfaction</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Value Prop Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              THE <span className="text-yellow-500">BRUTAL TRUTH</span> ABOUT GRASS LAWN MOWING
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You're spending 1-2 hours every week on grass lawn mowing, plus more time on edging, fertilizing, and
              cleanup. That's 35+ hours during Richmond's 6-month mowing season. What could you do with that extra time?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 - UPDATED WITH KEYWORD */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">HOW ROBOT MOWERS WORK</h3>
              <p className="text-gray-300">
                SmartYard robots use advanced GPS and smart mapping technology to know exactly where to cut. They work
                24/7/365 while you focus on what matters in RVA.
              </p>
            </div>

            {/* Value Prop 2 - UPDATED WITH KEYWORD */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">DAILY GRASS CUTTING</h3>
              <p className="text-gray-300">
                Your lawn gets cut DAILY, not weekly. Robot mowers should cut grass every day for the healthiest lawn
                possible.
              </p>
            </div>

            {/* Value Prop 3 - UPDATED WITH KEYWORD */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AFFORDABLE LAWN MOWING</h3>
              <p className="text-gray-300">
                Just $79/month for perfect lawn + 35+ hours of your time back = the best investment you'll make this
                season.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-bold mb-8">
              <span className="text-yellow-500">FACT:</span> Our Richmond customers say they'd never go back to
              traditional mowing.
            </p>

            {/* Animated Tilting Button */}
            <motion.button
              className="mt-8 bg-yellow-500 text-black font-black px-6 py-3 rounded-md shadow-lg text-xl"
              initial={{ rotate: 0 }}
              whileInView={{
                rotate: [0, 2, -2, 0],
                transition: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 2,
                },
              }}
              onClick={() => (window.location.href = "/purchase/smart-yard")}
            >
              STOP THINKING. START DOING.
            </motion.button>
          </div>
        </div>
      </section>
      {/* Lawn Mower Repair Alternative Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              NEED <span className="text-yellow-500">LAWN MOWER REPAIR</span> NEAR YOU?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why repair your old mower when you can upgrade to our daily robot mowing service? No more repairs, gas, or
              maintenance headaches.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500">
              <h3 className="text-2xl font-bold mb-4">FORGET LAWN MOWER REPAIRS FOREVER</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>No more expensive repair bills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>No more buying gas or oil</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>All maintenance included in your $79/month</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Free replacement if anything ever breaks</span>
                </li>
              </ul>
              <Button
                onClick={() => (window.location.href = "/purchase/smart-yard")}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
              >
                UPGRADE TO ROBOT MOWING
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Robot Mower Service Highlight */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              REVOLUTIONARY <span className="text-yellow-500">LAWN MOWING ROBOT</span> SERVICE
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of lawn care with our daily robotic mowing service. Perfect results guaranteed.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500">
              <h3 className="text-2xl font-bold mb-4">AI ROBOT MOWING SERVICE</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Daily mowing for perfect lawn height</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>No noise, no emissions, no hassle</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Just $79/month subscription</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span>Serving all Richmond neighborhoods</span>
                </li>
              </ul>
              <Button
                onClick={() => (window.location.href = "/purchase/smart-yard")}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
              >
                GET STARTED
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Perfect Lawn Showcase */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              PERFECT <span className="text-yellow-500">RESULTS</span> EVERY DAY
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This is what your lawn looks like with daily SmartYard maintenance. Notice the perfect lines and
              carpet-like texture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500">
              <Image
                src="https://sjc.microlink.io/ig0XUyoCut0OFQNOPrbB0OvmMhNnJZYdHim0PJaD2frKiA-jRrBXZqxFFzQsygkv9y0bokg4Y3CU9RX9mUJO3Q.jpeg"
                alt="Perfect lawn maintained by SmartYard"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500">
              <Image
                src="https://www.bestmow.com/cdn/shop/files/a6a5046a0f38ef6c041297b0845d7f87.png?v=1735137310"
                alt="SmartYard robot mower in garden setting"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Daily micro-cutting creates a denser, healthier lawn that's more resistant to weeds, drought, and disease.
            </p>
            <Button
              onClick={() => (window.location.href = "/purchase/smart-yard")}
              size="lg"
              className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
            >
              GET YOUR PERFECT LAWN <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Tech Specs Section - Now using the component */}
      <TechSpecsSection />
      {/* Smart Technology Section with Video Demo */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              SMART <span className="text-yellow-500">TECHNOLOGY</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced sensors and AI navigation make SmartYard the smartest mower on the market.
            </p>
          </div>

          {/* Video Demo Section */}
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mb-16 bg-gray-900 rounded-xl overflow-hidden border-2 border-yellow-500">
            <div className="md:w-1/2 p-8">
              <div
                className="relative h-64 md:h-80 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full aspect-video"
                  poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/robot-mower-in-action-cCcyAbdw1Zfz3UQ5FQSyM12UoF26O9.png"
                >
                  <source
                    src="https://www.youtube.com/embed/Qdj6_J33Ags?si=iBYJs-8HTRhslQ_L" // Placeholder - replace with a working video URL
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="md:w-1/2 p-8 text-right">
              <h3 className="text-2xl font-bold mb-4">SEE HOW IT CUTS WITH PRECISION</h3>
              <p className="text-gray-300 mb-6">
                Watch our demo video to see the SmartYard in action. Experience the precision cutting technology that
                delivers a perfect lawn every day.
              </p>
              <Button
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
              >
                WATCH DEMO <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div className="h-48 relative">
                <Image
                  src="https://sjc.microlink.io/lfuyLy7yP5QR9fMvDMhiyc_WE6Y9QteEUmteWGjcBERGRc8gYeTFHQJoN4aUTrVKX4OtgnJxYesP96tyGtiH9w.jpeg" // Direct URL to bestmow-robot-mower-sensor.jpeg
                  alt="SmartYard sensor technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Advanced Sensors</h3>
                <p className="text-gray-400">Multi-point sensors detect obstacles and adjust path in real-time.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div className="h-48 relative">
                <Image
                  src="https://www.bestmow.com/cdn/shop/files/WechatIMG92.png?v=1734451473"
                  alt="SmartYard yellow wheel design"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">All-Terrain Design</h3>
                <p className="text-gray-400">Special wheels and motor design handle slopes up to 35 degrees.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
              <div className="h-48 relative">
                <Image
                  src="https://www.bestmow.com/cdn/shop/files/20250227-195829.937-5_7a89b793-1d08-4a00-8ddc-fdda6efd415b.webp?v=1741178190"
                  alt="SmartYard closeup detail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Precision Cutting</h3>
                <p className="text-gray-400">Triple-blade system ensures perfect cut height and mulching.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() => (window.location.href = "/purchase/smart-yard")}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
            >
              SEE IT IN ACTION <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Comparison Section */}
      <section className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              OLD WAY VS <span className="text-yellow-500">SMART WAY</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              This isn't even a fair fight. See why Richmond homeowners are making the switch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Column */}
            <div className="bg-gray-800 rounded-lg p-8 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white font-bold py-1 px-4 text-sm">OLD SCHOOL</div>
              <h3 className="text-2xl font-bold mb-6 text-white">DO-IT-YOURSELF LAWN CARE</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Weekly mowing by you</p>
                    <p className="text-gray-400 text-sm">
                      Your grass grows every day. Weekly cuts = always playing catch-up
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Weather dependent</p>
                    <p className="text-gray-400 text-sm">Rain = delays, rescheduling, and inconsistent results</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Noisy and disruptive</p>
                    <p className="text-gray-400 text-sm">Say goodbye to peaceful weekends in your Fan District home</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Equipment maintenance</p>
                    <p className="text-gray-400 text-sm">Dealing with gas, oil, repairs, and storage issues</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Inconsistent results</p>
                    <p className="text-gray-400 text-sm">Uneven cutting and varying grass height</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-gray-700 rounded-lg">
                <p className="text-xl font-bold text-white">COST: YOUR TIME + EQUIPMENT</p>
                <p className="text-gray-400">35+ hours per season of your life wasted</p>
              </div>
            </div>

            {/* Robot Column */}
            <div className="bg-gray-800 rounded-lg p-8 border-2 border-yellow-500 relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 text-sm">
                SMART MOVE
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">SMART ROBOT SERVICE</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1">
                    <ThumbsUp className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Daily maintenance</p>
                    <p className="text-gray-400 text-sm">Your lawn is cut EVERY DAY for consistent perfection</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <ThumbsUp className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Weather-adaptive</p>
                    <p className="text-gray-400 text-sm">
                      Smart tech adjusts to Richmond's weather patterns automatically
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <ThumbsUp className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Whisper-quiet operation</p>
                    <p className="text-gray-400 text-sm">So quiet you won't even notice it's working</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <ThumbsUp className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Zero scheduling</p>
                    <p className="text-gray-400 text-sm">Set it once and forget it - it just works</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <ThumbsUp className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Healthier, denser turf</p>
                    <p className="text-gray-400 text-sm">Daily micro-cutting creates a carpet-like lawn</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-yellow-500 rounded-lg">
                <p className="text-xl font-bold text-black">COST: JUST $79/month</p>
                <p className="text-yellow-900">Plus optional one-time $249 installation</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() => (window.location.href = "/purchase/smart-yard")}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
            >
              MAKE THE SMART CHOICE <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      {/* Richmond-Specific Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              BUILT FOR <span className="text-yellow-500">RICHMOND</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our team knows Richmond's unique lawns and neighborhoods. From The Fan to Church Hill, we've got you
              covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Neighborhood 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://homesweetrva.com/wp-content/uploads/2021/12/the-fan-community-1024x683.jpg"
                  alt="The Fan District"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">The Fan</h3>
                <p className="text-gray-400">Perfect for historic Fan District homes with unique lawn layouts.</p>
              </div>
            </div>

            {/* Neighborhood 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://imagescdn.homes.com/i2/kSnu8UIFw1AVGCkh3r1Roh7j9bJPVHHy2-ku_UYjoXA/117/church-hill-richmond-va.jpg?p=1"
                  alt="Church Hill"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Church Hill</h3>
                <p className="text-gray-400">
                  Our robots handle Church Hill's slopes and historic properties with ease.
                </p>
              </div>
            </div>

            {/* Neighborhood 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-48 relative">
                <Image
                  src="https://static.wixstatic.com/media/910800_c0b4ff263af14dd6996191c04a4575db~mv2.jpg/v1/fill/w_640,h_538,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/910800_c0b4ff263af14dd6996191c04a4575db~mv2.jpg"
                  alt="Carytown"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Carytown</h3>
                <p className="text-gray-400">Serving Carytown's unique residential properties with precision care.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/neighborhoods">
              <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
                SEE ALL RICHMOND NEIGHBORHOODS
              </Button>
            </Link>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              HOW IT <span className="text-yellow-500">ACTUALLY WORKS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No complicated BS. We make it simple. Here's the process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                1
              </div>
              <div className="bg-gray-800 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">QUICK SETUP</h3>
                <p className="text-gray-300">
                  We install the system in under 2 hours. Optional one-time $249 fee. We handle everything.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                2
              </div>
              <div className="bg-gray-800 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">SET & FORGET</h3>
                <p className="text-gray-300">
                  Your robot mower works automatically. You control everything from a simple app if you want to.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                3
              </div>
              <div className="bg-gray-800 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">ENJOY LIFE</h3>
                <p className="text-gray-300">
                  Reclaim your time while enjoying a perfect lawn. Cancel anytime if you're not 100% satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              STRAIGHT-UP <span className="text-yellow-500">PRICING</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">No hidden fees. No BS. Just results.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main pricing */}
            <div className="bg-gray-800 rounded-lg p-8 border-4 border-yellow-500 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-2 px-8 transform rotate-45 translate-x-8 translate-y-8">
                BEST VALUE
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-3xl font-black mb-2">MONTHLY SUBSCRIPTION</h3>
                  <p className="text-xl text-gray-300 mb-4 md:mb-0">Everything you need for the perfect lawn</p>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-6xl font-black text-yellow-500">$79</div>
                  <p className="text-gray-400">Per month</p>
                </div>
              </div>

              <div className="h-px bg-gray-700 my-8"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-yellow-500 mb-4 text-xl">WHAT YOU GET:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 4L4.5 7.5L11 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">SmartYard T100 robot mower</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 4L4.5 7.5L11 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">Daily lawn maintenance</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 4L4.5 7.5L11 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">Maintenance & support</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-yellow-500 mb-4 text-xl">ALSO INCLUDED:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 4L4.5 7.5L11 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">Software updates</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 4L4.5 7.5L11 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">Seasonal adjustments</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 4L4.5 7.5L11 1"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className="text-white">Mobile app access</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  onClick={() => (window.location.href = "/purchase/smart-yard")}
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-black px-8 py-6 rounded-md"
                >
                  GET STARTED NOW
                </Button>
                <p className="mt-4 text-gray-400">No contracts. Cancel anytime.</p>
              </div>
            </div>

            {/* Optional installation */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-700 p-3 rounded-full mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">OPTIONAL PROFESSIONAL INSTALLATION</h3>
                    <p className="text-gray-400">One-time setup by our Richmond-based technicians</p>
                  </div>
                </div>
                <div className="text-center md:text-right mt-4 md:mt-0">
                  <div className="text-3xl font-bold text-white">$249</div>
                  <p className="text-gray-500">One-time fee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lawn Mower Rentals Alternative Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              FORGET <span className="text-yellow-500">LAWN MOWER RENTALS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why rent a lawn mower for $40-80 per day when you can have daily robot mowing for just $79 per month?
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rental Column */}
              <div className="bg-gray-800 rounded-lg p-8 relative">
                <div className="absolute top-0 right-0 bg-red-500 text-white font-bold py-1 px-4 text-sm">OLD WAY</div>
                <h3 className="text-2xl font-bold mb-6 text-white">LAWN MOWER RENTALS</h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1">
                      <X className="h-5 w-5 text-red-500 mr-3" />
                    </div>
                    <div>
                      <p className="font-bold">$40-80 per day</p>
                      <p className="text-gray-400 text-sm">Expensive daily rates add up quickly</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1">
                      <X className="h-5 w-5 text-red-500 mr-3" />
                    </div>
                    <div>
                      <p className="font-bold">Pickup & return hassle</p>
                      <p className="text-gray-400 text-sm">Wasting time driving to rental stores</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1">
                      <X className="h-5 w-5 text-red-500 mr-3" />
                    </div>
                    <div>
                      <p className="font-bold">You still do all the work</p>
                      <p className="text-gray-400 text-sm">Hours of your weekend spent pushing a heavy mower</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Robot Column */}
              <div className="bg-gray-800 rounded-lg p-8 border-2 border-yellow-500 relative">
                <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 text-sm">
                  SMART CHOICE
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">ROBOT LAWN MOWING</h3>

                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mt-1">
                      <ThumbsUp className="h-5 w-5 text-yellow-500 mr-3" />
                    </div>
                    <div>
                      <p className="font-bold">Just $79/month</p>
                      <p className="text-gray-400 text-sm">Less than the cost of two rental days</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1">
                      <ThumbsUp className="h-5 w-5 text-yellow-500 mr-3" />
                    </div>
                    <div>
                      <p className="font-bold">No pickup or return</p>
                      <p className="text-gray-400 text-sm">We deliver and install everything for you</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1">
                      <ThumbsUp className="h-5 w-5 text-yellow-500 mr-3" />
                    </div>
                    <div>
                      <p className="font-bold">Zero work for you</p>
                      <p className="text-gray-400 text-sm">Reclaim your weekends while your lawn stays perfect</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                onClick={() => (window.location.href = "/purchase/smart-yard")}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
              >
                BETTER THAN RENTALS <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Wet Grass Mowing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              MOWING <span className="text-yellow-500">WET GRASS</span> PROBLEMS?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Traditional mowers struggle with wet grass, causing clumping and damage. Our robot mowers are designed to
              handle Richmond's rainy days.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8 border-2 border-yellow-500">
              <h3 className="text-2xl font-bold mb-6">HOW OUR ROBOTS HANDLE WET GRASS</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold">Weather-adaptive technology</p>
                        <p className="text-gray-400">Sensors detect moisture levels and adjust cutting patterns</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold">Daily micro-cutting</p>
                        <p className="text-gray-400">Small clippings don't clump, even when wet</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold">Rain-delay programming</p>
                        <p className="text-gray-400">Automatically pauses during heavy rain, resumes when optimal</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                      <div>
                        <p className="font-bold">Special blade design</p>
                        <p className="text-gray-400">Cuts cleanly through damp grass without tearing</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  onClick={() => (window.location.href = "/purchase/smart-yard")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                >
                  NEVER WORRY ABOUT WET GRASS AGAIN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Robot Mower Comparison Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              HOW WE <span className="text-yellow-500">COMPARE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how SmartYard stacks up against popular brands like Husqvarna, GARDENA, and WORX
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-800">
                  <th className="p-4 text-left border-b border-gray-700">Features</th>
                  <th className="p-4 text-center border-b border-gray-700">
                    <span className="text-yellow-500 font-bold">SmartYard</span>
                  </th>
                  <th className="p-4 text-center border-b border-gray-700">Husqvarna</th>
                  <th className="p-4 text-center border-b border-gray-700">GARDENA</th>
                  <th className="p-4 text-center border-b border-gray-700">WORX</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-900">
                  <td className="p-4 border-b border-gray-800">Upfront Cost</td>
                  <td className="p-4 text-center border-b border-gray-800 text-yellow-500 font-bold">$0</td>
                  <td className="p-4 text-center border-b border-gray-800">$1,500-$3,500</td>
                  <td className="p-4 text-center border-b border-gray-800">$900-$2,000</td>
                  <td className="p-4 text-center border-b border-gray-800">$800-$1,500</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="p-4 border-b border-gray-800">Monthly Cost</td>
                  <td className="p-4 text-center border-b border-gray-800 text-yellow-500 font-bold">$79</td>
                  <td className="p-4 text-center border-b border-gray-800">$0 + maintenance</td>
                  <td className="p-4 text-center border-b border-gray-800">$0 + maintenance</td>
                  <td className="p-4 text-center border-b border-gray-800">$0 + maintenance</td>
                </tr>
                <tr className="bg-gray-900">
                  <td className="p-4 border-b border-gray-800">Professional Installation</td>
                  <td className="p-4 text-center border-b border-gray-800 text-yellow-500 font-bold">Optional $249</td>
                  <td className="p-4 text-center border-b border-gray-800">$300-$500 extra</td>
                  <td className="p-4 text-center border-b border-gray-800">$300-$500 extra</td>
                  <td className="p-4 text-center border-b border-gray-800">DIY or $200-$400</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <Button
              onClick={() => (window.location.href = "/purchase/smart-yard")}
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </section>
      {/* Video Modal */}
      {isVideoModalOpen && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl="https://www.bestmow.com/cdn/shop/videos/c/vp/962096c1d1224dc78b09087c9a8c7ef8/962096c1d1224dc78b09087c9a8c7ef8.HD-1080p-7.2Mbps-44563247.mp4?v=0"
          title="SmartYard Robot Mower Demo"
        />
      )}
    </main>
  )
}
