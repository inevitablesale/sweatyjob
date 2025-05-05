"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Bot, Calendar } from "lucide-react"
import Link from "next/link"

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id")
  const [customerName, setCustomerName] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCheckoutSession = async () => {
      if (!sessionId) return

      try {
        const response = await fetch(`/api/get-checkout-session?sessionId=${sessionId}`)
        if (response.ok) {
          const data = await response.json()
          setCustomerName(data.customerName || "Valued Customer")
        }
      } catch (error) {
        console.error("Error fetching checkout session:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCheckoutSession()
  }, [sessionId])

  if (loading) {
    return (
      <div className="min-h-screen bg-night-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sweat-500 mx-auto mb-4"></div>
          <p className="text-white">Loading your information...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-night-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-sweat-500/20 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-sweat-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Thank You for Your Purchase!</h1>
            <p className="text-xl text-gray-300">
              {customerName ? `Hi ${customerName.split(" ")[0]}, welcome` : "Welcome"} to the SweatyJob family!
            </p>
          </div>

          <Card className="bg-night-800 border-night-700 text-white mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-sweat-500/20 text-sweat-500 h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">We'll Contact You</h3>
                    <p className="text-gray-300">
                      Our team will reach out within 24 hours to schedule your SmartYard installation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sweat-500/20 text-sweat-500 h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Property Assessment</h3>
                    <p className="text-gray-300">
                      We'll visit your property to assess the lawn and determine the best setup for your robot mower.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sweat-500/20 text-sweat-500 h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">Installation Day</h3>
                    <p className="text-gray-300">
                      Our team will deliver and set up your robot mower, configure the app, and show you how everything
                      works.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-night-700/50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Bot className="h-5 w-5 mr-2 text-sweat-500" /> Your SmartYard Membership
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Daily automated mowing with your dedicated robot</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Monthly human touch-up service for weed eating & edging</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Access to exclusive member benefits and discounts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Dedicated customer support for any questions or issues</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-sweat-500 hover:bg-sweat-600 text-white" size="lg" asChild>
              <Link href="/member-benefits">
                <Calendar className="mr-2 h-5 w-5" /> Explore Member Benefits
              </Link>
            </Button>
            <Button className="bg-night-700 hover:bg-night-600 text-white" size="lg" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
