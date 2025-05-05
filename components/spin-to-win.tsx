"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Gift, Trophy, X, ArrowRight, Loader2 } from "lucide-react"
import { capturePhoneNumber } from "@/app/actions/capture-phone"
import confetti from "canvas-confetti"

type Prize = {
  id: string
  name: string
  description: string
  probability: number
  color: string
  icon: React.ReactNode
  isGrandPrize?: boolean
}

const prizes: Prize[] = [
  {
    id: "free-trial",
    name: "30-Day Free Trial",
    description: "Experience the MowBot for a full month at no cost!",
    probability: 5, // 5% chance
    color: "bg-yellow-500",
    icon: <Trophy className="h-6 w-6 text-yellow-900" />,
    isGrandPrize: true,
  },
  {
    id: "discount-25",
    name: "25% OFF",
    description: "First month of MowBot service",
    probability: 15,
    color: "bg-green-500",
    icon: <Sparkles className="h-6 w-6 text-green-900" />,
  },
  {
    id: "discount-15",
    name: "15% OFF",
    description: "First month of MowBot service",
    probability: 25,
    color: "bg-blue-500",
    icon: <Gift className="h-6 w-6 text-blue-900" />,
  },
  {
    id: "free-edging",
    name: "Free Edging",
    description: "One free edging service with your MowBot subscription",
    probability: 20,
    color: "bg-purple-500",
    icon: <Sparkles className="h-6 w-6 text-purple-900" />,
  },
  {
    id: "discount-10",
    name: "10% OFF",
    description: "First month of MowBot service",
    probability: 35,
    color: "bg-pink-500",
    icon: <Gift className="h-6 w-6 text-pink-900" />,
  },
]

// Normalize probabilities to ensure they sum to 100
const normalizeProbabilities = (prizes: Prize[]): Prize[] => {
  const totalProbability = prizes.reduce((sum, prize) => sum + prize.probability, 0)
  return prizes.map((prize) => ({
    ...prize,
    probability: (prize.probability / totalProbability) * 100,
  }))
}

const normalizedPrizes = normalizeProbabilities(prizes)

interface SpinToWinProps {
  onClose?: () => void
  source?: string
}

