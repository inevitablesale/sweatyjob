import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Laburnum Park Pressure Washing",
  description: "Please wait while we redirect you to the Laburnum Park pressure washing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/laburnum-park/pressure-washing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Laburnum Park Pressure Washing"
      description="Please wait while we redirect you to the Laburnum Park pressure washing service page."
      destination="/neighborhoods/laburnum-park/pressure-washing"
    />
  )
}
