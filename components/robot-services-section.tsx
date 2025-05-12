import Link from "next/link"

export function RobotServicesSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Lawn Mowing Service */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-3">Lawn Mowing Service</h3>
            <p className="text-gray-400 mb-6">
              Learn more about our daily robot lawn mowing service and how it can transform your lawn care routine.
            </p>
            <Link href="/robots" className="text-yellow-500 hover:text-yellow-600 font-bold">
              Learn More
            </Link>
          </div>

          {/* Lawn Mower Repair Alternative */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-3">Lawn Mower Repair Alternative</h3>
            <p className="text-gray-400 mb-6">
              Why repair your old mower when you can upgrade to our SmartYard robot mowing service?
            </p>
            <Link href="/repair-alternative" className="text-yellow-500 hover:text-yellow-600 font-bold">
              Learn More
            </Link>
          </div>

          {/* Lawn Weeding Robots */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-3">Lawn Weeding Robots</h3>
            <p className="text-gray-400 mb-6">
              Specialized robots designed to patrol your lawn, identify common weeds like dandelions and crabgrass, and
              precisely target them with minimal herbicide or mechanical removal. Uses up to 90% less chemicals than
              traditional methods.
            </p>
            <Link href="/robots/lawn-weeding-robots" className="text-yellow-500 hover:text-yellow-600 font-bold">
              Learn More
            </Link>
          </div>

          {/* Garden Weeding Robots */}
          <div className="bg-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-3">Garden Weeding Robots</h3>
            <p className="text-gray-400 mb-6">
              Compact, solar-powered robots that navigate between garden rows and flower beds, eliminating weeds without
              damaging your precious plants. Perfect for vegetable gardens, flower beds, and raised planters with no
              chemicals needed.
            </p>
            <Link href="/robots/garden-weeding-robots" className="text-yellow-500 hover:text-yellow-600 font-bold">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
