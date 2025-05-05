"use client"

import { useRef, useEffect, useState } from "react"
import confetti from "canvas-confetti"

// Define prize types and their probabilities
export type Prize = {
  id: string
  text: string
  color: string
  probability: number
  isGrandPrize?: boolean
}

// Simplified prize structure: just two options
export const PRIZES: Prize[] = [
  { id: "free-trial", text: "30-Day FREE Trial", color: "#10B981", probability: 5, isGrandPrize: true }, // 5%
  { id: "discount-10", text: "10% OFF First Month", color: "#3B82F6", probability: 95 }, // 95%
]

// Function to select a prize based on probability
export function selectPrize(): Prize {
  const random = Math.random() * 100

  // 5% chance for the free trial
  if (random <= 5) {
    return PRIZES[0] // 30-Day FREE Trial
  } else {
    return PRIZES[1] // 10% OFF
  }
}

interface SpinWheelProps {
  isSpinning: boolean
  onSpinComplete: (prize: Prize) => void
  selectedPrize?: Prize | null
}

export function SpinWheel({ isSpinning, onSpinComplete, selectedPrize }: SpinWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rotation, setRotation] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const animationRef = useRef<number>()
  const prize = useRef<Prize | null>(selectedPrize || null)

  // Create more visual segments while maintaining the same odds
  const visualSegments = [
    { ...PRIZES[0] }, // FREE Trial
    { ...PRIZES[1] }, // 10% OFF
    { ...PRIZES[1] }, // 10% OFF
    { ...PRIZES[1] }, // 10% OFF
    { ...PRIZES[1] }, // 10% OFF
    { ...PRIZES[1] }, // 10% OFF
    { ...PRIZES[1] }, // 10% OFF
    { ...PRIZES[1] }, // 10% OFF
  ]

  // Effect to handle spinning animation
  useEffect(() => {
    if (!isSpinning || !canvasRef.current || animationComplete) return

    // If no prize is selected yet, select one based on probability
    if (!prize.current) {
      prize.current = selectPrize()
    }

    // Calculate target rotation to land on the selected prize
    // For the FREE Trial (index 0) or one of the 10% OFF segments (indices 1-7)
    const segmentIndex = prize.current.id === "free-trial" ? 0 : 1 + Math.floor(Math.random() * 6)
    const segmentAngle = 360 / visualSegments.length

    // Calculate the rotation needed to land on the prize
    // We add 5 full rotations for effect, then position to the prize
    const targetRotation = 360 * 5 + (360 - (segmentIndex * segmentAngle + segmentAngle / 2))

    // Add a small random offset within the segment for realism
    const randomOffset = (Math.random() * 0.5 - 0.25) * segmentAngle
    const finalRotation = targetRotation + randomOffset

    let currentRotation = 0
    const duration = 5000 // 5 seconds
    const startTime = performance.now()

    const animate = (time: number) => {
      const elapsed = time - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for natural slowdown
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
      currentRotation = progress * finalRotation * easeOut(progress)

      setRotation(currentRotation)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setAnimationComplete(true)
        if (prize.current?.isGrandPrize) {
          // Trigger confetti for grand prize
          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#10B981", "#34D399", "#6EE7B7"],
          })
        }
        onSpinComplete(prize.current)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isSpinning, animationComplete, onSpinComplete])

  // Effect to draw the wheel
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    const numSegments = visualSegments.length
    const segmentAngle = (2 * Math.PI) / numSegments
    const radius = 145
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Apply rotation
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate((rotation * Math.PI) / 180)
    ctx.translate(-centerX, -centerY)

    // Draw wheel segments
    for (let i = 0; i < numSegments; i++) {
      const startAngle = i * segmentAngle
      const endAngle = (i + 1) * segmentAngle

      // Draw segment
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, endAngle)
      ctx.closePath()
      ctx.fillStyle = visualSegments[i].color
      ctx.fill()
      ctx.strokeStyle = "#FFFFFF"
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw text
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(startAngle + segmentAngle / 2)
      ctx.textAlign = "right"
      ctx.fillStyle = "#FFFFFF"
      ctx.font = "bold 12px Arial"
      ctx.fillText(visualSegments[i].text, radius - 10, 5)
      ctx.restore()
    }

    ctx.restore()

    // Draw center circle (not affected by rotation)
    ctx.beginPath()
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI)
    ctx.fillStyle = "#1E293B"
    ctx.fill()
    ctx.strokeStyle = "#FFFFFF"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw pointer (not affected by rotation)
    ctx.beginPath()
    ctx.moveTo(centerX, centerY - radius - 10)
    ctx.lineTo(centerX - 10, centerY - radius + 10)
    ctx.lineTo(centerX + 10, centerY - radius + 10)
    ctx.closePath()
    ctx.fillStyle = "#EF4444"
    ctx.fill()
  }, [rotation])

  return <canvas ref={canvasRef} width={300} height={300} className="max-w-full h-auto" />
}
