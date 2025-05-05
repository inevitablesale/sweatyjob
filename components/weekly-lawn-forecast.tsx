"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  Wind,
  AlertTriangle,
  Calendar,
  Check,
  Bot,
} from "lucide-react"

// Weather types and their impact on lawn service
type WeatherType = "clear" | "partly-cloudy" | "cloudy" | "light-rain" | "heavy-rain" | "snow" | "windy"

interface WeatherDay {
  date: Date
  weather: WeatherType
  temperature: number
  originalServiceDay: boolean
  actualServiceDay: boolean
  reliability: number
  skipped: boolean
  delayed: boolean
  delayedFrom?: Date
}

const WEATHER_IMPACT = {
  clear: { factor: 0.9, icon: Sun, label: "Clear", color: "text-amber-400", isRain: false },
  "partly-cloudy": { factor: 0.8, icon: CloudSun, label: "Partly Cloudy", color: "text-blue-400", isRain: false },
  cloudy: { factor: 0.7, icon: Cloud, label: "Cloudy", color: "text-slate-400", isRain: false },
  "light-rain": { factor: 0.5, icon: CloudRain, label: "Light Rain", color: "text-blue-500", isRain: true },
  "heavy-rain": { factor: 0.2, icon: CloudRain, label: "Heavy Rain", color: "text-blue-600", isRain: true },
  snow: { factor: 0.1, icon: CloudSnow, label: "Snow", color: "text-slate-300", isRain: true },
  windy: { factor: 0.6, icon: Wind, label: "Windy", color: "text-teal-400", isRain: false },
}

// Day of week impact on reliability
const DAY_OF_WEEK_IMPACT = {
  0: 0.7, // Sunday
  1: 0.8, // Monday
  2: 0.85, // Tuesday
  3: 0.9, // Wednesday
  4: 0.85, // Thursday
  5: 0.7, // Friday
  6: 0.5, // Saturday
}

// Common excuses lawn services use
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

