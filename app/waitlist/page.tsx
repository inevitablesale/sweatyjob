import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Smart Yard",
  description: "Please wait while we redirect you to our Smart Yard page.",
  robots: "noindex",
  alternates: {
    canonical: "/purchase/smart-yard",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Smart Yard"
      description="Please wait while we redirect you to our Smart Yard page."
      destination="/purchase/smart-yard"
    />
  )
}
