import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PhoneCall, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function FAQsPage() {
  const faqs = [
    {
      question: "How does the AI mower work without boundary wires?",
      answer:
        "Our AI mowers use advanced GPS technology instead of traditional boundary wires. We install a GPS pole, connect the mower to your WiFi, and plug it in. The intelligent mapping feature creates virtual boundaries, eliminating the need for unsightly wires around your property. The mower uses cameras with object recognition powered by artificial intelligence to navigate and avoid obstacles.",
    },
    {
      question: "What is the monthly cost and is there a contract?",
      answer:
        "The subscription is $30/week ($120/month) with no long-term commitment. You can cancel anytime with no penalties. There may be a one-time setup fee depending on your lawn size and complexity. We believe in transparency - no hidden fees, no surprises.",
    },
    {
      question: "How is the AI mower installed on my property?",
      answer:
        "Installation is simple - we set up a GPS pole, connect the mower to your WiFi, and plug it in. There are no boundary wires to install or maintain. The entire setup process takes about an hour. Our team will walk you through the process and ensure everything is working perfectly before we leave.",
    },
    {
      question: "Is the AI mower safe for children and pets?",
      answer:
        "Yes, our AI mowers have multiple safety features including lift sensors, obstacle detection, and blade-stop technology that activates when the mower is lifted or tilted. The cameras with object recognition can detect and avoid pets, children, and other obstacles. The mowers operate at a low noise level and are designed with safety as a top priority.",
    },
    {
      question: "What happens during bad weather?",
      answer:
        "Our AI mowers have rain sensors and will return to their charging station during heavy rain. They can operate in light rain and will resume mowing when conditions improve. The mowers are weather-resistant and designed to handle various outdoor conditions. The system also monitors weather forecasts and adjusts mowing schedules accordingly.",
    },
    {
      question: "How large of an area can the AI mower handle?",
      answer:
        "Our AI mowers can mow up to 26,000 square feet per day, making them suitable for most residential properties in our service areas. For larger properties, we may recommend multiple mowers or a custom solution. The mowers are designed to handle slopes up to 20 degrees and can navigate complex lawn layouts.",
    },
    {
      question: "What areas of Richmond do you serve?",
      answer:
        "We primarily serve Battery Park, Bellevue, Laburnum Park, Ginter Park, Sherwood Park, Rosedale, and Bryan Parkway neighborhoods in Richmond, VA. We're expanding to more neighborhoods soon, so if yours isn't listed, please contact us to check availability.",
    },
    {
      question: "How do I schedule a consultation?",
      answer:
        "Simply call or text (804) 573-9825 to schedule a free consultation. We'll assess your property and provide you with all the details specific to your lawn. You can also apply through our website, and our team will reach out to schedule a convenient time for your consultation.",
    },
    {
      question: "What add-on services are available to subscribers?",
      answer:
        "Subscribers have access to exclusive discounted services including window cleaning, pressure washing, flower bed maintenance, grill cleaning, deck staining and sanding, and mobile car detailing. These services are provided by our vetted partners and can be easily scheduled through your membership portal.",
    },
    {
      question: "Do I need to be home when the AI mower is operating?",
      answer:
        "No, the AI mower works autonomously according to its programmed schedule. You don't need to be home for it to operate, and you can monitor and control it remotely through the mobile app. The mower will automatically return to its charging station when the battery is low or when it completes its mowing cycle.",
    },
    {
      question: "What happens if the AI mower breaks down?",
      answer:
        "All maintenance and repairs are included in your subscription. If there's an issue, we'll fix or replace the mower promptly at no additional cost. Our team monitors the mowers remotely and can often detect and resolve issues before you even notice them. We also provide lifelong free replacement and upgrades as newer models become available.",
    },
    {
      question: "Can the AI mower handle slopes and uneven terrain?",
      answer:
        "Yes, our AI mowers are designed to handle slopes and uneven terrain. They can navigate inclines up to 20 degrees and adapt to various lawn conditions. The advanced traction system ensures stability on slopes, and the floating cutting deck adjusts to the contours of your lawn for an even cut.",
    },
    {
      question: "What makes SweatyJob Founders Club different from other lawn services?",
      answer:
        "We offer luxury lawn care at the same price as inconsistent traditional service. Our AI-driven approach delivers consistently perfect results without the scheduling hassles, while our no-commitment subscription model gives you complete flexibility. We're also a local, owner-operated business that prioritizes personalized service and community relationships.",
    },
    {
      question: "Do you offer any guarantees?",
      answer:
        "Yes, we offer a 100% satisfaction guarantee. If you're not completely satisfied with our work, we'll make it right or you can cancel your subscription with no penalties. We stand behind the quality of our service and the reliability of our AI mowers.",
    },
    {
      question: "How does the mobile app work?",
      answer:
        "The mobile app allows you to control and monitor your mower remotely. You can view mowing schedules, adjust settings, receive notifications, and track mowing progress—all from your smartphone. The app also provides insights into your lawn's health and maintenance history, and allows you to easily schedule add-on services.",
    },
    {
      question: "What happens if someone steals my AI mower?",
      answer:
        "Our AI mowers have built-in GPS tracking and anti-theft features. If a mower is stolen, it will be automatically disabled and we can track its location. As part of your subscription, we'll replace any stolen mower at no additional cost to you. The mowers also require PIN authentication to operate, making them less attractive to thieves.",
    },
    {
      question: "How often does the AI mower cut my lawn?",
      answer:
        "Unlike traditional lawn services that cut your grass once a week, our AI mowers operate daily (or according to an optimized schedule) to maintain your lawn at the perfect height. This frequent cutting promotes healthier grass growth and results in a consistently manicured appearance. The mowers cut just a small amount each time, and the clippings are fine enough to decompose quickly and act as natural fertilizer.",
    },
    {
      question: "What is the Founders Club and why is it limited to 100 members?",
      answer:
        "The Founders Club is our exclusive membership program limited to 100 members in Richmond. We've intentionally limited membership to ensure we can provide exceptional service to each member. Founders Club members receive priority service, early access to new features and services, and special community events. Once all 100 spots are filled, we'll start a waitlist for future openings.",
    },
    {
      question: "How does the AI mower benefit the environment?",
      answer:
        "Our AI mowers are 100% electric and produce zero emissions, unlike gas-powered lawn equipment. They operate quietly, reducing noise pollution in your neighborhood. The frequent cutting approach promotes healthier grass that requires less water and fertilizer, and the fine clippings naturally fertilize your lawn. By choosing our service, you're making an environmentally responsible choice.",
    },
    {
      question: "Can I customize the mowing schedule?",
      answer:
        "Yes, you can customize the mowing schedule through the mobile app. While we recommend daily mowing for optimal results, you can adjust the frequency and timing to suit your preferences. You can also set quiet hours or designate specific days when you'd prefer the mower not to operate, such as when you're hosting outdoor events.",
    },
  ]

  // Schema markup for FAQs
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
    <div className="bg-slate-900 pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 mb-6">
              Find answers to common questions about our AI mower subscription and add-on services.
            </p>
            <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="col-span-2">
              <Accordion type="single" collapsible className="mb-12">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-700">
                    <AccordionTrigger className="text-lg font-medium text-white py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-300 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div>
              <div className="sticky top-24">
                <div className="glass-dark p-6 rounded-lg border border-purple-700/20 mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-purple-600/20 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      </div>
                      <p className="text-gray-300">No boundary wires needed</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-600/20 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      </div>
                      <p className="text-gray-300">AI-powered object recognition</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-600/20 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      </div>
                      <p className="text-gray-300">$30/week, no contracts</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-600/20 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      </div>
                      <p className="text-gray-300">Free maintenance & replacement</p>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-600/20 p-1 rounded-full mr-3 mt-1">
                        <CheckCircle2 className="h-4 w-4 text-purple-400" />
                      </div>
                      <p className="text-gray-300">Limited to 100 members</p>
                    </li>
                  </ul>
                </div>

                <div className="glass-dark p-6 rounded-lg border border-purple-700/20">
                  <h3 className="text-xl font-bold text-white mb-4">Still have questions?</h3>
                  <p className="text-gray-300 mb-6">
                    We're happy to help! Contact us directly and we'll get back to you as soon as possible.
                  </p>
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full haptic-button" asChild>
                    <a href="tel:8045739825">
                      <PhoneCall className="mr-2 h-5 w-5" /> Text/Call (804) 573-9825
                    </a>
                  </Button>
                  <p className="mt-4 text-gray-300 text-center">
                    Or email us at{" "}
                    <a href="mailto:job@sweatyjob.com" className="text-purple-400 hover:underline">
                      job@sweatyjob.com
                    </a>
                  </p>
                </div>

                <div className="mt-6 relative rounded-lg overflow-hidden">
                  <Image
                    src="/images/bot-titan-1.jpg"
                    alt="AI Mower"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 p-4">
                    <p className="text-white font-medium">Join the Founders Club today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
