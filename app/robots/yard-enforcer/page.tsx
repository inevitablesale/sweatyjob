import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import InlineForm from "@/app/compare/InlineForm"

export const metadata: Metadata = {
  title: "Yard Enforcer® Motion-Activated Sprinkler | SweatyJob",
  description:
    "Protect your yard from unwanted visitors with the Orbit Yard Enforcer® Motion-Activated Sprinkler. Humane wildlife deterrent with adjustable settings.",
  keywords:
    "yard enforcer, motion activated sprinkler, pest control, wildlife deterrent, orbit sprinkler, garden protection",
}

export default function YardEnforcerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-16 px-4 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold text-green-800 mb-6">
                Yard Enforcer® Motion-Activated Sprinkler
              </h1>
              <h2 className="text-xl md:text-2xl text-green-700 mb-4">Orbit's Humane Pest Solution</h2>
              <p className="text-gray-700 mb-8 text-lg">
                You've created the lawn of your dreams; now protect it with the Orbit Yard Enforcer® Motion-Activated
                Sprinkler. The most humane wildlife deterrent on the market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/robots/yard-enforcer#Get-Started">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                    See Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="https://sjc.microlink.io/O3fCiBIOJZoQ_s29U0DBkhvqD2Jd3m6l5kNA_hRvL7IAu_4kccnZe-aAzK3gDZloqCpMl-6iKj_HSsy7Yzyjhg.jpeg"
                alt="Yard Enforcer Motion-Activated Sprinkler"
                width={500}
                height={500}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 px-4 bg-white" id="features">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
            Top Reasons to Choose the Yard Enforcer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-green-700 mb-3">Multiple Times of Day Options</h3>
                <p className="text-gray-600">
                  Most critters are active at dawn/dusk and overnight; setting controls give you the option to have the
                  motion detector sprinkler activate during the day, at night, or 24 hours a day for full-time
                  protection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-green-700 mb-3">Saves Water</h3>
                <p className="text-gray-600">
                  The Yard Enforcer uses as little as two cups of water with each spray and the duration of the spray is
                  adjustable. You can also enable a regular watering cycle.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-100 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-green-700 mb-3">More Accurate</h3>
                <p className="text-gray-600">
                  The second generation lens offers more precise detection over a wider field of view with a more
                  uniform 120 degree viewing angle to keep pests out of your yard or garden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Technical Specifications</h2>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Connection</span>
                  <span className="text-gray-600">¾-inch inlet Standard hose thread</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Operating Pressure</span>
                  <span className="text-gray-600">10-100 PSI</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Modes</span>
                  <span className="text-gray-600">Day Only, Night Only, Day and Night, Off</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">UV Resistant</span>
                  <span className="text-gray-600">Yes</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Passthrough Ports</span>
                  <span className="text-gray-600">Yes</span>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Sensor Viewing Range</span>
                  <span className="text-gray-600">120 Degrees, 40 feet</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Sprinkler Coverage</span>
                  <span className="text-gray-600">Up to 1600 square feet</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Cycles</span>
                  <span className="text-gray-600">Up to 7500 per set of batteries</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Warranty</span>
                  <span className="text-gray-600">2 Years</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Batteries</span>
                  <span className="text-gray-600">4 AA (not included)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">40' Observation Range</h3>
              <p className="text-gray-700">
                The infrared sensor can detect objects up to 40 feet away providing plenty of coverage for your yard and
                garden. The range is adjustable for precise protection.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">120 Degree Field of View</h3>
              <p className="text-gray-700">
                The Yard Enforcer has a 120 degree field of view to ensure that it can see pests approaching from many
                different angles with its infrared lens.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-green-800 mb-3">35' Spray Distance</h3>
              <p className="text-gray-700">
                The impact sprinkler has a 35' spray distance and makes a distinct noise as it activates to scare away
                pests with a combination of water noise and motion.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              A motion activated sprinkler is the most humane wildlife deterrent on the market and can be safely used
              even if your unwelcome guest is a protected species. A loud blast of sound followed by a spray of water
              will startle but not harm wildlife.
            </p>
            <Link href="/robots/yard-enforcer#Get-Started">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Protect Your Yard Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Advanced Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-3">01 / Range</h3>
              <h4 className="text-lg font-semibold text-green-700 mb-2">Long Distance Security</h4>
              <p className="text-gray-700 mb-4">
                Fully Adjustable spray and distance patterns allow you to reach from 10 feet up to 70 feet in diameter,
                with a radius of a few degrees to a full 360 degrees.
              </p>
              <Link href="/robots/yard-enforcer#Get-Started">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Buy Now
                </Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-3">02 / Durability</h3>
              <h4 className="text-lg font-semibold text-green-700 mb-2">Solid Construction</h4>
              <p className="text-gray-700 mb-4">
                A solid steel spike keeps the unit firmly planted in the ground. A brass hose swivel for easy, leak-free
                connection that won't corrode or break.
              </p>
              <Link href="/robots/yard-enforcer#Get-Started">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Buy Now
                </Button>
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-800 mb-3">03 / Flowerbeds</h3>
              <h4 className="text-lg font-semibold text-green-700 mb-2">Easily Adaptable</h4>
              <p className="text-gray-700 mb-4">
                Fits all sized lawns and gardens with passthrough ports to allow for expansion hoses and sprinklers for
                added coverage.
              </p>
              <Link href="/robots/yard-enforcer#Get-Started">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Buy Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-16 px-4 bg-white" id="Get-Started">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-green-50 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-6">Get Your Yard Enforcer Today</h2>
            <p className="text-center text-gray-700 mb-8">
              Fill out the form below to get started with your Yard Enforcer Motion-Activated Sprinkler.
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
