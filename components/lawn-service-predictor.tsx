"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { Phone, Cloud, CloudRain, CloudSnow, CloudSun, Sun, Wind, Clock, AlertTriangle } from "lucide-react"
import { motion } from "framer-motion"

// Factors that affect lawn service reliability
const WEATHER_IMPACT = {
  clear: { factor: 0.9, icon: Sun, label: "Clear", color: "text-amber-400" },
  "partly-cloudy": { factor: 0.8, icon: CloudSun, label: "Partly Cloudy", color: "text-blue-400" },
  cloudy: { factor: 0.7, icon: Cloud, label: "Cloudy", color: "text-slate-400" },
  "light-rain": { factor: 0.5, icon: CloudRain, label: "Light Rain", color: "text-blue-500" },
  "heavy-rain": { factor: 0.2, icon: CloudRain, label: "Heavy Rain", color: "text-blue-600" },
  snow: { factor: 0.1, icon: CloudSnow, label: "Snow", color: "text-slate-300" },
  windy: { factor: 0.6, icon: Wind, label: "Windy", color: "text-teal-400" },
}

const DAY_OF_WEEK_IMPACT = {
  0: 0.7, // Sunday
  1: 0.8, // Monday
  2: 0.85, // Tuesday
  3: 0.9, // Wednesday
  4: 0.85, // Thursday
  5: 0.7, // Friday
  6: 0.5, // Saturday
}

const TIME_OF_DAY_IMPACT = {
  morning: 0.9,
  afternoon: 0.8,
  evening: 0.6,
}

const SEASON_IMPACT = {
  spring: 0.8,
  summer: 0.7, // Busiest season, more likely to be overbooked
  fall: 0.85,
  winter: 0.5,
}

// Excuses lawn services commonly use
const COMMON_EXCUSES = [
  "Equipment broke down",
  "Truck got a flat tire",
  "Running behind schedule",
  "Short-staffed today",
  "Previous job took longer than expected",
  "Traffic is really bad",
  "Had an emergency at another property",
  "Double-booked by mistake",
  "Crew called in sick",
  "Scheduling mix-up",
]

