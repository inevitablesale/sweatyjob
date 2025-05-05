import type { Metadata } from "next"
import { MarketPageTemplate } from "@/components/market-page-template"
import { getCityData, getAllCityPaths } from "@/lib/market-data/cities"
import { notFound } from "next/navigation"

type MarketPageProps = {
  params: {
    state: string
    city: string
  }
}

export async function generateMetadata({ params }: MarketPageProps): Promise<Metadata> {
  const { city, state } = params

  // Get the market data to use the correct city and state names
  const marketData = getCityData(state, city)

  if (!marketData) {
    return {
      title: "Market Not Found",
      description: "The requested market could not be found.",
    }
  }

  return {
    title: `AI Mower Partner Program | ${marketData.city}, ${marketData.state} Market`,
    description: `Join our AI mower partner program in ${marketData.city}, ${marketData.state}. Access market data, growth opportunities, and earn recurring revenue with zero inventory costs.`,
  }
}

export function generateStaticParams() {
  return getAllCityPaths()
}

export default function MarketPage({ params }: MarketPageProps) {
  const { city, state } = params

  // Get market data
  const marketData = getCityData(state, city)

  // If no market data is found, return 404
  if (!marketData) {
    notFound()
  }

  return <MarketPageTemplate data={marketData} />
}
