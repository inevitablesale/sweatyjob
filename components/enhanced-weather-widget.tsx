"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, CloudRain, Sun, Thermometer } from "lucide-react"
import { generateWeatherTips } from "@/lib/content-templates"

interface WeatherData {
  temperature: number
  condition: string
  icon: string
}

interface WeatherWidgetProps {
  latitude: number
  longitude: number
  city: string
  state: string
}

export default function EnhancedWeatherWidget({ latitude, longitude, city, state }: WeatherWidgetProps) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      // Default fallback weather data
      const fallbackWeather = {
        temperature: 75,
        condition: "Sunny",
        icon: "01d",
      }

      if (!latitude || !longitude) {
        console.log("Using fallback weather: No coordinates provided")
        setWeather(fallbackWeather)
        setLoading(false)
        return
      }

      try {
        // Attempt to fetch weather data with a timeout
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 second timeout

        const response = await fetch(`/api/weather?lat=${latitude}&lon=${longitude}`, {
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        if (!response.ok) {
          throw new Error(`Weather API responded with status: ${response.status}`)
        }

        const data = await response.json()

        if (!data || !data.temperature) {
          console.log("Using fallback weather: Invalid data received", data)
          setWeather(fallbackWeather)
        } else {
          setWeather({
            temperature: data.temperature,
            condition: data.condition || "Sunny",
            icon: data.icon || "01d",
          })
        }
      } catch (err) {
        console.log("Using fallback weather due to error:", err)
        // Always set fallback weather data on error
        setWeather(fallbackWeather)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [latitude, longitude])

  const getWeatherIcon = () => {
    if (!weather) return <Sun className="h-10 w-10 text-yellow-500" />

    if (weather.condition.toLowerCase().includes("rain")) {
      return <CloudRain className="h-10 w-10 text-blue-500" />
    } else if (weather.condition.toLowerCase().includes("cloud")) {
      return <Cloud className="h-10 w-10 text-gray-500" />
    } else {
      return <Sun className="h-10 w-10 text-yellow-500" />
    }
  }

  const weatherTip = weather ? generateWeatherTips(weather.temperature, weather.condition, city) : ""

  return (
    <Card className="mb-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <div className="flex items-center">
            {getWeatherIcon()}
            <div className="ml-4">
              <h3 className="text-lg font-medium">Current Weather in {city}</h3>
              {loading ? (
                <p>Loading weather data...</p>
              ) : (
                <div className="flex items-center">
                  <Thermometer className="h-5 w-5 mr-1 text-white" />
                  <span className="text-2xl font-bold">{weather?.temperature}°F</span>
                  <span className="ml-2 text-blue-100">{weather?.condition}</span>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 mt-4 md:mt-0 md:ml-6 p-4 bg-white/20 backdrop-blur-sm rounded-lg">
            <h4 className="font-medium text-white mb-2">TODAY'S LAWN CARE REALITY CHECK:</h4>
            <p className="text-blue-50">{weatherTip}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
