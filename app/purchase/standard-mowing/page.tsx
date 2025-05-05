"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function StandardMowingPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to smart-yard page as we only offer robot mower services now
    router.push("/purchase/smart-yard")
  }, [router])

  return (
    <div className="min-h-screen bg-night-900 py-12">
      <div className="container mx-auto px-4 text-center text-white">
        <p>Redirecting to our robot mower service...</p>
      </div>
    </div>
  )
}
