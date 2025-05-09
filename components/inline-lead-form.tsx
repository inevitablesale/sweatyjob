"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"

interface InlineLeadFormProps {
  source: string
  title?: string
  description?: string
  buttonText?: string
  successMessage?: string
}

export function InlineLeadForm({
  source,
  title = "Get Started Today",
  description = "Enter your phone number to schedule a free consultation.",
  buttonText = "Get Started",
  successMessage = "Thanks! We'll be in touch shortly to schedule your free consultation.",
}: InlineLeadFormProps) {
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Basic validation
    if (!phone || phone.length < 10) {
      setError("Please enter a valid phone number")
      return
    }

    setIsSubmitting(true)

    try {
      // Assuming you have a capturePhoneNumber action
      const response = await fetch("/api/capture-phone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone,
          source,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit")
      }

      setIsSuccess(true)
      setPhone("")
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="get-started" className="bg-gray-900 rounded-xl p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">{description}</p>

      {isSuccess ? (
        <div className="bg-green-900 bg-opacity-50 border border-green-700 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-green-700 rounded-full p-2">
              <Check size={24} className="text-white" />
            </div>
          </div>
          <p className="text-green-100">{successMessage}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <Input
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white h-12"
                disabled={isSubmitting}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <Button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white h-12 px-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                buttonText
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
