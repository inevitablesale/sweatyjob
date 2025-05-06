import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CompetitorFAQSectionProps {
  competitorName: string
  city: string
  state: string
}

export const CompetitorFAQSection: React.FC<CompetitorFAQSectionProps> = ({ competitorName, city, state }) => {
  // Generate FAQs that directly compare SweatyJob to the competitor
  const faqs = [
    {
      question: `How does SweatyJob compare to ${competitorName}?`,
      answer: `SweatyJob offers more advanced technology and often better pricing than ${competitorName} in ${city}, ${state}. While ${competitorName} provides traditional lawn care services, SweatyJob uses robotic mowers and smart technology to deliver consistent, eco-friendly lawn maintenance with flexible scheduling options not available with ${competitorName}.`,
    },
    {
      question: `Is SweatyJob cheaper than ${competitorName}?`,
      answer: `In most cases, SweatyJob's subscription model provides better value than ${competitorName} in ${city}. Our customers typically save 15-30% compared to ${competitorName}'s pricing while receiving more frequent service. Additionally, SweatyJob doesn't charge extra fees for services that ${competitorName} might consider add-ons.`,
    },
    {
      question: `Does SweatyJob service the same areas as ${competitorName} in ${city}?`,
      answer: `Yes, SweatyJob services all the same neighborhoods and areas as ${competitorName} in ${city}, ${state}. In fact, we often have better coverage in some neighborhoods where ${competitorName} has limited availability. Enter your address on our website to confirm service availability in your specific location.`,
    },
    {
      question: `What do customers say about SweatyJob vs ${competitorName}?`,
      answer: `Customers who have switched from ${competitorName} to SweatyJob frequently mention our superior technology, more consistent results, and better customer service. Many appreciate the ability to manage everything through our app, which offers more convenience than ${competitorName}'s booking system. Our satisfaction guarantee also provides peace of mind when switching from ${competitorName}.`,
    },
    {
      question: `How easy is it to switch from ${competitorName} to SweatyJob?`,
      answer: `Switching from ${competitorName} to SweatyJob is seamless. Our team handles the entire transition process, including initial lawn assessment and setup. Unlike ${competitorName}, we don't require long-term contracts, so you can try our service without the commitment that ${competitorName} might require. Many customers complete the switch from ${competitorName} in less than 10 minutes through our website.`,
    },
    {
      question: `What services does SweatyJob offer that ${competitorName} doesn't?`,
      answer: `Unlike ${competitorName}, SweatyJob offers daily robotic mowing, real-time lawn monitoring, and smart watering recommendations. We also provide detailed reports on your lawn's health and maintenance history, a feature not available with ${competitorName}. Additionally, our eco-friendly approach uses less water and zero emissions compared to ${competitorName}'s traditional methods.`,
    },
  ]

  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions About SweatyJob and {competitorName}
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-700">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default CompetitorFAQSection
