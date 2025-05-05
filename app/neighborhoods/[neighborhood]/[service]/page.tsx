import { notFound } from "next/navigation"
import NeighborhoodServicePage from "./neighborhood-service-page"
import { neighborhoods } from "../../index"

// Define services data
const services = [
  {
    id: "lawn-mowing",
    title: "Lawn Mowing",
    description: "Professional lawn mowing services tailored to your yard's specific needs.",
    image: "/images/hero-lawn.jpg",
    longDescription:
      "Our professional lawn mowing service maintains your yard at the ideal height for optimal health and appearance. We use modern equipment with sharp blades for clean cuts that promote lawn health and prevent disease. Our service includes precision edging along walkways and beds, careful trimming around obstacles, and complete cleanup of clippings.",
    features: [
      "Precision cutting at the optimal height for your grass type",
      "Clean edging along all walkways and garden beds",
      "Careful trimming around trees, posts, and obstacles",
      "Complete cleanup of clippings and debris",
    ],
    benefits: [
      "Promotes denser, healthier grass growth",
      "Prevents weed establishment and spread",
      "Enhances your property's curb appeal",
      "Saves you time and physical strain",
    ],
  },
  {
    id: "window-cleaning",
    title: "Window Cleaning",
    description: "Crystal clear windows inside and out. Improve your home's appearance and let in more natural light.",
    image: "/images/services/window-cleaning.jpg",
    longDescription:
      "Our window cleaning service removes accumulated dirt, pollen, and environmental residue that blocks natural light and damages glass over time. Using professional-grade, eco-friendly solutions, we clean not just the glass but all window components for a complete restoration of clarity and function.",
    features: [
      "Interior and exterior glass cleaning",
      "Screen cleaning and inspection",
      "Sill, track, and frame cleaning",
      "Streak-free finish using professional techniques",
    ],
    benefits: [
      "Increases natural light by up to 30% in most homes",
      "Extends the lifespan of windows by preventing etching",
      "Improves energy efficiency by removing insulating dirt layers",
      "Enhances overall home appearance instantly",
    ],
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    description: "Revitalize your home's exterior surfaces with professional pressure washing.",
    image: "/images/services/pressure-washing.jpg",
    longDescription:
      "Our pressure washing service removes years of accumulated dirt, mold, mildew, and environmental contaminants from your home's exterior surfaces. We use adjustable pressure settings and surface-appropriate techniques to effectively clean without damage, restoring your property's appearance and preventing premature deterioration of materials.",
    features: [
      "Surface-appropriate pressure settings and techniques",
      "Eco-friendly detergents for enhanced cleaning",
      "Complete cleaning of targeted surfaces",
      "Mold and mildew treatment where needed",
    ],
    benefits: [
      "Prevents damage from mold and organic growth",
      "Restores original appearance of surfaces",
      "Prepares surfaces for painting or sealing",
      "Increases property value and curb appeal",
    ],
  },
  {
    id: "grill-steaming",
    title: "Grill Steaming",
    description: "Restore your grill to like-new condition. Deep cleaning service for all types of grills.",
    image: "/images/services/grill-steaming.jpg",
    longDescription:
      "Our specialized grill steaming service uses high-temperature steam to dissolve grease, remove carbonized food particles, and sanitize your grill without harsh chemicals. This process reaches areas hand cleaning can't access, restoring cooking performance and eliminating potential fire hazards from built-up grease.",
    features: [
      "Deep cleaning of grates, burners, and heat shields",
      "Grease trap emptying and sanitizing",
      "Exterior cleaning and polishing",
      "Operational check and safety inspection",
    ],
    benefits: [
      "Eliminates harmful bacteria and food contaminants",
      "Prevents flare-ups and uneven cooking",
      "Extends the lifespan of your grill components",
      "Improves flavor of grilled foods by removing old residue",
    ],
  },
  {
    id: "flower-bed-maintenance",
    title: "Flower Bed Maintenance",
    description: "Keep your garden beds looking beautiful with professional maintenance and care.",
    image: "/images/services/flower-bed-maintenance.jpg",
    longDescription:
      "Our flower bed maintenance service provides comprehensive care for your garden's health and appearance. We address not just visible weeds but their root systems, apply fresh mulch at optimal depths, assess plant health, and perform selective pruning to encourage proper growth patterns and blooming cycles.",
    features: [
      "Thorough weeding including root extraction",
      "Fresh mulch application at proper depth",
      "Plant health assessment and treatment recommendations",
      "Pruning, trimming, and deadheading as needed",
    ],
    benefits: [
      "Reduces weed competition for nutrients and water",
      "Conserves soil moisture and regulates temperature",
      "Prevents plant disease through proper maintenance",
      "Extends blooming periods through strategic care",
    ],
  },
  {
    id: "garden-weeding",
    title: "Garden Weeding",
    description: "Keep your garden looking pristine with our thorough weeding service.",
    image: "/images/services/garden-weeding.jpg",
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
  },
  {
    id: "pet-waste-removal",
    title: "Pet Waste Removal",
    description: "Keep your yard clean and safe with our pet waste removal service.",
    image: "/images/services/pet-waste-removal.jpg",
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
  },
  {
    id: "deck-sanding",
    title: "Deck Sanding",
    description: "Prepare your deck for refinishing with our professional sanding service.",
    image: "/images/services/deck-sanding.jpg",
    longDescription:
      "Our deck sanding service restores your deck's surface to like-new condition by removing weathered wood fibers, old finishes, and surface damage. We use a progressive sanding technique with multiple grit levels to achieve an optimal surface for new stain or paint adhesion while preserving the structural integrity of your deck boards.",
    features: [
      "Complete surface preparation with dust containment",
      "Progressive sanding with multiple grit levels",
      "Detail work on railings, steps, and hard-to-reach areas",
      "Thorough cleanup with specialized equipment",
    ],
    benefits: [
      "Creates optimal surface for stain or paint adhesion",
      "Removes splinters and smooths rough areas for safety",
      "Reveals fresh wood grain for enhanced appearance",
      "Extends the overall lifespan of your deck",
    ],
  },
  {
    id: "deck-staining",
    title: "Deck Staining",
    description: "Protect and beautify your deck with our professional staining service.",
    image: "/images/services/deck-staining.jpg",
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
  },
  {
    id: "deck-painting",
    title: "Deck Painting",
    description: "Transform your deck with a fresh coat of paint for lasting protection and beauty.",
    image: "/images/services/deck-painting.jpg",
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
  },
  {
    id: "carpet-cleaning",
    title: "Carpet Cleaning",
    description: "Revitalize your carpets with our deep cleaning service that removes dirt, stains, and allergens.",
    image: "/images/services/carpet-cleaning.jpg",
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
  },
  {
    id: "mobile-car-detailing",
    title: "Mobile Car Detailing",
    description: "Professional car detailing service that comes to your home or office.",
    image: "/images/services/mobile-car-detailing.jpg",
    longDescription:
      "Our mobile car detailing service brings professional-grade cleaning and restoration to your driveway or workplace parking lot. We use specialized products for each vehicle surface—from paint-safe wash solutions to interior cleaners formulated for specific materials like leather, vinyl, or fabric—ensuring proper care without damage.",
    features: [
      "Exterior hand wash and protective wax application",
      "Complete interior vacuuming and surface cleaning",
      "Dashboard, console, and trim conditioning",
      "Tire cleaning and dressing with wheel detailing",
    ],
    benefits: [
      "Saves time with no need to drive to a detailing shop",
      "Preserves vehicle value by maintaining appearance",
      "Removes allergens and bacteria from interior surfaces",
      "Creates a more pleasant driving environment",
    ],
  },
  {
    id: "gutter-cleaning",
    title: "Gutter Cleaning",
    description: "Prevent water damage with our thorough gutter cleaning service.",
    image: "/images/services/pressure-washing.jpg", // Using pressure washing image as fallback
    longDescription:
      "Our gutter cleaning service removes leaves, debris, and blockages that can cause water damage to your home. We thoroughly clean gutters and downspouts, check for proper water flow, and inspect for any damage or issues that may need attention, helping to protect your home's foundation, siding, and landscaping from water damage.",
    features: [
      "Complete removal of leaves and debris",
      "Downspout flushing and unclogging",
      "Inspection for damage or misalignment",
      "Proper disposal of all collected materials",
    ],
    benefits: [
      "Prevents water damage to foundation and siding",
      "Reduces risk of basement flooding",
      "Extends the lifespan of your gutter system",
      "Prevents pest infestations in clogged gutters",
    ],
  },
]

export function generateStaticParams() {
  // Generate all possible neighborhood/service combinations
  const params = []

  neighborhoods.forEach((neighborhood) => {
    // Skip if the neighborhood slug is "for" to prevent matching /for-pros
    if (neighborhood.slug === "for") return

    services.forEach((service) => {
      params.push({
        neighborhood: neighborhood.slug,
        service: service.id,
      })
    })
  })

  return params
}

export default function Page({ params }: { params: { neighborhood: string; service: string } }) {
  // Early validation - if someone tries to access /neighborhoods/for/pros, show 404
  if (params.neighborhood === "for") {
    notFound()
  }

  // Find the neighborhood
  const neighborhood = neighborhoods.find((n) => n.slug === params.neighborhood)
  if (!neighborhood) {
    console.log("Neighborhood not found:", params.neighborhood) // Add logging
    notFound()
  }

  // Find the service
  const service = services.find((s) => s.id === params.service)
  if (!service) {
    console.log("Service not found:", params.service) // Add logging
    notFound()
  }

  return <NeighborhoodServicePage neighborhood={neighborhood} service={service} services={services} />
}
