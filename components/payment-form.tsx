"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, CheckCircle } from "lucide-react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js"

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "")

interface PaymentFormProps {
  clientSecret: string
  appointmentId: string
  onPaymentSuccess: () => void
}

function CheckoutForm({ clientSecret, appointmentId, onPaymentSuccess }: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setProcessing(true)
    setError(null)

    try {
      // Confirm the payment
      const { error: stripeError, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/appointment/success`,
        },
        redirect: "if_required",
      })

      if (stripeError) {
        setError(stripeError.message || "Payment failed")
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        // Payment succeeded, update appointment status
        const response = await fetch("/api/appointments/confirm", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            appointmentId,
            paymentIntentId: paymentIntent.id,
          }),
        })

        if (!response.ok) {
          throw new Error("Failed to confirm appointment")
        }

        setSucceeded(true)
        onPaymentSuccess()
      }
    } catch (error: any) {
      console.error("Payment error:", error)
      setError(error.message || "Payment failed")
    } finally {
      setProcessing(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

      {error && (
        <Alert className="bg-red-50 border-red-200">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      {succeeded && (
        <Alert className="bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-700">
            Payment successful! Your appointment is confirmed.
          </AlertDescription>
        </Alert>
      )}

      <Button
        type="submit"
        disabled={processing || succeeded || !stripe || !elements}
        className="w-full bg-sweat-500 hover:bg-sweat-600 h-12"
      >
        {processing ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          `Pay $99.00`
        )}
      </Button>
    </form>
  )
}

export default function PaymentForm({ clientSecret, appointmentId, onPaymentSuccess }: PaymentFormProps) {
  if (!clientSecret) {
    return <div>Loading payment form...</div>
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: "stripe",
        },
      }}
    >
      <CheckoutForm clientSecret={clientSecret} appointmentId={appointmentId} onPaymentSuccess={onPaymentSuccess} />
    </Elements>
  )
}
