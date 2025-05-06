"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AlertCircle, CheckCircle, Upload } from "lucide-react"

export default function ImportCompetitorsForm() {
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<{
    success: boolean
    totalInserted?: number
    error?: string
    errors?: Array<{ batch: number; error: string }>
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
    setProgress(0)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("file", file)

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
      setProgress(100)
    }
  }

  return (
    <Card className="p-6">
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
          <p className="text-xs text-gray-500">
            CSV file should contain columns for title, total_score, reviews_count, street, city, state, country_code,
            website, phone, category_name, and google_maps_url
          </p>
        </div>

        <Button type="submit" disabled={!file || isUploading} className="w-full flex items-center justify-center gap-2">
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
        </Button>

        {isUploading && (
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

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
              <div className="ml-3">
                <h3 className="text-sm font-medium">
                  {result.success
                    ? `Successfully imported ${result.totalInserted} records`
                    : `Import failed: ${result.error}`}
                </h3>
                {result.errors && result.errors.length > 0 && (
                  <div className="mt-2 text-sm">
                    <p>Some batches had errors:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-1">
                      {result.errors.slice(0, 5).map((err, index) => (
                        <li key={index}>
                          Batch {err.batch}: {err.error}
                        </li>
                      ))}
                      {result.errors.length > 5 && <li>...and {result.errors.length - 5} more errors</li>}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </form>
    </Card>
  )
}
