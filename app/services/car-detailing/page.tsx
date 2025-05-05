import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Car Detailing Services",
  description: "Please wait while we redirect you to our car detailing services page.",
  robots: "noindex",
  alternates: {
    canonical: "/services/car-detailing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Car Detailing Services"
      description="Please wait while we redirect you to our car detailing services page."
      destination="/services/car-detailing"
    />
  )
}
