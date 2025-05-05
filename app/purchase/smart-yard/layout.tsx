import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "STOP WASTING WEEKENDS | SmartYard by SweatyJob",
  description: "Schedule your SmartYard consultation and take back your weekends. Richmond's #1 robotic lawn service.",
}

export default function SmartYardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense>
      <div className="min-h-screen bg-black">
        {/* Simple navigation bar */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center text-white hover:text-yellow-400 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-bold">Back to SweatyJob</span>
            </Link>
            <Link
              href="/contact"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg transition-colors"
            >
              Call Chris
            </Link>
          </div>
        </header>

        {children}
      </div>
    </Suspense>
  )
}
