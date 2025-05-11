"use client"

import { useState } from "react"
import { captureCompareLead } from "@/app/actions/capture-compare-lead"
import { useFormState } from "react-dom"

interface InlineFormProps {
  title?: string
  subtitle?: string
  buttonText?: string
  showAddress?: boolean
  darkMode?: boolean
  className?: string
}

const initialState = {
  success: false,
  message: "",
  leadId: "",
  isNew: false,
}

export default function InlineForm({
  title = "STOP WASTING TIME & MONEY",
  subtitle = "Get Your Robot Mower NOW!",
  buttonText = "GET STARTED",
  showAddress = false,
  darkMode = true,
  className = "",
}: InlineFormProps) {
  const [formState, formAction] = useFormState(captureCompareLead, initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    try {
      await formAction(formData)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      id="get-started"
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} p-6 md:p-8 rounded-lg border-2 ${
        darkMode ? "border-yellow-500" : "border-green-500"
      } ${className}`}
    >
      <div className="text-center mb-6">
        <h3 className={`text-2xl md:text-3xl font-bold ${darkMode ? "text-yellow-500" : "text-green-600"}`}>{title}</h3>
        <p className="text-xl md:text-2xl font-semibold mt-2">{subtitle}</p>
      </div>

      {formState.success ? (
        <div className="text-center p-6 bg-green-100 text-green-800 rounded-lg">
          <h4 className="text-xl font-bold mb-2">Thank You!</h4>
          <p>{formState.message}</p>
          <p className="mt-4">Our team will contact you shortly to discuss your robot mower options.</p>
        </div>
      ) : (
        <form action={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 placeholder-gray-400"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="YOUR PHONE"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 placeholder-gray-400"
            />
          </div>
          {showAddress && (
            <div>
              <input
                type="text"
                name="address"
                placeholder="YOUR ADDRESS"
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 placeholder-gray-400"
              />
            </div>
          )}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full p-3 ${
                darkMode ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-green-600 hover:bg-green-700 text-white"
              } rounded-md font-bold transition-colors duration-200 flex justify-center items-center`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                buttonText
              )}
            </button>
          </div>
          {formState.message && !formState.success && (
            <div className="p-3 bg-red-100 text-red-800 rounded-md">{formState.message}</div>
          )}
          <p className="text-xs text-gray-400 text-center mt-4">
            By submitting this form, you agree to our terms and privacy policy.
          </p>
        </form>
      )}
    </div>
  )
}
