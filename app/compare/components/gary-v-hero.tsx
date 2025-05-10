"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function GaryVHero() {
  return (
    <div className="relative bg-gradient-to-r from-green-800 to-green-600 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/abstract-geometric-shapes.png')] bg-repeat opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              <span className="block">Traditional Lawn Care</span>
              <span className="block text-yellow-300">Is Costing You</span>
              <span className="block">Time & Money</span>
            </h1>

            <p className="text-xl text-white opacity-90 mb-8 max-w-lg">
              See how SweatyJob's robotic lawn service outperforms traditional companies in every category that matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-800 font-medium rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="#comparison"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                See Comparison
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image
                src="/gary-v-style-hero.png"
                alt="Traditional vs Robotic Lawn Care"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="absolute -bottom-4 right-0 bg-yellow-400 text-green-900 font-bold px-4 py-2 rounded-lg transform rotate-3 shadow-lg">
              SAVE 40% ON AVERAGE
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
