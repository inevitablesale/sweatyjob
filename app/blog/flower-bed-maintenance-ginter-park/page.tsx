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
            <span>March 20, 2025</span>
          </div>
          <div className="flex items-center text-sm text-green-700">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Ginter Park, Richmond VA</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-green-800 mb-6">Best Ways to Maintain Flower Beds in Ginter Park</h1>

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
          src="https://cdn.shopify.com/s/files/1/0593/3265/7306/files/02-low-maintenance-garden-bed-min.jpg?v=1727708814"
          alt="Beautiful flower bed in Ginter Park, Richmond"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 mb-6">
            Ginter Park's stately homes are known for their beautiful gardens and meticulously maintained flower beds.
            The neighborhood's rich history, dating back to Lewis Ginter's original development, is reflected in its
            landscaping traditions. Here's how to create and maintain flower beds that honor this legacy while meeting
            modern needs.
          </p>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Understanding Ginter Park's Gardening Heritage
          </h2>
          <p>
            Ginter Park was designed as a garden suburb, with wide boulevards and spacious lots that allowed for
            extensive landscaping. Many homes still feature elements of traditional Southern gardens, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Formal symmetrical layouts, particularly in front yards</li>
            <li>Boxwood hedges defining garden spaces</li>
            <li>Flowering shrubs like azaleas, camellias, and rhododendrons</li>
            <li>Perennial borders with traditional favorites like peonies, irises, and daylilies</li>
          </ul>
          <p>
            While honoring these traditions, modern Ginter Park gardeners are also incorporating sustainable practices
            and native plants that thrive in Richmond's climate.
          </p>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Designing Flower Beds for Ginter Park Homes</h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Front Yard Considerations</h3>
          <p>Front yard flower beds in Ginter Park often serve as a frame for historic homes:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              Consider the architectural style of your home—Colonial, Victorian, and Craftsman styles each pair well
              with different garden designs
            </li>
            <li>Maintain sight lines to architectural features like porches and entryways</li>
            <li>Use foundation plantings to soften the transition between house and landscape</li>
            <li>
              Incorporate evergreen structure for year-round appeal, especially important for Ginter Park's prominent
              corner lots
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Side and Backyard Gardens</h3>
          <p>
            With Ginter Park's generous lot sizes, side and back gardens offer opportunities for more personal
            expression:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Create outdoor rooms defined by hedges, fences, or changes in level</li>
            <li>Consider a kitchen garden for herbs and vegetables, a tradition in many historic Ginter Park homes</li>
            <li>Incorporate seating areas surrounded by fragrant plants for outdoor enjoyment</li>
            <li>Plan for privacy from neighboring properties with strategic shrub placement</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Plant Selection for Ginter Park Gardens</h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Traditional Favorites That Perform Well</h3>
          <p>These plants have stood the test of time in Ginter Park gardens:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Flowering Shrubs:</strong> Azalea, Camellia, Hydrangea, Viburnum
            </li>
            <li>
              <strong>Perennials:</strong> Peony, Iris, Hosta, Daylily, Black-eyed Susan
            </li>
            <li>
              <strong>Bulbs:</strong> Daffodil, Tulip, Crocus (plant in fall for spring display)
            </li>
            <li>
              <strong>Annuals:</strong> Impatiens, Begonia, Coleus (for shady areas under Ginter Park's mature trees)
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Native Plants for Sustainable Gardens</h3>
          <p>Incorporating native plants supports local ecology while reducing maintenance:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Trees and Shrubs:</strong> Redbud, Dogwood, Virginia Sweetspire, Beautyberry
            </li>
            <li>
              <strong>Perennials:</strong> Coneflower, Joe-Pye Weed, Blazing Star, Virginia Bluebells
            </li>
            <li>
              <strong>Groundcovers:</strong> Wild Ginger, Green and Gold, Foamflower
            </li>
            <li>
              <strong>Grasses:</strong> Switchgrass, Little Bluestem (excellent for Ginter Park's sunny borders)
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Shade-Tolerant Plants for Under Trees</h3>
          <p>
            Many Ginter Park properties feature mature oak, maple, and beech trees that create challenging shade
            conditions:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>Shrubs:</strong> Oakleaf Hydrangea, Japanese Maple, Mountain Laurel
            </li>
            <li>
              <strong>Perennials:</strong> Heuchera, Astilbe, Ferns, Hellebore, Tiarella
            </li>
            <li>
              <strong>Groundcovers:</strong> Pachysandra, Vinca minor, Liriope
            </li>
            <li>
              <strong>Bulbs:</strong>
              Pachysandra, Vinca minor, Liriope
            </li>
            <li>
              <strong>Bulbs:</strong> Snowdrops, Spanish Bluebells, Siberian Squill (all perform well under Ginter
              Park's deciduous trees)
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Seasonal Maintenance Calendar for Ginter Park Flower Beds
          </h2>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Spring (March-May)</h3>
          <p>Spring is a busy time in Ginter Park gardens:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Cut back winter-damaged perennials and ornamental grasses</li>
            <li>Apply fresh mulch after soil warms (typically mid-April in Richmond)</li>
            <li>Divide and transplant perennials that have outgrown their space</li>
            <li>Edge beds to create clean lines that complement Ginter Park's formal architecture</li>
            <li>Plant summer-blooming annuals after last frost (usually late April)</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Summer (June-August)</h3>
          <p>Richmond's hot summers require vigilant garden care:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Water deeply and consistently, especially newly planted areas</li>
            <li>Deadhead spent flowers to encourage continued blooming</li>
            <li>Monitor for pests and diseases common in Richmond's humidity</li>
            <li>Prune spring-flowering shrubs after blooming completes</li>
            <li>Stake tall perennials before summer storms</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Fall (September-November)</h3>
          <p>Fall is ideal for garden renewal in Ginter Park:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Plant trees, shrubs, and spring-blooming bulbs</li>
            <li>Divide overcrowded perennials like irises and daylilies</li>
            <li>Apply compost to beds to enrich soil for spring</li>
            <li>Cut back perennials that don't provide winter interest</li>
            <li>Collect leaves for compost or use as winter mulch</li>
          </ul>

          <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Winter (December-February)</h3>
          <p>Even in winter, Ginter Park gardens need attention:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Protect tender plants during freezes</li>
            <li>Prune deciduous trees and summer-flowering shrubs</li>
            <li>Plan garden changes for spring</li>
            <li>Order seeds and plants for next season</li>
            <li>Maintain winter interest with evergreens, berries, and ornamental grasses</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Soil Improvement for Ginter Park Gardens</h2>
          <p>Ginter Park's soil varies but often includes clay that benefits from amendment:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Test soil pH and nutrient levels every 2-3 years</li>
            <li>Add organic matter like compost to improve structure and drainage</li>
            <li>Use leaf mold from Ginter Park's abundant fall leaves as a natural soil conditioner</li>
            <li>Apply appropriate fertilizers based on soil test results and plant needs</li>
            <li>Consider raised beds in areas with poor drainage or heavily compacted soil</li>
          </ul>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">Water-Wise Gardening in Ginter Park</h2>
          <p>Sustainable water practices help Ginter Park gardens thrive during Richmond's hot summers:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Group plants with similar water needs together</li>
            <li>Install drip irrigation to deliver water efficiently to plant roots</li>
            <li>Use rain barrels to collect water from downspouts</li>
            <li>Apply 2-3 inches of mulch to retain soil moisture</li>
            <li>Consider rain gardens to manage runoff from Ginter Park's sloped lots</li>
          </ul>

          <p className="mt-8">
            By following these Ginter Park-specific flower bed maintenance practices, you'll create gardens that enhance
            your historic home while contributing to the neighborhood's renowned beauty. Remember that gardens evolve
            over time—many of Ginter Park's most impressive landscapes have developed over decades of thoughtful care.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mt-10">
            <h3 className="text-xl font-bold text-green-800 mb-3">Need help with your Ginter Park garden?</h3>
            <p className="mb-4">
              Sweaty Job provides professional flower bed maintenance services tailored specifically for Ginter Park
              homes. From seasonal cleanups to regular weeding and mulching, we understand the unique needs of gardens
              in this historic Richmond neighborhood.
            </p>
            <Button className="bg-green-700 hover:bg-green-800">Schedule a Garden Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
