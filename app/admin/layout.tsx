import type React from "react"
import { redirect } from "next/navigation"
import { getServerSupabaseClient } from "@/lib/supabase/server"
import { AdminSidebar } from "@/components/admin/admin-sidebar"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = getServerSupabaseClient()
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/auth/login")
  }

  // Check if user is an admin
  const { data: profile } = await supabase.from("profiles").select("is_admin").eq("id", session.user.id).single()

  if (!profile?.is_admin) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen bg-night-950">
      <AdminSidebar />
      <div className="flex-1 p-8">{children}</div>
    </div>
  )
}
