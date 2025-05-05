"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { Clock, Shield, Leaf, CheckCircle2 } from "lucide-react"

export default function PremiumHomePage() {
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
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/luxury-modern-home.png"
            alt="Luxury home with perfect lawn"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-white leading-tight">
              Time is your most <span className="italic">valuable</span> asset
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              Reclaim your weekends with SweatyJob's autonomous lawn care service. Impeccable results, without lifting a
              finger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PhoneCaptureForm
                source="premium-hero"
                buttonText="Schedule a Consultation"
                className="w-full sm:w-auto"
                showThankYou={true}
              />
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">A New Standard of Living</h2>
            <p className="text-xl text-gray-600">
              Our autonomous lawn care service doesn't just maintain your property—it enhances your lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-stone-800" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Reclaim Your Time</h3>
              <p className="text-gray-600">
                The average homeowner spends 70 hours per year on lawn maintenance. Imagine what you could do with that
                time instead.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-stone-800" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Effortless Perfection</h3>
              <p className="text-gray-600">
                Our autonomous mowers maintain your lawn at the ideal height, creating a carpet-like appearance that
                traditional mowing can't match.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-stone-800" />
              </div>
              <h3 className="text-2xl font-serif mb-4">Peace of Mind</h3>
              <p className="text-gray-600">
                With our comprehensive maintenance program, you'll never worry about your lawn again. We handle
                everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-stone-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">What Our Clients Say</h2>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
              <p className="text-2xl text-gray-600 font-light italic mb-8">
                "I used to spend my weekends pushing a mower around my yard. Now I spend that time with my family, while
                my lawn looks better than it ever has. It's the definition of luxury."
              </p>
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src="/professional-man-portrait.png"
                    alt="Client"
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Michael Richardson</p>
                  <p className="text-gray-500">Homeowner in Richmond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">The Art of Effortless Lawn Care</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our service combines cutting-edge technology with white-glove service to deliver an experience that's
                truly exceptional.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-stone-800 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Professional Installation</h3>
                    <p className="text-gray-600">
                      Our technicians handle everything from boundary setup to system optimization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-stone-800 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Ongoing Maintenance</h3>
                    <p className="text-gray-600">
                      Regular check-ups ensure your system is always performing at its best.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-stone-800 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-medium mb-2">Seasonal Adjustments</h3>
                    <p className="text-gray-600">
                      We adapt your mowing schedule to match the changing seasons and growth patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/robotic-lawn-mower.png"
                alt="Robotic lawn mower"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-stone-100 p-6 rounded-lg shadow-lg">
                <div className="flex items-baseline">
                  <span className="text-4xl font-serif">$99</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mt-1">All-inclusive service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-light mb-6">Elevate Your Lifestyle Today</h2>
            <p className="text-xl text-white/80 mb-8">
              Join our exclusive clientele and experience the luxury of never mowing your lawn again.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-white/80 text-sm mb-1">One-time Installation</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-serif">$249</span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-white/80 text-sm mb-1">Monthly Service</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-serif">$99</span>
                    <span className="text-white/80 ml-2">/month</span>
                  </div>
                </div>
              </div>
            </div>

            <PhoneCaptureForm
              source="premium-footer"
              buttonText="Schedule Your Consultation"
              className="max-w-md mx-auto"
              dark={true}
              showThankYou={true}
            />

            <p className="mt-8 text-white/60 text-sm">
              Limited availability. Now serving select neighborhoods in Richmond.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
