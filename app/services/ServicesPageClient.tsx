"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight, CheckCircle2, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import FeaturedTechnology from "@/components/featured-technology"

export default function ServicesPageClient() {
  const services = [
    {
      title: "Window Cleaning",
      image: "/images/services/window-cleaning.jpg",
      description:
        "Crystal clear windows inside and out. Improve your home's appearance and let in more natural light.",
      features: [
        "Interior and exterior glass cleaning",
        "Screen cleaning and inspection",
        "Sill, track, and frame cleaning",
        "Streak-free finish using professional techniques",
      ],
      id: "windows",
      longDescription:
        "Our window cleaning service removes accumulated dirt, pollen, and environmental residue that blocks natural light and damages glass over time. Using professional-grade, eco-friendly solutions, we clean not just the glass but all window components for a complete restoration of clarity and function.",
      benefits: [
        "Increases natural light by up to 30% in most homes",
        "Extends the lifespan of windows by preventing etching",
        "Improves energy efficiency by removing insulating dirt layers",
        "Enhances overall home appearance instantly",
      ],
      pricing: [
        { type: "Small homes", price: "$150–$250", details: "Up to 10 windows" },
        { type: "Medium homes", price: "$250–$350", details: "11-20 windows" },
        { type: "Large homes", price: "$350+", details: "21+ windows" },
      ],
      frequency: "Bi-annually recommended in Richmond",
      timeEstimate: "2-4 hours depending on home size",
      seasonalNotes: "Best in spring after pollen season and fall before winter",
    },
    {
      title: "Pressure Washing",
      image: "/images/services/pressure-washing.jpg",
      description: "Revitalize your home's exterior surfaces with professional pressure washing.",
      features: [
        "Surface-appropriate pressure settings and techniques",
        "Eco-friendly detergents for enhanced cleaning",
        "Complete cleaning of targeted surfaces",
        "Mold and mildew treatment where needed",
      ],
      id: "pressure",
      longDescription:
        "Our pressure washing service removes years of accumulated dirt, mold, mildew, and environmental contaminants from your home's exterior surfaces. We use adjustable pressure settings and surface-appropriate techniques to effectively clean without damage, restoring your property's appearance and preventing premature deterioration of materials.",
      benefits: [
        "Prevents damage from mold and organic growth",
        "Restores original appearance of surfaces",
        "Prepares surfaces for painting or sealing",
        "Increases property value and curb appeal",
      ],
      pricing: [
        { type: "Driveways/Walkways", price: "$100–$200", details: "Based on square footage" },
        { type: "Deck/Patio", price: "$200–$350", details: "Based on square footage" },
        { type: "Fence cleaning", price: "$150–$300", details: "Depending on length and height" },
      ],
      frequency: "Annually recommended for most surfaces",
      timeEstimate: "2-5 hours depending on area size",
      seasonalNotes: "Best in spring to remove winter buildup or fall before winter weather",
    },
    {
      title: "Flower Bed Maintenance",
      image: "/images/services/flower-bed-maintenance.jpg",
      description: "Keep your garden beds looking beautiful with professional maintenance and care.",
      features: [
        "Thorough weeding including root extraction",
        "Fresh mulch application at proper depth",
        "Plant health assessment and treatment recommendations",
        "Pruning, trimming, and deadheading as needed",
      ],
      id: "flower",
      longDescription:
        "Our flower bed maintenance service provides comprehensive care for your garden's health and appearance. We address not just visible weeds but their root systems, apply fresh mulch at optimal depths, assess plant health, and perform selective pruning to encourage proper growth patterns and blooming cycles.",
      benefits: [
        "Reduces weed competition for nutrients and water",
        "Conserves soil moisture and regulates temperature",
        "Prevents plant disease through proper maintenance",
        "Extends blooming periods through strategic care",
      ],
      pricing: [
        { type: "Average beds", price: "$100–$200", details: "Up to 100 sq ft total area" },
        { type: "Larger or neglected beds", price: "$200+", details: "Over 100 sq ft or heavily overgrown" },
      ],
      frequency: "Monthly during growing season",
      timeEstimate: "2-4 hours depending on bed size and condition",
      seasonalNotes: "Critical in spring and fall for Richmond gardens",
    },
    {
      title: "Grill Steaming",
      image: "/images/services/grill-steaming.jpg",
      description: "Restore your grill to like-new condition. Deep cleaning service for all types of grills.",
      features: [
        "Deep cleaning of grates, burners, and heat shields",
        "Grease trap emptying and sanitizing",
        "Exterior cleaning and polishing",
        "Operational check and safety inspection",
      ],
      id: "grill",
      longDescription:
        "Our specialized grill steaming service uses high-temperature steam to dissolve grease, remove carbonized food particles, and sanitize your grill without harsh chemicals. This process reaches areas hand cleaning can't access, restoring cooking performance and eliminating potential fire hazards from built-up grease.",
      benefits: [
        "Eliminates harmful bacteria and food contaminants",
        "Prevents flare-ups and uneven cooking",
        "Extends the lifespan of your grill components",
        "Improves flavor of grilled foods by removing old residue",
      ],
      pricing: [
        { type: "Standard grills", price: "$75–$125", details: "2-4 burner gas grills" },
        { type: "Extensive grills", price: "$125+", details: "Large or built-in grills, smokers" },
      ],
      frequency: "Twice yearly or seasonally for heavy users",
      timeEstimate: "1-2 hours per service",
      seasonalNotes: "Popular before summer grilling season and after heavy use periods",
    },
    {
      title: "Deck Sanding",
      image: "/images/services/deck-sanding.jpg",
      description: "Prepare your deck for refinishing with our professional sanding service.",
      features: [
        "Complete surface preparation with dust containment",
        "Progressive sanding with multiple grit levels",
        "Detail work on railings, steps, and hard-to-reach areas",
        "Thorough cleanup with specialized equipment",
      ],
      id: "deck-sanding",
      longDescription:
        "Our deck sanding service restores your deck's surface to like-new condition by removing weathered wood fibers, old finishes, and surface damage. We use a progressive sanding technique with multiple grit levels to achieve an optimal surface for new stain or paint adhesion while preserving the structural integrity of your deck boards.",
      benefits: [
        "Creates optimal surface for stain or paint adhesion",
        "Removes splinters and smooths rough areas for safety",
        "Reveals fresh wood grain for enhanced appearance",
        "Extends the overall lifespan of your deck",
      ],
      pricing: [
        { type: "Small decks", price: "$250–$400", details: "Up to 200 sq ft" },
        { type: "Medium decks", price: "$400–$650", details: "200-400 sq ft" },
        { type: "Large decks", price: "$650+", details: "Over 400 sq ft" },
      ],
      frequency: "Every 2-3 years or when refinishing",
      timeEstimate: "4-8 hours depending on deck size and condition",
      seasonalNotes: "Best performed in dry weather with moderate temperatures",
    },
    {
      title: "Mobile Car Detailing",
      image: "/images/services/mobile-car-detailing.jpg",
      description: "Professional car detailing service that comes to your home or office.",
      features: [
        "Exterior hand wash and protective wax application",
        "Complete interior vacuuming and surface cleaning",
        "Dashboard, console, and trim conditioning",
        "Tire cleaning and dressing with wheel detailing",
      ],
      id: "car-detailing",
      longDescription:
        "Our mobile car detailing service brings professional-grade cleaning and restoration to your driveway or workplace parking lot. We use specialized products for each vehicle surface—from paint-safe wash solutions to interior cleaners formulated for specific materials like leather, vinyl, or fabric—ensuring proper care without damage.",
      benefits: [
        "Saves time with no need to drive to a detailing shop",
        "Preserves vehicle value by maintaining appearance",
        "Removes allergens and bacteria from interior surfaces",
        "Creates a more pleasant driving environment",
      ],
      pricing: [
        { type: "Sedan", price: "$100–$150", details: "Basic interior and exterior" },
        { type: "SUV/Truck", price: "$150–$250", details: "Basic interior and exterior" },
        { type: "Large vehicles", price: "$250+", details: "Vans, large SUVs, or premium packages" },
      ],
      frequency: "Quarterly recommended for optimal maintenance",
      timeEstimate: "2-4 hours depending on vehicle size and condition",
      seasonalNotes: "Popular after winter for salt removal and before summer for protection",
    },
    {
      id: "garden-weeding",
      title: "Garden Weeding",
      description: "Keep your garden looking pristine with our thorough weeding service.",
      longDescription:
        "Our garden weeding service goes beyond surface removal to address the complete weed lifecycle. We identify and remove both annual and perennial weeds, extract complete root systems to prevent regrowth, and implement preventative measures tailored to your specific garden conditions and plant types.",
      features: [
        "Identification and removal of all weed types",
        "Complete root system extraction to prevent regrowth",
        "Soil aeration during the weeding process",
        "Preventative weed control recommendations",
      ],
      benefits: [
        "Eliminates competition for water and nutrients",
        "Reduces habitat for garden pests and diseases",
        "Improves soil structure through proper removal techniques",
        "Enhances overall garden aesthetics immediately",
      ],
      image: "/images/services/garden-weeding.jpg",
      pricing: [
        { type: "Typical gardens", price: "$75–$150", details: "Up to 200 sq ft" },
        { type: "Overgrown gardens", price: "$150+", details: "Over 200 sq ft or severely neglected" },
      ],
      frequency: "Bi-weekly during peak growing seasons",
      timeEstimate: "1-3 hours depending on garden size and weed density",
      seasonalNotes: "Most critical in spring and after summer rains in Richmond",
    },
    {
      id: "pet-waste",
      title: "Pet Waste Removal",
      description: "Keep your yard clean and safe with our pet waste removal service.",
      longDescription:
        "Our pet waste removal service eliminates health hazards and improves your yard's usability. We conduct thorough inspections to locate all waste, properly dispose of it according to local regulations, and apply a pet-safe sanitizing treatment to eliminate harmful bacteria and odors that can persist in soil.",
      features: [
        "Comprehensive yard inspection using systematic patterns",
        "Complete removal of all waste materials",
        "Proper disposal following health regulations",
        "Application of pet-safe sanitizing treatment",
      ],
      benefits: [
        "Eliminates disease-causing bacteria and parasites",
        "Reduces attractiveness to flies and other pests",
        "Prevents lawn damage from waste concentration",
        "Makes yard fully usable for family activities",
      ],
      image: "/images/services/pet-waste-removal.jpg",
      pricing: [
        { type: "Weekly cleanup", price: "$25–$50 per visit", details: "Standard yard with 1-2 pets" },
        { type: "One-time deep clean", price: "$75+", details: "Initial cleanup or neglected yards" },
      ],
      frequency: "Weekly recommended for most households",
      timeEstimate: "20-40 minutes per service",
      seasonalNotes: "Year-round service with special attention after winter thaws",
    },
    {
      id: "deck-staining",
      title: "Deck Staining",
      description: "Protect and beautify your deck with our professional staining service.",
      longDescription:
        "Our deck staining service provides essential protection against Richmond's variable climate while enhancing your deck's natural beauty. We apply premium penetrating stains that resist UV damage, repel moisture, and prevent mold and mildew growth, all while highlighting the natural wood grain and character of your specific decking material.",
      features: [
        "Application of premium penetrating stains",
        "Even coverage using professional techniques",
        "Weather-resistant finishes with UV protection",
        "Color matching to complement your home's exterior",
      ],
      benefits: [
        "Protects against moisture damage and wood rot",
        "Prevents UV fading and gray weathering",
        "Resists mold, mildew, and algae growth",
        "Enhances wood grain for natural beauty",
      ],
      image: "/images/services/deck-staining.jpg",
      pricing: [
        { type: "Small decks", price: "$300–$500", details: "Up to 200 sq ft" },
        { type: "Medium decks", price: "$500–$900", details: "200-400 sq ft" },
        { type: "Large decks", price: "$900+", details: "Over 400 sq ft" },
      ],
      frequency: "Every 2-3 years in Richmond's climate",
      timeEstimate: "1-2 days including drying time",
      seasonalNotes: "Best in spring or fall with moderate temperatures and low humidity",
    },
    {
      id: "deck-painting",
      title: "Deck Painting",
      description: "Transform your deck with a fresh coat of paint for lasting protection and beauty.",
      longDescription:
        "Our deck painting service provides a complete transformation with long-lasting protection. We apply specialized deck paints formulated to withstand foot traffic, resist moisture penetration, and maintain color integrity despite sun exposure. Our multi-coat system includes proper primers and topcoats for maximum durability in Richmond's climate.",
      features: [
        "Application of deck-specific exterior paints",
        "Proper priming for maximum adhesion",
        "Detailed work on railings, balusters, and trim",
        "Durable finish with multiple protective coats",
      ],
      benefits: [
        "Creates a completely uniform appearance",
        "Fills small cracks and imperfections",
        "Provides longer-lasting protection than stain alone",
        "Allows for custom color choices to match your home",
      ],
      image: "/images/services/deck-painting.jpg",
      pricing: [
        { type: "Small decks", price: "$350–$550", details: "Up to 200 sq ft" },
        { type: "Medium decks", price: "$550–$950", details: "200-400 sq ft" },
        { type: "Large decks", price: "$950+", details: "Over 400 sq ft" },
      ],
      frequency: "Every 3-5 years depending on exposure",
      timeEstimate: "2-3 days including drying time",
      seasonalNotes: "Optimal in spring or fall with low humidity and moderate temperatures",
    },
    {
      id: "carpet-cleaning",
      title: "Carpet Cleaning",
      description: "Revitalize your carpets with our deep cleaning service that removes dirt, stains, and allergens.",
      longDescription:
        "Our carpet cleaning service uses hot water extraction to remove embedded dirt, allergens, and stains from deep within carpet fibers. This method, often called steam cleaning, penetrates beyond surface cleaning to extract contaminants that regular vacuuming can't reach, while our specialized treatments address specific stains and odor sources.",
      features: [
        "Hot water extraction deep cleaning method",
        "Pre-treatment of high-traffic areas and stains",
        "Deodorizing treatment with enzyme cleaners",
        "Quick-dry process with powerful extraction",
      ],
      benefits: [
        "Removes up to 98% of allergens and dust mites",
        "Eliminates odor sources rather than masking them",
        "Extends carpet life by removing abrasive particles",
        "Improves indoor air quality significantly",
      ],
      image: "/images/services/carpet-cleaning.jpg",
      pricing: [
        { type: "2–3 rooms", price: "$150–$250", details: "Up to 500 sq ft" },
        { type: "Whole-home", price: "$250+", details: "Based on total carpet area" },
      ],
      frequency: "Every 6-12 months recommended",
      timeEstimate: "2-4 hours plus 4-6 hours drying time",
      seasonalNotes: "Ideal in spring or fall with good ventilation conditions",
    },
  ]

  // Create enhanced schema markup with more detailed service information
  const servicesSchema = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription || service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "Sweaty Job",
      telephone: "+18045739825",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Richmond",
        addressRegion: "VA",
        addressCountry: "US",
      },
      image: "https://www.sweatyjob.com/images/logo.jpg",
      priceRange: "$",
      sameAs: ["https://www.facebook.com/sweatyjob", "https://www.instagram.com/sweatyjob"],
    },
    areaServed: [
      "Battery Park, Richmond, VA",
      "Bellevue, Richmond, VA",
      "Laburnum Park, Richmond, VA",
      "Ginter Park, Richmond, VA",
      "Sherwood Park, Richmond, VA",
      "Rosedale, Richmond, VA",
      "Bryan Parkway, Richmond, VA",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: service.pricing[0].price.replace("$", "").split("–")[0],
      highPrice: service.pricing[service.pricing.length - 1].price.includes("+")
        ? service.pricing[service.pricing.length - 1].price.replace("$", "").replace("+", "")
        : service.pricing[service.pricing.length - 1].price.replace("$", "").split("–")[1],
      offerCount: service.pricing.length,
      offers: service.pricing.map((price) => ({
        "@type": "Offer",
        priceCurrency: "USD",
        price: price.price.replace("$", "").split("–")[0],
        priceSpecification: {
          "@type": "PriceSpecification",
          price: price.price.replace("$", "").split("–")[0],
          priceCurrency: "USD",
          valueAddedTaxIncluded: false,
        },
        itemOffered: {
          "@type": "Service",
          name: `${service.title} - ${price.type}`,
          description: price.details,
        },
      })),
    },
    serviceType: service.title,
    termsOfService: "10% discount for cash payments after service completion",
    serviceOutput: service.benefits.join(", "),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `https://www.sweatyjob.com/services#${service.id}`,
      servicePhone: "+18045739825",
      serviceSmsNumber: "+18045739825",
    },
  }))

  // Add FAQ schema for common service questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I schedule a service with Sweaty Job?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply call or text (804) 573-9825 to discuss your needs and schedule a convenient time. We'll confirm your appointment and provide any preparation instructions needed for your specific service.",
        },
      },
      {
        "@type": "Question",
        name: "What forms of payment do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept cash, credit cards, Venmo, and PayPal. Cash payments receive a 10% discount when paid after service completion, making it our most popular payment option among regular customers.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to be home during the service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, as long as we have access to the service area, you don't need to be present. Many of our customers provide access instructions and we complete the work while they're at work or running errands. We'll send before and after photos upon completion.",
        },
      },
      {
        "@type": "Question",
        name: "What happens in case of bad weather?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We'll contact you to reschedule if weather conditions prevent us from providing quality service. For outdoor services, we monitor weather forecasts and will proactively reach out 24-48 hours in advance if rescheduling appears necessary.",
        },
      },
      {
        "@type": "Question",
        name: "How does your bike-pulled trailer work for services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our custom trailer carries all necessary equipment while reducing fuel costs and environmental impact. It's perfect for servicing Richmond's connected neighborhoods, allowing us to navigate efficiently between homes while keeping our carbon footprint minimal.",
        },
      },
    ],
  }

  // Combine all schema
  const combinedSchema = [...servicesSchema, faqSchema]

  const schemaMarkup = {
    __html: JSON.stringify(combinedSchema),
  }

  return (
    <div className="bg-slate-900 pt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Member Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Exclusive services available only to Founders Club members at special rates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Featured Lawn Mowing Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-lg overflow-hidden md:col-span-2 border-2 border-yellow-400"
          >
            <div className="h-64 relative">
              <Image
                src="/images/hero-lawn.jpg"
                alt="Professional Lawn Mowing Services in Richmond"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm">
                MOST POPULAR
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white mb-3">Professional Lawn Mowing</h2>
              <p className="text-gray-300 mb-4">
                Expert lawn mowing services for all Richmond neighborhoods. Choose from traditional weekly service or
                our revolutionary robotic mowing subscription.
              </p>

              <h3 className="text-lg font-semibold text-blue-400 mb-3">Service Options</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Traditional weekly or bi-weekly mowing (from $35/cut)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Robotic daily mowing subscription ($79/month)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Edging, trimming, and cleanup included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Available in all Richmond neighborhoods</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/lawn-mowing">
                    Learn More <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/5">
                  <a href="tel:8045739825">
                    Get a Quote <Phone className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800 rounded-lg overflow-hidden"
            >
              <div className="h-64 relative">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-gray-300 mb-4">{service.description}</p>

                <h3 className="text-lg font-semibold text-blue-400 mb-3">What's Included</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-slate-700 p-4 rounded-lg mb-4">
                  <p className="text-white font-medium">Exclusive member pricing available</p>
                  <p className="text-gray-300 text-sm">10% discount for Founders Club members</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <FeaturedTechnology />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-slate-800 p-8 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Not a member yet?</h2>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the SweatyJob Founders Club to access these exclusive services at member rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="sms:8045739825">
                <MessageSquare className="mr-2 h-5 w-5" /> Apply for Membership
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/5" asChild>
              <Link href="/the-club">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
        {/* Schema Markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={schemaMarkup} />
      </div>
    </div>
  )
}
