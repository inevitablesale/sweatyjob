import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ContentPillar {
  title: string
  description: string
  href: string
  topics: {
    title: string
    href: string
  }[]
}

const contentPillars: ContentPillar[] = [
  {
    title: "Robot Lawn Mowing",
    description: "Everything you need to know about robot lawn mowers and how they work.",
    href: "/robot-mowers",
    topics: [
      { title: "How Robot Mowers Work", href: "/robot-mowers/how-they-work" },
      { title: "Robot Mower vs Traditional", href: "/robot-mowers/comparison" },
      { title: "Robot Mower Installation", href: "/robot-mowers/installation" },
      { title: "Robot Mower Maintenance", href: "/robot-mowers/maintenance" },
    ],
  },
  {
    title: "Lawn Mower Repair Alternative",
    description: "Why robot mowing is the perfect alternative to lawn mower repair.",
    href: "/repair-alternative",
    topics: [
      { title: "Cost of Lawn Mower Repairs", href: "/repair-alternative/repair-costs" },
      { title: "Common Mower Problems", href: "/repair-alternative/common-problems" },
      { title: "Repair vs Replace vs Robot", href: "/repair-alternative/comparison" },
      { title: "Switching to Robot Mowing", href: "/repair-alternative/switching-guide" },
    ],
  },
  {
    title: "Lawn Mowing Services",
    description: "Professional lawn mowing services in Richmond, VA.",
    href: "/services/lawn-mowing",
    topics: [
      { title: "Service Areas", href: "/services/lawn-mowing/areas" },
      { title: "Pricing & Plans", href: "/services/lawn-mowing/pricing" },
      { title: "Scheduling", href: "/services/lawn-mowing/scheduling" },
      { title: "Customer Reviews", href: "/services/lawn-mowing/reviews" },
    ],
  },
  {
    title: "Lawn Mowing Equipment",
    description: "Why you don't need to buy or rent lawn mowing equipment anymore.",
    href: "/equipment-alternative",
    topics: [
      { title: "Equipment Costs", href: "/equipment-alternative/costs" },
      { title: "Equipment Maintenance", href: "/equipment-alternative/maintenance" },
      { title: "Storage Issues", href: "/equipment-alternative/storage" },
      { title: "Robot Alternative", href: "/equipment-alternative/robot-solution" },
    ],
  },
]

export function ContentHub() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Lawn Mowing Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about modern lawn care solutions in Richmond, VA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentPillars.map((pillar, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle>{pillar.title}</CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {pillar.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-center">
                      <ArrowRight className="h-4 w-4 mr-2 text-green-500" />
                      <Link href={topic.href} className="text-blue-600 hover:underline">
                        {topic.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={pillar.href}>Explore {pillar.title}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
