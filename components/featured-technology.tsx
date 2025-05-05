import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles, Droplets } from "lucide-react"

interface FeaturedTechnologyProps {
  service?: string
}

export default function FeaturedTechnology({ service }: FeaturedTechnologyProps) {
  // Determine which technology to feature based on the service
  const showDandy = service === "lawn-mowing" || service === "flower-bed-maintenance" || !service
  const showOto = service === "lawn-mowing" || !service

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-white mb-6">Featured Smart Technology</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {showDandy && (
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 relative">
              <Image src="/images/dandy-robot.png" alt="Dandy AI Weed Control Robot" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Sparkles className="h-5 w-5 text-green-400 mr-2" />
                <h3 className="text-xl font-bold text-white">Dandy AI Weed Control</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Precision weed control technology that uses AI to target individual weeds, reducing herbicide use by 90%
                while protecting your local environment.
              </p>
              <Button asChild>
                <Link href="/blog/dandy-eco-friendly-weed-control">Learn More</Link>
              </Button>
            </div>
          </div>
        )}

        {showOto && (
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="h-48 relative">
              <Image src="/images/oto-sprinkler.jpg" alt="OtO Smart Sprinkler System" fill className="object-cover" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-2">
                <Droplets className="h-5 w-5 text-blue-400 mr-2" />
                <h3 className="text-xl font-bold text-white">OtO Smart Sprinkler</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Weather-adaptive irrigation system that creates custom watering zones for your unique landscape, saving
                up to 50% on water usage.
              </p>
              <Button asChild>
                <Link href="/blog/oto-lawn-watering-guide">Learn More</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
