import type { Metadata } from "next"
import ImportCompetitorsForm from "./import-form"

export const metadata: Metadata = {
  title: "Import Competitors",
  description: "Upload CSV to import competitors",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ImportCompetitorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Import Competitors</h1>
      <ImportCompetitorsForm />
    </div>
  )
}
