"use client"

import { useState } from "react"

export default function TestInsertPage() {
  const [result, setResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleTestInsert = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/test-insert", {
        method: "POST",
      })
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({ error: error instanceof Error ? error.message : "Unknown error" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Test Database Insert</h1>
      <p className="mb-4">
        This page tests a direct insert to the competitors table with hardcoded data to verify database connectivity.
      </p>

      <button
        onClick={handleTestInsert}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? "Testing..." : "Test Insert"}
      </button>

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Result:</h2>
          <pre className="whitespace-pre-wrap text-sm">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}

      <div className="mt-6">
        <a
          href="/import-csv"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Back to Import
        </a>
      </div>
    </div>
  )
}
