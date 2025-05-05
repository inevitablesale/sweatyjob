"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle2, Lock } from "lucide-react"
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { getSupabaseClient } from "@/lib/supabase/client"

export default function PaymentPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [stripePromise, setStripePromise] = useState<Promise<any> | null>(null)
  const router = useRouter()
  const supabase = getSupabaseClient()

  useEffect(() => {
    const loadStripeAndSetupIntent = async () => {
      try {
        // First, load the Stripe publishable key from the server
        const keyResponse = await fetch("/api/get-stripe-key")
        if (!keyResponse.ok) {
          throw new Error("Failed to load Stripe key")
        }
        const { publishableKey } = await keyResponse.json()

        // Dynamically import loadStripe
        const { loadStripe } = await import("@stripe/stripe-js")
        setStripePromise(loadStripe(publishableKey))

        // Then fetch the setup intent
        const { data: userData } = await supabase.auth.getUser()

        if (!userData.user) {
          throw new Error("User not found")
        }

        const response = await fetch("/api/create-setup-intent", {
          method: "POST",
        })

        if (!response.ok) {
          throw new Error("Failed to create setup intent")
        }

        const { clientSecret } = await response.json()
        setClientSecret(clientSecret)
      } catch (error: any) {
        setError(error.message || "Failed to load payment form")
      } finally {
        setLoading(false)
      }
    }

    loadStripeAndSetupIntent()
  }, [supabase])

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Payment Information</h1>
        <Card className="bg-night-800 border-night-700">
          <CardContent className="p-8">
            <div className="h-[300px] flex items-center justify-center">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-night-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-night-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-night-700 rounded col-span-2"></div>
                      <div className="h-2 bg-night-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-night-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Payment Information</h1>
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Payment Information</h1>

      {clientSecret && stripePromise && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret,
            appearance: {
              theme: "night",
              variables: {
                colorPrimary: "#10b981",
                colorBackground: "#1f2937",
                colorText: "#f9fafb",
                colorDanger: "#ef4444",
                fontFamily: "Inter, sans-serif",
                spacingUnit: "4px",
                borderRadius: "8px",
              },
            },
          }}
        >
          <PaymentForm />
        </Elements>
      )}
    </div>
  )
}

function PaymentForm() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!stripe || !elements) {
      setLoading(false)
      return
    }

    const result = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/dashboard`,
      },
      redirect: "if_required",
    })

    if (result.error) {
      setError(result.error.message || "Failed to update payment method")
      setLoading(false)
    } else {
      setSuccess(true)
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }
  }

  return (
    <Card className="bg-night-800 border-night-700">
      <CardHeader>
        <CardTitle className="text-white">
          {success ? (
            <div className="flex items-center">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              Payment Method Updated
            </div>
          ) : (
            "Update Payment Method"
          )}
        </CardTitle>
        <CardDescription className="text-gray-400">
          {success
            ? "Your payment information has been updated successfully"
            : "Enter your card details to update your payment method"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {success ? (
          <div className="text-white mb-6">
            <p>Thank you for updating your payment information. You will be redirected to your dashboard.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-4">
              <PaymentElement />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-sweat-500 hover:bg-sweat-600 h-12 text-lg"
                disabled={loading || !stripe || !elements}
              >
                {loading ? "Processing..." : "Update Payment Method"}
              </Button>
              <div className="flex items-center justify-center mt-4 text-sm text-gray-400">
                <Lock className="h-3 w-3 mr-1" />
                Secure payment processed by Stripe
              </div>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
