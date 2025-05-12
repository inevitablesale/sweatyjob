import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Check, X, Sun, Zap, TreesIcon as Plant, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import InlineForm from "@/app/compare/InlineForm"

export const metadata: Metadata = {
  title: "Tertill Garden Weeding Robot | Chemical-Free Weed Control | SweatyJob",
  description:
    "Discover the Tertill garden weeding robot - a solar-powered, autonomous solution that keeps your garden weed-free without chemicals. Perfect for vegetable gardens, flower beds, and raised planters.",
  openGraph: {
    title: "Tertill Garden Weeding Robot | Chemical-Free Weed Control | SweatyJob",
    description:
      "Discover the Tertill garden weeding robot - a solar-powered, autonomous solution that keeps your garden weed-free without chemicals.",
    images: ["https://tertill.com/cdn/shop/articles/Drew_W._Garden_1500x.jpg?v=1602076100"],
  },
}

export default function GardenWeedingRobotsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Tertill Garden Weeding Robot",
            image: "https://tertill.com/cdn/shop/articles/Drew_W._Garden_1500x.jpg?v=1602076100",
            description:
              "Solar-powered garden weeding robot that automatically patrols your garden daily, cutting down small weeds as they emerge.",
            brand: {
              "@type": "Brand",
              name: "Tertill",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.sweatyjob.com/robots/garden-weeding-robots",
              priceCurrency: "USD",
              price: "149.00",
              availability: "https://schema.org/InStock",
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Garden Tech Review",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.3",
              reviewCount: "127",
            },
          }),
        }}
      />

      {/* Merchant Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SweatyJob",
            url: "https://www.sweatyjob.com",
            logo: "https://www.sweatyjob.com/images/sweatyjob-logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-804-573-9825",
              contactType: "customer service",
            },
            sameAs: [
              "https://www.facebook.com/sweatyjob",
              "https://www.twitter.com/sweatyjob",
              "https://www.instagram.com/sweatyjob",
            ],
          }),
        }}
      />

      {/* Hero Section - Gary V Style */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-90"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="bg-yellow-500 text-black text-sm font-bold px-3 py-1 inline-block mb-4 rounded">
                  AUTONOMOUS GARDEN WEEDING
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight text-white">
                  TERTILL GARDEN <span className="text-yellow-500">WEEDING ROBOT</span>
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl font-bold mt-6">
                  The solar-powered garden weeding robot that keeps your garden weed-free automatically - no chemicals
                  needed.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-500 mt-6">
                <h2 className="text-2xl font-black mb-2">CHEMICAL-FREE WEEDING:</h2>
                <p className="text-gray-300 mb-4">
                  Tertill patrols your garden daily, preventing weeds from establishing themselves. By cutting weeds as
                  they sprout, it eliminates the need for manual weeding or herbicides.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-black py-6"
                    asChild
                  >
                    <Link href="/robots/garden-weeding-robots#Get-Started">
                      GET STARTED NOW <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <div className="flex items-center justify-center bg-gray-800 rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold mr-2 text-yellow-500">$149.00</span>
                    <span className="text-gray-300">One-time purchase</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="https://tertill.com/cdn/shop/articles/Drew_W._Garden_1500x.jpg?v=1602076100"
                alt="Tertill Garden Weeding Robot in action"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-yellow-500 text-black p-3 font-black text-lg rounded">
                WEED-FREE GARDEN. ZERO CHEMICALS. $149.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section - Gary V Style */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              WHY <span className="text-yellow-500">SMART GARDENERS</span> ARE SWITCHING TO ROBOT WEEDING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Plant className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">PLANT RECOGNITION</h3>
              <p className="text-gray-300">
                Uses height as a differentiator - whacks small weeds while avoiding taller plants protected by plant
                collars.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">MECHANICAL WEEDING</h3>
              <p className="text-gray-300">
                Uses a string trimmer to cut weeds at ground level, eliminating the need for herbicides in your garden.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Sun className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">SOLAR POWERED</h3>
              <p className="text-gray-300">
                Completely solar-powered, requiring no charging or batteries. Works autonomously in your garden every
                day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-black text-center mb-12">
            FEATURES & <span className="text-yellow-500">BENEFITS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://tertill.com/cdn/shop/articles/lydia_mature_garden_-_with_Tertill_easier_to_spot_1500x.jpg?v=1623722313"
                alt="Tertill in a mature garden"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">DAILY MAINTENANCE</h3>
              <p className="text-gray-300 mb-6">
                Tertill patrols your garden daily, preventing weeds from establishing themselves. By cutting weeds as
                they sprout, it eliminates the need for manual weeding.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Maintains up to 200 sq ft garden area</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Weatherproof design works in rain or shine</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Prevents weed seeds from spreading</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">DESIGNED BY EXPERTS</h3>
              <p className="text-gray-300 mb-6">
                Created by the co-founder of iRobot (makers of Roomba), Tertill brings robotic innovation to garden
                maintenance, saving you time and effort.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Developed by robotics experts</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Simple setup with no programming required</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">Includes plant collars to protect seedlings</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
              <Image
                src="https://tertill.com/cdn/shop/articles/Daniel_V_Canva.png?v=1594913848"
                alt="Tertill garden robot design"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">
              IDEAL FOR <span className="text-yellow-500">VARIOUS GARDEN TYPES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Garden weeding robots can work in a variety of garden settings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-black rounded-lg p-6 border border-gray-800 hover:border-yellow-500 transition-all">
              <h3 className="text-xl font-bold mb-2 text-yellow-500">VEGETABLE GARDENS</h3>
              <p className="text-gray-300">
                Perfect for keeping rows of vegetables weed-free without chemicals that could contaminate your food.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-800 hover:border-yellow-500 transition-all">
              <h3 className="text-xl font-bold mb-2 text-yellow-500">FLOWER BEDS</h3>
              <p className="text-gray-300">
                Navigates between flowers and ornamental plants, keeping beds tidy without disturbing your display.
              </p>
            </div>

            <div className="bg-black rounded-lg p-6 border border-gray-800 hover:border-yellow-500 transition-all">
              <h3 className="text-xl font-bold mb-2 text-yellow-500">RAISED BEDS</h3>
              <p className="text-gray-300">
                Specially designed to work within the confined space of raised garden beds, with contained boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Form */}
      <section id="Get-Started" className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black mb-4">
                GET YOUR <span className="text-yellow-500">TERTILL</span> GARDEN WEEDING ROBOT
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below to learn more about Tertill and how it can transform your gardening experience.
              </p>
            </div>

            <InlineForm
              title="STOP PULLING WEEDS FOREVER"
              subtitle="Get Your Tertill Robot Weeder NOW!"
              buttonText="GET YOUR TERTILL"
              showAddress={true}
              darkMode={true}
              className="mt-8"
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">
              TERTILL VS. <span className="text-yellow-500">TRADITIONAL METHODS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how automated weeding compares to conventional garden weeding approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Column */}
            <div className="bg-black rounded-lg p-8 border border-gray-800 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white font-bold py-1 px-4 text-sm">
                TRADITIONAL
              </div>
              <h3 className="text-2xl font-bold mb-6">Manual Garden Weeding</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Physically demanding</p>
                    <p className="text-gray-400 text-sm">Hours spent kneeling, bending, and pulling weeds</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Inconsistent maintenance</p>
                    <p className="text-gray-400 text-sm">Weeding often gets postponed due to time constraints</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Risk of plant damage</p>
                    <p className="text-gray-400 text-sm">
                      Manual weeding can disturb roots or accidentally remove young plants
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Chemical alternatives have drawbacks</p>
                    <p className="text-gray-400 text-sm">
                      Herbicides can harm beneficial insects and contaminate food crops
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Robot Column */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 text-sm">TERTILL</div>
              <h3 className="text-2xl font-bold mb-6">Garden Weeding Robot</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Fully automated</p>
                    <p className="text-gray-400 text-sm">Works independently while you focus on other tasks</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Daily maintenance</p>
                    <p className="text-gray-400 text-sm">Consistent weeding keeps garden beds pristine</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Gentle precision</p>
                    <p className="text-gray-400 text-sm">Carefully navigates around garden plants without damage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Chemical-free operation</p>
                    <p className="text-gray-400 text-sm">Uses mechanical methods to eliminate weeds</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">
              FREQUENTLY ASKED <span className="text-yellow-500">QUESTIONS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about Tertill garden weeding robots.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How does the Tertill garden weeding robot work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Tertill uses a simple but effective approach to weed control. It patrols your garden daily, using
                  sensors to detect plants. Small weeds are cut down by a string trimmer underneath the robot, while
                  taller established plants are avoided. The robot uses the height difference - anything shorter than 1
                  inch is considered a weed and trimmed, while taller plants are protected. For seedlings and small
                  plants, Tertill comes with plant collars to place around them for protection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Does Tertill pull out weeds or just cut them?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Tertill doesn't pull weeds out by the roots - it cuts them at ground level using a small string
                  trimmer. By repeatedly cutting weeds as they emerge, it prevents them from establishing,
                  photosynthesizing, and growing. Over time, this depletes the weed's energy reserves stored in the
                  roots, effectively killing many weeds. Some persistent perennial weeds may require occasional manual
                  removal, but Tertill significantly reduces the overall weeding workload.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Will Tertill hurt my plants or vegetables?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Tertill is designed to avoid damaging your garden plants. It uses height as the main differentiator -
                  plants taller than 1 inch are avoided, while shorter plants (typically weeds) are trimmed. For
                  seedlings and smaller plants, Tertill comes with plant collars that you place around them. The robot's
                  sensors detect these collars and avoid the area, protecting your young plants until they grow tall
                  enough to be recognized naturally.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Do I need to charge Tertill or is it fully solar-powered?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Tertill is completely solar-powered and doesn't require charging. The solar panel on top of the robot
                  harvests energy from the sun to power its daily operations. In most sunny or partly cloudy conditions,
                  it gathers enough energy to work effectively. During extended cloudy periods, Tertill conserves energy
                  by reducing its activity, then resumes normal operation when sunlight returns. This makes it a truly
                  autonomous solution that works without your intervention.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How big of a garden can one Tertill handle?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  A single Tertill can effectively maintain a garden area of up to 200 square feet (approximately 10' x
                  20'). For larger gardens, you can use multiple Tertill robots, each maintaining its own section. The
                  robot works best in enclosed garden beds with some form of barrier (at least 2 inches high) to keep it
                  contained in its designated area. This can be a raised bed edge, garden fencing, or any other form of
                  garden border.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Do I need to weed my garden first before using Tertill?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, it's recommended to start with a weed-free garden before introducing Tertill. The robot is
                  designed to prevent weeds from establishing by cutting them when they're small, rather than tackling
                  large established weeds. Clear your garden of existing weeds, then let Tertill maintain it by
                  preventing new weeds from growing. This gives you the best results and allows Tertill to work as
                  intended - as a maintenance tool rather than a solution for overgrown gardens.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Is Tertill effective on all types of garden weeds?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Tertill is effective against most common garden weeds, particularly annual weeds that reproduce by
                  seed. By consistently cutting weeds before they can produce seeds, it breaks the weed lifecycle. It's
                  most effective against weeds like crabgrass, chickweed, and other common garden invaders. Some
                  persistent perennial weeds with extensive root systems (like dandelions or bindweed) may eventually
                  require supplemental hand weeding, but Tertill significantly reduces their presence by preventing them
                  from photosynthesizing and weakening their root systems over time.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How does Tertill navigate around the garden?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Tertill navigates using a combination of sensors and algorithms similar to robotic vacuums. It moves
                  in a semi-random pattern throughout your garden, changing direction when it encounters obstacles like
                  plants, garden borders, or other objects. The robot has wheels designed to handle garden terrain and
                  can navigate over small bumps and through soft soil. It doesn't create or follow a map - instead, its
                  random pattern ensures coverage of the entire garden area over time, much like how robotic vacuum
                  cleaners work.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Is Tertill weatherproof and can it stay outside all season?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, Tertill is designed to be weatherproof and can remain in your garden throughout the growing
                  season. It's built to withstand rain, sun, and typical garden conditions. The robot can operate in
                  light rain, though it may reduce activity during heavy downpours. At the end of the growing season,
                  it's recommended to bring Tertill inside for storage during winter months or extended periods when the
                  garden is dormant. This helps preserve battery life and protect the robot from extreme winter
                  conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How many Tertill robots do I need for my garden?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  The number of Tertill robots you need depends on the size and layout of your garden. As a general
                  rule, one Tertill can handle up to 200 square feet of garden space. For larger gardens, you'll need
                  multiple units. It's also important to consider the layout - if you have separate garden beds with
                  barriers between them, you might need a separate Tertill for each enclosed area, even if the total
                  square footage is less than 200. For optimal performance, it's better to have the right number of
                  robots rather than trying to stretch one robot across too large an area.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How does Tertill compare to using herbicides in the garden?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Unlike chemical herbicides, Tertill offers a completely chemical-free approach to weed control. This
                  makes it ideal for vegetable gardens, organic gardening, and households with children or pets. While
                  herbicides can sometimes damage desirable plants through drift or runoff, Tertill physically cuts only
                  the weeds it identifies by height. The robot provides ongoing maintenance without the need to mix,
                  apply, or store potentially harmful chemicals. It's an environmentally friendly alternative that
                  aligns with sustainable and organic gardening practices.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Is Tertill more cost-effective than manual weed maintenance?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  While Tertill requires an upfront investment of $149, it can be more cost-effective than manual
                  weeding over time. Consider the value of your time spent weeding (which can be substantial throughout
                  a growing season), the cost of tools and supplies for manual weeding, and the potential cost of hiring
                  help for garden maintenance. Additionally, Tertill's solar-powered operation means no ongoing costs
                  for electricity or fuel. For many gardeners, especially those with larger gardens or physical
                  limitations that make manual weeding difficult, Tertill provides excellent value over its multi-year
                  lifespan.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">READY FOR A WEED-FREE GARDEN?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-bold">
            Join the gardening revolution with autonomous weeding technology. Save time, eliminate chemicals, and enjoy
            a perfectly maintained garden.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-900 text-yellow-500 text-xl font-black px-8 py-6" asChild>
            <Link href="/robots/garden-weeding-robots#Get-Started">
              GET STARTED TODAY <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
