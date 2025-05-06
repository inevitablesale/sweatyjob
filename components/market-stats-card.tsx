"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"
import { useState, useEffect } from "react"

interface MarketStatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: ReactNode
  className?: string
  city?: string // Added city prop to match the loading UI
  description?: string // Added to match the props in market-page-template.tsx
}

const MarketStatsCard = ({ title, value, subtitle, icon, className, city, description }: MarketStatsCardProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">LOCAL HOMEOWNER DATA</h3>
        <p className="text-gray-600 mb-4">
          We understand {city} better than anyone. Our technology is tailored to local conditions.
        </p>

        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    )
  }

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center text-slate-700">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-slate-900">
          {typeof value === "number" ? value.toLocaleString() : value}
        </p>
        {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
        {description && <p className="text-sm text-slate-600 mt-2">{description}</p>}
      </CardContent>
    </Card>
  )
}

export default MarketStatsCard
