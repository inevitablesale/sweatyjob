import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Bellevue Carpet Cleaning",
  description: "Please wait while we redirect you to the Bellevue carpet cleaning service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/bellevue/carpet-cleaning",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Bellevue Carpet Cleaning"
      description="Please wait while we redirect you to the Bellevue carpet cleaning service page."
      destination="/neighborhoods/bellevue/carpet-cleaning"
    />
  )
}
