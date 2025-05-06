import type React from "react"
import { CheckIcon, XIcon } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface CompetitorFeatureComparisonProps {
  competitorName: string
  city: string
}

export const CompetitorFeatureComparison: React.FC<CompetitorFeatureComparisonProps> = ({ competitorName, city }) => {
  const features = [
    {
      feature: "Daily Lawn Maintenance",
      sweatyJob: true,
      competitor: false,
      description: `Unlike ${competitorName} which typically offers weekly or bi-weekly service, SweatyJob provides daily maintenance for a consistently perfect lawn.`,
    },
    {
      feature: "Robotic Technology",
      sweatyJob: true,
      competitor: false,
      description: `SweatyJob uses advanced robotic mowers, while ${competitorName} relies on traditional gas-powered equipment.`,
    },
    {
      feature: "Zero Emissions",
      sweatyJob: true,
      competitor: false,
      description: `SweatyJob's electric robotic mowers produce zero emissions, unlike ${competitorName}'s gas-powered equipment.`,
    },
    {
      feature: "Real-time Monitoring",
      sweatyJob: true,
      competitor: false,
      description: `SweatyJob provides real-time monitoring of your lawn's condition, a feature not offered by ${competitorName}.`,
    },
    {
      feature: "Weather-adaptive Scheduling",
      sweatyJob: true,
      competitor: false,
      description: `Unlike ${competitorName}, SweatyJob automatically adjusts mowing schedules based on weather conditions in ${city}.`,
    },
    {
      feature: "Mobile App Control",
      sweatyJob: true,
      competitor: false,
      description: `SweatyJob offers complete control through our mobile app, while ${competitorName}'s digital capabilities are limited.`,
    },
    {
      feature: "Flexible Subscription",
      sweatyJob: true,
      competitor: false,
      description: `SweatyJob offers flexible subscription options without long-term contracts, unlike ${competitorName}.`,
    },
    {
      feature: "Basic Lawn Mowing",
      sweatyJob: true,
      competitor: true,
      description: "Both services provide basic lawn mowing.",
    },
    {
      feature: "Service in " + city,
      sweatyJob: true,
      competitor: true,
      description: `Both SweatyJob and ${competitorName} service the ${city} area.`,
    },
  ]

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">SweatyJob vs {competitorName}: Feature Comparison</h2>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/3">Feature</TableHead>
                <TableHead className="text-center">SweatyJob</TableHead>
                <TableHead className="text-center">{competitorName}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <TableCell className="font-medium">{feature.feature}</TableCell>
                  <TableCell className="text-center">
                    {feature.sweatyJob ? (
                      <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XIcon className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.competitor ? (
                      <CheckIcon className="h-5 w-5 text-green-500 mx-auto" />
                    ) : (
                      <XIcon className="h-5 w-5 text-red-500 mx-auto" />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Why Choose SweatyJob Over {competitorName}?</h3>
          <p className="text-gray-700">
            While {competitorName} offers traditional lawn care services in {city}, SweatyJob provides a modern,
            technology-driven approach that delivers superior results with greater convenience and environmental
            benefits. Our robotic mowers work daily to maintain your lawn at the perfect height, eliminating the uneven
            growth cycle that occurs with {competitorName}'s less frequent mowing schedule.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CompetitorFeatureComparison
