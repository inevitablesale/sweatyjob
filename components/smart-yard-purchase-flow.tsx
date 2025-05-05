"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, MapPin, Calendar, Loader2, Phone, User, Clock, ChevronRight, Zap, Shield } from "lucide-react"
import { MapboxAddressInput } from "./mapbox-address-input"
import { AppointmentTimeSelector } from "./appointment-time-selector"

// Richmond, VA coordinates
const RICHMOND_CENTER = {
  lat: 37.5407,
  lng: -77.436,
}

// Service radius in miles
const SERVICE_RADIUS = 3

type Step = "address" | "appointment" | "details" | "confirmation"

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
  appointmentDate?: string
  appointmentTime?: string
  notes?: string
  priorityInstallation: boolean
}

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
        <h2 className="text-3xl font-extrabold text-white mb-2 uppercase">Where's Your Property?</h2>
        <p className="text-gray-300 text-lg">We're currently serving addresses within 3 miles of Richmond, VA.</p>
      </div>

      <MapboxAddressInput onAddressSelect={onAddressSelect} />

      {isLoading && (
        <div className="flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-yellow-400" />
        </div>
      )}

      {error && <div className="text-red-500 text-center font-bold">{error}</div>}

      {isWithinServiceArea === true && (
        <div className="bg-green-500/10 border-l-4 border-green-500 rounded-lg p-4 flex items-start">
          <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-green-500 font-bold text-lg">YOU'RE IN OUR ZONE!</p>
            <p className="text-gray-300 mt-1">
              We can provide SmartYard service to your location. Let's get your consultation scheduled!
            </p>
          </div>
        </div>
      )}

      {isWithinServiceArea === false && (
        <div className="bg-red-500/10 border-l-4 border-red-500 rounded-lg p-4 flex items-start">
          <MapPin className="h-6 w-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-red-500 font-bold text-lg">JUST OUTSIDE OUR ZONE</p>
            <p className="text-gray-300 mt-1">
              We're expanding fast! Join our waitlist and we'll notify you the moment we reach your area.
            </p>
            <Button
              className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold uppercase"
              onClick={() => router.push("/waitlist?source=service_area_check")}
            >
              Join Waitlist Now
            </Button>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <Button
          onClick={onNext}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold text-lg px-8 py-6 rounded-lg"
          disabled={!isWithinServiceArea || isLoading}
        >
          NEXT STEP <ChevronRight className="ml-2 h-5 w-5" />
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
        <h2 className="text-3xl font-extrabold text-white mb-2 uppercase">Pick Your Time</h2>
        <p className="text-gray-300 text-lg">
          Our experts will visit your property and create your custom SmartYard plan.
        </p>
      </div>

      <AppointmentTimeSelector onTimeSelected={onTimeSelected} />

      {appointmentDate && appointmentTime && (
        <div className="bg-yellow-400/10 border-l-4 border-yellow-400 rounded-lg p-4">
          <h3 className="font-bold text-white text-lg uppercase mb-2">Your Selected Time</h3>
          <div className="flex items-center text-white">
            <Calendar className="h-5 w-5 mr-2 text-yellow-400" />
            <span className="font-medium">
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
        <Button onClick={onBack} className="bg-gray-800 hover:bg-gray-700 text-white font-bold">
          Back
        </Button>
        <Button
          onClick={onNext}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold text-lg px-8 py-6 rounded-lg"
          disabled={!appointmentDate || !appointmentTime}
        >
          CONTINUE <ChevronRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

// Details Step Component
function DetailsStep({
  customerInfo,
  onChange,
  onPriorityInstallationChange,
  onSubmit,
  isLoading,
  error,
  onBack,
}: {
  customerInfo: CustomerInfo
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onPriorityInstallationChange: (checked: boolean) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
  error: string | null
  onBack: () => void
}) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-white mb-2 uppercase">Almost Done!</h2>
        <p className="text-gray-300 text-lg">Fill in your details and we'll confirm your consultation.</p>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-bold text-gray-300 uppercase">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={customerInfo.firstName}
              onChange={onChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-bold text-gray-300 uppercase">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={customerInfo.lastName}
              onChange={onChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-bold text-gray-300 uppercase">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={customerInfo.email}
              onChange={onChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-bold text-gray-300 uppercase">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={customerInfo.phone}
              onChange={onChange}
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* INSTALLATION UPSELL */}
        <div className="bg-yellow-400/20 border-2 border-yellow-400 rounded-lg p-6 my-8">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Zap className="h-10 w-10 text-yellow-400" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-extrabold text-white uppercase">PRIORITY INSTALLATION</h3>
              <p className="text-gray-300 mt-1">
                Get your SmartYard installed within 7 days of approval! Skip the standard 3-week waiting period.
              </p>

              <div className="flex items-center mt-4 space-x-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="priorityInstallation"
                    checked={customerInfo.priorityInstallation}
                    onChange={(e) => onPriorityInstallationChange(e.target.checked)}
                    className="h-5 w-5 text-yellow-400 rounded border-gray-600 focus:ring-yellow-400"
                  />
                  <label htmlFor="priorityInstallation" className="ml-2 text-white font-bold">
                    YES! Add Priority Installation (+$199)
                  </label>
                </div>
              </div>

              <div className="mt-4 flex items-center text-sm text-gray-300">
                <Shield className="h-4 w-4 text-yellow-400 mr-2" />
                <span>100% Money-back guarantee if we can't meet the 7-day window</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="notes" className="block text-sm font-bold text-gray-300 uppercase">
            Special Instructions (Optional)
          </label>
          <textarea
            id="notes"
            name="notes"
            value={customerInfo.notes}
            onChange={onChange}
            rows={3}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Any specific details about your property or requirements..."
          />
        </div>

        <div className="bg-gray-800/80 rounded-lg p-4">
          <h3 className="font-bold text-white uppercase mb-2">Installation Address</h3>
          <p className="text-gray-300">{customerInfo.address}</p>
          <p className="text-gray-300">
            {customerInfo.city}, {customerInfo.state} {customerInfo.zipCode}
          </p>
        </div>

        <div className="bg-gray-800/80 rounded-lg p-4">
          <h3 className="font-bold text-white uppercase mb-2">Appointment Details</h3>
          <div className="flex items-center text-gray-300">
            <Calendar className="h-5 w-5 mr-2 text-yellow-400" />
            <span>
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

        {error && <div className="text-red-500 text-center font-bold">{error}</div>}

        <div className="flex justify-between">
          <Button type="button" onClick={onBack} className="bg-gray-800 hover:bg-gray-700 text-white font-bold">
            Back
          </Button>
          <Button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold text-lg px-8 py-6 rounded-lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" /> PROCESSING...
              </>
            ) : (
              <>
                SCHEDULE NOW <ChevronRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}

// Confirmation Step Component
function ConfirmationStep({ customerInfo, onHome }: { customerInfo: CustomerInfo; onHome: () => void }) {
  return (
    <div className="space-y-8 text-center">
      <div className="flex justify-center">
        <div className="bg-green-500/20 rounded-full p-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
      </div>

      <h2 className="text-4xl font-extrabold text-white uppercase">YOU'RE ALL SET!</h2>
      <p className="text-xl text-gray-300">
        Your consultation has been scheduled. We're excited to transform your yard!
      </p>

      {customerInfo.priorityInstallation && (
        <div className="bg-yellow-400/20 border-2 border-yellow-400 rounded-lg p-6 my-4">
          <div className="flex items-center justify-center">
            <Zap className="h-8 w-8 text-yellow-400 mr-3" />
            <h3 className="text-xl font-extrabold text-white uppercase">PRIORITY INSTALLATION CONFIRMED</h3>
          </div>
          <p className="text-gray-300 mt-2">
            You'll be fast-tracked for installation within 7 days of your plan approval!
          </p>
        </div>
      )}

      <div className="bg-gray-800/80 rounded-lg p-6 text-left">
        <h3 className="font-bold text-white text-xl uppercase mb-4">What Happens Next?</h3>
        <ul className="space-y-6">
          <li className="flex items-start">
            <div className="bg-yellow-400 text-black h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <p className="text-white font-bold text-lg">CHECK YOUR EMAIL</p>
              <p className="text-gray-300">We've sent you a confirmation with all the details.</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-yellow-400 text-black h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <p className="text-white font-bold text-lg">PROPERTY ASSESSMENT</p>
              <p className="text-gray-300">
                Our team will visit at your scheduled time to assess your property and discuss your needs.
              </p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="bg-yellow-400 text-black h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <p className="text-white font-bold text-lg">CUSTOM SMARTYARD PLAN</p>
              <p className="text-gray-300">You'll receive a personalized plan and quote tailored to your property.</p>
            </div>
          </li>
          {customerInfo.priorityInstallation && (
            <li className="flex items-start">
              <div className="bg-yellow-400 text-black h-8 w-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 font-bold">
                4
              </div>
              <div>
                <p className="text-white font-bold text-lg">FAST-TRACK INSTALLATION</p>
                <p className="text-gray-300">
                  With your Priority Installation, we'll schedule your setup within 7 days of plan approval.
                </p>
              </div>
            </li>
          )}
        </ul>
      </div>

      <div className="bg-gray-800/80 rounded-lg p-6 text-left">
        <h3 className="font-bold text-white text-xl uppercase mb-4">Need to make changes?</h3>
        <div className="flex items-center">
          <Phone className="h-6 w-6 text-yellow-400 mr-3" />
          <p className="text-gray-300 text-lg">Call us at (804) 555-1234</p>
        </div>
      </div>

      <div className="flex justify-center pt-4">
        <Button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-extrabold text-lg px-8 py-6 rounded-lg"
          onClick={onHome}
        >
          BACK TO HOME
        </Button>
      </div>
    </div>
  )
}

// Progress Steps Component
function ProgressSteps({ currentStep }: { currentStep: Step }) {
  const steps: Step[] = ["address", "appointment", "details", "confirmation"]
  const currentStepIndex = steps.indexOf(currentStep)

  return (
    <div className="mb-10">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-col items-center relative">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${
                index <= currentStepIndex
                  ? "bg-yellow-400 text-black"
                  : "bg-gray-800 text-gray-400 border border-gray-700"
              }`}
            >
              {index < currentStepIndex ? (
                <CheckCircle className="h-7 w-7" />
              ) : index === 0 ? (
                <MapPin className="h-7 w-7" />
              ) : index === 1 ? (
                <Calendar className="h-7 w-7" />
              ) : index === 2 ? (
                <User className="h-7 w-7" />
              ) : (
                <CheckCircle className="h-7 w-7" />
              )}
            </div>
            <span
              className={`text-sm mt-2 font-bold uppercase ${
                index <= currentStepIndex ? "text-yellow-400" : "text-gray-500"
              }`}
            >
              {step === "address"
                ? "Address"
                : step === "appointment"
                  ? "Schedule"
                  : step === "details"
                    ? "Details"
                    : "Done!"}
            </span>

            {index < steps.length - 1 && (
              <div className="absolute top-7 left-[3.5rem] w-[calc(100%-3.5rem)] h-0.5 -z-10 bg-gray-800">
                <div
                  className={`h-full bg-yellow-400 transition-all duration-300 ${
                    index < currentStepIndex ? "w-full" : "w-0"
                  }`}
                ></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Main Component
export function SmartYardPurchaseFlow() {
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
    notes: "",
    priorityInstallation: false,
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

  const handlePriorityInstallationChange = (checked: boolean) => {
    setCustomerInfo((prev) => ({ ...prev, priorityInstallation: checked }))
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

      console.log("Submitting appointment with data:", {
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
          service: "SmartYard Consultation",
          addons: customerInfo.priorityInstallation ? ["Priority Installation"] : [],
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to schedule appointment" }))
        throw new Error(errorData.error || "Failed to schedule appointment")
      }

      // Move to confirmation step
      setCurrentStep("confirmation")
    } catch (error: any) {
      console.error("Error scheduling appointment:", error)
      setError(error.message || "Failed to schedule appointment")
    } finally {
      setIsLoading(false)
    }
  }

  const nextStep = () => {
    const steps: Step[] = ["address", "appointment", "details", "confirmation"]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  const prevStep = () => {
    const steps: Step[] = ["address", "appointment", "details", "confirmation"]
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
            onPriorityInstallationChange={handlePriorityInstallationChange}
            onSubmit={handleDetailsSubmit}
            isLoading={isLoading}
            error={error}
            onBack={prevStep}
          />
        )
      case "confirmation":
        return <ConfirmationStep customerInfo={customerInfo} onHome={goHome} />
      default:
        return null
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <ProgressSteps currentStep={currentStep} />
      <Card className="bg-gray-900 border-gray-800 text-white p-8 shadow-xl rounded-xl">{renderStepContent()}</Card>

      {/* Gary V-style urgency elements */}
      {currentStep !== "confirmation" && currentStep !== "details" && (
        <div className="mt-8 bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded-lg">
          <div className="flex items-center">
            <Clock className="h-6 w-6 text-yellow-400 mr-3" />
            <p className="text-white font-bold">
              LIMITED TIME OFFER: Schedule now and get a FREE soil analysis with your consultation ($99 value)!
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
