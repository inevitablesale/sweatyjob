"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CheckCircle, Clock, MoreVertical, PhoneCall, Search, Trash2, UserPlus, X } from "lucide-react"
import type { Database } from "@/lib/supabase/database.types"
import { formatPhoneNumber } from "@/lib/utils"

type Lead = Database["public"]["Tables"]["leads"]["Row"]

export function LeadsTable() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sourceFilter, setSourceFilter] = useState("all")
  const [sources, setSources] = useState<string[]>([])

  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    fetchLeads()
  }, [])

  useEffect(() => {
    filterLeads()
  }, [leads, searchQuery, statusFilter, sourceFilter])

  const fetchLeads = async () => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false })

      if (error) throw error

      if (data) {
        setLeads(data)

        // Extract unique sources
        const uniqueSources = [...new Set(data.map((lead) => lead.source))]
        setSources(uniqueSources)
      }
    } catch (error) {
      console.error("Error fetching leads:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterLeads = () => {
    let filtered = [...leads]

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter((lead) => lead.phone.includes(searchQuery))
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((lead) => lead.status === statusFilter)
    }

    // Apply source filter
    if (sourceFilter !== "all") {
      filtered = filtered.filter((lead) => lead.source === sourceFilter)
    }

    setFilteredLeads(filtered)
  }

  const updateLeadStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("leads")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id)

      if (error) throw error

      // Update local state
      setLeads(leads.map((lead) => (lead.id === id ? { ...lead, status, updated_at: new Date().toISOString() } : lead)))
    } catch (error) {
      console.error("Error updating lead status:", error)
    }
  }

  const deleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return

    try {
      const { error } = await supabase.from("leads").delete().eq("id", id)

      if (error) throw error

      // Update local state
      setLeads(leads.filter((lead) => lead.id !== id))
    } catch (error) {
      console.error("Error deleting lead:", error)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return (
          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">
            New
          </Badge>
        )
      case "contacted":
        return (
          <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300">
            Contacted
          </Badge>
        )
      case "converted":
        return (
          <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
            Converted
          </Badge>
        )
      case "not_interested":
        return (
          <Badge variant="outline" className="bg-red-100 text-red-800 border-red-300">
            Not Interested
          </Badge>
        )
      default:
        return <Badge variant="outline">{status}</Badge>
    }
  }

  const getSourceBadge = (source: string) => {
    switch (source) {
      case "yard_sign":
        return <Badge className="bg-purple-100 text-purple-800 border-purple-300">Yard Sign</Badge>
      case "homepage_hero":
        return <Badge className="bg-green-100 text-green-800 border-green-300">Homepage Hero</Badge>
      case "homepage_footer":
        return <Badge className="bg-blue-100 text-blue-800 border-blue-300">Homepage Footer</Badge>
      default:
        return <Badge>{source}</Badge>
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            placeholder="Search phone number..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex gap-2 w-full sm:w-auto">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="converted">Converted</SelectItem>
              <SelectItem value="not_interested">Not Interested</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sourceFilter} onValueChange={setSourceFilter}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sources</SelectItem>
              {sources.map((source) => (
                <SelectItem key={source} value={source}>
                  {source.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" onClick={fetchLeads}>
            Refresh
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Phone</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  Loading leads...
                </TableCell>
              </TableRow>
            ) : filteredLeads.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  No leads found.
                </TableCell>
              </TableRow>
            ) : (
              filteredLeads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">
                    <a href={`tel:${lead.phone}`} className="flex items-center hover:text-sweat-500">
                      <PhoneCall className="h-4 w-4 mr-2" />
                      {formatPhoneNumber(lead.phone)}
                    </a>
                  </TableCell>
                  <TableCell>{getSourceBadge(lead.source)}</TableCell>
                  <TableCell>{getStatusBadge(lead.status)}</TableCell>
                  <TableCell>{new Date(lead.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(lead.updated_at).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => updateLeadStatus(lead.id, "contacted")}
                          className="cursor-pointer"
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          <span>Mark as Contacted</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => updateLeadStatus(lead.id, "converted")}
                          className="cursor-pointer"
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          <span>Mark as Converted</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => updateLeadStatus(lead.id, "not_interested")}
                          className="cursor-pointer"
                        >
                          <X className="mr-2 h-4 w-4" />
                          <span>Mark as Not Interested</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => window.open(`/waitlist?phone=${lead.phone}`, "_blank")}
                          className="cursor-pointer"
                        >
                          <UserPlus className="mr-2 h-4 w-4" />
                          <span>Add to Waitlist</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => deleteLead(lead.id)} className="cursor-pointer text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete Lead</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
