import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-night-900 flex flex-col items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-sweat-500 mb-4" />
      <h2 className="text-xl font-medium text-white">Loading SmartYard Consultation...</h2>
    </div>
  )
}
