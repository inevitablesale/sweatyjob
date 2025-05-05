"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bot, Calendar, DollarSign, Shield, Clock, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function YardSignLandingPage() {
  const router = useRouter()

  // Optional: Add a timer to redirect after a certain period of inactivity
  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to smart yard purchase page after 3 minutes
      router.push("/purchase/smart-yard")
    }, 180000) // 3 minutes

    return () => clearTimeout(timer)
  }, [router])

  const benefits = [
    {
      icon: <Calendar className="h-6 w-6 text-sweat-500" />,
      title: "Daily Automated Mowing",
      description: "Your lawn stays pristine every day—no missed visits or scheduling hassles.",
    },
    {
      icon: <Shield className="h-6 w-6 text-sweat-500" />,
      title: "No Equipment Costs",
      description: "We provide a $1,600 robot mower at no extra charge, with free repairs and maintenance.",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-sweat-500" />,
      title: "Simple $30/Week Subscription",
      description: "Pay month-to-month, billed May–October. Cancel anytime with no penalties.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-sweat-500" />,
      title: "Free Monthly Edging & Weed-Eating",
      description: "We handle the finishing touches to keep your lawn looking sharp.",
    },
    {
      icon: <Clock className="h-6 w-6 text-sweat-500" />,
      title: "Zero Labor Delays",
      description: "Robots don't take sick days, weekends, or holidays off. Your lawn is always in top shape.",
    },
  ]

  const howItWorks = [
    {
      number: 1,
      title: "We Deliver Your Bot",
      description: "We set everything up—no wires, no hassle.",
    },
    {
      number: 2,
      title: "Your Lawn Mows Itself",
      description: "The robot quietly trims a little each day, all year long.",
    },
    {
      number: 3,
      title: "We Handle Maintenance",
      description: "Monthly visits for edging, weed-eating, and bot check-ups.",
    },
  ]

  return (
    <div className="min-h-screen bg-night-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-night-800 to-night-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-1 bg-sweat-500/20 text-sweat-400 rounded-full text-sm font-medium mb-6">
              Limited Time Offer • Only 100 Spots Available
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Yes, <span className="text-gradient">$30/Week Mowing</span> Is Real—
              <br />
              Stop Overpaying for Lawn Care
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              A personal robot mower for half the cost of traditional services. Daily, automated mowing that keeps your
              lawn perfectly trimmed, rain or shine.
            </p>

            {/* Phone Number Capture Form */}
            <div className="max-w-md mx-auto mb-10 bg-night-800/80 backdrop-blur-sm rounded-xl p-6 border border-night-700">
              <h3 className="text-xl font-semibold text-white mb-4">Get Started Now</h3>
              <p className="text-gray-300 mb-4">Schedule your property consultation today</p>

              <Button
                onClick={() => router.push("/purchase/smart-yard")}
                className="w-full bg-sweat-500 hover:bg-sweat-600 text-white"
                size="lg"
              >
                <Bot className="mr-2 h-5 w-5" /> Schedule Consultation
              </Button>
            </div>

            <div className="bg-night-800/60 backdrop-blur-sm rounded-xl p-6 max-w-xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="h-3 w-3 bg-sweat-500 rounded-full animate-pulse"></div>
                <p className="text-white font-medium">Spots are filling quickly</p>
              </div>
              <p className="text-gray-400 text-sm">After the first 100 members, price increases to $60/week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the page content remains the same */}
      {/* Key Benefits */}
      <section className="py-16 bg-night-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Benefits</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the future of lawn care with our AI-powered mowing service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-night-700/50 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-sweat-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-night-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Simple, hassle-free lawn care in just three easy steps
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-night-700 hidden md:block"></div>

              {howItWorks.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start mb-12 relative">
                  <div className="bg-sweat-500 text-night-900 rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4 md:mb-0 md:mr-8 z-10 flex-shrink-0">
                    {step.number}
                  </div>
                  <div className="bg-night-800/60 rounded-xl p-6 w-full">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-night-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The smart choice for modern homeowners who value their time and money
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-night-700/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-sweat-500 mb-4">1</div>
              <h3 className="text-xl font-semibold text-white mb-2">Half the Price</h3>
              <p className="text-gray-300">
                Traditional lawn services can cost $60/week or more. We're offering a better solution at half the price.
              </p>
            </div>

            <div className="bg-night-700/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-sweat-500 mb-4">2</div>
              <h3 className="text-xl font-semibold text-white mb-2">100% Reliable</h3>
              <p className="text-gray-300">Rain? Holiday weekend? Doesn't matter—your robot is always on schedule.</p>
            </div>

            <div className="bg-night-700/50 rounded-xl p-6">
              <div className="text-4xl font-bold text-sweat-500 mb-4">3</div>
              <h3 className="text-xl font-semibold text-white mb-2">No Long-Term Contract</h3>
              <p className="text-gray-300">Pause or cancel anytime. We'll come pick up the bot, no questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-night-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-night-800/60 rounded-xl p-8 relative">
            <div className="absolute -top-5 -left-5 text-6xl text-sweat-500 opacity-30">"</div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-gray-200 italic mb-6">
                "I couldn't believe I only pay $30 a week for daily mowing! My lawn looks better than ever, and I never
                have to worry if someone's actually going to show up."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-sweat-500/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-sweat-500 font-bold">ST</span>
                </div>
                <div>
                  <p className="text-white font-medium">Sarah T.</p>
                  <p className="text-gray-400">Richmond, VA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Perks */}
      <section className="py-16 bg-night-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Additional Perks</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your membership includes more than just lawn mowing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-night-700/50 rounded-xl p-6 flex">
              <div className="bg-sweat-500/10 p-3 rounded-full h-14 w-14 flex items-center justify-center mr-4 flex-shrink-0">
                <Sparkles className="h-6 w-6 text-sweat-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Optional Upgrades</h3>
                <p className="text-gray-300">
                  Access exclusive discounts on other home services through our Saturday Club (window cleaning, pressure
                  washing, and more).
                </p>
              </div>
            </div>

            <div className="bg-night-700/50 rounded-xl p-6 flex">
              <div className="bg-sweat-500/10 p-3 rounded-full h-14 w-14 flex items-center justify-center mr-4 flex-shrink-0">
                <Bot className="h-6 w-6 text-sweat-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Smart Home Integration</h3>
                <p className="text-gray-300">
                  Coming Soon: We're expanding our services to bring you a full suite of home automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Availability */}
      <section className="py-16 bg-gradient-to-r from-sweat-600 to-sweat-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Limited Founding Spots</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're only offering 100 memberships at this $30/week rate in Richmond. After that, membership prices jump
              to $60/week. Reserve your spot now to lock in the savings.
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <p className="text-white/80 text-sm mb-1">Founding Member Price</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">$30</span>
                    <span className="text-white/80 ml-2">/week</span>
                  </div>
                  <p className="text-white/70 text-sm mt-1">Billed monthly • No commitment</p>
                </div>

                <div className="h-px w-full md:h-16 md:w-px bg-white/20 my-4 md:my-0"></div>

                <div className="text-left">
                  <p className="text-white/80 text-sm mb-1">Regular Price (After First 100)</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">$60</span>
                    <span className="text-white/80 ml-2">/week</span>
                  </div>
                  <p className="text-white/70 text-sm mt-1">Don't miss out on founding member pricing!</p>
                </div>
              </div>
            </div>

            {/* Second Phone Capture Form */}
            <div className="max-w-md mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Lock In Your Founding Member Rate</h3>

              <Button
                onClick={() => router.push("/purchase/smart-yard")}
                className="w-full bg-white text-sweat-600 hover:bg-white/90"
                size="lg"
              >
                <Bot className="mr-2 h-5 w-5" /> Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-night-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              Questions? Contact us at{" "}
              <a href="mailto:hello@sweatyjob.com" className="text-sweat-500 hover:underline">
                hello@sweatyjob.com
              </a>
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} SweatyJob. All rights reserved. Richmond, VA.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
