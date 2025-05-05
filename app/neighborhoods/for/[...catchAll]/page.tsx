import { redirect } from "next/navigation"

export default function ForCatchAllPage({ params }: { params: { catchAll: string[] } }) {
  // If the first segment is "pros", redirect to /for-pros
  if (params.catchAll[0] === "pros") {
    // Join the remaining segments if any
    const remainingPath = params.catchAll.slice(1).join("/")
    const redirectPath = remainingPath ? `/for-pros/${remainingPath}` : "/for-pros"
    redirect(redirectPath)
  }

  // Otherwise, return 404
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="mt-4">The page you're looking for doesn't exist.</p>
    </div>
  )
}
