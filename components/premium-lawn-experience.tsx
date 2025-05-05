"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Clock, Calendar, Bot, Sparkles } from "lucide-react"
import Image from "next/image"

export default function PremiumLawnExperience() {
  const [activeTab, setActiveTab] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Auto-rotate tabs every 5 seconds
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleCallChris = () => {
    window.location.href = "tel:8045739825"
  }

  const tabs = [
    {
      id: "consistency",
      label: "Consistency",
      title: "Effortless Perfection",
      description:
        "Experience the serenity of a consistently manicured lawn without the disruption of traditional scheduling.",
      image: "/modern-home-sunset-lawn.png",
      features: [
        "Daily micro-cutting maintains ideal grass height",
        "No more scheduling headaches or weather delays",
        "Uniform appearance throughout the entire season",
      ],
    },
    {
      id: "technology",
      label: "Technology",
      title: "Intelligent Precision",
      description:
        "Advanced robotics and AI create a lawn care experience that adapts to your property's unique characteristics.",
      image: "/robotic-mower-pristine-lawn.png",
      features: [
        "GPS-guided navigation ensures complete coverage",
        "Weather-adaptive programming optimizes cutting schedules",
        "Remote monitoring and control via smartphone",
      ],
    },
    {
      id: "lifestyle",
      label: "Lifestyle",
      title: "Time Reclaimed",
      description: "Transform your relationship with your outdoor space from maintenance burden to pure enjoyment.",
      image: "/backyard-barbecue-family.png",
      features: [
        "Reclaim weekends previously lost to yard work",
        "Enjoy a consistently beautiful lawn without the effort",
        "Environmentally conscious approach to lawn maintenance",
      ],
    },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-emerald-500/10 rounded-full px-3 py-1 mb-4">
            <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
            <span className="text-sm font-medium text-emerald-400">ELEVATED LAWN EXPERIENCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Beyond Traditional <span className="text-emerald-400">Lawn Care</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover a new standard in lawn maintenance that transforms your relationship with your outdoor space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: Image and visual elements */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-70"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
              <Image
                src={tabs[activeTab].image || "/placeholder.svg"}
                alt={tabs[activeTab].title}
                fill
                className="object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <p className="text-emerald-400 font-medium">{tabs[activeTab].label}</p>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{tabs[activeTab].title}</h3>
                <p className="text-gray-300">{tabs[activeTab].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Right side: Content and tabs */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="flex flex-col"
          >
            {/* Tabs */}
            <div className="flex mb-8 bg-slate-800/50 rounded-full p-1 backdrop-blur-sm">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === index ? "bg-emerald-500 text-slate-900" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/5 mb-8">
              <div className="space-y-6">
                {tabs[activeTab].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="bg-emerald-500/20 rounded-full p-1 mr-4 flex-shrink-0">
                      <Check className="h-5 w-5 text-emerald-400" />
                    </div>
                    <p className="text-gray-200">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Comparison */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-white/5">
                <div className="flex items-center mb-3">
                  <Bot className="h-5 w-5 text-emerald-400 mr-2" />
                  <h4 className="font-medium text-white">Robot Mowing</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Consistency</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reliability</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Convenience</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-white/5">
                <div className="flex items-center mb-3">
                  <Calendar className="h-5 w-5 text-amber-400 mr-2" />
                  <h4 className="font-medium text-white">Traditional</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Consistency</span>
                    <div className="flex space-x-1">
                      {[1, 2].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-amber-400"></div>
                      ))}
                      {[3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-slate-600"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Reliability</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-amber-400"></div>
                      ))}
                      {[4, 5].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-slate-600"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Convenience</span>
                    <div className="flex space-x-1">
                      {[1].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-amber-400"></div>
                      ))}
                      {[2, 3, 4, 5].map((i) => (
                        <div key={i} className="w-2 h-2 rounded-full bg-slate-600"></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between bg-gradient-to-r from-emerald-600/20 to-emerald-500/20 rounded-xl p-6 border border-emerald-500/20">
              <div>
                <div className="flex items-center mb-1">
                  <Clock className="h-4 w-4 text-emerald-400 mr-2" />
                  <p className="text-sm font-medium text-emerald-400">TIME-SAVING SOLUTION</p>
                </div>
                <h4 className="text-xl font-semibold text-white">Ready to transform your lawn experience?</h4>
              </div>
              <Button
                onClick={handleCallChris}
                className="bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-medium"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
