import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Sherwood Park Garden Weeding",
  description: "Please wait while we redirect you to the Sherwood Park garden weeding service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/sherwood-park/garden-weeding",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Sherwood Park Garden Weeding"
      description="Please wait while we redirect you to the Sherwood Park garden weeding service page."
      destination="/neighborhoods/sherwood-park/garden-weeding"
    />
  )
}
