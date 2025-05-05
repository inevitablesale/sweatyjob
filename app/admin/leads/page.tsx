import type { Metadata } from "next"
import { LeadsTable } from "@/components/admin/leads-table"

export const metadata: Metadata = {
  title: "Leads Management | SweatyJob Admin",
  description: "Manage phone leads captured from various sources",
}

export default function LeadsPage() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Leads Management</h1>
        <p className="text-muted-foreground mt-2">
          View and manage phone leads captured from yard signs and website forms.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-4">
          <div className="rounded-lg border bg-card">
            <div className="p-6">
              <LeadsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
