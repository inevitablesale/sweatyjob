"use client"

import type React from "react"

import { useState } from "react"
import { Upload, CheckCircle, AlertCircle, Info, Bug } from "lucide-react"

export default function SimplifiedImportForm() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [clearFirst, setClearFirst] = useState(true)
  const [batchSize, setBatchSize] = useState(100)
  const [debugMode, setDebugMode] = useState(true) // Default to true for debugging
  const [defaultState, setDefaultState] = useState("VA") // Default state value
  const [result, setResult] = useState<{
    success: boolean
    totalImported?: number
    skipped?: number
    skipReasons?: Record<string, number>
    error?: string
    errors?: Array<{ line: number; error: string }>
    sampleRecord?: any
    debugInfo?: any
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
      formData.append("batchSize", batchSize.toString())
      formData.append("debugMode", debugMode.toString())
      formData.append("defaultState", defaultState)

      const response = await fetch("/api/import-competitors-with-reviews", {
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
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Import Competitors with Reviews</h2>
        <p className="text-gray-600">Import businesses with their first review (reviewer name, text, and rating)</p>
      </div>

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
            CSV should include Google Places data with nested review information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="flex items-center">
            <input
              id="debug-mode"
              type="checkbox"
              checked={debugMode}
              onChange={(e) => setDebugMode(e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              disabled={isUploading}
            />
            <label htmlFor="debug-mode" className="ml-2 block text-sm text-gray-700">
              Enable debug mode
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="batch-size" className="block text-sm font-medium">
              Batch Size
            </label>
            <input
              id="batch-size"
              type="number"
              min="10"
              max="500"
              value={batchSize}
              onChange={(e) => setBatchSize(Number.parseInt(e.target.value) || 100)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              disabled={isUploading}
            />
            <p className="text-xs text-gray-500">Number of records to process in each batch</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="default-state" className="block text-sm font-medium">
              Default State
            </label>
            <input
              id="default-state"
              type="text"
              value={defaultState}
              onChange={(e) => setDefaultState(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
              disabled={isUploading}
              placeholder="VA"
            />
            <p className="text-xs text-gray-500">Default state value for records missing state (required field)</p>
          </div>
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
                    ? `Import completed: ${result.totalImported} records imported, ${result.skipped} skipped`
                    : `Import failed: ${result.error}`}
                </h3>

                {result.skipReasons && (
                  <div className="mt-3 text-sm">
                    <p className="font-medium">Skip reasons:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {Object.entries(result.skipReasons)
                        .filter(([_, count]) => count > 0)
                        .map(([reason, count]) => (
                          <li key={reason}>
                            {reason}: {count} records
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {result.errors && result.errors.length > 0 && (
                  <div className="mt-3 text-sm">
                    <p className="font-medium">Some records had errors:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {result.errors.map((err, index) => (
                        <li key={index}>
                          Line {err.line}: {err.error}
                        </li>
                      ))}
                      {result.errors.length === 20 && <li>...and more (showing first 20 errors only)</li>}
                    </ul>
                  </div>
                )}

                {result.sampleRecord && (
                  <div className="mt-4 text-sm">
                    <div className="flex items-center gap-1 text-gray-700">
                      <Info size={14} />
                      <p className="font-medium">Sample Imported Record:</p>
                    </div>
                    <div className="mt-1 p-2 bg-gray-100 rounded overflow-x-auto max-h-60">
                      <pre className="text-xs">{JSON.stringify(result.sampleRecord, null, 2)}</pre>
                    </div>
                  </div>
                )}

                {result.debugInfo && (
                  <div className="mt-4 text-sm">
                    <div className="flex items-center gap-1 text-blue-700">
                      <Bug size={14} />
                      <p className="font-medium">Debug Information:</p>
                    </div>
                    <div className="mt-1 p-2 bg-blue-50 rounded overflow-x-auto max-h-96">
                      <div className="mb-2">
                        <p className="font-medium">CSV Headers Analysis:</p>
                        <ul className="list-disc pl-5 mt-1">
                          <li>Total headers: {result.debugInfo.headerCount}</li>
                          <li>First few headers: {result.debugInfo.firstFewHeaders.join(", ")}</li>
                          <li>Has state header: {result.debugInfo.hasStateHeader ? "Yes" : "No"}</li>
                          <li>Has review text header: {result.debugInfo.hasReviewTextHeader ? "Yes" : "No"}</li>
                          <li>Has reviewer name header: {result.debugInfo.hasReviewerNameHeader ? "Yes" : "No"}</li>
                          <li>Has review stars header: {result.debugInfo.hasReviewStarsHeader ? "Yes" : "No"}</li>
                          <li>Review headers count: {result.debugInfo.reviewHeaders.length}</li>
                        </ul>
                      </div>

                      {result.debugInfo.sampleParsedData && result.debugInfo.sampleParsedData.length > 0 && (
                        <div>
                          <p className="font-medium mt-3">Sample Parsed Data:</p>
                          <div className="mt-1 p-2 bg-white rounded overflow-x-auto max-h-60">
                            <pre className="text-xs">
                              {JSON.stringify(result.debugInfo.sampleParsedData[0], null, 2)}
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {result.success && result.totalImported > 0 && (
                  <div className="mt-4">
                    <a
                      href="/import-csv/view-competitors"
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                    >
                      View Imported Competitors
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
