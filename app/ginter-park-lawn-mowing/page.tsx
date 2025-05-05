import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Ginter Park Lawn Mowing",
  description: "Please wait while we redirect you to the Ginter Park lawn mowing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/ginter-park/lawn-mowing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Ginter Park Lawn Mowing"
      description="Please wait while we redirect you to the Ginter Park lawn mowing service page."
      destination="/neighborhoods/ginter-park/lawn-mowing"
    />
  )
}
