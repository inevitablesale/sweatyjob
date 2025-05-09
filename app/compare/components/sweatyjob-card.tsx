"use client"

import { motion } from "framer-motion"
import { Star, Check, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SweatyJobCardProps {
  cityName: string
  stateName: string
}

export default function SweatyJobCard({ cityName, stateName }: SweatyJobCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-green-900 to-green-800 rounded-xl overflow-hidden border border-green-700"
      whileHover={{ y: -5 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 relative mr-4 bg-white rounded-full overflow-hidden flex items-center justify-center">
            <span className="text-green-900 font-bold text-xl">SJ</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">SweatyJob Robot Mower</h3>
            <div className="flex items-center">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-300 text-sm">5.0 (243)</span>
            </div>
          </div>
          <div className="ml-auto text-xl font-bold text-white">$79/mo</div>
        </div>

        <p className="text-gray-200 mb-4">Automated daily mowing with zero emissions and app control</p>

        {/* Address Information - Only showing location */}
        <div className="mb-4 text-gray-200 text-sm">
          <div className="flex items-start mb-1">
            <MapPin size={14} className="mr-1 mt-1 flex-shrink-0" />
            <span>
              Available throughout {cityName}, {stateName}
            </span>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center">
            <Check size={16} className="text-green-400 mr-2" />
            <span className="text-gray-200">Daily mowing vs. weekly service</span>
          </div>
          <div className="flex items-center">
            <Check size={16} className="text-green-400 mr-2" />
            <span className="text-gray-200">50% cheaper than competitors</span>
          </div>
          <div className="flex items-center">
            <Check size={16} className="text-green-400 mr-2" />
            <span className="text-gray-200">Zero emissions, whisper quiet</span>
          </div>
        </div>

        <Button className="w-full bg-white text-green-900 hover:bg-gray-100">Get Started</Button>
      </div>
    </motion.div>
  )
}
