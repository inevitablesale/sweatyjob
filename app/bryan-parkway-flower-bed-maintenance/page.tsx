import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Bryan Parkway Flower Bed Maintenance",
  description: "Please wait while we redirect you to the Bryan Parkway flower bed maintenance service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/bryan-parkway/flower-bed-maintenance",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Bryan Parkway Flower Bed Maintenance"
      description="Please wait while we redirect you to the Bryan Parkway flower bed maintenance service page."
      destination="/neighborhoods/bryan-parkway/flower-bed-maintenance"
    />
  )
}
