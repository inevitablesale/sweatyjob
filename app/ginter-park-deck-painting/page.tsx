import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Ginter Park Deck Painting",
  description: "Please wait while we redirect you to the Ginter Park deck painting service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/ginter-park/deck-painting",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Ginter Park Deck Painting"
      description="Please wait while we redirect you to the Ginter Park deck painting service page."
      destination="/neighborhoods/ginter-park/deck-painting"
    />
  )
}
