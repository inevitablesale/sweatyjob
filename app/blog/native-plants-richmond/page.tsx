import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Blog",
  description: "Please wait while we redirect you to our blog.",
  robots: "noindex",
  alternates: {
    canonical: "/blog",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Blog"
      description="Please wait while we redirect you to our blog."
      destination="/blog"
    />
  )
}
