import { getServerSupabaseClient } from "@/lib/supabase/server"
import { PaymentsTable } from "@/components/admin/payments-table"

export default async function AdminPayments({
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
  let query = supabase.from("payments").select("*, profiles!inner(email, first_name, last_name)", { count: "exact" })

  // Apply filters
  if (statusFilter) {
    query = query.eq("status", statusFilter)
  }

  if (searchQuery) {
    query = query.or(
      `profiles.email.ilike.%${searchQuery}%,profiles.first_name.ilike.%${searchQuery}%,profiles.last_name.ilike.%${searchQuery}%`,
    )
  }

  // Get paginated results
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1

  const { data: payments, count } = await query.order("created_at", { ascending: false }).range(from, to)

  // Get status options for filter
  const { data: statusOptions } = await supabase.from("payments").select("status").distinct()

  const totalPages = count ? Math.ceil(count / pageSize) : 0

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Payment Management</h1>

      <PaymentsTable
        payments={payments || []}
        totalPages={totalPages}
        currentPage={page}
        statusOptions={statusOptions?.map((item) => item.status) || []}
        statusFilter={statusFilter}
        searchQuery={searchQuery}
      />
    </div>
  )
}
