"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Play, Zap, Shield, Battery } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { VideoModal } from "@/components/video-modal"

export default function RobotMowersClientPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const videoUrl =
    "https://www.bestmow.com/cdn/shop/videos/c/vp/962096c1d1224dc78b09087c9a8c7ef8/962096c1d1224dc78b09087c9a8c7ef8.HD-1080p-7.2Mbps-44563247.mp4?v=0"

  return (
    <main className="bg-black text-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "SmartYard Robot Lawn Mower",
            description: "Experience the future of lawn care with our SmartYard AI-powered robot mowers.",
            brand: {
              "@type": "Brand",
              name: "SmartYard",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            speakable: {
              "@type": "SpeakableSpecification",
              cssSelector: [".speakable-content"],
            },
            url: "https://www.sweatyjob.com/robots",
          }),
        }}
      />

      {/* Video Modal */}
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoUrl={videoUrl} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b-4 border-yellow-500 pt-24">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/robot-lawn-mower.png"
            alt="Advanced robot lawn mower technology"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="relative speakable-content">
              <div className="absolute -top-16 -left-8 text-yellow-500 text-9xl font-black opacity-10">AI</div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-none">
                ROBOT <span className="text-yellow-500">LAWN MOWING</span> SERVICE
              </h1>

              <div className="bg-yellow-500 h-2 w-32 mb-8"></div>

              <p className="text-xl md:text-2xl font-bold mb-8 text-gray-300">
                Experience the future of lawn care with our SmartYard AI-powered robot mowers. Daily cutting, perfect
                results, no work for you. Starting at $79/month in Richmond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md flex items-center gap-2"
                  asChild
                >
                  <Link href="/purchase/smart-yard">
                    GET YOUR SMARTYARD <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-yellow-500 bg-black hover:bg-black/80 text-yellow-500 text-lg font-bold px-8 py-6 rounded-md relative overflow-hidden group"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center">
                    <Play className="mr-2 h-5 w-5" /> WATCH DEMO VIDEO
                  </span>
                  <span className="absolute inset-0 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Daily mowing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>AI navigation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Weather adaptive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages Section */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Lawn Mowing Page Link */}
              <Link href="/robots/lawn-mowing" className="block">
                <div className="bg-gray-800 rounded-lg p-6 h-full border-l-4 border-yellow-500 hover:bg-gray-700 transition-colors">
                  <h3 className="text-xl font-bold mb-2">Lawn Mowing Service</h3>
                  <p className="text-gray-300">
                    Learn more about our daily robot lawn mowing service and how it can transform your lawn care
                    routine.
                  </p>
                  <div className="mt-4 flex items-center text-yellow-500">
                    <span className="font-bold">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>

              {/* Lawn Mower Repair Alternative Page Link */}
              <Link href="/robots/lawn-mower-repair" className="block">
                <div className="bg-gray-800 rounded-lg p-6 h-full border-l-4 border-yellow-500 hover:bg-gray-700 transition-colors">
                  <h3 className="text-xl font-bold mb-2">Lawn Mower Repair Alternative</h3>
                  <p className="text-gray-300">
                    Why repair your old mower when you can upgrade to our SmartYard robot mowing service?
                  </p>
                  <div className="mt-4 flex items-center text-yellow-500">
                    <span className="font-bold">Learn More</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How Robot Mowers Work */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 speakable-content">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              HOW <span className="text-yellow-500">SMARTYARD WORKS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology that delivers perfect results every day, automatically.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500 mb-8">
                <Image
                  src="/robot-mower-action.png"
                  alt="Robot mower in action"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500">
                <Image
                  src="/robot-mower-closeup.png"
                  alt="Robot mower closeup"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Zap className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">AI NAVIGATION</h3>
                </div>
                <p className="text-gray-300 ml-16">
                  Advanced RTK positioning and vision technology create a virtual map of your lawn - no boundary wires
                  needed. The robot navigates efficiently, avoiding obstacles and ensuring complete coverage whether you
                  have a small garden or a large 2-acre property. Setup is simple compared to traditional robot
                  lawnmowers that require wire installation.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Shield className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">SAFETY FEATURES</h3>
                </div>
                <p className="text-gray-300 ml-16">
                  Multiple safety sensors detect obstacles, pets, and people. The blades automatically stop if the mower
                  is lifted or tilted, ensuring complete safety.
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <Battery className="h-6 w-6 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold">SELF-CHARGING</h3>
                </div>
                <p className="text-gray-300 ml-16">
                  When battery runs low, the robot automatically returns to its charging station. Once recharged, it
                  resumes mowing exactly where it left off.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md self-start"
                onClick={() => setIsVideoModalOpen(true)}
              >
                SEE IT IN ACTION <Play className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 speakable-content">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              BENEFITS OF <span className="text-yellow-500">SMARTYARD</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why Richmond homeowners are switching to robot lawn mowing service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Benefit 1 */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <path d="M12 2v20" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">SAVE MONEY</h3>
              <p className="text-gray-300">
                No equipment to buy or maintain. No gas, oil, or repair costs. Just $79/month for complete lawn care.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">SAVE TIME</h3>
              <p className="text-gray-300">
                Reclaim 35+ hours each season. No more pushing a mower in Richmond's summer heat.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">BETTER RESULTS</h3>
              <p className="text-gray-300">
                Daily cutting creates a denser, healthier lawn that's more resistant to weeds and drought.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
            {/* Benefit 4 */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">ECO-FRIENDLY</h3>
              <p className="text-gray-300">
                Zero emissions, no pollution, and 90% less energy usage compared to gas-powered mowers.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">WHISPER QUIET</h3>
              <p className="text-gray-300">
                So quiet you can run it at night. No more disturbing neighbors with loud mowing.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-black"
                >
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx="17" cy="17" r="3" />
                  <circle cx="7" cy="7" r="3" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">SMART CONTROL</h3>
              <p className="text-gray-300">
                Monitor and control your robot mower from your smartphone. Adjust settings from anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">EXPERIENCE THE SMARTYARD DIFFERENCE</h2>
            <p className="text-2xl mb-8 text-black/80 font-bold">
              Join other Richmond homeowners who've upgraded to robot mowing.
            </p>

            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-yellow-500 text-xl font-black px-8 py-6 rounded-md"
              asChild
            >
              <Link href="/purchase/smart-yard">
                GET YOUR SMARTYARD NOW <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="mt-6 text-black/80 font-bold">
              Limited spots available for Richmond this month. Don't miss out.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
