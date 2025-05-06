"use client"

import { Check, X } from "lucide-react"

interface CompetitorProps {
  name: string
  price_level?: string
  category_name?: string
}

interface ComparisonTableProps {
  competitor: CompetitorProps
  city: string
  state: string
}

export default function CompetitorComparisonTable({ competitor, city, state }: ComparisonTableProps) {
  // Get price estimate based on price_level
  const getCompetitorPrice = () => {
    switch (competitor.price_level) {
      case "$$$":
        return 150
      case "$$":
        return 120
      case "$":
        return 90
      default:
        return 120
    }
  }

  // Determine if competitor is traditional or modern
  const isTraditional =
    !competitor.category_name ||
    competitor.category_name.toLowerCase().includes("traditional") ||
    competitor.category_name.toLowerCase().includes("lawn")

  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-left py-3 px-4 border-b">Feature</th>
            <th className="text-center py-3 px-4 border-b">SweatyJob</th>
            <th className="text-center py-3 px-4 border-b">{competitor.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-3 px-4 border-b">Service Frequency</td>
            <td className="text-center py-3 px-4 border-b font-medium text-green-600">Daily</td>
            <td className="text-center py-3 px-4 border-b">{isTraditional ? "Weekly/Bi-weekly" : "Varies"}</td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b">Monthly Cost</td>
            <td className="text-center py-3 px-4 border-b font-medium">$79</td>
            <td className="text-center py-3 px-4 border-b">${getCompetitorPrice()}</td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b">Weather Independent</td>
            <td className="text-center py-3 px-4 border-b">
              <Check className="inline h-5 w-5 text-green-500" />
            </td>
            <td className="text-center py-3 px-4 border-b">
              <X className="inline h-5 w-5 text-red-500" />
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b">No Scheduling Required</td>
            <td className="text-center py-3 px-4 border-b">
              <Check className="inline h-5 w-5 text-green-500" />
            </td>
            <td className="text-center py-3 px-4 border-b">
              <X className="inline h-5 w-5 text-red-500" />
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b">Eco-Friendly (Zero Emissions)</td>
            <td className="text-center py-3 px-4 border-b">
              <Check className="inline h-5 w-5 text-green-500" />
            </td>
            <td className="text-center py-3 px-4 border-b">
              <X className="inline h-5 w-5 text-red-500" />
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b">Smart App Control</td>
            <td className="text-center py-3 px-4 border-b">
              <Check className="inline h-5 w-5 text-green-500" />
            </td>
            <td className="text-center py-3 px-4 border-b">
              <X className="inline h-5 w-5 text-red-500" />
            </td>
          </tr>
          <tr>
            <td className="py-3 px-4 border-b">Maintenance Included</td>
            <td className="text-center py-3 px-4 border-b">
              <Check className="inline h-5 w-5 text-green-500" />
            </td>
            <td className="text-center py-3 px-4 border-b">
              <X className="inline h-5 w-5 text-red-500" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
