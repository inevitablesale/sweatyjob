"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, ArrowRight, CheckCircle } from "lucide-react"

// Define the component
export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleClose = () => {
    setIsVisible(false)
    // Set session storage to prevent showing again in current session
    sessionStorage.setItem("exitIntentShownThisSession", "true")

    // Set a 30-day cookie
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 30)
    document.cookie = `exitIntentShown=true; expires=${expiryDate.toUTCString()}; path=/`
  }

  useEffect(() => {
    // Check if popup has been shown in this session or if cookie exists
    const shownThisSession = sessionStorage.getItem("exitIntentShownThisSession")
    const cookieExists = document.cookie.split(";").some((item) => item.trim().startsWith("exitIntentShown="))

    // If already shown in this session or cookie exists, don't show again
    if (shownThisSession || cookieExists) return

    let timer: NodeJS.Timeout

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse moves to the top of the page
      if (e.clientY <= 5) {
        // Clear any existing timer
        if (timer) clearTimeout(timer)

        // Set a small delay to prevent accidental triggers
        timer = setTimeout(() => {
          setIsVisible(true)
        }, 300)
      }
    }

    // Add event listener for mouse leave
    document.addEventListener("mouseleave", handleMouseLeave)

    // Cleanup
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      if (timer) clearTimeout(timer)
    }
  }, [])

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (!validateEmail(email)) {
      setError("Please enter a valid email address")
      setIsLoading(false)
      return
    }

    try {
      const response = await fetch("/api/capture-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const errorData = await response.text()
        console.error("Submission error:", response.status, errorData)
        setError(`Submission failed. Please try again later.`)
        setIsLoading(false)
        return
      }

      setIsSubmitted(true)
      setEmail("")

      // Set a 30-day cookie
      const expiryDate = new Date()
      expiryDate.setDate(expiryDate.getDate() + 30)
      document.cookie = `exitIntentShown=true; expires=${expiryDate.toUTCString()}; path=/`
    } catch (error) {
      console.error("Form submission error:", error)
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-gray-900 rounded-xl shadow-2xl max-w-md w-full relative overflow-hidden border-2 border-yellow-500">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-white z-10"
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        {/* Free trial banner */}
        <div className="h-32 bg-yellow-500 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl font-black text-black text-center px-4">Wait, before you go...</h2>
          </div>
        </div>

        <div className="p-6">
          {!isSubmitted ? (
            <>
              <h3 className="text-xl font-bold text-white mb-2">NO SHIPPING COST</h3>
              <p className="text-gray-300 mb-4">
                Try our robot mower service for 30 days with zero risk. No shipping fees, no hidden costs. Experience a
                perfect lawn without lifting a finger.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-gray-800 border-gray-700 text-white ${error ? "border-red-500" : ""}`}
                    required
                  />
                  {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold"
                  disabled={isLoading}
                >
                  {isLoading ? "SUBMITTING..." : "CLAIM YOUR FREE TRIAL"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>

              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-300">30-day free trial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-300">No shipping costs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  <span className="text-sm text-gray-300">Cancel anytime</span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">YOU'RE IN!</h3>
              <p className="text-gray-300">Check your inbox for details about your free 30-day trial.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Also export as default for compatibility
export default ExitIntentPopup
