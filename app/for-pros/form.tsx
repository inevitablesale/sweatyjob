"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { submitReportForm } from "./actions"

export default function ReportForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const result = await submitReportForm(formData)

    if (result.success) {
      router.push("/partners/thank-you")
    } else {
      setIsSubmitting(false)
      // Handle error
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
            First Name*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
            Last Name*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Business Email*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
          Company Name*
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
          required
        />
      </div>

      <div>
        <label htmlFor="businessType" className="block text-sm font-medium text-gray-300 mb-1">
          Business Type*
        </label>
        <select
          id="businessType"
          name="businessType"
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-green-500 focus:border-green-500 text-white"
          required
        >
          <option value="">Select your business type</option>
          <option value="Lawn Care">Lawn Care</option>
          <option value="Pest Control">Pest Control</option>
          <option value="Mosquito Control">Mosquito Control</option>
          <option value="Irrigation">Irrigation & Sprinklers</option>
          <option value="Landscape Design">Landscape Design</option>
          <option value="Tree Care">Tree Care</option>
          <option value="Pool Maintenance">Pool & Spa Maintenance</option>
          <option value="Pressure Washing">Pressure Washing</option>
          <option value="Gutter Cleaning">Gutter Cleaning</option>
          <option value="Window Washing">Window Washing</option>
          <option value="Exterior Painting">Exterior Painting</option>
          <option value="Holiday Lighting">Holiday Lighting</option>
          <option value="Outdoor Lighting">Outdoor Lighting</option>
          <option value="Driveway Sealing">Driveway Sealing</option>
          <option value="Snow Removal">Snow Removal</option>
          <option value="Solar Panel Cleaning">Solar Panel Cleaning</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-md focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Processing...</>
          ) : (
            <>
              <Download className="mr-2 h-4 w-4" />
              Download Report
            </>
          )}
        </Button>
      </div>

      <p className="text-xs text-gray-400 mt-4">
        By submitting this form, you agree to receive communications from SweatyJob. Your information will be processed
        in accordance with our Privacy Policy.
      </p>
    </form>
  )
}
