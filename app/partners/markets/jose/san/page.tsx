import { MarketPageTemplate } from "@/components/market-page-template"
import { getCityData } from "@/lib/market-data/cities"
import { redirect } from "next/navigation"

export const metadata = {
  title: "AI Mower Partner Program | San Jose, California Market",
  description:
    "Join our AI mower partner program in San Jose, California. Access market data, growth opportunities, and earn recurring revenue with zero inventory costs.",
}

export default function SanJosePage() {
  // Get the San Jose market data
  const marketData = getCityData("california", "san-jose")

  // Redirect to the canonical URL if needed
  if (!marketData) {
    redirect("/partners/markets/california/san-jose")
  }

  return <MarketPageTemplate data={marketData} />
}
