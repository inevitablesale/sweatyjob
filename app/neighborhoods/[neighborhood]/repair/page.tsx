import { neighborhoods } from "../../index"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, MapPin } from "lucide-react"
import Image from "next/image"

export function generateStaticParams() {
  return neighborhoods.map((neighborhood) => ({
    neighborhood: neighborhood.slug,
  }))
}

export const dynamicParams = false

export default function NeighborhoodRepairPage({ params }: { params: { neighborhood: string } }) {
  const neighborhood = neighborhoods.find((n) => n.slug === params.neighborhood)

  if (!neighborhood) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-sm breadcrumbs mb-6">
        <ul className="flex items-center space-x-2 text-gray-600">
          <li>
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <Link href="/neighborhoods" className="hover:text-gray-900">
              Neighborhoods
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <Link href={`/neighborhoods/${neighborhood.slug}`} className="hover:text-gray-900">
              {neighborhood.name}
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">Lawn Mower Repair</span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-6 text-gray-900">
            Lawn Mower Repair in {neighborhood.name}: A Better Alternative
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            Tired of expensive lawn mower repairs in {neighborhood.name}? Our robot mowing service eliminates the need
            for repairs altogether. Get a perfectly maintained lawn every day for just $79/month.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">No More Repair Costs</h3>
                <p className="text-gray-700">
                  Residents in {neighborhood.name} save an average of $200-300 per year on lawn mower repairs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Daily Mowing</h3>
                <p className="text-gray-700">
                  Your {neighborhood.name} lawn will look perfect every day, not just when your mower is working.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Local Service</h3>
                <p className="text-gray-700">
                  We're already serving many of your neighbors in {neighborhood.name} with our robot mowing service.
                </p>
              </div>
            </div>
          </div>
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/purchase/smart-yard">Get Started Today</Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/robot-mower-in-action.png"
            alt={`Robot lawn mower in ${neighborhood.name}, Richmond VA`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Why {neighborhood.name} Residents Are Switching to Robot Mowing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Time Savings</h3>
            <p className="text-gray-700">
              {neighborhood.name} homeowners save an average of 4 hours per week by switching to our robot mowing
              service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Cost Effective</h3>
            <p className="text-gray-700">
              No more spending $80-250 on repairs at local shops. Our flat monthly fee covers everything.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Eco-Friendly</h3>
            <p className="text-gray-700">
              Our electric robots reduce emissions in {neighborhood.name}, helping keep our community green.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Lawn Mower Repair Shops Near {neighborhood.name}</h2>
        <p className="text-lg mb-6 text-gray-700">
          Looking for lawn mower repair in {neighborhood.name}? Before you spend money fixing your old mower, consider a
          better alternative.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Traditional Repair Shops</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span>Average wait time: 1-2 weeks</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span>Average repair cost: $150</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span>You still have to mow your own lawn</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span>Ongoing maintenance costs</span>
              </li>
            </ul>
          </div>
          <div className="border border-green-200 bg-green-50 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-green-800">Our Robot Alternative</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Same-day service in {neighborhood.name}</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>$79/month flat fee - no surprise costs</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Your lawn gets mowed automatically</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Zero maintenance for you</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
            <Link href="/purchase/smart-yard">Switch to Robot Mowing Today</Link>
          </Button>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">How does robot mowing work in {neighborhood.name}?</h3>
            <p className="text-gray-700">
              Our technicians install a boundary wire around your lawn in {neighborhood.name}. The robot stays within
              this boundary, mowing daily to keep your grass at the perfect height.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">What if the robot breaks down?</h3>
            <p className="text-gray-700">
              Unlike traditional mowers that you have to repair yourself, we monitor and maintain the robot. If there's
              ever an issue, we'll fix or replace it at no additional cost to you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Is robot mowing safe for pets and children?</h3>
            <p className="text-gray-700">
              Our robots have advanced safety sensors that detect obstacles and immediately stop the blades. They're
              much safer than traditional mowers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
