import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { CheckCircle2, ArrowRight, MapPin, Info, Map } from "lucide-react"
import { fetchWikipediaArticle, geoSearchWikipedia } from "@/lib/wiki-api"
import ServiceAreaMap from "@/components/service-area-map"

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
    metaTitle: "Professional Lawn Mowing Services | SweatyJob",
    metaDescription:
      "Expert lawn mowing services. Weekly or bi-weekly schedules, precision cutting, and edging. Join the Saturday Club for member pricing.",
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
    metaTitle: "Professional Window Cleaning Services | SweatyJob",
    metaDescription:
      "Expert window cleaning services. Interior and exterior cleaning, streak-free results, and screen cleaning. Join the Saturday Club for member pricing.",
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
    metaTitle: "Professional Pressure Washing Services | SweatyJob",
    metaDescription:
      "Expert pressure washing services. House siding, driveways, decks, and more. Join the Saturday Club for member pricing.",
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
    metaTitle: "Professional Grill Cleaning Services | SweatyJob",
    metaDescription:
      "Expert grill cleaning services. Deep cleaning for all grill types, food-safe solutions, and same-day service. Join the Saturday Club for member pricing.",
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
    metaTitle: "Professional Flower Bed Maintenance | SweatyJob",
    metaDescription:
      "Expert flower bed maintenance services. Weeding, pruning, mulching, and plant care. Join the Saturday Club for member pricing.",
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
    metaTitle: "Professional Garden Weeding Services | SweatyJob",
    metaDescription:
      "Expert garden weeding services. Complete root removal, debris disposal, and preventative recommendations. Join the Saturday Club for member pricing.",
  },
]

// Function to fetch Mapbox data for a city
async function fetchMapboxData(city: string, state: string) {
  try {
    // Server-side only
    const mapboxToken = process.env.MAPBOX_ACCESS_TOKEN
    if (!mapboxToken) {
      throw new Error("Mapbox token not found")
    }

    const query = encodeURIComponent(`${city}, ${state}`)
    const response = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxToken}&limit=1&types=place`,
      { cache: "force-cache" },
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch coordinates: ${response.statusText}`)
    }

    const data = await response.json()
    console.log("📊 Full Mapbox response:", JSON.stringify(data, null, 2))

    if (data.features && data.features.length > 0) {
      const feature = data.features[0]
      const longitude = feature.center[0]
      const latitude = feature.center[1]
      console.log(`📍 Extracted coordinates: [${longitude}, ${latitude}]`)
      console.log(`🏙️ Place name from Mapbox: ${feature.place_name}`)
      console.log(`✅ Valid coordinates found: latitude=${latitude}, longitude=${longitude}`)

      return {
        coordinates: feature.center, // [longitude, latitude]
        longitude: feature.center[0],
        latitude: feature.center[1],
        bbox: feature.bbox, // [west, south, east, north]
        placeName: feature.place_name,
        context: feature.context || [],
      }
    }

    return null
  } catch (error) {
    console.error("Error fetching Mapbox data:", error)
    return null
  }
}

