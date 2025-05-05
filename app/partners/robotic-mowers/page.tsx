import InstallationGuide from "@/components/installation-guide"
import MarketOpportunity from "@/components/market-opportunity"
import TroubleshootingGuide from "@/components/troubleshooting-guide"

export const metadata = {
  title: "Robotic Mower Partner Guide | SweatyJob",
  description:
    "Comprehensive guide for SweatyJob partners on robotic mower market opportunities, installation best practices, and troubleshooting.",
}

export default function RoboticMowersPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Robotic Mower Partner Guide</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about the robotic mower market, installation best practices, and troubleshooting
          to help grow your business.
        </p>
      </div>

      <div className="space-y-16">
        <section id="market-opportunity">
          <MarketOpportunity />
        </section>

        <section id="installation-guide">
          <InstallationGuide />
        </section>

        <section id="troubleshooting">
          <TroubleshootingGuide />
        </section>

        <section id="partner-resources" className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Partner Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">Marketing Materials</h3>
              <p className="mb-4">
                Access professionally designed marketing materials to help promote robotic mower services to your
                customers.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Customer brochures and flyers</li>
                <li>Social media graphics and templates</li>
                <li>Email marketing templates</li>
                <li>ROI calculators for client presentations</li>
              </ul>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                Access Marketing Kit
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3">Training & Certification</h3>
              <p className="mb-4">
                Complete our comprehensive training program to become a certified robotic mower installation specialist.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Online training modules</li>
                <li>Hands-on installation practice</li>
                <li>Troubleshooting scenarios</li>
                <li>Customer service best practices</li>
              </ul>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                Start Training
              </button>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-br from-amber-50 to-red-50 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-3">Partner Support</h3>
            <p className="mb-4">
              Our dedicated partner support team is here to help you succeed with robotic mower services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-amber-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Technical Support</h4>
                <p>Get expert help with technical issues and installation challenges.</p>
                <p className="mt-2 font-medium">support@sweatyjob.com</p>
              </div>

              <div className="border border-amber-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Sales Support</h4>
                <p>Assistance with pricing, proposals, and closing deals.</p>
                <p className="mt-2 font-medium">sales@sweatyjob.com</p>
              </div>

              <div className="border border-amber-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Partner Community</h4>
                <p>Connect with other partners to share tips and best practices.</p>
                <button className="mt-2 text-blue-600 underline">Join Community</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
