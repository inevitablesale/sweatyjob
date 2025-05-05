"use client"

import { useState } from "react"
import { getRelevantMarkets, getMarketsByRegion } from "@/lib/market-data"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import Link from "next/link"

interface MarketSelectorProps {
  serviceVertical: string
  limit?: number
}

export function MarketSelector({ serviceVertical, limit = 100 }: MarketSelectorProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("all")

  // Get markets relevant to this service vertical
  const relevantMarkets = getRelevantMarkets(serviceVertical, limit)

  // Group markets by region
  const marketsByRegion = getMarketsByRegion(relevantMarkets)

  // Calculate markets per region for the badge counts
  const regionCounts = {
    Northeast: marketsByRegion.Northeast.length,
    Southeast: marketsByRegion.Southeast.length,
    Midwest: marketsByRegion.Midwest.length,
    Southwest: marketsByRegion.Southwest.length,
    all: relevantMarkets.length,
  }

  // Determine which markets to display based on selected region
  const marketsToDisplay =
    selectedRegion === "all" ? relevantMarkets : marketsByRegion[selectedRegion as keyof typeof marketsByRegion]

  return (
    <div className="w-full">
      <Tabs defaultValue="all" onValueChange={setSelectedRegion}>
        <TabsList className="w-full grid grid-cols-2 md:grid-cols-6 mb-6">
          <TabsTrigger value="all" className="relative">
            All Markets
            <span className="absolute -top-2 -right-2 bg-green-500 text-xs text-black font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {regionCounts.all}
            </span>
          </TabsTrigger>
          <TabsTrigger value="Northeast" className="relative">
            Northeast
            <span className="absolute -top-2 -right-2 bg-green-500 text-xs text-black font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {regionCounts.Northeast}
            </span>
          </TabsTrigger>
          <TabsTrigger value="Southeast" className="relative">
            Southeast
            <span className="absolute -top-2 -right-2 bg-green-500 text-xs text-black font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {regionCounts.Southeast}
            </span>
          </TabsTrigger>
          <TabsTrigger value="Midwest" className="relative">
            Midwest
            <span className="absolute -top-2 -right-2 bg-green-500 text-xs text-black font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {regionCounts.Midwest}
            </span>
          </TabsTrigger>
          <TabsTrigger value="Southwest" className="relative">
            Southwest
            <span className="absolute -top-2 -right-2 bg-green-500 text-xs text-black font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {regionCounts.Southwest}
            </span>
          </TabsTrigger>
          <TabsTrigger value="West" className="relative">
            West
            <span className="absolute -top-2 -right-2 bg-green-500 text-xs text-black font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {regionCounts.West}
            </span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedRegion} className="mt-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {marketsToDisplay.map((market, index) => {
              // Check if this is Chandler, AZ or Fremont, CA
              const isChandler = market.city === "Chandler" && market.state === "AZ"
              const isFremont = market.city === "Fremont" && market.state === "CA"

              // Determine the link URL based on the city
              let linkUrl = ""
              if (isChandler) {
                linkUrl = "/partners/markets/arizona/chandler"
              } else if (isFremont) {
                linkUrl = "/partners/markets/california/fremont"
              }

              // Only show link if it's one of our detailed market pages
              const hasDetailPage = isChandler || isFremont

              return (
                <div
                  key={`${market.city}-${market.state}`}
                  className="bg-slate-700 rounded-lg p-3 flex items-center border border-slate-600 hover:border-green-500 transition-colors relative"
                >
                  {hasDetailPage ? (
                    <Link
                      href={linkUrl}
                      className="absolute inset-0"
                      aria-label={`View ${market.city}, ${market.state} market details`}
                    >
                      <span className="sr-only">
                        View {market.city}, {market.state} market details
                      </span>
                    </Link>
                  ) : null}
                  <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">
                    {market.city}, {market.state}
                  </span>
                </div>
              )
            })}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 bg-slate-700 rounded-lg p-6 border border-slate-600">
        <h3 className="text-xl font-bold mb-3 text-center text-white">Don't see your market here?</h3>
        <p className="text-gray-300 text-center mb-4">Enter your phone number to check availability in your area</p>
        <div className="max-w-md mx-auto">
          <PhoneCaptureForm
            source={`${serviceVertical}_market_inquiry`}
            buttonText="Check Availability"
            dark={true}
            showThankYou={true}
            skipRedirect={true}
          />
        </div>
      </div>
    </div>
  )
}
