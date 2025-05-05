import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, X, MapPin, Phone, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "STOP WASTING MONEY ON LAWN MOWER REPAIR | Richmond's Robot Alternative",
  description:
    "Lawn mower repair is DEAD. Why spend $250 on fixing old tech when you can get daily mowing for $79/month? No repairs. No BS. Just results. Richmond's #1 robot mowing service.",
  keywords:
    "lawn mower repair near me, lawn mower repair service, lawn mower repair shop, mobile lawn mower repair, Richmond VA",
}

const repairFAQs = [
  {
    question: "How much does lawn mower repair typically cost?",
    answer:
      "The average person spends $80-$250 PER REPAIR. That's insane! With our robot mowing service, you pay $79/month TOTAL. No hidden fees. No surprise costs. Just perfect grass every single day.",
  },
  {
    question: "Where can I find lawn mower repair shops near me in Richmond?",
    answer:
      "Look, you could waste your time driving to repair shops all over Richmond, OR you could spend 2 minutes signing up for our service and never think about lawn mower repairs again. Your choice.",
  },
  {
    question: "Do you offer mobile lawn mower repair near me?",
    answer:
      "We offer something 100X BETTER. Instead of fixing your broken mower, we replace the entire concept with a robot that works every day. If anything ever happens to it, we fix or replace it immediately at ZERO cost to you.",
  },
  {
    question: "What lawn mower repair services do you provide?",
    answer:
      "We don't repair lawn mowers because that's YESTERDAY'S SOLUTION. We provide the future: a complete robot mowing service that eliminates the need to own, maintain, or repair any lawn equipment. It's $79/month for daily mowing. That's it.",
  },
  {
    question: "How does your service compare to lawn mower repair and service near me?",
    answer:
      "Repair shops fix what's already broken. We PREVENT the problem entirely. Our robots mow your lawn every day, rain or shine. If anything happens to the robot, we handle it immediately. No waiting. No extra costs. No headaches.",
  },
]

// Richmond neighborhoods for internal linking
const neighborhoods = [
  { name: "The Fan", slug: "the-fan" },
  { name: "Church Hill", slug: "church-hill" },
  { name: "Carytown", slug: "carytown" },
  { name: "Bellevue", slug: "bellevue" },
  { name: "Battery Park", slug: "battery-park" },
  { name: "Forest Hill", slug: "forest-hill" },
  { name: "Ginter Park", slug: "ginter-park" },
  { name: "Museum District", slug: "museum-district" },
]

export default function LawnMowerRepairPage() {
  return (
    <div>
      {/* Hero Section - Gary V Style */}
      <section className="py-12 md:py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-1 mb-4 uppercase tracking-wider">
                The Hard Truth
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                LAWN MOWER REPAIR IS <span className="text-red-600">DEAD.</span> ROBOT MOWING IS THE FUTURE.
              </h1>
              <p className="text-xl mb-8 font-medium">
                Why spend $250 fixing old tech when you can get DAILY mowing for just $79/month? No repairs. No BS. Just
                results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg">SAVE $150-300/year on repair costs</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg">Your lawn gets cut EVERY DAY, not just when your mower works</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg">ZERO maintenance headaches - we handle EVERYTHING</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-lg">$79/month FLAT FEE - no surprise costs ever</span>
                </div>
              </div>
              <div>
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg h-14 px-8">
                  <Link href="/purchase/smart-yard">GET STARTED NOW</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl border-4 border-red-600">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/robot-mower-in-action-cCcyAbdw1Zfz3UQ5FQSyM12UoF26O9.png"
                alt="Robot lawn mower in action - the future of lawn care"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <p className="text-2xl font-bold">"This isn't just a service. It's the future of lawn care."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">SEE THE ROBOT IN ACTION</h2>
            <p className="text-xl max-w-3xl mx-auto">
              This isn't some gimmick. This is REAL technology that's changing how people think about lawn care.
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-2 border-red-600">
            <video controls autoPlay muted loop className="w-full aspect-video" poster="/robot-mower-in-action.png">
              <source
                src="https://www.bestmow.com/cdn/shop/videos/c/vp/ba17ef3bb46248c0bd06d0c5bbfcae71/ba17ef3bb46248c0bd06d0c5bbfcae71.HD-720p-2.1Mbps-42938267.mp4?v=0"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg font-medium">
              Our robots work EVERY DAY while repair shops keep you waiting for WEEKS.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section - Gary V Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">THE TRUTH ABOUT LAWN MOWER REPAIR</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-800">
              Let's be real about what you're actually getting when you repair your mower vs. our robot service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-500 border-2 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-red-600 flex items-center">
                  <X className="h-8 w-8 mr-3" />
                  OLD WAY: REPAIR SHOPS
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <X className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">You pay $80-$250 PER REPAIR (multiple times per year)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">Your mower sits in a shop for DAYS or WEEKS</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">YOU still have to change oil, filters, spark plugs</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">YOU still pay for gas (prices keep rising)</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">YOU still waste hours every week mowing</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-6 w-6 text-red-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">YOU still have to haul your mower to the shop</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-500 border-2 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-green-600 flex items-center">
                  <Check className="h-8 w-8 mr-3" />
                  NEW WAY: ROBOT SERVICE
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">Just $79/month FLAT RATE - EVERYTHING included</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">Your lawn gets cut EVERY SINGLE DAY</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">WE handle ALL maintenance and repairs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">ZERO gas costs - 100% electric</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">ZERO effort - completely automated</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg">ZERO trips to repair shops needed</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Service Areas - Gary V Style */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">WE'RE IN YOUR NEIGHBORHOOD</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-800">
              Looking for lawn mower repair near you? We're already serving these Richmond neighborhoods with our robot
              alternative.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {neighborhoods.map((neighborhood, index) => (
              <Link
                key={index}
                href={`/neighborhoods/${neighborhood.slug}/repair`}
                className="bg-gray-100 hover:bg-gray-200 transition-colors p-6 rounded-lg text-center shadow-md"
              >
                <MapPin className="h-8 w-8 mx-auto mb-3 text-red-600" />
                <span className="font-bold text-lg text-gray-800">{neighborhood.name}</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-black text-black hover:bg-black hover:text-white"
            >
              <Link href="/neighborhoods">SEE ALL SERVICE AREAS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section - Gary V Style */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">STRAIGHT ANSWERS. NO BS.</h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-800">
              You've got questions about lawn mower repair. We've got better answers.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {repairFAQs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">READY TO DITCH REPAIR SHOPS FOREVER?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Stop throwing money at fixing old technology. Join the robot revolution today for just $79/month.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-black text-white hover:bg-gray-900 text-lg h-14 px-8">
              <Link href="/purchase/smart-yard">
                GET YOUR ROBOT TODAY <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white bg-white text-red-600 hover:bg-white hover:text-red-700 text-lg h-14 px-8 font-bold"
            >
              <Link href="/neighborhoods">CHECK YOUR NEIGHBORHOOD</Link>
            </Button>
          </div>
          <div className="mt-8 text-white/90 flex justify-center items-center gap-6">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
              <span className="font-medium">(804) 573-9825</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
              <span>Mon-Sat: 8am-6pm</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Gary V Style */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">STOP REPAIRING. START UPGRADING. GET YOUR ROBOT TODAY.</h2>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg h-14 px-8">
              <Link href="/purchase/smart-yard">GET STARTED</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
