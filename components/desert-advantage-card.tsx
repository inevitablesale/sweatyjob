import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface DesertAdvantageCardProps {
  title: string
  description: string
  icon: ReactNode
}

export function DesertAdvantageCard({ title, description, icon }: DesertAdvantageCardProps) {
  return (
    <Card className="bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 transition-all duration-300 hover:bg-amber-200">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-slate-900">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-700">{description}</p>
      </CardContent>
    </Card>
  )
}
