import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Sherwood Park Pressure Washing",
  description: "Please wait while we redirect you to the Sherwood Park pressure washing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/sherwood-park/pressure-washing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Sherwood Park Pressure Washing"
      description="Please wait while we redirect you to the Sherwood Park pressure washing service page."
      destination="/neighborhoods/sherwood-park/pressure-washing"
    />
  )
}
