import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Laburnum Park Garden Weeding",
  description: "Please wait while we redirect you to the Laburnum Park garden weeding service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/laburnum-park/garden-weeding",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Laburnum Park Garden Weeding"
      description="Please wait while we redirect you to the Laburnum Park garden weeding service page."
      destination="/neighborhoods/laburnum-park/garden-weeding"
    />
  )
}
