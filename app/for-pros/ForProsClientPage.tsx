"use client"

import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Award,
  DollarSign,
  X,
  Smartphone,
  Mountain,
  Battery,
  CloudRain,
  Volume2,
  Calendar,
  BarChart,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { MarketSelector } from "@/components/market-selector"
import { serviceVerticalsData } from "./service-verticals-data"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function ForProsClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="pt-24 bg-slate-900 text-white">
      {/* Sticky Navigation */}
      <div className="sticky top-16 z-10 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto">
          <div className="flex overflow-x-auto scrollbar-hide py-4 px-4 gap-8">
            <button
              onClick={() => document.getElementById("overview")?.scrollIntoView({ behavior: "smooth" })}
              className={cn(
                "text-sm font-medium whitespace-nowrap px-1 py-2 border-b-2 transition-colors",
                activeTab === "overview"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-green-600",
              )}
            >
              Overview
            </button>
            <button
              onClick={() => document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" })}
              className={cn(
                "text-sm font-medium whitespace-nowrap px-1 py-2 border-b-2 transition-colors",
                activeTab === "industries"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-green-600",
              )}
            >
              Industries
            </button>
            <button
              onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
              className={cn(
                "text-sm font-medium whitespace-nowrap px-1 py-2 border-b-2 transition-colors",
                activeTab === "product"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-green-600",
              )}
            >
              Product Features
            </button>
            <button
              onClick={() => document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" })}
              className={cn(
                "text-sm font-medium whitespace-nowrap px-1 py-2 border-b-2 transition-colors",
                activeTab === "benefits"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-green-600",
              )}
            >
              Partner Benefits
            </button>
            <button
              onClick={() => document.getElementById("markets")?.scrollIntoView({ behavior: "smooth" })}
              className={cn(
                "text-sm font-medium whitespace-nowrap px-1 py-2 border-b-2 transition-colors",
                activeTab === "markets"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-green-600",
              )}
            >
              Markets
            </button>
            <Link
              href="#ready-to-transform"
              className={cn(
                "text-sm font-medium whitespace-nowrap px-1 py-2 border-b-2 transition-colors",
                activeTab === "apply"
                  ? "border-green-600 text-green-600"
                  : "border-transparent text-gray-600 hover:text-green-600",
              )}
            >
              Apply
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="overview"
        className="relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden"
        onMouseEnter={() => setActiveTab("overview")}
      >
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 z-10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 border border-green-200 text-green-800 text-sm font-medium mb-6">
                <span className="mr-2">•</span>
                FOR SERVICE PROFESSIONALS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
                Grow Your Business with <span className="text-green-600">AI Mowing</span> Technology
              </h1>

              <p className="text-xl text-slate-700 mb-8 max-w-xl">
                Add a new revenue stream with zero upfront costs. Offer cutting-edge robotic lawn care to your customers
                and earn substantial monthly commissions.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                  <Link href="#partner-program-benefits">Become a Partner</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => document.getElementById("industries")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Find Your Industry
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 items-center">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-green-100">
                    <img src="/images/pros/lawn-care-pro.jpg" alt="Partner" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-green-100">
                    <img src="/images/pros/pest-control-pro.jpg" alt="Partner" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-green-100">
                    <img
                      src="/images/pros/landscape-design-pro.jpg"
                      alt="Partner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm text-slate-600">Join our network of service professionals</p>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://www.bestmow.com/cdn/shop/files/30.png?v=1744042530&width=3600"
                  alt="BestMow Robot Mower"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium opacity-90">Robotic Lawn Mower</p>
                      <h3 className="text-2xl font-bold">AI-Powered Precision</h3>
                    </div>
                    <Button
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                      onClick={() => document.getElementById("product")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      See Features
                    </Button>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Zero Inventory Cost</h4>
                    <p className="text-sm text-slate-600">
                      We ship directly to customers. You earn without investment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Recurring Revenue</h3>
                <p className="text-slate-600 mb-4">
                  Earn substantial monthly commissions with our subscription model. Create predictable income streams.
                </p>
                {/* No learn more link */}
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Customer Retention</h3>
                <p className="text-slate-600 mb-4">
                  Reduce churn by creating multiple service touchpoints and increasing switching costs.
                </p>
                {/* No learn more link */}
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">Market Differentiation</h3>
                <p className="text-slate-600 mb-4">
                  Stand out from competitors with cutting-edge technology. Position your business as an innovative
                  leader.
                </p>
                {/* No learn more link */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-16 bg-gray-50" onMouseEnter={() => setActiveTab("industries")}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Find Your Industry Solution</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Select your service vertical to see how AI mowing technology can specifically benefit your business
            </p>
          </div>

          {/* All Industries */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {Object.entries(serviceVerticalsData).map(([slug, data]) => {
              // Special handling for the two problematic images
              let imagePath
              if (slug === "irrigation-sprinklers") {
                imagePath = "/images/pros/irrigation-pro.jpg"
              } else if (slug === "pool-spa-maintenance") {
                imagePath = "/images/pros/pool-spa-pro.jpg"
              } else {
                // For all other services, use the standard pattern
                imagePath = `/images/pros/${slug}-pro.jpg`
              }

              return (
                <Link
                  key={slug}
                  href={`/partners/${slug}`}
                  className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 z-10"></div>
                  <div className="h-64 bg-gray-200">
                    <img
                      src={imagePath || "/placeholder.svg"}
                      alt={data.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-green-300 transition-colors">
                          {data.title}
                        </h3>
                        <p className="text-sm text-white/80 line-clamp-2">
                          {data.shortDescription || data.description.substring(0, 100) + "..."}
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-green-600 transition-colors">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section id="product" className="py-16 bg-white" onMouseEnter={() => setActiveTab("product")}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-slate-900">Partner Mower Technology</h2>
              <p className="text-xl text-slate-600 mb-8">
                We connect you with advanced AI robotic mowers from leading manufacturers to offer your customers
                cutting-edge lawn care
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Plug & Play Setup</h4>
                    <p className="text-sm text-slate-600">Simple installation with minimal effort</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <X className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">No Perimeter Wires</h4>
                    <p className="text-sm text-slate-600">Advanced GPS and vision-based navigation</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <Zap className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">High Capacity</h4>
                    <p className="text-sm text-slate-600">Mowers handle up to 2,400 sq.m per day</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <Smartphone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">App Control</h4>
                    <p className="text-sm text-slate-600">Full control and scheduling via smartphone</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <Mountain className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Handles 30° Slopes</h4>
                    <p className="text-sm text-slate-600">Powerful motors tackle challenging terrain</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <Battery className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Auto-Recharging</h4>
                    <p className="text-sm text-slate-600">Returns to base when battery is low</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <CloudRain className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Weatherproof</h4>
                    <p className="text-sm text-slate-600">Operates in rain or shine</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-full mr-4">
                    <Volume2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Whisper-Quiet</h4>
                    <p className="text-sm text-slate-600">70% quieter than traditional mowers</p>
                  </div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Precision Edging, Perfect Lawns</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="relative h-40 rounded-lg overflow-hidden mb-2">
                      <img
                        src="https://www.bestmow.com/cdn/shop/files/bestmow_robot_mower_slid_2.webp?v=1737858458"
                        alt="After AI Mowing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-slate-600">Precise, even cutting with clean edges</p>
                  </div>

                  <div>
                    <div className="relative h-40 rounded-lg overflow-hidden mb-2">
                      <img
                        src="https://www.bestmow.com/cdn/shop/files/best_mow_automower_slid_3.jpg?v=1737377565"
                        alt="Before AI Mowing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-sm text-slate-600">Uneven growth and ragged edges</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="sticky top-32">
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
                  <div className="p-6 border-b border-gray-100">
                    <h3 id="partner-program-benefits" className="text-xl font-bold text-slate-900">
                      Partner Program Benefits
                    </h3>
                  </div>

                  <div className="p-6">
                    <div className="bg-green-50 rounded-xl p-6 border border-green-100 mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <p className="text-sm text-green-800 font-medium">Partner Advantages</p>
                          <div className="flex items-baseline">
                            <span className="text-xl font-bold text-slate-900">Premium Partnership Program</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-full px-3 py-1 text-xs font-medium text-green-600 border border-green-200">
                          Limited Availability
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Zero inventory investment</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Substantial monthly commissions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Free replacement parts for customers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Marketing materials provided</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">Dedicated partner support</span>
                        </li>
                      </ul>

                      <PhoneCaptureForm
                        source="partner_program_benefits"
                        buttonText="Apply for Partnership"
                        buttonSize="default"
                        dark={false}
                        showThankYou={true}
                        skipRedirect={true}
                      />
                    </div>

                    <div className="rounded-xl overflow-hidden mb-6">
                      <img
                        src="https://www.bestmow.com/cdn/shop/files/Screenshot_7_8483316b-15e5-4f1c-bf6e-198fb40e58e5.jpg?v=1743509297&width=3600"
                        alt="Mower App Interface"
                        className="w-full h-auto"
                      />
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <p className="text-center text-sm text-slate-600 mb-4">
                        Your customers get premium lawn care, you get recurring revenue
                      </p>
                      <div className="mb-2">
                        <PhoneCaptureForm
                          source="product_features_section"
                          buttonText="Become a Partner"
                          buttonSize="default"
                          dark={false}
                          showThankYou={true}
                          skipRedirect={true}
                        />
                      </div>
                      <p className="text-center text-xs text-slate-500 mt-2">No inventory costs. No financial risk.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits Section */}
      <section id="partner-benefits" className="py-16 bg-gray-50" onMouseEnter={() => setActiveTab("benefits")}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Partner Benefits</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join our network and unlock these exclusive advantages for your service business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Zero Upfront Costs</h3>
                <p className="text-slate-600 text-sm">
                  No inventory investment required. We ship directly to your customers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Recurring Revenue</h3>
                <p className="text-slate-600 text-sm">
                  Earn substantial monthly commissions with our subscription model.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Customer Retention</h3>
                <p className="text-slate-600 text-sm">
                  Increase customer loyalty and reduce churn with ongoing service.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900">Upsell Opportunities</h3>
                <p className="text-slate-600 text-sm">
                  Create opportunities to sell additional services to mower customers.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">How the Partnership Works</h3>
                  <p className="text-slate-600 mb-6">
                    Our partnership model is designed to be simple, profitable, and risk-free for service professionals.
                  </p>

                  <ol className="space-y-4">
                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                        <span className="font-bold text-green-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">You Promote</h4>
                        <p className="text-sm text-slate-600">
                          Offer AI mowing solutions to your existing customers and new prospects.
                        </p>
                      </div>
                    </li>

                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                        <span className="font-bold text-green-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">We Ship & Support</h4>
                        <p className="text-sm text-slate-600">
                          We handle product delivery, setup instructions, and customer support.
                        </p>
                      </div>
                    </li>

                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                        <span className="font-bold text-green-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">You Earn</h4>
                        <p className="text-sm text-slate-600">
                          Receive substantial monthly commissions for as long as the customer subscribes.
                        </p>
                      </div>
                    </li>

                    <li className="flex">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1">
                        <span className="font-bold text-green-600">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Grow Together</h4>
                        <p className="text-sm text-slate-600">
                          Expand your offering with additional services and products as we grow.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="md:w-1/2">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 h-full">
                    <h3 className="text-xl font-bold mb-4 text-slate-900">Partner Resources</h3>

                    <div className="mb-6">
                      <img
                        src="https://www.bestmow.com/cdn/shop/files/20250227-195829.937-9.webp?v=1740728493&width=1320"
                        alt="BestMow Robot Mower in Action"
                        className="w-full h-auto rounded-lg mb-4"
                      />

                      <h4 className="font-bold text-slate-900 mb-2">We Provide Everything You Need</h4>
                      <ul className="text-sm text-slate-600 space-y-2">
                        <li>• Comprehensive training materials</li>
                        <li>• Marketing collateral and sales tools</li>
                        <li>• Technical support and troubleshooting</li>
                        <li>• Customer service resources</li>
                        <li>• Regular product updates</li>
                      </ul>
                    </div>

                    <PhoneCaptureForm
                      source="partner_resources_section"
                      buttonText="Become a Partner Today"
                      buttonSize="default"
                      dark={false}
                      showThankYou={true}
                      skipRedirect={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Markets Section */}
      <section id="markets" className="py-16 bg-white">
        <div className="container mx-auto px-4"></div>
      </section>

      {/* Available Markets Section */}
      <section id="markets" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Available Markets</h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're currently accepting service partners in these top US markets. Join our growing network of service
              professionals.
            </p>
          </div>

          <MarketSelector serviceVertical="lawn-care" limit={100} />
        </div>
      </section>

      {/* Contact Section with Phone Capture */}
      <section
        id="ready-to-transform"
        className="py-16 bg-gradient-to-r from-green-900 to-green-800 text-white border-t border-green-700"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to learn how we can help you integrate AI mower technology into your service offerings.
          </p>

          <div className="max-w-md mx-auto">
            <PhoneCaptureForm
              source="for_pros_page"
              buttonText="Get Started"
              buttonSize="lg"
              dark={true}
              showThankYou={true}
              skipRedirect={true}
            />
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "SweatyJob AI Mower Partnership Program",
            description:
              "Partner with SweatyJob to offer AI mower technology to your clients and transform your outdoor service business.",
            provider: {
              "@type": "Organization",
              name: "SweatyJob",
              url: "https://sweatyjob.com",
            },
            serviceType: "Business Partnership",
            areaServed: "United States",
            audience: {
              "@type": "Audience",
              audienceType: "Outdoor Service Businesses",
            },
            offers: {
              "@type": "Offer",
              description: "AI mower technology partnership for outdoor service businesses",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </main>
  )
}
