import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Battery Park Deck Sanding",
  description: "Please wait while we redirect you to the Battery Park deck sanding service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/battery-park/deck-sanding",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Battery Park Deck Sanding"
      description="Please wait while we redirect you to the Battery Park deck sanding service page."
      destination="/neighborhoods/battery-park/deck-sanding"
    />
  )
}
