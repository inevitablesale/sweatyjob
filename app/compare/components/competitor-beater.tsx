import { Button } from "@/components/ui/button"

export default function CompetitorBeater() {
  // List of top 25 competitors (first 25 from the provided list)
  const competitors = [
    "Fred's Lawn Care",
    "Good Green Neighbors",
    "Two Seasons Services",
    "Desert Lawns of Arizona, LLC.",
    "Willis Lawn Services LLC",
    "LawnStarter Lawn Care Service",
    "Swinter Lawn Care Service",
    "Grass Guys, Inc",
    "MISTER GREEN El Paso lawn care services",
    "Village Green Lawn and Pest",
    "dalPon Lawn Care",
    "Sunny Lawn Care",
    "Tru-Green Brooklyn",
    "Top Grass Maintenance Care",
    "Quick Mow Lawns",
    "Growing Concern",
    "Deep Dive Lawn Care",
    "Snow and Lawn Care Services",
    "Absolutely Green",
    "Sutherland's Lawn Care LLC",
    "Yard Chief Yard Care, Inc",
    "The Yard General AG INC",
    "Cutting Edge, LLC",
    "Souhegan Lawn Care",
    "TJ Landscaping Services",
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-green-900 to-green-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 speakable-content">
            CRUSH THE <span className="text-blue-400">COMPETITION</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
            {competitors.map((name, index) => (
              <div
                key={index}
                className="bg-slate-800 bg-opacity-70 p-4 rounded-lg text-white text-center hover:bg-slate-700 transition-colors"
              >
                {name}
              </div>
            ))}
          </div>

          <div className="bg-black bg-opacity-50 p-8 rounded-xl mb-12">
            <h3 className="text-3xl font-bold mb-4">THE LAWN CARE REVOLUTION IS HERE</h3>
            <p className="text-xl mb-6">
              Stop wasting money on outdated lawn mowing services. Join thousands of homeowners who've upgraded to robot
              lawn care technology and reclaimed their weekends.
            </p>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">GET STARTED TODAY</Button>
          </div>

          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">WHAT CUSTOMERS ARE SAYING ABOUT OUR LAWN MOWING SERVICE</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black bg-opacity-20 p-5 rounded-lg">
                <p className="italic mb-3">
                  "I used to pay $50 per week for lawn mowing that was inconsistent at best. Now I pay $79 per month for
                  DAILY mowing that's perfect every time. Best decision I've made for my lawn."
                </p>
                <p className="font-bold">- Michael T., Richmond</p>
              </div>
              <div className="bg-black bg-opacity-20 p-5 rounded-lg">
                <p className="italic mb-3">
                  "The difference in my lawn is incredible. It's greener, thicker, and healthier since switching to
                  robot mowing. Plus, I love not hearing gas mowers at 7am on Saturdays!"
                </p>
                <p className="font-bold">- Jennifer K., Norfolk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
