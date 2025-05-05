"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Shield, CheckCircle2, Phone } from "lucide-react"
import Magic8BallHero from "@/components/magic-8-ball-hero"

export default function Magic8BallHomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Magic 8 Ball Hero Section */}
      <Magic8BallHero />

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-full text-sm font-medium mb-4">
              THE RELIABLE SOLUTION
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">No More Waiting Around</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our robot mowers work on your schedule, not the other way around. Here's how we eliminate the uncertainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
              <div className="bg-amber-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">One-Time Setup</h3>
              <p className="text-gray-600">
                Our team installs your robot mower system with precision boundary mapping and optimal configuration.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
              <div className="bg-amber-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Daily Operation</h3>
              <p className="text-gray-600">
                Your robot mower works automatically every day, maintaining the perfect lawn height consistently.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
              <div className="bg-amber-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Self-Maintaining</h3>
              <p className="text-gray-600">
                The system automatically returns to its charging station when needed, ensuring continuous operation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
              <div className="bg-amber-500/20 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote Monitoring</h3>
              <p className="text-gray-600">
                Track performance through our app and receive notifications about your lawn's maintenance status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-sm font-medium mb-4">
              THE RELIABILITY FACTOR
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">No More Lawn Care Roulette</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our robot mowing solution compares to traditional lawn care services when it comes to reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="bg-red-500 text-white py-4 text-center">
                <h3 className="text-xl font-bold">Traditional Lawn Service</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Unpredictable Scheduling</h4>
                      <p className="text-gray-600">
                        Subject to crew availability, traffic, and other jobs running long
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Weather Dependent</h4>
                      <p className="text-gray-600">Cancellations due to rain, leaving your lawn overgrown</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Inconsistent Results</h4>
                      <p className="text-gray-600">
                        Quality varies based on which crew shows up and how rushed they are
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Seasonal Limitations</h4>
                      <p className="text-gray-600">
                        Service often unavailable during peak seasons when you need it most
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-50 rounded-lg">
                  <p className="text-center text-gray-700 font-medium">Average Reliability: 65%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="bg-green-500 text-white py-4 text-center">
                <h3 className="text-xl font-bold">SweatyJob Robot Mowers</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Consistent Daily Operation</h4>
                      <p className="text-gray-600">
                        Works automatically every day according to your preferred schedule
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Weather Resistant</h4>
                      <p className="text-gray-600">
                        Operates in light rain and automatically adjusts to weather conditions
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Uniform Cutting Quality</h4>
                      <p className="text-gray-600">Precise, consistent results with every mowing session</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mt-1 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Year-Round Service</h4>
                      <p className="text-gray-600">
                        Operates throughout the growing season with no staffing limitations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 rounded-lg">
                  <p className="text-center text-gray-700 font-medium">Average Reliability: 99.8%</p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "99.8%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 rounded-full text-sm font-medium mb-4">
              CUSTOMER STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">From Frustration to Freedom</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from customers who ditched the lawn care lottery and switched to our reliable robot mowing solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I was constantly calling my lawn service asking 'Are you coming today?' They'd say yes, then never show
                up. With my robot mower, I never have to wonder if my lawn will get cut. It just happens automatically,
                every single day."
              </p>
              <div className="flex items-center">
                <Image
                  src="/professional-man-business-casual.png"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Michael Thompson</p>
                  <p className="text-gray-500">Richmond, VA</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "My old lawn service would reschedule constantly due to weather. My grass would be knee-high before
                they'd show up. Now my robot mower works rain or shine, and my lawn always looks perfect. Best decision
                I've made for my home."
              </p>
              <div className="flex items-center">
                <Image
                  src="/smiling-woman-homeowner.png"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Jennifer Wilson</p>
                  <p className="text-gray-500">Richmond, VA</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                "I travel frequently for work and could never coordinate with lawn services. I'd come home to an
                overgrown mess or get complaints from my HOA. Now my robot mower keeps everything perfect whether I'm
                home or not. It's like having a reliable employee who never calls in sick."
              </p>
              <div className="flex items-center">
                <Image
                  src="/business-professional-man.png"
                  alt="Customer"
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">David Rodriguez</p>
                  <p className="text-gray-500">Richmond, VA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-600 rounded-full text-sm font-medium mb-4">
              SIMPLE PRICING
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Predictable Pricing, No Surprises</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlike traditional lawn services that constantly raise prices, our pricing is transparent and consistent.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-amber-600 font-medium mb-2">ONE-TIME</div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Professional Installation</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">$249</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <span>Expert system configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <span>Boundary mapping and setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <span>App configuration and training</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Schedule Installation</Button>
                </div>

                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 bg-amber-500 text-white px-4 py-1 text-sm font-medium">
                    MOST POPULAR
                  </div>
                  <div className="text-amber-600 font-medium mb-2">MONTHLY</div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Robot Mowing Service</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900">$99</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <span>Unlimited autonomous mowing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <span>Maintenance and support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <span>Remote monitoring and updates</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">Subscribe Now</Button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start">
                <div className="bg-amber-500/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <Shield className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">The SweatyJob Guarantee</h3>
                  <p className="text-gray-600">
                    If your robot mower ever fails to maintain your lawn to our standards, we'll send a human crew to
                    fix it at no additional cost. That's how confident we are in our technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-amber-500 to-amber-600 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Playing Lawn Care Roulette</h2>
            <p className="text-xl text-white/90 mb-8">
              Join hundreds of satisfied homeowners who've switched to reliable, automated lawn care. No more waiting,
              no more wondering, no more wasted weekends.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <p className="text-white/80 text-sm mb-1">Installation + First Month</p>
                  <div className="flex items-baseline justify-center md:justify-start">
                    <span className="text-4xl font-bold">$348</span>
                    <span className="text-white/80 ml-2">total</span>
                  </div>
                  <p className="text-white/70 text-sm mt-1">Then just $99/month</p>
                </div>

                <Button
                  onClick={() => (window.location.href = "tel:8045739825")}
                  className="bg-white text-amber-600 hover:bg-white/90 font-medium"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" /> Schedule Your Consultation
                </Button>
              </div>
            </div>

            <p className="text-white/80">
              Limited availability in select Richmond neighborhoods. Contact us today to see if your property qualifies.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