// Function to get neighborhood text from POIs
async function getNeighborhoodText(city: string, state: string) {
  try {
    // First get coordinates from Mapbox
    const mapboxData = await fetchMapboxData(city, state)
    if (!mapboxData || !mapboxData.coordinates) {
      console.error("No coordinates found for city")
      return `throughout ${city}`
    }

    const [longitude, latitude] = mapboxData.coordinates
    console.log(`🏙️ Getting neighborhood text for ${city}, ${state}`)
    console.log(`🔍 Searching for neighborhoods in ${city}, ${state}`)
    console.log(`🌍 Using coordinates for ${city}: lat=${latitude}, lon=${longitude}`)

    // Use coordinates to find nearby POIs with Wikipedia
    console.log(
      `🔍 GeoSearch URL: https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${latitude}|${longitude}&gsradius=10000&gslimit=50&format=json&origin=*`,
    )
    const geosearchResults = await geoSearchWikipedia(latitude, longitude, 10000, 50)
    console.log(`📊 GeoSearch found ${geosearchResults.length} nearby articles`)

    // Filter for likely neighborhoods
    const neighborhoodKeywords = [
      "district",
      "neighborhood",
      "heights",
      "park",
      "village",
      "gardens",
      "hills",
      "square",
      "place",
      "quarter",
    ]

    const neighborhoods = geosearchResults
      .filter((result) => {
        const title = result.title.toLowerCase()
        // Exclude the city itself and articles with parentheses (often disambiguation)
        if (title === city.toLowerCase() || title.includes("(")) {
          return false
        }

        // Include if it contains neighborhood keywords
        return neighborhoodKeywords.some((keyword) => title.includes(keyword.toLowerCase()))
      })
      .slice(0, 5) // Limit to 5 neighborhoods
      .map((n) => n.title)

    console.log(`✅ Found ${neighborhoods.length} neighborhoods via GeoSearch: ${neighborhoods.join(", ")}`)

    if (neighborhoods.length === 0) {
      return `throughout ${city}`
    }

    if (neighborhoods.length === 1) {
      return `in ${neighborhoods[0]}`
    }

    if (neighborhoods.length === 2) {
      return `in ${neighborhoods[0]} and ${neighborhoods[1]}`
    }

    const lastNeighborhood = neighborhoods[neighborhoods.length - 1]
    return `in ${neighborhoods.slice(0, -1).join(", ")}, and ${lastNeighborhood}`
  } catch (error) {
    console.error("Error getting neighborhood text:", error)
    return `throughout ${city}`
  }
}

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

  // Use Las Vegas, NV as our target city
  const city = "Las Vegas"
  const state = "Nevada"

  return {
    title: `Professional ${service.title} Services in ${city}, ${state} | SweatyJob`,
    description: `Expert ${service.title.toLowerCase()} services in ${city}, ${state}. Professional, reliable, and affordable. Join the Saturday Club for member pricing.`,
  }
}

