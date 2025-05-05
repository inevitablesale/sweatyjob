import Link from "next/link"
import { cityData } from "@/lib/market-data/cities"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ChevronRight } from "lucide-react"
import { notFound } from "next/navigation"

type StatePageProps = {
  params: {
    state: string
  }
}

export function generateMetadata({ params }: StatePageProps) {
  const { state } = params

  // Find any city in this state to get the proper state name
  const stateCity = Object.values(cityData).find(
    (city) => city.state.toLowerCase().replace(/\s+/g, "-") === state.toLowerCase(),
  )

  const formattedState = stateCity
    ? stateCity.state
    : state
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

  return {
    title: `AI Mower Partner Program | ${formattedState} Markets`,
    description: `Explore our AI mower partner program markets in ${formattedState}. Find opportunities to start earning recurring revenue with zero inventory costs.`,
  }
}

export default function StatePage({ params }: StatePageProps) {
  const { state } = params

  // Find any city in this state to get the proper state name
  const stateCity = Object.values(cityData).find(
    (city) => city.state.toLowerCase().replace(/\s+/g, "-") === state.toLowerCase(),
  )

  const formattedState = stateCity
    ? stateCity.state
    : state
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

  // Filter cities by state
  const stateCities = Object.entries(cityData)
    .filter(([_, data]) => data.state.toLowerCase().replace(/\s+/g, "-") === state.toLowerCase())
    .map(([key, data]) => ({ key, ...data }))

  // If no cities found for this state, return 404
  if (stateCities.length === 0) {
    notFound()
  }

  return (
    <main className="pt-24 bg-white">
      <section className="relative bg-gradient-to-br from-green-900 to-green-800 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              AI Mower Partner Markets in {formattedState}
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Explore our available markets in {formattedState} and find opportunities to build your AI mower service
              business with zero inventory costs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/partners/markets" className="text-green-600 hover:text-green-700 flex items-center">
              <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
              Back to All Markets
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stateCities.map((city) => {
              // Create URL-friendly version of city
              const citySlug = city.city.toLowerCase().replace(/\s+/g, "-")

              return (
                <Link
                  key={city.key}
                  href={`/partners/markets/${state}/${citySlug}`}
                  className="block transition-transform hover:translate-y-[-5px]"
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                    <div className="h-48 bg-slate-200 relative overflow-hidden">
                      <img
                        src={city.heroImageUrl || "/placeholder.svg"}
                        alt={`${city.city}, ${city.state}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-4">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-white mr-2" />
                          <h3 className="text-xl font-bold text-white">{city.city}</h3>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between mb-4">
                        <div>
                          <p className="text-sm text-slate-500">Population</p>
                          <p className="font-semibold text-slate-700">{city.population.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Homeownership</p>
                          <p className="font-semibold text-slate-700">{city.homeownershipRate}%</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Climate</p>
                          <p className="font-semibold text-slate-700">{city.climateType || "Temperate"}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-4">
                        {city.waterRestrictions === "Stringent"
                          ? `A water-conscious market with significant opportunities for eco-friendly lawn care solutions.`
                          : `A growing market with ${city.growthRate}% annual growth and ${city.competitorCount} service providers.`}
                      </p>
                      <div className="text-green-600 font-medium flex items-center">
                        View Market Details <ChevronRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
