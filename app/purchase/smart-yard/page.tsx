import { SmartYardPurchaseFlow } from "@/components/smart-yard-purchase-flow"

export default function SmartYardPurchasePage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            STOP WASTING YOUR <span className="text-yellow-400">WEEKENDS</span> ON LAWN CARE
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium">
            The smartest homeowners in Richmond are switching to SmartYard. Book your consultation now and take back
            your time.
          </p>
        </div>

        <SmartYardPurchaseFlow />
      </div>
    </div>
  )
}
