import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import InlineForm from "@/app/compare/InlineForm"

export const metadata: Metadata = {
  title: "OtO Smart Sprinkler | Intelligent Lawn Watering | SweatyJob",
  description:
    "Save time and money with OtO Smart Sprinkler. Intelligent watering that adjusts to weather conditions. Easy setup, precise zones, and app control.",
  keywords: "OtO smart sprinkler, smart irrigation, lawn watering, water saving, smart lawn care, wifi sprinkler",
}

export default function OtoSmartSprinklerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-800 mb-6">The future of lawn care has arrived.</h1>
            <h2 className="text-xl md:text-2xl text-blue-700 mb-8">
              Save time and money with the internet's favorite smart sprinkler.
            </h2>
            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                Award Winner
              </div>
              <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">Top Rated</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/robots/oto-smart-sprinkler#Get-Started">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started Now
                </Button>
              </Link>
              <Link href="#features">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  See Features
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="https://cdn.shopify.com/s/files/1/0300/2780/8908/t/133/assets/OTO-ProductHighlightImage-Desktop%20v3nosolutions-01-v2.svg?v=1735917717"
              alt="OtO Smart Sprinkler"
              width={800}
              height={500}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Easy Setup Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Easiest sprinkler set-up. Ever.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Connect</h3>
                <p className="text-gray-600">Connect your hose and WiFi and OtO is ready to go.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Set</h3>
                <p className="text-gray-600">Set custom watering areas and your preferred schedule.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-blue-700 mb-3">Forget</h3>
                <p className="text-gray-600">OtO intelligently waters and adjusts to weather.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/robots/oto-smart-sprinkler#Get-Started">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start saving with OtO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Savings Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Save up to $4,240 with OtO</h2>
            <p className="text-center text-gray-600 mb-8">
              Based on 2 OtO units, each covering 2,000 sqft for two 8-month seasons
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-blue-700 mb-4">Traditional System</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Expensive installation costs</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Requires professional maintenance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Higher water usage</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Fixed zones that can't be easily changed</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">OtO Smart Sprinkler</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>No installation costs - setup in minutes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Self-maintained with automatic updates</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Smart watering saves up to 50% on water</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">•</span>
                    <span>Custom zones that can be changed anytime</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/robots/oto-smart-sprinkler#Get-Started">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Start saving now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white" id="features">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Enjoy more, work less in your yard.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Sets up in minutes.</h3>
              <p className="text-gray-700 mb-4">
                Don't even think about spending thousands of dollars on an expensive in-ground system. OtO sets up in
                minutes, all you need is a hose and Wi-Fi. No trenches required.
              </p>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="OtO Smart Sprinkler Setup"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">Water the grass, not the sidewalk.</h3>
              <p className="text-gray-700 mb-4">
                OtO's unique precision nozzle allows you to create custom-shaped zones that perfectly match your yard's
                layout. Set and customize these zones easily using the OtO app.
              </p>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="OtO Smart Sprinkler Precision"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Get the best lawn on the block.</h3>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Water when you want, where you want. Automatically. OtO adjusts to real-time weather conditions so you
              always know you're putting down just the right amount of water.
            </p>
            <Link href="/robots/oto-smart-sprinkler#Get-Started">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                OtOmate your yard today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">1,000+ 5-star reviews</h2>
          <p className="text-center text-gray-700 mb-12">Loved by thousands of homeowners.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "I've had my OtO for two seasons now and it's been a game changer. My water bill is down and my lawn
                  looks better than ever."
                </p>
                <p className="font-medium text-gray-900">- Michael T.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "Setup was incredibly easy and the app is intuitive. I love being able to control my sprinkler from
                  anywhere."
                </p>
                <p className="font-medium text-gray-900">- Sarah L.</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-3">★★★★★</div>
                <p className="text-gray-700 mb-4">
                  "The custom zones feature is amazing. I can water my flower beds differently than my lawn, all with
                  one device."
                </p>
                <p className="font-medium text-gray-900">- David R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Versatility Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Your yard is unique. So is OtO.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-50 rounded-full p-8 inline-block mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Xeriscape" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Xeriscape.</h3>
              <p className="text-gray-600">
                Deliver just the right amount of water to drought-tolerant plants as they need it.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 rounded-full p-8 inline-block mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Trees" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Trees.</h3>
              <p className="text-gray-600">Provide exactly the right amount of water for thirsty trees.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 rounded-full p-8 inline-block mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Bushes & shrubs" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Bushes & shrubs.</h3>
              <p className="text-gray-600">Irrigate exactly along a line of shrubs, hedges or bushes.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 rounded-full p-8 inline-block mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Grass" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Grass.</h3>
              <p className="text-gray-600">
                Draw the outline, and OtO fills it in. The water zig zags to deliver consistent, even water across your
                grassy areas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 rounded-full p-8 inline-block mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Gardens" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Gardens.</h3>
              <p className="text-gray-600">Use an Olla, mulch, or stones to gently water a garden.</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-50 rounded-full p-8 inline-block mb-4">
                <Image src="/placeholder.svg?height=80&width=80" alt="Potted plants" width={80} height={80} />
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Potted plants.</h3>
              <p className="text-gray-600">Water potted plants with precision and care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">One device. So many features.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Precise zones</h3>
                <p className="text-gray-600">
                  Only water the unique shape of your lawn. Save on your water bill and reduce water wastage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Easy setup</h3>
                <p className="text-gray-600">
                  Self-install and connect multiple units if needed. No trenches or expensive irrigation professionals
                  needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Long range & 360° nozzle</h3>
                <p className="text-gray-600">
                  With an impressive 360° throw radius of 30 feet that actively adjusts to water pressure changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Mobile app</h3>
                <p className="text-gray-600">
                  Edit your schedule and make changes to the watering amount. All from the palm of your hand.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Solar powered</h3>
                <p className="text-gray-600">
                  Powered by the sun and requires only three hours per day. No external power source needed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Built-in security</h3>
                <p className="text-gray-600">
                  Designed with security in mind, physically lock the unit to a permanent object to prevent against
                  theft.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Smart watering</h3>
                <p className="text-gray-600">
                  Simplify your lawn maintenance with smart watering. OtO reacts in real time to weather changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-100 shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold text-blue-700 mb-2">Getting set up is a walk in the park.</h3>
                <p className="text-gray-600">Simple installation and intuitive app make setup a breeze.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Specs.</h2>

          <div className="bg-blue-50 rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-4">Dimensions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">Device Length:</span> 16.1 inches (409mm)
                  </li>
                  <li>
                    <span className="font-medium">Width:</span> 3.9 inches (99.5mm)
                  </li>
                  <li>
                    <span className="font-medium">Height:</span> 12.3 inches (313mm)
                  </li>
                  <li>
                    <span className="font-medium">Device Weight:</span> 2.722kg
                  </li>
                </ul>

                <h3 className="text-xl font-bold text-blue-700 mt-6 mb-4">Box Includes</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>OtO Unit</li>
                  <li>Steel mounting bracket/ground stake & assembly parts</li>
                  <li>12V wall plug and 50 ft. outdoor cable</li>
                  <li>Quick start guide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-700 mb-4">Requirements</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>High-quality garden hose with brass GHT fittings</li>
                  <li>Wi-Fi connection, -70 dBm or greater (2.45GHz only)</li>
                  <li>Direct sunlight, 3 hours per day OR regular wall outlet</li>
                  <li>Minimum water pressure of 50 psi</li>
                  <li>Minimum hose diameter of 5/8 inches</li>
                </ul>

                <h3 className="text-xl font-bold text-blue-700 mt-6 mb-4">Range</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Maximum 30 feet (9.1m) radius (at a minimum water pressure of 50 psi)</li>
                  <li>360° throw radius</li>
                  <li>Each unit covers up to 2,800 square feet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Got questions? We've got answers.</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">How far does each OtO reach?</h3>
              <p className="text-gray-700">
                Each OtO unit can reach up to 30 feet in radius, covering approximately 2,800 square feet of lawn area
                with its 360° throw radius.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">How many OtOs do I need for my yard?</h3>
              <p className="text-gray-700">
                It depends on the size and shape of your yard. As a general rule, one OtO covers about 2,800 square
                feet. For larger yards, you can connect multiple units.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">Does OtO account for wind?</h3>
              <p className="text-gray-700">
                Yes, OtO's smart watering technology takes into account real-time weather conditions, including wind, to
                ensure optimal watering patterns.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-blue-700 mb-2">What do I need for OtO?</h3>
              <p className="text-gray-700">
                You'll need a garden hose with brass GHT fittings, Wi-Fi connection, and either direct sunlight (3 hours
                per day) or access to a regular wall outlet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 px-4 bg-white" id="Get-Started">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-blue-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">Never worry about your lawn again.</h2>
            <p className="text-center text-gray-700 mb-8">
              Fill out the form below to get started with your OtO Smart Sprinkler.
            </p>

            <div className="max-w-md mx-auto">
              <InlineForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
