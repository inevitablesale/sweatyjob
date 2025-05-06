"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, MapPin, Star, Clock, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import LocalAreaMap from "./local-area-map"

interface CompetitorProps {
  name: string
  city: string
  state: string
  address?: string
  latitude?: number
  longitude?: number
  description?: string
  review_text?: string
  reviewer_name?: string
  review_rating?: number
  price_level?: string
}

interface SeoKeywordsProps {
  robotLawnMower: string
  lawnMowerRepair: string
  lawnMowerRental: string
}

interface WikipediaDataProps {
  title?: string
  extract?: string
  imageUrl?: string
}

interface CensusDataProps {
  population?: number
  medianIncome?: number
  medianHomeValue?: number
  homeownershipRate?: number
}

interface GaryVComparisonProps {
  competitor: CompetitorProps
  wikipediaData: WikipediaDataProps | null
  censusData: CensusDataProps | null
  poiData: any[]
  seoKeywords: SeoKeywordsProps
  slug: string
}

export default function GaryVComparison({
  competitor,
  wikipediaData,
  censusData,
  poiData,
  seoKeywords,
  slug,
}: GaryVComparisonProps) {
  const [weather, setWeather] = useState<any>(null)
  const [weatherLoading, setWeatherLoading] = useState(true)

  // Fetch weather data
  useEffect(() => {
    async function fetchWeather() {
      try {
        setWeatherLoading(true)
        // Using Open-Meteo API which doesn't require an API key
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=37.5407&longitude=-77.4360&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York",
        )

        if (!response.ok) {
          throw new Error(`Weather API responded with status: ${response.status}`)
        }

        const data = await response.json()

        // Transform the data to match our expected format
        const weatherInfo = getWeatherDescription(data.current.weather_code)

        const transformedData = {
          current: {
            temp: Math.round(data.current.temperature_2m),
            feels_like: Math.round(data.current.apparent_temperature),
            humidity: data.current.relative_humidity_2m,
            wind_speed: data.current.wind_speed_10m,
            weather: [
              {
                main: weatherInfo.description.includes("rain")
                  ? "Rain"
                  : weatherInfo.description.includes("cloud")
                    ? "Clouds"
                    : weatherInfo.description.includes("clear")
                      ? "Clear"
                      : "Clouds",
                description: weatherInfo.description,
                icon: weatherInfo.icon,
              },
            ],
          },
        }

        setWeather(transformedData)
      } catch (error) {
        console.error("Error fetching weather:", error)
      } finally {
        setWeatherLoading(false)
      }
    }

    fetchWeather()
  }, [])

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

  // Get price estimate based on price_level
  const getCompetitorPrice = () => {
    switch (competitor.price_level) {
      case "$$$":
        return 150
      case "$$":
        return 120
      case "$":
        return 90
      default:
        return 120
    }
  }

  // Custom footer with SEO keywords

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Wikipedia Image at the top if available */}
        {wikipediaData?.imageUrl && (
          <div className="mb-8 relative">
            <div className="w-full h-[300px] md:h-[400px] relative rounded-xl overflow-hidden">
              <Image
                src={wikipediaData.imageUrl || "/placeholder.svg"}
                alt={`${competitor.city}, ${competitor.state}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">SweatyJob vs {competitor.name}</h1>
                <p className="text-xl text-white flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  {competitor.city}, {competitor.state}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* If no Wikipedia image, show regular header */}
        {!wikipediaData?.imageUrl && (
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">SweatyJob vs {competitor.name}</h1>
            <p className="text-lg text-gray-600 flex items-center">
              <MapPin className="h-5 w-5 mr-1" />
              {competitor.city}, {competitor.state}
            </p>
          </div>
        )}

        {/* Weather Widget - Moved to top */}
        {!weatherLoading && weather && (
          <div className="mb-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  {weather.current.temp}°F in {competitor.city}
                </h3>
                <p className="text-blue-100">{weather.current.weather[0].description}</p>
              </div>
              <div className="text-4xl">{weather.current.weather[0].icon}</div>
            </div>
            <p className="mt-3 text-blue-100">
              {weather.current.weather[0].main === "Rain"
                ? `It's raining in ${competitor.city} today - our robot mowers work rain or shine!`
                : weather.current.temp > 85
                  ? `It's ${weather.current.temp}° in ${competitor.city} today - stay cool while our robots handle your lawn.`
                  : `Current conditions in ${competitor.city}: ${weather.current.temp}° and ${weather.current.weather[0].description.toLowerCase()}.`}
            </p>
          </div>
        )}

        {/* Gary V Style Intro Section */}
        <div className="mb-12 bg-black text-white p-8 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            THE TRUTH ABOUT LAWN CARE IN {competitor.city.toUpperCase()}
          </h2>
          <p className="text-xl mb-6">
            Look, here's the deal. You've got two options for your lawn in {competitor.city}:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-300">OPTION 1: {competitor.name}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                  <span>Weekly or bi-weekly service</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                  <span>Schedule depends on weather</span>
                </li>
                <li className="flex items-start">
                  <Star className="h-5 w-5 text-gray-400 mr-2 mt-1" />
                  <span>Traditional lawn care approach</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-100">OPTION 2: SweatyJob</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-1" />
                  <span>Daily automated mowing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-1" />
                  <span>Weather independent service</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-400 mr-2 mt-1" />
                  <span>Modern robotic technology</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-xl font-bold">
              THE CHOICE IS YOURS. But ask yourself: why are you still doing lawn care like it's 1995?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            {/* Customer Review Section - Using actual review data */}
            {competitor.review_text && (
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">What {competitor.name} Customers Say</h2>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="italic text-lg">"{competitor.review_text}"</p>
                    <p className="mt-2 text-right text-sm font-medium">
                      — {competitor.reviewer_name || "Local Customer"}
                      {competitor.review_rating && (
                        <span className="ml-2">
                          {Array(Math.round(competitor.review_rating))
                            .fill(0)
                            .map((_, i) => (
                              <Star key={i} className="inline h-4 w-4 text-yellow-400 fill-yellow-400" />
                            ))}
                        </span>
                      )}
                    </p>
                  </div>

                  <p className="text-lg">
                    While {competitor.name} provides traditional lawn care, SweatyJob offers a modern alternative with
                    daily automated service.
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Lawn Mower Repair Section - Using SEO Keywords */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {seoKeywords.lawnMowerRepair} in {competitor.city}
                </h2>
                <p className="mb-4">
                  Tired of dealing with broken lawn mowers? Many {competitor.city} residents waste time and money on{" "}
                  {seoKeywords.lawnMowerRepair} services every season.
                </p>
                <p className="mb-4">
                  With SweatyJob's robotic lawn care service, you'll never need to worry about{" "}
                  {seoKeywords.lawnMowerRepair} again. Our maintenance team handles everything.
                </p>
                <Link href="/robots/lawn-mower-repair" className="text-green-600 font-semibold flex items-center">
                  Learn more about {seoKeywords.lawnMowerRepair} alternatives
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            {/* Lawn Mower Rental Section - Using SEO Keywords */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {seoKeywords.lawnMowerRental} in {competitor.city}
                </h2>
                <p className="mb-4">
                  Looking into {seoKeywords.lawnMowerRental} options in {competitor.city}? Renting equipment is
                  expensive and time-consuming.
                </p>
                <p className="mb-4">
                  SweatyJob eliminates the need for {seoKeywords.lawnMowerRental} completely. Our service includes all
                  the equipment needed to keep your lawn perfect.
                </p>
                <Link href="/robots/lawn-mower-rental" className="text-green-600 font-semibold flex items-center">
                  Compare {seoKeywords.lawnMowerRental} costs vs. SweatyJob
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div>
            {/* Map Component */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Service Area in {competitor.city}</h2>
                <div className="h-[400px] w-full rounded-lg border overflow-hidden">
                  <LocalAreaMap
                    center={{
                      lat: competitor.latitude || 27.7676, // Default to St. Petersburg if no latitude
                      lng: competitor.longitude || -82.6403, // Default to St. Petersburg if no longitude
                    }}
                    zoom={11}
                    competitor={{
                      name: competitor.name,
                      address: competitor.address,
                      latitude: competitor.latitude,
                      longitude: competitor.longitude,
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
