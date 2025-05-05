"use client"

import { usePathname } from "next/navigation"
import { MapPin, Calendar, User, CheckCircle } from "lucide-react"

export default function ProgressSteps() {
  const pathname = usePathname()

  const steps = [
    {
      id: "address",
      label: "Address",
      path: "/purchase/standard-mowing/address",
      icon: MapPin,
    },
    {
      id: "frequency",
      label: "Frequency",
      path: "/purchase/standard-mowing/frequency",
      icon: Calendar,
    },
    {
      id: "schedule",
      label: "Schedule",
      path: "/purchase/standard-mowing/schedule",
      icon: Calendar,
    },
    {
      id: "details",
      label: "Details",
      path: "/purchase/standard-mowing/details",
      icon: User,
    },
    {
      id: "confirmation",
      label: "Confirmation",
      path: "/purchase/standard-mowing/confirmation",
      icon: CheckCircle,
    },
  ]

  const currentStepIndex = steps.findIndex((step) => pathname.includes(step.id))

  return (
    <div className="flex justify-center mb-12">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const isActive = index <= currentStepIndex
          const isCompleted = index < currentStepIndex

          return (
            <div key={step.id} className="flex items-center">
              {/* Step circle */}
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-full ${
                  isActive ? "bg-teal-500 text-white" : "bg-gray-700 text-gray-400"
                }`}
              >
                <step.icon className="w-5 h-5" />
              </div>

              {/* Step label */}
              <div className={`hidden sm:block ml-2 ${isActive ? "text-white" : "text-gray-500"}`}>{step.label}</div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className={`w-16 h-1 mx-2 ${index < currentStepIndex ? "bg-teal-500" : "bg-gray-700"}`} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
