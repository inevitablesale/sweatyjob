"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bug, Droplet, Leaf, Paintbrush, Info, AlertTriangle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface CensusDataProps {
  population?: number | null
  medianIncome?: number | null
  medianHomeValue?: number | null
  medianAge?: number | null
  homeownershipRate?: number | null
  householdSize?: number | string | null
  dataSource?: string
}

interface PartnerCensusInsightsProps {
  censusData: CensusDataProps | null
  city: string
  state: string
  competitor?: string
}

export default function PartnerCensusInsights({ censusData, city, state, competitor }: PartnerCensusInsightsProps) {
  const [activeTab, setActiveTab] = useState("lawn-care")

  // Handle missing data gracefully
  if (!censusData) {
    return (
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex items-center justify-center flex-col gap-2 py-8">
            <AlertTriangle className="h-12 w-12 text-yellow-500" />
            <p className="text-center text-gray-500">Census data not available for {city}, {state}.</p>
            <p className="text-center text-gray-400 text-sm">
              The API could not retrieve demographic information for this location.
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Calculate potential market sizes with fallbacks for missing data
  const avgHouseholdSize = typeof censusData.householdSize === "string" 
    ? Number.parseFloat(censusData.householdSize) 
    : (censusData.householdSize || 2.5)
  
  const totalHomes = censusData.population 
    ? Math.round(censusData.population / avgHouseholdSize)
    : 0
  
  const homeownershipRate = censusData.homeownershipRate || 65 // National average as fallback
  const ownedHomes = totalHomes ? Math.round(totalHomes * (homeownershipRate / 100)) : 0

  return (
    <Card className="mb-8">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Market Insights for Service Partners</CardTitle>
        {censusData.dataSource && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex items-center text-xs text-gray-500">
                  <Info className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline">Data source: {censusData.dataSource}</span>
                  <span className="sm:hidden">Source</span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Census data for {city}, {state} from {censusData.dataSource}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Population</p>
            <p className="text-2xl font-bold">{censusData.population?.toLocaleString() || "N/A"}</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Homeownership Rate</p>
            <p className="text-2xl font-bold">{censusData.homeownershipRate || "N/A"}%</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-500 mb-1">Median Income</p>
            <p className="text-2xl font-bold">${censusData.medianIncome?.toLocaleString() || "N/A"}</p>
          </div>
        </div>

        <Tabs defaultValue="lawn-care" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-4">
            <TabsTrigger value="lawn-care" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span className="hidden md:inline">Lawn Care</span>
            </TabsTrigger>
            <TabsTrigger value="pest-control" className="flex items-center gap-2">
              <Bug className="h-4 w-4" />
              <span className="hidden md:inline">Pest Control</span>
            </TabsTrigger>
            <TabsTrigger value="irrigation" className="flex items-center gap-2">
              <Droplet className="h-4 w-4" />
              <span className="hidden md:inline">Irrigation</span>
            </TabsTrigger>
            <TabsTrigger value="landscape" className="flex items-center gap-2">
              <Leaf className="h-4 w-4" />
              <span className="hidden md:inline">Landscape</span>
            </TabsTrigger>
            <TabsTrigger value="exterior" className="flex items-center gap-2">
              <Paintbrush className="h-4 w-4" />
              <span className="hidden md:inline">Exterior</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lawn-care" className="border rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Lawn Care Partner Opportunities</h3>
            <p className="mb-4">
              With approximately {ownedHomes.toLocaleString()} owner-occupied homes in {city}, there's significant
              potential for lawn care services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">SweatyJob Partnership Benefits</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Access to {Math.round(ownedHomes * 0.1).toLocaleString()} potential SweatyJob customers</li>
                  <li>Complementary service offerings (fertilization, aeration)</li>
                  <li>Reduced customer acquisition costs</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Market Indicators</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Median home value: ${censusData.medianHomeValue?.toLocaleString() || "N/A"}</li>
                  <li>Median household income: ${censusData.medianIncome?.toLocaleString() || "N/A"}</li>
                  <li>Average household size: {censusData.householdSize || "N/A"}</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="pest-control" className="border rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Pest Control Partner Opportunities</h3>
            <p className="mb-4">
              Pest control services are highly complementary to our robot mowing service, with{" "}
              {ownedHomes.toLocaleString()} potential households in {city}.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">SweatyJob Partnership Benefits</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cross-promotion to established customer base</li>
                  <li>Bundled service offerings for higher conversion</li>
                  <li>Reduced marketing costs through co-marketing</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Market Indicators</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Homeownership rate: {censusData.homeownershipRate || "N/A"}%</li>
                  <li>Median age: {censusData
