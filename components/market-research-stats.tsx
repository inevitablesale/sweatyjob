import { PieChart, DollarSign, TrendingUp, Users } from "lucide-react"

interface MarketResearchStatsProps {
  title?: string
  marketSize: string
  growthRate: string
  segmentData?: {
    residential: number
    commercial: number
    golfCourses: number
    municipal: number
    rental: number
  }
  dark?: boolean
}

const MarketResearchStats = ({
  title = "Robotic Mower Market Research",
  marketSize = "$5.4 Billion by 2026",
  growthRate = "CAGR of 12.5% (2023-2028)",
  segmentData = {
    residential: 60,
    commercial: 20,
    golfCourses: 10,
    municipal: 5,
    rental: 5,
  },
  dark = false,
}: MarketResearchStatsProps) => {
  const textColor = dark ? "text-white" : "text-gray-800"
  const bgColor = dark ? "bg-slate-800" : "bg-white"
  const borderColor = dark ? "border-slate-700" : "border-gray-200"
  const accentColor = "text-green-500"

  return (
    <div className={`${bgColor} rounded-lg border ${borderColor} p-6 shadow-md`}>
      <h3 className={`text-xl font-bold mb-4 ${textColor}`}>{title}</h3>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="flex items-start">
          <DollarSign className={`h-6 w-6 ${accentColor} mr-3 mt-1 flex-shrink-0`} />
          <div>
            <h4 className={`font-semibold mb-1 ${textColor}`}>Market Size</h4>
            <p className={`${textColor}`}>{marketSize}</p>
          </div>
        </div>

        <div className="flex items-start">
          <TrendingUp className={`h-6 w-6 ${accentColor} mr-3 mt-1 flex-shrink-0`} />
          <div>
            <h4 className={`font-semibold mb-1 ${textColor}`}>Growth Rate</h4>
            <p className={`${textColor}`}>{growthRate}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center mb-3">
          <PieChart className={`h-5 w-5 ${accentColor} mr-2`} />
          <h4 className={`font-semibold ${textColor}`}>Market Segments</h4>
        </div>

        <div className="space-y-2">
          <div>
            <div className="flex justify-between mb-1">
              <span className={`text-sm ${textColor}`}>Residential</span>
              <span className={`text-sm ${accentColor}`}>{segmentData.residential}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${segmentData.residential}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className={`text-sm ${textColor}`}>Commercial</span>
              <span className={`text-sm ${accentColor}`}>{segmentData.commercial}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${segmentData.commercial}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className={`text-sm ${textColor}`}>Golf Courses & Sports Fields</span>
              <span className={`text-sm ${accentColor}`}>{segmentData.golfCourses}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${segmentData.golfCourses}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className={`text-sm ${textColor}`}>Municipal & Smart Cities</span>
              <span className={`text-sm ${accentColor}`}>{segmentData.municipal}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${segmentData.municipal}%` }}></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className={`text-sm ${textColor}`}>Rental & Sharing Economy</span>
              <span className={`text-sm ${accentColor}`}>{segmentData.rental}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: `${segmentData.rental}%` }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <Users className={`h-5 w-5 ${accentColor} mr-2`} />
        <p className={`text-sm ${textColor}`}>
          <span className="font-semibold">Source:</span> Stats Market Research, Global Intelligent Robotic Lawn Mowers
          Market Report 2025-2032
        </p>
      </div>
    </div>
  )
}

export default MarketResearchStats
