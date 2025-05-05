import { MarketPageTemplate } from "@/components/market-page-template"
import { getCityData } from "@/lib/market-data/cities"

export const metadata = {
  title: "AI Mower Partner Program | Chandler, Arizona Market",
  description:
    "Join our AI mower partner program in Chandler, Arizona. Access market data, growth opportunities, and earn recurring revenue with zero inventory costs.",
}

export default function ChandlerPage() {
  // Get the Chandler market data
  const marketData = getCityData("arizona", "chandler")

  return <MarketPageTemplate data={marketData} />
}
