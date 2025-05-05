import type React from "react"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  className?: string
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  faqs,
  title = "Frequently Asked Questions",
  className = "",
}) => {
  // Create the FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className={`py-12 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Add the schema markup */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </div>
    </section>
  )
}

// Common FAQs for lawn mowing service
export const lawnMowingFAQs = [
  {
    question: "How much does lawn mowing service cost in Richmond?",
    answer:
      "Our robot lawn mowing service costs $79 per month in Richmond, which includes daily mowing, maintenance, and support.",
  },
  {
    question: "Where can I find lawn mowing service near me in Richmond?",
    answer:
      "SweatyJob provides robot lawn mowing services throughout Richmond, including The Fan, Church Hill, Carytown, and all surrounding neighborhoods.",
  },
  {
    question: "When can I schedule lawn mowing service in Richmond?",
    answer:
      "Our robot lawn mowing service works daily, automatically maintaining your lawn. Installation can often be scheduled same-day or within 24-48 hours.",
  },
  {
    question: "How does robot lawn mowing compare to traditional lawn mowing?",
    answer:
      "Robot lawn mowing is more consistent, environmentally friendly, and cost-effective than traditional lawn mowing. Our robots mow daily, creating a healthier lawn with finer clippings that act as natural fertilizer.",
  },
  {
    question: "Do I need to repair my lawn mower if I use your service?",
    answer:
      "No, you don't need to repair your lawn mower. Our service eliminates the need for you to own, maintain, or repair any lawn mowing equipment. We handle everything, including maintenance of the robot mowers.",
  },
]

// FAQs specifically for the repair alternative page
export const repairAlternativeFAQs = [
  {
    question: "Is robot lawn mowing better than repairing my lawn mower?",
    answer:
      "Yes, robot lawn mowing eliminates the need for repairs, maintenance, gas, and the physical labor of pushing a mower. For $79/month, you get daily mowing without any of the hassles of ownership.",
  },
  {
    question: "How much does lawn mower repair cost compared to robot mowing?",
    answer:
      "Lawn mower repairs typically cost $80-200 per incident, plus your time and transportation. Our $79/month service eliminates all repair costs and includes daily mowing, maintenance, and support.",
  },
  {
    question: "What if the robot mower needs repair?",
    answer:
      "That's completely our responsibility. If your robot mower needs repair or maintenance, we handle it at no additional cost to you. Your lawn will continue to be maintained without interruption.",
  },
  {
    question: "How quickly can I get robot mowing instead of repairing my mower?",
    answer:
      "We can typically install your robot mower within 24-48 hours in Richmond, VA. This is often faster than getting your traditional mower repaired and returned.",
  },
  {
    question: "Can I sell my old lawn mower if I switch to robot mowing?",
    answer:
      "Many of our customers sell their old equipment after switching to our service, recouping some of their investment and freeing up storage space.",
  },
]

// FAQs specifically for the robot mowers page
export const robotMowerFAQs = [
  {
    question: "How do robot lawn mowers work?",
    answer:
      "Robot lawn mowers use sensors and boundary wires to navigate your lawn, cutting grass daily with small, sharp blades. They return automatically to their charging station when finished or when battery is low.",
  },
  {
    question: "Are robot lawn mowers effective?",
    answer:
      "Yes, robot lawn mowers are highly effective. By mowing daily, they cut just a small amount of grass, creating finer clippings that decompose quickly and act as natural fertilizer, resulting in a healthier lawn.",
  },
  {
    question: "Do robot lawn mowers work in the rain?",
    answer:
      "Most robot mowers have rain sensors and will return to their charging station when it starts raining. Our service includes weather-adaptive scheduling to ensure optimal mowing conditions.",
  },
  {
    question: "How much does a robot lawn mower cost?",
    answer:
      "Quality robot mowers typically cost $800-$3,000 to purchase. With our service, you get a premium robot mower for just $79/month with no upfront costs, including installation, maintenance, and support.",
  },
  {
    question: "Do robot lawn mowers work on hills?",
    answer:
      "Yes, our robot mowers can handle slopes up to 35 degrees. During our free yard assessment, we'll evaluate your property to ensure our robots can effectively maintain your specific lawn.",
  },
]

// FAQs specifically for the equipment alternative page
export const equipmentAlternativeFAQs = [
  {
    question: "Is robot mowing cheaper than buying lawn equipment?",
    answer:
      "Yes, when you factor in the cost of purchasing a quality mower ($300-$600), trimmer ($100-$300), fuel, maintenance, and your time, our $79/month service is more economical over time.",
  },
  {
    question: "Do I need to buy any equipment with your robot mowing service?",
    answer:
      "No, we provide all necessary equipment. The robot mower, charging station, boundary wire, and any accessories are included in your monthly fee.",
  },
  {
    question: "What happens if I need lawn equipment besides mowing?",
    answer:
      "Our service includes edge trimming as needed. For other lawn care needs, we offer additional services like fertilization, aeration, and seasonal cleanup that can be added to your plan.",
  },
  {
    question: "How much storage space do robot mowers require?",
    answer:
      "Robot mowers require minimal space - just a small area for the charging station (about 2'x2'). This frees up valuable garage or shed space that would otherwise be occupied by traditional lawn equipment.",
  },
  {
    question: "Can robot mowers replace all my lawn equipment?",
    answer:
      "For most homeowners, yes. Our service handles the primary lawn maintenance tasks. The robot mower replaces your traditional mower, and our technicians handle trimming during regular maintenance visits.",
  },
]
