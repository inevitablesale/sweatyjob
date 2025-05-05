"use client"

import { useState, useEffect } from "react"
import { SpinToWin } from "./spin-to-win"

interface SpinToWinModalProps {
  delay?: number // Delay in milliseconds before showing
  cookieExpiration?: number // Days until showing again
  source?: string
}

export function SpinToWinModal({ delay = 5000, cookieExpiration = 7, source = "popup" }: SpinToWinModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we've shown this recently
    const hasSeenPromo = localStorage.getItem("spinToWinSeen")

    if (!hasSeenPromo) {
      // Set a timeout to show the modal after delay
      const timer = setTimeout(() => {
        setIsVisible(true)

        // Set expiration
        const expirationDate = new Date()
        expirationDate.setDate(expirationDate.getDate() + cookieExpiration)
        localStorage.setItem("spinToWinSeen", expirationDate.toISOString())
      }, delay)

      return () => clearTimeout(timer)
    }

    // Check if the cookie has expired
    else {
      const expirationDate = new Date(hasSeenPromo)
      if (new Date() > expirationDate) {
        // Cookie expired, show again
        localStorage.removeItem("spinToWinSeen")
      }
    }
  }, [delay, cookieExpiration])

  const closeModal = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md relative">
        <SpinToWin onClose={closeModal} source={`${source}-modal`} />
      </div>
    </div>
  )
}
