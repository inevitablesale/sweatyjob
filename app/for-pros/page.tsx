import ForProsClientPage from "./ForProsClientPage"
import { MarketResearchStats } from "@/components/market-research-stats"
import { CheckCircle } from "react-feather"
import { Award, Calendar, DollarSign, Users } from "react-feather"

export const metadata = {
  title: "Partner with SweatyJob | AI Mower Solutions for Service Businesses",
  description:
    "Join forces with SweatyJob to offer AI mower technology to your clients. Tap into a $4.6B market growing at 10.8% CAGR and transform your outdoor service business.",
  keywords:
    "AI mower partnership, lawn care business, outdoor service technology, robotic mower solutions, service business expansion",
  openGraph: {
    title: "Partner with SweatyJob | AI Mower Solutions for Service Businesses",
    description:
      "Join forces with SweatyJob to offer AI mower technology to your clients. Tap into a $4.6B market growing at 10.8% CAGR.",
    images: [
      {
        url: "/images/pros/lawn-care-pro.jpg",
        width: 1200,
        height: 630,
        alt: "SweatyJob AI Mower Business Partnership",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner with SweatyJob | AI Mower Solutions for Service Businesses",
    description:
      "Join forces with SweatyJob to offer AI mower technology to your clients. Tap into a $4.6B market growing at 10.8% CAGR.",
    images: ["/images/pros/lawn-care-pro.jpg"],
  },
}

export default function ForProsPage() {
  return (
    <>
      <ForProsClientPage />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">For Established Service Businesses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Add AI mowing to your existing service offerings with ZERO upfront costs and create an immediate recurring
              revenue stream.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">No Inventory Investment</h3>
                <p className="text-gray-600 text-center">Zero upfront costs or inventory requirements</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">Increase Customer Retention</h3>
                <p className="text-gray-600 text-center">Boost retention by 40% with bundled services</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">Create Recurring Revenue</h3>
                <p className="text-gray-600 text-center">Generate predictable monthly income</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center">Differentiate Your Business</h3>
                <p className="text-gray-600 text-center">Stand out from traditional competitors</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <MarketResearchStats
              title="Robotic Mower Market Insights"
              marketSize="$1.8 billion in 2024, projected to reach $4.6 billion by 2032"
              growthRate="10.8% CAGR globally, 9.26% in North America"
            />

            <div className="mt-8 bg-green-50 rounded-lg p-6 border border-green-100">
              <h3 className="text-xl font-bold mb-4 text-green-800">Key Business Impacts</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Each mower can replace 2-3 workers, saving $15K-$30K annually in labor costs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>Electric mowers reduce diesel expenses by 90%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>40% of models integrate with smart home systems, commanding a 15% price premium</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span>EU's 2025 gas-powered mower ban will drive 20% of users to robotic alternatives</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
