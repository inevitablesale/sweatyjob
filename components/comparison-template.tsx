import { Check, X } from "lucide-react"

interface ComparisonFeature {
  name: string
  sweatyJob: boolean
  competitor: boolean
}

interface ComparisonProps {
  competitorName: string
  features: ComparisonFeature[]
  sweatyJobPrice?: string
  competitorPrice?: string
}

export default function ComparisonTemplate({
  competitorName,
  features,
  sweatyJobPrice = "$99/mo",
  competitorPrice = "$120/mo",
}: ComparisonProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-3">How We Compare</h3>
      <p className="text-gray-700 mb-4">
        Traditional crews miss appointments, cancel due to weather, or leave uneven cuts. Here's how we compare:
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Feature</th>
              <th className="text-center py-2">Sweaty Job</th>
              <th className="text-center py-2">{competitorName}</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{feature.name}</td>
                <td className="text-center py-2">
                  {feature.sweatyJob ? (
                    <Check className="inline h-5 w-5 text-green-600" />
                  ) : (
                    <X className="inline h-5 w-5 text-red-500" />
                  )}
                </td>
                <td className="text-center py-2">
                  {feature.competitor ? (
                    <Check className="inline h-5 w-5 text-green-600" />
                  ) : (
                    <X className="inline h-5 w-5 text-red-500" />
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td className="py-2 font-medium">Monthly pricing</td>
              <td className="text-center py-2">{sweatyJobPrice}</td>
              <td className="text-center py-2">{competitorPrice}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-gray-700">
        Add in our 30-day trial, app-based controls, and no contract guarantee — and it's easy to see why Sweaty Job is
        becoming the default choice in the area.
      </p>
    </div>
  )
}
