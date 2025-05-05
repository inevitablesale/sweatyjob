import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Bryan Parkway Lawn Mowing",
  description: "Please wait while we redirect you to the Bryan Parkway lawn mowing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/bryan-parkway/lawn-mowing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Bryan Parkway Lawn Mowing"
      description="Please wait while we redirect you to the Bryan Parkway lawn mowing service page."
      destination="/neighborhoods/bryan-parkway/lawn-mowing"
    />
  )
}
