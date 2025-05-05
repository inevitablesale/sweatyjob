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

export default function Magic8BallHeroClassic() {
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

            <p className="text-xl text-gray-300 mb-6">Ask the Magic 8 Ball about your lawn service reliability...</p>

            <div className="flex justify-center my-8 relative">
              {/* Label to make it clear this is a Magic 8 Ball */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-amber-500 text-black px-4 py-1 rounded-full font-bold text-sm">
                MAGIC 8 BALL
              </div>

              {/* The Magic 8 Ball */}
              <motion.div
                className="relative w-72 h-72 flex items-center justify-center cursor-pointer select-none"
                animate={{
                  rotate: isShaking ? [0, -10, 10, -10, 10, -5, 5, 0] : 0,
                  y: isShaking ? [0, -5, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.8 }}
                onClick={handleShake}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Main 8 ball sphere - deep black with subtle gradient */}
                <div className="absolute inset-0 rounded-full bg-black shadow-[0_0_60px_rgba(0,0,0,0.6)]">
                  {/* Very subtle gradient to give some dimension */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
                </div>

                {/* White triangle with number 8 - classic Magic 8 Ball look */}
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-20 z-10">
                  <div className="w-full h-full bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white font-bold text-3xl">8</span>
                  </div>
                </div>

                {/* Answer window - the blue triangle with text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full flex items-center justify-center z-10">
                  {/* Blue viewing window */}
                  <div className="w-32 h-32 rounded-full bg-blue-900 flex items-center justify-center shadow-inner border-4 border-blue-950">
                    {/* Triangle shape inside the window */}
                    <div className="w-24 h-24 bg-blue-800 rounded-lg transform rotate-45 flex items-center justify-center">
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
                              className={`text-base font-bold ${response.color} drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]`}
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
                            <p className="text-base font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                              {hasInteracted ? "Shake again" : "Tap to shake"}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Glossy highlight effect */}
                <div className="absolute top-0 left-1/4 w-1/2 h-1/4 bg-white opacity-10 rounded-full blur-sm transform -translate-y-1/2"></div>
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
