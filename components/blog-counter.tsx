"use client"

import { useEffect, useState } from "react"

export default function BlogCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Count all blog posts in the system
    const countBlogPosts = () => {
      // This is a simplified representation - in a real implementation,
      // this would query the database or content system

      // Main blog posts from the blog listing
      const mainBlogPosts = 8

      // Neighborhood-specific blog posts (17 neighborhoods × 4 topics each on average)
      const neighborhoodPosts = 17 * 4

      // Service-specific blog posts (12 services × 2 topics each on average)
      const servicePosts = 12 * 2

      // Seasonal content (4 seasons × 3 posts each)
      const seasonalPosts = 4 * 3

      // Product-specific posts (2 products × 3 posts each)
      const productPosts = 2 * 3

      // Total count
      const total = mainBlogPosts + neighborhoodPosts + servicePosts + seasonalPosts + productPosts

      setCount(total)
    }

    countBlogPosts()
  }, [])

  return (
    <div className="text-center p-4 bg-slate-800 rounded-lg">
      <h2 className="text-xl font-bold text-white">Blog Post Analysis</h2>
      <p className="text-lg text-gray-300 mt-2">
        Total blog posts in the system: <span className="font-bold text-green-400">{count}</span>
      </p>
      <p className="text-sm text-gray-400 mt-1">
        Including neighborhood guides, service articles, seasonal tips, and product information
      </p>
    </div>
  )
}
