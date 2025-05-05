import { getServerSupabaseClient } from "@/lib/supabase/server"
import { UsersTable } from "@/components/admin/users-table"

export default async function AdminUsers({
  searchParams,
}: {
  searchParams: { page?: string; subscription?: string; search?: string }
}) {
  const supabase = getServerSupabaseClient()
  const page = Number.parseInt(searchParams.page || "1")
  const pageSize = 10
  const subscriptionFilter = searchParams.subscription || ""
  const searchQuery = searchParams.search || ""

  // Build query
  let query = supabase.from("profiles").select("*", { count: "exact" })

  // Apply filters
  if (subscriptionFilter) {
    query = query.eq("subscription_status", subscriptionFilter)
  }

  if (searchQuery) {
    query = query.or(`first_name.ilike.%${searchQuery}%,last_name.ilike.%${searchQuery}%,email.ilike.%${searchQuery}%`)
  }

  // Get paginated results
  const from = (page - 1) * pageSize
  const to = from + pageSize - 1

  const { data: users, count } = await query.order("created_at", { ascending: false }).range(from, to)

  // Get subscription status options for filter
  const { data: subscriptionOptions } = await supabase
    .from("profiles")
    .select("subscription_status")
    .not("subscription_status", "is", null)
    .distinct()

  const totalPages = count ? Math.ceil(count / pageSize) : 0

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">User Management</h1>

      <UsersTable
        users={users || []}
        totalPages={totalPages}
        currentPage={page}
        subscriptionOptions={
          (subscriptionOptions?.map((item) => item.subscription_status).filter(Boolean) as string[]) || []
        }
        subscriptionFilter={subscriptionFilter}
        searchQuery={searchQuery}
      />
    </div>
  )
}
