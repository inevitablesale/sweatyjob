import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react"

// Define neighborhoods data
const neighborhoods = [
  {
    name: "Battery Park",
    slug: "battery-park",
    image: "/images/neighborhoods/battery-park.jpg",
  },
  {
    name: "Bellevue",
    slug: "bellevue",
    image: "/images/neighborhoods/bellevue.jpg",
  },
  {
    name: "Ginter Park",
    slug: "ginter-park",
    image: "/images/neighborhoods/ginter-park.jpg",
  },
  {
    name: "Laburnum Park",
    slug: "laburnum-park",
    image: "/images/neighborhoods/laburnum-park.jpg",
  },
  {
    name: "Sherwood Park",
    slug: "sherwood-park",
    image: "/images/neighborhoods/sherwood-park.jpg",
  },
  {
    name: "Rosedale",
    slug: "rosedale",
    image: "/images/neighborhoods/rosedale.jpg",
  },
]

// Define services data
const services = [
  {
    id: "lawn-mowing",
    title: "Lawn Mowing",
    description: "Professional lawn mowing services tailored to your yard's specific needs.",
    longDescription:
      "Our lawn mowing service goes beyond just cutting grass. We use professional-grade equipment to ensure a precise, even cut that promotes healthy grass growth. Our technicians are trained to identify the optimal cutting height for your specific grass type and adjust accordingly throughout the seasons. We also edge along walkways, driveways, and beds for a clean, manicured look.",
    features: [
      "Weekly or bi-weekly service schedules",
      "Precision cutting with commercial-grade equipment",
      "Edging along walkways, driveways, and beds",
      "Blowing of clippings from hard surfaces",
      "Seasonal height adjustments",
      "Mulching option for returning nutrients to soil",
    ],
    benefits: [
      "Consistently maintained, beautiful lawn without the hassle",
      "Proper cutting techniques that promote healthy grass growth",
      "More free time to enjoy your weekends",
      "Enhanced curb appeal and property value",
      "Professional results that impress neighbors",
      "Environmentally friendly practices",
    ],
    image: "/images/hero-lawn.jpg",
    metaTitle: "Professional Lawn Mowing Services in Richmond, VA | SweatyJob",
    metaDescription:
      "Expert lawn mowing services in Richmond, VA. Weekly or bi-weekly schedules, precision cutting, and edging. Join the Saturday Club for member pricing.",
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    description: "Crystal clear windows inside and out. Improve your home's appearance and let in more natural light.",
    longDescription:
      "Our professional window cleaning service removes dirt, water spots, pollen, and other debris that accumulates on your windows over time. We use specialized tools and eco-friendly cleaning solutions to leave your windows spotless and streak-free. Our technicians are trained to safely access and clean windows on multi-story homes, ensuring every window shines from top to bottom.",
    features: [
      "Interior and exterior window cleaning",
      "Eco-friendly, streak-free cleaning solutions",
      "Screen cleaning and frame wiping",
      "Track and sill cleaning",
      "Hard water spot removal",
      "Multi-story window access",
    ],
    benefits: [
      "Increased natural light in your home",
      "Improved view and overall appearance",
      "Extended window lifespan by removing corrosive contaminants",
      "Enhanced energy efficiency",
      "Professional results without the risk of ladder accidents",
      "Spotless, streak-free windows that last longer between cleanings",
    ],
    image: "/images/services/window-cleaning.jpg",
    metaTitle: "Professional Window Cleaning Services in Richmond, VA | SweatyJob",
    metaDescription:
      "Expert window cleaning services in Richmond, VA. Interior and exterior cleaning, streak-free results, and screen cleaning. Join the Saturday Club for member pricing.",
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    description: "Revitalize your home's exterior surfaces with professional pressure washing.",
    longDescription:
      "Our pressure washing service removes years of built-up dirt, grime, mold, mildew, and algae from your home's exterior surfaces. We use commercial-grade equipment with adjustable pressure settings to safely clean different surfaces without causing damage. Our technicians are trained to select the appropriate pressure and cleaning solutions for each surface type, ensuring effective cleaning while preserving your property's integrity.",
    features: [
      "House siding and exterior cleaning",
      "Driveway and walkway pressure washing",
      "Deck and patio cleaning",
      "Fence cleaning and restoration",
      "Mold, mildew, and algae removal",
      "Eco-friendly cleaning solutions",
    ],
    benefits: [
      "Dramatically improved curb appeal",
      "Prevention of damage from mold and mildew growth",
      "Extended lifespan of exterior surfaces",
      "Preparation for painting or staining projects",
      "Removal of allergens and improved outdoor air quality",
      "Increased property value",
    ],
    image: "/images/services/pressure-washing.jpg",
    metaTitle: "Professional Pressure Washing Services in Richmond, VA | SweatyJob",
    metaDescription:
      "Expert pressure washing services in Richmond, VA. House siding, driveways, decks, and more. Join the Saturday Club for member pricing.",
  },
  {
    id: "grill-scrubbing",
    title: "Grill Scrubbing",
    description: "Restore your grill to like-new condition. Deep cleaning service for all types of grills.",
    longDescription:
      "Our grill scrubbing service provides a comprehensive deep cleaning for all types of grills, removing built-up grease, carbon, and food residue that can affect performance and flavor. We disassemble your grill to clean each component individually, including grates, burners, heat deflectors, and drip pans. Our technicians use specialized tools and food-safe cleaning solutions to restore your grill to like-new condition.",
    features: [
      "Complete disassembly and reassembly",
      "Deep cleaning of grates, burners, and heat deflectors",
      "Grease trap and drip pan cleaning",
      "Exterior cleaning and polishing",
      "Food-safe cleaning solutions",
      "Inspection of gas lines and connections (for gas grills)",
    ],
    benefits: [
      "Improved grill performance and more even cooking",
      "Enhanced flavor of grilled foods",
      "Elimination of harmful bacteria and food contaminants",
      "Reduced flare-ups and fire hazards",
      "Extended grill lifespan",
      "Ready for immediate use after service",
    ],
    image: "/images/services/grill-steaming.jpg",
    metaTitle: "Professional Grill Cleaning Services in Richmond, VA | SweatyJob",
    metaDescription:
      "Expert grill cleaning services in Richmond, VA. Deep cleaning for all grill types, food-safe solutions, and same-day service. Join the Saturday Club for member pricing.",
  },
  {
    id: "flower-bed-maintenance",
    title: "Flower Bed Maintenance",
    description: "Keep your garden beds looking beautiful with professional maintenance and care.",
    longDescription:
      "Our flower bed maintenance service keeps your garden beds looking pristine and healthy throughout the growing season. We provide comprehensive care including weeding, pruning, deadheading, mulching, and plant health monitoring. Our gardening experts understand the specific needs of different plant varieties and provide tailored care to ensure your flower beds remain vibrant and thriving.",
    features: [
      "Thorough weeding and debris removal",
      "Pruning and deadheading of flowers and shrubs",
      "Mulch refreshing and redistribution",
      "Edging to maintain clean bed lines",
      "Plant health monitoring and pest identification",
      "Seasonal flower rotation recommendations",
    ],
    benefits: [
      "Beautiful, weed-free garden beds that enhance your landscape",
      "Healthier plants with improved growth and blooming",
      "Prevention of plant disease and pest infestations",
      "Proper mulching to retain moisture and reduce watering needs",
      "Expert care that saves you time and physical strain",
      "Increased property value and curb appeal",
    ],
    image: "/images/services/flower-bed-maintenance.jpg",
    metaTitle: "Professional Flower Bed Maintenance in Richmond, VA | SweatyJob",
    metaDescription:
      "Expert flower bed maintenance services in Richmond, VA. Weeding, pruning, mulching, and plant care. Join the Saturday Club for member pricing.",
  },
  {
    id: "garden-weeding",
    title: "Garden Weeding",
    description: "Keep your garden looking pristine with our thorough weeding service.",
    longDescription:
      "Our garden weeding service provides meticulous removal of unwanted plants that compete with your garden for nutrients, water, and sunlight. We hand-pull weeds to ensure complete removal of roots, preventing quick regrowth. Our gardening experts can identify even the most deceptive weeds that mimic desirable plants, ensuring your garden remains beautiful and healthy without damaging your valued plants.",
    features: [
      "Complete hand-weeding of garden beds and landscapes",
      "Root removal to prevent regrowth",
      "Disposal of all weeds and garden debris",
      "Mulch redistribution after weeding",
      "Identification of invasive species",
      "Preventative recommendations for future weed control",
    ],
    benefits: [
      "More nutrients, water, and sunlight for your desired plants",
      "Improved appearance of garden beds and landscapes",
      "Prevention of weed seed spread throughout your property",
      "Reduced competition allowing plants to thrive",
      "Expert care that saves you time and physical strain",
      "Healthier garden ecosystem overall",
    ],
    image: "/images/services/garden-weeding.jpg",
    metaTitle: "Professional Garden Weeding Services in Richmond, VA | SweatyJob",
    metaDescription:
      "Expert garden weeding services in Richmond, VA. Complete root removal, debris disposal, and preventative recommendations. Join the Saturday Club for member pricing.",
  },
]

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((service) => service.id === params.slug)

  if (!service) {
    return {
      title: "Service Not Found | SweatyJob",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
  }
}

