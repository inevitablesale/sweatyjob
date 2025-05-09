"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { getSupabaseClient } from "@/lib/supabase/client"

interface CompetitorComparisonProps {
  competitors: any[]
  onFilter?: (competitorId: string) => Promise<any[]>
}

export default function CompetitorComparison({ competitors, onFilter }: CompetitorComparisonProps) {
  const [selectedCompetitor, setSelectedCompetitor] = useState<string | null>(null)
  const [comparisonData, setComparisonData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const supabase = getSupabaseClient()

  // Select first competitor by default when data loads
  useEffect(() => {
    if (competitors.length > 0 && !selectedCompetitor) {
      setSelectedCompetitor(competitors[0]?.id || competitors[0]?.slug)
    }
  }, [competitors, selectedCompetitor])

  // Load comparison data when a competitor is selected
  useEffect(() => {
    const loadComparisonData = async () => {
      if (!selectedCompetitor) return

      setIsLoading(true)
      try {
        // If we have an onFilter function, use it
        if (onFilter) {
          const data = await onFilter(selectedCompetitor)
          setComparisonData(data)
        } else {
          // Otherwise, use hardcoded comparison data
          setComparisonData([
            {
              feature: "SmartYard Mapping",
              sweatyjob: true,
              competitor: false,
              description: "AI-powered lawn mapping for precise coverage",
            },
            {
              feature: "Obstacle Detection",
              sweatyjob: true,
              competitor: true,
              description: "Advanced sensors to avoid obstacles",
            },
            {
              feature: "Weather Adaptation",
              sweatyjob: true,
              competitor: false,
              description: "Adjusts mowing schedule based on weather forecasts",
            },
            {
              feature: "Mobile App Control",
              sweatyjob: true,
              competitor: true,
              description: "Control your mower from anywhere",
            },
            {
              feature: "Quiet Operation",
              sweatyjob: true,
              competitor: true,
              description: "Whisper-quiet motors for any time of day",
            },
            {
              feature: "Edge Cutting Technology",
              sweatyjob: true,
              competitor: false,
              description: "Gets closer to edges than traditional mowers",
            },
            {
              feature: "Anti-Theft Protection",
              sweatyjob: true,
              competitor: true,
              description: "GPS tracking and alarm systems",
            },
            {
              feature: "Lawn Health Monitoring",
              sweatyjob: true,
              competitor: false,
              description: "Sensors detect lawn health issues",
            },
          ])
        }
      } catch (error) {
        console.error("Error loading comparison data:", error)
        setComparisonData([])
      } finally {
        setIsLoading(false)
      }
    }

    loadComparisonData()
  }, [selectedCompetitor, onFilter])

  const handleCompetitorSelect = (id: string) => {
    setSelectedCompetitor(id)
  }

  // Find the selected competitor object
  const selectedCompetitorObj = competitors.find((c) => c.id === selectedCompetitor || c.slug === selectedCompetitor)

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">
          CRUSH THE <span className="text-sweat-500">COMPETITION</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {competitors.map((competitor) => (
            <Button
              key={competitor.id || competitor.slug}
              onClick={() => handleCompetitorSelect(competitor.id || competitor.slug)}
              className={`px-6 py-3 text-lg ${
                selectedCompetitor === (competitor.id || competitor.slug)
                  ? "bg-sweat-500 hover:bg-sweat-600"
                  : "bg-night-800 hover:bg-night-700"
              }`}
            >
              {competitor.title || competitor.name || "Competitor"}
            </Button>
          ))}
        </div>

        <div className="bg-night-900 rounded-xl p-6 md:p-10 shadow-2xl">
          <h3 className="text-3xl font-bold mb-8 text-center">
            SweatyJob vs. {selectedCompetitorObj?.title || selectedCompetitorObj?.name || "Competitor"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-night-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Feature</h4>
              {comparisonData.map((item, index) => (
                <div key={index} className="py-3 border-b border-night-700">
                  <p className="font-medium">{item.feature}</p>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-sweat-900 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-sweat-500">SweatyJob</h4>
              {comparisonData.map((item, index) => (
                <div key={index} className="py-3 border-b border-sweat-800">
                  <p className="font-medium">{item.sweatyjob ? "✅ Included" : "❌ Not Available"}</p>
                </div>
              ))}
            </div>

            <div className="bg-night-800 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">
                {selectedCompetitorObj?.title || selectedCompetitorObj?.name || "Competitor"}
              </h4>
              {comparisonData.map((item, index) => (
                <div key={index} className="py-3 border-b border-night-700">
                  <p className="font-medium">{item.competitor ? "✅ Included" : "❌ Not Available"}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-sweat-500 hover:bg-sweat-600 text-white px-8 py-4 text-xl rounded-full">
              GET STARTED WITH SWEATYJOB
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
