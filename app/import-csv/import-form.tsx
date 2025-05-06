"use client"

import type React from "react"

import { useState } from "react"
import { Upload, CheckCircle, AlertCircle, Info, Database } from "lucide-react"

export default function ImportForm() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [clearFirst, setClearFirst] = useState(true)
  const [result, setResult] = useState<{
    success: boolean
    totalInserted?: number
    totalSkipped?: number
    totalLines?: number
    uniqueRecords?: number
    error?: string
    errors?: Array<{ line: number; error: string }>
    sampleRecords?: any[]
    skippedRecords?: any[]
  } | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setResult(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setIsUploading(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("clearFirst", clearFirst.toString())

      const response = await fetch("/api/import-competitors", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      })
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="csv-file" className="block text-sm font-medium">
            Select CSV File
          </label>
          <input
            id="csv-file"
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 hover:file:bg-gray-200"
            disabled={isUploading}
          />
          <p className="text-xs text-gray-500 mt-1">
            CSV should include columns for: title/name, city, state (required), plus total_score, reviews_count,
            website, url (for Google Maps), etc.
          </p>
        </div>

        <div className="flex items-center">
          <input
            id="clear-first"
            type="checkbox"
            checked={clearFirst}
            onChange={(e) => setClearFirst(e.target.checked)}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            disabled={isUploading}
          />
          <label htmlFor="clear-first" className="ml-2 block text-sm text-gray-700">
            Clear existing data before import
          </label>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={!file || isUploading}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? (
              <>
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                Uploading...
              </>
            ) : (
              <>
                <Upload size={16} />
                Upload and Import
              </>
            )}
          </button>
        </div>

        {result && (
          <div
            className={`mt-4 p-4 rounded-md ${
              result.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
            }`}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {result.success ? (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-400" />
                )}
              </div>
              <div className="ml-3 w-full">
                <h3 className="text-sm font-medium">
                  {result.success
                    ? `Import completed: ${result.totalInserted} records imported, ${result.totalSkipped} skipped (out of ${result.totalLines} total)`
                    : `Import failed: ${result.error}`}
                </h3>

                {result.uniqueRecords !== undefined && (
                  <div className="mt-2 flex items-center gap-1 text-sm">
                    <Database size={14} />
                    <p>Unique records in database: {result.uniqueRecords}</p>
                  </div>
                )}

                {result.errors && result.errors.length > 0 && (
                  <div className="mt-2 text-sm">
                    <p>Some records had errors:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {result.errors.map((err, index) => (
                        <li key={index}>
                          Line {err.line}: {err.error}
                        </li>
                      ))}
                      {result.errors.length === 10 && <li>...and more (showing first 10 errors only)</li>}
                    </ul>
                  </div>
                )}

                {result.sampleRecords && result.sampleRecords.length > 0 && (
                  <div className="mt-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-700">
                      <Info size={14} />
                      <p className="font-medium">Sample Imported Record:</p>
                    </div>
                    <div className="mt-1 p-2 bg-gray-100 rounded overflow-x-auto max-h-60">
                      <pre className="text-xs">{JSON.stringify(result.sampleRecords[0], null, 2)}</pre>
                    </div>
                  </div>
                )}

                {result.skippedRecords && result.skippedRecords.length > 0 && (
                  <div className="mt-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-700">
                      <Info size={14} />
                      <p className="font-medium">Sample Skipped Record:</p>
                    </div>
                    <div className="mt-1 p-2 bg-gray-100 rounded overflow-x-auto max-h-60">
                      <pre className="text-xs">{JSON.stringify(result.skippedRecords[0], null, 2)}</pre>
                    </div>
                  </div>
                )}

                {result.success && (
                  <div className="mt-4">
                    <a
                      href="/import-csv/view-competitors"
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      View Imported Records
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
