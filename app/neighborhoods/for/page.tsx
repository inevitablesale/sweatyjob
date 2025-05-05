import { notFound } from "next/navigation"

// This file exists solely to prevent the dynamic [neighborhood] route from catching /neighborhoods/for
export default function ForPage() {
  // Always return 404 for any attempt to access /neighborhoods/for
  notFound()
}
