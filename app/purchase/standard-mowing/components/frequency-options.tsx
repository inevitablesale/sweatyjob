"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface FrequencyOption {
  id: string
  name: string
  description: string
  price: number
}

const frequencyOptions: FrequencyOption[] = [
  {
    id: "weekly",
    name: "Weekly",
    description: "Best value, consistent maintenance",
    price: 55,
  },
  {
    id: "biweekly",
    name: "Bi-Weekly",
    description: "Popular option, every other week",
    price: 60,
  },
  {
    id: "monthly",
    name: "Monthly",
    description: "Basic maintenance option",
    price: 65,
  },
]

export default function FrequencyOptions() {
  const [selectedFrequency, setSelectedFrequency] = useState<string>("")
  const router = useRouter()

  const handleContinue = () => {
    if (selectedFrequency) {
      // Save selection to form state/localStorage and proceed to next step
      localStorage.setItem("mowing_frequency", selectedFrequency)
      router.push("/purchase/standard-mowing/schedule")
    }
  }

  const handleBack = () => {
    router.push("/purchase/standard-mowing/address")
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Select Your Service Frequency</h2>
        <p className="text-gray-300">Choose how often you'd like your lawn mowed.</p>
      </div>

      <RadioGroup value={selectedFrequency} onValueChange={setSelectedFrequency} className="space-y-4">
        {frequencyOptions.map((option) => (
          <div
            key={option.id}
            className={`relative flex items-center justify-between p-6 rounded-lg border border-gray-700 hover:border-teal-500 transition-all ${
              selectedFrequency === option.id ? "border-teal-500 bg-gray-800/50" : "bg-gray-800/30"
            }`}
          >
            <div className="flex items-start gap-4">
              <RadioGroupItem value={option.id} id={option.id} className="mt-1" />
              <div>
                <Label htmlFor={option.id} className="text-lg font-medium text-white cursor-pointer">
                  {option.name}
                </Label>
                <p className="text-gray-400 mt-1">{option.description}</p>
              </div>
            </div>
            <div className="text-teal-400 text-xl font-bold">${option.price}</div>
          </div>
        ))}
      </RadioGroup>

      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={handleBack}
          className="bg-gray-700 hover:bg-gray-600 border-gray-600 text-white"
        >
          Back
        </Button>
        <Button
          onClick={handleContinue}
          disabled={!selectedFrequency}
          className="bg-teal-500 hover:bg-teal-400 text-white px-6"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
