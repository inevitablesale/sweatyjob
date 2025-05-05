"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"

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

export default function Magic8BallHeroRealistic() {
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
              {/* Explanatory text */}
              <div className="absolute -top-10 text-gray-400 text-sm">Shake the Magic 8 Ball to find out</div>

              {/* The Magic 8 Ball with stand */}
              <div className="relative">
                <motion.div
                  className="relative w-64 h-64 flex items-center justify-center cursor-pointer select-none"
                  animate={{
                    rotateZ: isShaking ? [0, -5, 10, -10, 5, 0] : 0,
                    rotateX: isShaking ? [0, 10, 5, 15, 0] : 0,
                    y: isShaking ? [0, -10, 5, -5, 0] : 0,
                  }}
                  transition={{ duration: 0.8 }}
                  onClick={handleShake}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Main 8 ball sphere */}
                  <div className="absolute inset-0 rounded-full bg-black shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                    {/* Very subtle radial gradient */}
                    <div className="absolute inset-0 rounded-full bg-gradient-radial from-gray-800 via-black to-black"></div>
                  </div>

                  {/* Classic blue circle with 8 */}
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 z-10">
                    <div className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-white font-bold text-2xl">8</span>
                    </div>
                  </div>

                  {/* Answer window */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full flex items-center justify-center z-10">
                    {/* Blue viewing window with 3D effect */}
                    <div className="w-28 h-28 rounded-full bg-blue-900 flex items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.6)] border-4 border-blue-950">
                      {/* The classic blue triangle with answer */}
                      <div className="w-20 h-20 bg-blue-800 rounded-lg transform rotate-45 flex items-center justify-center">
                        <AnimatePresence mode="wait">
                          {response ? (
                            <motion.div
                              key={response.text}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="text-center p-2 transform -rotate-45"
                            >
                              <p
                                className={`text-sm font-bold ${response.color} drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]`}
                              >
                                {response.text}
                              </p>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="initial"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="text-center p-2 transform -rotate-45"
                            >
                              <p className="text-sm font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                                {hasInteracted ? "Shake again" : "Tap to shake"}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>

                  {/* Realistic glossy highlight */}
                  <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-white opacity-10 rounded-full blur-sm transform -translate-y-1/3"></div>
                  <div className="absolute top-1/4 left-1/3 w-1/3 h-1/6 bg-white opacity-5 rounded-full blur-sm"></div>
                </motion.div>

                {/* Stand for the 8 ball */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-32 h-8 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full z-0"></div>
              </div>
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
