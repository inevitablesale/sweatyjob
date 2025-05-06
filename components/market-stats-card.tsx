import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface MarketStatsCardProps {
  title: string
  value: string | number
  subtitle?: string
  icon?: ReactNode
  className?: string
}

export function MarketStatsCard({ title, value, subtitle, icon, className }: MarketStatsCardProps) {
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
      </CardContent>
    </Card>
  )
}
