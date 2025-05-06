"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

interface CompetitorProps {
  name: string
  price_level?: string
  category_name?: string
}

interface SeoKeywordsProps {
  robotLawnMower: string
  lawnMowerRepair: string
  lawnMowerRental: string
}

interface CompetitorFaqsProps {
  competitor: CompetitorProps
  seoKeywords: SeoKeywordsProps
  city: string
  state: string
}

export default function CompetitorFaqs({ competitor, seoKeywords, city, state }: CompetitorFaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // Generate FAQs based on competitor data
  const faqs = [
    {
      question: `How does SweatyJob compare to ${competitor.name} in ${city}?`,
      answer: `SweatyJob offers daily automated lawn mowing through advanced robotic technology, while ${competitor.name} typically provides traditional weekly or bi-weekly service. Our robots maintain your lawn at the perfect height every day, resulting in a healthier, denser turf that's more resistant to weeds and drought. Unlike ${competitor.name}, our service works rain or shine, and you never have to be home or schedule appointments.`,
    },
    {
      question: `Is SweatyJob available in the same areas as ${competitor.name} in ${city}, ${state}?`,
      answer: `Yes, SweatyJob provides service throughout ${city}, ${state}, covering the same service areas as ${competitor.name}. Our robotic lawn care service is available to both residential and commercial properties in ${city} and surrounding areas. We've designed our service to work with various lawn sizes and terrains common in ${city}.`,
    },
    {
      question: `What makes SweatyJob's ${seoKeywords.robotLawnMower} better than traditional lawn care?`,
      answer: `SweatyJob's ${seoKeywords.robotLawnMower} maintains your lawn at the perfect height every day, resulting in a healthier, denser turf that's more resistant to weeds and drought. Our robots use advanced sensors and GPS technology to navigate your lawn precisely, avoiding obstacles and ensuring complete coverage. Unlike traditional services that remove up to 1/3 of the grass blade in a single cutting, our daily micro-cutting approach is healthier for your lawn and produces finer clippings that decompose quickly, naturally fertilizing your lawn.`,
    },
    {
      question: `How much does SweatyJob cost compared to ${competitor.name} in ${city}?`,
      answer: `SweatyJob's all-inclusive robotic lawn care service costs $79/month in ${city}, which is typically 20-40% less than ${competitor.name}'s traditional lawn care services. While ${competitor.name} charges approximately ${competitor.price_level === "$$$" ? "$150" : competitor.price_level === "$$" ? "$120" : "$90"}/month for weekly or bi-weekly service, our daily service provides better results at a lower cost. Plus, there are no extra charges for fuel surcharges, seasonal clean-ups, or service calls.`,
    },
    {
      question: `Do I need to be home when SweatyJob services my lawn?`,
      answer: `No, unlike with ${competitor.name}, you never need to be home when SweatyJob services your lawn. Our robotic mowers work autonomously and safely without supervision. They operate on a daily schedule that you can customize through our app, and you'll receive notifications when mowing is complete. This hands-off approach gives you back the time you'd spend coordinating with traditional services like ${competitor.name}.`,
    },
    {
      question: `What happens if it rains in ${city}?`,
      answer: `While ${competitor.name} and other traditional lawn services typically reschedule during rain, SweatyJob's robotic mowers can operate in light rain without issues. The mowers have weather sensors and will return to their charging stations during heavy downpours, automatically resuming once conditions improve. This means your lawn maintenance continues regardless of ${city}'s weather patterns, ensuring consistent results year-round.`,
    },
  ]

  return (
    <Card className="mb-12">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
