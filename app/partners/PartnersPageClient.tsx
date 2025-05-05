"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PartnerApplicationForm } from "@/components/partner-application-form"
import { ArrowRight, CheckCircle, Users, Zap, Leaf, Shield } from "lucide-react"
import { TechnologyExplanation } from "@/components/technology-explanation"

export default function PartnersPageClient() {
  const [activeSection, setActiveSection] = useState("intro")
  const [scrollY, setScrollY] = useState(0)
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({})

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Determine active section based on scroll position
      const sectionIds = [
        "intro",
        "partnership",
        "how-it-works",
        "technology",
        "markets",
        "industry-solutions",
        "apply",
      ]

      for (const id of sectionIds) {
        const section = sectionsRef.current[id]
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Register section refs
  const registerSection = (id: string, element: HTMLElement | null) => {
    if (element) {
      sectionsRef.current[id] = element
    }
  }

  // Featured industry verticals with correct slugs
  const featuredIndustries = [
    {
      title: "Lawn Care",
      slug: "lawn-care",
      image: "/images/pros/lawn-care-pro.jpg",
      description: "Transform your lawn care business with AI mowing technology",
    },
    {
      title: "Pest Control",
      slug: "pest-control",
      image: "/images/pros/pest-control-pro.jpg",
      description: "Expand your pest control business with AI mowing technology",
    },
    {
      title: "Landscape Design",
      slug: "landscape-design",
      image: "/images/pros/landscape-design-pro.jpg",
      description: "Expand your landscape design business with AI mowing technology",
    },
    {
      title: "Irrigation",
      slug: "irrigation-sprinklers",
      image: "/images/pros/irrigation-pro.jpg",
      description: "Combine irrigation expertise with AI mowing technology",
    },
  ]

  // Featured markets with their specific URLs
  const featuredMarkets = [
    {
      city: "Chandler",
      state: "AZ",
      description: "Tech hub with year-round service",
      url: "/partners/markets/arizona/chandler",
    },
    {
      city: "Scottsdale",
      state: "AZ",
      description: "Luxury residential community",
      url: "/partners/markets/arizona/scottsdale",
    },
    {
      city: "Gilbert",
      state: "AZ",
      description: "Growing desert suburb",
      url: "/partners/markets/arizona/gilbert",
    },
    {
      city: "Plano",
      state: "TX",
      description: "Tech-forward, family-friendly",
      url: "/partners/markets/texas/plano",
    },
    {
      city: "San Jose",
      state: "CA",
      description: "Silicon Valley innovation hub",
      url: "/partners/markets/california/san-jose",
    },
    {
      city: "Fremont",
      state: "CA",
      description: "Bay Area tech community",
      url: "/partners/markets/california/fremont",
    },
    {
      city: "Virginia Beach",
      state: "VA",
      description: "Coastal living community",
      url: "/partners/markets/virginia/virginia-beach",
    },
    {
      city: "Anchorage",
      state: "AK",
      description: "Frontier market opportunity",
      url: "/partners/markets/alaska/anchorage",
    },
  ]

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      {/* Fixed Navigation */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-sweat-600">Partner Program</div>
            <nav className="hidden md:flex space-x-8">
              {[
                { id: "intro", label: "Overview" },
                { id: "partnership", label: "Partnership" },
                { id: "how-it-works", label: "Process" },
                { id: "technology", label: "Technology" },
                { id: "markets", label: "Markets" },
                { id: "industry-solutions", label: "Industries" },
                { id: "apply", label: "Apply" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-sweat-600" : "text-gray-600 hover:text-sweat-500"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="intro"
        ref={(el) => registerSection("intro", el)}
        className="pt-32 pb-20 relative bg-gradient-to-r from-sweat-50 to-white"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="text-sweat-600 font-semibold mb-4">BECOME A PARTNER</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
                Grow Your Business with AI Mowing Technology
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Add a new revenue stream with zero upfront costs. Offer cutting-edge robotic lawn care to your customers
                and keep all revenue above $99/mo per customer.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-sweat-600 hover:bg-sweat-700 text-white font-semibold px-8 py-6 text-lg"
              >
                <a href="#apply" className="flex items-center">
                  PARTNER WITH US <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/robotic-lawncare-pro.png"
                alt="Partner Dashboard"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Become a Partner Section */}
      <section id="partnership" ref={(el) => registerSection("partnership", el)} className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Why Become a Partner?</h2>
            <p className="text-xl text-gray-700">
              Our solution is designed to optimize business performance for a wide range of industries, including lawn
              care, landscaping, and outdoor services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Existing Business Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-sweat-500/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">For Established Service Businesses</h3>
                  <p className="text-gray-700 mb-6">
                    Add AI mowing to your existing service offerings and create a new recurring revenue stream.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Complement existing services</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Increase customer retention</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Create recurring revenue</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Differentiate your business</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-sweat-600 hover:bg-sweat-700 text-white">
                    <a href="#industry-solutions" className="flex items-center justify-center">
                      Find Your Industry <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* New Entrepreneur Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full border-2 border-gray-100 hover:border-sweat-500/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">For New Entrepreneurs</h3>
                  <p className="text-gray-700 mb-6">
                    Start your own AI mower service business with minimal upfront costs. We provide the technology,
                    training, and support you need.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Low barrier to entry</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Minimal startup costs</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Comprehensive training</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">Established brand support</span>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-sweat-600 hover:bg-sweat-700 text-white">
                    <a href="#apply" className="flex items-center justify-center">
                      Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Explanation Section */}
      <section id="technology" ref={(el) => registerSection("technology", el)} className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Our Technology</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Powered by advanced AI and robotics, our solutions deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">How Our Technology Works</h3>
              <p className="text-gray-700">
                Our technology uses advanced AI and sensor technology to handle complex mowing scenarios autonomously.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Multi-Map Mowing</h3>
              <p className="text-gray-700">
                Supports multiple mowing maps, allowing it to mow a single lawn or switch between several lawns in
                sequence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Brand Partnerships</h3>
              <p className="text-gray-700">
                We work with leading robotic AI mower brands to provide the best technology for every lawn type and
                size.
              </p>
            </div>
          </div>

          <TechnologyExplanation />
        </div>
      </section>

      {/* Markets Section */}
      <section id="markets" ref={(el) => registerSection("markets", el)} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Markets</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're rapidly expanding across the country. Check if your area is already covered or join our waitlist.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {/* Featured Markets */}
            {featuredMarkets.map((market, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:border-green-500 transition-colors"
              >
                <Link href={market.url} className="block">
                  <h3 className="font-semibold text-lg">
                    {market.city}, {market.state}
                  </h3>
                  <p className="text-gray-600 text-sm">{market.description}</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/partners/markets"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sweat-600 hover:bg-sweat-700 transition-colors"
            >
              View All Markets
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industry Solutions - Interactive Grid */}
      <section
        id="industry-solutions"
        ref={(el) => registerSection("industry-solutions", el)}
        className="py-20 bg-gray-50 relative"
      >
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">Industry Solutions</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Select your service vertical to see how our mowing technology can specifically benefit your business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featuredIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link href={`/partners/${industry.slug}?certification=selected`}>
                  <div className="relative overflow-hidden rounded-xl aspect-square shadow-md">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Darker overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sweat-300 transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-xs text-white line-clamp-2">{industry.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Add this button below the grid */}
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-sweat-600 hover:bg-sweat-700 text-white">
              <Link href="/partners/industries" className="flex items-center">
                View All Industries <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works - Vertical Timeline */}
      <section id="how-it-works" ref={(el) => registerSection("how-it-works", el)} className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">How It Works</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our partnership model is designed to be simple and effective
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[19px] top-0 bottom-0 w-1 bg-gradient-to-b from-sweat-500 to-sweat-300 md:left-1/2 md:-ml-0.5"></div>

            {/* Timeline Steps */}
            {[
              {
                title: "You Promote",
                description: "Offer AI mowing solutions to your existing customers and new prospects.",
                icon: <Users className="h-6 w-6 text-white" />,
              },
              {
                title: "We Ship & Support",
                description: "We handle product delivery, setup instructions, and customer support.",
                icon: <Leaf className="h-6 w-6 text-white" />,
              },
              {
                title: "You Earn",
                description: "Keep all revenue above $99/mo for as long as the customer subscribes.",
                icon: <Zap className="h-6 w-6 text-white" />,
              },
              {
                title: "Grow Together",
                description: "Expand your offering with additional services and products as we grow.",
                icon: <Zap className="h-6 w-6 text-white" />,
              },
            ].map((step, index) => (
              <div key={index} className="relative z-10 mb-12 md:mb-20">
                <div className="flex items-start md:justify-between">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 mt-1.5 w-10 h-10 rounded-full bg-sweat-500 flex items-center justify-center z-10 md:left-1/2 md:-ml-5">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className={`pl-16 md:pl-0 md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"
                    }`}
                  >
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>

          {/* Business Model Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 bg-sweat-50 rounded-2xl p-8 border border-sweat-100 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">No Inventory Business Model</h3>
                <p className="text-gray-700 mb-6">
                  Unlike traditional equipment dealers, you never purchase, stock, or finance any inventory. We work
                  with robotic AI mower brands and handle all equipment, shipping, and warranty service. You focus on
                  selling and supporting customers.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No capital investment</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No warehouse needed</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Zero inventory risk</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">No shipping logistics</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-bold mb-4 text-gray-900">Get Started Today</h4>
                  <p className="text-gray-700 mb-4">
                    Join our partner program and start offering AI mowing solutions to your customers.
                  </p>
                  <Button asChild className="w-full mt-6 bg-sweat-600 hover:bg-sweat-700 text-white">
                    <a href="#apply" className="flex items-center justify-center">
                      Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Section - Floating Card */}
      <section id="apply" ref={(el) => registerSection("apply", el)} className="py-20 bg-sweat-600 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Begin Your Partnership Journey</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join the partner community and transform your business with our mowing technology
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Partner Application</h3>
              <PartnerApplicationForm />
              <p className="mt-4 text-center text-sm text-gray-600">
                A member of our partnership team will contact you within 24 hours.
              </p>
            </motion.div>

            <div className="mt-8 flex justify-center">
              <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-white border border-white/30">
                <Shield className="mr-2 h-4 w-4 text-white" />
                <span className="text-sm font-medium">Limited spots available in each market</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Scroll Progress Indicator */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-12 h-12 rounded-full bg-sweat-600 flex items-center justify-center shadow-lg cursor-pointer hover:bg-sweat-700 transition-colors">
          <a href="#intro" className="text-white">
            <ArrowRight className="h-5 w-5 rotate-[-90deg]" />
          </a>
        </div>
      </div>
    </main>
  )
}
