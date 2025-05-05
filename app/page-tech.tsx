"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import {
  Cpu,
  Battery,
  Wifi,
  BarChart,
  Clock,
  Leaf,
  Volume2,
  CloudRain,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export default function TechHomePage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono mb-4">
                NEXT-GEN LAWN AUTOMATION
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
                Autonomous <span className="text-blue-500">Lawn Care</span> Powered by AI
              </h1>
              <p className="text-xl text-slate-300 mb-8">
                Leveraging advanced robotics and machine learning to deliver precision lawn maintenance with 99.8%
                reliability and 87% time savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <PhoneCaptureForm
                  source="tech-hero"
                  buttonText="Get Started"
                  className="w-full sm:w-auto"
                  showThankYou={true}
                />
                <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950">
                  View Technical Specs
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
                <Image
                  src="/futuristic-robotic-mower.png"
                  alt="AI-powered robotic mower"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-mono">
                  AI-POWERED
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono mb-4">
              TECHNICAL SPECIFICATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced System Architecture</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our autonomous mowing system utilizes cutting-edge technology to deliver superior performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <div className="bg-blue-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Cpu className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Navigation</h3>
              <p className="text-slate-300">
                Machine learning algorithms create optimal mowing patterns with 99.4% coverage efficiency.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Precision</span>
                  <span className="text-blue-400 font-mono">±0.5 cm</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <div className="bg-blue-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Battery className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Power System</h3>
              <p className="text-slate-300">
                High-capacity lithium-ion battery with smart power management for extended runtime.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Runtime</span>
                  <span className="text-blue-400 font-mono">3.5 hours</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <div className="bg-blue-500/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Wifi className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Connectivity</h3>
              <p className="text-slate-300">
                Dual-band WiFi and cellular backup ensure continuous operation and remote monitoring.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Uptime</span>
                  <span className="text-blue-400 font-mono">99.8%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data & Performance */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono mb-4">
                PERFORMANCE METRICS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Data-Driven Results</h2>
              <p className="text-xl text-slate-300 mb-8">
                Our autonomous system outperforms traditional lawn care across all key performance indicators.
              </p>

              <div className="space-y-6">
                <div className="bg-slate-900/60 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Time Efficiency</span>
                    <span className="text-blue-400 font-mono">+87%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "87%" }}></div>
                  </div>
                </div>

                <div className="bg-slate-900/60 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Lawn Health Improvement</span>
                    <span className="text-blue-400 font-mono">+42%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>

                <div className="bg-slate-900/60 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-300">Energy Efficiency</span>
                    <span className="text-blue-400 font-mono">+93%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "93%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-6">System Performance Dashboard</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Mowing Coverage</span>
                      <span className="text-blue-400 font-mono">99.4%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "99.4%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Battery Efficiency</span>
                      <span className="text-blue-400 font-mono">92.7%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "92.7%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300">Obstacle Avoidance</span>
                      <span className="text-blue-400 font-mono">99.9%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "99.9%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-1">Operational Uptime</div>
                    <div className="text-2xl font-bold text-white">99.8%</div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <div className="text-slate-400 text-sm mb-1">Avg. Mowing Time</div>
                    <div className="text-2xl font-bold text-white">47 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono mb-4">
              SYSTEM CAPABILITIES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Feature Set</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Our autonomous lawn care system incorporates multiple technological innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <BarChart className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Adaptive Cutting Height</h3>
              <p className="text-slate-300">
                AI-controlled blade height adjusts automatically based on grass growth patterns and seasonal conditions.
              </p>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <Clock className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
              <p className="text-slate-300">
                Machine learning algorithms optimize mowing schedules based on weather forecasts and growth data.
              </p>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <Leaf className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Micro-Mulching</h3>
              <p className="text-slate-300">
                Precision cutting technology creates fine clippings that decompose rapidly, improving soil health.
              </p>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <Volume2 className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Ultra-Quiet Operation</h3>
              <p className="text-slate-300">
                Advanced acoustic engineering reduces operational noise to just 52dB, 70% quieter than gas mowers.
              </p>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <CloudRain className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Weather Adaptation</h3>
              <p className="text-slate-300">
                Integrated weather sensors adjust operations based on real-time conditions and forecasts.
              </p>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <Zap className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Energy Optimization</h3>
              <p className="text-slate-300">
                Smart power management reduces energy consumption by 93% compared to traditional mowing methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono mb-4">
              SUBSCRIPTION PLANS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transparent Pricing Structure</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Simple, predictable pricing with no hidden fees or long-term commitments.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 border-b md:border-b-0 md:border-r border-slate-800">
                  <div className="text-blue-400 font-mono mb-2">ONE-TIME</div>
                  <h3 className="text-2xl font-bold mb-2">System Installation</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">$249</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      <span>Professional system configuration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      <span>Boundary mapping and setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      <span>Mobile app configuration</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Schedule Installation</Button>
                </div>

                <div className="p-8">
                  <div className="text-blue-400 font-mono mb-2">MONTHLY</div>
                  <h3 className="text-2xl font-bold mb-2">Autonomous Service</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-slate-400 ml-2">/month</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      <span>Unlimited autonomous mowing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      <span>Remote monitoring and diagnostics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                      <span>Software updates and maintenance</span>
                    </li>
                  </ul>

                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Start Subscription</Button>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-900/60 rounded-xl p-6 border border-slate-800">
              <div className="flex items-start">
                <div className="bg-blue-500/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <ArrowRight className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-slate-300">
                    All plans include our performance guarantee: if your system doesn't maintain your lawn to our
                    specified standards, we'll provide manual service at no additional cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-mono mb-4">
              GET STARTED TODAY
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Upgrade Your Lawn Care?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join the 94% of our customers who report significant time savings and improved lawn health.
            </p>

            <PhoneCaptureForm
              source="tech-footer"
              buttonText="Schedule a Consultation"
              className="max-w-md mx-auto"
              dark={true}
              showThankYou={true}
            />

            <p className="mt-8 text-white/60 text-sm">
              Limited availability in select Richmond neighborhoods. System specifications subject to property
              assessment.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
