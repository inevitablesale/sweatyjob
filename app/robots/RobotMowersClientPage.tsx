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
            src="https://www.bestmow.com/cdn/shop/files/9a75df4f373a7569536ca569b911255b.png?v=1735137115"
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
                  src="https://sjc.microlink.io/ig0XUyoCut0OFQNOPrbB0OvmMhNnJZYdHim0PJaD2frKiA-jRrBXZqxFFzQsygkv9y0bokg4Y3CU9RX9mUJO3Q.jpeg"
                  alt="Robot mower in action"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl border-2 border-yellow-500">
                <Image
                  src="https://www.bestmow.com/cdn/shop/files/20250227-195829.937-5_7a89b793-1d08-4a00-8ddc-fdda6efd415b.webp?v=1741178190"
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
                  needed. The robot navigates efficiently, avoiding obstacles and ensuring complete coverage.
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

      {/* Popular Brands Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              POPULAR ROBOT MOWER <span className="text-yellow-500">BRANDS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore leading manufacturers in the robot lawn mowing industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Husqvarna */}
            <div className="bg-gray-800 rounded-lg p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/husqvarna-automower-B2aRGAhNVhVWrtTXEIIr7ZdlXltt7x.png"
                alt="Husqvarna Automower"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white text-center">Husqvarna</h3>
              <p className="text-gray-300 text-sm text-center">
                Known for their Automower series, Husqvarna offers reliable and high-performance robotic mowers suitable
                for various lawn sizes.
              </p>
            </div>

            {/* WORX */}
            <div className="bg-gray-800 rounded-lg p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/worx-landroid-fvycbYSBHByzdi4FM1NYpKzC7xSLv2.png"
                alt="WORX Landroid"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white text-center">WORX</h3>
              <p className="text-gray-300 text-sm text-center">
                WORX Landroid mowers are popular for their customizable features and affordability, making them a great
                option for homeowners.
              </p>
            </div>

            {/* Robomow */}
            <div className="bg-gray-800 rounded-lg p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/robomow-WeGJLEXLmcWHhzu061PY2dibaB12KZ.png"
                alt="Robomow"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white text-center">Robomow</h3>
              <p className="text-gray-300 text-sm text-center">
                Robomow specializes in powerful robotic mowers designed for larger lawns, featuring edge mowing
                capabilities for a clean finish.
              </p>
            </div>

            {/* Segway Navimow */}
            <div className="bg-gray-800 rounded-lg p-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/images/segway-navimow-IjaiCsinYFL2d0mnDIXPzvpV69fB1a.png"
                alt="Segway Navimow"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-white text-center">Segway Navimow</h3>
              <p className="text-gray-300 text-sm text-center">
                Segway Navimow stands out with its advanced GPS navigation and virtual boundary settings, offering
                precision and ease of use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              ROBOT MOWER <span className="text-yellow-500">TECH SPECS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced technology that delivers perfect results every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">PERFORMANCE</h3>

              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Cutting Width</span>
                  <span className="text-yellow-500">8.7 inches</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Cutting Height</span>
                  <span className="text-yellow-500">1-4 inches (adjustable)</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Maximum Slope</span>
                  <span className="text-yellow-500">25° (46% slope)</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Working Area Capacity</span>
                  <span className="text-yellow-500">Up to 1.5 acres</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Mowing Time</span>
                  <span className="text-yellow-500">210 minutes per charge</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">TECHNOLOGY</h3>

              <ul className="space-y-4">
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Navigation</span>
                  <span className="text-yellow-500">RTK & Vision (No boundary wires)</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Sensors</span>
                  <span className="text-yellow-500">Camera & Collision Detection</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Weather Resistance</span>
                  <span className="text-yellow-500">IP66 (Waterproof)</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Connectivity</span>
                  <span className="text-yellow-500">Wi-Fi & Bluetooth</span>
                </li>
                <li className="flex justify-between items-center border-b border-gray-700 pb-2">
                  <span className="font-bold">Control</span>
                  <span className="text-yellow-500">Smartphone App</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* No Boundary Wire Technology */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              ROBOT MOWERS <span className="text-yellow-500">WITHOUT WIRES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SmartYard uses advanced technology to eliminate the need for boundary wires
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">WIRE-FREE ADVANTAGES</h3>

                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">No Wire Installation</h4>
                      <p className="text-gray-300">
                        No need to bury wires around your lawn perimeter or obstacles. Installation is faster and
                        cleaner.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">No Wire Breaks</h4>
                      <p className="text-gray-300">
                        Traditional boundary wires can break during lawn aeration or freeze/thaw cycles. Virtual
                        boundaries eliminate this common problem.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-yellow-500 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Easy Boundary Changes</h4>
                      <p className="text-gray-300">
                        Update your mowing boundaries through the app without physically moving wires. Perfect for
                        seasonal changes to your landscape.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">COMMON QUESTIONS</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-1">What robot lawn mower has no boundary wires?</h4>
                    <p className="text-gray-300">
                      SmartYard robots use RTK positioning and vision technology instead of physical boundary wires.
                      Other wire-free options include Segway Navimow and some newer Husqvarna models, but most require
                      professional installation.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">Do all robot mowers need wires?</h4>
                    <p className="text-gray-300">
                      No. While most traditional robot mowers use boundary wires, newer advanced models like SmartYard
                      use GPS, RTK positioning, and computer vision to navigate without physical wires.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">Will an Automower work without a guide wire?</h4>
                    <p className="text-gray-300">
                      Most Husqvarna Automower models require boundary and guide wires, though their newest premium
                      models offer wire-free options at a much higher price point. SmartYard provides wire-free
                      technology at a fraction of the cost.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-1">Does the Yuka Mini require a boundary wire?</h4>
                    <p className="text-gray-300">
                      Yes, the Yuka Mini requires traditional boundary wires. SmartYard's wire-free technology is more
                      advanced and eliminates the hassle of wire installation and maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
                asChild
              >
                <Link href="/purchase/smart-yard">
                  EXPERIENCE WIRE-FREE MOWING <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              ROBOT VS <span className="text-yellow-500">TRADITIONAL</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how robot mowing compares to traditional lawn care methods.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-900">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-yellow-500 font-bold">Robot Mowing</span>
                  </th>
                  <th className="p-4 text-center">Traditional Service</th>
                  <th className="p-4 text-center">DIY Mowing</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="p-4 font-bold">Frequency</td>
                  <td className="p-4 text-center text-yellow-500">Daily</td>
                  <td className="p-4 text-center">Weekly</td>
                  <td className="p-4 text-center">Weekly</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4 font-bold">Monthly Cost</td>
                  <td className="p-4 text-center text-yellow-500">$79</td>
                  <td className="p-4 text-center">$160-240</td>
                  <td className="p-4 text-center">$30-50 (gas, maintenance)</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4 font-bold">Your Time Required</td>
                  <td className="p-4 text-center text-yellow-500">0 hours</td>
                  <td className="p-4 text-center">0 hours</td>
                  <td className="p-4 text-center">35+ hours/season</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4 font-bold">Lawn Health</td>
                  <td className="p-4 text-center text-yellow-500">Excellent</td>
                  <td className="p-4 text-center">Good</td>
                  <td className="p-4 text-center">Variable</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="p-4 font-bold">Noise Level</td>
                  <td className="p-4 text-center text-yellow-500">Whisper Quiet</td>
                  <td className="p-4 text-center">Very Loud</td>
                  <td className="p-4 text-center">Very Loud</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Environmental Impact</td>
                  <td className="p-4 text-center text-yellow-500">Zero Emissions</td>
                  <td className="p-4 text-center">High Emissions</td>
                  <td className="p-4 text-center">High Emissions</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              ROBOT MOWING <span className="text-yellow-500">FAQ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our robot lawn mowing service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 faq-question">How do robot lawn mowers work?</h3>
              <p className="text-gray-300 faq-answer">
                Robot lawn mowers use advanced sensors and GPS technology to navigate your lawn, cutting grass to a
                precise height daily. They operate automatically, returning to their charging station when needed. Our
                robot mowers can handle slopes up to 35 degrees, work in most weather conditions, and are whisper-quiet.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 faq-question">Are robot lawn mowers safe?</h3>
              <p className="text-gray-300 faq-answer">
                Yes, our robot mowers are extremely safe. They feature multiple safety sensors that detect obstacles,
                pets, and people. The blades automatically stop if the mower is lifted or tilted. They're much safer
                than traditional mowers, with no risk of flying debris or operator injury.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 faq-question">Can robot mowers handle my yard size?</h3>
              <p className="text-gray-300 faq-answer">
                Our standard robot mowers can handle yards up to 1/2 acre. For larger properties, we can install
                multiple mowers or upgrade to our commercial models that handle up to 1.25 acres. During your
                consultation, we'll recommend the right solution for your specific yard size and layout.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 faq-question">What happens if it rains?</h3>
              <p className="text-gray-300 faq-answer">
                Our robot mowers are weather-resistant and can operate in light rain. They have sensors that detect
                heavier rainfall and automatically return to their charging station. Once the weather improves, they
                resume mowing where they left off. This ensures your lawn stays maintained regardless of Richmond's
                unpredictable weather.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              FREQUENTLY ASKED <span className="text-yellow-500">QUESTIONS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about robot lawn mowing services
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3">What are robot lawn mower prices near me?</h3>
                  <p className="text-gray-300">
                    While most robot lawn mowers cost $800-$3,500 upfront plus maintenance, SmartYard offers a
                    subscription model at just $79/month with no upfront equipment cost. This includes the robot mower,
                    maintenance, and support—making it the most affordable option in Richmond.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3">What's the best robotic lawn mower?</h3>
                  <p className="text-gray-300">
                    The best robot lawn mower is one that fits your specific needs. SmartYard offers premium features
                    like virtual boundary mapping (no perimeter wire needed), daily cutting, obstacle detection, and app
                    control—all without the $1,500+ upfront cost of comparable models. Our service model means you
                    always have the latest technology.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3">How do robot lawn mower prices on Amazon compare?</h3>
                  <p className="text-gray-300">
                    Robot lawn mowers on Amazon typically range from $600 for basic models to $3,000+ for advanced
                    units. However, these require upfront payment, self-installation, and you're responsible for all
                    maintenance and repairs. SmartYard's $79/month includes the mower, professional setup, maintenance,
                    and automatic replacements.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">What are electric robot lawn mower prices?</h3>
                  <p className="text-gray-300">
                    All modern robot lawn mowers are electric, with prices ranging from $600-$3,500 depending on
                    features and lawn size capacity. SmartYard's subscription model gives you a premium electric robot
                    mower for just $79/month with no large upfront investment, plus we handle all maintenance and
                    updates.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3">What's the best robot lawn mower for 1 acre?</h3>
                  <p className="text-gray-300">
                    SmartYard's robot mowers can handle properties up to 1.5 acres, making them perfect for 1-acre lawns
                    in Richmond. With advanced RTK positioning, they navigate large properties efficiently without
                    boundary wires. At $79/month, you get professional-grade technology that would cost $2,000-$3,500 to
                    purchase outright.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3">Do you offer a robot lawn mower without perimeter wire?</h3>
                  <p className="text-gray-300">
                    Yes! SmartYard uses advanced RTK positioning and vision technology to create virtual boundaries—no
                    perimeter wire needed. This makes installation cleaner and faster, eliminates wire breaks, and
                    allows for easy boundary adjustments through the app. It's the most advanced no-wire solution
                    available in Richmond.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-3">Can a robot lawn mower handle 1 acre?</h3>
                  <p className="text-gray-300">
                    Absolutely. SmartYard's robot mowers can efficiently maintain lawns up to 1.5 acres. With a
                    210-minute runtime per charge and smart recharging, they'll automatically maintain your entire
                    property. The mower creates efficient mowing patterns and remembers where it left off if it needs to
                    recharge mid-mow.
                  </p>
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Do you offer commercial robotic lawn mowers?</h3>
                  <p className="text-gray-300">
                    Yes, we offer commercial-grade robotic mowing solutions for businesses, HOAs, and property managers
                    in Richmond. Our commercial packages include multiple mowers for larger properties, custom
                    scheduling, and priority service. Contact us for a custom quote based on your commercial property's
                    specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Installation Details */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              PROFESSIONAL <span className="text-yellow-500">INSTALLATION</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What's included in our optional $249 professional setup service
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-gray-800 rounded-lg p-8 border-l-4 border-yellow-500 h-full">
                <div className="bg-yellow-500 text-black text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-4">PROPERTY ASSESSMENT</h3>
                <p className="text-gray-300">
                  Our technicians evaluate your lawn's unique characteristics, including slopes, obstacles, soil type,
                  and grass varieties to optimize the robot's performance specifically for your property.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-800 rounded-lg p-8 border-l-4 border-yellow-500 h-full">
                <div className="bg-yellow-500 text-black text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-4">PRECISION MAPPING</h3>
                <p className="text-gray-300">
                  We create a detailed virtual boundary map of your lawn using RTK positioning technology, defining
                  exact mowing areas and no-go zones with centimeter-level precision.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-800 rounded-lg p-8 border-l-4 border-yellow-500 h-full">
                <div className="bg-yellow-500 text-black text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-4">CHARGING STATION SETUP</h3>
                <p className="text-gray-300">
                  We install and secure the charging station in an optimal location with good WiFi signal, proper
                  drainage, and protection from the elements.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {/* Step 4 */}
              <div className="bg-gray-800 rounded-lg p-8 border-l-4 border-yellow-500 h-full">
                <div className="bg-yellow-500 text-black text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  4
                </div>
                <h3 className="text-xl font-bold mb-4">CUSTOM CONFIGURATION</h3>
                <p className="text-gray-300">
                  We program your mower with optimal cutting height, mowing schedule, and navigation settings based on
                  your lawn's specific needs and your preferences.
                </p>
              </div>

              {/* Step 5 */}
              <div className="bg-gray-800 rounded-lg p-8 border-l-4 border-yellow-500 h-full">
                <div className="bg-yellow-500 text-black text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  5
                </div>
                <h3 className="text-xl font-bold mb-4">APP SETUP & TRAINING</h3>
                <p className="text-gray-300">
                  We install and configure the SmartYard app on your phone, connect it to your mower, and provide
                  hands-on training so you can easily control and monitor your robot.
                </p>
              </div>

              {/* Step 6 */}
              <div className="bg-gray-800 rounded-lg p-8 border-l-4 border-yellow-500 h-full">
                <div className="bg-yellow-500 text-black text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  6
                </div>
                <h3 className="text-xl font-bold mb-4">FIRST MOWING SUPERVISION</h3>
                <p className="text-gray-300">
                  We monitor your robot's first complete mowing cycle to ensure everything works perfectly, making any
                  necessary adjustments to optimize performance.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
                asChild
              >
                <Link href="/purchase/smart-yard">
                  SCHEDULE YOUR PROFESSIONAL INSTALLATION <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-5"></div>
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
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} videoUrl={videoUrl} />
    </main>
  )
}
