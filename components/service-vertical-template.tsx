"use client"

import { useState, useEffect } from "react"
import type React from "react"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  DollarSign,
  Users,
  Clock,
  Award,
  Repeat,
  MapPin,
  ChevronRight,
  Brain,
  Battery,
  Shield,
  Calendar,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MarketSelector } from "@/components/market-selector"

export interface ROIImpact {
  title: string
  description: string
  before: string
  after: string
}

export interface ServiceVerticalProps {
  title: string
  slug: string
  description: string
  icon: React.ReactNode
  heroImage: string
  benefits: {
    title: string
    description: string
    points: string[]
  }[]
  integration: {
    title: string
    description: string
    points: string[]
  }
  faqs?: {
    question: string
    answer: string
  }[]
  removeImages?: boolean
  marketStats?: {
    size?: string
    growth?: string
    businesses?: string
    leaders?: string
    segments?: string
    savingsImpact?: string
    drivers?: string[]
    trends?: string[]
    challenges?: string[]
    opportunities?: string[]
    integrationPotential?: string
  }
  roiImpacts?: ROIImpact[]
}

export function ServiceVerticalTemplate({
  title,
  slug,
  description,
  icon,
  heroImage,
  benefits,
  integration,
  faqs = [],
  removeImages = false,
  marketStats = {
    size: "The global intelligent robotic lawn mowers market was valued at $1.8 billion in 2024 and is projected to reach $4.6 billion by 2032, reflecting a CAGR of 10.8%.",
    growth: "North America's market alone is growing at 9.26% annually, with a current value of $568 million.",
    businesses:
      "Over 505,000 lawn care businesses operate in the US, with increasing consolidation and technology adoption.",
    trends: [
      "Residential sector dominates with 60% market share, driven by smart home integration",
      "Commercial landscaping (20% market share) adopting robotic mowers to cut labor costs by $15K-$30K annually per unit",
      "Each robotic mower can replace 2-3 workers while reducing fuel expenses by 90%",
      "Solid-state battery technology (expected 2026-2028) will increase mower runtime by 50%",
      "EU's 2025 gas-powered mower ban will drive 20% of users to robotic alternatives",
    ],
  },
  roiImpacts = [
    {
      title: "New Revenue Stream",
      description:
        "Each AI mower generates $50 in monthly profit with minimal labor costs. The global robotic mower market is growing at 10.8% annually.",
      before: "Single Service Revenue",
      after: "Recurring Monthly Income",
    },
    {
      title: "Labor Cost Savings",
      description:
        "Each mower can replace 2-3 workers, saving clients $15K-$30K annually in labor costs while reducing diesel expenses by 90%.",
      before: "High Labor Expenses",
      after: "Automated Efficiency",
    },
    {
      title: "Customer Retention",
      description:
        "40% of robotic mower models integrate with smart home systems, commanding a 15% price premium and creating 'sticky' customers.",
      before: "Seasonal Relationships",
      after: "Year-Round Subscribers",
    },
  ],
}: ServiceVerticalProps) {
  const formattedSlug = slug.replace(/\s+/g, "-").toLowerCase()

  // ROI Calculator state
  const [customers, setCustomers] = useState(100)
  const [revenuePerCustomer, setRevenuePerCustomer] = useState(150)
  const [adoptionRate, setAdoptionRate] = useState(35)
  const [additionalRevenue, setAdditionalRevenue] = useState(0)
  const [mowersDeployed, setMowersDeployed] = useState(0)
  const [activeSection, setActiveSection] = useState("intro")

  // Calculate ROI whenever inputs change
  useEffect(() => {
    const adopters = Math.round(customers * (adoptionRate / 100))
    const mowers = adopters
    setMowersDeployed(mowers)

    // Calculate based on 6 months of mowing value
    const monthlyRevenue = mowers * 50
    const sixMonthRevenue = monthlyRevenue * 6

    setAdditionalRevenue(sixMonthRevenue)
  }, [customers, revenuePerCustomer, adoptionRate])

  return (
    <main className="pt-24 bg-slate-900 text-white">
      {/* Hero Section - Introduction */}
      <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-20 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-block px-4 py-1 bg-green-900/50 rounded-full text-green-400 text-sm font-semibold mb-4">
                FOR {title.toUpperCase()} COMPANIES
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
                Grow Your {title} Business with AI Mowing Technology
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Add a new revenue stream with zero upfront costs or inventory
              </p>

              {/* Quick CTA */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 mb-6">
                <h3 className="text-xl font-bold mb-3 text-white">Ready to learn more?</h3>
                <PhoneCaptureForm
                  source={`${formattedSlug}_pros_hero`}
                  buttonText="Get Info"
                  buttonSize="default"
                  dark={true}
                  showThankYou={true}
                  skipRedirect={true}
                />
              </div>

              {/* Navigation Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <Button
                  variant="outline"
                  className="bg-green-600 text-white hover:bg-green-700 border-green-600 transition-colors px-5 py-2 rounded-full"
                  onClick={() => {
                    document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" })
                    setActiveSection("concept")
                  }}
                >
                  <span className="mr-2">How It Works</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-green-600 text-white hover:bg-green-700 border-green-600 transition-colors px-5 py-2 rounded-full"
                  onClick={() => {
                    document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })
                    setActiveSection("benefits")
                  }}
                >
                  <span className="mr-2">Benefits</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-green-600 text-white hover:bg-green-700 border-green-600 transition-colors px-5 py-2 rounded-full"
                  onClick={() => {
                    document.getElementById("roi")?.scrollIntoView({ behavior: "smooth" })
                    setActiveSection("roi")
                  }}
                >
                  <span className="mr-2">ROI Calculator</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            {!removeImages && (
              <div className="md:w-1/2">
                <div className="relative h-[300px] md:h-[400px] w-full rounded-lg overflow-hidden shadow-2xl border border-slate-700">
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60"></div>
                  <img
                    src={heroImage || `/images/pros/${formattedSlug}-pro.jpg`}
                    alt={`${title} Professional`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // If the image fails to load, try a fallback
                      const target = e.target as HTMLImageElement
                      if (!target.src.includes("placeholder")) {
                        target.src = `/placeholder.svg?height=400&width=600&query=${title} Professional`
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Concept Section - Introducing the Business Model */}
      <section id="concept" className="py-16 bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-gradient">The AI Mower Partnership Concept</h2>
              <p className="text-xl text-gray-300">
                A zero-risk business model that adds recurring revenue to your {title.toLowerCase()} business
              </p>
            </div>

            <div className="bg-slate-700 rounded-xl p-8 border border-slate-600 mb-12">
              <p className="text-xl text-gray-300 mb-6">{description}</p>
              <div className="flex justify-center">
                <Button className="bg-sweat-600 hover:bg-sweat-700 text-white font-semibold">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* How It Works Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8 text-white">How It Works</h3>

              <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 flex items-start">
                <div className="bg-green-900 h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold text-green-400">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">No Upfront Investment</h4>
                  <p className="text-gray-300">
                    You don't buy or stock any mowers. We ship directly to your customer after you make the sale. Zero
                    inventory costs, zero financial risk.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 flex items-start">
                <div className="bg-green-900 h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold text-green-400">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Sell Bundled Services</h4>
                  <p className="text-gray-300">
                    Offer your customers a complete solution: {title.toLowerCase()} + AI mowing in one convenient
                    package with a single monthly payment. We provide all the sales materials.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 flex items-start">
                <div className="bg-green-900 h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold text-green-400">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Easy Maintenance</h4>
                  <p className="text-gray-300">
                    Your technicians perform basic maintenance during regular service visits. We provide all replacement
                    parts for free and handle technical support.
                  </p>
                </div>
              </div>

              <div className="bg-slate-700 rounded-xl p-6 border border-slate-600 flex items-start">
                <div className="bg-green-900 h-10 w-10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg font-bold text-green-400">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">Generate Substantial Profits</h4>
                  <p className="text-gray-300">
                    Keep 100% of revenue above our $99/mo wholesale price. Transform one-time or seasonal clients into
                    year-round subscribers.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="mt-12 bg-green-900/30 rounded-lg p-6 border border-green-800">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 text-white">Ready to add AI mowing to your services?</h3>
                  <p className="text-gray-300">Enter your phone number to speak with our partnership team.</p>
                </div>
                <div className="md:w-1/3 w-full">
                  <PhoneCaptureForm
                    source={`${formattedSlug}_pros_concept`}
                    buttonText="Get Started"
                    buttonSize="default"
                    dark={true}
                    showThankYou={true}
                    skipRedirect={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Building the Case */}
      <section id="benefits" className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Benefits for {title} Companies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI mowing technology creates new opportunities for your {title.toLowerCase()} business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <Repeat className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Recurring Revenue</h3>
              <p className="text-gray-300">
                Transform one-time or seasonal clients into year-round subscribers with bundled services. Create
                predictable monthly income.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <Users className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Customer Retention</h3>
              <p className="text-gray-300">
                Reduce customer churn by creating multiple service touchpoints and increasing switching costs. Build
                stronger relationships.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <Award className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Market Differentiation</h3>
              <p className="text-gray-300">
                Stand out from competitors with cutting-edge technology. Position your business as an innovative leader
                in your market.
              </p>
            </div>
          </div>

          {/* Detailed Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 shadow-md border border-slate-700">
                <h3 className="text-2xl font-bold mb-4 text-white">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <ul className="space-y-3">
                  {benefit.points &&
                    benefit.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Industry Stats */}
          {marketStats && (
            <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">Industry Insights</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {marketStats.size && (
                  <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-6 w-6 text-green-400 mr-2" />
                      <h4 className="text-lg font-bold text-white">Market Size</h4>
                    </div>
                    <p className="text-gray-300">{marketStats.size}</p>
                  </div>
                )}

                {marketStats.growth && (
                  <div className="bg-slate-700 rounded-lg p-4 border border-slate-600">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="h-6 w-6 text-green-400 mr-2" />
                      <h4 className="text-lg font-bold text-white">Growth Rate</h4>
                    </div>
                    <p className="text-gray-300">{marketStats.growth}</p>
                  </div>
                )}
              </div>

              {marketStats.trends && marketStats.trends.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-bold mb-3 text-white">Key Industry Trends</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {marketStats.trends.map((trend, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{trend}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Quick CTA */}
          <div className="bg-green-900/30 rounded-lg p-6 border border-green-800">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-white">See how these benefits apply to your business</h3>
                <p className="text-gray-300">Speak with our partnership team about your specific market and needs.</p>
              </div>
              <div className="md:w-1/3 w-full">
                <PhoneCaptureForm
                  source={`${formattedSlug}_pros_benefits`}
                  buttonText="Contact Us"
                  buttonSize="default"
                  dark={true}
                  showThankYou={true}
                  skipRedirect={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section - Making the Business Case */}
      <section id="roi" className="py-16 bg-slate-800 border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Calculate Your Business Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI mowing can transform your {title.toLowerCase()} business with measurable financial results
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="md:w-1/2">
              <div className="bg-slate-700 rounded-xl p-8 border border-slate-600">
                <h3 className="text-2xl font-bold mb-6 text-white">ROI Calculator</h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Number of current customers</label>
                    <input
                      type="number"
                      value={customers}
                      onChange={(e) => setCustomers(Number.parseInt(e.target.value) || 0)}
                      className="w-full bg-slate-600 border border-slate-500 rounded-md p-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Average monthly revenue per customer ($)</label>
                    <input
                      type="number"
                      value={revenuePerCustomer}
                      onChange={(e) => setRevenuePerCustomer(Number.parseInt(e.target.value) || 0)}
                      className="w-full bg-slate-600 border border-slate-500 rounded-md p-3 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Estimated adoption rate (%)</label>
                    <select
                      className="w-full bg-slate-600 border border-slate-500 rounded-md p-3 text-white"
                      value={adoptionRate}
                      onChange={(e) => setAdoptionRate(Number.parseInt(e.target.value))}
                    >
                      <option value="20">Conservative: 20%</option>
                      <option value="35">Average: 35%</option>
                      <option value="50">Aggressive: 50%</option>
                    </select>
                  </div>

                  <div className="bg-green-900/30 rounded-lg p-6 border border-green-800">
                    <h4 className="text-lg font-bold text-white mb-4">Projected 6-Month Impact</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-400">Additional Revenue</p>
                        <p className="text-2xl font-bold text-green-400">${additionalRevenue.toLocaleString()}</p>
                        <p className="text-sm text-gray-400 mt-1">
                          ${(additionalRevenue / 6).toLocaleString()} monthly
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">AI Mowers Deployed</p>
                        <p className="text-2xl font-bold text-green-400">{mowersDeployed}</p>
                        <p className="text-sm text-gray-400 mt-1">Low acquisition cost, high LTV</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-white">Business Impact</h3>
              <div className="space-y-6">
                {roiImpacts.map((impact, index) => (
                  <div key={index} className="bg-slate-700 rounded-lg p-6 border border-slate-600">
                    <h4 className="text-xl font-bold text-white mb-2">{impact.title}</h4>
                    <p className="text-gray-300 mb-4">{impact.description}</p>
                    <div className="flex items-center">
                      <div className="w-1/2 pr-4 border-r border-slate-500">
                        <p className="text-sm text-gray-400">Before</p>
                        <p className="text-lg font-semibold text-gray-300">{impact.before}</p>
                      </div>
                      <div className="w-1/2 pl-4">
                        <p className="text-sm text-gray-400">After</p>
                        <p className="text-lg font-semibold text-green-400">{impact.after}</p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-green-900/30 rounded-lg p-6 border border-green-800">
                  <h4 className="text-lg font-bold text-white mb-3">Ready to see your specific ROI?</h4>
                  <p className="text-gray-300 mb-4">Our team can provide a detailed analysis for your business.</p>
                  <PhoneCaptureForm
                    source={`${formattedSlug}_pros_roi`}
                    buttonText="Request ROI Analysis"
                    buttonSize="default"
                    dark={true}
                    showThankYou={true}
                    skipRedirect={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section - How It Works With Your Business */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient">
              How AI Mowing Integrates With Your {title} Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our technology is designed to complement your existing services and operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <div className="bg-green-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <span className="text-2xl font-bold text-green-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">We Train Your Team</h3>
              <p className="text-gray-300">
                We'll train your technicians on AI mower setup, maintenance, and troubleshooting—all designed to fit
                into your existing service visits.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <div className="bg-green-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">You Offer Bundled Services</h3>
              <p className="text-gray-300">
                Offer your customers a complete outdoor solution: {title.toLowerCase()} + AI mowing in one convenient
                package with a single monthly payment.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <div className="bg-green-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">We Support, You Profit</h3>
              <p className="text-gray-300">
                We provide all replacement parts for free while you handle routine maintenance during your regular
                service visits. You enjoy increased revenue with minimal additional work.
              </p>
            </div>
          </div>

          {/* Integration Details */}
          <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-12">
            <h3 className="text-2xl font-bold mb-6 text-white">{integration.title}</h3>
            <p className="text-xl text-gray-300 mb-6">{integration.description}</p>

            <ul className="space-y-4">
              {integration.points.map((point, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick CTA */}
          <div className="bg-green-900/30 rounded-lg p-6 border border-green-800">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2 text-white">Ready to integrate AI mowing with your business?</h3>
                <p className="text-gray-300">Our team will walk you through the entire process.</p>
              </div>
              <div className="md:w-1/3 w-full">
                <PhoneCaptureForm
                  source={`${formattedSlug}_pros_integration`}
                  buttonText="Get Started"
                  buttonSize="default"
                  dark={true}
                  showThankYou={true}
                  skipRedirect={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Local Business Integration</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with local businesses to offer a complete solution.
            </p>
          </div>

          {/* Add content about potential local partnerships (nurseries, landscapers, etc.) */}
          <p className="text-xl text-gray-300">
            Example: Partner with local nurseries to offer bundled lawn care and landscaping packages.
          </p>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gradient">Partner Mower Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We connect you with advanced AI robotic mowers from leading manufacturers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <div className="bg-green-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <MapPin className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Multi-Map Mowing</h3>
              <p className="text-gray-300">
                These mowers support multiple mowing maps, allowing them to maintain a single lawn or switch between
                several lawns in sequence.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <div className="bg-green-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <Brain className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Intelligent Mowing</h3>
              <p className="text-gray-300">
                The mowers leverage panoramic vision, RTK positioning, and visual perception for intelligent mapping,
                precision mowing, and autonomous operation.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <div className="bg-green-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <Battery className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Autonomous Charging</h3>
              <p className="text-gray-300">
                Mowers automatically return to their charging stations when batteries are low and resume mowing once
                fully charged.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <div className="bg-green-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Obstacle Avoidance</h3>
              <p className="text-gray-300">
                Advanced AI-powered obstacle detection helps mowers avoid objects on lawns, and customers can mark
                obstacle zones in their apps.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <div className="bg-green-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <Calendar className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Smart Scheduling</h3>
              <p className="text-gray-300">
                Customers can set mowing schedules and security routines via manufacturer apps, including enhanced
                monitoring features.
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-8 shadow-md text-center border border-slate-700">
              <div className="bg-green-900 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
                <Leaf className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Grass Clipping Mulching</h3>
              <p className="text-gray-300">
                Mowers cut grass into fine clippings that decompose and act as organic fertilizer, enriching soil
                without cleanup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-slate-800 border-t border-slate-700">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gradient">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get answers to common questions about our AI mower partnership program
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-slate-700 rounded-lg px-6">
                    <AccordionTrigger className="text-xl font-bold text-white py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      )}

      {/* Available Markets Section */}
      <section className="py-16 bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-green-400 mr-3" />
              <h2 className="text-3xl font-bold text-gradient">Available Markets</h2>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're currently accepting {title.toLowerCase()} partners in these top US markets. Join our growing network
              of service providers.
            </p>
          </div>

          <MarketSelector serviceVertical={formattedSlug} limit={100} />
        </div>
      </section>

      {/* Get Started Section - Final Conversion */}
      <section
        id="get-started"
        className="py-16 bg-gradient-to-r from-green-900 to-green-800 text-white border-t border-green-700"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6">Ready to Grow Your {title} Business?</h2>
              <p className="text-xl mb-8">
                Join our network of {title.toLowerCase()} partners and start offering AI mower subscriptions with zero
                upfront costs. You sell the service, we handle the rest, and you earn $50 per mower every month.
              </p>

              <div className="inline-block bg-amber-900/50 border border-amber-700 rounded-lg px-6 py-3 mb-8">
                <p className="text-amber-300 font-medium flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Now accepting partners in the top 100 US markets</span>
                </p>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-center">Apply for Partnership</h3>
              <p className="text-center mb-8">
                Enter your phone number below to speak with our partnership team about integrating AI mowing with your{" "}
                {title.toLowerCase()} services.
              </p>

              <div className="max-w-md mx-auto">
                <PhoneCaptureForm
                  source={`${formattedSlug}_pros_final`}
                  buttonText="Apply for Partnership"
                  buttonSize="lg"
                  dark={true}
                  showThankYou={true}
                  skipRedirect={true}
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold mb-4">Download Our Industry Report</h3>
                <p className="text-gray-300">
                  Get our comprehensive report on how AI mowing is transforming the {title.toLowerCase()} industry, with
                  case studies and ROI analysis.
                </p>
              </div>
              <div className="md:w-1/2">
                <Button className="bg-white text-green-900 hover:bg-gray-200">Download Free Report</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO and Voice Search Optimization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: `SweatyJob AI Mower Partnership for ${title} Companies`,
            description: description,
            provider: {
              "@type": "Organization",
              name: "SweatyJob",
              url: "https://sweatyjob.com",
            },
            serviceType: "Business Partnership",
            audience: {
              "@type": "Audience",
              audienceType: `${title} Companies`,
            },
            offers: {
              "@type": "Offer",
              description: `AI mower technology partnership for ${title.toLowerCase()} businesses`,
              availability: "https://schema.org/InStock",
            },
            // FAQ section for voice search optimization
            mainEntity:
              faqs && faqs.length > 0
                ? faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.answer,
                    },
                  }))
                : [
                    {
                      "@type": "Question",
                      name: `How can ${title} companies benefit from AI mowing technology?`,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: `${title} companies can increase revenue, reduce customer churn, and create recurring revenue streams by offering AI mowing as a complementary service to their existing ${title.toLowerCase()} services.`,
                      },
                    },
                    {
                      "@type": "Question",
                      name: `What training is provided for ${title} professionals?`,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: `We provide comprehensive training for your team on AI mower setup, maintenance, and troubleshooting, all designed to integrate seamlessly with your existing ${title.toLowerCase()} service visits.`,
                      },
                    },
                    {
                      "@type": "Question",
                      name: `How does the partnership between SweatyJob and ${title} companies work?`,
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: `SweatyJob handles the technology, warranty, and support for the AI mowers, while your ${title} company offers bundled services to customers, creating a complete outdoor solution with a single monthly payment.`,
                      },
                    },
                  ],
          }),
        }}
      />
    </main>
  )
}
