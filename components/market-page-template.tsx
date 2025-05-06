"use client"
import {
  MapPin,
  Users,
  Building2,
  DollarSign,
  CheckCircle,
  ChevronRight,
  Home,
  Briefcase,
  GraduationCap,
  Layers,
  Compass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IndustryShowcase } from "@/components/industry-showcase"
import type { MarketPageProps } from "@/types/market-page.types"

export function MarketPageTemplate({ data }: MarketPageProps) {
  // Set default accent color to green if not provided
  const accentColor = data.accentColor || "green"

  // Color mapping based on accent color
  const colors = {
    primary: {
      green: "green",
      blue: "blue",
      amber: "amber",
      purple: "purple",
      teal: "teal",
    }[accentColor],

    gradient: {
      green: "from-green-900 to-green-800",
      blue: "from-blue-900 to-blue-800",
      amber: "from-amber-900 to-amber-800",
      purple: "from-purple-900 to-purple-800",
      teal: "from-teal-900 to-teal-800",
    }[accentColor],

    light: {
      green: "bg-green-100",
      blue: "bg-blue-100",
      amber: "bg-amber-100",
      purple: "bg-purple-100",
      teal: "bg-teal-100",
    }[accentColor],

    text: {
      green: "text-green-600",
      blue: "text-blue-600",
      amber: "text-amber-600",
      purple: "text-purple-600",
      teal: "text-teal-600",
    }[accentColor],

    border: {
      green: "border-green-500",
      blue: "border-blue-500",
      amber: "border-amber-500",
      purple: "border-purple-500",
      teal: "border-teal-500",
    }[accentColor],

    button: {
      green: "bg-green-500 hover:bg-green-400",
      blue: "bg-blue-500 hover:bg-blue-400",
      amber: "bg-amber-500 hover:bg-amber-400",
      purple: "bg-purple-500 hover:bg-purple-400",
      teal: "bg-teal-500 hover:bg-teal-400",
    }[accentColor],

    darkButton: {
      green: "bg-green-600 hover:bg-green-500",
      blue: "bg-blue-600 hover:bg-blue-500",
      amber: "bg-amber-600 hover:bg-amber-500",
      purple: "bg-purple-600 hover:bg-purple-500",
      teal: "bg-teal-600 hover:bg-teal-500",
    }[accentColor],

    cardGradient: {
      green: "from-green-50 to-green-100",
      blue: "from-blue-50 to-blue-100",
      amber: "from-amber-50 to-amber-100",
      purple: "from-purple-50 to-purple-100",
      teal: "from-teal-50 to-teal-100",
    }[accentColor],

    highlight: {
      green: "text-green-300",
      blue: "text-blue-300",
      amber: "text-amber-300",
      purple: "text-purple-300",
      teal: "text-teal-300",
    }[accentColor],

    lightText: {
      green: "text-green-100",
      blue: "text-blue-100",
      amber: "text-amber-100",
      purple: "text-purple-100",
      teal: "text-teal-100",
    }[accentColor],

    veryLightText: {
      green: "text-green-200",
      blue: "text-blue-200",
      amber: "text-amber-200",
      purple: "text-purple-200",
      teal: "text-teal-200",
    }[accentColor],

    darkBg: {
      green: "bg-green-700",
      blue: "bg-blue-700",
      amber: "bg-amber-700",
      purple: "bg-purple-700",
      teal: "bg-teal-700",
    }[accentColor],

    darkText: {
      green: "text-green-800",
      blue: "text-blue-800",
      amber: "text-amber-800",
      purple: "text-purple-800",
      teal: "text-teal-800",
    }[accentColor],

    cardHeader: {
      green: "bg-gradient-to-r from-green-600 to-green-500",
      blue: "bg-gradient-to-r from-blue-600 to-blue-500",
      amber: "bg-gradient-to-r from-amber-600 to-amber-500",
      purple: "bg-gradient-to-r from-purple-600 to-purple-500",
      teal: "bg-gradient-to-r from-teal-600 to-teal-500",
    }[accentColor],
  }

  return (
    <main className="bg-white">
      {/* Hero Section with Dual Audience Tabs */}
      <section className={`relative bg-gradient-to-br ${colors.gradient} pt-32 pb-20 overflow-hidden`}>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full ${colors.darkBg} ${colors.lightText} text-sm font-medium mb-6`}
              >
                <MapPin className="w-4 h-4 mr-2" />
                EXCLUSIVE OPPORTUNITY IN {data.city.toUpperCase()}, {data.state.toUpperCase()}
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-white">
                Partner with SweatyJob <span className={colors.highlight}>AI Mower Technology</span> in {data.city}
              </h1>

              {/* Dual Audience Tabs */}
              <Tabs defaultValue="existing-business" className="mt-8">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-800/50 p-1">
                  <TabsTrigger value="existing-business" className="text-lg py-3">
                    Existing Business
                  </TabsTrigger>
                  <TabsTrigger value="new-entrepreneur" className="text-lg py-3">
                    New Entrepreneur
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="existing-business" className="mt-6">
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-left">
                    <h2 className="text-2xl font-bold mb-4 text-white">
                      For Established Service Businesses in {data.city}
                    </h2>
                    <p className={`${colors.lightText} mb-6`}>
                      Add AI mowing to your existing service offerings and create a new recurring revenue stream with
                      zero inventory costs. Perfect for lawn care, pest control, landscape design, and other outdoor
                      service businesses in the {data.city} area.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className={colors.lightText}>Complement your existing services</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className={colors.lightText}>Increase customer retention</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className={colors.lightText}>Add $50+ monthly profit per customer</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className={colors.lightText}>Differentiate from competitors</span>
                      </div>
                    </div>
                    <Button size="lg" className={`${colors.button} text-white font-semibold`}>
                      <a href="#industry-solutions" className="flex items-center">
                        View Industry Solutions <ChevronRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="new-entrepreneur" className="mt-6">
                  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-left">
                    <h2 className="text-2xl font-bold mb-4 text-white">For New Entrepreneurs in {data.city}</h2>
                    <p className={`${colors.lightText} mb-6`}>
                      Start your own AI mower service business in {data.city} with zero upfront costs. We provide the
                      technology, training, and support you need to build a successful business from scratch in this
                      growing market.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className={colors.lightText}>No experience required</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className={colors.lightText}>Zero startup costs</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className={colors.lightText}>Comprehensive training provided</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className={colors.lightText}>Proven client acquisition system</span>
                      </div>
                    </div>
                    <Button size="lg" className={`${colors.button} text-white font-semibold`}>
                      <a href="#entrepreneur-path" className="flex items-center">
                        Learn More <ChevronRight className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex items-center space-x-8 mt-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">${data.marketSize}B</span>
                  <span className={`${colors.veryLightText} text-sm`}>Market Size</span>
                </div>
                <div className={`h-10 w-px ${colors.darkBg}`}></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">{data.growthRate}%</span>
                  <span className={`${colors.veryLightText} text-sm`}>Annual Growth</span>
                </div>
                <div className={`h-10 w-px ${colors.darkBg}`}></div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-white">{data.waterConservationPotential}%</span>
                  <span className={`${colors.veryLightText} text-sm`}>Water Savings</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className={`h-[400px] rounded-xl overflow-hidden shadow-2xl border border-${colors.primary}-700`}>
                <img
                  src={data.heroImageUrl || "/placeholder.svg"}
                  alt={`Aerial view of ${data.city}, ${data.state} showing neighborhoods perfect for AI mower services`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">What Makes {data.city} Perfect for AI Mowers?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover why {data.city}, {data.state} is an ideal market for launching your AI mower service business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 ${colors.light} rounded-full mr-3`}>
                    <Users className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-slate-700">Population</h3>
                  <span
                    className="ml-1 text-xs text-slate-400 cursor-help"
                    title={`Source: U.S. Census QuickFacts – ${data.city}, ${data.state}`}
                  >
                    ⓘ
                  </span>
                </div>
                <p className="text-3xl font-bold text-slate-900">{data.population.toLocaleString()}</p>
                <p className="text-sm text-slate-500 mt-1">Residents</p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-2 ${colors.light} rounded-full mr-3`}>
                    <Home className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <h3 className="font-semibold text-slate-700">Homeownership</h3>
                </div>
                <p className="text-3xl font-bold text-slate-900">{data.homeownershipRate}%</p>
                <p className="text-sm text-slate-500 mt-1">Owner-occupied homes</p>
              </CardContent>
            </Card>

            {data.medianIncome ? (
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 ${colors.light} rounded-full mr-3`}>
                      <DollarSign className={`h-5 w-5 ${colors.text}`} />
                    </div>
                    <h3 className="font-semibold text-slate-700">Median Income</h3>
                  </div>
                  <p className="text-3xl font-bold text-slate-900">${(data.medianIncome / 1000).toFixed(0)}K</p>
                  <p className="text-sm text-slate-500 mt-1">Household income</p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 ${colors.light} rounded-full mr-3`}>
                      <Briefcase className={`h-5 w-5 ${colors.text}`} />
                    </div>
                    <h3 className="font-semibold text-slate-700">Major Employers</h3>
                  </div>
                  <p className="text-3xl font-bold text-slate-900">{data.majorEmployers?.length || 0}</p>
                  <p className="text-sm text-slate-500 mt-1">Tech companies</p>
                </CardContent>
              </Card>
            )}

            {data.educationRate ? (
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 ${colors.light} rounded-full mr-3`}>
                      <GraduationCap className={`h-5 w-5 ${colors.text}`} />
                    </div>
                    <h3 className="font-semibold text-slate-700">Education</h3>
                  </div>
                  <p className="text-3xl font-bold text-slate-900">{data.educationRate}%</p>
                  <p className="text-sm text-slate-500 mt-1">Bachelor's degree or higher</p>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 ${colors.light} rounded-full mr-3`}>
                      <Building2 className={`h-5 w-5 ${colors.text}`} />
                    </div>
                    <h3 className="font-semibold text-slate-700">HOAs</h3>
                  </div>
                  <p className="text-3xl font-bold text-slate-900">{data.totalHOAs || 0}</p>
                  <p className="text-sm text-slate-500 mt-1">Active HOA communities</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Industry Solutions Showcase */}
      <section className="py-16 bg-white" id="industry-solutions">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className={`inline-block p-2 ${colors.light} rounded-full ${colors.text} mb-4`}>
              <Layers className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Industry Solutions for {data.city}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              See how AI mower technology integrates with different service verticals in the {data.city} market
            </p>
          </div>

          <IndustryShowcase />

          <div className="mt-12 max-w-3xl mx-auto bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Local Market Opportunities</h3>
            <p className="text-slate-700 mb-4">
              The {data.city} market offers unique opportunities for these service verticals:
            </p>
            <div className="space-y-4">
              {data.waterRestrictions ? (
                <div className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Water Conservation Services</h4>
                    <p className="text-slate-600 text-sm">
                      AI mowers reduce water usage by up to {data.waterConservationPotential}%, aligning with local
                      water restrictions
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Lawn Care Services</h4>
                    <p className="text-slate-600 text-sm">
                      High demand for consistent lawn maintenance in {data.city}'s {data.growingSeason.length}-month
                      growing season
                    </p>
                  </div>
                </div>
              )}

              {data.totalHOAs ? (
                <div className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900">HOA & Property Management</h4>
                    <p className="text-slate-600 text-sm">
                      {data.totalHOAs} active HOAs in {data.city} create concentrated opportunities for service
                      providers
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Property Management</h4>
                    <p className="text-slate-600 text-sm">
                      Growing demand for property maintenance services in {data.city}'s residential communities
                    </p>
                  </div>
                </div>
              )}

              {data.techAdoptionRate ? (
                <div className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Smart Home Integration</h4>
                    <p className="text-slate-600 text-sm">
                      {data.techAdoptionRate}% tech adoption rate creates opportunities for integrated smart home
                      services
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Landscape Design</h4>
                    <p className="text-slate-600 text-sm">
                      Growing demand for professional landscape design services in {data.city}'s residential communities
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Entrepreneur Path */}
      <section className="py-16 bg-slate-50" id="entrepreneur-path">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className={`inline-block p-2 ${colors.light} rounded-full ${colors.text} mb-4`}>
              <Compass className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Start Your Business in {data.city}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Build a successful AI mower service business from scratch in the {data.city} market
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className={`border-${colors.primary}-100 shadow-md`}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${colors.light} rounded-full flex items-center justify-center mb-4`}>
                  <span className={`text-xl font-bold ${colors.text}`}>1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Apply</h3>
                <p className="text-slate-600">
                  Complete our simple application form to join our partner network in {data.city}. No experience
                  required.
                </p>
              </CardContent>
            </Card>

            <Card className={`border-${colors.primary}-100 shadow-md`}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${colors.light} rounded-full flex items-center justify-center mb-4`}>
                  <span className={`text-xl font-bold ${colors.text}`}>2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Train</h3>
                <p className="text-slate-600">
                  Complete our comprehensive training program on AI mower technology and {data.city}-specific business
                  operations.
                </p>
              </CardContent>
            </Card>

            <Card className={`border-${colors.primary}-100 shadow-md`}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${colors.light} rounded-full flex items-center justify-center mb-4`}>
                  <span className={`text-xl font-bold ${colors.text}`}>3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Launch</h3>
                <p className="text-slate-600">
                  Use our proven client acquisition system to sign your first customers in {data.city} with minimal
                  marketing costs.
                </p>
              </CardContent>
            </Card>

            <Card className={`border-${colors.primary}-100 shadow-md`}>
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${colors.light} rounded-full flex items-center justify-center mb-4`}>
                  <span className={`text-xl font-bold ${colors.text}`}>4</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">Grow</h3>
                <p className="text-slate-600">
                  Scale your business with ongoing support, advanced training, and exclusive {data.city} market
                  resources.
                </p>
              </CardContent>
            </Card>
          </div>

          {data.recentLayoffs ? (
            <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Perfect Opportunity for {data.city} Professionals
              </h3>
              <p className="text-slate-700 mb-4">
                We understand that many skilled professionals in {data.city} have been affected by recent workforce
                reductions:
              </p>
              <div className="space-y-3">
                {data.recentLayoffs.map((layoff, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                    <div>
                      <h4 className="font-semibold text-slate-900">{layoff.company}</h4>
                      <p className="text-slate-600 text-sm">{layoff.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-slate-700">
                If you've been affected by these or other workforce changes, our partnership program offers a way to
                leverage your skills and build a sustainable business in {data.city}.
              </p>
            </div>
          ) : (
            <div className="mt-12 max-w-3xl mx-auto bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-slate-900">{data.city} Market Advantage</h3>
              <p className="text-slate-700 mb-4">
                The {data.city} market offers unique advantages for new entrepreneurs in the AI mower service industry:
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Growing Market</h4>
                    <p className="text-slate-600 text-sm">
                      ${data.marketSize}B market size with {data.growthRate}% annual growth rate
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Ideal Customer Base</h4>
                    <p className="text-slate-600 text-sm">
                      {data.homeownershipRate}% homeownership rate creates a stable customer base
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className={`h-5 w-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} />
                  <div>
                    <h4 className="font-semibold text-slate-900">Limited Competition</h4>
                    <p className="text-slate-600 text-sm">Early-stage market with limited established competitors</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Partner Application */}
      <section className={`py-16 bg-gradient-to-r ${colors.gradient} text-white`} id="partner-application">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started in {data.city}?</h2>
              <p className="text-xl mb-8">
                Apply now to become a SweatyJob AI Mower partner in {data.city} and start earning recurring revenue with
                zero inventory costs.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 text-center">Partner Application</h3>
              <PhoneCaptureForm
                source={`market_page_${data.city.toLowerCase()}_${data.state.toLowerCase()}`}
                buttonText="Submit Application"
                buttonSize="lg"
                dark={false}
                showThankYou={true}
                skipRedirect={true}
              />
              <p className="text-sm text-slate-500 mt-4 text-center">
                A member of our {data.city} partnership team will contact you within 24 hours to discuss next steps.
              </p>
            </div>
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
            name: `SweatyJob AI Mower Partnership Program - ${data.city}, ${data.state}`,
            description: `Partner with SweatyJob to offer AI mower technology to your clients in ${data.city}, ${data.state} and transform your outdoor service business.`,
            provider: {
              "@type": "Organization",
              name: "SweatyJob",
              url: "https://sweatyjob.com",
            },
            serviceType: "Business Partnership",
            areaServed: {
              "@type": "City",
              name: data.city,
              containedInPlace: {
                "@type": "State",
                name: data.state,
              },
            },
            audience: {
              "@type": "Audience",
              audienceType: "Outdoor Service Businesses",
            },
            offers: {
              "@type": "Offer",
              description: `AI mower technology partnership for outdoor service businesses in ${data.city}, ${data.state}`,
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </main>
  )
}
