import {
  Sprout,
  Bug,
  Droplets,
  Flower2,
  TreePine,
  Waves,
  Paintbrush,
  Snowflake,
  Sun,
  Lightbulb,
  RouteIcon as Road,
  Droplet,
} from "lucide-react"

export const serviceVerticalsData = {
  "lawn-care": {
    title: "Lawn Care",
    slug: "lawn-care",
    description:
      "Transform your lawn care business with AI mowing technology. Increase recurring revenue and reduce customer churn. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Sprout className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/lawn-care-pro.jpg",
    benefits: [
      {
        title: "Recurring Revenue",
        description: "Transform your seasonal business into a year-round revenue generator.",
        points: [
          "Convert one-time customers into monthly subscribers",
          "Create predictable cash flow throughout the year",
          "Increase customer lifetime value by 3-5x",
          "Reduce seasonal revenue fluctuations",
        ],
      },
      {
        title: "Competitive Advantage",
        description: "Stand out from traditional lawn care companies with cutting-edge technology.",
        points: [
          "Offer services your competitors can't match",
          "Attract premium customers willing to pay for innovation",
          "Position your business as a technology leader",
          "Create barriers to entry for competitors",
        ],
      },
    ],
    integration: {
      title: "Seamless Integration",
      description:
        "Our AI mowers complement your existing lawn care services perfectly, creating a complete lawn solution.",
      points: [
        "We provide comprehensive training on AI mower setup and maintenance",
        "Your technicians can perform basic mower maintenance during regular lawn care visits",
        "Customers get a complete lawn solution with a single monthly payment",
        "We handle the technology, warranty, and support while you focus on growing your business",
      ],
    },
    faqs: [
      {
        question: "How do AI mowers integrate with my existing lawn care services?",
        answer:
          "Our AI mowers complement your existing services by handling the routine mowing while your team focuses on specialized treatments, edging, and other services that add value. The mowers work continuously between your scheduled visits, ensuring the lawn always looks its best.",
      },
      {
        question: "What training do my technicians need to maintain AI mowers?",
        answer:
          "We provide comprehensive training for your team that typically takes just one day. Your technicians will learn basic maintenance, troubleshooting, and how to optimize mower performance. Most lawn care professionals find that their existing skills transfer easily to AI mower maintenance.",
      },
      {
        question: "How much can AI mowers increase my company's recurring revenue?",
        answer:
          "Lawn care businesses that add AI mowing services typically see a 30-50% increase in monthly recurring revenue per customer. The subscription model creates year-round income stability, even during traditionally slow seasons.",
      },
      {
        question: "What lawn sizes work best with AI mowing technology?",
        answer:
          "Our AI mowers are ideal for properties between 0.25 and 1.5 acres, which covers most residential properties. For larger properties, multiple mowers can be deployed or combined with traditional mowing for outlying areas.",
      },
      {
        question: "How do I explain the benefits of AI mowing to my customers?",
        answer:
          "We provide comprehensive marketing materials that highlight the key benefits: consistently perfect lawn height, reduced noise pollution, zero emissions, and more time to enjoy their outdoor space. Most customers appreciate the technology's environmental benefits and the improved lawn health from frequent, light cutting.",
      },
    ],
  },
  "pest-control": {
    title: "Pest Control",
    slug: "pest-control",
    description:
      "Expand your pest control business with AI mowing technology. Create bundled services and increase customer retention. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Bug className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/pest-control-pro.jpg",
    benefits: [
      {
        title: "Increased Customer Value",
        description: "Boost your average revenue per customer with complementary services.",
        points: [
          "Increase monthly recurring revenue by 30-50%",
          "Create natural upsell opportunities during pest control visits",
          "Reduce customer acquisition costs with bundled services",
          "Maximize lifetime value of each customer relationship",
        ],
      },
      {
        title: "Reduced Customer Churn",
        description: "Keep customers longer by solving multiple outdoor problems.",
        points: [
          "Decrease cancellation rates by creating multiple service touchpoints",
          "Increase switching costs for customers considering competitors",
          "Build stronger customer relationships through expanded services",
          "Create year-round value beyond seasonal pest control needs",
        ],
      },
    ],
    integration: {
      title: "Perfect Pairing",
      description:
        "AI mowing technology complements pest control services by maintaining a well-groomed yard that reduces pest habitats.",
      points: [
        "Regular mowing reduces tick and mosquito populations by eliminating tall grass habitats",
        "Your technicians can check mowers during regular pest control visits",
        "Customers get comprehensive outdoor care with a single provider",
        "We handle the technology while you focus on pest control expertise",
      ],
    },
    faqs: [
      {
        question: "How does AI mowing help with pest control?",
        answer:
          "Regular mowing at the optimal height reduces habitats for ticks, fleas, and other pests that thrive in tall grass. AI mowers cut grass frequently, maintaining a consistent height that discourages pest populations and makes your treatments more effective.",
      },
      {
        question: "Can my technicians service both the AI mowers and perform pest treatments?",
        answer:
          "Absolutely. We provide training so your technicians can perform basic mower maintenance during their regular pest control visits. This creates an efficient service model where a single visit can address both needs.",
      },
      {
        question: "How do I bundle AI mowing with my pest control services?",
        answer:
          "We provide flexible pricing models that allow you to create bundled packages. Most pest control companies offer tiered service plans that include regular pest treatments plus AI mowing maintenance at a combined rate that provides value to customers while increasing your monthly revenue.",
      },
      {
        question: "Are AI mowers safe to use with pest control treatments?",
        answer:
          "Yes. Our AI mowers are designed to work safely alongside professional pest control treatments. We recommend a simple schedule where treatments are applied after mowing cycles, allowing proper drying time before the mower resumes operation.",
      },
      {
        question: "How much can adding AI mowing services reduce customer cancellations?",
        answer:
          "Pest control companies that add AI mowing services typically see a 30-40% reduction in customer cancellation rates. When customers receive multiple services from a single provider, they're less likely to switch, especially when both services deliver consistent results.",
      },
    ],
  },
  "mosquito-control": {
    title: "Mosquito Control",
    slug: "mosquito-control",
    description:
      "Enhance your mosquito control business with AI mowing. Create a complete outdoor living solution that keeps customers longer. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Droplets className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/mosquito-control-pro.jpg",
    benefits: [
      {
        title: "Year-Round Engagement",
        description: "Maintain customer relationships beyond mosquito season.",
        points: [
          "Create recurring revenue during off-season months",
          "Reduce seasonal business fluctuations",
          "Maintain customer touchpoints year-round",
          "Increase annual customer value by 2-3x",
        ],
      },
      {
        title: "Enhanced Effectiveness",
        description: "Improve mosquito control results with consistent lawn maintenance.",
        points: [
          "Regular mowing reduces mosquito breeding grounds",
          "Consistent lawn height improves treatment effectiveness",
          "Provide customers with comprehensive mosquito prevention",
          "Create a complete outdoor living solution",
        ],
      },
    ],
    integration: {
      title: "Complementary Services",
      description:
        "AI mowing and mosquito control work together perfectly to create a more enjoyable outdoor environment.",
      points: [
        "Technicians can maintain mowers during regular mosquito treatment visits",
        "Both services target the same customer pain point: enjoying outdoor spaces",
        "Customers get a complete outdoor solution with a single monthly payment",
        "We handle the technology while you focus on mosquito control expertise",
      ],
    },
    faqs: [
      {
        question: "How does AI mowing complement mosquito control services?",
        answer:
          "AI mowers maintain grass at the optimal height, eliminating tall grass where mosquitoes rest during the day. This consistent maintenance reduces mosquito habitats and improves the effectiveness of your treatments by ensuring better coverage and penetration.",
      },
      {
        question: "How can I generate revenue during the off-season with AI mowing?",
        answer:
          "While mosquito treatments may be seasonal, AI mowing services continue year-round in most climates. This creates consistent monthly revenue even during months when mosquito treatments aren't needed, helping to stabilize your business finances.",
      },
      {
        question: "What's the best way to package AI mowing with mosquito control?",
        answer:
          "Most successful mosquito control companies offer tiered packages: a basic mosquito-only plan, and premium packages that include both mosquito treatments and AI mowing services. This allows customers to choose their level of outdoor protection while maximizing your revenue potential.",
      },
      {
        question: "How do AI mowers affect the application of mosquito treatments?",
        answer:
          "Our AI mowers work harmoniously with mosquito treatments. We recommend a simple schedule where treatments are applied after mowing cycles, allowing proper drying time before the mower resumes operation. This ensures maximum effectiveness of both services.",
      },
      {
        question: "What training do my technicians need to maintain AI mowers?",
        answer:
          "We provide a comprehensive one-day training program for your team. Your technicians will learn basic maintenance, troubleshooting, and optimization techniques. Most mosquito control professionals find that their existing technical skills transfer easily to AI mower maintenance.",
      },
    ],
  },
  "irrigation-sprinklers": {
    title: "Irrigation & Sprinklers",
    slug: "irrigation-sprinklers",
    description:
      "Combine irrigation expertise with AI mowing technology. Create a complete lawn care system that maximizes efficiency and customer satisfaction. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Droplet className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/irrigation-pro.jpg",
    benefits: [
      {
        title: "Smart Lawn Ecosystem",
        description: "Create a complete smart lawn system that maximizes efficiency.",
        points: [
          "Offer customers a fully automated outdoor solution",
          "Coordinate watering and mowing schedules for optimal lawn health",
          "Position your business as a complete lawn technology provider",
          "Create a premium service tier with higher margins",
        ],
      },
      {
        title: "Increased Service Frequency",
        description: "Transform seasonal check-ups into regular service opportunities.",
        points: [
          "Create monthly service visits instead of seasonal check-ups",
          "Increase touchpoints for upselling additional services",
          "Build stronger customer relationships through regular contact",
          "Generate consistent monthly revenue beyond irrigation installations",
        ],
      },
    ],
    integration: {
      title: "Technology Synergy",
      description:
        "AI mowing and smart irrigation systems work together to create a completely automated lawn care solution.",
      points: [
        "Technicians can maintain both systems during the same visit",
        "Both technologies appeal to the same tech-savvy homeowners",
        "Create a complete smart lawn ecosystem with coordinated maintenance",
        "We handle the mower technology while you focus on irrigation expertise",
      ],
    },
    faqs: [
      {
        question: "How do AI mowers work with irrigation systems?",
        answer:
          "AI mowers and irrigation systems complement each other perfectly in a smart lawn ecosystem. The mowers can be programmed to operate at optimal times relative to watering schedules, ensuring the grass is dry when mowed and that newly watered areas have time to absorb moisture properly.",
      },
      {
        question: "Can my irrigation technicians also service AI mowers?",
        answer:
          "Yes. We provide comprehensive training for your technicians that typically takes just one day. Your team will learn basic maintenance, troubleshooting, and optimization techniques. Most irrigation professionals find that their existing technical skills transfer easily to AI mower maintenance.",
      },
      {
        question: "How do I create a complete smart lawn package for my customers?",
        answer:
          "We provide flexible business models that allow you to create bundled packages combining smart irrigation control and AI mowing services. Most companies offer tiered service plans that include regular irrigation maintenance plus AI mowing at a combined rate that provides value to customers while increasing your monthly revenue.",
      },
      {
        question: "What's the advantage of offering both services together?",
        answer:
          "Offering both services creates a complete smart lawn solution that maximizes efficiency and results. Customers benefit from properly coordinated watering and mowing schedules, optimized for their specific lawn conditions. For your business, it creates higher-value customers, increased retention rates, and more consistent revenue.",
      },
      {
        question: "How much can adding AI mowing increase my company's recurring revenue?",
        answer:
          "Irrigation companies that add AI mowing services typically see a 40-60% increase in monthly recurring revenue per customer. The subscription model creates year-round income stability, transforming seasonal check-ups into regular monthly service visits.",
      },
    ],
  },
  "landscape-design": {
    title: "Landscape Design",
    slug: "landscape-design",
    description:
      "Expand your landscape design business with AI mowing technology. Create ongoing relationships after installation projects are complete. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Flower2 className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/landscape-design-pro.jpg",
    benefits: [
      {
        title: "Project to Subscription",
        description: "Transform one-time projects into ongoing customer relationships.",
        points: [
          "Convert installation clients to monthly maintenance subscribers",
          "Create predictable recurring revenue beyond project work",
          "Maintain relationships for future landscape projects",
          "Increase lifetime customer value by 3-5x",
        ],
      },
      {
        title: "Design Integration",
        description: "Incorporate AI mowing technology directly into your landscape designs.",
        points: [
          "Design landscapes optimized for AI mower performance",
          "Create a competitive advantage with technology-forward designs",
          "Offer complete solutions that include both design and maintenance",
          "Increase project values by including AI mower installation",
        ],
      },
    ],
    integration: {
      title: "Complete Solution",
      description: "AI mowing technology allows you to offer both beautiful landscape design and ongoing maintenance.",
      points: [
        "Design landscapes with AI mowing in mind for optimal performance",
        "Include AI mower setup as part of landscape installation projects",
        "Offer maintenance packages to keep landscapes looking their best",
        "We handle the technology while you focus on creating beautiful outdoor spaces",
      ],
    },
    faqs: [
      {
        question: "How can I incorporate AI mowing into my landscape designs?",
        answer:
          "You can design landscapes with AI mowing in mind by creating clean, flowing lines and avoiding extremely narrow passages. Our AI mowers work well with most landscape features including slopes up to 35 degrees, garden beds, and water features. We provide design guidelines that help you create beautiful landscapes that work perfectly with our technology.",
      },
      {
        question: "How do I transition from project-based work to recurring revenue?",
        answer:
          "After completing a landscape installation, offer clients an AI mowing maintenance package. This creates ongoing monthly revenue and maintains your relationship with the client. Most landscape designers find that 60-70% of installation clients will add a maintenance package when presented with the convenience and benefits.",
      },
      {
        question: "What training do my installation team members need?",
        answer:
          "We provide comprehensive training for your team that typically takes just one day. Your technicians will learn proper installation, setup, and basic maintenance. Most landscape professionals find that their existing skills transfer easily to AI mower installation and maintenance.",
      },
      {
        question: "How does AI mowing affect the types of plants and features I can include in designs?",
        answer:
          "Our AI mowers work harmoniously with most landscape elements. You can still incorporate garden beds, water features, pathways, and most plants. The main consideration is ensuring adequate space for the mower to navigate between features, typically a minimum of 24 inches for passages.",
      },
      {
        question: "Can I increase my project values by including AI mower installation?",
        answer:
          "Absolutely. Landscape designers who include AI mower technology in their projects typically see a 15-25% increase in overall project value. Clients appreciate the comprehensive solution that includes both beautiful design and ongoing maintenance technology.",
      },
    ],
  },
  "tree-care": {
    title: "Tree Care",
    slug: "tree-care",
    description:
      "Expand your tree care business with AI mowing technology. Create comprehensive property care packages that increase service frequency. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <TreePine className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/tree-care-pro.jpg",
    benefits: [
      {
        title: "Increased Visit Frequency",
        description: "Transform quarterly visits into monthly service opportunities.",
        points: [
          "Create regular touchpoints between major tree services",
          "Increase opportunities for tree health assessments",
          "Build stronger customer relationships through consistent contact",
          "Generate steady monthly revenue between seasonal tree work",
        ],
      },
      {
        title: "Complete Property Care",
        description: "Offer customers a comprehensive outdoor maintenance solution.",
        points: [
          "Position your business as a complete property care provider",
          "Create bundled packages that include tree care and lawn maintenance",
          "Increase customer convenience with a single provider for outdoor needs",
          "Reduce customer acquisition costs through expanded services",
        ],
      },
    ],
    integration: {
      title: "Natural Extension",
      description:
        "AI mowing complements tree care services by maintaining the areas around trees and throughout the property.",
      points: [
        "Technicians can check mowers during regular tree care visits",
        "AI mowers help maintain clean, accessible areas around trees",
        "Customers get comprehensive outdoor care with a single provider",
        "We handle the mower technology while you focus on tree health expertise",
      ],
    },
    faqs: [
      {
        question: "How do AI mowers work around trees and root systems?",
        answer:
          "Our AI mowers are designed to navigate carefully around trees and their root systems. The mowers use advanced sensors to detect obstacles and adjust their path accordingly, maintaining a safe distance from tree trunks while effectively cutting the grass around them.",
      },
      {
        question: "Can my arborists also service AI mowers?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your arborists will learn basic maintenance, troubleshooting, and optimization techniques. Most tree care professionals find that their existing technical skills transfer easily to AI mower maintenance.",
      },
      {
        question: "How does AI mowing help with tree health?",
        answer:
          "Regular mowing at the optimal height helps maintain healthy growing conditions around trees. The mowers mulch grass clippings, returning nutrients to the soil that benefit both the lawn and trees. Additionally, consistent mowing helps identify early signs of tree issues that might otherwise go unnoticed.",
      },
      {
        question: "What's the best way to package AI mowing with tree care services?",
        answer:
          "Most successful tree care companies offer tiered packages: basic tree-only services, and premium packages that include both tree care and AI mowing maintenance. This allows customers to choose their level of property care while maximizing your revenue potential.",
      },
      {
        question: "How much can adding AI mowing increase my company's service frequency?",
        answer:
          "Tree care companies that add AI mowing services typically transform quarterly or seasonal visits into monthly touchpoints. This increases service frequency by 3-4x, creating more opportunities to identify additional tree care needs and strengthen customer relationships.",
      },
    ],
  },
  "pool-spa-maintenance": {
    title: "Pool & Spa Maintenance",
    slug: "pool-spa-maintenance",
    description:
      "Expand your pool and spa business with AI mowing technology. Create complete outdoor living packages that increase customer value. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Waves className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/pool-spa-pro.jpg",
    benefits: [
      {
        title: "Complete Outdoor Living",
        description: "Offer customers a comprehensive outdoor maintenance solution.",
        points: [
          "Create a one-stop solution for complete backyard maintenance",
          "Increase average revenue per customer by 30-50%",
          "Reduce customer acquisition costs through expanded services",
          "Position your business as a complete outdoor living specialist",
        ],
      },
      {
        title: "Operational Efficiency",
        description: "Leverage your existing service routes and customer base.",
        points: [
          "Increase revenue per stop without significantly increasing service time",
          "Utilize the same service visits for both pool and mower maintenance",
          "Reduce travel time and costs by servicing multiple needs at once",
          "Leverage your existing scheduling and routing systems",
        ],
      },
    ],
    integration: {
      title: "Perfect Pairing",
      description: "AI mowing technology complements pool and spa services by maintaining the surrounding landscape.",
      points: [
        "Technicians can check mowers during regular pool service visits",
        "Both services target the same customer pain point: enjoying outdoor spaces",
        "Customers get a complete outdoor solution with a single monthly payment",
        "We handle the mower technology while you focus on pool and spa expertise",
      ],
    },
    faqs: [
      {
        question: "How do AI mowers complement pool and spa services?",
        answer:
          "AI mowers maintain the lawn areas surrounding pools and spas, creating a complete outdoor living solution. While you maintain water quality and equipment, the AI mower ensures the surrounding landscape looks pristine. This comprehensive approach increases property enjoyment and customer satisfaction.",
      },
      {
        question: "Can my pool technicians also service AI mowers?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your pool technicians will learn basic maintenance, troubleshooting, and optimization techniques. Most pool professionals find that their existing technical skills transfer easily to AI mower maintenance.",
      },
      {
        question: "How do I create a complete outdoor living package for my customers?",
        answer:
          "We provide flexible business models that allow you to create bundled packages combining pool maintenance and AI mowing services. Most companies offer tiered service plans that include regular pool care plus AI mowing at a combined rate that provides value to customers while increasing your monthly revenue.",
      },
      {
        question: "How much additional time does AI mower maintenance add to a pool service visit?",
        answer:
          "Basic AI mower maintenance typically adds only 5-10 minutes to a regular pool service visit. Your technicians can quickly check the mower's status, clean sensors if needed, and ensure proper operation while they're already on site for pool maintenance.",
      },
      {
        question: "How much can adding AI mowing increase my company's revenue per customer?",
        answer:
          "Pool and spa companies that add AI mowing services typically see a 30-50% increase in monthly revenue per customer. This significant boost comes with minimal additional service time, dramatically improving your profitability per service stop.",
      },
    ],
  },
  "pressure-washing": {
    title: "Pressure Washing",
    slug: "pressure-washing",
    description:
      "Transform your pressure washing business with AI mowing technology. Convert one-time jobs into recurring revenue streams. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Droplets className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/pressure-washing-pro.jpg",
    benefits: [
      {
        title: "Job to Subscription",
        description: "Transform one-time pressure washing jobs into monthly recurring revenue.",
        points: [
          "Convert one-time customers into monthly subscribers",
          "Create predictable cash flow throughout the year",
          "Increase customer lifetime value by 3-5x",
          "Reduce seasonal revenue fluctuations",
        ],
      },
      {
        title: "Increased Service Frequency",
        description: "Create more frequent customer touchpoints between pressure washing services.",
        points: [
          "Maintain regular contact with customers between pressure washing jobs",
          "Increase opportunities for identifying additional service needs",
          "Build stronger customer relationships through consistent contact",
          "Generate steady monthly revenue between seasonal pressure washing",
        ],
      },
    ],
    integration: {
      title: "Complementary Services",
      description: "AI mowing and pressure washing work together to maintain a property's appearance and value.",
      points: [
        "Both services focus on property appearance and maintenance",
        "Technicians can check mowers during pressure washing visits",
        "Customers get comprehensive property care with a single provider",
        "We handle the mower technology while you focus on pressure washing expertise",
      ],
    },
    faqs: [
      {
        question: "How can AI mowing help my pressure washing business become more stable?",
        answer:
          "AI mowing provides consistent monthly recurring revenue between pressure washing jobs, which are typically seasonal or periodic. This creates financial stability and predictable cash flow throughout the year, reducing the feast-or-famine cycles common in pressure washing businesses.",
      },
      {
        question: "How do I transition pressure washing customers to monthly subscriptions?",
        answer:
          "After completing a pressure washing job, offer clients an AI mowing maintenance package. This creates ongoing monthly revenue and maintains your relationship with the client. Most pressure washing companies find that 40-50% of one-time customers will consider a maintenance package when presented with the convenience and benefits.",
      },
      {
        question: "Can my pressure washing technicians also service AI mowers?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your technicians will learn basic maintenance, troubleshooting, and optimization techniques. Most pressure washing professionals find that their existing technical skills transfer easily to AI mower maintenance.",
      },
      {
        question: "What's the best way to package AI mowing with pressure washing services?",
        answer:
          "Most successful pressure washing companies offer tiered packages: one-time pressure washing services, and premium packages that include both periodic pressure washing and ongoing AI mowing maintenance. This allows customers to choose their level of property care while maximizing your revenue potential.",
      },
      {
        question: "How much can adding AI mowing increase my company's annual customer value?",
        answer:
          "Pressure washing companies that add AI mowing services typically see a 200-300% increase in annual customer value. Converting a customer from a one-time $300 pressure washing job to a $100-150 monthly subscription dramatically increases their lifetime value to your business.",
      },
    ],
  },
  "gutter-cleaning": {
    title: "Gutter Cleaning",
    slug: "gutter-cleaning",
    description:
      "Expand your gutter cleaning business with AI mowing technology. Create year-round relationships with seasonal customers. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Droplets className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/gutter-cleaning-pro.jpg",
    benefits: [
      {
        title: "Year-Round Engagement",
        description: "Maintain customer relationships between seasonal gutter cleanings.",
        points: [
          "Create recurring revenue during off-season months",
          "Reduce seasonal business fluctuations",
          "Maintain customer touchpoints year-round",
          "Increase annual customer value by 2-3x",
        ],
      },
      {
        title: "Complete Property Care",
        description: "Offer customers a more comprehensive property maintenance solution.",
        points: [
          "Position your business as a complete property care provider",
          "Create bundled packages that include gutter cleaning and lawn maintenance",
          "Increase customer convenience with a single provider for outdoor needs",
          "Reduce customer acquisition costs through expanded services",
        ],
      },
    ],
    integration: {
      title: "Natural Extension",
      description: "AI mowing complements gutter cleaning by maintaining the property between seasonal services.",
      points: [
        "Technicians can check gutters during regular mower maintenance visits",
        "Both services focus on property maintenance and protection",
        "Customers get comprehensive property care with a single provider",
        "We handle the mower technology while you focus on gutter expertise",
      ],
    },
    faqs: [
      {
        question: "How can AI mowing help my seasonal gutter cleaning business?",
        answer:
          "AI mowing provides consistent monthly recurring revenue between seasonal gutter cleaning jobs. This creates financial stability and predictable cash flow throughout the year, reducing the feast-or-famine cycles common in gutter cleaning businesses.",
      },
      {
        question: "How do I transition gutter cleaning customers to monthly subscriptions?",
        answer:
          "After completing a gutter cleaning job, offer clients an AI mowing maintenance package. This creates ongoing monthly revenue and maintains your relationship with the client. Most gutter cleaning companies find that 40-50% of seasonal customers will consider a maintenance package when presented with the convenience and benefits.",
      },
      {
        question: "Can my gutter cleaning technicians also service AI mowers?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your technicians will learn basic maintenance, troubleshooting, and optimization techniques. Most gutter cleaning professionals find that their existing technical skills transfer easily to AI mower maintenance.",
      },
      {
        question: "How does AI mowing affect gutter maintenance?",
        answer:
          "AI mowers mulch grass clippings finely and distribute them back into the lawn as natural fertilizer. This reduces the amount of debris that might otherwise end up in gutters, potentially extending the time between necessary cleanings and improving overall gutter function.",
      },
      {
        question: "How much can adding AI mowing increase my company's annual revenue?",
        answer:
          "Gutter cleaning companies that add AI mowing services typically see a 150-200% increase in annual revenue. Converting seasonal customers to year-round subscribers dramatically increases their lifetime value and creates stable income during traditionally slow periods.",
      },
    ],
  },
  "window-washing": {
    title: "Window Washing",
    slug: "window-washing",
    description:
      "Expand your window washing business with AI mowing technology. Create comprehensive property care packages that increase service frequency. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Droplets className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/window-washing-pro.jpg",
    benefits: [
      {
        title: "Increased Visit Frequency",
        description: "Transform quarterly visits into monthly service opportunities.",
        points: [
          "Create regular touchpoints between window washing services",
          "Increase opportunities for identifying additional service needs",
          "Build stronger customer relationships through consistent contact",
          "Generate steady monthly revenue between window washing jobs",
        ],
      },
      {
        title: "Complete Property Care",
        description: "Offer customers a comprehensive property maintenance solution.",
        points: [
          "Position your business as a complete property care provider",
          "Create bundled packages that include window washing and lawn maintenance",
          "Increase customer convenience with a single provider for outdoor needs",
          "Reduce customer acquisition costs through expanded services",
        ],
      },
    ],
    integration: {
      title: "Complementary Services",
      description: "AI mowing and window washing work together to maintain a property's appearance and value.",
      points: [
        "Both services focus on property appearance and maintenance",
        "Technicians can check mowers during window washing visits",
        "Customers get comprehensive property care with a single provider",
        "We handle the mower technology while you focus on window washing expertise",
      ],
    },
    faqs: [
      {
        question: "How can AI mowing complement my window washing business?",
        answer:
          "AI mowing provides consistent property maintenance between window washing services, creating a complete property care solution. While window washing enhances visibility and curb appeal, AI mowing maintains the surrounding landscape, ensuring the entire property looks its best year-round.",
      },
      {
        question: "How do I transition window washing customers to monthly subscriptions?",
        answer:
          "After completing a window washing job, offer clients an AI mowing maintenance package. This creates ongoing monthly revenue and maintains your relationship with the client. Most window washing companies find that 35-45% of periodic customers will consider a maintenance package when presented with the convenience and benefits.",
      },
      {
        question: "Can my window washing technicians also service AI mowers?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your technicians will learn basic maintenance, troubleshooting, and optimization techniques. Most window washing professionals find that their existing technical skills transfer easily to AI mower maintenance.",
      },
      {
        question: "What's the best way to package AI mowing with window washing services?",
        answer:
          "Most successful window washing companies offer tiered packages: periodic window-only services, and premium packages that include both scheduled window washing and ongoing AI mowing maintenance. This allows customers to choose their level of property care while maximizing your revenue potential.",
      },
      {
        question: "How much can adding AI mowing increase my company's service frequency?",
        answer:
          "Window washing companies that add AI mowing services typically transform quarterly or seasonal visits into monthly touchpoints. This increases service frequency by 3-4x, creating more opportunities to identify additional service needs and strengthen customer relationships.",
      },
    ],
  },
  "exterior-painting": {
    title: "Exterior Painting",
    slug: "exterior-painting",
    description:
      "Expand your exterior painting business with AI mowing technology. Create ongoing relationships after painting projects are complete. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Paintbrush className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/exterior-painting-pro.jpg",
    benefits: [
      {
        title: "Project to Subscription",
        description: "Transform one-time projects into ongoing customer relationships.",
        points: [
          "Convert painting clients to monthly maintenance subscribers",
          "Create predictable recurring revenue beyond project work",
          "Maintain relationships for future painting projects",
          "Increase lifetime customer value by 3-5x",
        ],
      },
      {
        title: "Property Value Protection",
        description: "Help customers protect and maintain their painting investment.",
        points: [
          "Offer a complete property care package that protects paint longevity",
          "Position your business as invested in long-term property value",
          "Create a compelling value proposition beyond just painting",
          "Reduce customer acquisition costs through expanded services",
        ],
      },
    ],
    integration: {
      title: "Natural Extension",
      description:
        "AI mowing complements exterior painting by maintaining the property's appearance between painting projects.",
      points: [
        "Both services focus on property appearance and value",
        "Regular property maintenance helps protect painting investments",
        "Customers get comprehensive property care with a single provider",
        "We handle the mower technology while you focus on painting expertise",
      ],
    },
    faqs: [
      {
        question: "How can AI mowing help my exterior painting business?",
        answer:
          "AI mowing creates ongoing relationships with clients after painting projects are complete. Instead of waiting 5-7 years for a repaint, you can generate monthly recurring revenue from the same customers through AI mowing services, while maintaining the relationship for future painting work.",
      },
      {
        question: "How do I transition painting customers to monthly subscriptions?",
        answer:
          "After completing a painting project, offer clients an AI mowing maintenance package. This creates ongoing monthly revenue and maintains your relationship with the client. Most painting companies find that 30-40% of project customers will consider a maintenance package when presented with the convenience and benefits.",
      },
      {
        question: "Can my painting crew also handle AI mower installation?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your crew will learn proper installation, setup, and basic maintenance. Most painting professionals find that their existing skills transfer easily to AI mower installation and maintenance.",
      },
      {
        question: "How does regular lawn maintenance protect exterior paint?",
        answer:
          "Regular lawn maintenance prevents overgrown vegetation from contacting painted surfaces, which can cause moisture damage and premature paint failure. Additionally, a well-maintained lawn enhances the overall appearance of the property, showcasing your painting work in the best possible light.",
      },
      {
        question: "How much can adding AI mowing increase my company's annual revenue?",
        answer:
          "Exterior painting companies that add AI mowing services typically see a 25-35% increase in annual revenue. Converting even a portion of your one-time project customers to monthly subscribers creates a stable income stream between painting seasons and projects.",
      },
    ],
  },
  "holiday-lighting": {
    title: "Holiday Lighting",
    slug: "holiday-lighting",
    description:
      "Expand your holiday lighting business with AI mowing technology. Create year-round relationships with seasonal customers. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Lightbulb className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/holiday-lighting-pro.jpg",
    benefits: [
      {
        title: "Year-Round Engagement",
        description: "Maintain customer relationships beyond the holiday season.",
        points: [
          "Create recurring revenue during off-season months",
          "Reduce seasonal business fluctuations",
          "Maintain customer touchpoints year-round",
          "Increase annual customer value by 3-5x",
        ],
      },
      {
        title: "Complete Property Care",
        description: "Offer customers a more comprehensive property enhancement solution.",
        points: [
          "Position your business as a complete property care provider",
          "Create bundled packages that include holiday lighting and lawn maintenance",
          "Increase customer convenience with a single provider for outdoor needs",
          "Reduce customer acquisition costs through expanded services",
        ],
      },
    ],
    integration: {
      title: "Complementary Services",
      description: "AI mowing complements holiday lighting by maintaining the property throughout the year.",
      points: [
        "Both services focus on property appearance and enhancement",
        "Regular lawn maintenance creates a better canvas for holiday displays",
        "Customers get comprehensive property care with a single provider",
        "We handle the mower technology while you focus on lighting expertise",
      ],
    },
    faqs: [
      {
        question: "How can AI mowing help my seasonal holiday lighting business?",
        answer:
          "AI mowing provides consistent monthly recurring revenue during the 10-11 months when holiday lighting isn't active. This creates financial stability and predictable cash flow throughout the year, reducing the extreme seasonality common in holiday lighting businesses.",
      },
      {
        question: "How do I transition holiday lighting customers to year-round services?",
        answer:
          "After completing a holiday lighting installation, offer clients an AI mowing maintenance package for the coming year. This creates ongoing monthly revenue and maintains your relationship with the client. Most holiday lighting companies find that 30-40% of seasonal customers will consider a maintenance package when presented with the convenience and benefits.",
      },
      {
        question: "Can my lighting installation team also handle AI mower setup?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your crew will learn proper installation, setup, and basic maintenance. Most lighting professionals find that their existing technical skills transfer easily to AI mower installation and maintenance.",
      },
      {
        question: "How does AI mowing complement holiday lighting displays?",
        answer:
          "A well-maintained lawn creates the perfect canvas for holiday lighting displays. AI mowing ensures the property looks immaculate year-round, enhancing the visual impact of your holiday lighting installations and creating a complete property enhancement solution.",
      },
      {
        question: "How much can adding AI mowing increase my company's annual revenue?",
        answer:
          "Holiday lighting companies that add AI mowing services typically see a 200-300% increase in annual revenue. Converting seasonal customers to year-round subscribers dramatically increases their lifetime value and creates stable income during traditionally slow periods.",
      },
    ],
  },
  "outdoor-lighting": {
    title: "Outdoor Lighting",
    slug: "outdoor-lighting",
    description:
      "Expand your outdoor lighting business with AI mowing technology. Create comprehensive property enhancement packages. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Lightbulb className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/outdoor-lighting-pro.jpg",
    benefits: [
      {
        title: "Installation to Subscription",
        description: "Transform one-time installations into ongoing customer relationships.",
        points: [
          "Convert installation clients to monthly maintenance subscribers",
          "Create predictable recurring revenue beyond project work",
          "Maintain relationships for future lighting projects",
          "Increase lifetime customer value by 2-4x",
        ],
      },
      {
        title: "Complete Outdoor Enhancement",
        description: "Offer customers a comprehensive property enhancement solution.",
        points: [
          "Position your business as a complete outdoor living specialist",
          "Create bundled packages that include lighting and lawn maintenance",
          "Increase customer convenience with a single provider for outdoor needs",
          "Reduce customer acquisition costs through expanded services",
        ],
      },
    ],
    integration: {
      title: "Perfect Pairing",
      description: "AI mowing and outdoor lighting work together to enhance a property's appearance and usability.",
      points: [
        "Both services focus on property enhancement and outdoor living",
        "Regular lawn maintenance creates a better canvas for lighting designs",
        "Customers get comprehensive property care with a single provider",
        "We handle the mower technology while you focus on lighting expertise",
      ],
    },
    faqs: [
      {
        question: "How can AI mowing complement my outdoor lighting business?",
        answer:
          "AI mowing creates ongoing relationships with clients after lighting installations are complete. Instead of just collecting a one-time installation fee, you can generate monthly recurring revenue from the same customers through AI mowing services, while maintaining the relationship for future lighting upgrades.",
      },
      {
        question: "How do I transition lighting customers to monthly subscriptions?",
        answer:
          "After completing a lighting installation, offer clients an AI mowing maintenance package. This creates ongoing monthly revenue and maintains your relationship with the client. Most lighting companies find that 35-45% of installation customers will consider a maintenance package when presented with the convenience and benefits.",
      },
      {
        question: "Can my lighting installation team also handle AI mower setup?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your crew will learn proper installation, setup, and basic maintenance. Most lighting professionals find that their existing technical skills transfer easily to AI mower installation and maintenance.",
      },
      {
        question: "How does AI mowing enhance outdoor lighting?",
        answer:
          "A well-maintained lawn creates the perfect canvas for outdoor lighting designs. AI mowing ensures the property looks immaculate year-round, enhancing the visual impact of your lighting installations and creating a complete property enhancement solution.",
      },
      {
        question: "How much can adding AI mowing increase my company's annual revenue?",
        answer:
          "Outdoor lighting companies that add AI mowing services typically see a 40-60% increase in annual revenue. Converting even a portion of your one-time installation customers to monthly subscribers creates a stable income stream between lighting projects.",
      },
    ],
  },
  "driveway-sealing": {
    title: "Driveway Sealing",
    slug: "driveway-sealing",
    description:
      "Expand your driveway sealing business with AI mowing technology. Create year-round relationships with seasonal customers. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Road className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/driveway-sealing-pro.jpg",
    benefits: [
      {
        title: "Year-Round Engagement",
        description: "Maintain customer relationships between seasonal driveway services.",
        points: [
          "Create recurring revenue during off-season months",
          "Reduce seasonal business fluctuations",
          "Maintain customer touchpoints year-round",
          "Increase annual customer value by 2-4x",
        ],
      },
      {
        title: "Complete Property Care",
        description: "Offer customers a more comprehensive property maintenance solution.",
        points: [
          "Position your business as a complete property care provider",
          "Create bundled packages that include driveway maintenance and lawn care",
          "Increase customer convenience with a single provider for outdoor needs",
          "Reduce customer acquisition costs through expanded services",
        ],
      },
    ],
    integration: {
      title: "Complementary Services",
      description: "AI mowing complements driveway sealing by maintaining the property between seasonal services.",
      points: [
        "Both services focus on property maintenance and curb appeal",
        "Regular lawn maintenance enhances the appearance of sealed driveways",
        "Customers get comprehensive property care with a single provider",
        "We handle the mower technology while you focus on driveway expertise",
      ],
    },
    faqs: [
      {
        question: "How can AI mowing help my seasonal driveway sealing business?",
        answer:
          "AI mowing provides consistent monthly recurring revenue between seasonal driveway sealing jobs. This creates financial stability and predictable cash flow throughout the year, reducing the feast-or-famine cycles common in driveway sealing businesses.",
      },
      {
        question: "How do I transition driveway sealing customers to monthly subscriptions?",
        answer:
          "After completing a driveway sealing job, offer clients an AI mowing maintenance package. This creates ongoing monthly revenue and maintains your relationship with the client. Most driveway sealing companies find that 35-45% of seasonal customers will consider a maintenance package when presented with the convenience and benefits.",
      },
      {
        question: "Can my driveway sealing crew also handle AI mower setup?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your crew will learn proper installation, setup, and basic maintenance. Most driveway professionals find that their existing skills transfer easily to AI mower installation and maintenance.",
      },
      {
        question: "How does AI mowing complement driveway sealing services?",
        answer:
          "A well-maintained lawn enhances the appearance of a freshly sealed driveway. AI mowing ensures the entire property looks immaculate, maximizing the visual impact of your driveway work and creating a complete property maintenance solution that increases overall curb appeal.",
      },
      {
        question: "How much can adding AI mowing increase my company's annual revenue?",
        answer:
          "Driveway sealing companies that add AI mowing services typically see a 150-200% increase in annual revenue. Converting seasonal customers to year-round subscribers dramatically increases their lifetime value and creates stable income during traditionally slow periods.",
      },
    ],
  },
  "snow-removal": {
    title: "Snow Removal",
    slug: "snow-removal",
    description:
      "Expand your snow removal business with AI mowing technology. Create year-round relationships with winter customers. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Snowflake className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/snow-removal-pro.jpg",
    benefits: [
      {
        title: "Year-Round Revenue",
        description: "Transform your winter business into a year-round operation.",
        points: [
          "Create recurring revenue during non-winter months",
          "Eliminate seasonal business fluctuations",
          "Maintain customer relationships throughout the year",
          "Increase annual customer value by 3-5x",
        ],
      },
      {
        title: "Equipment Utilization",
        description: "Maximize the use of your existing equipment and team.",
        points: [
          "Keep your team employed year-round",
          "Utilize your existing customer base for new services",
          "Leverage your existing routing and scheduling systems",
          "Reduce customer acquisition costs through expanded services",
        ],
      },
    ],
    integration: {
      title: "Seasonal Complement",
      description: "AI mowing perfectly complements snow removal by providing summer services to winter customers.",
      points: [
        "Provide complete year-round property maintenance",
        "Use the same team and systems for both services",
        "Customers get comprehensive property care with a single provider",
        "We handle the mower technology while you focus on snow removal expertise",
      ],
    },
    faqs: [
      {
        question: "How can AI mowing help my seasonal snow removal business?",
        answer:
          "AI mowing provides consistent monthly recurring revenue during the non-winter months. This creates financial stability and predictable cash flow throughout the year, eliminating the extreme seasonality common in snow removal businesses.",
      },
      {
        question: "How do I transition snow removal customers to year-round services?",
        answer:
          "At the end of winter, offer your snow removal clients an AI mowing maintenance package for the spring, summer, and fall. This creates ongoing monthly revenue and maintains your relationship with the client. Most snow removal companies find that 40-50% of winter customers will consider a maintenance package when presented with the convenience and benefits.",
      },
      {
        question: "Can my snow removal team handle AI mower setup and maintenance?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your crew will learn proper installation, setup, and basic maintenance. Most snow removal professionals find that their existing mechanical skills transfer easily to AI mower installation and maintenance.",
      },
      {
        question: "How does this help with employee retention?",
        answer:
          "One of the biggest challenges for snow removal companies is keeping skilled employees during the off-season. By adding AI mowing services, you can provide year-round employment to your core team, reducing turnover and training costs while maintaining your most valuable team members.",
      },
      {
        question: "How much can adding AI mowing increase my company's annual revenue?",
        answer:
          "Snow removal companies that add AI mowing services typically see a 200-300% increase in annual revenue. Converting winter-only customers to year-round subscribers dramatically increases their lifetime value and creates stable income during traditionally slow periods.",
      },
    ],
  },
  "solar-panel-cleaning": {
    title: "Solar Panel Cleaning",
    slug: "solar-panel-cleaning",
    description:
      "Combine solar panel cleaning with AI mowing to offer complete eco-friendly property services. Create recurring revenue while enhancing your customers' solar efficiency. Add AI mowing to your service offerings with zero upfront costs or inventory. Our subscription model lets you earn $50 per mower monthly while we handle shipping, support, and maintenance.",
    icon: <Sun className="w-8 h-8 text-green-400" />,
    heroImage: "/images/pros/solar-panel-cleaning-pro.jpg",
    benefits: [
      {
        title: "Complementary Green Services",
        description:
          "Create a complete eco-friendly property package that aligns with your customers' environmental values.",
        points: [
          "Offer a complete 'green property' package to environmentally conscious homeowners",
          "Position your business as a full-service sustainable property solution",
          "Increase customer lifetime value with complementary recurring services",
          "Create natural upsell opportunities during panel cleaning visits",
        ],
      },
      {
        title: "Operational Synergies",
        description: "Leverage your existing customer base and service routes to maximize efficiency.",
        points: [
          "Utilize the same service visits for both panel cleaning and mower maintenance",
          "Reduce customer acquisition costs by selling to your existing client base",
          "Increase revenue per stop without significantly increasing service time",
          "Leverage your existing scheduling and routing systems",
        ],
      },
    ],
    integration: {
      title: "Integration Process",
      description:
        "Our AI mowers complement solar panel cleaning services perfectly, creating a complete eco-friendly property solution.",
      points: [
        "We provide comprehensive training on AI mower setup and maintenance",
        "Your technicians can perform basic mower maintenance during regular panel cleaning visits",
        "Customers get a complete eco-friendly property solution with a single monthly payment",
        "We handle the technology, warranty, and support while you focus on growing your business",
      ],
    },
    faqs: [
      {
        question: "How do AI mowers complement solar panel cleaning services?",
        answer:
          "Both services appeal to environmentally conscious homeowners. AI mowers use clean electric power and produce zero emissions, perfectly aligning with the values of solar panel owners. This creates a natural bundling opportunity for a complete eco-friendly property solution.",
      },
      {
        question: "Can my solar panel cleaning technicians also service AI mowers?",
        answer:
          "Yes. We provide comprehensive training for your team that typically takes just one day. Your technicians will learn basic maintenance, troubleshooting, and optimization techniques. Most solar panel cleaning professionals find that their existing technical skills transfer easily to AI mower maintenance.",
      },
      {
        question: "How do I create a complete eco-friendly property package?",
        answer:
          "We provide flexible business models that allow you to create bundled packages combining solar panel cleaning and AI mowing services. Most companies offer tiered service plans that include regular panel cleaning plus AI mowing at a combined rate that provides value to customers while increasing your monthly revenue.",
      },
      {
        question: "How much additional time does AI mower maintenance add to a panel cleaning visit?",
        answer:
          "Basic AI mower maintenance typically adds only 5-10 minutes to a regular panel cleaning visit. Your technicians can quickly check the mower's status, clean sensors if needed, and ensure proper operation while they're already on site for panel cleaning.",
      },
      {
        question: "How much can adding AI mowing increase my company's revenue per customer?",
        answer:
          "Solar panel cleaning companies that add AI mowing services typically see a 40-60% increase in monthly revenue per customer. This significant boost comes with minimal additional service time, dramatically improving your profitability per service stop.",
      },
    ],
  },
}
