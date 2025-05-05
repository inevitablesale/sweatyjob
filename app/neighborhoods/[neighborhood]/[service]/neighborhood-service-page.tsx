"use client"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { CheckCircle2, MapPin, Clock, Calendar, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import FeaturedTechnology from "@/components/featured-technology"

// Define services data to ensure it's always available
const defaultServices = [
  {
    id: "lawn-mowing",
    title: "Lawn Mowing",
    description: "Professional lawn mowing services tailored to your yard's specific needs.",
    image: "https://www.bestmow.com/cdn/shop/files/8.jpg?v=1743403973",
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    description: "Crystal clear windows inside and out. Improve your home's appearance and let in more natural light.",
    image: "/images/services/window-cleaning.jpg",
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    description: "Revitalize your home's exterior surfaces with professional pressure washing.",
    image: "/images/services/pressure-washing.jpg",
  },
  {
    id: "grill-scrubbing",
    title: "Grill Scrubbing",
    description: "Restore your grill to like-new condition. Deep cleaning service for all types of grills.",
    image: "/images/services/grill-steaming.jpg",
  },
  {
    id: "flower-bed-maintenance",
    title: "Flower Bed Maintenance",
    description: "Keep your garden beds looking beautiful with professional maintenance and care.",
    image: "/images/services/flower-bed-maintenance.jpg",
  },
  {
    id: "garden-weeding",
    title: "Garden Weeding",
    description: "Keep your garden looking pristine with our thorough weeding service.",
    image: "/images/services/garden-weeding.jpg",
  },
]

type NeighborhoodServicePageProps = {
  neighborhood: {
    name: string
    description: string
    slug: string
    image: string
    fallbackImage: string
  }
  service: {
    id: string
    title: string
    description: string
    longDescription: string
    features: string[]
    benefits: string[]
    image: string
  }
  services?: {
    id: string
    title: string
    description: string
    image: string
  }[]
}

// Add this function to get the correct service image
const getServiceImage = (serviceId: string) => {
  if (serviceId === "lawn-mowing") {
    return "https://www.bestmow.com/cdn/shop/files/8.jpg?v=1743403973"
  }
  return `/images/services/${serviceId}.jpg`
}

export default function NeighborhoodServicePage({
  neighborhood,
  service,
  services = defaultServices,
}: NeighborhoodServicePageProps) {
  // Format the neighborhood name and service for display
  const neighborhoodName = neighborhood.name
  const serviceTitle = service.title.toLowerCase()

  // Calculate estimated pricing based on service type
  const getPricingInfo = () => {
    switch (service.id) {
      case "lawn-mowing":
        return {
          standard: "$35-$55",
          details: "Based on yard size",
          memberDiscount: "20%",
        }
      case "window-cleaning":
        return {
          standard: "$150-$350",
          details: "Based on number of windows",
          memberDiscount: "15%",
        }
      case "pressure-washing":
        return {
          standard: "$100-$350",
          details: "Based on surface area",
          memberDiscount: "15%",
        }
      case "grill-scrubbing":
        return {
          standard: "$75-$125",
          details: "Based on grill size",
          memberDiscount: "10%",
        }
      case "flower-bed-maintenance":
        return {
          standard: "$100-$200",
          details: "Based on bed size",
          memberDiscount: "15%",
        }
      case "garden-weeding":
        return {
          standard: "$75-$150",
          details: "Based on garden size",
          memberDiscount: "15%",
        }
      case "pet-waste-removal":
        return {
          standard: "$25-$75",
          details: "Weekly or one-time service",
          memberDiscount: "20%",
        }
      case "deck-sanding":
        return {
          standard: "$250-$650",
          details: "Based on deck size",
          memberDiscount: "10%",
        }
      case "deck-staining":
        return {
          standard: "$300-$900",
          details: "Based on deck size",
          memberDiscount: "10%",
        }
      case "deck-painting":
        return {
          standard: "$350-$950",
          details: "Based on deck size",
          memberDiscount: "10%",
        }
      case "carpet-cleaning":
        return {
          standard: "$150-$350",
          details: "Based on square footage",
          memberDiscount: "15%",
        }
      case "car-detailing":
        return {
          standard: "$100-$250",
          details: "Based on vehicle size",
          memberDiscount: "15%",
        }
      default:
        return {
          standard: "Contact for pricing",
          details: "Custom quote",
          memberDiscount: "10-20%",
        }
    }
  }

  const pricing = getPricingInfo()

  // Get local testimonials
  const testimonials = [
    {
      name: "Sarah J.",
      text: `I've been using their ${serviceTitle} service in ${neighborhoodName} for over a year now. Always professional and thorough!`,
      rating: 5,
    },
    {
      name: "Michael T.",
      text: `As a busy homeowner in ${neighborhoodName}, I appreciate how reliable their ${serviceTitle} service is. They show up when promised and do excellent work.`,
      rating: 5,
    },
    {
      name: "Jennifer L.",
      text: `The Saturday Club membership has saved me so much money on regular ${serviceTitle} in ${neighborhoodName}. Highly recommend!`,
      rating: 4,
    },
  ]

  // Get service image
  // const getServiceImage = () => {
  //   if (service.id === "lawn-mowing") {
  //     return "https://www.bestmow.com/cdn/shop/files/bestmow_law_mower_slid_11.png?v=1743403966&width=1206"
  //   }
  //   return service.image || "/placeholder.svg"
  // }

  return (
    <div className="bg-slate-900 pt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/neighborhoods" className="hover:text-white">
            Neighborhoods
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/neighborhoods/${neighborhood.slug}`} className="hover:text-white">
            {neighborhood.name}
          </Link>
          <span className="mx-2">/</span>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/services/${service.id}`} className="hover:text-white">
            {service.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">
            {service.title} in {neighborhood.name}
          </span>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {service.title} in {neighborhood.name}, Richmond VA
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={getServiceImage(service.id) || "/placeholder.svg"}
                alt={`${service.title} service in ${neighborhood.name}, Richmond VA`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-white font-medium">Serving all of {neighborhood.name}</span>
              </div>

              <p className="text-xl text-gray-300 mb-6">
                Professional {service.title.toLowerCase()} services in {neighborhood.name}, Richmond. Our local experts
                provide exceptional quality at affordable rates.
              </p>

              <div className="bg-blue-600/20 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white font-medium">Standard Pricing:</p>
                  <p className="text-xl font-bold text-blue-400">{pricing.standard}</p>
                </div>
                <p className="text-gray-300 text-sm mb-2">{pricing.details}</p>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <p className="text-gray-300 text-sm">Saturday Club members save {pricing.memberDiscount}</p>
                </div>
              </div>

              <div className="bg-slate-800 p-4 rounded-lg mb-6">
                <h3 className="text-white font-medium mb-2">Request a Quote</h3>
                <PhoneCaptureForm
                  source={`${service.id}-${neighborhood.slug}`}
                  buttonText="Get a Free Quote"
                  skipRedirect={true}
                />
              </div>

              {/* Remove Saturday Club button from pricing section */}
              {/*
              <Button variant="outline" className="w-full border-blue-500 text-blue-400 hover:bg-blue-500/5" asChild>
                <Link href="/saturday-club">
                  Join Saturday Club for Member Pricing <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              */}
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Why Choose Our {service.title} in {neighborhood.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Local Experts</h3>
              <p className="text-gray-300">
                Our team knows {neighborhood.name} inside and out. We understand the specific needs of homes in this
                area and provide tailored services.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Reliable Service</h3>
              <p className="text-gray-300">
                We show up on time, every time. Our {service.title.toLowerCase()} service is consistent, thorough, and
                meets our high quality standards.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <div className="bg-blue-500/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flexible Scheduling</h3>
              <p className="text-gray-300">
                We work around your schedule to provide {service.title.toLowerCase()} services when it's most convenient
                for you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Our {service.title} Process in {neighborhood.name}
          </h2>

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
        </motion.div>

        {/* Neighborhood Specific Considerations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">{neighborhood.name} Specific Considerations</h2>

          <div className="bg-slate-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-6">
              {neighborhood.description} Our {service.title.toLowerCase()} service is specifically designed to address
              the unique characteristics of homes in this area.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  We understand the specific architectural styles common in {neighborhood.name} and adapt our service
                  accordingly.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Our team is familiar with local regulations and homeowner association requirements in{" "}
                  {neighborhood.name}.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  We've served many {neighborhood.name} residents and understand the community's expectations for
                  quality and service.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            What {neighborhood.name} Residents Say About Our {service.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-600"}`}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-3">"{testimonial.text}"</p>
                <p className="text-white font-medium">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for Professional {service.title} in {neighborhood.name}?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join your neighbors who trust us for reliable, high-quality {service.title.toLowerCase()} services.
              Contact us today for a free quote or learn about our Saturday Club membership for exclusive discounts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="w-full sm:w-auto">
                <PhoneCaptureForm
                  source={`${service.id}-${neighborhood.slug}-cta`}
                  buttonText="Get a Free Quote"
                  buttonSize="lg"
                  skipRedirect={true}
                />
              </div>

              {/* Remove Saturday Club button from CTA section */}
              {/*
              <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/5" asChild>
                <Link href="/saturday-club">
                  Learn About Saturday Club <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              */}
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Frequently Asked Questions About {service.title} in {neighborhood.name}
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                How often should I schedule {service.title.toLowerCase()} for my {neighborhood.name} home?
              </h3>
              <p className="text-gray-300">
                The frequency depends on your specific needs, but for most {neighborhood.name} homes, we recommend
                [service-specific recommendation]. Our team can provide a personalized schedule during your initial
                consultation.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                Do you offer any special rates for {neighborhood.name} residents?
              </h3>
              <p className="text-gray-300">
                Yes! All {neighborhood.name} residents are eligible for our Saturday Club membership, which provides
                10-33% discounts on all services, including {service.title.toLowerCase()}. We also offer
                neighborhood-specific promotions throughout the year.
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">
                How soon can you start {service.title.toLowerCase()} service in {neighborhood.name}?
              </h3>
              <p className="text-gray-300">
                We typically can schedule service within 1-2 weeks for new clients in {neighborhood.name}. Saturday Club
                members receive priority scheduling and can often be accommodated sooner.
              </p>
            </div>
          </div>
        </motion.div>
        <FeaturedTechnology service={service} />
      </div>
    </div>
  )
}
