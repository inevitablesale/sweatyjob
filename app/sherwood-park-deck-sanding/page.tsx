import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Sherwood Park Deck Sanding",
  description: "Please wait while we redirect you to the Sherwood Park deck sanding service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/sherwood-park/deck-sanding",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Sherwood Park Deck Sanding"
      description="Please wait while we redirect you to the Sherwood Park deck sanding service page."
      destination="/neighborhoods/sherwood-park/deck-sanding"
    />
  )
}
