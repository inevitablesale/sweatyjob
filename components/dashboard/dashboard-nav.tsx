"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Bot, CreditCard, Home, Settings, Calendar, LifeBuoy } from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Subscription",
    href: "/dashboard/subscription",
    icon: Bot,
  },
  {
    title: "Payment",
    href: "/dashboard/payment",
    icon: CreditCard,
  },
  {
    title: "Service Schedule",
    href: "/dashboard/service",
    icon: Calendar,
  },
  {
    title: "Support",
    href: "/dashboard/support",
    icon: LifeBuoy,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-night-800 border-r border-night-700 p-4 hidden md:block">
      <div className="space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                isActive ? "bg-sweat-500/10 text-sweat-500" : "text-gray-400 hover:text-white hover:bg-night-700"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
