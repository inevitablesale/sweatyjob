import type React from "react"
import { redirect } from "next/navigation"
import { getServerSupabaseClient } from "@/lib/supabase/server"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = getServerSupabaseClient()
  const { data } = await supabase.auth.getUser()

  if (!data.user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-night-900">
      <div className="container mx-auto px-4 py-24 md:py-32">{children}</div>
    </div>
  )
}
