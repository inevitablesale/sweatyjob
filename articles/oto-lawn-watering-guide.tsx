import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Droplets, Clock, Sun, CloudRain, ThermometerSun, Smartphone } from "lucide-react"

export default function OtoLawnWateringGuide() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          The Ultimate Guide to Watering Your Lawn During Virginia Summers
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Expert advice on watering schedules, signs of water stress, and smart technology solutions for Richmond lawns.
        </p>
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/images/oto-sprinkler.jpg"
            alt="OtO smart sprinkler system watering a lush green lawn"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2 className="flex items-center text-2xl font-bold mb-4">
          <ThermometerSun className="mr-2 h-6 w-6 text-orange-500" />
          Understanding Richmond's Summer Climate
        </h2>
        <p>
          Richmond, Virginia experiences hot and humid summers with temperatures regularly exceeding 90°F from June
          through August. These conditions create specific challenges for lawn care:
        </p>
        <ul>
          <li>High humidity can mask signs of drought stress</li>
          <li>Afternoon thunderstorms may provide inconsistent rainfall</li>
          <li>Clay-heavy soils common in Richmond neighborhoods can lead to runoff</li>
          <li>Extended dry periods can quickly damage even established lawns</li>
        </ul>

        <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
          <Clock className="mr-2 h-6 w-6 text-blue-500" />
          Optimal Watering Schedule
        </h2>
        <p>
          The best time to water your Richmond lawn is early morning, ideally between 4:00 AM and 8:00 AM. This timing
          offers several advantages:
        </p>
        <ul>
          <li>Reduced evaporation compared to midday watering</li>
          <li>Better absorption before the day's heat</li>
          <li>Decreased risk of fungal diseases compared to evening watering</li>
          <li>Lower water bills due to off-peak usage times</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-3">Recommended Weekly Watering Schedule for Richmond</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-bold">Cool Season Grasses (Fescue, Bluegrass)</h4>
              <ul className="mt-2">
                <li>
                  <span className="font-medium">Spring:</span> 1 inch per week, 2-3 waterings
                </li>
                <li>
                  <span className="font-medium">Summer:</span> 1.5 inches per week, 3 waterings
                </li>
                <li>
                  <span className="font-medium">Fall:</span> 1 inch per week, 1-2 waterings
                </li>
                <li>
                  <span className="font-medium">Winter:</span> As needed during dry spells
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Warm Season Grasses (Bermuda, Zoysia)</h4>
              <ul className="mt-2">
                <li>
                  <span className="font-medium">Spring:</span> 0.75 inch per week, 1-2 waterings
                </li>
                <li>
                  <span className="font-medium">Summer:</span> 1.25 inches per week, 2-3 waterings
                </li>
                <li>
                  <span className="font-medium">Fall:</span> 0.5 inch per week, 1 watering
                </li>
                <li>
                  <span className="font-medium">Winter:</span> Minimal during dormancy
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
          <Sun className="mr-2 h-6 w-6 text-yellow-500" />
          Signs Your Lawn Needs Water
        </h2>
        <p>Learn to recognize these indicators of water stress before permanent damage occurs:</p>
        <ul>
          <li>
            <span className="font-medium">Footprints remain visible</span> - Grass blades lack moisture to spring back
            up
          </li>
          <li>
            <span className="font-medium">Blue-gray color</span> - Grass takes on a dull, grayish hue when drought
            stressed
          </li>
          <li>
            <span className="font-medium">Folded or curled blades</span> - Grass attempts to conserve moisture
          </li>
          <li>
            <span className="font-medium">Soil is dry below surface</span> - Check by inserting a screwdriver; it should
            penetrate easily if soil has moisture
          </li>
        </ul>

        <div className="relative w-full h-[300px] rounded-lg overflow-hidden my-8">
          <Image
            src="/images/oto-sprinkler.jpg"
            alt="OtO smart sprinkler system installed in a residential lawn"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
          <Smartphone className="mr-2 h-6 w-6 text-green-500" />
          Introducing OtO Smart Sprinkler Technology
        </h2>
        <p>
          Traditional irrigation systems waste up to 50% of water through evaporation, runoff, and inefficient watering
          patterns. OtO smart sprinkler technology solves these problems with:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Weather-Adaptive Watering</h3>
            <p>
              OtO connects to local weather forecasts and automatically adjusts watering schedules based on recent
              rainfall, upcoming precipitation, and temperature trends.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Custom Watering Zones</h3>
            <p>
              Create precise zones based on plant types, sun exposure, and soil conditions to deliver exactly the right
              amount of water where it's needed.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Soil Moisture Sensing</h3>
            <p>
              Optional sensors monitor actual soil moisture levels, ensuring watering only occurs when your lawn truly
              needs it, not just on a fixed schedule.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Mobile Control & Insights</h3>
            <p>
              Manage your system from anywhere, receive water usage reports, and get recommendations for optimizing your
              lawn's health.
            </p>
          </div>
        </div>

        <h2 className="flex items-center text-2xl font-bold mt-8 mb-4">
          <CloudRain className="mr-2 h-6 w-6 text-blue-500" />
          Water Conservation Benefits
        </h2>
        <p>
          By implementing OtO smart sprinkler technology in your Richmond home, you can expect significant environmental
          and financial benefits:
        </p>
        <ul>
          <li>Reduce water usage by 30-50% compared to traditional irrigation systems</li>
          <li>Save approximately $280-$420 annually on water bills for the average Richmond lawn</li>
          <li>Decrease runoff that carries fertilizers and pollutants into the James River watershed</li>
          <li>Maintain a healthier, more drought-resistant lawn through proper watering practices</li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <Droplets className="mr-2 h-5 w-5 text-blue-500" />
            Richmond Water Conservation Tip
          </h3>
          <p>
            The City of Richmond offers water conservation rebates for residents who install EPA WaterSense labeled
            irrigation controllers. OtO smart sprinkler systems qualify for these rebates, potentially saving you up to
            $100 on installation.
          </p>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Ready to Upgrade Your Lawn Irrigation?</h2>
        <p className="mb-6">
          SweatyJob offers professional installation of OtO smart sprinkler systems throughout Richmond neighborhoods.
          Our lawn care experts will design a custom solution for your specific property needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">Explore All Services</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
