import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Battery Park Garden Weeding",
  description: "Please wait while we redirect you to the Battery Park garden weeding service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/battery-park/garden-weeding",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Battery Park Garden Weeding"
      description="Please wait while we redirect you to the Battery Park garden weeding service page."
      destination="/neighborhoods/battery-park/garden-weeding"
    />
  )
}
