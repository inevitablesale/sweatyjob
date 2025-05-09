"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { WikipediaArticle } from "@/lib/wiki-api"

export default function WikiTestPage() {
  const [query, setQuery] = useState("Richmond, Virginia")
  const [article, setArticle] = useState<WikipediaArticle | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchArticle() {
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/wikipedia/article?title=${encodeURIComponent(query)}`)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `Failed to fetch article for "${query}"`)
      }

      const data = await response.json()
      setArticle(data)
    } catch (err: any) {
      console.error("Error fetching article:", err)
      setError(err.message || "Failed to fetch Wikipedia article")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Wikipedia API Test</h1>

      <div className="flex gap-2 mb-6">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter article title (e.g., Richmond, Virginia)"
          className="max-w-md"
        />
        <Button onClick={fetchArticle} disabled={loading}>
          {loading ? "Loading..." : "Fetch Article"}
        </Button>
      </div>

      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>}

      {article && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{article.title}</CardTitle>
            {article.description && <CardDescription>{article.description}</CardDescription>}
          </CardHeader>
          <CardContent>
            {article.thumbnail && (
              <div className="mb-4">
                <img
                  src={article.thumbnail.source || "/placeholder.svg"}
                  alt={article.title}
                  className="rounded-md max-w-full h-auto"
                  style={{ maxHeight: "300px" }}
                />
              </div>
            )}

            <div className="prose max-w-none">
              <p>{article.extract}</p>
            </div>

            {article.coordinates && (
              <div className="mt-4">
                <p className="font-semibold">Coordinates:</p>
                <p>
                  Latitude: {article.coordinates.lat}, Longitude: {article.coordinates.lon}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">API Information</h2>
        <p>
          This page tests the Wikipedia API integration. Enter a title (like a city name) and click "Fetch Article" to
          retrieve information from Wikipedia.
        </p>
      </div>
    </div>
  )
}
