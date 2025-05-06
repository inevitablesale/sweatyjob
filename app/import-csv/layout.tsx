import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImportCSVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto">{children}</div>
    </div>
  )
}
