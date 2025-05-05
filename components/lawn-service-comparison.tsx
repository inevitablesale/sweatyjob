"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Cloud,
  CloudRain,
  CloudSun,
  Sun,
  Calendar,
  Check,
  X,
  Bot,
  RefreshCw,
  Clock,
  AlertTriangle,
  Phone,
} from "lucide-react"

type WeatherType = "sunny" | "partly-cloudy" | "cloudy" | "rainy" | "heavy-rain"

interface DayForecast {
  day: string
  shortDay: string
  date: number
  weather: WeatherType
  robotMowed: boolean
  traditionalMowed: boolean
  delayed: boolean
  skipped: boolean
}

const WEATHER_ICONS = {
  sunny: { icon: Sun, color: "text-amber-400", bg: "bg-amber-400/10", label: "Sunny" },
  "partly-cloudy": { icon: CloudSun, color: "text-blue-400", bg: "bg-blue-400/10", label: "Partly Cloudy" },
  cloudy: { icon: Cloud, color: "text-slate-400", bg: "bg-slate-400/10", label: "Cloudy" },
  rainy: { icon: CloudRain, color: "text-blue-500", bg: "bg-blue-500/10", label: "Rainy" },
  "heavy-rain": { icon: CloudRain, color: "text-blue-600", bg: "bg-blue-600/10", label: "Heavy Rain" },
}

