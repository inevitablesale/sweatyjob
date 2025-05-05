import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Ginter Park Flower Bed Maintenance",
  description: "Please wait while we redirect you to the Ginter Park flower bed maintenance service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/ginter-park/flower-bed-maintenance",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Ginter Park Flower Bed Maintenance"
      description="Please wait while we redirect you to the Ginter Park flower bed maintenance service page."
      destination="/neighborhoods/ginter-park/flower-bed-maintenance"
    />
  )
}
