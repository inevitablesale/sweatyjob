import { getServerSupabaseClient } from "@/lib/supabase/server"
import { WaitlistTable } from "@/components/admin/waitlist-table"

export default async function AdminWaitlist({
  searchParams,
}: {
  searchParams: { page?: string; status?: string; search?: string }
}) {
  const supabase = getServerSupabaseClient()
  const page = Number.parseInt(searchParams.page || "1")
  const pageSize = 10
  const statusFilter = searchParams.status || ""
  const searchQuery = searchParams.search || ""

  // Build query
  let query = supabase.from("waitlist").select("*", { count: "exact" })

  // Apply filters
  if (statusFilter) {
    query = query.eq("status", statusFilter)
  }

  if (searchQuery) {
    query = query.or(
      `first_name.ilike.%${searchQuery}%,last_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%,address.ilike.%${searchQuery}%`,
    )
  }

  // Get paginated results
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1

  const { data: waitlist, count } = await query.order("created_at", { ascending: false }).range(from, to)

  // Get status options for filter
  const { data: statusOptions } = await supabase.from("waitlist").select("status").distinct()

  const totalPages = count ? Math.ceil(count / pageSize) : 0

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Waitlist Management</h1>

      <WaitlistTable
        waitlist={waitlist || []}
        totalPages={totalPages}
        currentPage={page}
        statusOptions={statusOptions?.map((item) => item.status) || []}
        statusFilter={statusFilter}
        searchQuery={searchQuery}
      />
    </div>
  )
}
