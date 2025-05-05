"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronLeft, ChevronRight, Search, Edit, Trash, Mail } from "lucide-react"
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
import { Textarea } from "@/components/ui/textarea"
import { getSupabaseClient } from "@/lib/supabase/client"
import { toast } from "@/components/ui/use-toast"

interface WaitlistEntry {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  address: string
  neighborhood: string
  property_size: string
  notes: string | null
  source: string
  status: string
  created_at: string
}

interface WaitlistTableProps {
  waitlist: WaitlistEntry[]
  totalPages: number
  currentPage: number
  statusOptions: string[]
  statusFilter: string
  searchQuery: string
}

export function WaitlistTable({
  waitlist,
  totalPages,
  currentPage,
  statusOptions,
  statusFilter,
  searchQuery,
}: WaitlistTableProps) {
  const router = useRouter()
  const supabase = getSupabaseClient()
  const [selectedEntry, setSelectedEntry] = useState<WaitlistEntry | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)
  const [localSearch, setLocalSearch] = useState(searchQuery)
  const [localStatus, setLocalStatus] = useState<string>(statusFilter)

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return

    const params = new URLSearchParams()
    params.set("page", newPage.toString())
    if (statusFilter) params.set("status", statusFilter)
    if (searchQuery) params.set("search", searchQuery)

    router.push(`/admin/waitlist?${params.toString()}`)
  }

  const handleSearch = () => {
    const params = new URLSearchParams()
    params.set("page", "1")
    if (localStatus) params.set("status", localStatus)
    if (localSearch) params.set("search", localSearch)

    router.push(`/admin/waitlist?${params.toString()}`)
  }

  const handleStatusFilter = (status: string) => {
    setLocalStatus(status)

    const params = new URLSearchParams()
    params.set("page", "1")
    if (status) params.set("status", status)
    if (searchQuery) params.set("search", searchQuery)

    router.push(`/admin/waitlist?${params.toString()}`)
  }

  const handleClearFilters = () => {
    setLocalSearch("")
    setLocalStatus("")
    router.push("/admin/waitlist")
  }

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase.from("waitlist").update({ status: newStatus }).eq("id", id)

      if (error) throw error

      // Refresh the page to show updated data
      router.refresh()

      toast({
        title: "Status updated",
        description: "The waitlist entry status has been updated successfully.",
      })
    } catch (error) {
      console.error("Error updating status:", error)
      toast({
        title: "Error",
        description: "Failed to update status. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleUpdateEntry = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedEntry) return

    setIsUpdating(true)

    try {
      const { error } = await supabase
        .from("waitlist")
        .update({
          first_name: selectedEntry.first_name,
          last_name: selectedEntry.last_name,
          email: selectedEntry.email,
          phone: selectedEntry.phone,
          address: selectedEntry.address,
          neighborhood: selectedEntry.neighborhood,
          property_size: selectedEntry.property_size,
          notes: selectedEntry.notes,
          status: selectedEntry.status,
        })
        .eq("id", selectedEntry.id)

      if (error) throw error

      // Refresh the page to show updated data
      router.refresh()

      toast({
        title: "Entry updated",
        description: "The waitlist entry has been updated successfully.",
      })

      setSelectedEntry(null)
    } catch (error) {
      console.error("Error updating entry:", error)
      toast({
        title: "Error",
        description: "Failed to update entry. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsUpdating(false)
    }
  }

  const handleDeleteEntry = async () => {
    if (!selectedEntry) return

    setIsDeleting(true)

    try {
      const { error } = await supabase.from("waitlist").delete().eq("id", selectedEntry.id)

      if (error) throw error

      // Refresh the page to show updated data
      router.refresh()

      toast({
        title: "Entry deleted",
        description: "The waitlist entry has been deleted successfully.",
      })

      setSelectedEntry(null)
    } catch (error) {
      console.error("Error deleting entry:", error)
      toast({
        title: "Error",
        description: "Failed to delete entry. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
    }
  }

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-500/10 text-yellow-500"
      case "contacted":
        return "bg-blue-500/10 text-blue-500"
      case "approved":
        return "bg-green-500/10 text-green-500"
      case "rejected":
        return "bg-red-500/10 text-red-500"
      default:
        return "bg-gray-500/10 text-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <div className="flex flex-1 gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search by name, email, or address"
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
          <Select value={localStatus} onValueChange={handleStatusFilter}>
            <SelectTrigger className="w-[180px] bg-night-800 border-night-700 text-white">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent className="bg-night-800 border-night-700 text-white">
              <SelectItem value="all">All statuses</SelectItem>
              {statusOptions.map((status) => (
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
              <TableHead className="text-gray-400 w-[200px]">Name</TableHead>
              <TableHead className="text-gray-400">Contact</TableHead>
              <TableHead className="text-gray-400">Location</TableHead>
              <TableHead className="text-gray-400">Property Size</TableHead>
              <TableHead className="text-gray-400">Source</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="text-gray-400 text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {waitlist.length === 0 ? (
              <TableRow className="hover:bg-night-800/50 border-night-700">
                <TableCell colSpan={8} className="text-center py-8 text-gray-400">
                  No waitlist entries found
                </TableCell>
              </TableRow>
            ) : (
              waitlist.map((entry) => (
                <TableRow key={entry.id} className="hover:bg-night-800/50 border-night-700">
                  <TableCell className="font-medium text-white">
                    {entry.first_name} {entry.last_name}
                  </TableCell>
                  <TableCell>
                    <div className="text-white">{entry.email}</div>
                    <div className="text-gray-400 text-sm">{entry.phone}</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-white">{entry.neighborhood}</div>
                    <div className="text-gray-400 text-sm truncate max-w-[200px]">{entry.address}</div>
                  </TableCell>
                  <TableCell className="text-white">{entry.property_size}</TableCell>
                  <TableCell className="text-white">{entry.source}</TableCell>
                  <TableCell>
                    <Select defaultValue={entry.status} onValueChange={(value) => handleUpdateStatus(entry.id, value)}>
                      <SelectTrigger className={`w-[120px] border-0 ${getStatusBadgeColor(entry.status)}`}>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-night-800 border-night-700 text-white">
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="contacted">Contacted</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-white">{new Date(entry.created_at).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-white"
                        onClick={() => (window.location.href = `mailto:${entry.email}`)}
                      >
                        <Mail className="h-4 w-4" />
                      </Button>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-400 hover:text-white"
                            onClick={() => setSelectedEntry(entry)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-night-800 border-night-700 text-white">
                          <DialogHeader>
                            <DialogTitle>Edit Waitlist Entry</DialogTitle>
                          </DialogHeader>

                          {selectedEntry && (
                            <form onSubmit={handleUpdateEntry} className="space-y-4 mt-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="first_name">First Name</Label>
                                  <Input
                                    id="first_name"
                                    value={selectedEntry.first_name}
                                    onChange={(e) => setSelectedEntry({ ...selectedEntry, first_name: e.target.value })}
                                    className="bg-night-700 border-night-600 text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="last_name">Last Name</Label>
                                  <Input
                                    id="last_name"
                                    value={selectedEntry.last_name}
                                    onChange={(e) => setSelectedEntry({ ...selectedEntry, last_name: e.target.value })}
                                    className="bg-night-700 border-night-600 text-white"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={selectedEntry.email}
                                  onChange={(e) => setSelectedEntry({ ...selectedEntry, email: e.target.value })}
                                  className="bg-night-700 border-night-600 text-white"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="phone">Phone</Label>
                                <Input
                                  id="phone"
                                  value={selectedEntry.phone}
                                  onChange={(e) => setSelectedEntry({ ...selectedEntry, phone: e.target.value })}
                                  className="bg-night-700 border-night-600 text-white"
                                />
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="address">Address</Label>
                                <Input
                                  id="address"
                                  value={selectedEntry.address}
                                  onChange={(e) => setSelectedEntry({ ...selectedEntry, address: e.target.value })}
                                  className="bg-night-700 border-night-600 text-white"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                  <Label htmlFor="neighborhood">Neighborhood</Label>
                                  <Input
                                    id="neighborhood"
                                    value={selectedEntry.neighborhood}
                                    onChange={(e) =>
                                      setSelectedEntry({ ...selectedEntry, neighborhood: e.target.value })
                                    }
                                    className="bg-night-700 border-night-600 text-white"
                                  />
                                </div>
                                <div className="space-y-2">
                                  <Label htmlFor="property_size">Property Size</Label>
                                  <Input
                                    id="property_size"
                                    value={selectedEntry.property_size}
                                    onChange={(e) =>
                                      setSelectedEntry({ ...selectedEntry, property_size: e.target.value })
                                    }
                                    className="bg-night-700 border-night-600 text-white"
                                  />
                                </div>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="status">Status</Label>
                                <Select
                                  value={selectedEntry.status}
                                  onValueChange={(value) => setSelectedEntry({ ...selectedEntry, status: value })}
                                >
                                  <SelectTrigger className="bg-night-700 border-night-600 text-white">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent className="bg-night-800 border-night-700 text-white">
                                    <SelectItem value="pending">Pending</SelectItem>
                                    <SelectItem value="contacted">Contacted</SelectItem>
                                    <SelectItem value="approved">Approved</SelectItem>
                                    <SelectItem value="rejected">Rejected</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>

                              <div className="space-y-2">
                                <Label htmlFor="notes">Notes</Label>
                                <Textarea
                                  id="notes"
                                  value={selectedEntry.notes || ""}
                                  onChange={(e) => setSelectedEntry({ ...selectedEntry, notes: e.target.value })}
                                  className="bg-night-700 border-night-600 text-white min-h-[100px]"
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

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-gray-400 hover:text-red-500"
                            onClick={() => setSelectedEntry(entry)}
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-night-800 border-night-700 text-white">
                          <DialogHeader>
                            <DialogTitle>Delete Waitlist Entry</DialogTitle>
                          </DialogHeader>

                          <div className="py-4">
                            <p>Are you sure you want to delete this waitlist entry? This action cannot be undone.</p>

                            {selectedEntry && (
                              <div className="mt-4 p-4 rounded-md bg-night-700">
                                <p className="font-medium">
                                  {selectedEntry.first_name} {selectedEntry.last_name}
                                </p>
                                <p className="text-gray-400">{selectedEntry.email}</p>
                              </div>
                            )}
                          </div>

                          <DialogFooter className="gap-2 sm:gap-0">
                            <DialogClose asChild>
                              <Button type="button" variant="outline" className="border-night-600">
                                Cancel
                              </Button>
                            </DialogClose>
                            <Button variant="destructive" onClick={handleDeleteEntry} disabled={isDeleting}>
                              {isDeleting ? "Deleting..." : "Delete Entry"}
                            </Button>
                          </DialogFooter>
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
