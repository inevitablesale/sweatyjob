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

// New set of FAQs specifically for "near me" search intent that doesn't duplicate the ones on the compare page
export const lawnMowingNearMeFAQs: FAQItem[] = [
  {
    question: "What is the lawn mowing service near me cost?",
    answer:
      "The cost of lawn mowing services varies by location and lawn size, but typically ranges from $40-50 per visit for traditional services. SweatyJob's robot mowing service costs a flat $79 per month regardless of lawn size (up to 1/2 acre), which includes daily mowing, maintenance, and support.",
  },
  {
    question: "Where can I find affordable lawn mowing near me?",
    answer:
      "SweatyJob offers the most affordable lawn mowing solution at just $79/month for daily robot mowing. This is approximately 50% cheaper than traditional services while providing daily rather than weekly service. Check availability in your area on our website.",
  },
  {
    question: "Can I get lawn mowing and maintenance near me?",
    answer:
      "Yes, SweatyJob provides comprehensive lawn mowing and maintenance services. Our $79/month robot mowing service includes daily mowing, regular maintenance of the robot, blade sharpening, and technical support. We handle everything so you don't have to worry about lawn maintenance.",
  },
  {
    question: "Where can I find lawn care and mowing near me?",
    answer:
      "SweatyJob provides complete lawn care and mowing services nationwide. Our robot mowers deliver daily mowing that promotes healthier grass growth. The frequent mowing creates fine grass clippings that act as natural fertilizer, improving your lawn's health and appearance.",
  },
  {
    question: "Is there lawn mowing and trimming near me?",
    answer:
      "SweatyJob's robot mowing service handles the mowing portion of your lawn care needs. For comprehensive care including trimming, we offer add-on services that can be scheduled through our app. Our robot mowers handle the daily mowing while our professionals can handle trimming and edging as needed.",
  },
]

// Additional "near me" FAQs for extended content needs
export const extendedNearMeFAQs: FAQItem[] = [
  {
    question: "Where can I find lawn mowing and gardening services near me?",
    answer:
      "SweatyJob's primary service is daily robot lawn mowing for $79/month. We also offer add-on gardening services including flower bed maintenance, garden weeding, and seasonal planting in many service areas. Check our website for availability of these additional services in your location.",
  },
  {
    question: "Is there lawn mowing and weeding service near me?",
    answer:
      "SweatyJob's robot mowers handle daily lawn mowing, which naturally reduces weed growth by promoting denser, healthier grass. For additional weed control, we offer add-on weeding services in many areas that can be scheduled through our app. Check our website for service availability in your area.",
  },
  {
    question: "What is the average price for lawn mowing near me?",
    answer:
      "The average price for traditional lawn mowing services is $40-50 per visit or $160-200 monthly for weekly service. Prices vary based on lawn size and location. SweatyJob's robot mowing service costs a flat $79 monthly for daily mowing regardless of lawn size (up to 1/2 acre).",
  },
  {
    question: "Can I get lawn mowing and garden maintenance near me?",
    answer:
      "Yes, SweatyJob offers daily robot lawn mowing for $79/month and additional garden maintenance services in many areas. Our add-on services include flower bed maintenance, garden weeding, and seasonal planting that can be scheduled through our app as needed.",
  },
  {
    question: "Where can I find the best lawn mowing service near me?",
    answer:
      "SweatyJob consistently outperforms traditional lawn services in customer satisfaction, lawn health, and value. Our robots mow daily (not just weekly), creating a healthier lawn with finer clippings that act as natural fertilizer. They're whisper-quiet, produce zero emissions, and eliminate scheduling hassles - all at about half the cost.",
  },
]

