"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Bot, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function YardSignLandingPage() {
  const router = useRouter()

  // Redirect to waitlist after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/waitlist?source=yard_sign_auto")
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-night-900 p-4">
      <div className="max-w-md w-full bg-night-800 rounded-xl p-8 shadow-2xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">
            <span className="text-gradient">$30/week</span>
          </h1>
          <p className="text-xl text-gray-300">Lawn Mowing Service</p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-3 mt-1" />
            <p className="text-gray-300">
              <span className="text-white font-medium">Half the price</span> of traditional lawn services
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-3 mt-1" />
            <p className="text-gray-300">
              <span className="text-white font-medium">Daily mowing</span> with AI-powered robot mowers
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-3 mt-1" />
            <p className="text-gray-300">
              <span className="text-white font-medium">No noise</span> - works silently day or night
            </p>
          </div>

          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-3 mt-1" />
            <p className="text-gray-300">
              <span className="text-white font-medium">Limited availability</span> - only 100 spots for founding members
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button className="w-full bg-sweat-500 hover:bg-sweat-600 text-white mb-4" size="lg" asChild>
            <Link href="/waitlist?source=yard_sign_click">
              <Bot className="mr-2 h-5 w-5" /> Adopt a Bot Now
            </Link>
          </Button>

          <p className="text-sm text-gray-400">Redirecting to application form in 5 seconds...</p>

          <div className="mt-6">
            <Link href="/" className="text-gray-400 hover:text-white text-sm flex items-center justify-center">
              Learn more about SweatyJob <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
