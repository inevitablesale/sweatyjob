"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"

export default function ClearTableButton() {
  const [isClearing, setIsClearing] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)

  const handleClearTable = async () => {
    // Show confirmation dialog
    if (!window.confirm("Are you sure you want to delete ALL competitors? This action cannot be undone.")) {
      return
    }

    setIsClearing(true)
    setResult(null)

    try {
      const response = await fetch("/api/clear-competitors", {
        method: "POST",
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      })
    } finally {
      setIsClearing(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleClearTable}
        disabled={isClearing}
        className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 disabled:opacity-50"
        type="button"
      >
        {isClearing ? (
          <>
            <div className="animate-spin h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full mr-2" />
            Clearing...
          </>
        ) : (
          <>
            <Trash2 size={16} className="mr-2" />
            Clear All Competitors
          </>
        )}
      </button>

      {result && (
        <div
          className={`mt-2 p-2 text-sm rounded ${
            result.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {result.success ? result.message : `Error: ${result.error}`}
        </div>
      )}
    </div>
  )
}