export default function LawnServiceComparison() {
  const [forecast, setForecast] = useState<DayForecast[]>([])
  const [serviceDay, setServiceDay] = useState<number>(1) // Monday by default
  const [isLoading, setIsLoading] = useState(true)
  const [delayedDays, setDelayedDays] = useState(0)
  const [totalRainDays, setTotalRainDays] = useState(0)
  const [missedService, setMissedService] = useState(false)

  useEffect(() => {
    generateForecast()
  }, [serviceDay])

  const generateForecast = () => {
    setIsLoading(true)

    // Get current date
    const today = new Date()
    const dayOfWeek = today.getDay()

    // Create a week forecast starting from today
    const newForecast: DayForecast[] = []
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    // Generate random weather patterns with at least one rainy day
    const weatherOptions: WeatherType[] = ["sunny", "partly-cloudy", "cloudy", "rainy", "heavy-rain"]
    const weatherPattern: WeatherType[] = []

    // Ensure we have at least one rainy day
    const rainIndex = Math.floor(Math.random() * 7)

    for (let i = 0; i < 7; i++) {
      if (i === rainIndex) {
        weatherPattern.push("rainy")
      } else if (i === (rainIndex + 1) % 7) {
        // 50% chance of a second rainy day
        weatherPattern.push(Math.random() > 0.5 ? "rainy" : "partly-cloudy")
      } else {
        const randomIndex = Math.floor(Math.random() * 3) // Only sunny, partly-cloudy, cloudy
        weatherPattern.push(weatherOptions[randomIndex])
      }
    }

    // Calculate service days and delays
    let rainDays = 0
    let currentDelay = 0
    let traditionalServiceDone = false

    for (let i = 0; i < 7; i++) {
      const currentDayIndex = (dayOfWeek + i) % 7
      const currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      const isRainy = weatherPattern[i] === "rainy" || weatherPattern[i] === "heavy-rain"
      if (isRainy) rainDays++

      // Robot always mows unless heavy rain
      const robotMowed = weatherPattern[i] !== "heavy-rain"

      // Traditional service logic
      let traditionalMowed = false
      let delayed = false
      const skipped = false

      // If it's the scheduled service day
      if (currentDayIndex === serviceDay) {
        if (!isRainy && currentDelay === 0) {
          traditionalMowed = true
          traditionalServiceDone = true
        } else {
          delayed = true
          currentDelay += isRainy ? 2 : 0
        }
      }
      // If service was delayed to this day
      else if (currentDelay > 0 && !traditionalServiceDone) {
        currentDelay--
        if (currentDelay === 0 && !isRainy) {
          traditionalMowed = true
          traditionalServiceDone = true
        } else if (isRainy) {
          delayed = true
          currentDelay += 2
        } else {
          delayed = true
        }
      }

      newForecast.push({
        day: days[currentDayIndex],
        shortDay: shortDays[currentDayIndex],
        date: currentDate.getDate(),
        weather: weatherPattern[i],
        robotMowed,
        traditionalMowed,
        delayed,
        skipped: false,
      })
    }

    // If service never happened, mark as skipped
    if (!traditionalServiceDone) {
      newForecast.forEach((day) => {
        if (day.delayed) {
          day.skipped = true
          day.delayed = false
        }
      })
      setMissedService(true)
    } else {
      setMissedService(false)
    }

    setForecast(newForecast)
    setDelayedDays(currentDelay)
    setTotalRainDays(rainDays)
    setIsLoading(false)
  }

  const handleCallChris = () => {
    window.location.href = "tel:8045739825"
  }

  return (
    <div className="bg-slate-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              <span className="text-amber-400">Robot Reliability</span> vs. DIY Lawn Care
            </h2>
            <p className="text-gray-300">
              See how weather affects your lawn care schedule and why robot mowers are more reliable.
            </p>
          </div>

          <div className="mb-6 bg-slate-800/80 rounded-lg p-4 border border-slate-700/50">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-white font-medium mb-1">Your scheduled service day:</h3>
                <div className="flex space-x-1">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
                    <button
                      key={day}
                      onClick={() => setServiceDay(index)}
                      className={`w-10 h-8 rounded flex items-center justify-center text-sm transition-all ${
                        serviceDay === index
                          ? "bg-amber-500 text-slate-900 font-medium"
                          : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              <Button
                onClick={generateForecast}
                variant="outline"
                size="sm"
                className="text-amber-400 border-amber-500/30 hover:bg-amber-500/10"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                New Forecast
              </Button>
            </div>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {/* Visual timeline comparison */}
              <div className="bg-slate-800/80 rounded-lg p-6 border border-slate-700/50">
                <div className="flex items-center mb-6">
                  <div className="w-1/2 text-center">
                    <div className="inline-flex items-center justify-center bg-emerald-500/20 rounded-full p-2 mb-2">
                      <Bot className="h-6 w-6 text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-medium text-white">Robot Mower</h3>
                    <p className="text-gray-400 text-sm">Daily maintenance, rain or shine</p>
                  </div>
                  <div className="w-1/2 text-center">
                    <div className="inline-flex items-center justify-center bg-amber-500/20 rounded-full p-2 mb-2">
                      <Calendar className="h-6 w-6 text-amber-500" />
                    </div>
                    <h3 className="text-lg font-medium text-white">DIY Mowing</h3>
                    <p className="text-gray-400 text-sm">Weekly effort, weather dependent</p>
                  </div>
                </div>

                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-600 transform -translate-x-1/2"></div>

                  {/* Days */}
                  {forecast.map((day, index) => {
                    const WeatherIcon = WEATHER_ICONS[day.weather].icon
                    const isRainy = day.weather === "rainy" || day.weather === "heavy-rain"

                    return (
                      <div key={index} className="flex items-stretch mb-4 relative">
                        {/* Robot side */}
                        <div className="w-1/2 pr-4 flex justify-end">
                          <div
                            className={`rounded-lg p-3 flex items-center ${
                              day.robotMowed
                                ? "bg-emerald-500/20 border border-emerald-500/30"
                                : "bg-slate-700/50 border border-slate-600/30"
                            }`}
                          >
                            {day.robotMowed ? (
                              <Check className="h-5 w-5 text-emerald-500 mr-2" />
                            ) : (
                              <Clock className="h-5 w-5 text-slate-400 mr-2" />
                            )}
                            <div>
                              <p className="text-white text-sm font-medium">{day.robotMowed ? "Mowed" : "Paused"}</p>
                              <p className="text-xs text-gray-400">
                                {day.robotMowed ? "Automatic daily cutting" : "Waiting for weather to clear"}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Center date marker */}
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <div
                            className={`rounded-full w-10 h-10 flex items-center justify-center ${WEATHER_ICONS[day.weather].bg}`}
                          >
                            <div className="text-xs font-bold">
                              <span className="block text-white leading-none">{day.shortDay}</span>
                              <span className={`block ${WEATHER_ICONS[day.weather].color} leading-none`}>
                                {day.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Traditional service side */}
                        <div className="w-1/2 pl-4">
                          <div
                            className={`rounded-lg p-3 flex items-center ${
                              day.traditionalMowed
                                ? "bg-amber-500/20 border border-amber-500/30"
                                : day.skipped
                                  ? "bg-red-500/10 border border-red-500/30"
                                  : day.delayed
                                    ? "bg-orange-500/10 border border-orange-500/30"
                                    : "bg-slate-700/50 border border-slate-600/30"
                            }`}
                          >
                            {day.traditionalMowed ? (
                              <Check className="h-5 w-5 text-amber-500 mr-2" />
                            ) : day.skipped ? (
                              <X className="h-5 w-5 text-red-500 mr-2" />
                            ) : day.delayed ? (
                              <Clock className="h-5 w-5 text-orange-500 mr-2" />
                            ) : (
                              <span className="w-5 h-5 mr-2" />
                            )}
                            <div>
                              <p className="text-white text-sm font-medium">
                                {day.traditionalMowed
                                  ? "Service Day"
                                  : day.skipped
                                    ? "Skipped"
                                    : day.delayed
                                      ? "Delayed"
                                      : "No Service"}
                              </p>
                              <p className="text-xs text-gray-400">
                                {day.traditionalMowed
                                  ? "Crew arrives and mows"
                                  : day.skipped
                                    ? "Service missed this week"
                                    : day.delayed
                                      ? isRainy
                                        ? "+2 day delay due to rain"
                                        : "Waiting for rescheduled service"
                                      : "Not scheduled"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Weather legend */}
                <div className="mt-6 pt-4 border-t border-slate-700">
                  <p className="text-sm text-white mb-2">Weather conditions:</p>
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(WEATHER_ICONS).map(([key, value]) => (
                      <div key={key} className="flex items-center">
                        <value.icon className={`h-4 w-4 ${value.color} mr-1`} />
                        <span className="text-xs text-gray-300">{value.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/80 rounded-lg p-5 border border-slate-700/50">
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                    <Bot className="h-5 w-5 text-emerald-500 mr-2" />
                    Robot Mower Results
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                      <span className="text-gray-300">Days mowed:</span>
                      <span className="text-lg font-medium text-white">
                        {forecast.filter((d) => d.robotMowed).length} of 7
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                      <span className="text-gray-300">Reliability:</span>
                      <span className="text-lg font-medium text-emerald-400">
                        {Math.round((forecast.filter((d) => d.robotMowed).length / 7) * 100)}%
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Lawn condition:</span>
                      <span className="text-lg font-medium text-emerald-400">Excellent</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/80 rounded-lg p-5 border border-slate-700/50">
                  <h3 className="text-lg font-medium text-white mb-3 flex items-center">
                    <Calendar className="h-5 w-5 text-amber-500 mr-2" />
                    Traditional Service Results
                  </h3>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                      <span className="text-gray-300">Days serviced:</span>
                      <span className="text-lg font-medium text-white">
                        {forecast.filter((d) => d.traditionalMowed).length} of 1
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-slate-700">
                      <span className="text-gray-300">Reliability:</span>
                      <span className={`text-lg font-medium ${missedService ? "text-red-400" : "text-amber-400"}`}>
                        {missedService ? "0%" : "100%"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Lawn condition:</span>
                      <span className="text-lg font-medium text-amber-400">{missedService ? "Overgrown" : "Good"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rain impact explanation */}
              {totalRainDays > 0 && (
                <div className="bg-slate-800/80 rounded-lg p-5 border border-slate-700/50">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">Weather Impact</h3>
                      <p className="text-gray-300">
                        This forecast had {totalRainDays} day{totalRainDays !== 1 ? "s" : ""} of rain, causing a
                        {totalRainDays * 2} day delay for traditional lawn services.
                        {missedService
                          ? " This pushed your service beyond the week, resulting in a missed mowing."
                          : " Your service was delayed but still completed this week."}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="bg-emerald-900/30 rounded-lg p-6 border border-emerald-500/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Never Miss a Mowing Again</h3>
                    <p className="text-gray-300">
                      Switch to our robot mower service and enjoy a perfectly maintained lawn every day, regardless of
                      weather conditions.
                    </p>
                  </div>
                  <Button
                    onClick={handleCallChris}
                    className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium whitespace-nowrap"
                    size="lg"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