export default function WeeklyLawnForecast() {
  const [weekForecast, setWeekForecast] = useState<WeatherDay[]>([])
  const [serviceDay, setServiceDay] = useState<number>(1) // Monday by default
  const [isLoading, setIsLoading] = useState(true)
  const [showExplanation, setShowExplanation] = useState(false)

  // Generate a realistic but random weather forecast for the week
  useEffect(() => {
    generateWeeklyForecast()
  }, [serviceDay])

  const generateWeeklyForecast = () => {
    setIsLoading(true)

    // Get current date and create a 7-day forecast
    const today = new Date()
    const forecast: WeatherDay[] = []

    // Weather patterns - more likely to have consecutive similar days
    const weatherPatterns: WeatherType[] = [
      "clear",
      "partly-cloudy",
      "partly-cloudy",
      "cloudy",
      "light-rain",
      "clear",
      "partly-cloudy",
    ]

    // Randomly adjust the pattern to create some rain days
    const rainIndex1 = Math.floor(Math.random() * 7)
    const rainIndex2 = (rainIndex1 + 1 + Math.floor(Math.random() * 3)) % 7

    weatherPatterns[rainIndex1] = Math.random() > 0.5 ? "light-rain" : "heavy-rain"
    weatherPatterns[rainIndex2] = "light-rain"

    // Create the initial forecast with original service day
    for (let i = 0; i < 7; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)

      const dayOfWeek = date.getDay()
      const isOriginalServiceDay = dayOfWeek === serviceDay

      forecast.push({
        date,
        weather: weatherPatterns[i],
        temperature: Math.round(65 + Math.random() * 20), // Random temp between 65-85
        originalServiceDay: isOriginalServiceDay,
        actualServiceDay: false, // Will calculate this after
        reliability: 0, // Will calculate this after
        skipped: false,
        delayed: false,
      })
    }

    // Now calculate the actual service days based on rain delays
    let daysDelayed = 0
    let lastServiceDate: Date | null = null

    forecast.forEach((day, index) => {
      // Calculate base reliability for this day
      const weatherFactor = WEATHER_IMPACT[day.weather].factor
      const dayFactor = DAY_OF_WEEK_IMPACT[day.date.getDay()]

      // Base reliability (65%) multiplied by factors
      let calculatedReliability = 0.65 * weatherFactor * dayFactor

      // Add some randomness (±5%)
      calculatedReliability = calculatedReliability * (0.95 + Math.random() * 0.1)

      // Ensure it's between 0 and 1
      calculatedReliability = Math.min(Math.max(calculatedReliability, 0), 1)

      // Convert to percentage
      day.reliability = Math.round(calculatedReliability * 100)

      // Check if this is the original service day
      if (day.originalServiceDay) {
        // If it's raining on the service day, mark as delayed and add 2 days
        if (WEATHER_IMPACT[day.weather].isRain) {
          day.delayed = true
          daysDelayed += 2
        } else {
          // Not raining, so this is an actual service day
          day.actualServiceDay = true
          lastServiceDate = new Date(day.date)
        }
      }
      // Check if this is a delayed service day
      else if (daysDelayed > 0 && index > 0) {
        // This is a potential makeup day
        if (!WEATHER_IMPACT[day.weather].isRain) {
          day.actualServiceDay = true
          day.delayed = false
          day.delayedFrom = lastServiceDate || undefined
          daysDelayed = 0
          lastServiceDate = new Date(day.date)
        } else {
          // Still raining, add more delay
          day.delayed = true
          daysDelayed += 2 // Add 2 more days for each rain day
        }
      }

      // If we've reached the end of the week and service is still delayed, mark as skipped
      if (index === forecast.length - 1 && daysDelayed > 0) {
        forecast.forEach((d) => {
          if (d.originalServiceDay) {
            d.skipped = true
          }
        })
      }
    })

    setWeekForecast(forecast)
    setIsLoading(false)
  }

  const handleCallChris = () => {
    window.location.href = "tel:8045739825"
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    })
  }

  const getDayStatus = (day: WeatherDay) => {
    if (day.skipped) return "Skipped"
    if (day.originalServiceDay && day.delayed) return "Delayed"
    if (day.actualServiceDay) return "Service Day"
    if (day.delayed) return "Delayed"
    return "No Service"
  }

  const getDayStatusColor = (day: WeatherDay) => {
    if (day.skipped) return "text-red-500"
    if (day.originalServiceDay && day.delayed) return "text-amber-500"
    if (day.actualServiceDay) return "text-green-500"
    if (day.delayed) return "text-amber-500"
    return "text-gray-400"
  }

  return (
    <section className="relative py-12 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 text-white leading-tight">
              <span className="text-amber-400">Will Your Lawn</span> Get Mowed This Week?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              See how weather delays impact your lawn service schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="lg:col-span-3 bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 shadow-xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">Weekly Forecast</h3>
                <div className="flex space-x-2">
                  <Button
                    onClick={generateWeeklyForecast}
                    variant="outline"
                    size="sm"
                    className="text-amber-400 border-amber-500/30 hover:bg-amber-500/10"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    New Forecast
                  </Button>
                </div>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center h-32">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-amber-500"></div>
                </div>
              ) : (
                <>
                  <div className="bg-slate-700/50 rounded-lg p-3 border border-slate-600/50 mb-3">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-white text-sm">Your Service Day:</h4>
                      <div className="flex space-x-1">
                        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day, index) => (
                          <button
                            key={day}
                            onClick={() => setServiceDay(index)}
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-all ${
                              serviceDay === index
                                ? "bg-amber-500 text-slate-900 font-medium"
                                : "bg-slate-800 text-gray-400 hover:bg-slate-700"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 max-h-[320px] overflow-y-auto pr-2">
                    {weekForecast.map((day, index) => {
                      const WeatherIcon = WEATHER_IMPACT[day.weather].icon
                      const dayStatus = getDayStatus(day)
                      const statusColor = getDayStatusColor(day)

                      return (
                        <div
                          key={index}
                          className={`bg-slate-700/50 rounded-lg p-3 border transition-all ${
                            day.originalServiceDay
                              ? "border-amber-500/50"
                              : day.actualServiceDay
                                ? "border-green-500/50"
                                : "border-slate-600/50"
                          } ${day.actualServiceDay ? "bg-slate-700/80" : ""}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div
                                className={`mr-2 p-1.5 rounded-full ${
                                  day.originalServiceDay
                                    ? "bg-amber-500/20"
                                    : day.actualServiceDay
                                      ? "bg-green-500/20"
                                      : "bg-slate-600/20"
                                }`}
                              >
                                {day.originalServiceDay ? (
                                  <Calendar className="h-4 w-4 text-amber-400" />
                                ) : day.actualServiceDay ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Calendar className="h-4 w-4 text-gray-400" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium text-white text-sm">{formatDate(day.date)}</p>
                                <div className="flex items-center">
                                  <span className={`text-xs ${statusColor}`}>{dayStatus}</span>
                                  {day.delayedFrom && (
                                    <span className="text-xs text-gray-400 ml-1">
                                      (from {formatDate(day.delayedFrom)})
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-3">
                              <div className="flex items-center">
                                <WeatherIcon className={`h-4 w-4 ${WEATHER_IMPACT[day.weather].color} mr-1`} />
                                <span className="text-gray-300 text-xs">{WEATHER_IMPACT[day.weather].label}</span>
                              </div>

                              <div className="text-right">
                                <div className="flex items-center">
                                  <span className="text-gray-300 text-xs mr-1">Reliability:</span>
                                  <span
                                    className="font-bold text-xs"
                                    style={{ color: `hsl(${day.reliability}, 100%, 50%)` }}
                                  >
                                    {day.reliability}%
                                  </span>
                                </div>
                                <div className="w-16 bg-slate-800 rounded-full h-1.5 mt-1">
                                  <div
                                    className="h-1.5 rounded-full"
                                    style={{
                                      width: `${day.reliability}%`,
                                      backgroundColor: `hsl(${day.reliability}, 100%, 50%)`,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {day.skipped && (
                            <div className="mt-2 bg-red-500/10 p-2 rounded-lg border border-red-500/30 text-xs">
                              <div className="flex items-start">
                                <AlertTriangle className="h-3 w-3 text-red-500 mr-1 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-300">Service skipped this week due to weather delays.</p>
                              </div>
                            </div>
                          )}

                          {day.originalServiceDay && day.delayed && !day.skipped && (
                            <div className="mt-2 bg-amber-500/10 p-2 rounded-lg border border-amber-500/30 text-xs">
                              <div className="flex items-start">
                                <AlertTriangle className="h-3 w-3 text-amber-500 mr-1 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-300">
                                  Delayed by 2 days due to {WEATHER_IMPACT[day.weather].label.toLowerCase()}.
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </>
              )}
            </div>

            <div className="bg-slate-800/80 rounded-xl p-4 border border-slate-700/50 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Robot Advantage</h3>

              <div className="bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/30 mb-4">
                <div className="flex items-center mb-2">
                  <Bot className="h-5 w-5 text-emerald-500 mr-2" />
                  <h4 className="font-semibold text-white text-sm">Robot Reliability</h4>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-gray-300 text-xs">Daily operation:</span>
                  <span className="text-lg font-bold text-emerald-400">99.8%</span>
                </div>

                <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                  <div className="h-2 rounded-full bg-emerald-500" style={{ width: "99.8%" }} />
                </div>

                <p className="text-gray-300 text-xs">Robot mowers work every day, regardless of weather.</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="bg-slate-700/50 p-2 rounded-lg border border-slate-600/50">
                  <h4 className="font-medium text-white text-xs mb-1 flex items-center">
                    <Check className="h-3 w-3 text-emerald-500 mr-1" />
                    Weather Resistant
                  </h4>
                  <p className="text-gray-300 text-xs">
                    Operates in light rain and returns to charging during downpours.
                  </p>
                </div>

                <div className="bg-slate-700/50 p-2 rounded-lg border border-slate-600/50">
                  <h4 className="font-medium text-white text-xs mb-1 flex items-center">
                    <Check className="h-3 w-3 text-emerald-500 mr-1" />
                    Daily Maintenance
                  </h4>
                  <p className="text-gray-300 text-xs">Trims a small amount each day, keeping your lawn perfect.</p>
                </div>
              </div>

              <Button
                onClick={handleCallChris}
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-medium w-full"
                size="sm"
              >
                <Phone className="mr-2 h-4 w-4" /> Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
