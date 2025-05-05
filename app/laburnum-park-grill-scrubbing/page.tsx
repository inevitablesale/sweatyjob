import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Laburnum Park Grill Scrubbing",
  description: "Please wait while we redirect you to the Laburnum Park grill scrubbing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/laburnum-park/grill-scrubbing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Laburnum Park Grill Scrubbing"
      description="Please wait while we redirect you to the Laburnum Park grill scrubbing service page."
      destination="/neighborhoods/laburnum-park/grill-scrubbing"
    />
  )
}
