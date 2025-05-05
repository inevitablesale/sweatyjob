import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Laburnum Park Deck Staining",
  description: "Please wait while we redirect you to the Laburnum Park deck staining service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/laburnum-park/deck-staining",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Laburnum Park Deck Staining"
      description="Please wait while we redirect you to the Laburnum Park deck staining service page."
      destination="/neighborhoods/laburnum-park/deck-staining"
    />
  )
}
