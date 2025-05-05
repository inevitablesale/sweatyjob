"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SmartYardHero() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b-4 border-yellow-500 pt-24 pb-12">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://sjc.microlink.io/ig0XUyoCut0OFQNOPrbB0OvmMhNnJZYdHim0PJaD2frKiA-jRrBXZqxFFzQsygkv9y0bokg4Y3CU9RX9mUJO3Q.jpeg"
          alt="SmartYard robot mower in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-white">
                GET YOUR <span className="text-yellow-500">SMARTYARD</span> ROBOT MOWER
              </h1>

              <div className="bg-yellow-500 h-2 w-32 mb-8"></div>

              <p className="text-xl font-bold mb-8 text-gray-300">
                Experience the future of lawn care with our SmartYard robot mowing service. Daily cutting, perfect
                results, no work for you.
              </p>

              <div className="bg-yellow-500/20 border border-yellow-500 rounded-lg p-4 mb-8">
                <p className="font-bold text-yellow-500">
                  LIMITED TIME OFFER: Add installation and get a FREE soil analysis with your consultation ($99 value)!
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-white">Daily mowing for a perfect lawn</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-white">No contracts, cancel anytime</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-white">Professional installation available</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <Check className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-white">Serving all Richmond neighborhoods</span>
                </li>
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
                  onClick={() => {
                    const element = document.getElementById("smart-yard-form")
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  GET STARTED NOW{" "}
                  <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -top-8 -left-8 -right-8 -bottom-8 bg-yellow-500/20 rounded-xl transform -rotate-3"></div>
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border-2 border-yellow-500">
                <Image
                  src="https://www.bestmow.com/cdn/shop/files/9a75df4f373a7569536ca569b911255b.png?v=1735137115"
                  alt="SmartYard robot mower technology"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white">SmartYard T100 Robot Mower</h3>
                  <p className="text-gray-300 mb-4">
                    Our most advanced robot mower with AI navigation, weather adaptation, and smartphone control.
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Starting at</p>
                      <p className="text-3xl font-bold text-yellow-500">$79/month</p>
                    </div>
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                      onClick={() => {
                        const element = document.getElementById("smart-yard-form")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
                        }
                      }}
                    >
                      Select Plan
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
