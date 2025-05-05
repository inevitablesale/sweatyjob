import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function RepairRelatedContent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lawn Mower Repair Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore these resources about lawn mower repair and our robot mowing alternative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Lawn Mower Repair vs. Robot Mowing</h3>
              <p className="text-gray-600 mb-4">
                Compare the costs and benefits of traditional lawn mower repair with our innovative robot mowing
                service.
              </p>
              <Link
                href="/blog/lawn-mower-repair-vs-robot-mowing"
                className="flex items-center text-red-600 font-medium hover:underline"
              >
                Read the comparison <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Common Lawn Mower Problems</h3>
              <p className="text-gray-600 mb-4">
                Learn about the most common lawn mower issues and how our robot mowing service eliminates these
                problems.
              </p>
              <Link
                href="/blog/common-lawn-mower-problems"
                className="flex items-center text-red-600 font-medium hover:underline"
              >
                Discover the solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3">Lawn Mower Repair Shops in Richmond</h3>
              <p className="text-gray-600 mb-4">
                Why visit repair shops when you can have a maintenance-free robot mower? See how we compare to local
                shops.
              </p>
              <Link
                href="/blog/lawn-mower-repair-shops-richmond"
                className="flex items-center text-red-600 font-medium hover:underline"
              >
                See the comparison <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
