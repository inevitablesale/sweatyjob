import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"
import { serviceVerticalsData } from "../service-verticals-data"

export const metadata = {
  title: "Industry Solutions | SweatyJob Partner Program",
  description:
    "Explore how AI mowing technology can benefit your specific service business. Find industry-specific solutions for lawn care, pest control, landscape design, and more.",
  keywords:
    "AI mower partnership, lawn care business, pest control technology, landscape design solutions, irrigation business, tree care services",
}

export default function IndustriesPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-sweat-900 flex items-center justify-center mr-4">
              <Briefcase className="h-6 w-6 text-sweat-300" />
            </div>
            <h1 className="text-4xl font-bold text-white">Industry Solutions</h1>
          </div>
          <p className="text-xl text-white max-w-2xl">
            Select your service vertical to see how AI mowing technology can specifically benefit your business
          </p>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(serviceVerticalsData).map(([slug, data]) => (
            <div
              key={slug}
              className="bg-night-900 rounded-xl overflow-hidden border border-white/10 hover:border-sweat-500/50 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={data.heroImage || `/images/pros/${slug}-pro.jpg`}
                  alt={data.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h2 className="text-xl font-bold text-white group-hover:text-sweat-300 transition-colors">
                    {data.title}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white mb-6 line-clamp-3">{data.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {data.benefits &&
                    data.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="bg-night-800 rounded-full px-3 py-1 text-xs text-white">
                        {benefit.title}
                      </div>
                    ))}
                </div>
                <Button className="w-full bg-sweat-500 hover:bg-sweat-600 text-white">
                  <Link href={`/partners/${slug}`} className="flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-night-800 to-night-900 rounded-2xl p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">Ready to Transform Your Business?</h2>
              <p className="text-white max-w-2xl">
                Join the SweatyJob partner community today and add AI mowing technology to your service offerings.
              </p>
            </div>
            <Button size="lg" className="bg-sweat-600 hover:bg-sweat-700 text-white font-semibold">
              <Link href="/partners#apply" className="flex items-center">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
