import type { Metadata } from "next"
import RedirectTemplate from "@/components/redirect-template"

export const metadata: Metadata = {
  title: "Redirecting to Battery Park Car Detailing",
  description: "Please wait while we redirect you to the Battery Park car detailing service page.",
  robots: "noindex",
  alternates: {
    canonical: "/neighborhoods/battery-park/car-detailing",
  },
}

export default function RedirectPage() {
  return (
    <RedirectTemplate
      title="Redirecting to Battery Park Car Detailing"
      description="Please wait while we redirect you to the Battery Park car detailing service page."
      destination="/neighborhoods/battery-park/car-detailing"
    />
  )
}
