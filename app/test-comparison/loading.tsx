import { Skeleton } from "@/components/ui/skeleton"

export default function TestComparisonLoading() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-10 w-1/3 mb-6" />
      <Skeleton className="h-6 w-full mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Skeleton className="h-[500px] w-full rounded-lg" />
        <Skeleton className="h-[500px] w-full rounded-lg" />
      </div>

      <div className="mt-6">
        <Skeleton className="h-8 w-full mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Skeleton className="h-[200px] w-full rounded-lg" />
          <Skeleton className="h-[200px] w-full rounded-lg" />
          <Skeleton className="h-[200px] w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
