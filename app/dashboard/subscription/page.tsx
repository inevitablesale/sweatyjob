"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getSupabaseClient } from "@/lib/supabase/client"
import { AlertCircle, Bot, Calendar, CheckCircle2, CreditCard } from "lucide-react"

interface UserProfile {
  id: string
  first_name: string | null
  last_name: string | null
  email: string
  subscription_status: string | null
  subscription_plan: string | null
  subscription_start_date: string | null
  subscription_end_date: string | null
}

export default function SubscriptionPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [cancelLoading, setCancelLoading] = useState(false)
  const router = useRouter()
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

  const handleCancelSubscription = async () => {
    if (
      !confirm(
        "Are you sure you want to cancel your subscription? Your service will continue until the end of the current billing period.",
      )
    ) {
      return
    }

    setCancelLoading(true)
    try {
      // In a real implementation, this would call a server action to cancel the Stripe subscription
      // For now, we'll just update the local state
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Update the profile in Supabase
      if (profile) {
        const { error } = await supabase
          .from("profiles")
          .update({
            subscription_status: "canceled",
          })
          .eq("id", profile.id)

        if (error) throw error

        setProfile({
          ...profile,
          subscription_status: "canceled",
        })
      }
    } catch (error: any) {
      setError(error.message || "Failed to cancel subscription")
    } finally {
      setCancelLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Subscription</h1>
        <Card className="bg-night-800 border-night-700">
          <CardContent className="p-8">
            <div className="h-[300px] flex items-center justify-center">
              <div className="animate-pulse flex space-x-4">
                <div className="rounded-full bg-night-700 h-10 w-10"></div>
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-2 bg-night-700 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-2 bg-night-700 rounded col-span-2"></div>
                      <div className="h-2 bg-night-700 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-night-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Subscription</h1>
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>Error loading subscription: {error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  const hasSubscription = profile?.subscription_status === "active"
  const isCanceled = profile?.subscription_status === "canceled"

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Subscription</h1>

      <Card className="bg-night-800 border-night-700 text-white mb-8">
        <CardHeader>
          <CardTitle>Subscription Details</CardTitle>
          <CardDescription className="text-gray-400">Manage your lawn service subscription</CardDescription>
        </CardHeader>
        <CardContent>
          {hasSubscription ? (
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-green-500/10 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <p className="font-medium">Active Subscription</p>
                  <p className="text-sm text-gray-400">
                    {profile?.subscription_plan === "founding"
                      ? "Founding Member - $120/month"
                      : "Standard Member - $240/month"}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="bg-sweat-500/10 p-2 rounded-full mr-3">
                    <Calendar className="h-5 w-5 text-sweat-500" />
                  </div>
                  <div>
                    <p className="font-medium">Started on</p>
                    <p className="text-sm text-gray-400">
                      {profile?.subscription_start_date
                        ? new Date(profile.subscription_start_date).toLocaleDateString()
                        : "May 1, 2025"}
                    </p>
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
                        : "June 1, 2025"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-night-700 mt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="font-medium mb-1">Payment Method</h3>
                    <div className="flex items-center text-gray-400">
                      <CreditCard className="h-4 w-4 mr-2" />
                      <span>Visa ending in 4242</span>
                    </div>
                  </div>
                  <Button variant="outline" className="border-night-700 hover:bg-night-700" asChild>
                    <Link href="/dashboard/payment">Update Payment Method</Link>
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-night-700 mt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div>
                    <h3 className="font-medium mb-1">Cancel Subscription</h3>
                    <p className="text-sm text-gray-400">
                      Your service will continue until the end of the current billing period
                    </p>
                  </div>
                  <Button
                    variant="destructive"
                    className="bg-red-900 hover:bg-red-800 text-white border-none"
                    onClick={handleCancelSubscription}
                    disabled={cancelLoading}
                  >
                    {cancelLoading ? "Canceling..." : "Cancel Subscription"}
                  </Button>
                </div>
              </div>
            </div>
          ) : isCanceled ? (
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-yellow-500/10 p-2 rounded-full mr-3">
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                </div>
                <div>
                  <p className="font-medium">Subscription Canceled</p>
                  <p className="text-sm text-gray-400">
                    Your service will end on{" "}
                    {profile?.subscription_end_date
                      ? new Date(profile.subscription_end_date).toLocaleDateString()
                      : "June 1, 2025"}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 text-center">
                <p className="mb-4 text-gray-400">Want to continue your lawn service?</p>
                <Button className="bg-sweat-500 hover:bg-sweat-600" asChild>
                  <Link href="/dashboard/subscribe">
                    <Bot className="mr-2 h-4 w-4" />
                    Reactivate Subscription
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Bot className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-white mb-2">No Active Subscription</h3>
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

      {hasSubscription && (
        <Card className="bg-night-800 border-night-700 text-white">
          <CardHeader>
            <CardTitle>Billing History</CardTitle>
            <CardDescription className="text-gray-400">View your past payments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-night-700">
              <div className="grid grid-cols-4 gap-4 p-4 font-medium border-b border-night-700">
                <div>Date</div>
                <div>Amount</div>
                <div>Status</div>
                <div>Invoice</div>
              </div>
              <div className="p-4 text-gray-400">
                <div className="text-center py-8">No billing history available yet</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
