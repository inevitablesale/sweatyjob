import { getServerSupabaseClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ClipboardList, CreditCard, TrendingUp } from "lucide-react"

export default async function AdminDashboard() {
  const supabase = getServerSupabaseClient()

  // Get counts for dashboard stats
  const [{ count: waitlistCount }, { count: userCount }, { data: recentWaitlist }, { data: recentPayments }] =
    await Promise.all([
      supabase.from("waitlist").select("*", { count: "exact", head: true }),
      supabase.from("profiles").select("*", { count: "exact", head: true }),
      supabase.from("waitlist").select("*").order("created_at", { ascending: false }).limit(5),
      supabase.from("payments").select("*, profiles(email)").order("created_at", { ascending: false }).limit(5),
    ])

  // Calculate total revenue
  const { data: payments } = await supabase.from("payments").select("amount")
  const totalRevenue = payments?.reduce((sum, payment) => sum + payment.amount, 0) || 0

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-night-800 border-night-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm font-medium">Total Waitlist</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-4 rounded-full p-2 bg-blue-500/10">
                <ClipboardList className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{waitlistCount || 0}</div>
                <div className="text-xs text-gray-400">People waiting</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-night-800 border-night-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-4 rounded-full p-2 bg-green-500/10">
                <Users className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{userCount || 0}</div>
                <div className="text-xs text-gray-400">Registered users</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-night-800 border-night-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-4 rounded-full p-2 bg-sweat-500/10">
                <CreditCard className="h-6 w-6 text-sweat-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">${(totalRevenue / 100).toFixed(2)}</div>
                <div className="text-xs text-gray-400">Lifetime revenue</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-night-800 border-night-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-gray-400 text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-4 rounded-full p-2 bg-purple-500/10">
                <TrendingUp className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  {waitlistCount ? (((userCount || 0) / waitlistCount) * 100).toFixed(1) : 0}%
                </div>
                <div className="text-xs text-gray-400">Waitlist to user</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-night-800 border-night-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Waitlist Entries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentWaitlist?.length ? (
                recentWaitlist.map((entry) => (
                  <div key={entry.id} className="flex justify-between items-center p-3 rounded-md bg-night-900">
                    <div>
                      <div className="font-medium text-white">
                        {entry.first_name} {entry.last_name}
                      </div>
                      <div className="text-sm text-gray-400">{entry.email}</div>
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">{entry.status}</div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-400">No waitlist entries yet</div>
              )}

              {recentWaitlist?.length ? (
                <div className="text-center mt-4">
                  <a href="/admin/waitlist" className="text-sweat-500 hover:text-sweat-400 text-sm">
                    View all waitlist entries →
                  </a>
                </div>
              ) : null}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-night-800 border-night-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPayments?.length ? (
                recentPayments.map((payment) => (
                  <div key={payment.id} className="flex justify-between items-center p-3 rounded-md bg-night-900">
                    <div>
                      <div className="font-medium text-white">
                        ${(payment.amount / 100).toFixed(2)} {payment.currency.toUpperCase()}
                      </div>
                      <div className="text-sm text-gray-400">{payment.profiles?.email}</div>
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                      {payment.status}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-4 text-gray-400">No payments yet</div>
              )}

              {recentPayments?.length ? (
                <div className="text-center mt-4">
                  <a href="/admin/payments" className="text-sweat-500 hover:text-sweat-400 text-sm">
                    View all payments →
                  </a>
                </div>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
