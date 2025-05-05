import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Standard Lawn Mowing Service | SweatyJob",
  description: "Schedule your regular lawn mowing service with our expert team.",
}

export default function StandardMowingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense>
      {/* No header or footer - distraction-free squeeze page */}
      <main className="min-h-screen bg-night-900">{children}</main>
    </Suspense>
  )
}
