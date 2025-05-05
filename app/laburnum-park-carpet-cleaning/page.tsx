import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Laburnum Park Carpet Cleaning",
  description: "Please wait while we redirect you to the Laburnum Park carpet cleaning service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/laburnum-park/carpet-cleaning",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Laburnum Park Carpet Cleaning"
      description="Please wait while we redirect you to the Laburnum Park carpet cleaning service page."
      destination="/neighborhoods/laburnum-park/carpet-cleaning"
    />
  )
}
