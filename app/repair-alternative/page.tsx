import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export const metadata: Metadata = {
  title: "Lawn Mower Repair Alternative | Robot Mowing Service | Richmond VA",
  description:
    "Skip the lawn mower repair hassle. Our robot mowing service is the perfect alternative to lawn mower repair in Richmond, VA. No repairs, no maintenance, just perfect lawns.",
  keywords: "lawn mower repair near me, lawn mower repair alternative, robot lawn mowing, Richmond VA",
}

const repairFAQs = [
  {
    question: "How much does lawn mower repair typically cost?",
    answer:
      "Lawn mower repairs typically cost between $80-$250 depending on the issue. With our robot mowing service, you'll never pay for repairs again - just one simple monthly fee.",
  },
  {
    question: "Is robot mowing really an alternative to lawn mower repair?",
    answer:
      "Yes! Instead of constantly repairing your old mower, our robot mowing service eliminates the need for you to own, maintain, or repair any lawn equipment. We handle everything for just $79/month.",
  },
  {
    question: "How quickly can you start service compared to lawn mower repair?",
    answer:
      "While lawn mower repairs can take days or weeks, we can often install your robot mower within 24-48 hours, getting your lawn back to perfect condition immediately.",
  },
  {
    question: "What happens if the robot mower needs repair?",
    answer:
      "That's the beauty of our service - if anything ever happens to the robot mower, we repair or replace it at no additional cost to you. You never have to worry about repairs again.",
  },
  {
    question: "How does the cost compare to regular lawn mower repairs?",
    answer:
      "The average homeowner spends $150-300 per year on lawn mower maintenance and repairs. Our $79/month service includes all maintenance and repairs, plus daily mowing - making it more cost-effective in the long run.",
  },
]

export default function RepairAlternativePage() {
  return (
    <div>
      <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-green-600">Stop Repairing</span> Your Lawn Mower
              </h1>
              <p className="text-xl mb-8 text-gray-700">
                Tired of constant lawn mower repairs in Richmond? Switch to our robot mowing service and never worry
                about repairs, gas, or maintenance again.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>No more repair costs or hassles</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Daily mowing for a perfect lawn</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>All maintenance included</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Just $79/month - less than typical repairs</span>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="mr-4">
                  <Link href="/get-started">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/pricing">See Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/broken-vs-robot-mower.png"
                alt="Broken lawn mower vs robot mower"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Robot Mowing Over Repairs?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how our robot mowing service compares to the endless cycle of lawn mower repairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center">
                  <X className="h-6 w-6 mr-2" />
                  Traditional Lawn Mower Repairs
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mt-1 mr-3" />
                    <span>Average repair costs: $80-$250 per visit</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mt-1 mr-3" />
                    <span>Waiting days or weeks for repairs</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mt-1 mr-3" />
                    <span>Ongoing maintenance costs (oil, filters, spark plugs)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mt-1 mr-3" />
                    <span>Gas/fuel expenses</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mt-1 mr-3" />
                    <span>Your time and effort mowing</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mt-1 mr-3" />
                    <span>Storage space required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6 text-green-600 flex items-center">
                  <Check className="h-6 w-6 mr-2" />
                  SweatyJob Robot Mowing Service
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <span>Just $79/month - all inclusive</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <span>Daily mowing - always perfect</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <span>All maintenance and repairs included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <span>No gas or emissions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <span>Zero effort - completely automated</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-1 mr-3" />
                    <span>Compact, discreet charging station</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Common Lawn Mower Problems You'll Never Face Again</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Say goodbye to these frustrating lawn mower repair issues forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Carburetor Issues</h3>
                <p className="text-gray-600">
                  No more clogged carburetors or fuel system problems. Our electric robot mowers have no carburetors to
                  clean or replace.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Starter Problems</h3>
                <p className="text-gray-600">
                  Forget pull cords that won't engage or electric starters that fail. Robot mowers start automatically
                  on schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Spark Plug Failures</h3>
                <p className="text-gray-600">
                  No spark plugs means no fouled plugs to replace or gaps to adjust. Electric motors run clean and
                  efficient.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Oil Leaks</h3>
                <p className="text-gray-600">
                  Robot mowers don't use oil, so you'll never have to deal with messy oil changes or leaking seals
                  again.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Air Filter Maintenance</h3>
                <p className="text-gray-600">
                  No air filters to clean or replace means one less maintenance task to worry about.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Belt & Drive Issues</h3>
                <p className="text-gray-600">
                  Our robot mowers use direct drive systems with fewer moving parts, eliminating belt replacements and
                  adjustments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              People who've switched from traditional lawn mower repairs to our robot mowing service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "After spending $200 on lawn mower repairs last summer, I switched to SweatyJob's robot mowing
                  service. It's been 6 months with zero issues and my lawn looks better than ever!"
                </p>
                <p className="font-semibold">- Michael T., Richmond</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "My old mower was constantly breaking down. The $79/month for robot mowing is actually saving me money
                  when I factor in all the repair costs and my time. Plus, I love coming home to a freshly cut lawn
                  every day."
                </p>
                <p className="font-semibold">- Sarah K., Bellevue</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  "I was about to spend $350 on a new lawn mower when I discovered SweatyJob. Best decision ever! No
                  more repairs, no more gas, and my lawn looks amazing. The robot even mows in the rain when I
                  wouldn't!"
                </p>
                <p className="font-semibold">- David L., Battery Park</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about switching from lawn mower repairs to robot mowing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {repairFAQs.map((faq, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Stop Worrying About Lawn Mower Repairs?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of Richmond homeowners who've switched to our robot mowing service. Just $79/month for a
            perfectly maintained lawn - no repairs, no hassle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/purchase/smart-yard">Get Started Today</Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
