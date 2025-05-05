"use client"
import Link from "next/link"
import { cityData } from "@/lib/market-data/cities"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight, TrendingUp, Users, DollarSign, Clock } from "lucide-react"

export default function MarketsPageClient() {
  // Group cities by region
  const regions: Record<string, typeof cityData> = {
    West: {},
    Southwest: {},
    Midwest: {},
    Southeast: {},
    Northeast: {},
  }

  // Determine region based on state
  const getRegion = (state: string) => {
    const westStates = [
      "California",
      "Washington",
      "Oregon",
      "Nevada",
      "Alaska",
      "Hawaii",
      "Idaho",
      "Montana",
      "Wyoming",
      "Utah",
      "Colorado",
    ]
    const southwestStates = ["Arizona", "New Mexico", "Texas", "Oklahoma"]
    const midwestStates = [
      "Ohio",
      "Indiana",
      "Michigan",
      "Illinois",
      "Missouri",
      "Wisconsin",
      "Minnesota",
      "Iowa",
      "Kansas",
      "Nebraska",
      "South Dakota",
      "North Dakota",
    ]
    const southeastStates = [
      "Virginia",
      "West Virginia",
      "Kentucky",
      "Tennessee",
      "North Carolina",
      "South Carolina",
      "Georgia",
      "Florida",
      "Alabama",
      "Mississippi",
      "Arkansas",
      "Louisiana",
    ]
    const northeastStates = [
      "Maine",
      "New Hampshire",
      "Vermont",
      "Massachusetts",
      "Rhode Island",
      "Connecticut",
      "New York",
      "New Jersey",
      "Pennsylvania",
      "Delaware",
      "Maryland",
    ]

    if (westStates.includes(state)) return "West"
    if (southwestStates.includes(state)) return "Southwest"
    if (midwestStates.includes(state)) return "Midwest"
    if (southeastStates.includes(state)) return "Southeast"
    if (northeastStates.includes(state)) return "Northeast"
    return "Other"
  }

  // Populate regions
  Object.entries(cityData).forEach(([key, data]) => {
    const region = getRegion(data.state)
    if (regions[region]) {
      regions[region][key] = data
    }
  })

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Header Alert */}
      <div className="bg-[#f5df4d] text-black py-3 px-4 text-center font-bold">
        URGENT: Only accepting 3 partners per market - 70% of spots already filled
      </div>

      <section className="relative bg-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight">
              FIND YOUR <span className="text-[#f5df4d]">MARKET</span>.<br />
              CLAIM YOUR <span className="text-[#f5df4d]">TERRITORY</span>.
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              These markets are READY for AI mower services. Homeowners are WAITING. Don't let your competition beat you
              to it.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-zinc-900 p-6 rounded-lg flex items-start">
                <DollarSign className="h-8 w-8 text-[#f5df4d] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">$69/MONTH</h3>
                  <p>Recurring profit PER CUSTOMER</p>
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg flex items-start">
                <Users className="h-8 w-8 text-[#f5df4d] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">ZERO COMPETITION</h3>
                  <p>Limited partners per market</p>
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg flex items-start">
                <Clock className="h-8 w-8 text-[#f5df4d] mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">ACT NOW</h3>
                  <p>Markets filling up fast</p>
                </div>
              </div>
            </div>

            <Link
              href="/partners/form"
              className="inline-flex items-center px-8 py-4 text-lg font-bold bg-[#f5df4d] text-black rounded-md hover:bg-[#f0d73a] transition-all"
            >
              APPLY NOW <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
            AVAILABLE <span className="text-[#f5df4d]">MARKETS</span>
          </h2>

          {Object.entries(regions).map(
            ([region, cities]) =>
              Object.keys(cities).length > 0 && (
                <div key={region} className="mb-16">
                  <div className="flex items-center mb-8">
                    <h3 className="text-3xl font-bold text-white">{region}</h3>
                    <div className="h-1 bg-[#f5df4d] flex-grow ml-4"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(cities).map(([key, city]) => {
                      // Create URL-friendly versions of city and state
                      const citySlug = city.city.toLowerCase().replace(/\s+/g, "-")
                      const stateSlug = city.state.toLowerCase().replace(/\s+/g, "-")

                      // Calculate potential monthly revenue
                      const potentialCustomers = Math.round((city.population / 2.5) * 0.01) // Assuming 1% of households
                      const potentialRevenue = potentialCustomers * 69

                      return (
                        <Link
                          key={key}
                          href={`/partners/markets/${stateSlug}/${citySlug}`}
                          className="block transition-transform hover:translate-y-[-5px]"
                        >
                          <Card className="h-full border-none bg-black shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                            <div className="h-48 bg-zinc-800 relative overflow-hidden">
                              <img
                                src={city.heroImageUrl || "/placeholder.svg"}
                                alt={`${city.city}, ${city.state}`}
                                className="w-full h-full object-cover opacity-80"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                              <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <MapPin className="h-5 w-5 text-[#f5df4d] mr-2" />
                                    <h3 className="text-xl font-bold text-white">
                                      {city.city}, {city.state}
                                    </h3>
                                  </div>
                                  <span className="bg-[#f5df4d] text-black text-xs font-bold px-2 py-1 rounded">
                                    HOT MARKET
                                  </span>
                                </div>
                              </div>
                            </div>
                            <CardContent className="p-6 bg-zinc-900">
                              <div className="flex justify-between mb-4">
                                <div>
                                  <p className="text-sm text-zinc-400">Population</p>
                                  <p className="font-semibold text-white">{city.population.toLocaleString()}</p>
                                </div>
                                <div>
                                  <p className="text-sm text-zinc-400">Homeownership</p>
                                  <p className="font-semibold text-white">{city.homeownershipRate}%</p>
                                </div>
                                <div>
                                  <p className="text-sm text-zinc-400">Growth</p>
                                  <p className="font-semibold text-white">{city.growthRate}%</p>
                                </div>
                              </div>

                              <div className="mt-4 pt-4 border-t border-zinc-800">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <TrendingUp className="h-5 w-5 text-[#f5df4d] mr-2" />
                                    <p className="text-sm text-zinc-400">Potential Monthly Revenue</p>
                                  </div>
                                  <p className="font-bold text-[#f5df4d]">${potentialRevenue.toLocaleString()}</p>
                                </div>
                              </div>

                              <div className="mt-4 flex justify-between items-center">
                                <p className="text-sm text-zinc-400">
                                  <span className="text-[#f5df4d] font-bold">
                                    {3 - Math.min(3, Math.floor(Math.random() * 3))}
                                  </span>{" "}
                                  partner spots left
                                </p>
                                <span className="inline-flex items-center text-[#f5df4d]">
                                  View Market <ArrowRight className="ml-1 h-4 w-4" />
                                </span>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              ),
          )}
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            DON'T WAIT. <span className="text-[#f5df4d]">MARKETS ARE FILLING UP.</span>
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            The opportunity is NOW. Every day you wait is money left on the table. Secure your territory before someone
            else does.
          </p>
          <Link
            href="/partners/form"
            className="inline-flex items-center px-8 py-4 text-lg font-bold bg-[#f5df4d] text-black rounded-md hover:bg-[#f0d73a] transition-all"
          >
            CLAIM YOUR MARKET NOW <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-zinc-900 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400">
            © {new Date().getFullYear()} SweatyJob |{" "}
            <Link href="/partners" className="underline">
              Partners
            </Link>{" "}
            |{" "}
            <Link href="/about" className="underline">
              About
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
