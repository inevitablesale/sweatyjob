import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, MapPin, Calendar, Clock, DollarSign } from "lucide-react"
import {
  LawnMowingServiceSchema,
  LawnMowingLocalBusinessSchema,
  LawnMowingFAQSchema,
} from "@/app/schema/seo-schema-strategy"

export const metadata: Metadata = {
  title: "Lawn Mowing Service Near Me | Richmond, VA | Same-Day Service",
  description:
    "Professional lawn mowing service near you in Richmond, VA. Daily robot mowing, same-day setup, starting at $79/month. Serving all Richmond neighborhoods.",
  keywords:
    "lawn mowing service near me, lawn mowing services near me, lawn mowing service, lawn mowing services, same day lawn mowing near me",
}

export default function LawnMowingServicePage() {
  return (
    <main className="bg-black text-white">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LawnMowingServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LawnMowingLocalBusinessSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LawnMowingFAQSchema) }} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b-4 border-yellow-500 pt-24">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://sjc.microlink.io/ig0XUyoCut0OFQNOPrbB0OvmMhNnJZYdHim0PJaD2frKiA-jRrBXZqxFFzQsygkv9y0bokg4Y3CU9RX9mUJO3Q.jpeg"
            alt="Professional lawn mowing service near me in Richmond"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="relative">
              <div className="absolute -top-16 -left-8 text-yellow-500 text-9xl font-black opacity-10">79</div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-none">
                LAWN MOWING <span className="text-yellow-500">SERVICE</span> NEAR ME
              </h1>

              <div className="bg-yellow-500 h-2 w-32 mb-8"></div>

              <p className="text-xl md:text-2xl font-bold mb-8 text-gray-300">
                Professional robot lawn mowing service near you in Richmond. Daily mowing, same-day setup available,
                starting at just $79/month.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md flex items-center gap-2"
                >
                  GET STARTED NOW <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-yellow-500 bg-black hover:bg-black/80 text-yellow-500 text-lg font-bold px-8 py-6 rounded-md"
                >
                  CALL (804) 573-9825
                </Button>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Same-day service</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>All Richmond neighborhoods</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>No contracts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              LAWN MOWING SERVICE <span className="text-yellow-500">NEAR YOU</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Serving all Richmond neighborhoods with professional robot mowing service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Neighborhood 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="h-48 relative">
                <Image src="/images/neighborhoods/the-fan.jpg" alt="The Fan District" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">The Fan</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Professional lawn mowing service for The Fan's historic homes and unique properties.
                </p>
                <Link href="/neighborhoods/the-fan">
                  <Button variant="outline" className="w-full border-yellow-500 text-yellow-500">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </div>

            {/* Neighborhood 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="h-48 relative">
                <Image src="/images/neighborhoods/church-hill.jpg" alt="Church Hill" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Church Hill</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Daily robot mowing service for Church Hill's historic properties and sloped yards.
                </p>
                <Link href="/neighborhoods/church-hill">
                  <Button variant="outline" className="w-full border-yellow-500 text-yellow-500">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </div>

            {/* Neighborhood 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <div className="h-48 relative">
                <Image src="/images/neighborhoods/carytown.jpg" alt="Carytown" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Carytown</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  Professional lawn care service for Carytown's residential properties and businesses.
                </p>
                <Link href="/neighborhoods/carytown">
                  <Button variant="outline" className="w-full border-yellow-500 text-yellow-500">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/neighborhoods">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">SEE ALL SERVICE AREAS</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              WHY CHOOSE OUR <span className="text-yellow-500">LAWN MOWING SERVICE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of lawn care with our professional robot mowing service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Calendar className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">DAILY MOWING</h3>
              <p className="text-gray-300">
                Unlike traditional weekly services, our robot mowers cut your lawn every day for perfect results.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">SAME-DAY SERVICE</h3>
              <p className="text-gray-300">
                Need lawn mowing service today? We offer same-day setup in most Richmond neighborhoods.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 rounded-lg p-8 border-2 border-yellow-500">
              <div className="bg-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-3">AFFORDABLE PRICING</h3>
              <p className="text-gray-300">
                Just $79/month for daily professional lawn mowing service - more affordable than weekly services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              LAWN MOWING <span className="text-yellow-500">SERVICE PACKAGES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect lawn mowing service package for your Richmond home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Package 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="bg-gray-900 p-6 text-center">
                <h3 className="text-2xl font-bold">STANDARD</h3>
                <div className="text-4xl font-black text-yellow-500 mt-2">$79</div>
                <p className="text-gray-400">per month</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Daily robot mowing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 1/4 acre lawn</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Maintenance included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mobile app control</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">SELECT</Button>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border-2 border-yellow-500 transform scale-105">
              <div className="bg-yellow-500 p-6 text-center">
                <h3 className="text-2xl font-bold text-black">PREMIUM</h3>
                <div className="text-4xl font-black text-black mt-2">$99</div>
                <p className="text-yellow-900">per month</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Daily robot mowing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 1/2 acre lawn</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Maintenance included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mobile app control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Edge trimming included</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">SELECT</Button>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
              <div className="bg-gray-900 p-6 text-center">
                <h3 className="text-2xl font-bold">COMMERCIAL</h3>
                <div className="text-4xl font-black text-yellow-500 mt-2">$149</div>
                <p className="text-gray-400">per month</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Daily robot mowing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Up to 1 acre lawn</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Maintenance included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Mobile app control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Edge trimming included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Fertilization service</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold">SELECT</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              HOW OUR <span className="text-yellow-500">SERVICE WORKS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Getting started with our lawn mowing service is simple and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                1
              </div>
              <div className="bg-gray-800 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">CONTACT US</h3>
                <p className="text-gray-300">
                  Call (804) 573-9825 or fill out our online form to schedule your consultation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                2
              </div>
              <div className="bg-gray-800 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">CONSULTATION</h3>
                <p className="text-gray-300">We'll assess your lawn and recommend the perfect robot mowing solution.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                3
              </div>
              <div className="bg-gray-800 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">INSTALLATION</h3>
                <p className="text-gray-300">Our technicians install your robot mower system in under 2 hours.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-yellow-500 text-black text-4xl font-black w-16 h-16 rounded-full flex items-center justify-center absolute -top-8 -left-8 z-20">
                4
              </div>
              <div className="bg-gray-800 rounded-lg p-8 h-full border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold mb-4">ENJOY</h3>
                <p className="text-gray-300">
                  Sit back and relax as your robot mower maintains your lawn perfectly every day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Map */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              LAWN MOWING SERVICE <span className="text-yellow-500">COVERAGE MAP</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide professional lawn mowing service throughout Richmond and surrounding areas.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
            <div className="h-96 relative">
              {/* This would be replaced with an actual map component */}
              <div className="absolute inset-0 bg-gray-700 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-yellow-500" />
                <span className="text-2xl font-bold ml-4">Richmond Service Area</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Service Areas Include:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>The Fan</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Church Hill</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Carytown</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Bellevue</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Battery Park</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Forest Hill</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Ginter Park</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>Museum District</span>
                </div>
              </div>
              <div className="mt-6">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold">CHECK YOUR ADDRESS</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Statistics */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              LAWN MOWING <span className="text-yellow-500">BY THE NUMBERS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the impact of our daily robot lawn mowing service
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-4xl font-black text-yellow-500 mb-2">35+</div>
                <p className="text-gray-300">Hours saved per season for each homeowner</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-4xl font-black text-yellow-500 mb-2">90%</div>
                <p className="text-gray-300">Reduction in lawn care emissions</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-4xl font-black text-yellow-500 mb-2">365</div>
                <p className="text-gray-300">Days of perfect lawn height</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-4xl font-black text-yellow-500 mb-2">30%</div>
                <p className="text-gray-300">Denser, healthier grass</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
              >
                GET STARTED NOW <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              LAWN MOWING SERVICE <span className="text-yellow-500">FAQ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Common questions about our lawn mowing service near you
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 faq-question">
                How much does lawn mowing service cost near me in Richmond?
              </h3>
              <p className="text-gray-300 faq-answer">
                Our robot lawn mowing service costs just $79/month for standard residential properties in Richmond. This
                includes daily mowing, maintenance, and support. Traditional lawn mowing services in Richmond typically
                cost $40-60 per visit or $160-240 monthly for weekly service.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 faq-question">
                Do you offer same-day lawn mowing service near me?
              </h3>
              <p className="text-gray-300 faq-answer">
                Yes! We can often set up your robot mower the same day you sign up. Our Richmond-based team provides
                quick installation so you can start enjoying your perfectly maintained lawn immediately.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3 faq-question">
                What neighborhoods do you serve for lawn mowing in Richmond?
              </h3>
              <p className="text-gray-300 faq-answer">
                We provide lawn mowing services throughout Richmond including The Fan, Church Hill, Carytown, Bellevue,
                Battery Park, Forest Hill, Ginter Park, and many more local neighborhoods within 5-8 miles of downtown.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 faq-question">
                Is your lawn mowing service affordable compared to traditional options?
              </h3>
              <p className="text-gray-300 faq-answer">
                At $79/month, our robot mower service is often cheaper than traditional lawn mowing services when you
                factor in the frequency (daily vs. weekly) and the time you save. We offer the best value for
                residential lawn care in Richmond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/patterns/noise.png')] opacity-5"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-black">READY FOR PERFECT LAWN MOWING SERVICE?</h2>
            <p className="text-2xl mb-8 text-black/80 font-bold">
              Join other Richmond homeowners who've upgraded to robot mowing.
            </p>

            <Button
              size="lg"
              className="bg-black hover:bg-gray-900 text-yellow-500 text-xl font-black px-8 py-6 rounded-md"
            >
              GET STARTED NOW <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="mt-6 text-black/80 font-bold">
              Limited spots available for Richmond this month. Don't miss out.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
