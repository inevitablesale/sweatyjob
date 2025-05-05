import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Bryan Parkway Garden Weeding",
  description: "Please wait while we redirect you to the Bryan Parkway garden weeding service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/bryan-parkway/garden-weeding",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Bryan Parkway Garden Weeding"
      description="Please wait while we redirect you to the Bryan Parkway garden weeding service page."
      destination="/neighborhoods/bryan-parkway/garden-weeding"
    />
  )
}
