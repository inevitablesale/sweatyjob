import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Seasonal Maintenance Services",
  description: "Please wait while we redirect you to our seasonal maintenance services page.",
  robots: "noindex",
  alternates: {
    canonical: "/services/seasonal-maintenance",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Seasonal Maintenance Services"
      description="Please wait while we redirect you to our seasonal maintenance services page."
      destination="/services/seasonal-maintenance"
    />
  )
}
