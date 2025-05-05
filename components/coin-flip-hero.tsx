"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X, Check } from "lucide-react"

export default function CoinFlipHero() {
  const [isFlipping, setIsFlipping] = useState(false)
  const [result, setResult] = useState<null | "heads" | "tails">(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleFlip = () => {
    if (isFlipping) return

    setIsFlipping(true)
    setHasInteracted(true)

    setTimeout(() => {
      // 80% chance of tails (no-show), 20% chance of heads (they show up)
      const flipResult = Math.random() < 0.2 ? "heads" : "tails"
      setResult(flipResult)
      setIsFlipping(false)
    }, 1500)
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

            <p className="text-xl text-gray-300 mb-6">Flip a coin to find out...</p>

            <div className="flex justify-center my-8 relative">
              <div className="relative h-64 w-64 cursor-pointer" onClick={handleFlip}>
                <AnimatePresence mode="wait">
                  {isFlipping ? (
                    <motion.div
                      key="flipping"
                      className="absolute inset-0"
                      initial={{ rotateX: 0 }}
                      animate={{ rotateX: 1440 }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                      <div className="relative w-full h-full">
                        {/* Coin sides that alternate during the flip animation */}
                        <div className="absolute inset-0 backface-hidden">
                          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-lg border-4 border-amber-400">
                            <Check className="w-16 h-16 text-white" />
                          </div>
                        </div>
                        <div className="absolute inset-0 backface-hidden" style={{ transform: "rotateX(180deg)" }}>
                          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-red-300 to-red-600 flex items-center justify-center shadow-lg border-4 border-red-400">
                            <X className="w-16 h-16 text-white" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : result === "heads" ? (
                    <motion.div
                      key="heads"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex flex-col items-center justify-center shadow-lg border-4 border-amber-400">
                        <Check className="w-16 h-16 text-white mb-1" />
                        <p className="text-white font-bold">They showed up!</p>
                      </div>
                    </motion.div>
                  ) : result === "tails" ? (
                    <motion.div
                      key="tails"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-red-300 to-red-600 flex flex-col items-center justify-center shadow-lg border-4 border-red-400">
                        <X className="w-16 h-16 text-white mb-1" />
                        <p className="text-white font-bold">No-show again!</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="initial"
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-300 to-gray-600 flex items-center justify-center shadow-lg border-4 border-gray-400">
                        <p className="text-white font-bold text-lg">{hasInteracted ? "Flip again" : "Tap to flip"}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
