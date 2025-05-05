import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Ginter Park Deck Staining",
  description: "Please wait while we redirect you to the Ginter Park deck staining service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/ginter-park/deck-staining",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Ginter Park Deck Staining"
      description="Please wait while we redirect you to the Ginter Park deck staining service page."
      destination="/neighborhoods/ginter-park/deck-staining"
    />
  )
}
