import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PartnerB2BSectionProps {
  competitorName: string
  city: string
  state: string
  censusData?: any
}

export const PartnerB2BSection: React.FC<PartnerB2BSectionProps> = ({ competitorName, city, state, censusData }) => {
  // Calculate potential market size based on census data if available
  const population = censusData?.population || "thousands of"
  const homeownershipRate = censusData?.homeownershipRate || 65
  const potentialCustomers = Math.round((population * homeownershipRate) / 100)

  return (
    <section className="bg-gray-50 py-12 px-4 mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Service Partner Opportunities in {city}, {state}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-lg">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-2xl">Become a SweatyJob Partner</CardTitle>
              <CardDescription>Join our network of professional service providers</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>
                    Access to {potentialCustomers.toLocaleString()}+ potential customers in {city}
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Compete directly with {competitorName} for market share</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Leverage our technology platform to reduce costs</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated scheduling, billing, and customer management</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-green-600 hover:bg-green-700">Apply to Become a Partner</Button>
            </CardFooter>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-2xl">Market Insights</CardTitle>
              <CardDescription>
                Data-driven opportunities in {city}, {state}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Population</h4>
                  <p className="text-2xl font-bold">
                    {typeof population === "number" ? population.toLocaleString() : population}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Homeownership Rate</h4>
                  <p className="text-2xl font-bold">{homeownershipRate}%</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Potential Customer Base</h4>
                  <p className="text-2xl font-bold">{potentialCustomers.toLocaleString()}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Competitor Presence</h4>
                  <p className="text-lg">{competitorName} and others</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Download Market Report
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to grow your lawn care business?</h3>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Schedule a Partner Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}

export default PartnerB2BSection
