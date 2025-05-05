"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"
import { getSupabaseClient } from "@/lib/supabase/client"

export default function AdminSettings() {
  const [isUpdating, setIsUpdating] = useState(false)
  const [waitlistOpen, setWaitlistOpen] = useState(true)
  const [maxWaitlistEntries, setMaxWaitlistEntries] = useState("500")
  const [notificationEmail, setNotificationEmail] = useState("admin@sweatyjob.com")

  const handleSaveGeneralSettings = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUpdating(true)

    // In a real app, this would save to a settings table in the database
    // For now, we'll just simulate a successful save
    setTimeout(() => {
      setIsUpdating(false)
      toast({
        title: "Settings updated",
        description: "Your settings have been saved successfully.",
      })
    }, 1000)
  }

  const handleClearWaitlist = async () => {
    if (!window.confirm("Are you sure you want to clear the entire waitlist? This action cannot be undone.")) {
      return
    }

    setIsUpdating(true)

    try {
      const supabase = getSupabaseClient()
      const { error } = await supabase.from("waitlist").delete().neq("id", "placeholder")

      if (error) throw error

      toast({
        title: "Waitlist cleared",
        description: "All waitlist entries have been deleted.",
      })
    } catch (error) {
      console.error("Error clearing waitlist:", error)
      toast({
        title: "Error",
        description: "Failed to clear waitlist. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Admin Settings</h1>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-night-800 border-night-700">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="waitlist">Waitlist</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="danger">Danger Zone</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="bg-night-800 border-night-700">
            <CardHeader>
              <CardTitle className="text-white">General Settings</CardTitle>
              <CardDescription className="text-gray-400">Manage your application settings</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveGeneralSettings} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input id="site-name" defaultValue="SweatyJob" className="bg-night-700 border-night-600 text-white" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email">Contact Email</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    defaultValue="contact@sweatyjob.com"
                    className="bg-night-700 border-night-600 text-white"
                  />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                    <span className="text-xs text-gray-400">Put the site in maintenance mode</span>
                  </div>
                  <Switch id="maintenance-mode" />
                </div>

                <Button type="submit" className="bg-sweat-500 hover:bg-sweat-600" disabled={isUpdating}>
                  {isUpdating ? "Saving..." : "Save Settings"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="waitlist">
          <Card className="bg-night-800 border-night-700">
            <CardHeader>
              <CardTitle className="text-white">Waitlist Settings</CardTitle>
              <CardDescription className="text-gray-400">Manage your waitlist configuration</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveGeneralSettings} className="space-y-6">
                <div className="flex items-center justify-between space-x-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="waitlist-open">Waitlist Open</Label>
                    <span className="text-xs text-gray-400">Allow new users to join the waitlist</span>
                  </div>
                  <Switch id="waitlist-open" checked={waitlistOpen} onCheckedChange={setWaitlistOpen} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max-entries">Maximum Waitlist Entries</Label>
                  <Input
                    id="max-entries"
                    type="number"
                    value={maxWaitlistEntries}
                    onChange={(e) => setMaxWaitlistEntries(e.target.value)}
                    className="bg-night-700 border-night-600 text-white"
                  />
                  <span className="text-xs text-gray-400">Set to 0 for unlimited entries</span>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="auto-approve">Auto-Approve Criteria</Label>
                  <select id="auto-approve" className="w-full rounded-md bg-night-700 border-night-600 text-white p-2">
                    <option value="none">None (Manual approval only)</option>
                    <option value="all">All entries</option>
                    <option value="neighborhoods">Selected neighborhoods</option>
                  </select>
                </div>

                <Button type="submit" className="bg-sweat-500 hover:bg-sweat-600" disabled={isUpdating}>
                  {isUpdating ? "Saving..." : "Save Settings"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="bg-night-800 border-night-700">
            <CardHeader>
              <CardTitle className="text-white">Notification Settings</CardTitle>
              <CardDescription className="text-gray-400">Configure email and notification preferences</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveGeneralSettings} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="notification-email">Notification Email</Label>
                  <Input
                    id="notification-email"
                    type="email"
                    value={notificationEmail}
                    onChange={(e) => setNotificationEmail(e.target.value)}
                    className="bg-night-700 border-night-600 text-white"
                  />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="waitlist-notifications">Waitlist Notifications</Label>
                    <span className="text-xs text-gray-400">Receive email when new users join the waitlist</span>
                  </div>
                  <Switch id="waitlist-notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between space-x-2">
                  <div className="flex flex-col space-y-1">
                    <Label htmlFor="payment-notifications">Payment Notifications</Label>
                    <span className="text-xs text-gray-400">Receive email for new payments and subscriptions</span>
                  </div>
                  <Switch id="payment-notifications" defaultChecked />
                </div>

                <Button type="submit" className="bg-sweat-500 hover:bg-sweat-600" disabled={isUpdating}>
                  {isUpdating ? "Saving..." : "Save Settings"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="danger">
          <Card className="bg-night-800 border-night-700">
            <CardHeader>
              <CardTitle className="text-red-500">Danger Zone</CardTitle>
              <CardDescription className="text-gray-400">
                These actions are destructive and cannot be undone
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 border border-red-900 rounded-md bg-red-950/20">
                <h3 className="text-lg font-medium text-red-400 mb-2">Clear Waitlist</h3>
                <p className="text-gray-400 mb-4">
                  This will permanently delete all entries in the waitlist. This action cannot be undone.
                </p>
                <Button variant="destructive" onClick={handleClearWaitlist} disabled={isUpdating}>
                  {isUpdating ? "Processing..." : "Clear Waitlist"}
                </Button>
              </div>

              <div className="p-4 border border-red-900 rounded-md bg-red-950/20">
                <h3 className="text-lg font-medium text-red-400 mb-2">Reset All User Data</h3>
                <p className="text-gray-400 mb-4">
                  This will permanently delete all user accounts, profiles, and related data. This action cannot be
                  undone.
                </p>
                <Button variant="destructive" disabled={true}>
                  Reset User Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
