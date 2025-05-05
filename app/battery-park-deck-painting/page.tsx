import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Battery Park Deck Painting",
  description: "Please wait while we redirect you to the Battery Park deck painting service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/battery-park/deck-painting",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Battery Park Deck Painting"
      description="Please wait while we redirect you to the Battery Park deck painting service page."
      destination="/neighborhoods/battery-park/deck-painting"
    />
  )
}
