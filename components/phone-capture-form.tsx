"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { capturePhone } from "@/app/actions/capture-phone"
import { Loader2 } from "lucide-react"

type PhoneCaptureFormProps = {
  source: string
  buttonText?: string
  buttonSize?: "default" | "sm" | "lg"
  onSuccess?: () => void
  serviceType?: string
  location?: string
  dark?: boolean
  showThankYou?: boolean
  skipRedirect?: boolean
}

export function PhoneCaptureForm({
  source,
  buttonText = "Submit",
  buttonSize = "default",
  onSuccess,
  serviceType,
  location,
  dark,
  showThankYou,
  skipRedirect = false,
}: PhoneCaptureFormProps) {
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Basic validation
    if (!phone || phone.length < 10) {
      setError("Please enter a valid phone number")
      setIsSubmitting(false)
      return
    }

    try {
      // Create FormData object to pass to the server action
      const formData = new FormData()
      formData.append("phone", phone)
      formData.append("source", source)
      formData.append("skipRedirect", skipRedirect.toString())

      // Call the server action with the FormData
      const result = await capturePhone(formData)

      if (result.success) {
        setSuccess(true)
        setPhone("")
        if (onSuccess) {
          onSuccess()
        }
      } else if (result.error) {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error("Phone capture error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {!success ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <Input
            type="tel"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className={`bg-slate-800 border-slate-600 text-white placeholder:text-gray-300 ${dark ? "dark" : ""}`}
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size={buttonSize}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              buttonText
            )}
          </Button>
        </form>
      ) : (
        <div className="text-green-400 font-medium">Thanks! We'll text you shortly.</div>
      )}
      {error && <p className="text-red-300 text-sm mt-2 font-medium">{error}</p>}
    </div>
  )
}
