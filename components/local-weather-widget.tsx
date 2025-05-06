"use client"

import { useEffect, useState } from "react"
import { Cloud, CloudRain, CloudSnow, CloudSun, Sun, Thermometer } from "lucide-react"

interface WeatherData {
  temperature: number
  condition: string
  description: string
}

export default function LocalWeatherWidget({ city, state }: { city: string; state: string }) {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city || !state) {
        setLoading(false)
        setError("Location information missing")
        return
      }

      try {
        // Using Open-Meteo API which doesn't require an API key
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=37.5407&longitude=-77.4360&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York",
        )

        if (!response.ok) {
          throw new Error(`Weather API responded with status: ${response.status}`)
        }

        const data = await response.json()

        // Transform data from Open-Meteo format
        const weatherInfo = getWeatherDescription(data.current.weather_code)

        setWeather({
          temperature: Math.round(data.current.temperature_2m),
          condition: weatherInfo.description,
          description: weatherInfo.description,
        })
        setLoading(false)
      } catch (err) {
        console.error("Error fetching weather:", err)
        setError("Unable to load weather data")
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city, state])

  // Weather code mapping for Open-Meteo API
  function getWeatherDescription(code: number): { description: string; icon: string } {
    const weatherCodes: Record<number, { description: string; icon: string }> = {
      0: { description: "Clear sky", icon: "☀️" },
      1: { description: "Mainly clear", icon: "🌤️" },
      2: { description: "Partly cloudy", icon: "⛅" },
      3: { description: "Overcast", icon: "☁️" },
      45: { description: "Fog", icon: "🌫️" },
      48: { description: "Depositing rime fog", icon: "🌫️" },
      51: { description: "Light drizzle", icon: "🌦️" },
      53: { description: "Moderate drizzle", icon: "🌦️" },
      55: { description: "Dense drizzle", icon: "🌧️" },
      56: { description: "Light freezing drizzle", icon: "🌨️" },
      57: { description: "Dense freezing drizzle", icon: "🌨️" },
      61: { description: "Slight rain", icon: "🌦️" },
      63: { description: "Moderate rain", icon: "🌧️" },
      65: { description: "Heavy rain", icon: "🌧️" },
      66: { description: "Light freezing rain", icon: "🌨️" },
      67: { description: "Heavy freezing rain", icon: "🌨️" },
      71: { description: "Slight snow fall", icon: "🌨️" },
      73: { description: "Moderate snow fall", icon: "🌨️" },
      75: { description: "Heavy snow fall", icon: "❄️" },
      77: { description: "Snow grains", icon: "❄️" },
      80: { description: "Slight rain showers", icon: "🌦️" },
      81: { description: "Moderate rain showers", icon: "🌧️" },
      82: { description: "Violent rain showers", icon: "🌧️" },
      85: { description: "Slight snow showers", icon: "🌨️" },
      86: { description: "Heavy snow showers", icon: "❄️" },
      95: { description: "Thunderstorm", icon: "⛈️" },
      96: { description: "Thunderstorm with slight hail", icon: "⛈️" },
      99: { description: "Thunderstorm with heavy hail", icon: "⛈️" },
    }

    return weatherCodes[code] || { description: "Unknown", icon: "❓" }
  }

  const getWeatherIcon = () => {
    if (!weather) return <Thermometer className="h-6 w-6" />

    const condition = weather.condition.toLowerCase()

    if (condition.includes("clear") || condition.includes("sunny")) {
      return <Sun className="h-6 w-6 text-yellow-500" />
    } else if (condition.includes("cloud") && (condition.includes("sun") || condition.includes("part"))) {
      return <CloudSun className="h-6 w-6 text-gray-500" />
    } else if (condition.includes("cloud")) {
      return <Cloud className="h-6 w-6 text-gray-500" />
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
      return <CloudRain className="h-6 w-6 text-blue-500" />
    } else if (condition.includes("snow")) {
      return <CloudSnow className="h-6 w-6 text-blue-200" />
    }

    return <Thermometer className="h-6 w-6" />
  }

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <p className="text-red-500">Weather data unavailable</p>
      </div>
    )
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            {weather?.temperature}° in {city}
          </h3>
          <p className="text-gray-600">{weather?.condition}</p>
        </div>
        <div>{getWeatherIcon()}</div>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Current conditions in {city}: {weather?.temperature}° and {weather?.condition.toLowerCase()}.
      </p>
    </div>
  )
}
