"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { Clock, Smile, Sun, ThumbsUp, Heart, Leaf, CheckCircle2 } from "lucide-react"

export default function FriendlyHomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pb-24 bg-gradient-to-b from-teal-50 to-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-full h-full bg-teal-500 opacity-5 pattern-dots-lg"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
                Say goodbye to weekend mowing!
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 leading-tight">
                Let robots mow your lawn <span className="text-teal-500">while you relax</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                No more pushing a mower in the hot sun! Our friendly robot mowers keep your lawn 
                looking great all the time, so you can enjoy your weekends again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneCaptureForm
                  source="friendly-hero"
                  buttonText="Get Your Robot Mower"
                  className="w-full sm:w-auto"
                  showThankYou={true}
                />
                <Button variant="outline" className="border-teal-500 text-teal-600 hover:bg-teal-50">
                  How It Works
                </Button>
              </div>
              
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  <Image 
                    src="/happy-woman-smiling.png" 
                    alt="Happy customer" 
                    width={40} 
                    height={40} 
                    className="rounded-full border-2 border-white"
                  />
                  <Image 
                    src="/happy-man-smiling.png" 
                    alt="Happy customer" 
                    width={40} 
                    height={40} 
                    className="rounded-full border-2 border-white"
                  />
                  <Image 
                    src="/placeholder.svg?height=100&width=100&query=happy family smiling" 
                    alt="Happy customer" 
                    width={40} 
                    height={40} 
                    className="rounded-full border-2 border-white"
                  />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <span className="ml-2 text-gray-600">Over 500 happy customers!</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-teal-200 rounded-full blur-xl opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <Image 
                  src="/placeholder.svg?height=600&width=600&query=happy family relaxing in backyard with robot mower" 
                  alt="Family enjoying free time while robot mows lawn" 
                  width={600} 
                  height={600} 
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  More free time!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
              SUPER SIMPLE PROCESS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">How Robot Mowing Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Getting started is easy! Just three simple steps and you'll never have to mow your lawn again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-600">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">We Set Everything Up</h3>
              <p className="text-gray-600">
                Our friendly team comes to your home, maps your yard, and installs your robot mower system. 
                No technical knowledge needed!
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-600">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Robot Does the Work</h3>
              <p className="text-gray-600">
                Your robot mower works automatically, keeping your lawn perfectly trimmed all the time. 
                It even charges itself!
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-teal-600">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">You Enjoy Life</h3>
              <p className="text-gray-600">
                Spend your weekends doing what you love instead of pushing a mower. 
                Your lawn stays perfect with zero effort!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
              WHY PEOPLE LOVE IT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Benefits You'll Love</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our customers can't stop talking about how robot mowing has changed their lives!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Get Your Weekends Back</h3>
              <p className="text-gray-600">
                The average homeowner spends 4-5 hours mowing every week. That's over 200 hours a year you can reclaim!
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Smile className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">No More Sweaty Work</h3>
              <p className="text-gray-600">
                Say goodbye to pushing a heavy mower in the hot sun. Let technology handle the sweaty job for you!
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Sun className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Always Perfect Lawn</h3>
              <p className="text-gray-600">
                Your robot mows a little bit every day, keeping your grass at the perfect height all the time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ThumbsUp className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Super Easy to Use</h3>
              <p className="text-gray-600">
                No technical skills needed! We handle all the setup, and the robot does everything automatically.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Neighbors Will Be Jealous</h3>
              <p className="text-gray-600">
                Your lawn will look so good, your neighbors will wonder how you do it while they're still pushing mowers!
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="bg-teal-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Leaf className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Better for Your Lawn</h3>
              <p className="text-gray-600">
                Frequent mowing creates a thicker, healthier lawn that naturally resists weeds and disease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
              WHAT PEOPLE ARE SAYING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Customers Love Their Free Time</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear what our happy customers have to say!
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
              <p className="text-gray-600 mb-6">
                "I used to spend every Saturday mowing my lawn. Now I spend that time with my kids at the park! 
                Best decision I've made this year."
              </p>
              <div className="flex items-center">
                <Image 
                  src="/placeholder.svg?height=100&width=100&query=happy dad with kids" 
                  alt="Happy customer" 
                  width={50} 
                  height={50} 
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Mike Johnson</p>
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
              <p className="text-gray-600 mb-6">
                "My lawn looks better than ever and I haven't touched a mower in months! The setup was super easy 
                and the team was so friendly."
              </p>
              <div className="flex items-center">
                <Image 
                  src="/placeholder.svg?height=100&width=100&query=happy woman homeowner" 
                  alt="Happy customer" 
                  width={50} 
                  height={50} 
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Sarah Williams</p>
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
              <p className="text-gray-600 mb-6">
                "As a busy professional, I never had time to keep up with my lawn. Now it's always perfect and I 
                didn't have to hire an expensive lawn service!"
              </p>
              <div className="flex items-center">
                <Image 
                  src="/placeholder.svg?height=100&width=100&query=professional man in business casual" 
                  alt="Happy customer" 
                  width={50} 
                  height={50} 
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-medium text-gray-900">David Chen</p>
                  <p className="text-gray-500">Richmond, VA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
              SIMPLE PRICING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Affordable Robot Mowing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No complicated packages or hidden fees. Just simple pricing that makes sense!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200">
                  <div className="text-teal-600 font-medium mb-2">ONE-TIME</div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Robot Setup</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-800">$249</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                      <span>Professional installation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                      <span>Yard mapping and setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                      <span>App setup and training</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    Get Started
                  </Button>
                </div>
                
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 bg-teal-500 text-white px-4 py-1 text-sm font-medium">
                    MOST POPULAR
                  </div>
                  <div className="text-teal-600 font-medium mb-2">MONTHLY</div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Robot Service</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-800">$99</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                      <span>Unlimited mowing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                      <span>Maintenance and support</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                      <span>Free repairs if needed</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <p className="text-center text-gray-600">
                Not sure which option is right for you? Give us a call at <span className="font-medium text-teal-600">(804) 555-1234</span> and we'll help you decide!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-medium mb-4">
              QUESTIONS ANSWERED
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our robot mowing service.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-800">How does the robot mower know where to go?</h3>
                <p className="text-gray-600">
                  Our robot mowers use a combination of boundary wires and smart navigation technology. 
                  We install a thin wire around the perimeter of your lawn that creates an invisible boundary. 
                  The robot uses this, along with its sensors, to navigate your entire yard efficiently.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-800">Is it safe around kids and pets?</h3>
                <p className="text-gray-600">
                  Our robot mowers have multiple safety features including lift sensors, 
                  obstacle detection, and automatic shut-off if tilted. The blades are also tucked safely 
                  under the mower, making them much safer than traditional mowers.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-800">What happens when it rains?</h3>
                <p className="text-gray-600">
                  Our smart mowers have rain sensors and will automatically return to their charging 
                  station when it starts raining. They'll resume mowing when conditions are dry again, 
                  so you never have to worry about scheduling around the weather.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-800">How long does the battery last?</h3>
                <p className="text-gray-600">
                  The robot mowers typically run for 60-90 minutes before automatically returning to their 
                  charging station. They'll recharge for about 60 minutes, then head back out to continue 
                  mowing. This cycle repeats until your entire lawn is perfectly cut.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <h3 className="text-xl font-bold mb-3 text-gray-800">What maintenance is required?</h3>
                <p className="text-gray-600">
                  Very little! You'll need to occasionally clean grass clippings from the underside and 
                  replace the blades every few months (which we handle as part of our service). The robot 
                  takes care of everything else automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-teal-500 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Reclaim Your Weekends?</h2>
          </div>
        </div>
      </section>\
