import Link from "next/link"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function BlogPostPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/blog" className="text-green-700 hover:text-green-800 inline-flex items-center mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center text-sm text-green-700">
            <Calendar className="h-4 w-4 mr-1" />
            <span>March 1, 2025</span>
          </div>
          <div className="flex items-center text-sm text-green-700">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Bryan Parkway, Richmond VA</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-green-800 mb-6">Creating Pet-Friendly Yards in Bryan Parkway</h1>

        <div className="flex items-center gap-4 mb-6">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <Image src="/images/chris-profile.png" alt="Chris Tabb" fill className="object-cover" />
          </div>
          <div>
            <p className="font-medium text-gray-800">Chris Tabb</p>
            <p className="text-sm text-gray-600">Lawn Care Expert</p>
          </div>
        </div>

        <img
          src="https://static.sniffspot.com/packs/img/dog-small-582.4bd26b3f45c27778.png"
          alt="Dog enjoying a pet-friendly yard in Bryan Parkway, Richmond"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 mb-6">
            Bryan Parkway is known for its pet-loving community, with many residents sharing their homes with dogs,
            cats, and other animal companions. Creating a yard that's both beautiful and safe for pets requires
            thoughtful planning and maintenance. This guide will help Bryan Parkway homeowners create outdoor spaces
            that meet the needs of both their human and animal family members.
          </p>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Understanding Bryan Parkway's Pet-Friendly Landscape Needs
          </h2>
          <p>Bryan Parkway's unique characteristics influence pet-friendly yard design:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Proximity to Bryan Park means wildlife encounters are common, requiring secure boundaries</li>
            <li>The neighborhood's mature trees create varied sun/shade patterns that affect plant choices</li>
            <li>
              Many properties feature traditional layouts that can be adapted for pet needs while maintaining aesthetic
              appeal
            </li>
            <li>The community's social nature means yards often serve as gathering spaces for both people and pets</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Safe and Secure Boundaries</h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Fencing Options for Bryan Parkway Homes</h3>
          <p>The right fence balances neighborhood aesthetics with pet safety:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Traditional Wood Fencing:</strong> Complements Bryan Parkway's classic homes while providing
              privacy and security
            </li>
            <li>
              <strong>Ornamental Aluminum:</strong> Offers security without blocking views, ideal for properties backing
              to green spaces
            </li>
            <li>
              <strong>Vinyl Options:</strong> Low-maintenance alternatives that can mimic traditional styles
            </li>
            <li>
              <strong>Natural Boundaries:</strong> Dense hedges can supplement fencing for added privacy and visual
              appeal
            </li>
          </ul>
          <p>When installing fencing in Bryan Parkway, consider these pet-specific features:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              Ensure fence height is appropriate for your pet's jumping ability (typically 5-6 feet for most dogs)
            </li>
            <li>Prevent digging by installing chicken wire along the bottom or burying the fence 6-12 inches</li>
            <li>Choose picket spacing that prevents small dogs from squeezing through</li>
            <li>Install self-closing gates with secure latches to prevent escapes</li>
            <li>Consider neighborhood aesthetics and any HOA requirements when selecting materials and styles</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Invisible Boundaries</h3>
          <p>For Bryan Parkway homes where traditional fencing isn't feasible:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Electronic containment systems can be effective for some dogs with proper training</li>
            <li>These systems don't prevent other animals from entering your yard</li>
            <li>Consider combining with landscaping barriers for visual boundaries</li>
            <li>Not recommended as the sole solution for dogs with high prey drive or anxiety</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Pet-Safe Landscaping for Bryan Parkway Yards</h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Toxic Plant Awareness</h3>
          <p>Remove or fence off these common toxic plants found in Bryan Parkway gardens:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Azaleas and rhododendrons (common in established Bryan Parkway landscapes)</li>
            <li>Lilies (extremely toxic to cats)</li>
            <li>Sago palms</li>
            <li>Foxglove</li>
            <li>Autumn crocus</li>
            <li>Oleander</li>
            <li>Castor bean</li>
            <li>Yew</li>
            <li>Certain varieties of ivy</li>
          </ul>
          <p>
            For a complete list of toxic plants, consult with your veterinarian or the ASPCA's online toxic plant
            database.
          </p>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
            Pet-Friendly Plants for Bryan Parkway Gardens
          </h3>
          <p>These plants thrive in Richmond's climate and are safe for pets:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Ornamental Grasses:</strong> Provide visual interest and are typically non-toxic
            </li>
            <li>
              <strong>Catnip and Catmint:</strong> Attractive to cats and safe for dogs
            </li>
            <li>
              <strong>Roses:</strong> While thorny, the plants themselves aren't toxic
            </li>
            <li>
              <strong>Sunflowers:</strong> Add height and color to Bryan Parkway gardens
            </li>
            <li>
              <strong>Zinnias and Marigolds:</strong> Bright, easy-to-grow annuals
            </li>
            <li>
              <strong>Camellias:</strong> Traditional Southern shrubs that are pet-safe
            </li>
            <li>
              <strong>Crepe Myrtles:</strong> Common in Bryan Parkway and safe for pets
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Lawn Alternatives</h3>
          <p>For Bryan Parkway yards with active pets:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Clover:</strong> More resistant to pet urine damage than traditional grass
            </li>
            <li>
              <strong>Buffalo Grass:</strong> Drought-tolerant and stands up well to traffic
            </li>
            <li>
              <strong>Synthetic Turf:</strong> Modern options are pet-friendly and low-maintenance
            </li>
            <li>
              <strong>Mulched Play Areas:</strong> Cedar mulch is pet-safe and helps control odors
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Hardscaping Elements for Pet-Friendly Bryan Parkway Yards
          </h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Paths and Patios</h3>
          <p>Create designated areas for high traffic:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Install paths along fence lines where dogs typically patrol</li>
            <li>Choose materials that stay cool in Richmond's summer heat (avoid dark pavers)</li>
            <li>Create smooth transitions between surfaces to prevent tripping</li>
            <li>Consider permeable pavers that allow drainage for easy cleanup</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Shade Structures</h3>
          <p>Essential for Bryan Parkway's hot summers:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Pergolas with climbing vines provide dappled shade</li>
            <li>Shade sails offer modern, flexible coverage</li>
            <li>Dog houses should be well-ventilated and positioned in shaded areas</li>
            <li>Consider mature tree placement when designing outdoor pet spaces</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Water Features</h3>
          <p>Safe hydration and cooling options:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Install pet-specific fountains that keep water fresh</li>
            <li>Consider shallow splash areas for cooling off in summer</li>
            <li>Ensure all water features have gentle slopes for easy exit</li>
            <li>Secure pond areas if you have water-loving breeds</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Waste Management Solutions for Bryan Parkway Pet Owners
          </h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Designated Bathroom Areas</h3>
          <p>Create specific zones to contain waste and protect landscaping:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Use gravel or mulch in a defined area for easy cleaning</li>
            <li>Train pets to use this zone consistently</li>
            <li>Position away from entertainment areas and vegetable gardens</li>
            <li>Consider installing a small fence or border to define the space</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Cleanup Systems</h3>
          <p>Maintain yard hygiene with these approaches:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Install a pet waste station with bags and covered disposal</li>
            <li>Consider in-ground waste digesters for discreet management</li>
            <li>Implement a regular cleaning schedule to prevent buildup</li>
            <li>Use pet-safe, environmentally friendly cleaning products</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Enrichment Features for Bryan Parkway Pets</h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Play Structures</h3>
          <p>Incorporate elements that encourage exercise:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Create agility courses with tunnels, jumps, and weave poles</li>
            <li>Install climbing structures for active dogs</li>
            <li>Design sensory gardens with different textures and scents</li>
            <li>Include digging zones filled with sand to protect garden areas</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Observation Points</h3>
          <p>Many pets enjoy monitoring their territory:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Create elevated platforms for viewing beyond the fence</li>
            <li>Install "windows" in solid fences at pet height</li>
            <li>Position resting areas near front windows for street watching</li>
            <li>Consider the security implications of these features for escape-prone pets</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Seasonal Considerations for Bryan Parkway Pet Yards
          </h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Summer Heat Management</h3>
          <p>Richmond's hot summers require special attention:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Ensure multiple shade options throughout the day</li>
            <li>Provide constant access to fresh water in several locations</li>
            <li>Consider cooling mats or elevated beds for outdoor rest areas</li>
            <li>Schedule yard time during cooler morning and evening hours</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Winter Comfort</h3>
          <p>Even in Richmond's mild winters:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Create windbreaks in outdoor resting areas</li>
            <li>Use pet-safe ice melt products on walkways</li>
            <li>Provide insulated shelter options for outdoor time</li>
            <li>Consider heated water bowls for freezing days</li>
          </ul>

          <p className="mt-8">
            By implementing these pet-friendly yard strategies, Bryan Parkway residents can create outdoor spaces that
            are safe, engaging, and beautiful for both human and animal family members. Remember that the best pet yards
            balance the specific needs of your pets with the aesthetic character of your home and neighborhood.
          </p>

          <p>
            With thoughtful design and regular maintenance, your Bryan Parkway yard can become a haven for pets while
            enhancing your property's appeal and functionality. The investment in pet-friendly features often pays
            dividends in reduced behavioral problems, lower veterinary bills, and increased enjoyment of your outdoor
            living space.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mt-10">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Need help creating a pet-friendly yard in Bryan Parkway?
            </h3>
            <p className="mb-4">
              Sweaty Job provides professional landscaping and yard maintenance services tailored for pet owners in
              Bryan Parkway. From pet-safe plant selection to waste management solutions, we understand the unique needs
              of pet-friendly outdoor spaces.
            </p>
            <Button className="bg-green-700 hover:bg-green-800">Schedule a Pet-Friendly Yard Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
