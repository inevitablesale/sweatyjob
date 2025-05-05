"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"
import Image from "next/image"

const responses = [
  { text: "Outlook not so good", color: "text-red-500" },
  { text: "Don't count on it", color: "text-red-500" },
  { text: "My sources say no", color: "text-red-500" },
  { text: "Very doubtful", color: "text-red-500" },
  { text: "Reply hazy, try again", color: "text-yellow-500" },
  { text: "Ask again later", color: "text-yellow-500" },
  { text: "Maybe next week", color: "text-yellow-500" },
  { text: 'They\'re "on their way"', color: "text-yellow-500" },
]

export default function Magic8BallImageHero() {
  const [response, setResponse] = useState<null | { text: string; color: string }>(null)
  const [isShaking, setIsShaking] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleShake = () => {
    if (isShaking) return

    setIsShaking(true)
    setHasInteracted(true)

    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      setResponse(randomResponse)
      setIsShaking(false)
    }, 1000)
  }

  const handleCallChris = () => {
    window.location.href = "tel:8045739825"
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-amber-500">
                Will Your Lawn Service
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-emerald-500">
                Show Up This Week?
              </span>
            </h1>

            <div className="flex justify-center my-8 relative">
              {/* Simple instruction */}
              <div className="absolute -top-10 text-gray-400 text-sm">Tap the Magic 8 Ball to find out</div>

              {/* Using an actual image of a Magic 8 Ball */}
              <motion.div
                className="relative cursor-pointer select-none"
                animate={{
                  rotate: isShaking ? [0, -10, 10, -10, 10, -5, 5, 0] : 0,
                  y: isShaking ? [0, -5, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.8 }}
                onClick={handleShake}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Image
                  src="/magic-8-ball-dark.png"
                  alt="Magic 8 Ball"
                  width={300}
                  height={300}
                  className="rounded-full"
                />

                {/* Answer overlay */}
                <AnimatePresence mode="wait">
                  {response && (
                    <motion.div
                      key={response.text}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-900 rounded-full w-24 h-24 flex items-center justify-center border-2 border-blue-950"
                    >
                      <div className="bg-blue-800 rounded-lg transform rotate-45 w-16 h-16 flex items-center justify-center">
                        <p className={`text-sm font-bold ${response.color} transform -rotate-45 text-center px-1`}>
                          {response.text}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-8">
              Stop gambling with unreliable lawn services. Our robot mowers show up
              <span className="text-emerald-400 font-semibold"> 100% of the time</span>, rain or shine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleCallChris}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-lg shadow-emerald-500/20"
                size="lg"
              >
                <Phone className="mr-2 h-5 w-5" /> Schedule Your Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
