import { Button } from "@/components/ui/button"
import { Linkedin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-800 mb-6">About Sweaty Job</h1>
          <div className="space-y-4 text-lg">
            <p>
              After 15 years in tech startups, I've launched SweatyJob to bring luxury lawn care technology to Richmond
              homeowners at an affordable price.
            </p>
            <p>
              I believe everyone deserves a perfect lawn without the hassle. That's why I've created a simple $30/week
              subscription—the same price you're likely paying for inconsistent traditional service.
            </p>
            <p>
              My vision is to transform how Richmond homeowners think about lawn care and home services. By combining
              AI-driven technology with personal service, I deliver consistently perfect results that traditional
              services simply can't match.
            </p>
            <p>
              SweatyJob is more than a lawn membership—it's the beginning of a smarter home. As I continue to expand
              into other AI and robotic home solutions, every subscription helps fund new innovations backed by real
              people who show up.
            </p>
          </div>
          <div className="mt-8">
            <Button size="lg" className="mt-4 bg-sweat-500 hover:bg-sweat-600 text-white" asChild>
              <Link href="https://www.linkedin.com/in/christabb/">
                <Linkedin className="mr-2 h-5 w-5" /> Connect with me on LinkedIn
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <img
            src="/images/chris-profile.png"
            alt="Chris from Sweaty Job"
            className="object-contain w-full h-full bg-white"
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              description:
                "Bringing cutting-edge AI technology to traditional lawn care, delivering luxury results at accessible prices.",
            },
            {
              title: "Reliability",
              description: "Consistently perfect lawns with no scheduling hassles. Cancel anytime with no commitment.",
            },
            {
              title: "Sustainability",
              description:
                "Zero-emission robotic mowers and eco-friendly practices that are better for your lawn and the environment.",
            },
          ].map((value, index) => (
            <div key={index} className="bg-green-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold text-green-800 mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-green-800 text-white p-8 md:p-12 rounded-lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Stop Mowing. Start Living.</h2>
          <p className="text-lg mb-8">
            My tech background has taught me that the best innovations are those that solve real problems. Our robotic
            mower subscription does exactly that—delivering a luxury lawn care experience at the same price as
            traditional services, while giving you back your weekends and eliminating the hassle of coordinating lawn
            care.
          </p>
          <Button variant="outline" className="bg-white text-green-800 hover:bg-green-100" size="lg" asChild>
            <Link href="https://www.linkedin.com/in/christabb/">
              <Linkedin className="mr-2 h-5 w-5" /> Connect with me on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
