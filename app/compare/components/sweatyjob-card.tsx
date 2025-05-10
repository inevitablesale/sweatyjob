"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, Check, ChevronRight } from "lucide-react"

interface SweatyjobCardProps {
  city: string
}

export default function SweatyjobCard({ city }: SweatyjobCardProps) {
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ")

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-green-500 transform transition-all hover:scale-[1.02]">
      <div className="bg-green-600 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] relative mr-3 flex-shrink-0 bg-white rounded-full p-1">
            <Image src="/images/sweatyjob-logo.png" alt="SweatyJob Logo" fill className="object-contain" />
          </div>
          <h3 className="text-xl font-bold text-white">SweatyJob</h3>
        </div>
        <div className="flex items-center bg-white rounded-full px-3 py-1">
          <Star className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" />
          <span className="font-bold">4.8</span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="text-lg font-semibold mb-2">Robotic Lawn Service</h4>
          <p className="text-gray-600">
            Automated daily lawn mowing with advanced robotic technology for a consistently perfect lawn.
          </p>
        </div>

        <div className="mb-6">
          <h5 className="font-semibold mb-2 text-green-700">Benefits:</h5>
          <ul className="space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Daily mowing at optimal grass height</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Zero emissions, whisper-quiet operation</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>No scheduling hassles or weather cancellations</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Real-time monitoring and smart alerts</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Lower long-term cost with predictable pricing</span>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-sm text-gray-500">Starting at</span>
            <div className="text-2xl font-bold text-gray-900">$79/mo</div>
          </div>
          <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            Available in {cityName}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Link
            href="/book"
            className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center"
          >
            Get Started
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/how-it-works"
            className="block w-full bg-gray-200 text-gray-800 text-center py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}
