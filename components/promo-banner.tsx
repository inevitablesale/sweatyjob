"use client"

import { useState } from "react"
import Link from "next/link"
import { Trophy, X } from "lucide-react"

interface PromoBannerProps {
  text?: string
  linkText?: string
  linkHref?: string
}

export function PromoBanner({
  text = "Spin the wheel for a chance to win a 30-day FREE MowBot trial!",
  linkText = "Play Now",
  linkHref = "/promotions/spin-to-win",
}: PromoBannerProps) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="bg-gradient-to-r from-sweat-600 to-sweat-500 text-white py-2 px-4 relative">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between">
        <div className="flex items-center mb-2 sm:mb-0">
          <Trophy className="h-5 w-5 mr-2 text-yellow-300" />
          <p className="text-sm sm:text-base">{text}</p>
        </div>

        <Link
          href={linkHref}
          className="text-sm font-medium bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full transition-colors"
        >
          {linkText}
        </Link>

        <button
          onClick={() => setDismissed(true)}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 rounded-full hover:bg-white/10 transition-colors sm:static sm:transform-none sm:ml-4"
          aria-label="Dismiss"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
