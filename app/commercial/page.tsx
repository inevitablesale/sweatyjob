import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import {
  Building2,
  Briefcase,
  School,
  Hotel,
  Leaf,
  DollarSign,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Calendar,
  BarChart,
  Navigation,
  CloudRain,
  X,
} from "lucide-react"

export const metadata = {
  title: "Commercial Autonomous Property Solutions | SweatyJob",
  description:
    "Professional autonomous property management using advanced robotic mowers and drone monitoring. More reliable, efficient, and cost-effective than traditional methods.",
}

export default function CommercialPage() {
  return (
    <div className="bg-slate-900 pt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Hero Section */}
        <section className="relative rounded-xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10"></div>
          <Image
            src="https://cdn.prod.website-files.com/61df5f3879349643389996a0/66ba52ed3a02edbcf605107f_company-hero-min.avif"
            alt="Autonomous Commercial Property Solutions"
            width={1200}
            height={600}
            className="object-cover w-full h-[400px] md:h-[500px]"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-8 md:p-12 max-w-3xl">
            <Badge className="mb-4 bg-green-500 text-black w-fit">Smart Automation Solutions</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Autonomous Property <span className="text-green-400">Management Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              Replace unreliable manual services with our advanced autonomous systems. Consistent results, predictable
              pricing, and comprehensive property monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PhoneCaptureForm
                source="commercial-hero"
                buttonText="Get a Quote"
                className="w-full"
                showThankYou={true}
              />
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black" asChild>
                <a href="#solutions">View Solutions</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Video Showcase */}
        <section className="mb-16">
          <div className="rounded-xl overflow-hidden">
            <video className="w-full" autoPlay muted loop playsInline controls>
              <source
                src="https://cdn.prod.website-files.com/61df5f3879349643389996a0%2F666af4a789bc4455a763a314_Graze3%20-%20HD%201080p-transcode.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center">
            Tired of Unreliable Manual Services?
          </h2>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            Traditional property management services come with endless headaches. Our autonomous solutions eliminate
            these problems forever.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-xl text-red-400">Traditional Property Management Problems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                    <span>Service providers show up late or miss appointments entirely</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                    <span>Quality varies depending on which crew shows up</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                    <span>Constant turnover means retraining and inconsistent results</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                    <span>Noise complaints from tenants and neighbors</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                    <span>Rising labor costs and unpredictable pricing</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                    <span>Limited monitoring capabilities and slow response times</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-xl text-green-400">Our Autonomous Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Consistent, scheduled operations that never call in sick</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Uniform, professional results every single time</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>No human error or performance variations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Ultra-quiet operation that won&apos;t disturb anyone</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Fixed monthly pricing with no surprise costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Comprehensive monitoring and rapid response capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Service Benefits */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Why Property Managers Choose Our Autonomous Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <Calendar className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle>Consistent Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our autonomous systems operate on a precise schedule, regardless of weather, holidays, or labor
                  shortages. Your property always looks its best, with no excuses or missed appointments.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 2 */}
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <DollarSign className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle>Predictable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Fixed monthly service plans with no surprise costs or labor surcharges. Budget with confidence knowing
                  exactly what you&apos;ll pay, regardless of fuel prices or labor market fluctuations.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 3 */}
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <BarChart className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle>Superior Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our autonomous systems deliver consistent, high-quality results. Precision operations enhance your
                  property&apos;s professional appearance and security.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 4 */}
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <ShieldCheck className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle>Enhanced Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Advanced safety systems with obstacle detection, automated shutdown, and 24/7 monitoring. Eliminate
                  workplace injuries and liability concerns associated with traditional crews.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 5 */}
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <Leaf className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle>Sustainability Leader</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Zero emissions, no fuel spills, and reduced resource usage. Meet your ESG goals and promote your
                  property&apos;s environmental commitment with our 100% electric autonomous solutions.
                </p>
              </CardContent>
            </Card>

            {/* Benefit 6 */}
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader className="pb-2">
                <Zap className="h-8 w-8 text-green-400 mb-2" />
                <CardTitle>Modern Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Impress tenants and visitors with cutting-edge autonomous technology maintaining your grounds.
                  Position your property as forward-thinking and technologically advanced.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Solutions Section */}
        <section id="solutions" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Our Autonomous Property Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Autonomous Mowing */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://cdn.prod.website-files.com/61df5f3879349643389996a0/67fc513d09092e08030745d5_mower_render-min%201.avif"
                  alt="Autonomous Robotic Mower"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Autonomous Mowing</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">
                  Our autonomous mowing solution replaces traditional landscaping crews with advanced robotic
                  technology. Enjoy consistent, precise lawn care without the headaches of managing human crews.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Precision cutting patterns for professional appearance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Ultra-quiet operation for residential areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Advanced safety features and obstacle detection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Remote monitoring and management</span>
                  </li>
                </ul>
                <PhoneCaptureForm
                  source="commercial-mowing"
                  buttonText="Learn More"
                  className="w-full"
                  showThankYou={true}
                />
              </div>
            </div>

            {/* Autonomous Monitoring */}
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://sunflower-labs.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fe8l9f4wo%2Fproduction%2Fdf99e8ece7b1fb975347357833cb9fca6f4abb6a-3891x2937.jpg&w=3840&q=75"
                  alt="Autonomous Drone Monitoring System"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">Autonomous Monitoring</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">
                  Our autonomous drone monitoring system provides comprehensive property surveillance, security patrols,
                  and rapid response capabilities through advanced aerial technology.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Rapid deployment to any point on your property</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>High-quality video streaming with object tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Proactive security with immediate aerial presence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>All-weather operation capabilities</span>
                  </li>
                </ul>
                <PhoneCaptureForm
                  source="commercial-monitoring"
                  buttonText="Learn More"
                  className="w-full"
                  showThankYou={true}
                />
              </div>
            </div>
          </div>

          {/* Autonomous Drone System Details */}
          <div className="mb-16 bg-gradient-to-b from-slate-900 to-slate-800 py-16 rounded-xl">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-yellow-500 text-black">Authorized Reseller in Virginia</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Advanced Autonomous Drone Monitoring</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Fully-autonomous drone-in-a-box security solution for HOAs, data centers, and large commercial
                  properties
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-slate-700 border-slate-600 text-white">
                  <CardHeader className="pb-2">
                    <Navigation className="h-8 w-8 text-yellow-400 mb-2" />
                    <CardTitle>Autonomous Navigation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      The drone automatically plans a path, performs a sweep, avoids obstacles, and returns to base.
                      Real-time obstacle avoidance technology ensures safe operation in complex environments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-700 border-slate-600 text-white">
                  <CardHeader className="pb-2">
                    <CloudRain className="h-8 w-8 text-yellow-400 mb-2" />
                    <CardTitle>All-Weather Operation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      Whether it&apos;s sun, snow, wind, or rain, the drone system can operate in almost all weather
                      conditions. Wind resistance up to 20 mph with gust resistance up to 30 mph.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-slate-700 border-slate-600 text-white">
                  <CardHeader className="pb-2">
                    <Zap className="h-8 w-8 text-yellow-400 mb-2" />
                    <CardTitle>Reliable Charging</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">
                      The drone is uniquely designed to reliably and safely land and recharge in its base station each
                      time — even in strong winds. Quick recharge ratio of 1:1.5 flight time to recharge.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-white mb-4">Key System Components</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">The Drone</h4>
                      <p className="text-sm text-gray-300">
                        Lightweight aerial vehicle with sophisticated technology for autonomous flight, high-quality
                        video capture and accurate landing and charging.
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">The Base Station</h4>
                      <p className="text-sm text-gray-300">
                        Houses and charges the drone while processing and analyzing sensor data using state-of-the-art
                        embedded AI computing.
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">Control Software</h4>
                      <p className="text-sm text-gray-300">
                        Advanced software for mission planning, monitoring, and data analysis with intuitive user
                        interface.
                      </p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg">
                      <h4 className="font-semibold text-white mb-2">AI Analytics</h4>
                      <p className="text-sm text-gray-300">
                        Intelligent object detection and tracking with automated alerts and response protocols.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-slate-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Technical Specifications</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-semibold text-yellow-400">Drone</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>Weight: 3.4 lb (battery included)</li>
                          <li>Cruise Speed: 10 mph</li>
                          <li>Flight Time: 15 minutes</li>
                          <li>Wind Resistance: 20 mph</li>
                          <li>Gust Resistance: 30 mph</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-yellow-400">Camera System</h4>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>Low-light sensor (0.1+ lux)</li>
                          <li>FOV: 50° (v), 100° (h)</li>
                          <li>Resolution: 1920 x 1080 HD @ 25fps</li>
                          <li>Video Latency: ~250 ms</li>
                          <li>Obstacle Detection: 20 feet</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-700 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">
                  Autonomous Monitoring vs. Traditional Security
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-yellow-400 mb-4">Autonomous Drone System</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>Covers 3 miles in 15 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>Response time under 30 seconds</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>Installation time of just 4 hours</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>Aerial perspective for comprehensive coverage</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                        <span>24/7 operation without fatigue</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-red-400 mb-4">Traditional Security</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                        <span>Covers only 1/2 mile by foot in 15 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                        <span>Response time more than 5 minutes</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                        <span>Installation takes several days to weeks</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                        <span>Limited ground-level visibility</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-400 mr-2 flex-shrink-0" />
                        <span>Subject to human limitations and fatigue</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How Our Service Works */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              How Our Autonomous Solutions Work
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Initial Assessment</h3>
                <p className="text-gray-300">
                  We evaluate your property, create a digital map, and develop a custom automation plan tailored to your
                  specific needs.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">System Deployment</h3>
                <p className="text-gray-300">
                  We install and configure our autonomous systems on your property, setting up secure charging stations
                  and operational boundaries.
                </p>
              </div>

              <div className="bg-slate-800 p-6 rounded-lg text-center">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Ongoing Management</h3>
                <p className="text-gray-300">
                  Our team monitors performance remotely, performs regular maintenance, and handles seasonal adjustments
                  for optimal results.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-slate-800 p-8 rounded-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <Image
                    src="https://cdn.prod.website-files.com/61df5f3879349643389996a0/67fc513d09092e08030745d5_mower_render-min%201.avif"
                    alt="Autonomous Property Management"
                    width={600}
                    height={400}
                    className="rounded-lg object-contain bg-white p-4"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-white mb-4">Advanced Technology, Human Oversight</h3>
                  <p className="text-gray-300 mb-6">
                    Our service combines cutting-edge autonomous technology with professional human management. We
                    handle all maintenance, monitoring, and troubleshooting, so you get the benefits of automation
                    without any of the technical headaches.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>24/7 remote monitoring and diagnostics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Regular maintenance by certified technicians</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Automatic weather adaptation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Detailed performance reporting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Industries We Serve</h2>

          <Tabs defaultValue="property" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="property">Property Management</TabsTrigger>
              <TabsTrigger value="corporate">Corporate Campuses</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="hospitality">Hospitality</TabsTrigger>
            </TabsList>

            <TabsContent value="property" className="bg-slate-800 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <Building2 className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Property Management Solutions</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Replace unreliable contractors with our consistent, professional autonomous systems. Eliminate
                    tenant complaints about missed services or early morning noise.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Consistent maintenance across all properties</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Reduced tenant complaints about property care</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>No more chasing down unreliable contractors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Simplified billing across multiple properties</span>
                    </li>
                  </ul>
                  <PhoneCaptureForm
                    source="commercial-property"
                    buttonText="Get a Quote"
                    className="w-full md:w-auto"
                    showThankYou={true}
                  />
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="https://cdn.prod.website-files.com/61df5f3879349643389996a0/66ba52ed3a02edbcf605107f_company-hero-min.avif"
                    alt="Property Management"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="corporate" className="bg-slate-800 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <Briefcase className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Corporate Campus Solutions</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Maintain impeccable corporate grounds without the disruption of traditional crews. Our silent
                    autonomous systems can operate during business hours without disturbing employees.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Silent operation during business hours</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Precision maintenance enhances corporate image</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Support corporate sustainability initiatives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Impress clients with cutting-edge technology</span>
                    </li>
                  </ul>
                  <PhoneCaptureForm
                    source="commercial-corporate"
                    buttonText="Get a Quote"
                    className="w-full md:w-auto"
                    showThankYou={true}
                  />
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="https://cdn.prod.website-files.com/61df5f3879349643389996a0/67fc513d09092e08030745d5_mower_render-min%201.avif"
                    alt="Corporate Campus"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="bg-slate-800 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <School className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Education Facility Solutions</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Keep school and university grounds pristine without disrupting classes or campus activities. Our
                    autonomous systems operate safely around students and staff with advanced safety features.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Safe operation around students and faculty</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Athletic field maintenance programs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Budget-friendly alternative to maintenance staff</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Educational opportunities for students</span>
                    </li>
                  </ul>
                  <PhoneCaptureForm
                    source="commercial-education"
                    buttonText="Get a Quote"
                    className="w-full md:w-auto"
                    showThankYou={true}
                  />
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="https://cdn.prod.website-files.com/61df5f3879349643389996a0/66ba52ed3a02edbcf605107f_company-hero-min.avif"
                    alt="Education Facilities"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hospitality" className="bg-slate-800 p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="flex items-center mb-4">
                    <Hotel className="h-6 w-6 text-green-400 mr-2" />
                    <h3 className="text-xl font-bold text-white">Hospitality Industry Solutions</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Maintain resort-quality grounds without disturbing guests. Our ultra-quiet autonomous systems can
                    operate day or night, ensuring your property always looks its best for guests.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Ultra-quiet operation for guest comfort</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Scheduling around events and peak times</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Perfect grounds for outdoor events and weddings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>Enhanced sustainability credentials</span>
                    </li>
                  </ul>
                  <PhoneCaptureForm
                    source="commercial-hospitality"
                    buttonText="Get a Quote"
                    className="w-full md:w-auto"
                    showThankYou={true}
                  />
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="https://cdn.prod.website-files.com/61df5f3879349643389996a0/67fc513d09092e08030745d5_mower_render-min%201.avif"
                    alt="Hospitality Industry"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Commercial Mowing Service Plans */}
        <section id="pricing" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Commercial Mowing Service Plans
          </h2>
          <p className="text-lg text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            Our autonomous mowing service plans are designed to meet the needs of various commercial properties. All
            plans include equipment, maintenance, and monitoring.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle>Small Properties</CardTitle>
                <CardDescription className="text-gray-300">For properties up to 2 acres</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white">$499</span>
                  <span className="text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Weekly professional mowing service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>All equipment and maintenance included</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Remote monitoring and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Monthly performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Standard cutting patterns</span>
                  </li>
                </ul>
                <PhoneCaptureForm
                  source="commercial-small"
                  buttonText="Get a Quote"
                  className="w-full"
                  showThankYou={true}
                />
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white relative">
              <div className="absolute top-0 right-0 bg-green-500 text-black font-medium py-1 px-3 rounded-bl-lg rounded-tr-lg">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle>Medium Properties</CardTitle>
                <CardDescription className="text-gray-300">For properties 2-5 acres</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white">$899</span>
                  <span className="text-gray-300">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Twice weekly mowing service</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Priority maintenance and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Bi-weekly maintenance checks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Custom cutting patterns available</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Weekly performance reports</span>
                  </li>
                </ul>
                <PhoneCaptureForm
                  source="commercial-medium"
                  buttonText="Get a Quote"
                  className="w-full"
                  showThankYou={true}
                />
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle>Large Properties</CardTitle>
                <CardDescription className="text-gray-300">For properties 5+ acres</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-white">Custom</span>
                  <span className="text-gray-300 ml-2">Pricing</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Custom mowing schedule</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Multiple mowing units as needed</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Enterprise reporting dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                    <span>Seasonal service adjustments</span>
                  </li>
                </ul>
                <PhoneCaptureForm
                  source="commercial-large"
                  buttonText="Get a Quote"
                  className="w-full"
                  showThankYou={true}
                />
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Additional Services Available</h3>
            <p className="text-gray-300 text-center mb-6">
              Enhance your autonomous mowing service with these optional add-ons:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Autonomous Monitoring</h4>
                <p className="text-sm text-gray-300">
                  Add drone surveillance and security monitoring to your property maintenance package.
                </p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Seasonal Landscaping</h4>
                <p className="text-sm text-gray-300">
                  Scheduled seasonal services including mulching, pruning, and leaf removal.
                </p>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">Snow Removal</h4>
                <p className="text-sm text-gray-300">
                  Autonomous snow clearing for parking lots and walkways during winter months.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-lg">How do autonomous solutions compare to traditional services?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our autonomous property solutions eliminate the reliability issues, quality inconsistencies, and
                  scheduling headaches of traditional crews. We provide consistent, predictable service with fixed
                  pricing and superior results. Our systems operate quietly, efficiently, and can work in almost any
                  weather condition.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-lg">Are your autonomous systems safe to operate around people?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Absolutely. Our commercial autonomous systems feature advanced safety features including obstacle
                  detection, lift sensors, and emergency stop capabilities. They operate at safe speeds and maintain
                  safe distances from people and animals. We also provide 24/7 monitoring and can remotely disable any
                  system if a safety concern arises.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-lg">What happens if a system breaks down or needs maintenance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our service includes all maintenance and repairs. If a system requires service, our team is
                  automatically notified and will dispatch a technician to address the issue promptly. In most cases, we
                  can deploy a replacement to ensure continuous service while repairs are being made. You&apos;ll never
                  have to worry about equipment maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700 text-white">
              <CardHeader>
                <CardTitle className="text-lg">What is the contract length for your service?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  We offer flexible contract options ranging from 12 to 36 months. Longer contracts provide more
                  favorable pricing. All contracts include equipment, maintenance, monitoring, and support. We also
                  offer seasonal adjustments for properties with varying needs throughout the year. Contact our sales
                  team for custom contract options.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="mb-16 bg-slate-800 p-8 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Ready to Upgrade Your Commercial Property Management?
            </h2>
            <p className="text-lg text-gray-300 mb-8 text-center">
              Fill out the form below to schedule a consultation with our commercial solutions team.
            </p>

            <PhoneCaptureForm
              source="commercial-main"
              buttonText="Get a Quote"
              className="max-w-md mx-auto"
              dark={true}
              showThankYou={true}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
