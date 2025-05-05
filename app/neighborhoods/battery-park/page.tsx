import { CheckCircle2, PhoneCall, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import neighborhoods from "../index"

export default function BatteryParkPage() {
  const neighborhoodSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Home Services in Battery Park, Richmond VA",
    description: "Professional home services tailored for Battery Park homes and properties in Richmond, VA.",
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
    },
    areaServed: {
      "@type": "City",
      name: "Battery Park, Richmond, VA",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 37.5561,
        longitude: -77.4408,
      },
      geoRadius: "2000",
    },
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How Often Should I Mow My Lawn in Battery Park, Richmond VA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Battery Park, Richmond VA, lawns should be mowed weekly during the active growing season (April through October). During summer heat or drought periods, raising the mowing height to 3-3.5 inches helps protect roots and retain moisture. In early spring and late fall, bi-weekly mowing is typically sufficient as growth slows.",
        },
      },
      {
        "@type": "Question",
        name: "What's the Best Time for Window Cleaning in Battery Park Homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The optimal times for window cleaning in Battery Park, Richmond VA are early spring (March-April) and early fall (September-October). Spring cleaning removes winter grime and pollen, while fall cleaning prepares windows for maximum light during shorter winter days. Avoid cleaning on hot, sunny days as rapid drying can cause streaking.",
        },
      },
      {
        "@type": "Question",
        name: "How Often Should Decks Be Stained in Battery Park's Climate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Battery Park, Richmond VA, wooden decks typically need restaining every 2-3 years due to Virginia's humid climate and seasonal temperature variations. Decks with southern exposure may need attention every 1-2 years, while those with significant shade might extend to 3-4 years. Signs it's time to restain include water no longer beading on the surface, fading color, or visible gray weathering.",
        },
      },
    ],
  }

  const schemaMarkup = {
    __html: JSON.stringify([neighborhoodSchema, faqSchema]),
  }

  const neighborhood = neighborhoods.find((n) => n.slug === "battery-park")

  const services = [
    {
      id: "lawn",
      title: "Lawn Mowing in Battery Park",
      description:
        "Professional lawn mowing service tailored for Battery Park homes. Our service includes edging along Battery Park's distinctive walkways and thorough cleanup.",
      features: [
        "Regular scheduled mowing for Battery Park properties",
        "Edging along walkways and driveways common in the neighborhood",
        "Grass clipping cleanup",
        "Lawn health assessment specific to Battery Park soil conditions",
      ],
      image: "https://www.cardinallawns.com/wp-content/uploads/2017/03/lawn-mowing.jpg",
      pricing: [
        { type: "Typical Battery Park yards", price: "$50–$75" },
        { type: "Larger yards or heavy growth", price: "$75+" },
      ],
    },
    {
      id: "windows",
      title: "Window Cleaning in Battery Park",
      description:
        "Crystal clear windows for Battery Park homes. Many Battery Park residences feature historic windows that require special care and attention.",
      features: [
        "Interior and exterior cleaning for Battery Park homes",
        "Screen cleaning",
        "Sill and track cleaning for historic Battery Park windows",
        "Streak-free finish",
      ],
      image: "https://www.high-classcleaning.co.uk/wp-content/uploads/2023/12/hig-class-window-cleaning.jpg",
      pricing: [
        { type: "Small Battery Park homes", price: "$150–$250" },
        { type: "Medium homes", price: "$250–$350" },
        { type: "Large historic homes", price: "$350+" },
      ],
    },
    {
      id: "pressure",
      title: "Pressure Washing in Battery Park",
      description:
        "Revitalize your Battery Park home's exterior surfaces with professional pressure washing. Perfect for the brick walkways and concrete driveways common in this neighborhood.",
      features: [
        "Battery Park driveway and walkway cleaning",
        "Deck and patio washing",
        "Siding cleaning for Battery Park homes",
        "Fence washing",
      ],
      image: "https://washh.com/wp-content/uploads/2019/08/driveway-cleaning.jpg",
      pricing: [
        { type: "Battery Park driveways/walkways", price: "$100–$200" },
        { type: "Deck/Patio", price: "$200–$350" },
        { type: "Fence cleaning", price: "$150–$300 (depending on length)" },
      ],
    },
    {
      id: "deck-staining",
      title: "Deck Staining in Battery Park",
      description:
        "Protect and beautify your Battery Park deck with our professional staining service. We use premium products that withstand Richmond's variable climate.",
      features: [
        "Premium stain products selected for Battery Park's environment",
        "Even application techniques",
        "Weather-resistant finishes",
        "Color matching available for historic homes",
      ],
      image: "https://www.perimtec.com/wp-content/uploads/2021/01/deck-stain-featured.jpg",
      pricing: [
        { type: "Small decks", price: "$300–$500" },
        { type: "Medium decks", price: "$500–$900" },
        { type: "Large decks", price: "$900+" },
      ],
    },
    {
      id: "deck-painting",
      title: "Deck Painting in Battery Park",
      description:
        "Transform your Battery Park deck with a fresh coat of paint that complements your home's historic character while providing lasting protection.",
      features: [
        "High-quality exterior paints suitable for Battery Park's climate",
        "Proper priming techniques",
        "Detailed trim and railing work",
        "Long-lasting, durable finish",
      ],
      image:
        "https://images.squarespace-cdn.com/content/v1/5e35e813d2a0e803a2fbe599/1661787698820-3SJP4X72RQIXKPYQHVSS/unsplash-image-XcVm8mn7NUM.jpg",
      pricing: [
        { type: "Small decks", price: "$350–$550" },
        { type: "Medium decks", price: "$550–$950" },
        { type: "Large decks", price: "$950+" },
      ],
    },
    {
      id: "deck-sanding",
      title: "Deck Sanding in Battery Park",
      description:
        "Prepare your Battery Park deck for refinishing with our professional sanding service. Restore weathered wood to like-new condition.",
      features: [
        "Complete surface preparation for Battery Park decks",
        "Multiple grit sanding process",
        "Edge and detail work",
        "Thorough cleanup after completion",
      ],
      image: "https://mrsander.co.uk/wp-content/uploads/shutterstock_2384697837.jpg",
      pricing: [
        { type: "Small decks", price: "$250–$400" },
        { type: "Medium decks", price: "$400–$650" },
        { type: "Large decks", price: "$650+" },
      ],
    },
    {
      id: "carpet-cleaning",
      title: "Carpet Cleaning in Battery Park",
      description:
        "Revitalize your Battery Park home's carpets with our deep cleaning service that removes dirt, stains, and allergens common in historic homes.",
      features: [
        "Deep extraction cleaning for Battery Park homes",
        "Stain treatment for high-traffic areas",
        "Deodorizing treatment",
        "Quick drying process",
      ],
      image:
        "https://www.fatherandsoncarpetcleaning.net/wp-content/uploads/Residential-Carpet-Cleaning-Services-in-Utah.jpg",
      pricing: [
        { type: "2–3 rooms", price: "$150–$250" },
        { type: "Whole-home", price: "$250+" },
      ],
    },
    {
      id: "car-detailing",
      title: "Mobile Car Detailing in Battery Park",
      description:
        "Professional car detailing service that comes to your Battery Park home. Keep your vehicle looking its best without leaving your neighborhood.",
      features: [
        "Exterior wash and wax at your Battery Park residence",
        "Interior vacuuming and cleaning",
        "Dashboard and trim conditioning",
        "Tire and wheel cleaning",
      ],
      image:
        "https://mobilecardetail.net/wp-content/uploads/2019/02/car-detailing-service-in-framingham-massachusetts-1170x710.jpg",
      pricing: [
        { type: "Sedan", price: "$100–$150" },
        { type: "SUV/Truck", price: "$150–$250" },
        { type: "Large vehicles", price: "$250+" },
      ],
    },
    {
      id: "garden-weeding",
      title: "Garden Weeding in Battery Park",
      description:
        "Keep your Battery Park garden looking pristine with our thorough weeding service. We understand the unique plant species and weeds common in this neighborhood.",
      features: [
        "Removal of all weeds and unwanted plants from Battery Park gardens",
        "Root system extraction",
        "Soil aeration",
        "Preventative weed control advice specific to Battery Park soil",
      ],
      image: "https://www.epicgardening.com/wp-content/uploads/2023/09/spend-less-time-weeding--1200x667.jpeg",
      pricing: [
        { type: "Typical Battery Park gardens", price: "$75–$150" },
        { type: "Overgrown gardens", price: "$150+" },
      ],
    },
    {
      id: "pet-waste",
      title: "Pet Waste Removal in Battery Park",
      description:
        "Keep your Battery Park yard clean and safe with our pet waste removal service. Perfect for busy pet owners in this dog-friendly neighborhood.",
      features: [
        "Regular scheduled cleanups for Battery Park homes",
        "Thorough yard inspection",
        "Proper waste disposal",
        "Sanitizing spray application",
      ],
      image: "https://sgtpoopers.com/images/1200/pet_waste_removal.jpg",
      pricing: [
        { type: "Weekly cleanup", price: "$25–$50 per visit" },
        { type: "One-time deep clean", price: "$75+" },
      ],
    },
    {
      id: "grill",
      title: "Grill Steaming in Battery Park",
      description:
        "Restore your grill to like-new condition with our professional steaming service. Perfect for Battery Park's outdoor entertaining season.",
      features: [
        "Grate and burner cleaning using steam technology",
        "Grease trap emptying",
        "Exterior polishing",
        "Operational check",
      ],
      image:
        "https://images.thdstatic.com/productImages/6de216f6-8347-403c-abc7-fb32ec27428f/svn/scrub-daddy-grill-brushes-810044131147-1d_600.jpg",
      pricing: [
        { type: "Standard grills", price: "$75–$125" },
        { type: "Extensive grills", price: "$125+" },
      ],
    },
    {
      id: "flower",
      title: "Flower Bed Maintenance in Battery Park",
      description:
        "Keep your Battery Park garden beds looking beautiful with professional maintenance tailored to the neighborhood's traditional landscaping style.",
      features: [
        "Weeding and mulching for Battery Park gardens",
        "Plant health assessment",
        "Pruning and trimming",
        "Seasonal cleanup",
      ],
      image: "https://greenacreslandscapeinc.com/wp-content/uploads/2017/05/low-maintenance-flower-beds.jpg",
      pricing: [
        { type: "Average Battery Park beds", price: "$100–$200" },
        { type: "Larger or neglected beds", price: "$200+" },
      ],
    },
  ]

  const localLandmarks = [
    "Battery Park",
    "Battery Park Christian Church",
    "Hotchkiss Field Community Center",
    "North Avenue",
    "Chamberlayne Avenue",
  ]

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={schemaMarkup} />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Home Services in Battery Park, Richmond VA</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Enjoy your weekend while we handle the tough, sweaty tasks in Battery Park. Our services are tailored to the
          specific needs of Battery Park homes and properties.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-12">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-green-700 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h2 className="text-xl font-bold text-green-800 mb-2">About Battery Park, Richmond VA</h2>
            <p className="text-gray-700">
              Battery Park is a historic neighborhood in Richmond's Northside. Known for its beautiful park, tree-lined
              streets, and mix of historic and modern homes, Battery Park residents take pride in their well-maintained
              properties. Our services are specifically designed to meet the unique needs of Battery Park homes, from
              historic window cleaning to lawn care that complements the neighborhood's aesthetic.
            </p>
            <div className="mt-4">
              <h3 className="font-semibold text-green-700 mb-2">Local Landmarks We Service Near:</h3>
              <div className="flex flex-wrap gap-2">
                {localLandmarks.map((landmark, index) => (
                  <span key={index} className="bg-white px-3 py-1 rounded-full text-sm text-green-800">
                    {landmark}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Common Questions About Home Services in Battery Park</h2>

        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              How Often Should I Mow My Lawn in Battery Park, Richmond VA?
            </h3>
            <p className="text-gray-700 mb-4">
              In Battery Park, Richmond VA, lawns should be mowed weekly during the active growing season (April through
              October). During summer heat or drought periods, raising the mowing height to 3-3.5 inches helps protect
              roots and retain moisture. In early spring and late fall, bi-weekly mowing is typically sufficient as
              growth slows.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-green-700 mb-2">Tips for Lawn Mowing in Battery Park:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Mow when grass is dry to prevent clumping</li>
                <li>Never remove more than 1/3 of the grass height in a single mowing</li>
                <li>Alternate mowing patterns to prevent soil compaction</li>
                <li>Consider Battery Park's shade patterns from mature trees when setting mowing height</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              What's the Best Time for Window Cleaning in Battery Park Homes?
            </h3>
            <p className="text-gray-700 mb-4">
              The optimal times for window cleaning in Battery Park, Richmond VA are early spring (March-April) and
              early fall (September-October). Spring cleaning removes winter grime and pollen, while fall cleaning
              prepares windows for maximum light during shorter winter days. Avoid cleaning on hot, sunny days as rapid
              drying can cause streaking.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-green-700 mb-2">
                Window Cleaning Considerations for Battery Park Homes:
              </h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Historic homes may require special care for older glass and frames</li>
                <li>Second-story windows benefit from professional equipment for safety</li>
                <li>Interior and exterior cleaning provides the best results</li>
                <li>Screen cleaning extends the life of window screens and improves visibility</li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-green-800 mb-3">
              How Often Should Decks Be Stained in Battery Park's Climate?
            </h3>
            <p className="text-gray-700 mb-4">
              In Battery Park, Richmond VA, wooden decks typically need restaining every 2-3 years due to Virginia's
              humid climate and seasonal temperature variations. Decks with southern exposure may need attention every
              1-2 years, while those with significant shade might extend to 3-4 years. Signs it's time to restain
              include water no longer beading on the surface, fading color, or visible gray weathering.
            </p>
            <div className="mt-4">
              <h4 className="font-medium text-green-700 mb-2">Deck Maintenance Tips for Battery Park Properties:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Clean decks thoroughly before staining to ensure proper adhesion</li>
                <li>Choose stains with UV protection for longer-lasting results</li>
                <li>Apply stain when temperatures are between 50-90°F with no rain forecast for 48 hours</li>
                <li>Consider semi-transparent stains to showcase wood grain while providing protection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-20">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="rounded-lg shadow-md w-full h-[300px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-green-800">{service.title}</h2>
              <p className="text-lg text-gray-600">{service.description}</p>

              {/* Pricing Section */}
              <div className="mt-4 bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">Battery Park Pricing</h3>
                <div className="space-y-1">
                  {service.pricing.map((price, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{price.type}</span>
                      <span className="font-semibold">{price.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <h3 className="font-semibold text-green-800">What's Included for Battery Park Homes</h3>
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">Ready to schedule service in Battery Park?</h2>
        <p className="text-lg text-gray-600 mb-6">
          We go above and beyond for our Battery Park customers! Contact us today to schedule your service or get a
          custom quote for your Battery Park home.
        </p>
        <Button size="lg" className="bg-green-700 hover:bg-green-800" asChild>
          <a href="tel:8045739825">
            <PhoneCall className="mr-2 h-5 w-5" /> Text/Call (804) 573-9825
          </a>
        </Button>
      </div>

      <div className="mt-16 bg-green-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Frequently Asked Questions - Battery Park Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-green-700 mb-2">
              How often should I schedule lawn mowing in Battery Park?
            </h3>
            <p className="text-gray-600">
              During the growing season (April-October), we recommend weekly mowing for most Battery Park lawns. During
              slower growth periods, bi-weekly service is often sufficient.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Do you offer eco-friendly services in Battery Park?</h3>
            <p className="text-gray-600">
              Yes! We use a bike-pulled trailer for many services in Battery Park, reducing our carbon footprint while
              keeping costs down. We also offer a 10% discount for cash payments.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-green-700 mb-2">How do you handle Battery Park's historic homes?</h3>
            <p className="text-gray-600">
              We understand the unique character of Battery Park's historic properties and use appropriate techniques
              and products that preserve and protect these special homes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-green-700 mb-2">Can you work with my HOA requirements?</h3>
            <p className="text-gray-600">
              Absolutely. We're familiar with Battery Park community standards and can ensure our services meet any HOA
              requirements for your property.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Battery Park Home Service Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/blog/pressure-washing-home-value-battery-park"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Why Pressure Washing Boosts Home Value in Battery Park
            </h3>
            <p className="text-gray-600">
              Battery Park homes can see significant value increases with regular pressure washing. Discover why this
              service is particularly important in this historic Richmond neighborhood.
            </p>
            <div className="mt-4 text-green-700 font-medium">Read Article →</div>
          </Link>
          <Link
            href="/blog/lawn-care-battery-park-richmond"
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              Seasonal Lawn Care Guide for Battery Park Homes
            </h3>
            <p className="text-gray-600">
              Learn the best practices for maintaining your Battery Park lawn throughout Richmond's changing seasons.
              Tips specific to the soil and conditions in this neighborhood.
            </p>
            <div className="mt-4 text-green-700 font-medium">Read Article →</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
