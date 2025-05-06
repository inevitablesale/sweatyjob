import { createClient } from "@/lib/supabase/server"
import { Star, User, ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function ViewCompetitors() {
  const supabase = createClient()

  // Get competitors with review data
  const { data: competitors, error } = await supabase
    .from("competitors")
    .select("*")
    .not("review_text", "is", null)
    .order("created_at", { ascending: false })
    .limit(50)

  // Get count
  const { count } = await supabase
    .from("competitors")
    .select("*", { count: "exact", head: true })
    .not("review_text", "is", null)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Imported Competitors with Reviews</h1>
          <p className="text-gray-600">
            {count !== null ? `Showing latest 50 of ${count} records` : "Loading records..."}
          </p>
        </div>
        <Link
          href="/import-csv"
          className="flex items-center gap-2 text-sm bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md"
        >
          <ArrowLeft size={16} />
          Back to Import
        </Link>
      </div>

      {error && <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">Error loading data: {error.message}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitors?.map((competitor) => (
          <div key={competitor.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{competitor.title || "Unknown Business"}</h3>
                  <p className="text-sm text-gray-500">
                    {competitor.city}, {competitor.state}
                  </p>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{competitor.review_rating || "N/A"}</span>
                </div>
              </div>
              {competitor.website && (
                <div className="mt-2">
                  <a
                    href={competitor.website.startsWith("http") ? competitor.website : `https://${competitor.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-blue-600 hover:underline"
                  >
                    <ExternalLink size={12} className="mr-1" />
                    {competitor.website}
                  </a>
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-center mb-3">
                <User className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm font-medium">{competitor.reviewer_name || "Anonymous"}</span>
              </div>

              <div className="text-sm text-gray-700 mb-4">{competitor.review_text}</div>

              {competitor.category_name && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {competitor.category_name}
                  </span>
                </div>
              )}

              {competitor.people_also_search && competitor.people_also_search.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <h4 className="text-xs font-medium text-gray-500 mb-2">People also search for:</h4>
                  <div className="space-y-2">
                    {competitor.people_also_search.slice(0, 3).map((related: any, idx: number) => (
                      <div key={idx} className="flex justify-between items-center text-xs">
                        <span className="truncate max-w-[70%]">{related.title}</span>
                        {related.totalScore && (
                          <span className="flex items-center text-gray-600">
                            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 mr-1" />
                            {related.totalScore}
                          </span>
                        )}
                      </div>
                    ))}
                    {competitor.people_also_search.length > 3 && (
                      <div className="text-xs text-gray-500">+{competitor.people_also_search.length - 3} more</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {competitors?.length === 0 && (
          <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No records found with review data. Import some data first.</p>
          </div>
        )}
      </div>
    </div>
  )
}