export default async function ServicePage({ params }: Props) {
  const service = services.find((service) => service.id === params.slug)

  if (!service) {
    notFound()
  }

  // Use Las Vegas, NV as our target city
  const city = "Las Vegas"
  const state = "Nevada"
  const competitor = "Walker Landscape Maintenance"

  // Fetch city information from Wikipedia
  const wikiTitle = `${city}, ${state}`
  // Get city information directly from the API response
  const cityInfo = await fetchWikipediaArticle(wikiTitle)
  console.log(`📊 Wikipedia response:`, {
    pageid: cityInfo?.pageid,
    title: cityInfo?.title,
    extract_length: cityInfo?.extract?.length,
    has_thumbnail: !!cityInfo?.thumbnail,
    has_coordinates: !!cityInfo?.coordinates,
  })

  // Use the Wikipedia data directly - no fallbacks
  const cityDescription = cityInfo?.extract || `Information about ${city}, ${state} is being loaded.`

  // Fetch Mapbox data for the city
  const mapboxData = await fetchMapboxData(city, state)

  // Fetch neighborhood data
  const neighborhoodText = await getNeighborhoodText(city, state)

  // Parse neighborhood text into an array
  let neighborhoods = []
  if (neighborhoodText && neighborhoodText !== `throughout ${city}`) {
    // Split by commas and "and"
    const parts = neighborhoodText.split(/,\s*|\s+and\s+/)
    neighborhoods = parts.map((part) => ({
      name: part.trim(),
      slug: part.trim().toLowerCase().replace(/\s+/g, "-"),
      // Use placeholder images with the neighborhood name
      image: `/placeholder.svg?height=300&width=400&query=${encodeURIComponent(`${part.trim()} neighborhood in ${city}`)}`,
    }))
  }

  // Get service image
  const getServiceImage = () => {
    if (service.id === "lawn-mowing") {
      return "https://www.bestmow.com/cdn/shop/files/8.jpg?v=1743403973"
    }
    return service.image
  }

  // Debug the mapbox data
  console.log("🗺️ Mapbox data for map:", {
    hasData: !!mapboxData,
    hasCoordinates: !!(mapboxData && mapboxData.coordinates),
    coordinates: mapboxData?.coordinates,
    coordinatesLength: mapboxData?.coordinates?.length,
    longitude: mapboxData?.longitude,
    latitude: mapboxData?.latitude,
  })

  // Get Mapbox token for client components - we'll use an empty string and rely on our proxy
  const mapboxToken = ""

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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {service.title} in {city}, {state}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={getServiceImage() || "/placeholder.svg"}
                alt={`${service.title} services in ${city}, ${state}`}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="text-xl text-gray-300 mb-6">
                Professional {service.title.toLowerCase()} services for homes and businesses in {city}, {state}.
                {service.description}
              </p>

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
                <h3 className="text-white font-medium mb-2">Request a Quote in {city}</h3>
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

        {/* City Information Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            {service.title} Services in {city}, {state}
          </h2>

          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8">
              {cityInfo && cityInfo.thumbnail && (
                <div className="md:w-1/3">
                  <div className="relative h-[250px] rounded-lg overflow-hidden">
                    <Image
                      src={
                        cityInfo.thumbnail.source ||
                        `/placeholder.svg?height=250&width=400&query=${encodeURIComponent(`${city || "/placeholder.svg"}, ${state} skyline`)}`
                      }
                      alt={`${city}, ${state}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              )}
              <div className={cityInfo && cityInfo.thumbnail ? "md:w-2/3" : "w-full"}>
                <div className="flex items-center mb-4">
                  <Info className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">About {city}</h3>
                </div>
                <p className="text-gray-300 mb-6">{cityDescription}</p>
                <p className="text-gray-300">
                  Our {service.title.toLowerCase()} services are available {neighborhoodText}. We provide professional,
                  reliable service with flexible scheduling options to meet your needs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Details Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            About Our {service.title} Service in {city}
          </h2>

          <div className="bg-slate-800 p-8 rounded-lg">
            <p className="text-gray-300 mb-8">
              {service.longDescription} Our {city}-based technicians are familiar with local conditions and
              requirements, ensuring you receive service tailored to your specific needs.
            </p>

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
                <h3 className="text-xl font-bold text-white mb-4">Benefits for {city} Residents</h3>
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
        {neighborhoods.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">
              {service.title} in {city} Neighborhoods
            </h2>

            <p className="text-gray-300 mb-6">
              We provide {service.title.toLowerCase()} services {neighborhoodText}. Click on a neighborhood below to
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
        )}

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Service Area in {city}</h2>

          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2 h-[300px]">
                {mapboxData && typeof mapboxData.longitude === "number" && typeof mapboxData.latitude === "number" ? (
                  <ServiceAreaMap
                    city={city}
                    state={state}
                    longitude={mapboxData.longitude}
                    latitude={mapboxData.latitude}
                    mapboxToken={mapboxToken}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-slate-700 text-white rounded-lg">
                    <p>Loading map data...</p>
                  </div>
                )}
              </div>
              <div className="md:w-1/2">
                <div className="flex items-center mb-4">
                  <Map className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="text-xl font-bold text-white">Service Coverage</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Our {service.title.toLowerCase()} services cover all of {city} and surrounding areas. We provide
                  flexible scheduling options with same-week availability in most neighborhoods.
                </p>
                <p className="text-gray-300">
                  Popular service areas include {neighborhoodText}, with special pricing available for Saturday Club
                  members throughout the region.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Competitor Comparison Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            {service.title} Service Near Me in {city}
          </h2>

          <div className="bg-slate-800 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">SweatyJob vs {competitor}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="bg-slate-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-blue-400 mb-3">SweatyJob Robot Mowing</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Price: $79/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Frequency: Daily mowing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Noise: Whisper quiet</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Emissions: Zero emissions</span>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-700 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-gray-400 mb-3">{competitor}</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Price: $160-200/month</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Frequency: Weekly mowing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Noise: Loud gas engines</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-gray-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-400">Emissions: High carbon footprint</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-gray-300">
              When comparing SweatyJob to {competitor} in {city}, our robot mowing service provides daily cutting at
              half the monthly cost. Our service is whisper-quiet, environmentally friendly, and requires no scheduling
              hassles. The result is a consistently perfect lawn that's healthier and more attractive than what
              traditional weekly mowing can achieve.
            </p>
          </div>
        </div>

        {/* Video Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            See Our {service.title} Service in Action in {city}
          </h2>

          <div className="bg-slate-800 p-8 rounded-lg">
            <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
              <iframe
                src="https://www.bestmow.com/cdn/shop/videos/c/vp/962096c1d1224dc78b09087c9a8c7ef8/962096c1d1224dc78b09087c9a8c7ef8.HD-1080p-7.2Mbps-44563247.mp4?v=0"
                title={`SweatyJob ${service.title} Demo in ${city}`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              SweatyJob {service.title} Demo - Better Than {competitor} in {city}
            </h3>
            <p className="text-gray-300">
              See how our {service.title.toLowerCase()} service works in {city}, providing better results than
              {competitor} at half the cost. Our technology and expert technicians ensure consistent, high-quality
              results every time.
            </p>
          </div>
        </div>

        {/* Ready to Schedule Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Schedule Your {service.title} in {city}?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today for a free quote or learn about our Saturday Club membership for exclusive discounts on
            {service.title.toLowerCase()} and other services throughout {city} and {state}.
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
