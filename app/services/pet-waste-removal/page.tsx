import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Pet Waste Removal Services",
  description: "Please wait while we redirect you to our pet waste removal services page.",
  robots: "noindex",
  alternates: {
    canonical: "/services/pet-waste-removal",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Pet Waste Removal Services"
      description="Please wait while we redirect you to our pet waste removal services page."
      destination="/services/pet-waste-removal"
    />
  )
}
