import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Bellevue Car Detailing",
  description: "Please wait while we redirect you to the Bellevue car detailing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/bellevue/car-detailing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Bellevue Car Detailing"
      description="Please wait while we redirect you to the Bellevue car detailing service page."
      destination="/neighborhoods/bellevue/car-detailing"
    />
  )
}
