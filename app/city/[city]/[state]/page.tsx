import type { Metadata } from "next"
import WikiCityTemplate from "@/components/wiki-city-template"
import { getCityData } from "@/lib/market-data/cities"

interface CityPageProps {
  params: {
    city: string
    state: string
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city, state } = params
  const formattedCity = city.replace(/-/g, " ")
  const formattedState = state.replace(/-/g, " ")

  return {
    title: `${formattedCity}, ${formattedState} - City Information`,
    description: `Learn about ${formattedCity}, ${formattedState} and discover local services available in this area.`,
  }
}

export default function CityPage({ params }: CityPageProps) {
  const { city, state } = params
  const formattedCity = city.replace(/-/g, " ")
  const formattedState = state.replace(/-/g, " ")

  // Try to get coordinates from our market data if available
  const cityData = getCityData(state, city)
  const coordinates = cityData ? cityData.coordinates : undefined

  return <WikiCityTemplate cityName={formattedCity} stateName={formattedState} coordinates={coordinates} />
}

// Generate static paths for our known cities
export function generateStaticParams() {
  return [
    { city: "richmond", state: "virginia" },
    { city: "fremont", state: "california" },
    { city: "chandler", state: "arizona" },
    { city: "san-jose", state: "california" },
    { city: "virginia-beach", state: "virginia" },
  ]
}
