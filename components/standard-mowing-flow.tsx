"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowRight, MapPin, Calendar, Loader2, Phone, User, Scissors } from "lucide-react"
import { MapboxAddressInput } from "./mapbox-address-input"
import { AppointmentTimeSelector } from "./appointment-time-selector"

// Richmond, VA coordinates
const RICHMOND_CENTER = {
  lat: 37.5407,
  lng: -77.436,
}

// Service radius in miles
const SERVICE_RADIUS = 3

type Step = "address" | "frequency" | "appointment" | "details" | "confirmation"

interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  city: string
  state: string
  zipCode: string
  mowingFrequency: string
  appointmentDate?: string
  appointmentTime?: string
  notes?: string
  lawnSize: string // We'll keep this but set a default value
}

// This component will redirect to the smart yard page since we only offer robot mower services now
// Add this state at the top of the component
const StandardMowingFlow = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      window.location.href = "/purchase/smart-yard"
    }
  }, [isClient])

  // Address Step Component
  function AddressStep({
    onAddressSelect,
    isLoading,
    error,
    isWithinServiceArea,
    onNext,
  }: {
    onAddressSelect: (
      address: string,
      coordinates: { lat: number; lng: number },
      city: string,
      state: string,
      zipCode: string,
    ) => void
    isLoading: boolean
    error: string | null
    isWithinServiceArea: boolean | null
    onNext: () => void
  }) {
    const router = useRouter()

    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Check Your Address</h2>
          <p className="text-gray-300">
            Let's make sure your property is within our service area (3 miles from Richmond, VA).
          </p>
        </div>

        <MapboxAddressInput onAddressSelect={onAddressSelect} />

        {isLoading && (
          <div className="flex justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-sweat-500" />
          </div>
        )}

        {error && <div className="text-red-500 text-center">{error}</div>}

        {isWithinServiceArea === true && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-green-500 font-medium">Your address is within our service area.</p>
              <p className="text-gray-300 text-sm mt-1">
                We can provide lawn mowing service to your location. Click continue to schedule your service.
              </p>
            </div>
          </div>
        )}

        {isWithinServiceArea === false && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-start">
            <MapPin className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-500 font-medium">
                We're sorry, but your address is outside our current service area.
              </p>
              <p className="text-gray-300 text-sm mt-1">
                We're currently serving addresses within 3 miles of Richmond, VA. We're expanding soon, so please join
                our waitlist to be notified when we reach your area.
              </p>
              <Button
                className="mt-3 bg-night-700 hover:bg-night-600 text-white"
                onClick={() => router.push("/waitlist?source=service_area_check")}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <Button
            onClick={onNext}
            className="bg-sweat-500 hover:bg-sweat-600 text-white"
            disabled={!isWithinServiceArea || isLoading}
          >
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  // Frequency Step Component
  function FrequencyStep({
    frequency,
    onFrequencySelect,
    onNext,
    onBack,
  }: {
    frequency: string
    onFrequencySelect: (frequency: string) => void
    onNext: () => void
    onBack: () => void
  }) {
    const frequencies = [
      { id: "weekly", name: "Weekly", description: "Best for fast-growing seasons", discount: "$55" },
      { id: "biweekly", name: "Bi-Weekly", description: "Most popular option", discount: "$60" },
      { id: "monthly", name: "Monthly", description: "Basic maintenance", discount: "$75" },
      { id: "one-time", name: "One-Time", description: "Single service", discount: "$65" },
    ]

    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">How Often Would You Like Service?</h2>
          <p className="text-gray-300">Choose a mowing frequency that works best for your lawn and schedule.</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {frequencies.map((freq) => (
            <div
              key={freq.id}
              className={`bg-night-700 border rounded-lg p-4 cursor-pointer transition-all ${
                frequency === freq.id ? "border-sweat-500 bg-night-700/80" : "border-night-600 hover:border-gray-500"
              }`}
              onClick={() => onFrequencySelect(freq.id)}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center ${
                    frequency === freq.id ? "border-sweat-500" : "border-gray-500"
                  }`}
                >
                  {frequency === freq.id && <div className="w-3 h-3 rounded-full bg-sweat-500"></div>}
                </div>
                <div>
                  <h3 className="font-medium text-white">{freq.name}</h3>
                  <p className="text-gray-400 text-sm">{freq.description}</p>
                </div>
                {freq.discount && (
                  <div className="ml-auto">
                    <span className="text-sweat-500 font-bold">{freq.discount}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-night-700/50 rounded-lg p-4 mt-6">
          <div className="flex items-start">
            <Scissors className="h-5 w-5 text-sweat-500 mr-3 mt-1" />
            <div>
              <h3 className="font-medium text-white">Flexible scheduling</h3>
              <p className="text-gray-300 text-sm mt-1">
                You can always change your frequency later. We'll work with you to find the perfect schedule for your
                lawn.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button onClick={onBack} className="bg-night-700 hover:bg-night-600 text-white">
            Back
          </Button>
          <Button onClick={onNext} className="bg-sweat-500 hover:bg-sweat-600 text-white" disabled={!frequency}>
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  // Appointment Step Component
  function AppointmentStep({
    onTimeSelected,
    appointmentDate,
    appointmentTime,
    onNext,
    onBack,
  }: {
    onTimeSelected: (date: string, time: string) => void
    appointmentDate?: string
    appointmentTime?: string
    onNext: () => void
    onBack: () => void
  }) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Schedule Your First Service</h2>
          <p className="text-gray-300">Select a date and time for your first lawn mowing service.</p>
        </div>

        <AppointmentTimeSelector onTimeSelected={onTimeSelected} />

        {appointmentDate && appointmentTime && (
          <div className="bg-night-700/50 rounded-lg p-4">
            <h3 className="font-medium text-white mb-2">Your Selected Appointment</h3>
            <div className="flex items-center text-gray-300">
              <Calendar className="h-5 w-5 mr-2 text-sweat-500" />
              <span>
                {new Date(appointmentDate).toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}{" "}
                at {appointmentTime}
              </span>
            </div>
          </div>
        )}

        <div className="flex justify-between">
          <Button onClick={onBack} className="bg-night-700 hover:bg-night-600 text-white">
            Back
          </Button>
          <Button
            onClick={onNext}
            className="bg-sweat-500 hover:bg-sweat-600 text-white"
            disabled={!appointmentDate || !appointmentTime}
          >
            Continue <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  }

  // Details Step Component
  function DetailsStep({
    customerInfo,
    onChange,
    onSubmit,
    isLoading,
    error,
    onBack,
  }: {
    customerInfo: CustomerInfo
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    isLoading: boolean
    error: string | null
    onBack: () => void
  }) {
    return (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Your Information</h2>
          <p className="text-gray-300">Please provide your contact details to complete your booking.</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={customerInfo.firstName}
                onChange={onChange}
                required
                className="w-full px-3 py-2 bg-night-700 border border-night-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sweat-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={customerInfo.lastName}
                onChange={onChange}
                required
                className="w-full px-3 py-2 bg-night-700 border border-night-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sweat-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={customerInfo.email}
                onChange={onChange}
                required
                className="w-full px-3 py-2 bg-night-700 border border-night-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sweat-500"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={customerInfo.phone}
                onChange={onChange}
                required
                className="w-full px-3 py-2 bg-night-700 border border-night-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sweat-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-300">
              Special Instructions (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={customerInfo.notes}
              onChange={onChange}
              rows={3}
              className="w-full px-3 py-2 bg-night-700 border border-night-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sweat-500"
              placeholder="Any specific details about your lawn or service requirements..."
            />
          </div>

          <div className="bg-night-700/50 rounded-lg p-4">
            <h3 className="font-medium text-white mb-2">Service Address</h3>
            <p className="text-gray-300">{customerInfo.address}</p>
            <p className="text-gray-300">
              {customerInfo.city}, {customerInfo.state} {customerInfo.zipCode}
            </p>
          </div>

          <div className="bg-night-700/50 rounded-lg p-4">
            <h3 className="font-medium text-white mb-2">Service Details</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Scissors className="h-5 w-5 mr-2 text-sweat-500" />
                <span>
                  Frequency:{" "}
                  {customerInfo.mowingFrequency.charAt(0).toUpperCase() + customerInfo.mowingFrequency.slice(1)}
                </span>
              </div>
              <div className="flex items-center text-gray-300">
                <Calendar className="h-5 w-5 mr-2 text-sweat-500" />
                <span>
                  First Service:{" "}
                  {customerInfo.appointmentDate &&
                    new Date(customerInfo.appointmentDate).toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}{" "}
                  at {customerInfo.appointmentTime}
                </span>
              </div>
            </div>
          </div>

          {error && <div className="text-red-500 text-center">{error}</div>}

          <div className="flex justify-between">
            <Button type="button" onClick={onBack} className="bg-night-700 hover:bg-night-600 text-white">
              Back
            </Button>
            <Button type="submit" className="bg-sweat-500 hover:bg-sweat-600 text-white" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  Schedule Service <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    )
  }

  // Confirmation Step Component
  function ConfirmationStep({ onHome }: { onHome: () => void }) {
    return (
      <div className="space-y-6 text-center">
        <div className="flex justify-center">
          <div className="bg-green-500/20 rounded-full p-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white">Service Scheduled!</h2>
        <p className="text-gray-300">
          Your lawn mowing service has been scheduled. We're looking forward to serving you!
        </p>

        <div className="bg-night-700/50 rounded-lg p-6 text-left">
          <h3 className="font-medium text-white mb-4">What Happens Next?</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-sweat-500/20 text-sweat-500 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                1
              </div>
              <div>
                <p className="text-white font-medium">Confirmation Email</p>
                <p className="text-gray-300 text-sm">You'll receive a confirmation email with your service details.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-sweat-500/20 text-sweat-500 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                2
              </div>
              <div>
                <p className="text-white font-medium">Service Reminder</p>
                <p className="text-gray-300 text-sm">
                  We'll send you a reminder the day before your scheduled service.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-sweat-500/20 text-sweat-500 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                3
              </div>
              <div>
                <p className="text-white font-medium">Recurring Service</p>
                <p className="text-gray-300 text-sm">
                  Based on your selected frequency, we'll automatically schedule your future services.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-night-700/50 rounded-lg p-6 text-left">
          <h3 className="font-medium text-white mb-4">Need to make changes?</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-sweat-500 mr-3" />
              <p className="text-gray-300">Call us at (804) 555-1234</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <Button className="bg-sweat-500 hover:bg-sweat-600 text-white" onClick={onHome}>
            Return Home
          </Button>
        </div>
      </div>
    )
  }

  // Progress Steps Component
  function ProgressSteps({ currentStep }: { currentStep: Step }) {
    const steps: Step[] = ["address", "frequency", "appointment", "details", "confirmation"]
    const currentStepIndex = steps.indexOf(currentStep)

    return (
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  index <= currentStepIndex
                    ? "bg-sweat-500 text-white"
                    : "bg-night-700 text-gray-400 border border-night-600"
                }`}
              >
                {index < currentStepIndex ? (
                  <CheckCircle className="h-5 w-5" />
                ) : index === 0 ? (
                  <MapPin className="h-5 w-5" />
                ) : index === 1 ? (
                  <Scissors className="h-5 w-5" />
                ) : index === 2 ? (
                  <Calendar className="h-5 w-5" />
                ) : index === 3 ? (
                  <User className="h-5 w-5" />
                ) : (
                  <CheckCircle className="h-5 w-5" />
                )}
              </div>
              <span className={`text-xs mt-2 ${index <= currentStepIndex ? "text-gray-300" : "text-gray-500"}`}>
                {step === "address"
                  ? "Address"
                  : step === "lawn-size"
                    ? "Size"
                    : step === "frequency"
                      ? "Frequency"
                      : step === "appointment"
                        ? "Schedule"
                        : step === "details"
                          ? "Details"
                          : "Confirmation"}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 h-1 bg-night-700 w-full rounded-full"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-sweat-500 rounded-full transition-all duration-300"
            style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>
    )
  }

  // Main Component
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<Step>("address")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isWithinServiceArea, setIsWithinServiceArea] = useState<boolean | null>(null)
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    coordinates: { lat: 0, lng: 0 },
    city: "",
    state: "",
    zipCode: "",
    lawnSize: "medium", // Set a default value
    mowingFrequency: "",
    notes: "",
  })

  const handleAddressSelect = async (
    address: string,
    coordinates: { lat: number; lng: number },
    city: string,
    state: string,
    zipCode: string,
  ) => {
    setIsLoading(true)
    setError(null)

    try {
      // Check if the address is within the service area
      const response = await fetch("/api/check-service-area", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coordinates,
          centerCoordinates: RICHMOND_CENTER,
          radius: SERVICE_RADIUS,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to check service area")
      }

      const data = await response.json()
      setIsWithinServiceArea(data.isWithinServiceArea)

      if (data.isWithinServiceArea) {
        setCustomerInfo((prev) => ({
          ...prev,
          address,
          coordinates,
          city,
          state,
          zipCode,
        }))
      }
    } catch (error: any) {
      console.error("Error checking service area:", error)
      setError(error.message || "Failed to check service area")
    } finally {
      setIsLoading(false)
    }
  }

  const handleFrequencySelect = (frequency: string) => {
    setCustomerInfo((prev) => ({
      ...prev,
      mowingFrequency: frequency,
    }))
  }

  const handleAppointmentSelect = (date: string, time: string) => {
    setCustomerInfo((prev) => ({
      ...prev,
      appointmentDate: date,
      appointmentTime: time,
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCustomerInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleDetailsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Format the date and time for the API
      const formattedDate = customerInfo.appointmentDate
        ? new Date(customerInfo.appointmentDate).toISOString().split("T")[0]
        : ""

      console.log("Submitting mowing service with data:", {
        ...customerInfo,
        appointmentDate: formattedDate,
      })

      // Create appointment without payment
      const response = await fetch("/api/appointments/schedule", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customerInfo: {
            ...customerInfo,
            appointmentDate: formattedDate,
          },
          service: `Standard Mowing (${customerInfo.lawnSize}, ${customerInfo.mowingFrequency})`,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to schedule service" }))
        throw new Error(errorData.error || "Failed to schedule service")
      }

      // Move to confirmation step
      setCurrentStep("confirmation")
    } catch (error: any) {
      console.error("Error scheduling service:", error)
      setError(error.message || "Failed to schedule service")
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = () => {
    const steps: Step[] = ["address", "frequency", "appointment", "details", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const steps: Step[] = ["address", "frequency", "appointment", "details", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1])
    }
  }

  const goHome = () => {
    router.push("/")
  }

  // Render current step content
  const renderStepContent = () => {
    switch (currentStep) {
      case "address":
        return (
          <AddressStep
            onAddressSelect={handleAddressSelect}
            isLoading={isLoading}
            error={error}
            isWithinServiceArea={isWithinServiceArea}
            onNext={nextStep}
          />
        )
      case "frequency":
        return (
          <FrequencyStep
            frequency={customerInfo.mowingFrequency}
            onFrequencySelect={handleFrequencySelect}
            onNext={nextStep}
            onBack={prevStep}
          />
        )
      case "appointment":
        return (
          <AppointmentStep
            onTimeSelected={handleAppointmentSelect}
            appointmentDate={customerInfo.appointmentDate}
            appointmentTime={customerInfo.appointmentTime}
            onNext={nextStep}
            onBack={prevStep}
          />
        )
      case "details":
        return (
          <DetailsStep
            customerInfo={customerInfo}
            onChange={handleInputChange}
            onSubmit={handleDetailsSubmit}
            isLoading={isLoading}
            error={error}
            onBack={prevStep}
          />
        )
      case "confirmation":
        return <ConfirmationStep onHome={goHome} />
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <ProgressSteps currentStep={currentStep} />
      <Card className="bg-night-800 border-night-700 text-white p-6">{renderStepContent()}</Card>
    </div>
  )
}

export { StandardMowingFlow }