export function SpinToWin({ onClose, source = "spin-to-win" }: SpinToWinProps) {
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [currentStep, setCurrentStep] = useState<"phone" | "spin" | "result">("phone")
  const [isSpinning, setIsSpinning] = useState(false)
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null)
  const [rotation, setRotation] = useState(0)
  const wheelRef = useRef<HTMLDivElement>(null)

  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    // Basic validation
    if (!phone || phone.replace(/\D/g, "").length < 10) {
      setError("Please enter a valid phone number")
      setIsSubmitting(false)
      return
    }

    try {
      // Create FormData object to pass to the server action
      const formData = new FormData()
      formData.append("phone", phone)
      formData.append("source", `${source}-game`)
      formData.append("skipRedirect", "true")

      // Call the server action with the FormData
      const result = await capturePhoneNumber(formData)

      if (result.success) {
        setCurrentStep("spin")
      } else if (result.error) {
        setError(result.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error("Phone capture error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const spinWheel = () => {
    if (isSpinning) return

    setIsSpinning(true)

    // Determine the winning prize based on probability
    const random = Math.random() * 100
    let cumulativeProbability = 0
    let winningPrize: Prize | null = null

    for (const prize of normalizedPrizes) {
      cumulativeProbability += prize.probability
      if (random <= cumulativeProbability) {
        winningPrize = prize
        break
      }
    }

    // Calculate the rotation to land on the winning prize
    const prizeIndex = normalizedPrizes.findIndex((p) => p.id === winningPrize?.id)
    const segmentAngle = 360 / normalizedPrizes.length
    const targetRotation = 360 * 5 + segmentAngle * prizeIndex

    // Add some randomness within the segment
    const randomOffset = Math.random() * (segmentAngle * 0.8) - segmentAngle * 0.4
    const finalRotation = targetRotation + randomOffset

    setRotation(finalRotation)
    setSelectedPrize(winningPrize)

    // After animation completes, show the result
    setTimeout(() => {
      setIsSpinning(false)
      setCurrentStep("result")

      // Trigger confetti for grand prize
      if (winningPrize?.isGrandPrize) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      }
    }, 5000)
  }

  const resetGame = () => {
    setCurrentStep("phone")
    setPhone("")
    setSelectedPrize(null)
    setRotation(0)
    setError(null)
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-night-800 border-night-700 text-white relative">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-full bg-night-700 hover:bg-night-600 transition-colors z-10"
          aria-label="Close"
        >
          <X className="h-4 w-4 text-gray-400" />
        </button>
      )}

      <CardHeader className="text-center pb-2">
        <div className="inline-flex mx-auto mb-2 bg-gradient-to-r from-sweat-500/20 to-grass-500/20 p-3 rounded-full">
          <Trophy className="h-6 w-6 text-yellow-500" />
        </div>
        <CardTitle className="text-2xl font-bold">Bot Buddy Spin & Win</CardTitle>
        <CardDescription className="text-gray-400">
          {currentStep === "phone" && "Enter your phone number for a chance to win a 30-day FREE MowBot trial!"}
          {currentStep === "spin" && "Spin the wheel to reveal your prize!"}
          {currentStep === "result" && "Congratulations on your prize!"}
        </CardDescription>
      </CardHeader>

      <CardContent className="pt-4">
        {currentStep === "phone" && (
          <form onSubmit={handlePhoneSubmit} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-night-700 border-night-600 text-white placeholder:text-gray-500"
                disabled={isSubmitting}
              />
              {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
            </div>
            <Button type="submit" className="w-full bg-sweat-500 hover:bg-sweat-600 text-white" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Get Spinning <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        )}

        {currentStep === "spin" && (
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 mb-6">
              {/* Wheel Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[20px] border-l-transparent border-r-transparent border-t-sweat-500"></div>
              </div>

              {/* Wheel */}
              <div
                ref={wheelRef}
                className="w-full h-full rounded-full overflow-hidden border-4 border-night-600 relative transition-transform duration-5000 ease-out"
                style={{ transform: `rotate(${rotation}deg)` }}
              >
                {normalizedPrizes.map((prize, index) => {
                  const segmentAngle = 360 / normalizedPrizes.length
                  const rotation = index * segmentAngle

                  return (
                    <div
                      key={prize.id}
                      className={`absolute top-0 left-0 w-full h-full ${prize.color} origin-bottom-right`}
                      style={{
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(((rotation + segmentAngle) * Math.PI) / 180)}% ${50 + 50 * Math.sin(((rotation + segmentAngle) * Math.PI) / 180)}%, 50% 50%)`,
                        transform: `rotate(${rotation}deg)`,
                      }}
                    >
                      <div
                        className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-center"
                        style={{ transform: `rotate(${segmentAngle / 2}deg)` }}
                      >
                        <div className="flex justify-center mb-1">{prize.icon}</div>
                        <p className="text-xs font-bold text-black">{prize.name}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <Button
              onClick={spinWheel}
              className="bg-sweat-500 hover:bg-sweat-600 text-white"
              disabled={isSpinning}
              size="lg"
            >
              {isSpinning ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Spinning...
                </>
              ) : (
                "SPIN TO WIN!"
              )}
            </Button>
          </div>
        )}

        {currentStep === "result" && selectedPrize && (
          <div className="text-center">
            <div className={`${selectedPrize.color} p-6 rounded-lg mb-4 mx-auto max-w-xs`}>
              <div className="flex justify-center mb-2">{selectedPrize.icon}</div>
              <h3 className="text-2xl font-bold text-black mb-1">{selectedPrize.name}</h3>
              <p className="text-black/80">{selectedPrize.description}</p>
            </div>

            <div className="bg-night-700/50 p-4 rounded-lg mb-4">
              <h4 className="font-medium text-white mb-2">What happens next?</h4>
              <p className="text-gray-300 text-sm">
                We'll text you the details of your prize and how to redeem it. Our team will be in touch within 24 hours
                to schedule your consultation.
              </p>
            </div>

            <div className="flex space-x-3">
              <Button onClick={resetGame} className="flex-1 bg-night-700 hover:bg-night-600 text-white">
                Play Again
              </Button>
              <Button
                onClick={() => (window.location.href = "/purchase/smart-yard")}
                className="flex-1 bg-sweat-500 hover:bg-sweat-600 text-white"
              >
                Schedule Now
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 pb-4 text-center">
        <p className="text-gray-500 text-xs mx-auto">
          *No purchase necessary. Limit one play per household. See terms for details.
        </p>
      </CardFooter>
    </Card>
  )
}
