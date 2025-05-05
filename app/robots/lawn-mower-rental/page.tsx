import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin, ArrowRight, Phone, Calendar, Clock, DollarSign } from "lucide-react"
import { Breadcrumb } from "@/components/breadcrumb"

export const metadata: Metadata = {
  title: "Lawn Mower Rental Near Me | Riding Mower Rentals in Richmond, VA",
  description:
    "Affordable lawn mower rental options in Richmond, VA. Rent riding lawn mowers, push mowers, and robotic mowers. Better than Home Depot lawn mower rental. Same-day delivery available.",
  keywords:
    "lawn mower rental, lawn mower rental near me, riding lawn mower rental, lawn mower rental home depot, ride lawn mower rental",
}

export default function LawnMowerRentalPage() {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Robots", href: "/robots" },
    { label: "Lawn Mower Rental", href: "/robots/lawn-mower-rental" },
  ]

  return (
    <main className="bg-white">
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-24 pb-16 border-b-4 border-yellow-500">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://sjc.microlink.io/eGU8LY37a5PMayHMg6aV3lUYvi5ce3KuLToWUiGnVIt5_HR47zPHEM4P8S7WKFAxA4BaaRGZo131f6f4JfsrMA.jpeg"
            alt="Lawn mower for rental in Richmond"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/70"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-yellow-500 text-black font-bold px-4 py-1 rounded-md mb-4">
              RICHMOND'S BEST RENTAL OPTIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              LAWN MOWER RENTAL <span className="text-yellow-500">NEAR ME</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Rent high-quality lawn mowers in Richmond, VA. We offer riding lawn mower rentals, push mowers, and even
              robotic mowers - delivered right to your door.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md flex items-center gap-2"
              >
                FIND RENTALS NEAR ME <MapPin className="ml-2 h-5 w-5" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-black text-yellow-500 text-lg font-bold px-8 py-6 rounded-md"
              >
                CALL FOR AVAILABILITY <Phone className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                <span>Same-day delivery</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                <span>Hourly, daily & weekly rates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-2" />
                <span>Better than Home Depot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Options Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              LAWN MOWER <span className="text-yellow-500">RENTAL OPTIONS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our wide selection of lawn mowers for rental in Richmond, VA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Riding Lawn Mower Rental */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image src="/images/service-deck.jpg" alt="Riding lawn mower rental" fill className="object-cover" />
                <div className="absolute top-4 left-4 bg-yellow-500 text-black font-bold px-4 py-1 rounded-md">
                  MOST POPULAR
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Riding Lawn Mower Rental</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for larger yards. Our riding lawn mower rentals make quick work of big lawns.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">4-hour minimum</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">From $75/day</span>
                  </div>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">RESERVE A RIDING MOWER</Button>
              </div>
            </div>

            {/* Push Lawn Mower Rental */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/images/lawn-comparison.jpg"
                  alt="Push lawn mower for rental"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Push Lawn Mower Rental</h3>
                <p className="text-gray-600 mb-4">
                  Ideal for small to medium yards. Easy to use and transport in most vehicles.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">2-hour minimum</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">From $35/day</span>
                  </div>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">RESERVE A PUSH MOWER</Button>
              </div>
            </div>

            {/* Robot Lawn Mower Rental */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image
                  src="/images/bestmow-robot-mower-tech.png"
                  alt="Robot lawn mower rental near me"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white font-bold px-4 py-1 rounded-md">
                  NEW OPTION
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Robot Lawn Mower Rental</h3>
                <p className="text-gray-600 mb-4">
                  The future of lawn care. Set it up and let it work while you relax.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Weekly rental</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">From $99/week</span>
                  </div>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">RESERVE A ROBOT MOWER</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us vs Home Depot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              WHY CHOOSE US OVER <span className="text-yellow-500">HOME DEPOT LAWN MOWER RENTAL</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our lawn mower rental service compares to Home Depot and other big box stores
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto border-collapse">
              <thead>
                <tr className="bg-gray-900 text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">
                    <span className="text-yellow-500 font-bold">SweatyJob Rentals</span>
                  </th>
                  <th className="p-4 text-center">Home Depot Rental</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold">Delivery to Your Home</td>
                  <td className="p-4 text-center text-green-600">✓ Included</td>
                  <td className="p-4 text-center text-red-600">✗ Not Available</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-bold">Riding Lawn Mower Options</td>
                  <td className="p-4 text-center text-green-600">✓ Multiple Models</td>
                  <td className="p-4 text-center text-red-600">✗ Limited Selection</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold">Robot Mower Rentals</td>
                  <td className="p-4 text-center text-green-600">✓ Available</td>
                  <td className="p-4 text-center text-red-600">✗ Not Available</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-bold">Same-Day Availability</td>
                  <td className="p-4 text-center text-green-600">✓ Often Available</td>
                  <td className="p-4 text-center text-red-600">✗ Limited</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="p-4 font-bold">Hourly Rental Option</td>
                  <td className="p-4 text-center text-green-600">✓ Available</td>
                  <td className="p-4 text-center text-yellow-600">△ 4-hour minimum</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="p-4 font-bold">Local Richmond Knowledge</td>
                  <td className="p-4 text-center text-green-600">✓ Richmond Experts</td>
                  <td className="p-4 text-center text-red-600">✗ Generic</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Maintenance Support</td>
                  <td className="p-4 text-center text-green-600">✓ On-call Support</td>
                  <td className="p-4 text-center text-red-600">✗ Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rental Process */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              HOW OUR <span className="text-yellow-500">LAWN MOWER RENTAL</span> WORKS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, convenient, and hassle-free lawn mower rentals near you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Choose Your Mower</h3>
              <p className="text-gray-600">
                Select from our riding lawn mowers, push mowers, or robot mowers based on your needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Book Online or Call</h3>
              <p className="text-gray-600">
                Reserve your lawn mower rental online or call us for same-day availability.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">We Deliver to You</h3>
              <p className="text-gray-600">
                We'll deliver the lawn mower right to your home in Richmond or surrounding areas.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-lg p-6 shadow-lg relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 mt-4">Return When Done</h3>
              <p className="text-gray-600">
                We'll pick up the mower when you're finished, or you can extend your rental if needed.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-bold px-8 py-6 rounded-md"
            >
              BOOK YOUR LAWN MOWER RENTAL NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Riding Lawn Mower Rental Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-yellow-500 text-black font-bold px-4 py-1 rounded-md mb-4">
                PREMIUM OPTION
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                RIDING LAWN MOWER <span className="text-yellow-500">RENTAL</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Our riding lawn mower rentals are perfect for larger properties or when you need to get the job done
                quickly. We offer several models to choose from, all well-maintained and ready to use.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">Powerful engines</span> - Cut through tall grass with ease
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">Comfortable seating</span> - Reduce fatigue during long mowing sessions
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">Multiple cutting widths</span> - From 42" to 54" to match your needs
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <span className="font-bold">Full tank of gas</span> - Ready to go when delivered
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white text-lg font-bold px-8 py-4 rounded-md"
              >
                RESERVE A RIDING MOWER <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/premium-robot-mower.png"
                alt="Ride lawn mower rental in Richmond"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              LAWN MOWER RENTAL <span className="text-yellow-500">NEAR ME</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer lawn mower rentals throughout Richmond and surrounding areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Richmond Areas */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                Richmond
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• The Fan District</li>
                <li>• Church Hill</li>
                <li>• Ginter Park</li>
                <li>• Woodland Heights</li>
                <li>• Windsor Farms</li>
                <li>• Battery Park</li>
                <li>• Bellevue</li>
                <li>• Museum District</li>
              </ul>
            </div>

            {/* Henrico Areas */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                Henrico
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Glen Allen</li>
                <li>• Short Pump</li>
                <li>• Tuckahoe</li>
                <li>• Lakeside</li>
                <li>• Sandston</li>
                <li>• Highland Springs</li>
                <li>• Varina</li>
                <li>• Innsbrook</li>
              </ul>
            </div>

            {/* Chesterfield Areas */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2" />
                Chesterfield
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Midlothian</li>
                <li>• Chester</li>
                <li>• Bon Air</li>
                <li>• Woodlake</li>
                <li>• Brandermill</li>
                <li>• Moseley</li>
                <li>• Matoaca</li>
                <li>• Chesterfield Court House</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Don't see your area? Call us to check availability.</p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-black text-gray-800 text-lg font-bold px-8 py-4 rounded-md"
            >
              CHECK AVAILABILITY IN YOUR AREA <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              FREQUENTLY ASKED <span className="text-yellow-500">QUESTIONS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Common questions about our lawn mower rental service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">How much does it cost to rent a lawn mower?</h3>
              <p className="text-gray-700">
                Our lawn mower rental prices start at $35/day for push mowers, $75/day for riding lawn mowers, and
                $99/week for robot mowers. We also offer hourly rates and extended rental discounts. Contact us for a
                specific quote based on your needs.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">Do you deliver the lawn mower rental to my home?</h3>
              <p className="text-gray-700">
                Yes! Unlike Home Depot lawn mower rentals, we deliver directly to your home in Richmond and surrounding
                areas. Our delivery service is included in the rental price for locations within 15 miles of downtown
                Richmond. A small fee applies for more distant locations.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">Can I rent a riding lawn mower for just a few hours?</h3>
              <p className="text-gray-700">
                Yes, we offer hourly riding lawn mower rentals with a 4-hour minimum. This is perfect for when you need
                to quickly mow a larger property without committing to a full-day rental. Our hourly rates are
                competitive and include delivery and pickup.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-3">How does your lawn mower rental compare to Home Depot?</h3>
              <p className="text-gray-700">
                Unlike Home Depot lawn mower rental, we offer delivery and pickup service, a wider selection of mowers
                (including robot mowers), flexible rental periods, and local Richmond expertise. Our prices are
                competitive, and we provide personalized service that big box stores can't match.
              </p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What if the lawn mower breaks down during my rental?</h3>
              <p className="text-gray-700">
                In the rare event of equipment failure during your lawn mower rental period, simply call our support
                line. We'll either fix the issue promptly or deliver a replacement mower at no additional cost to ensure
                your lawn care project stays on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">READY TO RENT A LAWN MOWER NEAR YOU?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            Book your lawn mower rental today and get it delivered to your door. Riding mowers, push mowers, and robot
            mowers available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white text-lg font-bold px-8 py-6 rounded-md">
              BOOK ONLINE NOW <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-black bg-transparent hover:bg-black hover:text-white text-black text-lg font-bold px-8 py-6 rounded-md"
            >
              CALL FOR AVAILABILITY <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RentalBusinessService",
            name: "SweatyJob Lawn Mower Rental",
            image: "https://sweatyjob.com/images/robot-mower.jpg",
            description:
              "Lawn mower rental service in Richmond, VA. We offer riding lawn mower rentals, push mowers, and robot mowers with delivery.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Main Street",
              addressLocality: "Richmond",
              addressRegion: "VA",
              postalCode: "23220",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 37.5407,
              longitude: -77.436,
            },
            telephone: "+18045739825",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "09:00",
                closes: "16:00",
              },
            ],
            priceRange: "$$",
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "35",
              highPrice: "99",
              priceCurrency: "USD",
              offerCount: "15",
            },
          }),
        }}
      />
    </main>
  )
}
