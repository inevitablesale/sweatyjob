import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Bryan Parkway Deck Sanding",
  description: "Please wait while we redirect you to the Bryan Parkway deck sanding service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/bryan-parkway/deck-sanding",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Bryan Parkway Deck Sanding"
      description="Please wait while we redirect you to the Bryan Parkway deck sanding service page."
      destination="/neighborhoods/bryan-parkway/deck-sanding"
    />
  )
}