// Service-oriented FAQs
export const lawnServiceFAQs: FAQItem[] = [
  {
    question: "Are there lawn mowing companies near me?",
    answer:
      "There are numerous lawn mowing companies in most areas, but SweatyJob offers a revolutionary alternative with our robot mowing service. Unlike traditional companies that visit weekly, our robots provide daily mowing at about half the cost ($79/month vs. $160-200/month for traditional services).",
  },
  {
    question: "Where can I find lawn mowing contractors near me?",
    answer:
      "While there are many lawn mowing contractors available in most areas, SweatyJob eliminates the need for contractors entirely. Our robot mowing service provides daily mowing for $79/month with no scheduling hassles, no noise, and no emissions - all for about half the cost of traditional contractors.",
  },
  {
    question: "Can I get same day lawn mowing near me?",
    answer:
      "Yes! With SweatyJob's robot mowing service, your lawn gets mowed every day automatically. Installation can often be scheduled same-day or within 24-48 hours in our service areas. Unlike traditional services that require scheduling and waiting, our robots work autonomously on your schedule.",
  },
  {
    question: "Where can I find lawn mowing equipment near me?",
    answer:
      "With SweatyJob's robot mowing service, you don't need to purchase any lawn mowing equipment. We provide the robot mower, installation, maintenance, and support all for $79/month. This eliminates the need to buy, store, maintain, or repair any lawn equipment yourself.",
  },
  {
    question: "Can I get online estimates for lawn mowing service near me?",
    answer:
      "Yes, SweatyJob provides instant online estimates for our robot mowing service. Simply visit our website, enter your address, and you'll immediately see if service is available in your area and the flat rate of $79/month for daily mowing (for lawns up to 1/2 acre).",
  },
]

// Career and opportunity FAQs
export const lawnCareerFAQs: FAQItem[] = [
  {
    question: "Are there lawn mowing gigs near me?",
    answer:
      "While there may be lawn mowing gigs available in your area, SweatyJob offers a more reliable and consistent solution. Our robot mowing service provides daily mowing for $79/month, eliminating the uncertainty and scheduling issues that often come with gig-based lawn services.",
  },
  {
    question: "Are there lawn mowing companies near me hiring?",
    answer:
      "SweatyJob is frequently expanding our service areas and hiring for installation technicians and maintenance specialists. Visit our careers page to see current openings in your area. We're revolutionizing the lawn care industry with our robot mowing technology.",
  },
  {
    question: "Are there lawn mowing jobs near me?",
    answer:
      "SweatyJob is frequently hiring for installation technicians and maintenance specialists as we expand our robot mowing service. Visit our careers page to see current openings. We offer competitive pay and the opportunity to work with cutting-edge lawn care technology.",
  },
  {
    question: "Are there lawn mowing jobs near me part time?",
    answer:
      "SweatyJob offers both full-time and part-time positions as we expand our robot mowing service. We frequently hire installation technicians and maintenance specialists on flexible schedules. Visit our careers page to see current part-time openings in your area.",
  },
  {
    question: "Where can I find local lawn mowing services near me?",
    answer:
      "SweatyJob provides robot mowing services in numerous locations nationwide. Our service is expanding rapidly to new areas. To check if we service your specific location, simply enter your address on our website for instant verification of availability.",
  },
]

// Add this new FAQ dataset after the existing FAQ datasets (after wetGrassMowingFAQs)

