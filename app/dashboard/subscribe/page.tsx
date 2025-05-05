"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Bot, Check } from "lucide-react"

export default function SubscribePage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const [stripePromise, setStripePromise] = useState<Promise<any> | null>(null)

  // Load Stripe dynamically when needed
  const loadStripe = async () => {
    if (!stripePromise) {
      const response = await fetch("/api/get-stripe-key")
      const { publishableKey } = await response.json()

      const { loadStripe: loadStripeJs } = await import("@stripe/stripe-js")
      setStripePromise(loadStripeJs(publishableKey))
      return loadStripeJs(publishableKey)
    }
    return stripePromise
  }

  const handleSubscribe = async (plan: "founding" | "standard") => {
    setLoading(true)
    setError(null)

    try {
      // Create a checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to create checkout session")
      }

      const { sessionId } = await response.json()

      // Redirect to Stripe Checkout
      const stripe = await loadStripe()
      if (!stripe) throw new Error("Stripe failed to initialize")

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      })

      if (stripeError) throw stripeError
    } catch (error: any) {
      setError(error.message || "Failed to process subscription")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Choose Your Plan</h1>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />

          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-night-800 border-night-700 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-sweat-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
            Limited Time
          </div>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="h-5 w-5 mr-2 text-sweat-500" />
              Founding Member
            </CardTitle>
            <CardDescription className="text-gray-400">Early adopter special pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <span className="text-4xl font-bold">$120</span>
              <span className="text-gray-400 ml-2">/month</span>
              <p className="text-sm text-gray-400 mt-1">Save 50% off standard pricing</p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-sweat-500 mr-2 shrink-0 mt-0.5" />
                <span>Weekly autonomous lawn mowing</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-sweat-500 mr-2 shrink-0 mt-0.5" />
                <span>Monthly human touch-up service</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-sweat-500 mr-2 shrink-0 mt-0.5" />
                <span>Dedicated bot assigned to your property</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-sweat-500 mr-2 shrink-0 mt-0.5" />
                <span>Mobile app for scheduling and monitoring</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-sweat-500 mr-2 shrink-0 mt-0.5" />
                <span>Priority customer support</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-sweat-500 mr-2 shrink-0 mt-0.5" />
                <span>Lock in founding member pricing forever</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-sweat-500 hover:bg-sweat-600 h-12"
              onClick={() => handleSubscribe("founding")}
              disabled={loading}
            >
              {loading ? "Processing..." : "Subscribe Now"}
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-night-800 border-night-700 text-white">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bot className="h-5 w-5 mr-2 text-gray-400" />
              Standard Plan
            </CardTitle>
            <CardDescription className="text-gray-400">Regular pricing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <span className="text-4xl font-bold">$240</span>
              <span className="text-gray-400 ml-2">/month</span>
              <p className="text-sm text-gray-400 mt-1">Standard pricing</p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-400 mr-2 shrink-0 mt-0.5" />
                <span>Weekly autonomous lawn mowing</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-400 mr-2 shrink-0 mt-0.5" />
                <span>Monthly human touch-up service</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-400 mr-2 shrink-0 mt-0.5" />
                <span>Shared bot service</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-400 mr-2 shrink-0 mt-0.5" />
                <span>Mobile app for scheduling and monitoring</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-gray-400 mr-2 shrink-0 mt-0.5" />
                <span>Standard customer support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-night-700 hover:bg-night-600 h-12"
              onClick={() => handleSubscribe("standard")}
              disabled={loading}
            >
              Subscribe
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>All plans include a 14-day money-back guarantee. Cancel anytime.</p>
        <p className="mt-2">
          By subscribing, you agree to our{" "}
          <a href="#" className="text-sweat-400 hover:text-sweat-300">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-sweat-400 hover:text-sweat-300">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  )
}
