import type React from "react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQItem[]
  title: string
  subtitle?: string
}

export const ExpandedFAQSection: React.FC<FAQSectionProps> = ({ faqs, title, subtitle }) => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            {title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-yellow-500">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              ),
            )}
          </h2>
          {subtitle && <p className="text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 mb-6 border border-gray-700 hover:border-yellow-500 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
              <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Data Sets
export const robotMowingFAQs: FAQItem[] = [
  {
    question: "How do robot lawn mowers work?",
    answer:
      "Robot lawn mowers use boundary wires or GPS to navigate your lawn, cutting grass with precision blades. They work daily, cutting just a small amount of grass at a time, which creates finer clippings that decompose quickly and act as natural fertilizer for your lawn. Learn more about our <a href='/robots' class='text-yellow-500 hover:underline'>robot mower technology</a>.",
  },
  {
    question: "Are robot lawn mowers worth the investment?",
    answer:
      "Absolutely. At $79/month, our robot mowing service saves you 35+ hours per season of manual labor. The daily cutting creates a healthier, denser lawn while eliminating equipment maintenance, gas costs, and the hassle of traditional mowing. See our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>pricing and packages</a> for more details.",
  },
  {
    question: "Can robot lawn mowers handle hills and obstacles?",
    answer:
      "Yes, our robot mowers can handle slopes up to 35 degrees and are equipped with advanced sensors to detect and navigate around obstacles like trees, garden beds, and lawn furniture. They're specifically calibrated for Richmond's varied terrain. Check out how they work in <a href='/neighborhoods' class='text-yellow-500 hover:underline'>different Richmond neighborhoods</a>.",
  },
  {
    question: "How loud are robot lawn mowers?",
    answer:
      "Our robot mowers operate at around 58-60 decibels, which is quieter than normal conversation. You can run them at night without disturbing neighbors, unlike traditional gas mowers that operate at 95-100 decibels. Learn more about the <a href='/robots/lawn-mowing' class='text-yellow-500 hover:underline'>benefits of our lawn mowing service</a>.",
  },
]

export const lawnMowerRepairFAQs: FAQItem[] = [
  {
    question: "Is it better to repair my lawn mower or switch to a robot mower?",
    answer:
      "When you factor in the average repair cost ($80-200 per incident), plus ongoing maintenance, gas, and your valuable time, switching to our $79/month robot mowing service is typically more economical and eliminates all the hassle of ownership. See why many Richmond homeowners are <a href='/robots/lawn-mower-repair' class='text-yellow-500 hover:underline'>choosing robot mowers over repairs</a>.",
  },
  {
    question: "How much does lawn mower repair typically cost compared to robot mowing?",
    answer:
      "The average lawn mower repair costs $80-200 per incident, not including your time and transportation. With multiple repairs needed over a season, our $79/month service is often less expensive while providing daily mowing instead of weekly. View our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>subscription details</a>.",
  },
  {
    question: "What are common lawn mower problems that robot mowers eliminate?",
    answer:
      "Robot mowers eliminate common problems like carburetor issues, starter failures, spark plug replacements, blade sharpening, oil changes, air filter replacements, and fuel system maintenance. We handle all maintenance as part of your subscription. Learn more about our <a href='/robots/lawn-mowing' class='text-yellow-500 hover:underline'>hassle-free service</a>.",
  },
  {
    question: "What if the robot mower needs repair?",
    answer:
      "That's completely our responsibility. If your robot mower needs repair or maintenance, we handle it at no additional cost to you. Your lawn will continue to be maintained without interruption. Read about our <a href='/member-benefits' class='text-yellow-500 hover:underline'>service guarantees</a>.",
  },
]

export const lawnMowerRentalsFAQs: FAQItem[] = [
  {
    question: "How does robot mowing compare to lawn mower rentals in cost?",
    answer:
      "Lawn mower rentals typically cost $40-80 per day in Richmond. Our robot mowing service is just $79/month for daily mowing, making it significantly more cost-effective than even two rental days per month. See our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>pricing details</a>.",
  },
  {
    question: "Why is a robot mowing subscription better than renting equipment?",
    answer:
      "Unlike rentals that require you to pick up, operate, and return heavy equipment, our robot mowing service does all the work automatically. No transportation hassles, no physical labor, and no time wasted—just a perfectly maintained lawn every day. Learn about the <a href='/robots/lawn-mowing' class='text-yellow-500 hover:underline'>benefits of our service</a>.",
  },
  {
    question: "What are the hidden costs of lawn mower rentals?",
    answer:
      "Beyond the daily rental fee, hidden costs include transportation to/from the rental location, gas/oil, your time operating the equipment, and the risk of damage charges. Our $79/month service includes everything with no hidden fees. Compare options on our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>pricing page</a>.",
  },
  {
    question: "Can I rent a robot lawn mower instead?",
    answer:
      "While some companies offer robot mower rentals, they typically don't include installation, boundary setup, or maintenance. Our subscription model provides a complete service with professional setup, ongoing support, and guaranteed results. See why our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>subscription model</a> is better.",
  },
]

export const lawnMowingCostFAQs: FAQItem[] = [
  {
    question: "How much does robot lawn mowing service cost in Richmond?",
    answer:
      "Our robot lawn mowing service costs $79/month for standard residential properties in Richmond. This includes the robot mower, daily mowing, maintenance, and support. There's an optional one-time $249 professional installation fee. View our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>complete pricing details</a>.",
  },
  {
    question: "What factors affect the cost of lawn mowing services?",
    answer:
      "Traditional lawn mowing service costs vary based on lawn size, terrain complexity, obstacles, frequency, and seasonal factors. Our robot mowing service offers a simple $79/month flat rate for most Richmond residential properties regardless of these factors. Learn more about <a href='/robots/lawn-mowing' class='text-yellow-500 hover:underline'>our service coverage</a>.",
  },
  {
    question: "Is robot lawn mowing more cost-effective than traditional services?",
    answer:
      "Yes. Traditional lawn services in Richmond average $45-60 per visit (weekly or bi-weekly). Our $79/month robot service provides daily mowing, which would cost over $1,200/month if done manually. You get superior results at a fraction of the cost. See our <a href='/purchase/standard-mowing' class='text-yellow-500 hover:underline'>service comparison</a>.",
  },
  {
    question: "Are there any additional costs beyond the monthly fee?",
    answer:
      "The only additional cost is an optional one-time $249 professional installation fee. Everything else—maintenance, repairs, software updates, and support—is included in your $79/month subscription. There are no hidden fees. View our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>transparent pricing</a>.",
  },
]

export const wetGrassMowingFAQs: FAQItem[] = [
  {
    question: "Can robot mowers cut wet grass effectively?",
    answer:
      "Yes, our robot mowers are designed to handle wet grass better than traditional mowers. The daily micro-cutting approach means they're cutting just the tips of the grass, which prevents clumping and clogging even in damp conditions. Learn more about our <a href='/robots' class='text-yellow-500 hover:underline'>robot mower technology</a>.",
  },
  {
    question: "How do robot mowers handle rainy conditions?",
    answer:
      "Our robot mowers have rain sensors that detect precipitation. They'll automatically return to their charging station during heavy rain and resume mowing when conditions improve. The AI scheduling system also adapts to Richmond's weather patterns. See how they work in <a href='/neighborhoods' class='text-yellow-500 hover:underline'>Richmond's climate</a>.",
  },
  {
    question: "What happens if it rains during scheduled mowing time?",
    answer:
      "The robot will automatically pause operation and return to its charging station. Once the rain stops and the sensors determine conditions are appropriate, it will resume mowing. This weather-adaptive technology ensures optimal cutting without user intervention. Read about our <a href='/robots/lawn-mowing' class='text-yellow-500 hover:underline'>smart mowing features</a>.",
  },
  {
    question: "Does mowing wet grass damage the robot mower?",
    answer:
      "No, our robot mowers are designed with sealed components and weather-resistant materials that can handle moisture. Unlike gas mowers where wet conditions can cause engine problems, our electric robots operate safely in damp conditions. Learn about our <a href='/robots' class='text-yellow-500 hover:underline'>durable design</a>.",
  },
]

export const bestRobotMowersFAQs: FAQItem[] = [
  {
    question: "What makes your robot mowers the best choice for Richmond lawns?",
    answer:
      "Our robot mowers are specifically calibrated for Richmond's grass types, terrain, and climate. They feature advanced obstacle detection, slope handling up to 35 degrees, and weather-adaptive technology—all backed by our local service team for immediate support. See how they perform in <a href='/neighborhoods' class='text-yellow-500 hover:underline'>your neighborhood</a>.",
  },
  {
    question: "How do different robot mower models compare?",
    answer:
      "While basic models ($500-800) struggle with complex yards and lack smart features, mid-range models ($800-1,500) offer better navigation but limited app control. Our premium models ($1,500+) provide superior cutting, advanced AI, and comprehensive app control—all included in your $79/month subscription. View our <a href='/robots' class='text-yellow-500 hover:underline'>technology details</a>.",
  },
  {
    question: "What features should you look for in a quality robot mower?",
    answer:
      "The best robot mowers offer GPS navigation, zone management, obstacle detection, anti-theft protection, weather adaptation, and smart app control. Our service includes all these premium features plus professional installation and ongoing maintenance. Learn about our <a href='/robots/lawn-mowing' class='text-yellow-500 hover:underline'>premium features</a>.",
  },
  {
    question: "How do your robot mowers compare to popular brands like Husqvarna and WORX?",
    answer:
      "Our robot mowers offer comparable or superior technology to leading brands like Husqvarna and WORX, but with the added benefit of professional installation, maintenance, and support—all for a simple monthly fee rather than a large upfront purchase. See our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>service advantages</a>.",
  },
]

export const robotMowersWithoutPerimeterWireFAQs: FAQItem[] = [
  {
    question: "How do robot lawn mowers work without perimeter wire?",
    answer:
      "Our SmartYard robot mowers use advanced RTK positioning and vision technology to create virtual boundaries instead of physical wires. During setup, our technicians map your lawn's boundaries using the robot's built-in cameras and GPS. This creates a precise virtual map that the robot follows, eliminating the need for buried wires that can break or be damaged. Learn more about our <a href='/robots' class='text-yellow-500 hover:underline'>wire-free technology</a>.",
  },
  {
    question: "Are robot mowers without perimeter wire more expensive?",
    answer:
      "While wire-free robot mowers typically cost $2,000-$3,500 to purchase outright, our SmartYard subscription model gives you this advanced technology for just $79/month. This includes the robot mower, maintenance, and support—making it more affordable than traditional wire-based systems in the long run. See our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>pricing details</a>.",
  },
  {
    question: "How accurate are robot mowers without boundary wires?",
    answer:
      "Our SmartYard robots achieve exceptional accuracy using RTK (Real-Time Kinematics) positioning, which provides centimeter-level precision—often more accurate than traditional wire-based systems. The mower's vision technology further enhances this by recognizing lawn edges and obstacles. This allows for precise mowing along boundaries without crossing into flower beds or other no-go zones. View our <a href='/robots' class='text-yellow-500 hover:underline'>technology details</a>.",
  },
  {
    question: "Can I change the boundaries without reinstalling wires?",
    answer:
      "Yes! One of the biggest advantages of our wire-free system is the ability to easily adjust boundaries through the SmartYard app. If you add a garden bed or want to change your mowing area, you can simply update the virtual map without digging up and reinstalling physical boundary wires. This flexibility makes seasonal changes simple and convenient. Learn about <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>app features</a>.",
  },
]

export const commercialRobotMowersFAQs: FAQItem[] = [
  {
    question: "Are robot lawn mowers suitable for commercial properties?",
    answer:
      "Absolutely. Our commercial-grade SmartYard robots are designed for businesses, HOAs, property managers, and landscaping companies in Richmond. They can maintain large areas up to 1.5 acres per unit, with multiple units working together for larger properties. Commercial clients benefit from reduced labor costs, consistent results, and the ability to reallocate staff to higher-value tasks. Contact us for a <a href='/commercial' class='text-yellow-500 hover:underline'>commercial consultation</a>.",
  },
  {
    question: "How much can commercial properties save with robot mowers?",
    answer:
      "Commercial properties typically save 30-50% on lawn maintenance costs by switching to SmartYard robot mowers. A medium-sized commercial property spending $2,000/month on traditional lawn care can often reduce this to $1,000-$1,400/month while achieving better results. The savings come from reduced labor costs, elimination of fuel expenses, and lower equipment maintenance. See our <a href='/commercial' class='text-yellow-500 hover:underline'>commercial ROI calculator</a>.",
  },
  {
    question: "Do commercial robot mowers require special installation?",
    answer:
      "Yes, our commercial installations are handled by our specialized team who understand the unique requirements of business properties. The setup includes comprehensive mapping of complex areas, integration with existing landscaping systems, custom scheduling based on property usage patterns, and training for your maintenance staff. We also provide ongoing support specifically for commercial clients. Learn about our <a href='/commercial' class='text-yellow-500 hover:underline'>commercial services</a>.",
  },
  {
    question: "Can robot mowers handle large commercial properties?",
    answer:
      "Yes, by deploying multiple SmartYard units that work together as a fleet. Each unit can maintain up to 1.5 acres, and our commercial packages include multiple units with coordinated operation. The mowers communicate with each other to ensure complete coverage without overlap, maximizing efficiency. For very large properties, we create zones with dedicated mowers for each area. Explore our <a href='/commercial' class='text-yellow-500 hover:underline'>commercial solutions</a>.",
  },
]