export const robotLawnmowerKeywordFAQs: FAQItem[] = [
  {
    question: "How much is a robot lawnmower?",
    answer:
      "Robot lawnmowers typically cost between $600-$3,500 to purchase outright, depending on features and lawn size capacity. However, with SweatyJob's subscription model, you can get a premium robot lawnmower service for just $79/month with no upfront equipment cost. This includes the robot mower, installation, maintenance, and support—making it the most affordable way to enjoy robot mowing technology.",
  },
  {
    question: "How to set up a robot lawnmower?",
    answer:
      "Setting up a robot lawnmower traditionally involves installing boundary wires, connecting the charging station, and programming the mower. With SweatyJob, we handle the entire setup process for you. Our professional installation ($249 one-time fee) includes property assessment, precision mapping with RTK positioning (no boundary wires needed), charging station setup, custom configuration, app setup, and training. Learn more about our <a href='/robots' class='text-yellow-500 hover:underline'>installation process</a>.",
  },
  {
    question: "How much does a robot lawnmower cost?",
    answer:
      "The cost of purchasing a robot lawnmower ranges from $600 for basic models to $3,500+ for advanced units with GPS and app control. With SweatyJob, you can access premium robot mowing technology for just $79/month with no large upfront investment. Our subscription includes the mower, professional installation (for a one-time $249 fee), maintenance, and automatic replacements if needed. View our <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>pricing details</a>.",
  },
  {
    question: "Which robot lawnmower is best?",
    answer:
      "The best robot lawnmower depends on your specific needs, but top models include Husqvarna Automower, WORX Landroid, and Robomow for their reliability and features. However, these require significant upfront investment ($1,500-$3,500) and self-maintenance. SweatyJob offers premium robot mowing technology with professional support for just $79/month, making it the best value option for most homeowners. Our service includes daily mowing, maintenance, and support without the high upfront cost.",
  },
  {
    question: "Is there a robot lawnmower for 2 acres?",
    answer:
      "Yes, there are robot lawnmowers designed for larger properties up to 2 acres, though they typically cost $2,500-$4,000 to purchase. SweatyJob's commercial-grade robot mowers can handle properties up to 1.5 acres per unit, and for larger properties like 2 acres, we can deploy multiple coordinated units. Our subscription model at $79/month (per unit) makes this advanced technology accessible without the large upfront investment. Contact us for a <a href='/commercial' class='text-yellow-500 hover:underline'>custom quote</a> for your 2-acre property.",
  },
  {
    question: "Are there robot lawnmowers for small gardens?",
    answer:
      "Yes, there are many robot lawnmowers designed specifically for small gardens, typically costing $600-$1,200 to purchase. SweatyJob's robot mowing service is perfect for small gardens, providing daily mowing at $79/month with no large upfront cost. Our robots are compact, quiet, and efficient, making them ideal for small urban or suburban gardens where noise and space are concerns. The daily mowing creates a denser, healthier lawn even in small spaces.",
  },
  {
    question: "Where can I find robot lawnmowers for sale?",
    answer:
      "Robot lawnmowers are available for sale at home improvement stores like Home Depot and Lowe's, as well as online retailers like Amazon. However, purchasing outright means paying $600-$3,500 upfront plus handling all maintenance yourself. SweatyJob offers a more affordable alternative with our $79/month subscription service that includes the robot mower, maintenance, and support with no large upfront cost. <a href='/purchase/smart-yard' class='text-yellow-500 hover:underline'>Learn more</a> about our service.",
  },
  {
    question: "Are there robot lawnmowers without wires?",
    answer:
      "Yes, newer advanced robot lawnmowers like SweatyJob's use GPS, RTK positioning, and computer vision to navigate without physical boundary wires. These wire-free systems are more convenient as they eliminate wire installation and maintenance issues. While wire-free models typically cost $2,000-$3,500 to purchase outright, SweatyJob offers this advanced technology for just $79/month with our subscription service. Learn more about our <a href='/robots' class='text-yellow-500 hover:underline'>wire-free technology</a>.",
  },
  {
    question: "How do robot lawnmowers handle dog poop?",
    answer:
      "Most robot lawnmowers, including SweatyJob's, have obstacle detection sensors but cannot specifically identify dog waste. It's recommended to pick up pet waste before mowing to prevent spreading and potential damage to the mower blades. SweatyJob's daily mowing schedule makes this easier as you'll likely notice waste before the robot encounters it. Some of our customers pair our service with pet waste removal services for a completely hands-off lawn care experience.",
  },
  {
    question: "Are there robot lawnmowers with grass collection?",
    answer:
      "Traditional robot lawnmowers, including SweatyJob's, don't collect grass clippings. Instead, they operate on the mulching principle, cutting grass into tiny clippings that quickly decompose and act as natural fertilizer for your lawn. This daily micro-cutting approach is actually better for lawn health than collection, as it returns nutrients to the soil and promotes thicker, more resilient turf. The clippings are so fine they're virtually invisible, leaving your lawn looking clean and manicured.",
  },
]
