"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getSupabaseClient } from "@/lib/supabase/client"
import { AlertCircle, CheckCircle2 } from "lucide-react"

interface UserProfile {
  id: string
  first_name: string | null
  last_name: string | null
  email: string
  phone: string | null
  address: string | null
  city: string | null
  state: string | null
  zip: string | null
}

export default function SettingsPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSuccess(false)

    try {
      if (!profile) return

      const { error } = await supabase
        .from("profiles")
        .update({
          first_name: profile.first_name,
          last_name: profile.last_name,
          phone: profile.phone,
          address: profile.address,
          city: profile.city,
          state: profile.state,
          zip: profile.zip,
          updated_at: new Date().toISOString(),
        })
        .eq("id", profile.id)

      if (error) throw error

      setSuccess(true)
    } catch (error: any) {
      setError(error.message || "Failed to update profile")
    } finally {
      setSaving(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!profile) return

    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    })
  }

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Account Settings</h1>
        <div className="animate-pulse space-y-6">
          <div className="h-12 bg-night-800 rounded-md"></div>
          <div className="h-64 bg-night-800 rounded-md"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Account Settings</h1>

      {error && (
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {success && (
        <Alert className="mb-6 bg-green-500/10 border-green-500/20 text-green-400">
          <CheckCircle2 className="h-4 w-4" />
          <AlertDescription>Your profile has been updated successfully.</AlertDescription>
        </Alert>
      )}

      <Card className="bg-night-800 border-night-700 text-white">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription className="text-gray-400">Update your account details</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="first_name">First name</Label>
                <Input
                  id="first_name"
                  name="first_name"
                  value={profile?.first_name || ""}
                  onChange={handleChange}
                  className="bg-night-700 border-night-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="last_name">Last name</Label>
                <Input
                  id="last_name"
                  name="last_name"
                  value={profile?.last_name || ""}
                  onChange={handleChange}
                  className="bg-night-700 border-night-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={profile?.email || ""}
                disabled
                className="bg-night-700 border-night-600 opacity-70"
              />
              <p className="text-xs text-gray-400">Email cannot be changed</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                name="phone"
                value={profile?.phone || ""}
                onChange={handleChange}
                className="bg-night-700 border-night-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={profile?.address || ""}
                onChange={handleChange}
                className="bg-night-700 border-night-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  name="city"
                  value={profile?.city || ""}
                  onChange={handleChange}
                  className="bg-night-700 border-night-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  value={profile?.state || ""}
                  onChange={handleChange}
                  className="bg-night-700 border-night-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="zip">ZIP code</Label>
                <Input
                  id="zip"
                  name="zip"
                  value={profile?.zip || ""}
                  onChange={handleChange}
                  className="bg-night-700 border-night-600"
                />
              </div>
            </div>

            <div className="pt-4">
              <Button type="submit" className="bg-sweat-500 hover:bg-sweat-600" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
