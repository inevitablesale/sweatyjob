import { neighborhoods } from "../index"
import { notFound } from "next/navigation"
import NeighborhoodPageClient from "./NeighborhoodPageClient"
import Link from "next/link"

// Make sure this function is properly exporting all neighborhood slugs
export function generateStaticParams() {
  return neighborhoods.map((neighborhood) => ({
    neighborhood: neighborhood.slug,
  }))
}

// Change this to false to prevent dynamic params that aren't in the list
export const dynamicParams = false

export default function NeighborhoodPage({ params }: { params: { neighborhood: string } }) {
  // Make sure we have a valid neighborhood object
  const neighborhood = neighborhoods.find((n) => n.slug === params.neighborhood)

  if (!neighborhood) {
    notFound()
  }

  return (
    <>
      <NeighborhoodPageClient neighborhood={neighborhood} params={params} />
      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Local Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Lawn Mower Repair Near {neighborhood.name}</h3>
            <p className="text-gray-600 mb-4">
              Looking for lawn mower repair in {neighborhood.name}? Try our robot mowing service instead and never worry
              about repairs again.
            </p>
            <Link
              href={`/neighborhoods/${neighborhood.slug}/repair`}
              className="text-green-600 font-medium hover:underline"
            >
              Learn more →
            </Link>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Robot Mowing in {neighborhood.name}</h3>
            <p className="text-gray-600 mb-4">
              Our robot mowing service is available in {neighborhood.name}. Get a perfectly maintained lawn without the
              hassle of repairs or maintenance.
            </p>
            <Link href="/purchase/smart-yard" className="text-green-600 font-medium hover:underline">
              Get started →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
