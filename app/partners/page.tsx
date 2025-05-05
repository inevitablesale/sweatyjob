import { ArrowRight, CheckCircle, DollarSign, Zap, Shield, TrendingUp, Star, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "PARTNER WITH SWEATYJOB | THE $100K OPPORTUNITY YOU'RE SLEEPING ON",
  description:
    "WAKE UP! The AI lawn mowing revolution is happening NOW. Zero inventory. Massive recurring revenue. $250 setup fees. Limited spots available in each market.",
  keywords:
    "Gary Vaynerchuk, Gary V, passive income, recurring revenue, lawn care business, AI mowing, robot mowers, business opportunity",
}

export default function PartnersPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-[url('/gary-v-style-hero.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-500 text-black text-sm font-bold mb-6 animate-pulse">
                <Zap className="w-4 h-4 mr-2" />
                LISTEN UP - THIS IS URGENT
              </div>

              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
                WAKE UP TO THIS <span className="text-yellow-500">$100K+</span> OPPORTUNITY
              </h1>

              <p className="text-xl text-gray-300 mb-8 font-medium">
                I'm not here to waste your time with BS. This is the EASIEST money you'll ever make in the service
                industry. ZERO inventory. ZERO risk. PURE profit. And your competitors are ALREADY doing it.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/partners/form"
                  className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 transition-colors flex items-center text-lg"
                >
                  I WANT IN NOW <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="#how-it-works"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors text-lg"
                >
                  SHOW ME THE MONEY
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-8">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-yellow-500">$69+</span>
                  <span className="text-white text-sm font-medium">MONTHLY PROFIT</span>
                  <span className="text-white text-xs">PER CUSTOMER</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-yellow-500">$250</span>
                  <span className="text-white text-sm font-medium">SETUP FEE</span>
                  <span className="text-white text-xs">PER CUSTOMER</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-yellow-500">$0</span>
                  <span className="text-white text-sm font-medium">INVENTORY COST</span>
                  <span className="text-white text-xs">ZERO RISK</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-yellow-500 rounded-xl blur-sm"></div>
                <div className="relative bg-black rounded-xl overflow-hidden border-2 border-yellow-500">
                  <div className="aspect-video relative">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/robotic-lawncare-pro-3pBg1fbUSg95Ojj3YCjMfmm2yU0yjb.png"
                      alt="Service professional with AI mower"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <p className="text-white font-medium">LIVE OPPORTUNITY - SPOTS FILLING FAST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gary V Quote Section */}
      <section className="py-10 bg-yellow-500 text-black">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold">
              "STOP WASTING TIME WITH EXCUSES. EXECUTION IS THE ONLY THING THAT MATTERS."
            </div>
          </div>
        </div>
      </section>

      {/* The Math Section */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              THE <span className="text-yellow-500">MATH</span> DOESN'T LIE
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm going to break this down for you in the simplest way possible. This is a NO-BRAINER.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold mb-6 text-white">MONTHLY RECURRING REVENUE</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-300">Your price to customer:</span>
                  <span className="text-white font-bold text-xl">$149/month</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-300">Your cost:</span>
                  <span className="text-white font-bold text-xl">$79.99/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">YOUR PROFIT:</span>
                  <span className="text-yellow-500 font-bold text-2xl">$69.01/month</span>
                </div>
                <div className="pt-4">
                  <p className="text-gray-400 text-sm">
                    That's <span className="text-yellow-500 font-bold">$828.12 PURE PROFIT</span> per customer per year.
                    For doing NOTHING after the initial setup.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 border-l-4 border-yellow-500">
              <h3 className="text-2xl font-bold mb-6 text-white">ONE-TIME SETUP FEE</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-300">Your setup fee to customer:</span>
                  <span className="text-white font-bold text-xl">$250</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                  <span className="text-gray-300">Your cost:</span>
                  <span className="text-white font-bold text-xl">$0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">YOUR PROFIT:</span>
                  <span className="text-yellow-500 font-bold text-2xl">$250</span>
                </div>
                <div className="pt-4">
                  <p className="text-gray-400 text-sm">
                    Most customers WANT you to handle the setup. It's complicated, and they'll gladly pay for your
                    expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 p-8 bg-gray-900 rounded-xl border-2 border-yellow-500 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-center text-white">DO THE MATH RIGHT NOW</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-black p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-white">WITH JUST 10 CUSTOMERS</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly recurring:</span>
                      <span className="text-white font-bold">$690</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Annual recurring:</span>
                      <span className="text-white font-bold">$8,280</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">One-time setup fees:</span>
                      <span className="text-white font-bold">$2,500</span>
                    </div>
                    <div className="h-px bg-gray-800 my-2"></div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-bold">FIRST YEAR TOTAL:</span>
                      <span className="text-yellow-500 font-bold">$10,780</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-black p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-4 text-white">WITH 50 CUSTOMERS</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Monthly recurring:</span>
                      <span className="text-white font-bold">$3,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Annual recurring:</span>
                      <span className="text-white font-bold">$41,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">One-time setup fees:</span>
                      <span className="text-white font-bold">$12,500</span>
                    </div>
                    <div className="h-px bg-gray-800 my-2"></div>
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-bold">FIRST YEAR TOTAL:</span>
                      <span className="text-yellow-500 font-bold">$53,900</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-black p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-white text-center">WITH 100 CUSTOMERS</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500 mb-1">$6,900</div>
                  <div className="text-gray-400 text-sm">MONTHLY REVENUE</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500 mb-1">$82,800</div>
                  <div className="text-gray-400 text-sm">ANNUAL RECURRING</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-500 mb-1">$25,000</div>
                  <div className="text-gray-400 text-sm">SETUP FEES</div>
                </div>
              </div>
              <div className="h-px bg-gray-800 my-4"></div>
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-500 mb-2">$107,800</div>
                <div className="text-white font-bold">FIRST YEAR TOTAL REVENUE</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/partners/form"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 transition-colors text-lg"
              >
                I'M READY TO MAKE MONEY <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gary V Mindset Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/gary-v-style-hero.png"
                    alt="Gary V Style Entrepreneur"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-3xl font-extrabold mb-4 text-white">
                  THE <span className="text-yellow-500">MINDSET</span> YOU NEED
                </h2>
                <div className="space-y-4">
                  <div className="bg-black p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-gray-300 italic">
                      "99% of people are looking for what's wrong instead of looking for what's right."
                    </p>
                  </div>
                  <div className="bg-black p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-gray-300 italic">
                      "Stop focusing on dumb sh*t. Don't be afraid to fail. Don't be afraid to make decisions."
                    </p>
                  </div>
                  <div className="bg-black p-4 rounded-lg border-l-4 border-yellow-500">
                    <p className="text-gray-300 italic">
                      "Look yourself in the mirror and ask yourself, what do I want to do every day for the rest of my
                      life…do that."
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-gray-300">
                  This opportunity is for entrepreneurs who see what's possible, not what could go wrong. The ones who
                  take action while others sit on the sidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              HOW TO <span className="text-yellow-500">CRUSH IT</span> WITH THIS OPPORTUNITY
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Four simple steps to building a six-figure passive income stream.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gray-900 rounded-lg p-6 border-t-4 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-black">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">SIGN UP AS A PARTNER</h3>
              <p className="text-gray-300">
                Zero upfront costs. No inventory to buy. Just fill out the form and you're in business.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border-t-4 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-black">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">SELL TO YOUR CUSTOMERS</h3>
              <p className="text-gray-300">
                We provide all the sales materials. Your customers already trust you - this is an easy sell.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border-t-4 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-black">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">WE HANDLE FULFILLMENT</h3>
              <p className="text-gray-300">
                We ship directly to your customers. You handle the setup (or we can if needed). Collect your $250 fee.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 border-t-4 border-yellow-500 transform transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mb-4 text-black">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">COLLECT RECURRING REVENUE</h3>
              <p className="text-gray-300">
                $69+ per customer, every month. We handle support, warranty, and maintenance. You just cash the checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 bg-yellow-500 text-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">YOUR MARKET IS BEING CLAIMED RIGHT NOW</h2>
              <p className="text-xl font-medium">
                We're limiting partners in each market to ensure everyone makes SERIOUS money. Once your territory is
                taken, it's GONE FOREVER.
              </p>
            </div>
            <div className="md:w-1/3">
              <Link
                href="/partners/markets"
                className="block w-full py-4 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-colors text-center text-lg"
              >
                CHECK YOUR MARKET AVAILABILITY
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              WHY THIS IS A <span className="text-yellow-500">NO-BRAINER</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I don't push opportunities unless they're LEGIT. This is the real deal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-lg p-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">DOUBLE REVENUE STREAMS</h3>
              <p className="text-gray-300 mb-6">
                $250 upfront setup fee PLUS $69+ monthly recurring revenue per customer. The best of both worlds.
              </p>
              <ul className="space-y-3">
                {[
                  "Immediate cash flow from setup fees",
                  "Long-term passive income monthly",
                  "92% customer retention rate",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">ZERO RISK</h3>
              <p className="text-gray-300 mb-6">
                No inventory costs. No upfront investment. No financial risk. Just pure profit.
              </p>
              <ul className="space-y-3">
                {[
                  "No inventory to purchase",
                  "We handle shipping and logistics",
                  "We provide all warranty support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-900 rounded-lg p-8 transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)]">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">MASSIVE MARKET GROWTH</h3>
              <p className="text-gray-300 mb-6">
                The AI mowing market is projected to grow 247% by 2028. Early adopters win BIG.
              </p>
              <ul className="space-y-3">
                {["Get in before your competitors", "Secure your territory now", "Ride the AI revolution wave"].map(
                  (item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FOMO Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black p-8 rounded-xl border-2 border-yellow-500">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/4">
                <div className="w-24 h-24 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="h-12 w-12 text-yellow-500" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-4 text-white">THE CLOCK IS TICKING</h3>
                <p className="text-gray-300 mb-6">
                  Every day you wait is costing you money. If you have 50 potential customers, that's $3,450 in monthly
                  revenue you're missing out on. EVERY. SINGLE. MONTH.
                </p>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-500">30</div>
                      <div className="text-gray-400 text-xs">DAYS DELAY</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-500">=</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-500">$3,450</div>
                      <div className="text-gray-400 text-xs">LOST REVENUE</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/partners/form"
                    className="block w-full py-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 transition-colors text-center text-lg"
                  >
                    STOP LOSING MONEY - START NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              WORKS FOR <span className="text-yellow-500">ANY</span> SERVICE BUSINESS
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No matter what service you provide, this is an easy add-on that makes you money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "LAWN CARE PROS",
                description: "The perfect complement to your existing lawn services. Upsell your entire customer base.",
                image: "/images/pros/lawn-care-pro.jpg",
                link: "/partners/lawn-care",
                stats: "AVG. CONVERSION: 35%",
              },
              {
                title: "PEST CONTROL PROS",
                description: "Your customers already trust you with their yards. This is the easiest upsell ever.",
                image: "/images/pros/pest-control-pro.jpg",
                link: "/partners/pest-control",
                stats: "AVG. CONVERSION: 28%",
              },
              {
                title: "LANDSCAPE DESIGNERS",
                description: "Turn one-time landscape projects into ongoing monthly revenue with AI mowing.",
                image: "/images/pros/landscape-design-pro.jpg",
                link: "/partners/landscape-design",
                stats: "AVG. CONVERSION: 32%",
              },
            ].map((industry, i) => (
              <Link href={industry.link} key={i} className="group">
                <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800 transition-all group-hover:border-yellow-500">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2">
                      <div className="inline-block bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">
                        {industry.stats}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-500">{industry.title}</h3>
                    <p className="text-gray-300 mb-4">{industry.description}</p>
                    <div className="text-yellow-500 font-bold flex items-center">
                      SEE DETAILS <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/partners/industries"
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 transition-colors text-lg"
            >
              SEE ALL INDUSTRIES <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              PARTNERS ARE <span className="text-yellow-500">CRUSHING IT</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't take my word for it. Here's what our partners are saying.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I signed up 15 customers in my first month. That's $1,035 in monthly recurring revenue PLUS $3,750 in setup fees. This is a game-changer for my business.",
                name: "Mike T.",
                business: "Lawn Care Pro",
                location: "Charlotte, NC",
              },
              {
                quote:
                  "My customers were asking for this before I even offered it. I've added $2,760/month in recurring revenue with zero extra work. The $250 setup fee is pure profit too.",
                name: "Sarah K.",
                business: "Pest Control Owner",
                location: "Austin, TX",
              },
              {
                quote:
                  "I was skeptical at first, but this has been the easiest money I've ever made. 28 customers in 2 months. Do the math - that's insane passive income.",
                name: "David R.",
                business: "Landscape Designer",
                location: "Phoenix, AZ",
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-black rounded-lg p-8 border border-gray-800">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">
                    {testimonial.business}, {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 text-white">
              COMMON <span className="text-yellow-500">QUESTIONS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let me address the questions I know you're thinking about.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Do I need to buy inventory?",
                answer:
                  "ABSOLUTELY NOT. We handle all inventory, shipping, and logistics. You sell, we fulfill. Zero inventory risk to you.",
              },
              {
                question: "How much can I really make?",
                answer:
                  "You make $69+ per customer per month PLUS a $250 setup fee per customer. 20 customers = $1,380/month recurring + $5,000 in setup fees. The math is simple.",
              },
              {
                question: "What if a customer has issues?",
                answer:
                  "We handle ALL customer support, technical issues, and warranty claims. You just collect the recurring revenue.",
              },
              {
                question: "Is my market still available?",
                answer:
                  "We're limiting partners in each market to ensure everyone makes serious money. Check availability now before your market is taken.",
              },
              {
                question: "What's included in the setup fee?",
                answer:
                  "The $250 setup fee covers installation, boundary wire setup, programming, and customer training. Most customers prefer to pay this fee for professional installation rather than doing it themselves.",
              },
              {
                question: "How quickly can I start making money?",
                answer:
                  "Partners typically sign their first customer within 24-48 hours. We provide all the sales materials you need to start immediately.",
              },
              {
                question: "What's the catch?",
                answer:
                  "No catch. We make money when you make money. We handle the hard parts (tech, support, shipping) and you handle the easy part (selling to your existing customers).",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <h3 className="text-xl font-bold mb-3 text-yellow-500">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-500 text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">STOP LEAVING MONEY ON THE TABLE</h2>
              <p className="text-xl md:text-2xl font-bold mb-8">
                Your competitors are already doing this. Are you going to let them take YOUR customers?
              </p>
            </div>

            <div className="bg-black text-white p-8 rounded-xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">THE OPPORTUNITY IS NOW</h3>
                  <ul className="space-y-3">
                    {[
                      "Limited partners per market",
                      "$250 setup fee per customer",
                      "$69+ profit per customer monthly",
                      "We handle all the hard work",
                      "Start making money immediately",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="bg-gray-900 p-6 rounded-lg border border-yellow-500">
                    <h4 className="text-xl font-bold mb-4 text-center">BECOME A PARTNER TODAY</h4>
                    <Link
                      href="/partners/form"
                      className="block w-full py-4 bg-yellow-500 text-black font-bold rounded-md hover:bg-yellow-400 transition-colors text-center text-lg mb-4"
                    >
                      START MAKING MONEY NOW
                    </Link>
                    <Link
                      href="/partners/markets"
                      className="block w-full py-4 bg-transparent border border-yellow-500 text-yellow-500 font-bold rounded-md hover:bg-yellow-500/20 transition-colors text-center text-lg"
                    >
                      CHECK YOUR MARKET AVAILABILITY
                    </Link>
                    <p className="text-gray-400 text-sm text-center mt-4">
                      Limited spots available in each market. Don't miss out.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-bold">STILL ON THE FENCE? YOU'RE LOSING MONEY EVERY DAY YOU WAIT.</p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/partners/form"
                  className="inline-flex items-center px-8 py-4 bg-black text-white font-bold rounded-md hover:bg-gray-800 transition-colors text-lg"
                >
                  GET STARTED NOW <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/partners/form"
          className="flex items-center justify-center w-16 h-16 bg-yellow-500 text-black rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
        >
          <ArrowRight className="h-8 w-8" />
        </Link>
      </div>
    </main>
  )
}
