import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Ginter Park Window Cleaning",
  description: "Please wait while we redirect you to the Ginter Park window cleaning service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/ginter-park/window-cleaning",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Ginter Park Window Cleaning"
      description="Please wait while we redirect you to the Ginter Park window cleaning service page."
      destination="/neighborhoods/ginter-park/window-cleaning"
    />
  )
}
