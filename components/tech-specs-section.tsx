import { Check } from "lucide-react"

export function TechSpecsSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            SMARTYARD T100 <span className="text-yellow-500">SPECS</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced engineering meets intelligent design. Here's what makes our robot mower the best in the business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Spec Card 1 */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Cutting System</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Triple-blade cutting system</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Adjustable cutting height: 0.8" - 2.4"</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Cutting width: 8.7 inches</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Micro-mulching technology</span>
              </li>
            </ul>
          </div>

          {/* Spec Card 2 */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Navigation & Safety</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">GPS-assisted navigation</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Obstacle detection sensors</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Lift & tilt sensors with auto-shutoff</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">PIN-protected theft protection</span>
              </li>
            </ul>
          </div>

          {/* Spec Card 3 */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Performance</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Handles slopes up to 35%</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Weather-resistant design (IPX5)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Ultra-quiet operation (58 dB)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Recommended lawn size: up to 0.25 acres</span>
              </li>
            </ul>
          </div>

          {/* Spec Card 4 */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Power & Battery</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Lithium-ion battery: 4.0 Ah</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Battery runtime: up to 65 minutes</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Charging time: 60 minutes</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Energy consumption: ~15 kWh/month</span>
              </li>
            </ul>
          </div>

          {/* Spec Card 5 */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Smart Features</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Mobile app control (iOS & Android)</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Weather-adaptive scheduling</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Zone learning & mapping</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Over-the-air software updates</span>
              </li>
            </ul>
          </div>

          {/* Spec Card 6 */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-yellow-500">Physical Specs</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Dimensions: 22" x 17" x 10"</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Weight: 18.7 lbs</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Wheel diameter: 6.7 inches</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">Shell material: High-impact ABS plastic</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
