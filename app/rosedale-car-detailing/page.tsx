import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Rosedale Car Detailing",
  description: "Please wait while we redirect you to the Rosedale car detailing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/rosedale/car-detailing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Rosedale Car Detailing"
      description="Please wait while we redirect you to the Rosedale car detailing service page."
      destination="/neighborhoods/rosedale/car-detailing"
    />
  )
}
