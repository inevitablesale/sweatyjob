import Link from "next/link"

export function RepairInternalLinks() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Related Lawn Mower Repair Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Lawn Mower Repair Near Me</h3>
            <p className="text-gray-600 mb-4">
              Find the best alternative to lawn mower repair services in Richmond. Our robot mowing service eliminates
              the need for repairs.
            </p>
            <Link href="/repair" className="text-red-600 font-medium hover:underline">
              Learn more about lawn mower repair alternatives →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Mobile Lawn Mower Repair</h3>
            <p className="text-gray-600 mb-4">
              Why wait for mobile repair when you can have a robot that never needs fixing? Our service is better than
              any mobile repair option.
            </p>
            <Link href="/repair#mobile" className="text-red-600 font-medium hover:underline">
              Discover our mobile repair alternative →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-2">Lawn Mower Repair Services</h3>
            <p className="text-gray-600 mb-4">
              Traditional repair services can't compare to our robot mowing solution. Save time and money with our
              service.
            </p>
            <Link href="/repair#services" className="text-red-600 font-medium hover:underline">
              Compare repair services to robot mowing →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
