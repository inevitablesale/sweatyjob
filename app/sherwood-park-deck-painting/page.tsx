import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Sherwood Park Deck Painting",
  description: "Please wait while we redirect you to the Sherwood Park deck painting service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/sherwood-park/deck-painting",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Sherwood Park Deck Painting"
      description="Please wait while we redirect you to the Sherwood Park deck painting service page."
      destination="/neighborhoods/sherwood-park/deck-painting"
    />
  )
}
