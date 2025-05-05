import { SpinToWin } from "@/components/spin-to-win"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Bot, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Bot Buddy Spin & Win | SweatyJob",
  description: "Spin the wheel for a chance to win a 30-day FREE MowBot trial and other exciting prizes!",
}

export default function SpinToWinPage() {
  return (
    <div className="min-h-screen bg-night-900 py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Button variant="outline" size="sm" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Bot Buddy Spin & Win</h1>
          <p className="text-xl text-gray-300">
            Spin the wheel for a chance to win a 30-day FREE MowBot trial and other exciting prizes!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SpinToWin source="promotion-page" />
          </div>

          <div className="bg-night-800 rounded-xl p-8 border border-night-700">
            <h2 className="text-2xl font-bold text-white mb-4">Why Choose MowBot?</h2>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <div className="bg-sweat-500/20 text-sweat-500 h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Daily Automated Mowing</h3>
                  <p className="text-gray-300">Your lawn stays perfectly trimmed every day, not just once a week.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="bg-sweat-500/20 text-sweat-500 h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">Whisper-Quiet Operation</h3>
                  <p className="text-gray-300">So quiet you won't even notice it's working - even at night.</p>
                </div>
              </li>

              <li className="flex items-start">
                <div className="bg-sweat-500/20 text-sweat-500 h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">No Contracts Required</h3>
                  <p className="text-gray-300">Try it risk-free with no long-term commitment.</p>
                </div>
              </li>
            </ul>

            <Button className="w-full bg-sweat-500 hover:bg-sweat-600 text-white" size="lg" asChild>
              <Link href="/purchase/smart-yard">
                <Bot className="mr-2 h-5 w-5" /> Schedule Consultation
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Official Rules</h2>
          <div className="bg-night-800 rounded-xl p-6 border border-night-700 text-left">
            <p className="text-gray-300 text-sm">
              NO PURCHASE NECESSARY TO ENTER OR WIN. Void where prohibited. Open to residents of Richmond, VA area, 18
              years or older. Limit one play per household. Prizes include: 30-Day Free Trial (5% chance), 25% OFF first
              month (15% chance), 15% OFF first month (25% chance), Free Edging service (20% chance), and 10% OFF first
              month (35% chance). All prizes must be redeemed within 30 days. Free trial requires credit card on file
              but will not be charged during trial period. SweatyJob reserves the right to modify or cancel this
              promotion at any time. By participating, you agree to receive marketing communications from SweatyJob
              which you can opt out of at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
