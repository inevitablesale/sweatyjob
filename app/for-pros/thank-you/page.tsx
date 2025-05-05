import Image from "next/image"
import Link from "next/link"
import { Download, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ThankYou() {
  return (
    <main className="pt-24 pb-16 bg-slate-900 text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-20 w-20 rounded-full bg-green-900 flex items-center justify-center border-2 border-green-500">
              <CheckCircle className="h-10 w-10 text-green-400" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your report is ready to download. We've also sent a copy to your email for future reference.
          </p>

          <div className="bg-slate-800 p-8 rounded-xl shadow-md mb-10 border border-slate-700">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative h-[200px] w-full">
                  <Image
                    src="/images/ai-mower-report-cover.png"
                    alt="AI Mower Industry Report"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              <div className="md:w-2/3 text-left">
                <h2 className="text-2xl font-bold mb-3 text-white">AI Robotic Lawn Mower Market Report</h2>
                <p className="text-gray-300 mb-6">
                  Comprehensive analysis of the global intelligent robotic lawn mower market, with forecasts from 2025
                  to 2032.
                </p>

                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black font-bold">
                  <Download className="mr-2 h-5 w-5" />
                  Download Report
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-white">What's Next?</h3>
            <p className="text-gray-300 mb-4">
              One of our specialists will reach out to you within 24 hours to discuss how we can help integrate AI mower
              technology into your business.
            </p>
          </div>

          <Link href="/">
            <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500/10">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
