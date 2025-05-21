import type { Metadata } from "next"
import Image from "next/image"
import { CheckCircle2, Shield, Clock, Zap, Award, ArrowRight, DollarSign, Percent } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Update the metadata with voice search optimization
export const metadata: Metadata = {
  title: "Property Management Lawn Care | The US's #1 Robot Mowing Service for Realtors",
  description:
    "United State's top robot lawn mowing service for realtors and property managers. No contracts, cancel anytime, perfect for listings and rental properties. $250/month.",
  keywords:
    "realtor lawn service, property management lawn care, robot lawn mowing, real estate lawn care, listing preparation, rental property maintenance",
}

export default function RealtorPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Hero Section - Gary V Style */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="bg-yellow-500 text-black text-sm font-bold px-3 py-1 inline-block mb-4 rounded">
                  ATTENTION REALTORS, BUSINESS OWNERS & PROPERTY MANAGERS
                </div>
                {/* Gary V-style headline - direct, bold, value-focused */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight text-white">
                  STOP WASTING TIME & MONEY ON LAWN CARE.{" "}
                  <span className="text-yellow-500">START CLOSING MORE DEALS.</span>
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl font-bold mt-6">
                  Your properties need perfect lawns. But traditional lawn services are unreliable, expensive, and a
                  massive headache to manage. Our SmartYard robot mowing service is the solution you've been waiting
                  for.
                </p>
              </div>

              {/* Gary V-style CTA - urgent, direct, with clear value proposition */}
              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-500 mt-6">
                <h2 className="text-2xl font-black mb-2">THE BRUTAL TRUTH:</h2>
                <p className="text-gray-300 mb-4">
                  Every day your listings have overgrown lawns, you're losing money. Every hour you spend coordinating
                  lawn care is an hour you could be closing deals. It's time to solve this problem once and for all.
                </p>
                <div className="w-full max-w-md space-y-2">
                  <Link href="/purchase/smart-yard" className="w-full">
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-black py-6">
                      GET YOUR TIME BACK NOW <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://www.bestmow.com/cdn/shop/files/20250214-165544_ac820ecc-ef58-4def-bda6-a5a2dfe8df80.jpg?v=1743403982"
                alt="Robot lawn mower maintaining a perfectly cut lawn at a rental property"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-yellow-500 text-black p-3 font-black text-lg rounded">
                PERFECT LAWNS. ZERO EFFORT. $250/MONTH.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section - Gary V Style */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              WHY <span className="text-yellow-500">SMART REALTORS</span> ARE SWITCHING TO ROBOT MOWING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">TIME = MONEY</h3>
              <p className="text-gray-300">
                Stop wasting hours coordinating lawn care. Our robots work 24/7 while you focus on closing deals and
                growing your business.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">CLOSE FASTER</h3>
              <p className="text-gray-300">
                Properties with perfect lawns sell faster and for more money. Period. Our robots ensure your listings
                always look their absolute best.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Percent className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">MASSIVE ROI</h3>
              <p className="text-gray-300">
                $250/month for perfect lawns + more closed deals + happier clients = the best investment you'll make this
                year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zero Results Guarantee Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="inline-flex items-center justify-center p-2 bg-yellow-500/10 rounded-full mb-2">
              <Shield className="h-6 w-6 text-yellow-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              THE <span className="text-yellow-500">NO-BS GUARANTEE</span>
            </h2>
            <p className="max-w-[800px] text-gray-300 text-xl">
              Real estate is complicated enough. Your lawn care shouldn't be.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500/20 p-2 rounded-full mr-3">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Perfect Results, Every Time</h3>
              </div>
              <p className="text-gray-300">
                If you're not 100% satisfied with the lawn's appearance, we'll send a human crew to fix it at no
                additional cost. No questions asked.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500/20 p-2 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">No Scheduling Headaches</h3>
              </div>
              <p className="text-gray-300">
                Our AI mowers work autonomously. No more chasing down unreliable lawn crews or coordinating with tenants
                for property access.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500/20 p-2 rounded-full mr-3">
                  <Zap className="h-5 w-5 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Instant Activation/Deactivation</h3>
              </div>
              <p className="text-gray-300">
                Need to start or stop service between tenants? One text message is all it takes. No contracts, no
                cancellation fees, no hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Gary V Style */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-yellow-500">STRAIGHT-UP</span> PRICING
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">No hidden fees. No BS. Just results.</p>
          </div>

          {/* Subscription Box - Gary V Style */}
          <div className="mx-auto max-w-3xl border-2 border-yellow-500 rounded-xl overflow-hidden">
            <div className="bg-yellow-500 py-4">
              <h3 className="text-2xl font-black text-black text-center">PROPERTY MANAGEMENT SUBSCRIPTION</h3>
            </div>
            <div className="bg-black p-8">
              <div className="flex flex-col mb-6">
                <div className="text-center mb-4">
                  <span className="text-5xl font-black text-white">$250</span>
                  <span className="text-xl text-gray-300">/month per property</span>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-bold mb-4 text-yellow-500">WHAT YOU ACTUALLY GET:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-200">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>SmartYard T100 robot mower</span>
                    </li>
                    <li className="flex items-center text-gray-200">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>Daily lawn maintenance (not weekly like the other guys)</span>
                    </li>
                    <li className="flex items-center text-gray-200">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>All maintenance & repairs included</span>
                    </li>
                    <li className="flex items-center text-gray-200">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>Cancel anytime with no penalties</span>
                    </li>
                    <li className="flex items-center text-gray-200">
                      <CheckCircle2 className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>No cost if equipment is stolen</span>
                    </li>
                  </ul>
                </div>
                <Link href="/purchase/smart-yard" className="w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-black py-6">
                    START WINNING NOW <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Installation */}
          <div className="mx-auto max-w-3xl mt-6 bg-gray-900 rounded-lg p-6 border border-gray-700">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center">
                <div className="bg-gray-800 p-3 rounded-full mr-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-500"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">PROFESSIONAL INSTALLATION</h3>
                  <p className="text-gray-400">One-time setup by our technicians</p>
                </div>
              </div>
              <div className="text-center md:text-right mt-4 md:mt-0">
                <div className="text-3xl font-bold text-white">$100</div>
                <p className="text-gray-500">One-time fee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section - Gary V Style */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-flex items-center justify-center p-2 bg-yellow-500/10 rounded-full mb-2">
              <Award className="h-6 w-6 text-yellow-500" />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl md:text-5xl font-black text-white">
                THE <span className="text-yellow-500">REAL COMPARISON</span>
              </h2>
              <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed">
                Let's cut through the noise and see what you're ACTUALLY getting.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* DIY Column */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-gray-700">
              <div className="bg-gradient-to-r from-gray-800 to-gray-700 p-4">
                <h3 className="text-xl font-bold text-white text-center">DIY (TENANT RESPONSIBILITY)</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mr-4">
                    <DollarSign className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Monthly Cost</p>
                    <p className="text-lg text-white font-bold">$0 direct cost</p>
                    <p className="text-xs text-gray-400">Higher tenant turnover cost</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-red-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Reliability</p>
                    <p className="text-lg text-white font-bold">Low</p>
                    <p className="text-xs text-gray-400">Depends on tenant compliance</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-red-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Your Time Investment</p>
                    <p className="text-lg text-white font-bold">High</p>
                    <p className="text-xs text-gray-400">Constant follow-up & complaints</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-red-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Curb Appeal</p>
                    <p className="text-lg text-white font-bold">Poor</p>
                    <p className="text-xs text-gray-400">Inconsistent & unprofessional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Traditional Lawn Service Column */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-gray-700">
              <div className="bg-gradient-to-r from-amber-800/40 to-amber-700/40 p-4">
                <h3 className="text-xl font-bold text-white text-center">TRADITIONAL LAWN SERVICE</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mr-4">
                    <DollarSign className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Monthly Cost</p>
                    <p className="text-lg text-white font-bold">$260-$400</p>
                    <p className="text-xs text-gray-400">Per property</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-amber-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 16v.01" />
                      <path d="M12 8v4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Reliability</p>
                    <p className="text-lg text-white font-bold">Medium</p>
                    <p className="text-xs text-gray-400">Subject to crew availability</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-amber-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 16v.01" />
                      <path d="M12 8v4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Your Time Investment</p>
                    <p className="text-lg text-white font-bold">Medium</p>
                    <p className="text-xs text-gray-400">Scheduling and quality control</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-amber-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 16v.01" />
                      <path d="M12 8v4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Curb Appeal</p>
                    <p className="text-lg text-white font-bold">Good</p>
                    <p className="text-xs text-gray-400">When they actually show up</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SmartYard AI Mowers Column */}
            <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-yellow-500 shadow-lg shadow-yellow-500/10 relative transition-all duration-300 hover:shadow-yellow-500/20">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black py-1 px-3 font-bold text-sm">WINNER</div>
              <div className="bg-gradient-to-r from-yellow-500/40 to-yellow-400/40 p-4">
                <h3 className="text-xl font-bold text-white text-center">SMARTYARD ROBOT MOWING</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <DollarSign className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Monthly Cost</p>
                    <p className="text-lg text-white font-bold">$250 per acre</p>
                    <p className="text-xs text-gray-400">All-inclusive</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-yellow-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Reliability</p>
                    <p className="text-lg text-white font-bold">Exceptional</p>
                    <p className="text-xs text-gray-400">Automated daily service</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-yellow-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Your Time Investment</p>
                    <p className="text-lg text-white font-bold">Zero</p>
                    <p className="text-xs text-gray-400">Set it and forget it</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-yellow-500"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium">Curb Appeal</p>
                    <p className="text-lg text-white font-bold">Perfect</p>
                    <p className="text-xs text-gray-400">Daily precision cutting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/purchase/smart-yard">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-black px-8 py-6 rounded-md"
              >
                MAKE THE SMART CHOICE <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works - Gary V Style */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              HOW IT <span className="text-yellow-500">ACTUALLY WORKS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No complicated BS. We make it simple. Here's the process:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                1
              </div>
              <div className="bg-gray-900 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">QUICK SETUP</h3>
                <p className="text-gray-300">
                  We install the system in under 2 hours. One-time $100 fee. We handle everything.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                2
              </div>
              <div className="bg-gray-900 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">SET & FORGET</h3>
                <p className="text-gray-300">
                  Your robot mower works automatically. You control everything from a simple app if you want to.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                3
              </div>
              <div className="bg-gray-900 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">CLOSE MORE DEALS</h3>
                <p className="text-gray-300">
                  Reclaim your time, impress clients with perfect lawns, and focus on what actually makes you money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Gary V Style */}
      <section className="py-16 bg-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">STOP WASTING YOUR TIME</h2>
            <p className="text-2xl mb-8 text-black/80 font-bold">
              Join other real estate professionals who've already made the switch.
            </p>

            <Link href="/purchase/smart-yard">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-900 text-yellow-500 text-xl font-black px-8 py-6 rounded-md"
              >
                GET YOUR SMARTYARD NOW <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="mt-6 text-black/80 font-bold">
              Limited spots available this month. Don't miss out.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Gary V Style */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              COMMON <span className="text-yellow-500">QUESTIONS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Get the straight answers you need.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">How quickly can you set up service for a new property?</h3>
              <p className="text-gray-300">
                We can typically set up service within 48-72 hours of your request. For property management companies
                with multiple properties, we can create a rollout schedule to efficiently deploy across your portfolio.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">What happens when the property sells?</h3>
              <p className="text-gray-300">
                Simply notify us, and we'll schedule a time to pick up the equipment. You can also offer the new
                homeowners the option to continue the service, which can be an attractive selling point. Many new
                homeowners choose to continue the service after experiencing the convenience.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">
                Do you offer special rates for realtors with multiple listings?
              </h3>
              <p className="text-gray-300">
                Yes, we offer discounted rates for realtors with multiple listings. We also have a referral program that
                provides credits toward your active services when you refer other realtors or homeowners. Contact us for
                details on our realtor partnership packages.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold mb-3">Can you coordinate service with my professional photographer?</h3>
              <p className="text-gray-300">
                We can schedule a fresh mow before your professional photography session to ensure the lawn looks
                perfect in listing photos. Just let us know the photography date at least 48 hours in advance, and we'll
                make sure the property is looking its best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Gary V Style */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-black p-8 rounded-lg border-2 border-yellow-500">
            <h2 className="text-3xl font-black mb-6 text-center">
              THE <span className="text-yellow-500">BOTTOM LINE</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 text-center">
              You can keep wasting time and money on unreliable lawn care, or you can upgrade to SmartYard and focus on
              what actually matters: closing deals and growing your business.
            </p>
            <div className="w-full max-w-md mx-auto">
              <Link href="/purchase/smart-yard" className="w-full">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-black py-6">
                  START WINNING NOW <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
