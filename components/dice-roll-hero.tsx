"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Phone } from "lucide-react"

const diceResults = [
  { value: 1, message: "No-show: They're 'on vacation'", color: "bg-red-500" },
  { value: 2, message: "No-show: 'Traffic was bad'", color: "bg-red-500" },
  { value: 3, message: "No-show: 'Equipment broke down'", color: "bg-red-500" },
  { value: 4, message: "No-show: 'We'll be there tomorrow'", color: "bg-red-500" },
  { value: 5, message: "No-show: 'We forgot'", color: "bg-red-500" },
  { value: 6, message: "They actually showed up!", color: "bg-emerald-500" },
]

export default function DiceRollHero() {
  const [isRolling, setIsRolling] = useState(false)
  const [result, setResult] = useState<null | (typeof diceResults)[0]>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  const handleRoll = () => {
    if (isRolling) return

    setIsRolling(true)
    setHasInteracted(true)

    setTimeout(() => {
      const randomResult = diceResults[Math.floor(Math.random() * diceResults.length)]
      setResult(randomResult)
      setIsRolling(false)
    }, 1500)
  }

  const handleCallChris = () => {
    window.location.href = "tel:8045739825"
  }

  // Function to render dice dots
  const renderDots = (value: number) => {
    switch (value) {
      case 1:
        return (
          <div className="grid place-items-center h-full w-full">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        )
      case 2:
        return (
          <div className="grid grid-cols-2 h-full w-full p-3">
            <div className="flex justify-start items-start">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-end items-end">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="grid grid-cols-3 grid-rows-3 h-full w-full p-3">
            <div className="col-start-1 row-start-1 flex justify-start items-start">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="col-start-2 row-start-2 flex justify-center items-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="col-start-3 row-start-3 flex justify-end items-end">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="grid grid-cols-2 grid-rows-2 h-full w-full p-3">
            <div className="flex justify-start items-start">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-end items-start">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-start items-end">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-end items-end">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        )
      case 5:
        return (
          <div className="grid grid-cols-3 grid-rows-3 h-full w-full p-3">
            <div className="col-start-1 row-start-1 flex justify-start items-start">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="col-start-3 row-start-1 flex justify-end items-start">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="col-start-2 row-start-2 flex justify-center items-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="col-start-1 row-start-3 flex justify-start items-end">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="col-start-3 row-start-3 flex justify-end items-end">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        )
      case 6:
        return (
          <div className="grid grid-cols-2 grid-rows-3 h-full w-full p-3">
            <div className="flex justify-start items-start">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-end items-start">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-start items-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-end items-center">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-start items-end">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
            <div className="flex justify-end items-end">
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        )
      default:
        return null
    }
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

            <p className="text-xl text-gray-300 mb-6">Roll the dice to find out...</p>

            <div className="flex justify-center my-8 relative">
              <div className="relative h-64 w-64 cursor-pointer" onClick={handleRoll}>
                <AnimatePresence mode="wait">
                  {isRolling ? (
                    <motion.div
                      key="rolling"
                      className="absolute inset-0 flex items-center justify-center"
                      animate={{
                        rotate: [0, 360, 720, 1080],
                        x: [0, -20, 20, -20, 0],
                        y: [0, -20, 20, -20, 0],
                      }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                      <div className="w-24 h-24 bg-red-600 rounded-lg shadow-lg border-2 border-red-400">
                        {renderDots(Math.floor(Math.random() * 6) + 1)}
                      </div>
                    </motion.div>
                  ) : result ? (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute inset-0 flex flex-col items-center justify-center"
                    >
                      <div className={`w-24 h-24 ${result.color} rounded-lg shadow-lg mb-4`}>
                        {renderDots(result.value)}
                      </div>
                      <div className="bg-slate-800 p-3 rounded-lg max-w-xs">
                        <p className="text-white font-medium">{result.message}</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="initial"
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-24 h-24 bg-red-600 rounded-lg shadow-lg flex items-center justify-center">
                        <p className="text-white font-bold">{hasInteracted ? "Roll again" : "Tap to roll"}</p>
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
