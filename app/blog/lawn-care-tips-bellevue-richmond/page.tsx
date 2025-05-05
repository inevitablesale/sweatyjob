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
            <span>March 25, 2025</span>
          </div>
          <div className="flex items-center text-sm text-green-700">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Bellevue, Richmond VA</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-green-800 mb-6">Top Lawn Care Tips for Bellevue Richmond Homes</h1>

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
          src="https://www.lovethegarden.com/sites/default/files/styles/header_image_fallback/public/content/articles/UK_advice-lawn-care-7-lawn-care-tips_header.jpg?itok=XCbvcdLr"
          alt="Lush green lawn in Bellevue, Richmond"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 mb-6">
            Bellevue's historic homes are known for their beautiful lawns that complement the neighborhood's charming
            character. The unique soil conditions and Richmond's climate present both opportunities and challenges for
            lawn care in this area. Here's how to keep your Bellevue lawn looking its best year-round.
          </p>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Understanding Bellevue's Soil Profile</h2>
          <p>
            Bellevue's soil tends to be a mix of clay and loam, which affects how you should approach lawn care.
            Clay-heavy soil retains water longer but can become compacted, while the loam components provide good
            drainage and nutrient retention. This combination means:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Water deeply but less frequently to encourage deep root growth</li>
            <li>Aerate your lawn annually to combat soil compaction common in Bellevue yards</li>
            <li>Add organic matter to improve soil structure, especially in newer developments</li>
          </ul>
          <p>
            Many Bellevue homes, particularly those along Bellevue Avenue and near MacArthur Avenue, have mature trees
            that create shaded lawn areas. These sections require special attention as they receive less sunlight and
            often compete with tree roots for nutrients.
          </p>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Seasonal Lawn Care Calendar for Bellevue</h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Spring (March-May)</h3>
          <p>As Richmond emerges from winter, Bellevue lawns need preparation for the growing season:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Apply pre-emergent herbicide in early spring (typically March) to prevent crabgrass</li>
            <li>Test soil pH and add lime if needed (Bellevue soils often tend toward acidity)</li>
            <li>Begin mowing when grass reaches 3 inches, keeping height at 2.5-3 inches for most Bellevue lawns</li>
            <li>Overseed bare patches with grass varieties that match your existing lawn</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Summer (June-August)</h3>
          <p>Richmond's hot, humid summers can stress Bellevue lawns:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Water deeply (1-1.5 inches) once or twice weekly, preferably in early morning</li>
            <li>Raise mowing height to 3-3.5 inches to protect roots from heat</li>
            <li>Spot-treat for summer weeds like dandelions and clover</li>
            <li>Apply slow-release fertilizer in early summer if grass shows signs of nutrient deficiency</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Fall (September-November)</h3>
          <p>Fall is the prime season for lawn care in Bellevue:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Aerate in September to relieve soil compaction</li>
            <li>Overseed with cool-season grasses like tall fescue, which perform well in Bellevue</li>
            <li>Apply fall fertilizer in October to strengthen root systems</li>
            <li>Continue mowing until growth stops, gradually lowering height to 2-2.5 inches</li>
            <li>
              Remove fallen leaves promptly to prevent lawn damage (especially important for homes near Bellevue's
              mature tree canopy)
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Winter (December-February)</h3>
          <p>Even during dormancy, Bellevue lawns need some attention:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Minimize foot traffic on frozen grass</li>
            <li>Apply winter weed control as needed</li>
            <li>Plan lawn care strategy for the coming year</li>
            <li>Service lawn equipment before spring</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Bellevue-Specific Lawn Challenges</h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Shade Management</h3>
          <p>
            Many Bellevue properties feature mature oak, maple, and elm trees that create significant shade. For these
            areas:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Choose shade-tolerant grass varieties like fine fescue or St. Augustine</li>
            <li>Prune lower tree branches to allow more sunlight to reach the lawn</li>
            <li>Mow shaded areas slightly higher than sunny sections</li>
            <li>Consider shade-friendly ground covers for deeply shaded areas where grass struggles</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Historic Property Considerations</h3>
          <p>For Bellevue's many historic homes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Research historic landscaping patterns to maintain period-appropriate lawn aesthetics</li>
            <li>
              Be mindful of underground utilities and historic infrastructure when aerating or installing irrigation
            </li>
            <li>
              Consider incorporating traditional elements like formal edges or ornamental grasses that complement
              historic architecture
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Water Conservation for Bellevue Lawns</h2>
          <p>With increasing focus on sustainability, Bellevue homeowners can practice water-efficient lawn care:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              Install rain barrels to collect water from downspouts (particularly effective for Bellevue's older homes
              with established gutter systems)
            </li>
            <li>Consider smart irrigation controllers that adjust watering based on weather conditions</li>
            <li>Apply mulch around trees and in garden beds to reduce evaporation and runoff</li>
            <li>Incorporate drought-resistant grass varieties in new lawn installations or when overseeding</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Professional Lawn Care in Bellevue</h2>
          <p>
            While many Bellevue homeowners enjoy DIY lawn care, professional services can provide specialized equipment
            and expertise for:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Core aeration to improve soil health</li>
            <li>Proper fertilization timing and application</li>
            <li>Disease identification and treatment</li>
            <li>Comprehensive weed control programs</li>
            <li>Regular maintenance that keeps your lawn looking its best year-round</li>
          </ul>

          <p className="mt-8">
            By following these Bellevue-specific lawn care tips, you'll maintain a lush, healthy lawn that enhances your
            home's curb appeal and contributes to the neighborhood's historic charm. Remember that consistency is
            key—regular maintenance prevents most lawn problems before they start.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mt-10">
            <h3 className="text-xl font-bold text-green-800 mb-3">Need help with your Bellevue lawn?</h3>
            <p className="mb-4">
              Sweaty Job provides professional lawn care services tailored specifically for Bellevue homes. From regular
              mowing to seasonal treatments, we understand the unique needs of lawns in this historic Richmond
              neighborhood.
            </p>
            <Button className="bg-green-700 hover:bg-green-800">Schedule a Lawn Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
