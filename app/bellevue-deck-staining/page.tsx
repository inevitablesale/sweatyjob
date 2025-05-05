import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Bellevue Deck Staining",
  description: "Please wait while we redirect you to the Bellevue deck staining service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/bellevue/deck-staining",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Bellevue Deck Staining"
      description="Please wait while we redirect you to the Bellevue deck staining service page."
      destination="/neighborhoods/bellevue/deck-staining"
    />
  )
}
