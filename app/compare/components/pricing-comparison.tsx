import { Button } from "@/components/ui/button"

export default function PricingComparison() {
  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why Choose Our <span className="text-green-500">Smart Lawn Plan</span>?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Save Time</h3>
              <p className="text-gray-300">Reclaim your weekends with automated lawn care</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Save Money</h3>
              <p className="text-gray-300">More affordable than traditional lawn services</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold mb-4">Eco-Friendly</h3>
              <p className="text-gray-300">Reduce emissions and chemical usage</p>
            </div>
          </div>

          {/* Pricing comparison without the duplicate "CRUSH THE COMPETITION" section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Traditional Lawn Service</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span> Weekly or bi-weekly mowing only
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span> Noisy gas-powered equipment
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span> Inconsistent results
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span> High carbon emissions
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 mr-2">✕</span> $50-$75 per visit
                </li>
              </ul>
            </div>
            <div className="bg-green-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">SweatyJob Robot Mowing</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Daily mowing for optimal lawn health
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Silent, battery-powered operation
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Consistent, perfect results
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Zero direct emissions
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span> Just $79/month all-inclusive
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to upgrade your lawn care?</h3>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              GET YOUR ROBOT MOWER TODAY
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
