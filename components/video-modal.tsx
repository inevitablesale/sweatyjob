"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  // Play/pause video
  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.error("Error playing video:", err)
      })
    } else if (videoRef.current) {
      videoRef.current.pause()
    }
  }, [isOpen])

  // Log video URL to console for debugging
  useEffect(() => {
    if (isOpen) {
      console.log("Opening video modal with URL:", videoUrl)
    }
  }, [isOpen, videoUrl])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div
        ref={modalRef}
        className="relative bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-800">
          <h3 id="video-modal-title" className="text-xl font-bold text-white">
            {title}
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white" aria-label="Close video">
            <X size={24} />
          </button>
        </div>

        <div className="aspect-video bg-black">
          <video
            ref={videoRef}
            src={videoUrl}
            controls
            className="w-full h-full"
            playsInline
            preload="metadata"
            onError={(e) => console.error("Video error:", e)}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="mt-4">
          <Button className="bg-green-600 hover:bg-green-700 text-white" asChild onClick={() => onClose()}>
            <a href="#get-started">Get Your Robot Mower</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
