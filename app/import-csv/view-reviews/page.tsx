import { createClient } from "@/lib/supabase/server"
import { Star, MessageSquare, User, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function ViewReviews() {
  const supabase = createClient()

  // Get reviews with business info
  const { data: reviews, error } = await supabase
    .from("reviews")
    .select(`
      *,
      competitor:competitor_id (
        title,
        city,
        state
      )
    `)
    .order("created_at", { ascending: false })
    .limit(50)

  // Get review count
  const { count } = await supabase.from("reviews").select("*", { count: "exact", head: true })

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Imported Reviews</h1>
          <p className="text-gray-600">
            {count !== null ? `Showing latest 50 of ${count} reviews` : "Loading reviews..."}
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

      {error && (
        <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">Error loading reviews: {error.message}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews?.map((review) => (
          <div key={review.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{review.competitor?.title || "Unknown Business"}</h3>
                  <p className="text-sm text-gray-500">
                    {review.competitor?.city}, {review.competitor?.state}
                  </p>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="ml-1 text-sm font-medium">{review.stars}</span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center mb-3">
                <User className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-sm font-medium">{review.reviewer_name || "Anonymous"}</span>

                {review.published_at && (
                  <div className="flex items-center ml-auto text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(review.published_at).toLocaleDateString()}
                  </div>
                )}
              </div>

              <div className="text-sm text-gray-700 mb-4">{review.review_text}</div>

              {review.response_from_owner_text && (
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center mb-2">
                    <MessageSquare className="h-3 w-3 text-gray-400 mr-2" />
                    <span className="text-xs font-medium">Owner Response</span>
                  </div>
                  <p className="text-xs text-gray-600">{review.response_from_owner_text}</p>
                </div>
              )}
            </div>
          </div>
        ))}

        {reviews?.length === 0 && (
          <div className="col-span-full text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-gray-500">No reviews found. Import some reviews first.</p>
          </div>
        )}
      </div>
    </div>
  )
}
