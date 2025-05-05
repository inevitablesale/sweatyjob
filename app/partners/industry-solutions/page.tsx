"use client"
import { useSearchParams } from "next/navigation"

export default function IndustrySolutionsPage() {
  const searchParams = useSearchParams()
  const industryType = searchParams.get("industry") || "lawn-care"

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Industry Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our technology can help transform your business operations and increase revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg shadow-lg overflow-hidden border border-green-500">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Marketing Resources</h3>
              <p className="text-gray-600 mb-4">
                Access professionally designed marketing materials customized for your business.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Branded collateral templates</li>
                <li>• Social media content calendar</li>
                <li>• Email marketing campaigns</li>
                <li>• Customer testimonial templates</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden border border-green-500">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Technical Support</h3>
              <p className="text-gray-600 mb-4">Get priority access to our technical support team and resources.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Dedicated support representative</li>
                <li>• Installation troubleshooting</li>
                <li>• Software integration assistance</li>
                <li>• Regular maintenance guidance</li>
              </ul>
            </div>
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden border border-green-500">
            <div className="h-3 bg-green-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Training Resources</h3>
              <p className="text-gray-600 mb-4">Comprehensive training programs to enhance your team's expertise.</p>
              <ul className="space-y-2 text-gray-700">
                <li>• Online learning modules</li>
                <li>• Hands-on workshops</li>
                <li>• Technical training</li>
                <li>• Best practices guides</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Additional Benefits</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Business Growth Support</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Lead generation assistance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Co-marketing opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Business planning consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Market expansion strategies</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Exclusive Resources</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Industry research reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Competitor analysis tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Customer retention strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Pricing optimization guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full text-white font-medium bg-green-600 hover:bg-green-700">
            Access Partner Resources
          </button>
        </div>
      </div>
    </div>
  )
}
