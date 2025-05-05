import { MarketPageTemplate } from "@/components/market-page-template"
import { getCityData } from "@/lib/market-data/cities"

export const metadata = {
  title: "AI Mower Partner Program | Fremont, California Market",
  description:
    "Join our AI mower partner program in Fremont, California. Access market data, growth opportunities, and earn recurring revenue with zero inventory costs.",
}

export default function FremontPage() {
  // Get the Fremont market data
  const marketData = getCityData("california", "fremont")

  return <MarketPageTemplate data={marketData} />
}
