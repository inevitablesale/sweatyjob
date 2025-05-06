"use client"

import { useState, useEffect } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CompetitorsTableInfo() {
  const [tableInfo, setTableInfo] = useState<any>(null)
  const [sampleData, setSampleData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function fetchTableInfo() {
    setLoading(true)
    setError(null)

    try {
      const supabase = getSupabaseClient()
      if (!supabase) {
        setError("Failed to initialize Supabase client")
        return
      }

      // Get sample data to understand structure
      const { data, error: fetchError } = await supabase.from("competitors").select("*").limit(5)

      if (fetchError) {
        setError(`Error fetching data: ${fetchError.message}`)
        return
      }

      if (!data || data.length === 0) {
        setError("No data found in competitors table")
        return
      }

      // Extract column names and types
      const columns = Object.keys(data[0])
      const types: Record<string, string> = {}

      columns.forEach((col) => {
        const value = data[0][col]
        types[col] = Array.isArray(value) ? `array:${typeof value[0]}` : typeof value
      })

      setTableInfo({
        columns,
        types,
        rowCount: data.length,
      })

      setSampleData(data)
    } catch (err) {
      setError(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTableInfo()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Competitors Table Information</h1>

      {loading && <p>Loading table information...</p>}

      {error && <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md mb-6">{error}</div>}

      {tableInfo && (
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Table Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Column Name
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Data Type
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {tableInfo.columns.map((column: string) => (
                      <tr key={column}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{column}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tableInfo.types[column]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sample Data ({sampleData.length} rows)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      {tableInfo.columns.map((column: string) => (
                        <th
                          key={column}
                          className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sampleData.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {tableInfo.columns.map((column: string) => (
                          <td
                            key={`${rowIndex}-${column}`}
                            className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                          >
                            {typeof row[column] === "object" ? JSON.stringify(row[column]) : String(row[column] ?? "")}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button onClick={fetchTableInfo}>Refresh Data</Button>
          </div>
        </div>
      )}
    </div>
  )
}
