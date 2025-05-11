"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function InlineForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<{
    name?: string
    email?: string
    phone?: string
    address?: string
  }>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    // Validate form
    const newErrors: {
      name?: string
      email?: string
      phone?: string
      address?: string
    } = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Success
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="get-started" className="bg-black border-2 border-yellow-500 py-12 px-6 rounded-lg shadow-2xl">
      <div className="max-w-md mx-auto">
        {isSubmitted ? (
          <div className="bg-yellow-500 p-8 rounded-lg text-black">
            <div className="flex items-center mb-4">
              <div className="bg-black rounded-full p-1 mr-3">
                <CheckCircle className="h-8 w-8 text-yellow-500" />
              </div>
              <h4 className="text-2xl font-black">YOU'RE IN!</h4>
            </div>
            <p className="text-lg font-bold">
              We'll contact you within 24 hours to get your robot mower set up. Get ready for the BEST LAWN ON THE
              BLOCK!
            </p>
          </div>
        ) : (
          <>
            <div className="mb-8 text-center">
              <h3 className="text-3xl font-black text-yellow-500 uppercase mb-2">STOP WASTING TIME & MONEY</h3>
              <p className="text-white text-xl font-bold">Get Your Robot Mower NOW!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-md text-white text-lg font-bold focus:outline-none focus:border-yellow-500 placeholder-gray-500"
                  placeholder="YOUR NAME"
                />
                {errors.name && <p className="text-yellow-500 text-sm mt-1 font-bold">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-md text-white text-lg font-bold focus:outline-none focus:border-yellow-500 placeholder-gray-500"
                  placeholder="YOUR EMAIL"
                />
                {errors.email && <p className="text-yellow-500 text-sm mt-1 font-bold">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-md text-white text-lg font-bold focus:outline-none focus:border-yellow-500 placeholder-gray-500"
                  placeholder="YOUR PHONE"
                />
                {errors.phone && <p className="text-yellow-500 text-sm mt-1 font-bold">{errors.phone}</p>}
              </div>

              <div>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-700 rounded-md text-white text-lg font-bold focus:outline-none focus:border-yellow-500 placeholder-gray-500"
                  placeholder="YOUR ADDRESS"
                />
                {errors.address && <p className="text-yellow-500 text-sm mt-1 font-bold">{errors.address}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-black text-xl py-4 px-4 rounded-md transition duration-200 disabled:opacity-70 flex items-center justify-center"
              >
                {isSubmitting ? "SUBMITTING..." : "GET STARTED NOW"}
                {!isSubmitting && <ArrowRight className="ml-2 h-6 w-6" />}
              </button>

              <div className="mt-6 space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-white font-bold">Daily mowing at HALF the cost of competitors</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-white font-bold">Zero shipping costs, no hidden fees</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-white font-bold">Cancel anytime, no long-term contracts</span>
                </div>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
