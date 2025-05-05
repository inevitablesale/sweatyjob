"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search, Edit, Mail, Shield } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { getSupabaseClient } from "@/lib/supabase/client"
import { toast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

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
  subscription_status: string | null
  subscription_plan: string | null
  subscription_start_date: string | null
  subscription_end_date: string | null
  stripe_customer_id: string | null
  stripe_subscription_id: string | null
  created_at: string | null
  updated_at: string | null
  is_admin: boolean | null
}

interface UsersTableProps {
  users: UserProfile[]
  totalPages: number
  currentPage: number
  subscriptionOptions: string[]
  subscriptionFilter: string
  searchQuery: string
}

export function UsersTable({
  users,
  totalPages,
  currentPage,
  subscriptionOptions,
  subscriptionFilter,
  searchQuery,
}: UsersTableProps) {
  const router = useRouter()
  const supabase = getSupabaseClient()
  const [selectedUser, setSelectedUser] = useState<UserProfile | null>(null)
  const [isUpdating, setIsUpdating] = useState(false)
  const [localSearch, setLocalSearch] = useState(searchQuery)
  const [localSubscription, setLocalSubscription] = useState<string>(subscriptionFilter)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return

    const params = new URLSearchParams()
    params.set("page", newPage.toString())
    if (subscriptionFilter) params.set("subscription", subscriptionFilter)
    if (searchQuery) params.set("search", searchQuery)

    router.push(`/admin/users?${params.toString()}`)
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    params.set("page", "1")
    if (localSubscription) params.set("subscription", localSubscription)
    if (localSearch) params.set("search", localSearch)

    router.push(`/admin/users?${params.toString()}`)
  }

  const handleSubscriptionFilter = (subscription: string) => {
    setLocalSubscription(subscription)

    const params = new URLSearchParams()
    params.set("page", "1")
    if (subscription) params.set("subscription", subscription)
    if (searchQuery) params.set("search", searchQuery)

    router.push(`/admin/users?${params.toString()}`)
  }

  const handleClearFilters = () => {
    setLocalSearch("")
    setLocalSubscription("")
    router.push("/admin/users")
  }

  const handleUpdateUser = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedUser) return

    setIsUpdating(true)

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          first_name: selectedUser.first_name,
          last_name: selectedUser.last_name,
          email: selectedUser.email,
          phone: selectedUser.phone,
          address: selectedUser.address,
          city: selectedUser.city,
          state: selectedUser.state,
          zip: selectedUser.zip,
          is_admin: selectedUser.is_admin,
        })
        .eq("id", selectedUser.id)

      if (error) throw error

      // Refresh the page to show updated data
      router.refresh()

      toast({
        title: "User updated",
        description: "The user profile has been updated successfully.",
      })

      setSelectedUser(null)
    } catch (error) {
      console.error("Error updating user:", error)
      toast({
        title: "Error",
        description: "Failed to update user. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUpdating(false)
    }
  }

  const getSubscriptionBadgeColor = (status: string | null) => {
    if (!status) return "bg-gray-500/10 text-gray-500"

    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-500/10 text-green-500"
      case "canceled":
        return "bg-red-500/10 text-red-500"
      case "past_due":
        return "bg-yellow-500/10 text-yellow-500"
      default:
        return "bg-gray-500/10 text-gray-500"
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString()
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name or email"
              className="pl-10 bg-night-800 border-night-700 text-white"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </div>
          <Button onClick={handleSearch} className="bg-sweat-500 hover:bg-sweat-600">
            Search
          </Button>
        </div>

        <div className="flex gap-4">
          <Select value={localSubscription} onValueChange={handleSubscriptionFilter}>
            <SelectTrigger className="w-[180px] bg-night-800 border-night-700 text-white">
              <SelectValue placeholder="Filter by subscription" />
            </SelectTrigger>
            <SelectContent className="bg-night-800 border-night-700 text-white">
              <SelectItem value="all">All subscriptions</SelectItem>
              {subscriptionOptions.map((status) => (
                <SelectItem key={status} value={status}>
                  {status}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            onClick={handleClearFilters}
            className="border-night-700 text-gray-400 hover:text-white"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      <div className="rounded-md border border-night-700 overflow-hidden">
        <Table>
          <TableHeader className="bg-night-800">
            <TableRow className="hover:bg-night-800/50 border-night-700">
              <TableHead className="text-gray-400 w-[200px]">User</TableHead>
              <TableHead className="text-gray-400">Contact</TableHead>
              <TableHead className="text-gray-400">Subscription</TableHead>
              <TableHead className="text-gray-400">Plan</TableHead>
              <TableHead className="text-gray-400">Start Date</TableHead>
              <TableHead className="text-gray-400">End Date</TableHead>
              <TableHead className="text-gray-400">Role</TableHead>
              <TableHead className="text-gray-400 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.length === 0 ? (
              <TableRow className="hover:bg-night-800/50 border-night-700">
                <TableCell colSpan={8} className="text-center py-8 text-gray-400">
                  No users found
                </TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id} className="hover:bg-night-800/50 border-night-700">
                  <TableCell className="font-medium text-white">
                    {user.first_name || ""} {user.last_name || ""}
                    {!user.first_name && !user.last_name && <span className="text-gray-400">No name</span>}
                  </TableCell>
                  <TableCell>
                    <div className="text-white">{user.email}</div>
                    <div className="text-gray-400 text-sm">{user.phone || "No phone"}</div>
                  </TableCell>
                  <TableCell>
                    <Badge className={`${getSubscriptionBadgeColor(user.subscription_status)}`}>
                      {user.subscription_status || "inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white">{user.subscription_plan || "N/A"}</TableCell>
                  <TableCell className="text-white">{formatDate(user.subscription_start_date)}</TableCell>
                  <TableCell className="text-white">{formatDate(user.subscription_end_date)}</TableCell>
                  <TableCell>
                    {user.is_admin ? (
                      <Badge className="bg-purple-500/10 text-purple-500">Admin</Badge>
                    ) : (
                      <Badge className="bg-blue-500/10 text-blue-500">User</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white"
                        onClick={() => (window.location.href = `mailto:${user.email}`)}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-400 hover:text-white"
                            onClick={() => setSelectedUser(user)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-night-800 border-night-700 text-white">
                          <DialogHeader>
                            <DialogTitle>Edit User</DialogTitle>
                          </DialogHeader>

                          {selectedUser && (
                            <form onSubmit={handleUpdateUser} className="space-y-4 mt-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="first_name">First Name</Label>
                                  <Input
                                    id="first_name"
                                    value={selectedUser.first_name || ""}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, first_name: e.target.value })}
                                    className="bg-night-700 border-night-600 text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="last_name">Last Name</Label>
                                  <Input
                                    id="last_name"
                                    value={selectedUser.last_name || ""}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, last_name: e.target.value })}
                                    className="bg-night-700 border-night-600 text-white"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={selectedUser.email}
                                  onChange={(e) => setSelectedUser({ ...selectedUser, email: e.target.value })}
                                  className="bg-night-700 border-night-600 text-white"
                                  disabled
                                />
                                <p className="text-xs text-gray-400">Email cannot be changed</p>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                  id="phone"
                                  value={selectedUser.phone || ""}
                                  onChange={(e) => setSelectedUser({ ...selectedUser, phone: e.target.value })}
                                  className="bg-night-700 border-night-600 text-white"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                  id="address"
                                  value={selectedUser.address || ""}
                                  onChange={(e) => setSelectedUser({ ...selectedUser, address: e.target.value })}
                                  className="bg-night-700 border-night-600 text-white"
                                />
                              </div>

                              <div className="grid grid-cols-3 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="city">City</Label>
                                  <Input
                                    id="city"
                                    value={selectedUser.city || ""}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, city: e.target.value })}
                                    className="bg-night-700 border-night-600 text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="state">State</Label>
                                  <Input
                                    id="state"
                                    value={selectedUser.state || ""}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, state: e.target.value })}
                                    className="bg-night-700 border-night-600 text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="zip">ZIP</Label>
                                  <Input
                                    id="zip"
                                    value={selectedUser.zip || ""}
                                    onChange={(e) => setSelectedUser({ ...selectedUser, zip: e.target.value })}
                                    className="bg-night-700 border-night-600 text-white"
                                  />
                                </div>
                              </div>

                              <div className="flex items-center justify-between space-x-2 pt-4">
                                <div className="flex flex-col space-y-1">
                                  <Label htmlFor="admin-status" className="flex items-center gap-2">
                                    <Shield className="h-4 w-4 text-purple-500" />
                                    Admin Status
                                  </Label>
                                  <span className="text-xs text-gray-400">Grant admin privileges to this user</span>
                                </div>
                                <Switch
                                  id="admin-status"
                                  checked={selectedUser.is_admin || false}
                                  onCheckedChange={(checked) => setSelectedUser({ ...selectedUser, is_admin: checked })}
                                />
                              </div>

                              <DialogFooter className="gap-2 sm:gap-0">
                                <DialogClose asChild>
                                  <Button type="button" variant="outline" className="border-night-600">
                                    Cancel
                                  </Button>
                                </DialogClose>
                                <Button type="submit" className="bg-sweat-500 hover:bg-sweat-600" disabled={isUpdating}>
                                  {isUpdating ? "Saving..." : "Save Changes"}
                                </Button>
                              </DialogFooter>
                            </form>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="h-8 w-8 border-night-700"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="h-8 w-8 border-night-700"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
