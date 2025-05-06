"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, CheckCircle, ChevronRight, Repeat, Sprout, Bug, Flower2, Building, Home } from "lucide-react"

interface IndustryShowcaseProps {
  partners?: any[] // Added to match usage in market-page-template.tsx
}

const IndustryShowcase = ({ partners }: IndustryShowcaseProps) => {
  const industries = [
    {
      id: "lawn-care",
      name: "Lawn Care",
      icon: <Sprout className="h-6 w-6 text-green-600" />,
      description:
        "Transform your lawn care business with AI mowing technology. Increase recurring revenue and reduce customer churn. Add AI mowing to your service offerings with zero upfront costs or inventory.",
      benefits: [
        "Complement your existing lawn care services",
        "Create recurring monthly revenue streams",
        "Increase customer retention and lifetime value",
        "Differentiate from traditional lawn care companies",
      ],
      integration: [
        "Technicians can perform basic mower maintenance during regular lawn care visits",
        "Combine fertilization, weed control, and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
      ],
      metrics: [
        "Average revenue increase: 30-50% per customer",
        "Customer retention improvement: 40%",
        "Typical monthly profit: $50+ per mower",
      ],
      link: "/partners/lawn-care",
    },
    {
      id: "pest-control",
      name: "Pest Control",
      icon: <Bug className="h-6 w-6 text-green-600" />,
      description:
        "Expand your pest control business with AI mowing technology. Create bundled services and increase customer retention. Add AI mowing to your service offerings with zero upfront costs or inventory.",
      benefits: [
        "Increase average revenue per customer by 30-50%",
        "Reduce customer churn with multiple service touchpoints",
        "Create natural upsell opportunities during pest control visits",
        "Build stronger customer relationships through expanded services",
      ],
      integration: [
        "Regular mowing reduces tick and mosquito populations by eliminating tall grass habitats",
        "Technicians can check mowers during regular pest control visits",
        "Create a complete outdoor care package with a single provider",
      ],
      metrics: [
        "Customer cancellation reduction: 30-40%",
        "Bundled service adoption rate: 35-45%",
        "Average additional monthly revenue: $45-60 per customer",
      ],
      link: "/partners/pest-control",
    },
    {
      id: "landscape-design",
      name: "Landscape Design",
      icon: <Flower2 className="h-6 w-6 text-green-600" />,
      description:
        "Expand your landscape design business with AI mowing technology. Create ongoing relationships after installation projects are complete. Add AI mowing to your service offerings with zero upfront costs or inventory.",
      benefits: [
        "Transform one-time projects into ongoing customer relationships",
        "Create predictable recurring revenue beyond project work",
        "Incorporate AI mowing technology directly into your landscape designs",
        "Increase project values by including AI mower installation",
      ],
      integration: [
        "Design landscapes with AI mowing in mind for optimal performance",
        "Include AI mower setup as part of landscape installation projects",
        "Offer maintenance packages to keep landscapes looking their best",
      ],
      metrics: [
        "Project-to-subscription conversion rate: 60-70%",
        "Average project value increase: 15-25%",
        "Ongoing monthly revenue per completed project: $50-75",
      ],
      link: "/partners/landscape-design",
    },
    {
      id: "property-management",
      name: "Property Management",
      icon: <Building className="h-6 w-6 text-green-600" />,
      description:
        "Enhance your property management services with AI mowing technology. Reduce maintenance costs while improving property appearance. Add AI mowing to your service offerings with zero upfront costs or inventory.",
      benefits: [
        "Reduce labor costs and scheduling headaches",
        "Improve property appearance with consistent mowing",
        "Create additional revenue stream from existing properties",
        "Offer a premium amenity to property owners and tenants",
      ],
      integration: [
        "Easily monitor multiple properties through a centralized dashboard",
        "Integrate with existing property management software",
        "Provide detailed maintenance reports to property owners",
      ],
      metrics: [
        "Maintenance cost reduction: 25-35%",
        "Property owner satisfaction increase: 40%",
        "Additional monthly revenue: $40-60 per property",
      ],
      link: "/partners/property-management",
    },
    {
      id: "home-services",
      name: "Home Services",
      icon: <Home className="h-6 w-6 text-green-600" />,
      description:
        "Add AI mowing to your existing home service business. Create bundled service packages for homeowners seeking comprehensive property care. Add AI mowing to your service offerings with zero upfront costs or inventory.",
      benefits: [
        "Expand your service offerings with minimal additional work",
        "Increase average revenue per customer",
        "Create year-round relationships with seasonal customers",
        "Differentiate from single-service competitors",
      ],
      integration: [
        "Easily add AI mowing to your existing service packages",
        "Perform basic mower maintenance during regular service visits",
        "Create comprehensive home care packages for different customer needs",
      ],
      metrics: [
        "Service package upgrade rate: 30-40%",
        "Customer retention improvement: 35%",
        "Average revenue increase: 25-45% per customer",
      ],
      link: "/partners/home-services",
    },
  ]

  return (
    <Tabs defaultValue="lawn-care" className="max-w-5xl mx-auto">
      <TabsList className="grid grid-cols-5 mb-8">
        {industries.map((industry) => (
          <TabsTrigger key={industry.id} value={industry.id} className="flex items-center gap-2">
            {industry.icon}
            <span className="hidden md:inline">{industry.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {industries.map((industry) => (
        <TabsContent key={industry.id} value={industry.id}>
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                {industry.icon}
                <CardTitle>{industry.name}</CardTitle>
              </div>
              <CardDescription className="text-base">{industry.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" /> Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900 flex items-center">
                    <Repeat className="h-5 w-5 text-green-500 mr-2" /> Integration Points
                  </h4>
                  <ul className="space-y-2">
                    {industry.integration.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-slate-900 flex items-center">
                    <BarChart3 className="h-5 w-5 text-green-500 mr-2" /> Performance Metrics
                  </h4>
                  <ul className="space-y-2">
                    {industry.metrics.map((metric, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="bg-green-600 hover:bg-green-500 text-white">
                  <Link href={industry.link} className="flex items-center">
                    Learn More <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default IndustryShowcase
