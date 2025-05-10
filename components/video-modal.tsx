"use client"

import { useState, useEffect } from "react"
import { X, ArrowLeft, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title?: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const [isMounted, setIsMounted] = useState(false)
  const [showCTA, setShowCTA] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    setVideoError(false) // Reset error state when modal opens

    // Add event listener to close modal on escape key
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEsc)

      // Show CTA after 5 seconds
      const timer = setTimeout(() => {
        setShowCTA(true)
      }, 5000)

      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleEsc)
        clearTimeout(timer)
      }
    }

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  const handlePurchaseClick = () => {
    window.location.href = "/purchase/smart-yard"
    onClose()
  }

  if (!isMounted) return null

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={onClose}>
      <div className="relative w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
        <button
          className="absolute -top-12 right-0 text-white hover:text-yellow-500 focus:outline-none"
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={32} />
        </button>

        {/* Free Trial Banner */}
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black font-black py-2 px-6 rounded-full text-xl z-10 shadow-lg">
          $0 FREE TRIAL
        </div>

        {/* Video Container with Frame */}
        <div className="relative border-8 border-yellow-500 rounded-lg overflow-hidden bg-black">
          {/* Yellow Arrow Pointing Left at Video with text on right */}
          <motion.div
            className="absolute top-1/4 left-8 z-10 text-yellow-500 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="mr-4 bg-transparent text-yellow-500 max-w-[200px] text-right">
              <p className="font-bold text-xl uppercase">SEE HOW IT CUTS WITH PRECISION</p>
            </div>
            <ArrowLeft size={40} className="animate-pulse transform rotate-180" />
          </motion.div>

          {/* Animated CTA Button */}
          {showCTA && (
            <motion.div
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                onClick={handlePurchaseClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-black px-8 py-6 rounded-md shadow-lg flex items-center gap-2 transform hover:scale-105 transition-all"
              >
                <Zap className="h-6 w-6" />
                GET YOUR MOWER NOW
                <Zap className="h-6 w-6" />
              </Button>
              <div className="mt-2 text-center text-white font-bold text-sm">LIMITED TIME OFFER - ACT NOW</div>
            </motion.div>
          )}

          <div className="relative pb-[56.25%] h-0 bg-black">
            {videoError ? (
              <div className="absolute inset-0 flex items-center justify-center flex-col text-white">
                <p className="text-xl font-bold mb-2">Video temporarily unavailable</p>
                <p className="text-sm">Please try again later</p>
              </div>
            ) : (
              <video
                className="absolute top-0 left-0 w-full h-full"
                controls
                autoPlay
                src={videoUrl}
                onError={() => setVideoError(true)}
                onPlay={() => {
                  // Show CTA after 5 seconds of playing
                  setTimeout(() => setShowCTA(true), 5000)
                }}
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>

        {/* Gary V Style Motivational Text */}
        <div className="mt-4 text-center">
          <p className="text-yellow-500 font-black text-xl uppercase">STOP WASTING TIME. START LIVING LIFE.</p>
        </div>
      </div>
    </div>
  )
}
