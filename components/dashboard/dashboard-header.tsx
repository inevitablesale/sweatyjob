"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Menu, User, LogOut, Bot, CreditCard, Home, Settings, Calendar, LifeBuoy } from "lucide-react"

export function DashboardHeader() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const supabase = getSupabaseClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

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

  return (
    <header className="bg-night-800 border-b border-night-700 py-3 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-400 hover:text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-night-800 border-night-700 p-0">
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-night-700">
                  <Link href="/" className="flex items-center">
                    <span className="text-2xl font-bold text-white">
                      <span className="text-sweat-500">Sweaty</span>Job
                    </span>
                  </Link>
                </div>
                <nav className="flex-1 p-4">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-night-700"
                        onClick={() => setOpen(false)}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </nav>
                <div className="p-4 border-t border-night-700">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-400 hover:text-white hover:bg-night-700"
                    onClick={handleSignOut}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center ml-2 md:ml-0">
            <span className="text-2xl font-bold text-white">
              <span className="text-sweat-500">Sweaty</span>Job
            </span>
          </Link>
        </div>

        <div className="flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full bg-night-700 text-white">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-night-800 border-night-700 text-white">
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings" className="cursor-pointer">
                  <Settings className="h-4 w-4 mr-2" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/support" className="cursor-pointer">
                  <LifeBuoy className="h-4 w-4 mr-2" />
                  <span>Support</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-night-700" />
              <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                <LogOut className="h-4 w-4 mr-2" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
