"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { Phone } from "lucide-react"

const responses = [
  { text: "Outlook not so good", color: "text-red-500" },
  { text: "Don't count on it", color: "text-red-500" },
  { text: "My sources say no", color: "text-red-500" },
  { text: "Very doubtful", color: "text-red-500" },
  { text: "Reply hazy, try again", color: "text-yellow-500" },
  { text: "Ask again later", color: "text-yellow-500" },
  { text: "Better not tell you now", color: "text-yellow-500" },
  { text: "Cannot predict now", color: "text-yellow-500" },
  { text: "Maybe next week", color: "text-yellow-500" },
  { text: 'They\'re "on their way"', color: "text-yellow-500" },
  { text: "Stuck in traffic", color: "text-yellow-500" },
  { text: "It's your lucky day", color: "text-green-500" },
]

export default function Magic8BallHero() {
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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                <span className="text-amber-400">Magic 8 Ball Says:</span>
                <br />
                Will Your Lawn Company Show Up This Week?
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stop gambling with unreliable lawn services. Our robot mowers show up 100% of the time, rain or shine.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleCallChris}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" /> Schedule Your Consultation
                </Button>
                <PhoneCaptureForm
                  source="magic-8-ball-hero"
                  buttonText="Get Started"
                  className="w-full sm:w-auto"
                  showThankYou={true}
                />
              </div>

              <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center">
                  <div className="mr-4 bg-amber-500/20 p-3 rounded-full">
                    <svg
                      className="w-6 h-6 text-amber-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">The SweatyJob Guarantee</h3>
                    <p className="text-gray-300">
                      Our robots mow your lawn 365 days a year with 99.8% reliability. No excuses, no "we'll be there
                      tomorrow."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <motion.div
                  className="relative w-72 h-72 md:w-96 md:h-96 bg-black rounded-full border-4 border-slate-700 shadow-2xl flex items-center justify-center cursor-pointer"
                  animate={{ rotate: isShaking ? [0, -5, 5, -5, 5, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={handleShake}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-800 to-slate-950"></div>

                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center z-10">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-900 flex items-center justify-center">
                      <AnimatePresence mode="wait">
                        {response ? (
                          <motion.div
                            key={response.text}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-center p-2"
                          >
                            <p className={`text-lg md:text-xl font-bold ${response.color}`}>{response.text}</p>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="initial"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="text-center p-2"
                          >
                            <p className="text-lg md:text-xl font-bold text-blue-400">
                              {hasInteracted ? "Shake again" : "Tap to shake"}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-white text-black text-xs md:text-sm font-bold rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                    8
                  </div>
                </motion.div>

                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-slate-800 px-4 py-2 rounded-lg shadow-lg">
                  <p className="text-amber-400 text-sm md:text-base font-medium">
                    Tap the 8 ball to see if they'll show up
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">Traditional Lawn Service</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Unpredictable scheduling
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Weather cancellations
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Inconsistent quality
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-xl font-bold text-white mb-2">DIY Lawn Care</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Wastes your weekends
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Hot, sweaty work
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-red-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Equipment maintenance
                </li>
              </ul>
            </div>

            <div className="bg-amber-500/20 rounded-xl p-6 border border-amber-500/30">
              <h3 className="text-xl font-bold text-amber-400 mb-2">SweatyJob Robot Mowers</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Works 365 days a year
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rain or shine operation
                </li>
                <li className="flex items-center text-gray-300">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Perfect results every time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
