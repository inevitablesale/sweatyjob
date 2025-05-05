"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Bot, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

interface AppointmentDetails {
  id: string
  address: string
  appointmentDate: string
  timeSlot: string
  status: string
}

export default function SuccessPage() {
  const searchParams = useSearchParams()
  const appointmentId = searchParams.get("appointment_id")
  const [appointment, setAppointment] = useState<AppointmentDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      if (!appointmentId) return

      try {
        const response = await fetch(`/api/appointments/details?id=${appointmentId}`)

        if (!response.ok) {
          throw new Error("Failed to fetch appointment details")
        }

        const data = await response.json()
        setAppointment(data.appointment)
      } catch (error: any) {
        console.error("Error fetching appointment details:", error)
        setError(error.message || "Failed to fetch appointment details")
      } finally {
        setLoading(false)
      }
    }

    fetchAppointmentDetails()
  }, [appointmentId])

  if (loading) {
    return (
      <div className="min-h-screen bg-night-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sweat-500 mx-auto mb-4"></div>
          <p className="text-white">Loading your appointment details...</p>
        </div>
      </div>
    )
  }

  if (error || !appointment) {
    return (
      <div className="min-h-screen bg-night-900 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-night-800 border-night-700 text-white">
              <CardContent className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Something went wrong</h1>
                <p className="text-gray-300 mb-6">{error || "Could not find appointment details"}</p>
                <Button className="bg-sweat-500 hover:bg-sweat-600 text-white" asChild>
                  <Link href="/">Return Home</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-night-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-sweat-500/20 rounded-full mb-6">
              <CheckCircle className="h-10 w-10 text-sweat-500" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Thank You for Your Purchase!</h1>
            <p className="text-xl text-gray-300">
              Your SmartYard membership has been confirmed. We're excited to welcome you to the SweatyJob family!
            </p>
          </div>

          <Card className="bg-night-800 border-night-700 text-white mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Your Installation Appointment</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-sweat-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Date & Time</p>
                    <p className="text-gray-300">
                      {new Date(appointment.appointmentDate).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      at {appointment.timeSlot}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-sweat-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Installation Address</p>
                    <p className="text-gray-300">{appointment.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Bot className="h-5 w-5 text-sweat-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium">Service</p>
                    <p className="text-gray-300">SmartYard Membership - Robot Mower Installation</p>
                  </div>
                </div>
              </div>

              <div className="bg-night-700/50 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold mb-4">What Happens Next?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-sweat-500/20 text-sweat-500 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-white font-medium">Confirmation Email</p>
                      <p className="text-gray-300 text-sm">
                        You'll receive a confirmation email with your appointment details.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sweat-500/20 text-sweat-500 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-white font-medium">Pre-Installation Call</p>
                      <p className="text-gray-300 text-sm">
                        Our team will call you 24 hours before your appointment to confirm details.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sweat-500/20 text-sweat-500 h-6 w-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-white font-medium">Installation Day</p>
                      <p className="text-gray-300 text-sm">
                        Our technicians will arrive during your scheduled time slot to set up your SmartYard system.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-sweat-500 hover:bg-sweat-600 text-white" size="lg" asChild>
              <Link href="/member-benefits">
                <Calendar className="mr-2 h-5 w-5" /> Explore Member Benefits
              </Link>
            </Button>
            <Button className="bg-night-700 hover:bg-night-600 text-white" size="lg" asChild>
              <Link href="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
