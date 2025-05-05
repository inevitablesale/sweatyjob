import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Bryan Parkway Deck Staining",
  description: "Please wait while we redirect you to the Bryan Parkway deck staining service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/bryan-parkway/deck-staining",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Bryan Parkway Deck Staining"
      description="Please wait while we redirect you to the Bryan Parkway deck staining service page."
      destination="/neighborhoods/bryan-parkway/deck-staining"
    />
  )
}
