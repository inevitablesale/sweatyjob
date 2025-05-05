"use client"

import { useEffect, useState } from "react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bot, Calendar, CreditCard, AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

interface UserProfile {
  id: string
  first_name: string
  last_name: string
  email: string
  subscription_status?: string
  subscription_end_date?: string
}

export default function DashboardPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const supabase = getSupabaseClient()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data: userData } = await supabase.auth.getUser()

        if (!userData.user) {
          throw new Error("User not found")
        }

        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", userData.user.id)
          .single()

        if (profileError) throw profileError

        setProfile(profileData)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [supabase])

  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-12 w-[250px] bg-night-800" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-[200px] bg-night-800 rounded-lg" />
          <Skeleton className="h-[200px] bg-night-800 rounded-lg" />
        </div>
        <Skeleton className="h-[300px] bg-night-800 rounded-lg" />
      </div>
    )
  }

  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>Error loading profile: {error}</AlertDescription>
      </Alert>
    )
  }

  const hasSubscription = profile?.subscription_status === "active"

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Welcome, {profile?.first_name || "Member"}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-night-800 border-night-700 text-white">
          <CardHeader>
            <CardTitle>Subscription Status</CardTitle>
            <CardDescription className="text-gray-400">Your current lawn service plan</CardDescription>
          </CardHeader>
          <CardContent>
            {hasSubscription ? (
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-green-500/10 p-2 rounded-full mr-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-medium">Active Subscription</p>
                    <p className="text-sm text-gray-400">Founding Member - $120/month</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-sweat-500/10 p-2 rounded-full mr-3">
                    <Calendar className="h-5 w-5 text-sweat-500" />
                  </div>
                  <div>
                    <p className="font-medium">Next billing date</p>
                    <p className="text-sm text-gray-400">
                      {profile?.subscription_end_date
                        ? new Date(profile.subscription_end_date).toLocaleDateString()
                        : "Not available"}
                    </p>
                  </div>
                </div>
                <Button variant="outline" className="border-night-700 hover:bg-night-700 mt-4" asChild>
                  <Link href="/dashboard/subscription">Manage Subscription</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-yellow-500/10 p-2 rounded-full mr-3">
                    <AlertCircle className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-medium">No Active Subscription</p>
                    <p className="text-sm text-gray-400">Subscribe to get started with your lawn service</p>
                  </div>
                </div>
                <Button className="bg-sweat-500 hover:bg-sweat-600 mt-4" asChild>
                  <Link href="/dashboard/subscribe">
                    <Bot className="mr-2 h-4 w-4" />
                    Subscribe Now
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-night-800 border-night-700 text-white">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="text-gray-400">Manage your payment details</CardDescription>
          </CardHeader>
          <CardContent>
            {hasSubscription ? (
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-sweat-500/10  p-2 rounded-full mr-3">
                    <CreditCard className="h-5 w-5 text-sweat-500" />
                  </div>
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-gray-400">Expires 12/25</p>
                  </div>
                </div>
                <Button variant="outline" className="border-night-700 hover:bg-night-700 mt-4" asChild>
                  <Link href="/dashboard/payment">Update Payment Method</Link>
                </Button>
              </div>
            ) : (
              <div className="flex items-center h-[100px]">
                <p className="text-gray-400">No payment method on file</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card className="bg-night-800 border-night-700 text-white">
        <CardHeader>
          <CardTitle>Your Lawn Service</CardTitle>
          <CardDescription className="text-gray-400">Details about your lawn service</CardDescription>
        </CardHeader>
        <CardContent>
          {hasSubscription ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-night-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Your Bot</h3>
                  <p className="text-gray-400">Mowgli #42</p>
                  <p className="text-xs text-gray-500 mt-1">Assigned on May 1, 2025</p>
                </div>
                <div className="bg-night-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Next Service</h3>
                  <p className="text-gray-400">Human Touch-up</p>
                  <p className="text-xs text-gray-500 mt-1">May 15, 2025 (9am-12pm)</p>
                </div>
                <div className="bg-night-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Service Address</h3>
                  <p className="text-gray-400">123 Main St, Richmond, VA</p>
                  <Button variant="link" className="text-sweat-400 hover:text-sweat-300 p-0 h-auto mt-1">
                    Update address
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Button className="bg-sweat-500 hover:bg-sweat-600" asChild>
                  <Link href="/dashboard/service">View Service Details</Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Bot className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No Active Service</h3>
              <p className="text-gray-400 mb-6">Subscribe to get started with your lawn service</p>
              <Button className="bg-sweat-500 hover:bg-sweat-600" asChild>
                <Link href="/dashboard/subscribe">
                  <Bot className="mr-2 h-4 w-4" />
                  Subscribe Now
                </Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
