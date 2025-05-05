"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, AlertCircle, ArrowRight, MapPin, Calendar, CreditCard } from "lucide-react"
import { MapboxAddressInput } from "@/components/mapbox-address-input"
import { AppointmentTimeSelector } from "@/components/appointment-time-selector"
import PaymentForm from "@/components/payment-form"
import { format } from "date-fns"

export default function BookingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Step 1: Address and service area check
  const [address, setAddress] = useState("")
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null)
  const [isInServiceArea, setIsInServiceArea] = useState(false)

  // Step 2: Appointment time selection
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)

  // Step 3: Customer information
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notes, setNotes] = useState("")

  // Step 4: Payment
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [appointmentId, setAppointmentId] = useState<string | null>(null)

  const handleAddressSelected = (
    selectedAddress: string,
    selectedCoordinates: { lat: number; lng: number },
    serviceAreaStatus: boolean,
  ) => {
    setAddress(selectedAddress)
    setCoordinates(selectedCoordinates)
    setIsInServiceArea(serviceAreaStatus)
  }

  const handleTimeSelected = (date: Date, timeSlot: string) => {
    setSelectedDate(date)
    setSelectedTimeSlot(timeSlot)
  }

  const handleNextStep = () => {
    // Validate current step
    if (currentStep === 1 && (!address || !coordinates || !isInServiceArea)) {
      setError("Please enter a valid address within our service area")
      return
    }

    if (currentStep === 2 && (!selectedDate || !selectedTimeSlot)) {
      setError("Please select a date and time for your appointment")
      return
    }

    if (currentStep === 3 && (!name || !email || !phone)) {
      setError("Please fill in all required fields")
      return
    }

    setError(null)

    if (currentStep === 3) {
      // Create appointment and proceed to payment
      createAppointment()
    } else {
      // Move to next step
      setCurrentStep(currentStep + 1)
    }
  }

  const createAppointment = async () => {
    if (!selectedDate || !selectedTimeSlot || !coordinates) {
      setError("Missing required appointment information")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch("/api/appointments/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: format(selectedDate, "yyyy-MM-dd"),
          timeSlot: selectedTimeSlot,
          name,
          email,
          phone,
          address,
          coordinates,
          notes,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to book appointment")
      }

      const data = await response.json()
      setClientSecret(data.clientSecret)
      setAppointmentId(data.appointment.id)
      setCurrentStep(4)
    } catch (error: any) {
      console.error("Error creating appointment:", error)
      setError(error.message || "Failed to create appointment")
    } finally {
      setLoading(false)
    }
  }

  const handlePaymentSuccess = () => {
    // Redirect to success page after payment
    setTimeout(() => {
      router.push("/book/success")
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Book Your Lawn Service</h1>
            <p className="text-gray-600">Complete the steps below to schedule your appointment</p>
          </div>

          <div className="flex justify-between mb-8">
            <div className={`flex flex-col items-center ${currentStep >= 1 ? "text-sweat-500" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 1 ? "border-sweat-500 bg-sweat-500 text-white" : "border-gray-300"}`}
              >
                <MapPin className="h-5 w-5" />
              </div>
              <span className="mt-2 text-sm font-medium">Address</span>
            </div>

            <div className={`flex flex-col items-center ${currentStep >= 2 ? "text-sweat-500" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 2 ? "border-sweat-500 bg-sweat-500 text-white" : "border-gray-300"}`}
              >
                <Calendar className="h-5 w-5" />
              </div>
              <span className="mt-2 text-sm font-medium">Schedule</span>
            </div>

            <div className={`flex flex-col items-center ${currentStep >= 3 ? "text-sweat-500" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 3 ? "border-sweat-500 bg-sweat-500 text-white" : "border-gray-300"}`}
              >
                <span className="text-sm font-medium">Info</span>
              </div>
              <span className="mt-2 text-sm font-medium">Details</span>
            </div>

            <div className={`flex flex-col items-center ${currentStep >= 4 ? "text-sweat-500" : "text-gray-400"}`}>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${currentStep >= 4 ? "border-sweat-500 bg-sweat-500 text-white" : "border-gray-300"}`}
              >
                <CreditCard className="h-5 w-5" />
              </div>
              <span className="mt-2 text-sm font-medium">Payment</span>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>
                {currentStep === 1 && "Check Service Area"}
                {currentStep === 2 && "Select Appointment Time"}
                {currentStep === 3 && "Your Information"}
                {currentStep === 4 && "Payment"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert className="mb-6 bg-red-50 border-red-200">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-700">{error}</AlertDescription>
                </Alert>
              )}

              {/* Step 1: Address and Service Area Check */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <MapboxAddressInput onAddressSelected={handleAddressSelected} />
                </div>
              )}

              {/* Step 2: Appointment Time Selection */}
              {currentStep === 2 && <AppointmentTimeSelector onTimeSelected={handleTimeSelected} />}

              {/* Step 3: Customer Information */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Special Instructions (Optional)</Label>
                    <Textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
                  </div>
                </div>
              )}

              {/* Step 4: Payment */}
              {currentStep === 4 && clientSecret && appointmentId && (
                <PaymentForm
                  clientSecret={clientSecret}
                  appointmentId={appointmentId}
                  onPaymentSuccess={handlePaymentSuccess}
                />
              )}
            </CardContent>
          </Card>

          {currentStep < 4 && (
            <div className="flex justify-end">
              <Button
                onClick={handleNextStep}
                disabled={loading || (currentStep === 1 && !isInServiceArea)}
                className="bg-sweat-500 hover:bg-sweat-600"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    {currentStep === 3 ? "Proceed to Payment" : "Continue"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
