import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import Link from "next/link"

export default async function TestComparisonPage() {
  const supabase = createServerComponentClient({ cookies })

  // Fetch competitors from the database
  const { data: competitors, error } = await supabase.from("competitors").select("*").limit(20)

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Error Loading Competitors</h1>
        <p className="text-red-500">{error.message}</p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Comparison Pages</h1>
      <p className="mb-6">Click on any competitor below to view the comparison page:</p>

      {competitors && competitors.length > 0 ? (
        <div className="grid gap-4">
          {competitors.map((competitor) => {
            const slug = competitor.slug || competitor.title.toLowerCase().replace(/\s+/g, "-")
            const city = competitor.city.toLowerCase().replace(/\s+/g, "-")
            const state = competitor.state.toLowerCase()
            const fullSlug = `${slug}-${city}-${state}`

            return (
              <div key={competitor.id} className="border p-4 rounded-lg">
                <h2 className="font-semibold text-lg">{competitor.title}</h2>
                <p className="text-sm text-gray-600 mb-2">
                  {competitor.city}, {competitor.state}
                </p>
                <div className="flex flex-col gap-2">
                  <Link href={`/compare/${fullSlug}`} className="text-blue-600 hover:underline">
                    View Comparison Page
                  </Link>
                  <div className="text-xs text-gray-500">URL: /compare/{fullSlug}</div>
                </div>
              </div>
            )
          })}
        </div>
      ) : (
        <div className="bg-yellow-100 p-4 rounded-lg">
          <p className="font-medium">No competitors found in the database.</p>
          <p className="mt-2">Please add competitors to your database to test the comparison pages.</p>
        </div>
      )}
    </div>
  )
}