export default function ServicePage({ params }: Props) {
  const service = services.find((service) => service.id === params.slug)

  if (!service) {
    notFound()
  }

  // Get service image
  const getServiceImage = () => {
    if (service.id === "lawn-mowing") {
      return "https://www.bestmow.com/cdn/shop/files/8.jpg?v=1743403973"
    }
    return service.image
  }

  return (
    <div className="bg-slate-900 pt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{service.title}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={getServiceImage() || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="text-xl text-gray-300 mb-6">{service.description}</p>

              <div className="bg-slate-800 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Service Highlights</h3>
                <ul className="space-y-3">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg mb-6">
                <h3 className="text-white font-medium mb-2">Request a Quote</h3>
                <PhoneCaptureForm serviceType={service.title} buttonText="Get a Free Quote" />
              </div>

              <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/5" asChild>
                <Link href="/saturday-club">
                  Join Saturday Club for Member Pricing <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Service Details Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">About Our {service.title} Service</h2>

          <div className="bg-slate-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-8">{service.longDescription}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Neighborhoods Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">{service.title} in Richmond Neighborhoods</h2>

          <p className="text-gray-300 mb-6">
            We provide {service.title.toLowerCase()} services throughout Richmond. Click on a neighborhood below to
            learn more about our tailored services in your area:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood) => (
              <Link
                key={neighborhood.slug}
                href={`/neighborhoods/${neighborhood.slug}/${service.id}`}
                className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-700 transition-colors group"
              >
                <div className="relative h-48">
                  <Image
                    src={neighborhood.image || "/placeholder.svg"}
                    alt={`${service.title} in ${neighborhood.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {neighborhood.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.title} services tailored for {neighborhood.name} homes and properties.
                  </p>
                  <div className="flex items-center text-blue-400">
                    <span>View Details</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Ready to Schedule Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Schedule Your {service.title}?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote or learn about our Saturday Club membership for exclusive discounts on
            {service.title.toLowerCase()} and other services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="w-full sm:w-auto">
              <PhoneCaptureForm serviceType={service.title} buttonText="Get a Free Quote" buttonSize="lg" />
            </div>

            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/5" asChild>
              <Link href="/saturday-club">
                Learn About Saturday Club <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
