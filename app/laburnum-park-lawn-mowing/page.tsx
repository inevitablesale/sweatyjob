import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Laburnum Park Lawn Mowing",
  description: "Please wait while we redirect you to the Laburnum Park lawn mowing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/laburnum-park/lawn-mowing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Laburnum Park Lawn Mowing"
      description="Please wait while we redirect you to the Laburnum Park lawn mowing service page."
      destination="/neighborhoods/laburnum-park/lawn-mowing"
    />
  )
}
