"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface Competitor {
  id: string
  name?: string
  title?: string
  city?: string
  state?: string
}

interface GaryVHeroProps {
  competitors: Competitor[]
}

export default function GaryVHero({ competitors }: GaryVHeroProps) {
  const [featuredCities, setFeaturedCities] = useState<any[]>([])

  useEffect(() => {
    // Extract unique cities from competitors
    const cities = new Map()

    competitors.forEach((competitor) => {
      if (competitor.city && competitor.state) {
        const key = `${competitor.city}, ${competitor.state}`
        if (!cities.has(key)) {
          cities.set(key, {
            city: competitor.city,
            state: competitor.state,
            count: 1,
          })
        } else {
          const city = cities.get(key)
          city.count++
          cities.set(key, city)
        }
      }
    })

    // Convert to array and take top 2
    const topCities = Array.from(cities.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, 2)

    setFeaturedCities(topCities)
  }, [competitors])

  // Function to get city image URL
  const getCityImageUrl = (city: string, state: string) => {
    // Use specific city images if available
    const cityKey = `${city}-${state}`.toLowerCase().replace(/\s+/g, "-")

    // Map of known cities to their image URLs
    const cityImages: Record<string, string> = {
      "dallas-texas": "https://images.unsplash.com/photo-1545194445-dddb8f4487c6?q=80&w=800&auto=format&fit=crop",
      "portland-oregon": "https://images.unsplash.com/photo-1572206912757-5a78ff4d79be?q=80&w=800&auto=format&fit=crop",
      "austin-texas": "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=800&auto=format&fit=crop",
      "seattle-washington":
        "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?q=80&w=800&auto=format&fit=crop",
      "chicago-illinois":
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
      "new-york-new-york":
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop",
      "los-angeles-california":
        "https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=800&auto=format&fit=crop",
      "san-francisco-california":
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=800&auto=format&fit=crop",
      "denver-colorado": "https://images.unsplash.com/photo-1546156929-a4c0ac411f47?q=80&w=800&auto=format&fit=crop",
      "phoenix-arizona": "https://images.unsplash.com/photo-1558059340-5a4d30ad2a1a?q=80&w=800&auto=format&fit=crop",
    }

    // Return the specific image if available
    if (cityImages[cityKey]) {
      return cityImages[cityKey]
    }

    // Otherwise, use a placeholder with the city name
    return `/placeholder.svg?height=400&width=800&query=${encodeURIComponent(city)}%20${encodeURIComponent(state)}%20skyline`
  }

  return (
    <section className="py-12 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            We Beat <span className="text-green-500">Every</span> Lawn Service in Your City
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Our robot mowers outperform traditional lawn services in every metric: price, quality, and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {featuredCities.map((city, index) => (
            <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
              <div className="relative h-64 w-full">
                <Image
                  src={getCityImageUrl(city.city, city.state) || "/placeholder.svg"}
                  alt={`${city.city}, ${city.state}`}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 flex items-center">
                  <div className="bg-green-500 p-2 rounded-full mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    {city.city}, {city.state}
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-lg text-gray-300">{city.count} competitors</p>
                  <span className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    WE BEAT THEM ALL
                  </span>
                </div>

                <p className="text-lg mb-6">
                  The {city.count} lawn services in {city.city} can't compete with our robot mowers.
                </p>

                <Link
                  href={`/robots?city=${encodeURIComponent(city.city)}&state=${encodeURIComponent(city.state)}`}
                  className="inline-flex items-center text-green-500 font-bold text-lg hover:text-green-400 transition-colors"
                >
                  GET YOUR ROBOT MOWER <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
