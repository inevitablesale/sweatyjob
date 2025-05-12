import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Check, X, Leaf, Droplets, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import InlineForm from "@/app/compare/InlineForm"

export const metadata: Metadata = {
  title: "Dandy Lawn Weeding Robot | AI-Powered Weed Control | SweatyJob",
  description:
    "Discover the Dandy DT-01XL lawn weeding robot - an AI-powered solution that identifies and spot-treats weeds in your lawn automatically. The smart solution for a weed-free lawn without the hassle.",
  openGraph: {
    title: "Dandy Lawn Weeding Robot | AI-Powered Weed Control | SweatyJob",
    description:
      "Discover the Dandy DT-01XL lawn weeding robot - an AI-powered solution that identifies and spot-treats weeds in your lawn automatically.",
    images: ["https://dandytek.com/cdn/shop/files/Dandy_robot_3.png?v=1661288248&width=1500"],
  },
}

export default function LawnWeedingRobotsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Dandy DT-01XL Lawn Weeding Robot",
            image: "https://dandytek.com/cdn/shop/files/Dandy_robot_3.png?v=1661288248&width=1500",
            description:
              "AI-powered lawn weeding robot that identifies and spot-treats broadleaf weeds in your lawn automatically.",
            brand: {
              "@type": "Brand",
              name: "Dandy Technology",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.sweatyjob.com/robots/lawn-weeding-robots",
              priceCurrency: "USD",
              price: "799.99",
              availability: "https://schema.org/InStock",
            },
            review: {
              "@type": "Review",
              reviewRating: {
                "@type": "Rating",
                ratingValue: "4.7",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: "Lawn Tech Review",
              },
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.5",
              reviewCount: "86",
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
                  AI-POWERED LAWN WEEDING
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-tight text-white">
                  DANDY LAWN <span className="text-yellow-500">WEEDING ROBOT</span>
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl font-bold mt-6">
                  The AI-powered robot that identifies and spot-treats weeds in your lawn - precision weed control
                  without blanket spraying.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border-l-4 border-yellow-500 mt-6">
                <h2 className="text-2xl font-black mb-2">PRECISION WEED CONTROL:</h2>
                <p className="text-gray-300 mb-4">
                  Dandy uses AI to identify and spot-treat weeds with 95% less chemicals than traditional methods. No
                  more blanket spraying your entire lawn.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-black py-6"
                    asChild
                  >
                    <Link href="/robots/lawn-weeding-robots#Get-Started">
                      GET STARTED NOW <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <div className="flex items-center justify-center bg-gray-800 rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold mr-2 text-yellow-500">$799.99</span>
                    <span className="text-gray-300">DT-01XL (1 Acre)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <div className="bg-white h-full w-full rounded-xl">
                <Image
                  src="https://dandytek.com/cdn/shop/files/Dandy_robot_3.png?v=1661288248&width=1500"
                  alt="Dandy lawn weeding robot in action"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-yellow-500 text-black p-3 font-black text-lg rounded">
                WEED-FREE LAWN. 95% LESS CHEMICALS. ZERO EFFORT.
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
              WHY <span className="text-yellow-500">SMART HOMEOWNERS</span> ARE SWITCHING TO AI WEED CONTROL
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Prop 1 */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Leaf className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AI DETECTION</h3>
              <p className="text-gray-300">
                Uses computer vision and AI to identify broadleaf weeds like dandelions, clover, and crabgrass in your
                lawn.
              </p>
            </div>

            {/* Value Prop 2 */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Droplets className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">PRECISION SPRAYING</h3>
              <p className="text-gray-300">
                Applies a micro-dose of herbicide directly to identified weeds, using up to 95% less chemicals than
                traditional methods.
              </p>
            </div>

            {/* Value Prop 3 */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AUTONOMOUS OPERATION</h3>
              <p className="text-gray-300">
                Navigates your lawn independently, treating weeds as it finds them and returning to its base when
                finished.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Weeds */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-black text-center mb-12">
            COMMON WEEDS <span className="text-yellow-500">DANDY TARGETS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://images.squarespace-cdn.com/content/v1/54fbb611e4b0d7c1e151d22a/1653960196494-2YRSA0WT5Z4LS635NKFB/Dandelion+Seeds.jpg?format=2500w"
                  alt="Dandelions in lawn"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-500">DANDELIONS</h3>
                <p className="text-gray-300">
                  These common yellow-flowered weeds with fluffy seed heads spread rapidly across lawns. Dandy
                  identifies and treats them before they can spread.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://www.greenseasonslawns.com/wp-content/uploads/2022/04/Crabgrass-unmowed-and-having-gone-to-seed..jpg"
                  alt="Crabgrass in lawn"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-500">CRABGRASS</h3>
                <p className="text-gray-300">
                  This aggressive annual grass weed forms unsightly clumps in lawns. Dandy's AI can distinguish it from
                  regular grass and target it specifically.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/79/Four-leaf_Clover_Trifolium_repens_2.jpg"
                  alt="Clover in lawn"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-yellow-500">CLOVER</h3>
                <p className="text-gray-300">
                  While some consider clover beneficial, it can overtake lawns. Dandy can selectively target clover
                  patches while preserving your grass.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-black text-center mb-12">
            FEATURES & <span className="text-yellow-500">BENEFITS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-500/20 rounded-full p-2 mr-4">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">REDUCED CHEMICAL USAGE</h3>
                <p className="text-gray-300">
                  Uses up to 95% less herbicide than traditional broadcast spraying by targeting only the weeds, not
                  your entire lawn.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-500/20 rounded-full p-2 mr-4">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">TIME-SAVING AUTOMATION</h3>
                <p className="text-gray-300">
                  Eliminates the need for manual weed identification and treatment, saving you hours of lawn maintenance
                  time.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-500/20 rounded-full p-2 mr-4">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">PET & FAMILY SAFE</h3>
                <p className="text-gray-300">
                  Precision application means minimal chemical residue on your lawn, making it safer for children and
                  pets to play after treatment.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-500/20 rounded-full p-2 mr-4">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">ENVIRONMENTAL PROTECTION</h3>
                <p className="text-gray-300">
                  Minimizes herbicide runoff into waterways and reduces overall chemical impact on local ecosystems.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-500/20 rounded-full p-2 mr-4">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">SMART REPORTING</h3>
                <p className="text-gray-300">
                  Tracks weed populations and treatment effectiveness over time, providing insights into your lawn's
                  health.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 bg-yellow-500/20 rounded-full p-2 mr-4">
                <Check className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">CUSTOMIZABLE SETTINGS</h3>
                <p className="text-gray-300">
                  Adjust treatment intensity, schedule operations, and define no-spray zones through the companion app.
                </p>
              </div>
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
                GET YOUR <span className="text-yellow-500">DANDY</span> LAWN WEEDING ROBOT
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below to learn more about Dandy and how it can transform your lawn care routine.
              </p>
            </div>

            <InlineForm
              title="STOP FIGHTING LAWN WEEDS"
              subtitle="Get Your Dandy AI Weed Robot NOW!"
              buttonText="GET YOUR DANDY"
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
              DANDY VS. <span className="text-yellow-500">TRADITIONAL METHODS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how automated weeding compares to conventional weed control approaches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Traditional Column */}
            <div className="bg-black rounded-lg p-8 border border-gray-800 relative">
              <div className="absolute top-0 right-0 bg-red-500 text-white font-bold py-1 px-4 text-sm">
                TRADITIONAL
              </div>
              <h3 className="text-2xl font-bold mb-6">Manual & Chemical Weed Control</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Time-consuming manual weeding</p>
                    <p className="text-gray-400 text-sm">Hours spent on hands and knees pulling weeds</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Broadcast herbicide application</p>
                    <p className="text-gray-400 text-sm">Chemicals applied to entire lawn, not just weeds</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Scheduling and remembering treatments</p>
                    <p className="text-gray-400 text-sm">Need to track when to apply pre/post-emergent treatments</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <X className="h-5 w-5 text-red-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Environmental concerns</p>
                    <p className="text-gray-400 text-sm">Runoff into waterways and impact on beneficial insects</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Robot Column */}
            <div className="bg-black rounded-lg p-8 border-2 border-yellow-500 relative">
              <div className="absolute top-0 right-0 bg-yellow-500 text-black font-bold py-1 px-4 text-sm">DANDY</div>
              <h3 className="text-2xl font-bold mb-6">Lawn Weeding Robot</h3>

              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Fully automated operation</p>
                    <p className="text-gray-400 text-sm">Set it and forget it - the robot handles everything</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Precision spot-treatment</p>
                    <p className="text-gray-400 text-sm">Only applies herbicide directly to identified weeds</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Continuous monitoring</p>
                    <p className="text-gray-400 text-sm">Regular patrols catch weeds early before they spread</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mt-1">
                    <Check className="h-5 w-5 text-yellow-500 mr-3" />
                  </div>
                  <div>
                    <p className="font-bold">Eco-friendly approach</p>
                    <p className="text-gray-400 text-sm">Up to 95% reduction in herbicide use</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Gary V Style */}
      <section className="py-16 bg-black">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              <span className="text-yellow-500">STRAIGHT-UP</span> PRICING
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">No hidden fees. No BS. Just results.</p>
          </div>

          {/* Subscription Box - Gary V Style */}
          <div className="mx-auto max-w-3xl border-2 border-yellow-500 rounded-xl overflow-hidden">
            <div className="bg-yellow-500 py-4">
              <h3 className="text-2xl font-black text-black text-center">DANDY DT-01XL (1 ACRE MODEL)</h3>
            </div>
            <div className="bg-black p-8">
              <div className="flex flex-col mb-6">
                <div className="text-center mb-4">
                  <span className="text-5xl font-black text-white">$799.99</span>
                  <span className="text-xl text-gray-300">/one-time purchase</span>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg mb-6">
                  <h4 className="text-xl font-bold mb-4 text-yellow-500">WHAT YOU ACTUALLY GET:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-200">
                      <Check className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>Dandy DT-01XL robot mower</span>
                    </li>
                    <li className="flex items-center text-gray-200">
                      <Check className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>AI-powered weed detection system</span>
                    </li>
                    <li className="flex items-center text-gray-200">
                      <Check className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>Precision herbicide application system</span>
                    </li>
                    <li className="flex items-center text-gray-200">
                      <Check className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>Boundary wire and installation kit</span>
                    </li>
                    <li className="flex items-center text-gray-200">
                      <Check className="h-5 w-5 mr-2 text-yellow-500" />
                      <span>1-year warranty and support</span>
                    </li>
                  </ul>
                </div>
                <Link href="/robots/lawn-weeding-robots#Get-Started" className="w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black text-xl font-black py-6">
                    GET YOUR DANDY NOW <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">
              FREQUENTLY ASKED <span className="text-yellow-500">QUESTIONS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Common questions about Dandy lawn weeding robots.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How does the Dandy lawn weeding robot work?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Dandy uses advanced computer vision and AI to identify broadleaf weeds in your lawn. As it navigates
                  across your yard, its cameras scan for weeds like dandelions, clover, and crabgrass. When it
                  identifies a weed, it positions itself precisely and applies a micro-dose of herbicide directly to the
                  weed, avoiding your grass. This targeted approach uses up to 95% less herbicide than traditional
                  broadcast spraying methods while effectively eliminating weeds.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  What is the Dandy DT-01XL weed-killing robot?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  The Dandy DT-01XL is the larger model of Dandy's lawn weeding robot, designed to cover up to 1 acre of
                  lawn area. It features the same advanced AI weed detection and precision spraying technology as the
                  standard model, but with enhanced battery life and herbicide capacity to handle larger properties. The
                  DT-01XL is ideal for homeowners with expansive lawns who want comprehensive weed control without the
                  time investment of manual methods or the environmental impact of traditional broadcast spraying.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Does the Dandy robot really eliminate lawn weeds completely?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Dandy is highly effective at controlling broadleaf weeds in lawns, but like any weed control method,
                  it may not eliminate 100% of weeds in a single pass. The robot works best as part of an ongoing lawn
                  maintenance program. With regular operation, Dandy progressively reduces weed populations by treating
                  new weeds as they emerge. Most users see significant results within 2-3 weeks of regular use, with
                  continued improvement over time as the robot learns your lawn's specific weed patterns.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Will the Dandy robot kill my grass or just the weeds?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Dandy is specifically designed to target only weeds while preserving your grass. Its AI vision system
                  can distinguish between grass and broadleaf weeds with high accuracy. Additionally, the precision
                  spray system applies herbicide only to the identified weed, not to surrounding grass. The herbicide
                  formula used is selective, meaning it's designed to kill broadleaf weeds while being safe for most
                  common lawn grasses. This targeted approach minimizes any potential impact on your desired lawn grass.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How does the Dandy robot detect weeds among grass?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Dandy uses a sophisticated computer vision system paired with artificial intelligence to identify
                  weeds. The robot's cameras capture images of your lawn as it moves, and its onboard AI analyzes these
                  images in real-time. The system has been trained on thousands of images to recognize the distinctive
                  leaf shapes, patterns, and colors of common lawn weeds, distinguishing them from grass. This
                  technology allows Dandy to identify weeds with high accuracy, even when they're partially hidden or at
                  early growth stages.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  What herbicide does the Dandy lawn robot use or spray?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Dandy uses a standard selective herbicide formulated specifically for broadleaf weed control in lawns.
                  The exact formulation may vary based on your region and the specific model, but it typically contains
                  ingredients similar to those found in commercial selective weed killers. The key difference is that
                  Dandy applies an extremely precise micro-dose directly to each weed, using approximately 95% less
                  herbicide than traditional broadcast spraying methods. The herbicide cartridge is easily replaceable
                  and typically lasts for several acres of treatment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Do I need a boundary wire for the Dandy weed robot?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Yes, Dandy uses a boundary wire system similar to robotic lawn mowers. This wire defines the perimeter
                  of your lawn and helps the robot navigate effectively. The boundary wire is installed around the edges
                  of your lawn, typically just below the surface. It creates an invisible boundary that the robot
                  detects and respects. Installation is a one-time process that takes a few hours for an average lawn.
                  The wire helps Dandy understand where to operate and prevents it from wandering into flower beds,
                  driveways, or neighboring properties.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How much does the Dandy lawn weeding robot cost?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  The Dandy DT-01XL model, which covers up to 1 acre of lawn, costs $799.99. While this represents a
                  significant upfront investment, many homeowners find it cost-effective when compared to the ongoing
                  expense of professional lawn treatments or the time investment of DIY weed control. The robot's
                  precision targeting system uses up to 95% less herbicide than traditional methods, resulting in
                  additional savings on weed control products over time. Dandy also offers financing options to make the
                  initial purchase more accessible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Is Dandy safe to use around children and pets?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Dandy is designed with family safety in mind. The robot applies herbicide in such small, targeted
                  doses that the risk of exposure is significantly reduced compared to traditional spraying methods. The
                  herbicide dries quickly after application, further reducing potential contact. As a precaution, it's
                  recommended to keep children and pets off treated areas for 1-2 hours after the robot completes its
                  cycle. The robot itself has multiple safety features, including obstacle detection sensors that cause
                  it to stop or change direction when encountering pets, children, or obstacles.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How often should I run the Dandy robot?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  For optimal weed control, it's recommended to run Dandy 1-2 times per week during the growing season
                  when weeds are most active. This frequency allows the robot to catch new weeds as they emerge before
                  they can establish or spread. During peak weed seasons (typically spring and early fall), more
                  frequent operation may be beneficial. The companion app provides scheduling features that allow you to
                  set regular automated runs. You can adjust the frequency based on your lawn's specific needs, weed
                  pressure, and seasonal conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  Dandy DT-01 vs DT-01XL – which model should I buy?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  The choice between the Dandy DT-01 and DT-01XL depends primarily on your lawn size. The DT-01 is
                  designed for smaller lawns up to 1/4 acre, while the DT-01XL can handle properties up to 1 acre. The
                  DT-01XL has a larger herbicide tank and extended battery life to cover the increased area. If your
                  lawn is close to the size threshold, it's generally better to choose the larger model to ensure
                  complete coverage. Both models feature the same advanced AI weed detection technology and precision
                  spraying system, differing mainly in their capacity and coverage area.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12" className="border-b border-gray-800">
                <AccordionTrigger className="text-white hover:text-yellow-500">
                  How does Dandy compare to hiring a lawn service for weed control?
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  Compared to professional lawn services, Dandy offers several advantages. First, it provides ongoing
                  weed control rather than periodic treatments, catching weeds as they emerge. Second, it uses
                  significantly less herbicide through its precision targeting, making it more environmentally friendly.
                  Third, it offers long-term cost savings - while the initial investment is higher than a few service
                  visits, Dandy typically pays for itself within 1-2 years compared to regular professional treatments.
                  Finally, you maintain complete control over the treatment schedule and don't need to arrange service
                  appointments or have strangers on your property.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">READY FOR A WEED-FREE LAWN?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto font-bold">
            Join the lawn care revolution with autonomous weeding technology. Save time, reduce chemicals, and enjoy a
            perfectly maintained lawn.
          </p>
          <Button size="lg" className="bg-black hover:bg-gray-900 text-yellow-500 text-xl font-black px-8 py-6" asChild>
            <Link href="/robots/lawn-weeding-robots#Get-Started">
              GET STARTED TODAY <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
