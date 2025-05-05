import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Ginter Park Garden Weeding",
  description: "Please wait while we redirect you to the Ginter Park garden weeding service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/ginter-park/garden-weeding",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Ginter Park Garden Weeding"
      description="Please wait while we redirect you to the Ginter Park garden weeding service page."
      destination="/neighborhoods/ginter-park/garden-weeding"
    />
  )
}
