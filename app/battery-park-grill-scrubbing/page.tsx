import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Battery Park Grill Scrubbing",
  description: "Please wait while we redirect you to the Battery Park grill scrubbing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/battery-park/grill-scrubbing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Battery Park Grill Scrubbing"
      description="Please wait while we redirect you to the Battery Park grill scrubbing service page."
      destination="/neighborhoods/battery-park/grill-scrubbing"
    />
  )
}
