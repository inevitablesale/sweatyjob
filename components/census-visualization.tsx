"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, DollarSign, TrendingUp, TrendingDown } from "lucide-react"

interface CensusVisualizationProps {
  population?: number
  medianIncome?: number
  medianHomeValue?: number
  medianAge?: number
  homeownershipRate?: number
  householdSize?: number
  city: string
  state: string
}

export default function CensusVisualization({
  population,
  medianIncome,
  medianHomeValue,
  medianAge,
  homeownershipRate,
  householdSize,
  city,
  state,
}: CensusVisualizationProps) {
  // National averages for comparison
  const nationalMedianIncome = 70784 // US median household income
  const nationalMedianHomeValue = 374900 // US median home value
  const nationalHomeownershipRate = 0.65 // US homeownership rate

  // Helper function to determine if a value is above average
  const isAboveAverage = (value: number | undefined, benchmark: number): boolean | undefined => {
    if (value === undefined) return undefined
    return value > benchmark
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-xl font-bold mb-4">
          {city}, {state} Demographics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {population !== undefined && (
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Users className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Population</p>
                <p className="text-lg font-bold">{population.toLocaleString()}</p>
              </div>
            </div>
          )}

          {medianIncome !== undefined && (
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Median Income</p>
                <div className="flex items-center">
                  <p className="text-lg font-bold">${medianIncome.toLocaleString()}</p>
                  {isAboveAverage(medianIncome, nationalMedianIncome) ? (
                    <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 ml-1" />
                  )}
                </div>
              </div>
            </div>
          )}

          {medianHomeValue !== undefined && (
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Home className="h-8 w-8 text-purple-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Median Home Value</p>
                <div className="flex items-center">
                  <p className="text-lg font-bold">${medianHomeValue.toLocaleString()}</p>
                  {isAboveAverage(medianHomeValue, nationalMedianHomeValue) ? (
                    <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 ml-1" />
                  )}
                </div>
              </div>
            </div>
          )}

          {homeownershipRate !== undefined && (
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <Home className="h-8 w-8 text-orange-500 mr-3" />
              <div>
                <p className="text-sm text-gray-500">Homeownership Rate</p>
                <div className="flex items-center">
                  <p className="text-lg font-bold">{(homeownershipRate * 100).toFixed(1)}%</p>
                  {isAboveAverage(homeownershipRate, nationalHomeownershipRate) ? (
                    <TrendingUp className="h-4 w-4 text-green-500 ml-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500 ml-1" />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-4 text-sm text-gray-500">
          <p>Data source: U.S. Census Bureau</p>
        </div>
      </CardContent>
    </Card>
  )
}
