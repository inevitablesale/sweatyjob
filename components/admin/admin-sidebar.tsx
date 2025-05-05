"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, ClipboardList, Settings, CreditCard, Home, LogOut, PhoneCall, Handshake } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getSupabaseClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

export function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = getSupabaseClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/auth/login")
  }

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: Home },
    { name: "Waitlist", path: "/admin/waitlist", icon: ClipboardList },
    { name: "Leads", path: "/admin/leads", icon: PhoneCall },
    { name: "Users", path: "/admin/users", icon: Users },
    { name: "Payments", path: "/admin/payments", icon: CreditCard },
    { name: "Settings", path: "/admin/settings", icon: Settings },
    {
      name: "Partner Applications",
      path: "/admin/partner-applications",
      icon: Handshake,
    },
  ]

  return (
    <div className="w-64 bg-night-900 border-r border-night-800 p-4 flex flex-col h-screen">
      <div className="mb-8 px-4 py-2">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-white">
            <span className="text-sweat-500">Sweaty</span>Job
          </span>
        </Link>
        <div className="text-xs text-gray-400 mt-1">Admin Dashboard</div>
      </div>

      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                isActive ? "bg-night-800 text-sweat-500" : "text-gray-400 hover:text-white hover:bg-night-800"
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-4 border-t border-night-800">
        <Button
          variant="ghost"
          className="w-full justify-start text-gray-400 hover:text-white hover:bg-night-800"
          onClick={handleSignOut}
        >
          <LogOut className="h-5 w-5 mr-3" />
          Sign Out
        </Button>
      </div>
    </div>
  )
}
