import Link from "next/link"
import { ArrowLeft, Calendar, MapPin, CheckSquare } from "lucide-react"
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
            <span>March 10, 2025</span>
          </div>
          <div className="flex items-center text-sm text-green-700">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Laburnum Park, Richmond VA</span>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-green-800 mb-6">
          Spring Cleaning Checklist for Laburnum Park Homeowners
        </h1>

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
          src="https://presentablelandscape.com/wp-content/uploads/2021/01/Spring-Cleanup-Northern-Kentucky-Mulch-Tree-Care.jpg"
          alt="Spring cleaning in Laburnum Park, Richmond"
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-700 mb-6">
            As Richmond's winter gives way to spring, Laburnum Park homes deserve special attention to recover from the
            colder months and prepare for the warmer seasons ahead. This historic neighborhood, with its distinctive
            early 20th-century architecture and mature landscaping, requires a tailored approach to spring cleaning that
            addresses both the unique character of these homes and the specific challenges of the area.
          </p>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Exterior Spring Cleaning for Laburnum Park Homes
          </h2>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <CheckSquare className="h-5 w-5 mr-2 text-green-700" /> Exterior Checklist
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Inspect roof and gutters</p>
                  <p className="text-gray-600">
                    Laburnum Park's mature trees drop significant debris over winter. Clear gutters of leaves and
                    debris, check for loose or damaged shingles, and inspect flashing around chimneys and vents.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Clean and inspect siding</p>
                  <p className="text-gray-600">
                    Many Laburnum Park homes feature brick, wood, or vinyl siding that accumulates winter grime. Gentle
                    pressure washing removes dirt while allowing you to spot any damage that needs repair.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Wash windows inside and out</p>
                  <p className="text-gray-600">
                    Laburnum Park's historic homes often feature distinctive window styles. Clean both sides of all
                    windows, inspect for damaged seals or caulking, and check screens for tears before reinstalling.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Clean and repair porches and decks</p>
                  <p className="text-gray-600">
                    Sweep, wash, and inspect wooden porches and decks for loose boards or railings. Many Laburnum Park
                    homes feature prominent front porches that define their architectural character.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Check exterior paint</p>
                  <p className="text-gray-600">
                    Inspect painted surfaces for peeling or bubbling, particularly on trim, shutters, and doors. Touch
                    up as needed to prevent further damage.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Clean driveways and walkways</p>
                  <p className="text-gray-600">
                    Pressure wash concrete and brick surfaces to remove winter stains and prevent slippery algae growth
                    common in Laburnum Park's shaded areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Inspect foundation</p>
                  <p className="text-gray-600">
                    Check for cracks or water damage around the foundation. Laburnum Park's older homes may show signs
                    of settling that should be addressed promptly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Landscape Renewal for Laburnum Park Properties
          </h2>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <CheckSquare className="h-5 w-5 mr-2 text-green-700" /> Landscape Checklist
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Spring yard cleanup</p>
                  <p className="text-gray-600">
                    Remove winter debris, fallen branches, and leftover leaves from lawn and garden beds. Laburnum
                    Park's tree canopy means thorough cleanup is essential.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Prune trees and shrubs</p>
                  <p className="text-gray-600">
                    Remove dead or damaged branches from trees and shape flowering shrubs. Many Laburnum Park properties
                    feature mature azaleas, camellias, and rhododendrons that benefit from spring pruning.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Prepare garden beds</p>
                  <p className="text-gray-600">
                    Clear winter mulch, add compost, and edge beds for a clean look. Laburnum Park's established gardens
                    often need rejuvenation after winter.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Apply fresh mulch</p>
                  <p className="text-gray-600">
                    Add 2-3 inches of mulch to garden beds after soil warms to suppress weeds and retain moisture.
                    Choose natural mulch that complements Laburnum Park's traditional landscape aesthetic.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Lawn care startup</p>
                  <p className="text-gray-600">
                    Apply pre-emergent weed control, overseed bare patches, and schedule first mowing when grass reaches
                    3 inches. Laburnum Park's prominent lawns are neighborhood focal points.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Check irrigation systems</p>
                  <p className="text-gray-600">
                    Test sprinklers and drip systems for proper operation and coverage. Repair any winter damage before
                    summer heat arrives.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Clean and prepare outdoor living spaces</p>
                  <p className="text-gray-600">
                    Wash patio furniture, clean grills, and prepare outdoor entertaining areas. Laburnum Park's generous
                    lot sizes often include significant outdoor living space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Interior Spring Cleaning for Laburnum Park Homes
          </h2>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <CheckSquare className="h-5 w-5 mr-2 text-green-700" /> Interior Checklist
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Deep clean floors</p>
                  <p className="text-gray-600">
                    Many Laburnum Park homes feature original hardwood floors that need special care. Clean according to
                    material: vacuum and mop hardwoods, shampoo carpets, and scrub tile grout.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Dust ceiling fans and light fixtures</p>
                  <p className="text-gray-600">
                    Laburnum Park's high ceilings often feature decorative fixtures that collect dust. Use extension
                    dusters for hard-to-reach areas.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Clean air vents and replace filters</p>
                  <p className="text-gray-600">
                    Remove and wash vent covers, vacuum ducts as far as possible, and install fresh HVAC filters. This
                    is especially important for Laburnum Park's older homes that may have accumulated dust over winter.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Clean baseboards and trim</p>
                  <p className="text-gray-600">
                    Laburnum Park homes often feature ornate baseboards and crown molding. Dust and clean these details
                    to restore their beauty.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Wash windows from inside</p>
                  <p className="text-gray-600">
                    Clean interior glass, sills, and tracks. Laburnum Park's historic windows often have detailed
                    woodwork that needs gentle cleaning.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Deep clean kitchen</p>
                  <p className="text-gray-600">
                    Clean inside appliances, degrease range hoods, and sanitize countertops. Many Laburnum Park kitchens
                    have been updated while maintaining period charm.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Refresh bathrooms</p>
                  <p className="text-gray-600">
                    Deep clean tile, grout, and fixtures. Check for leaks and address any mildew issues common in older
                    bathrooms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Systems and Safety Checks for Laburnum Park Homes
          </h2>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <CheckSquare className="h-5 w-5 mr-2 text-green-700" /> Systems Checklist
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Test smoke and carbon monoxide detectors</p>
                  <p className="text-gray-600">
                    Replace batteries and test all safety devices. Laburnum Park's older homes may need updated
                    detection systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Schedule HVAC maintenance</p>
                  <p className="text-gray-600">
                    Have your cooling system serviced before summer heat arrives. Many Laburnum Park homes have updated
                    HVAC systems that still require regular maintenance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Check plumbing</p>
                  <p className="text-gray-600">
                    Inspect for leaks under sinks, around toilets, and check water heater for proper operation. Laburnum
                    Park's older plumbing systems may need special attention.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Clean dryer vents</p>
                  <p className="text-gray-600">
                    Remove lint buildup from dryer vents and ducts to prevent fire hazards and improve efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Inspect attic and basement</p>
                  <p className="text-gray-600">
                    Check for signs of water intrusion, pest activity, or needed repairs. Laburnum Park's basements and
                    crawl spaces often need special attention after winter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-green-800 mt-8 mb-4">
            Organization and Storage for Laburnum Park Homes
          </h2>

          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
              <CheckSquare className="h-5 w-5 mr-2 text-green-700" /> Organization Checklist
            </h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Rotate seasonal clothing</p>
                  <p className="text-gray-600">
                    Store winter items and bring out warm weather clothing. Many Laburnum Park homes have limited closet
                    space by modern standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Declutter living spaces</p>
                  <p className="text-gray-600">
                    Sort through accumulated items and donate or discard what's no longer needed. Create systems for
                    managing incoming mail and papers.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Organize storage areas</p>
                  <p className="text-gray-600">
                    Clean and reorganize basement, attic, and garage spaces. Laburnum Park homes often have unique
                    storage challenges that benefit from creative solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-6 w-6 rounded-md border border-green-700 flex-shrink-0 mr-3"></div>
                <div>
                  <p className="font-medium">Clean and organize kitchen pantry</p>
                  <p className="text-gray-600">
                    Check expiration dates, wipe down shelves, and reorganize for efficiency. Consider space-saving
                    solutions for Laburnum Park's vintage kitchens.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8">
            By working through this Laburnum Park-specific spring cleaning checklist, you'll not only prepare your home
            for the warmer months ahead but also protect your investment in one of Richmond's most distinctive
            neighborhoods. Many of these tasks can be completed over several weekends, or you can hire professionals for
            the more time-consuming or specialized work.
          </p>

          <p>
            Remember that Laburnum Park's historic homes benefit from regular maintenance that preserves their character
            while ensuring they meet modern living standards. A thorough spring cleaning is an investment in both your
            home's value and your family's comfort throughout the coming seasons.
          </p>

          <div className="bg-green-50 p-6 rounded-lg mt-10">
            <h3 className="text-xl font-bold text-green-800 mb-3">
              Need help with your Laburnum Park spring cleaning?
            </h3>
            <p className="mb-4">
              Sweaty Job provides professional spring cleaning services tailored specifically for Laburnum Park homes.
              From pressure washing exteriors to deep cleaning interiors, we understand the unique needs of homes in
              this historic Richmond neighborhood.
            </p>
            <Button className="bg-green-700 hover:bg-green-800">Schedule a Spring Cleaning Consultation</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
