import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to About the Author",
  description: "Please wait while we redirect you to our about the author page.",
  robots: "noindex",
  alternates: {
    canonical: "/about/author",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to About the Author"
      description="Please wait while we redirect you to our about the author page."
      destination="/about/author"
    />
  )
}
