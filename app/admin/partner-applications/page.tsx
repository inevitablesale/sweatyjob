"use client"

import { useState, useEffect } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/lib/supabase/database.types"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { formatDistanceToNow } from "date-fns"

type PartnerApplication = Database["public"]["Tables"]["partner_applications"]["Row"]

export default function PartnerApplicationsPage() {
  const [applications, setApplications] = useState<PartnerApplication[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClientComponentClient<Database>()

  useEffect(() => {
    async function fetchApplications() {
      try {
        const { data, error } = await supabase
          .from("partner_applications")
          .select("*")
          .order("created_at", { ascending: false })

        if (error) {
          throw error
        }

        setApplications(data || [])
      } catch (error) {
        console.error("Error fetching partner applications:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [supabase])

  async function updateApplicationStatus(id: string, status: string) {
    try {
      const { error } = await supabase
        .from("partner_applications")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id)

      if (error) {
        throw error
      }

      // Update local state
      setApplications(applications.map((app) => (app.id === id ? { ...app, status } : app)))
    } catch (error) {
      console.error("Error updating application status:", error)
    }
  }

  function getStatusBadge(status: string) {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-500">Approved</Badge>
      case "rejected":
        return <Badge className="bg-red-500">Rejected</Badge>
      case "contacted":
        return <Badge className="bg-blue-500">Contacted</Badge>
      default:
        return <Badge className="bg-yellow-500">Pending</Badge>
    }
  }

  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>Partner Applications</CardTitle>
          <CardDescription>Review and manage partner applications</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">Loading applications...</div>
          ) : applications.length === 0 ? (
            <div className="text-center py-8">No partner applications found</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Business Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applied</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.map((application) => (
                  <TableRow key={application.id}>
                    <TableCell>
                      {application.first_name} {application.last_name}
                    </TableCell>
                    <TableCell>{application.email}</TableCell>
                    <TableCell>{application.phone}</TableCell>
                    <TableCell>{application.company_name || "—"}</TableCell>
                    <TableCell>{application.business_type || "—"}</TableCell>
                    <TableCell>{getStatusBadge(application.status)}</TableCell>
                    <TableCell>
                      {formatDistanceToNow(new Date(application.created_at), {
                        addSuffix: true,
                      })}
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateApplicationStatus(application.id, "contacted")}
                        >
                          Mark Contacted
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-green-50 hover:bg-green-100"
                          onClick={() => updateApplicationStatus(application.id, "approved")}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-red-50 hover:bg-red-100"
                          onClick={() => updateApplicationStatus(application.id, "rejected")}
                        >
                          Reject
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
