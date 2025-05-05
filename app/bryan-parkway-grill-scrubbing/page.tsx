import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Bryan Parkway Grill Scrubbing",
  description: "Please wait while we redirect you to the Bryan Parkway grill scrubbing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/bryan-parkway/grill-scrubbing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Bryan Parkway Grill Scrubbing"
      description="Please wait while we redirect you to the Bryan Parkway grill scrubbing service page."
      destination="/neighborhoods/bryan-parkway/grill-scrubbing"
    />
  )
}