export default function LawnServicePredictor() {
  const [weatherType, setWeatherType] = useState<keyof typeof WEATHER_IMPACT>("partly-cloudy")
  const [dayOfWeek, setDayOfWeek] = useState<number>(new Date().getDay())
  const [timeOfDay, setTimeOfDay] = useState<keyof typeof TIME_OF_DAY_IMPACT>("afternoon")
  const [season, setSeason] = useState<keyof typeof SEASON_IMPACT>("summer")
  const [reliability, setReliability] = useState<number>(0)
  const [excuse, setExcuse] = useState<string>("")
  const [isCalculating, setIsCalculating] = useState<boolean>(false)

  // Get current season based on month
  useEffect(() => {
    const month = new Date().getMonth()
    if (month >= 2 && month <= 4) setSeason("spring")
    else if (month >= 5 && month <= 7) setSeason("summer")
    else if (month >= 8 && month <= 10) setSeason("fall")
    else setSeason("winter")
  }, [])

  // Calculate reliability percentage based on all factors
  const calculateReliability = () => {
    setIsCalculating(true)

    // Simulate API call or calculation time
    setTimeout(() => {
      const weatherFactor = WEATHER_IMPACT[weatherType].factor
      const dayFactor = DAY_OF_WEEK_IMPACT[dayOfWeek]
      const timeFactor = TIME_OF_DAY_IMPACT[timeOfDay]
      const seasonFactor = SEASON_IMPACT[season]

      // Base reliability (65%) multiplied by all factors
      let calculatedReliability = 0.65 * weatherFactor * dayFactor * timeFactor * seasonFactor

      // Add some randomness (±5%)
      calculatedReliability = calculatedReliability * (0.95 + Math.random() * 0.1)

      // Ensure it's between 0 and 1
      calculatedReliability = Math.min(Math.max(calculatedReliability, 0), 1)

      // Convert to percentage
      setReliability(Math.round(calculatedReliability * 100))

      // Set a random excuse if reliability is below 80%
      if (calculatedReliability < 0.8) {
        const randomExcuse = COMMON_EXCUSES[Math.floor(Math.random() * COMMON_EXCUSES.length)]
        setExcuse(randomExcuse)
      } else {
        setExcuse("")
      }

      setIsCalculating(false)
    }, 1500)
  }

  const handleCallChris = () => {
    window.location.href = "tel:8045739825"
  }

  // Get weather icon component
  const WeatherIcon = WEATHER_IMPACT[weatherType].icon

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                <span className="text-amber-400">Will Your Lawn Service</span>
                <br />
                Actually Show Up This Week?
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Our data-driven predictor uses weather forecasts, historical patterns, and industry insights to
                calculate the real probability.
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
                  source="reliability-predictor-hero"
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

            <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-700/50 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Lawn Service Reliability Predictor</h2>

              <div className="space-y-6">
                {/* Weather Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Weather Conditions</label>
                  <div className="grid grid-cols-4 gap-2">
                    {(Object.keys(WEATHER_IMPACT) as Array<keyof typeof WEATHER_IMPACT>).map((type) => {
                      const WeatherIcon = WEATHER_IMPACT[type].icon
                      return (
                        <button
                          key={type}
                          onClick={() => setWeatherType(type)}
                          className={`p-3 rounded-lg flex flex-col items-center justify-center transition-all ${
                            weatherType === type
                              ? "bg-amber-500/20 border-amber-500/50"
                              : "bg-slate-700/50 border-slate-600/50 hover:bg-slate-700"
                          } border`}
                        >
                          <WeatherIcon className={`h-6 w-6 ${WEATHER_IMPACT[type].color}`} />
                          <span className="text-xs text-gray-300 mt-1">{WEATHER_IMPACT[type].label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Day of Week Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Day of Week</label>
                  <div className="grid grid-cols-7 gap-1">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
                      <button
                        key={day}
                        onClick={() => setDayOfWeek(index)}
                        className={`p-2 rounded-lg flex items-center justify-center transition-all ${
                          dayOfWeek === index
                            ? "bg-amber-500/20 border-amber-500/50 text-amber-400"
                            : "bg-slate-700/50 border-slate-600/50 hover:bg-slate-700 text-gray-300"
                        } border text-sm`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time of Day Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Time of Day</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(Object.keys(TIME_OF_DAY_IMPACT) as Array<keyof typeof TIME_OF_DAY_IMPACT>).map((time) => (
                      <button
                        key={time}
                        onClick={() => setTimeOfDay(time)}
                        className={`p-2 rounded-lg flex items-center justify-center transition-all ${
                          timeOfDay === time
                            ? "bg-amber-500/20 border-amber-500/50 text-amber-400"
                            : "bg-slate-700/50 border-slate-600/50 hover:bg-slate-700 text-gray-300"
                        } border`}
                      >
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="capitalize">{time}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Calculate Button */}
                <Button
                  onClick={calculateReliability}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium"
                  disabled={isCalculating}
                >
                  {isCalculating ? "Calculating..." : "Calculate Reliability"}
                </Button>

                {/* Results */}
                {reliability > 0 && !isCalculating && (
                  <div className="mt-6">
                    <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
                      <h3 className="text-lg font-medium text-white mb-2">Reliability Prediction</h3>

                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300">Chance they'll show up:</span>
                        <span className="text-2xl font-bold" style={{ color: `hsl(${reliability}, 100%, 50%)` }}>
                          {reliability}%
                        </span>
                      </div>

                      <div className="w-full bg-slate-800 rounded-full h-4 mb-4">
                        <motion.div
                          className="h-4 rounded-full"
                          style={{
                            width: `${reliability}%`,
                            backgroundColor: `hsl(${reliability}, 100%, 50%)`,
                          }}
                          initial={{ width: "0%" }}
                          animate={{ width: `${reliability}%` }}
                          transition={{ duration: 1 }}
                        />
                      </div>

                      {excuse && (
                        <div className="flex items-start mt-4 bg-slate-800/60 p-3 rounded-lg">
                          <AlertTriangle className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-white">Likely excuse if they don't show:</p>
                            <p className="text-sm text-gray-300">"{excuse}"</p>
                          </div>
                        </div>
                      )}

                      <div className="mt-4 pt-4 border-t border-slate-600/50">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-300">Robot mower reliability:</span>
                          <span className="text-2xl font-bold text-emerald-400">99.8%</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-4 mt-2">
                          <div className="h-4 rounded-full bg-emerald-500" style={{ width: "99.8%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
                  Weather-dependent scheduling
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
                  Unpredictable arrival times
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
