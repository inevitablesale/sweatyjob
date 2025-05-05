import {
  Bug,
  Droplets,
  Sprout,
  TreesIcon as Tree,
  Waves,
  Paintbrush,
  Lightbulb,
  Snowflake,
  Sun,
  Car,
} from "lucide-react"
import type { ServiceVerticalProps } from "@/components/service-vertical-template"

export const serviceVerticalsData: Record<string, Omit<ServiceVerticalProps, "slug">> = {
  "lawn-care": {
    title: "Lawn Care",
    description:
      "Add AI mowing technology to your lawn care services and create a new recurring revenue stream with zero inventory costs.",
    icon: <Sprout className="h-6 w-6" />,
    heroImage: "/images/pros/lawn-care-pro.jpg",
    benefits: [
      {
        title: "Complement Your Existing Services",
        description:
          "AI mowing technology works alongside your fertilization, weed control, and other lawn care services.",
        points: [
          "Offer a complete lawn care package that handles both grass health and cutting",
          "Increase customer retention by providing a comprehensive solution",
          "Differentiate from competitors who only offer traditional services",
          "Create year-round value for seasonal customers",
        ],
      },
      {
        title: "Tap Into a $4.6 Billion Growing Market",
        description:
          "The global robotic mower market is projected to reach $4.6 billion by 2032, growing at 10.8% annually.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Replace 2-3 workers per mower, saving clients $15K-$30K annually",
          "Reduce fuel expenses by 90% with electric mowers",
          "Capture premium pricing with smart home integration (40% of models)",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Lawn Care Services",
      description:
        "AI mowing technology complements your existing lawn care services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during regular lawn treatment visits",
        "Combine fertilization, weed control, and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this affect my existing lawn care services?",
        answer:
          "It complements them perfectly. Your fertilization, weed control, and other treatments make the grass healthier, while the AI mower keeps it at the perfect height. This creates a complete lawn care package that handles everything for the customer.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular service visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How do I explain this to my customers?",
        answer:
          "We provide all the marketing materials you need, including brochures, videos, and sales scripts. The key selling points are time savings, consistent results, and environmental benefits (no emissions, reduced water and fertilizer needs).",
      },
    ],
    marketStats: {
      size: "The global intelligent robotic lawn mowers market was valued at $1.8 billion in 2024 and is projected to reach $4.6 billion by 2032.",
      growth: "The industry is experiencing 10.8% annual growth, with North America growing at 9.26%.",
      businesses: "Over 505,000 lawn care businesses operate in the US, with increasing consolidation.",
      trends: [
        "Residential sector dominates with 60% market share, driven by smart home integration",
        "Commercial landscaping (20% market share) adopting robotic mowers to cut labor costs",
        "Golf courses and sports fields (10% market share) using robotic mowers for precision cutting",
        "Municipal and smart city green spaces (5% market share) implementing for emission-free maintenance",
        "Rental and sharing economy (5% market share) offering flexible use models",
      ],
    },
  },
  "pest-control": {
    title: "Pest Control",
    description:
      "Expand your pest control business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Bug className="h-6 w-6" />,
    heroImage: "/images/pros/pest-control-pro.jpg",
    benefits: [
      {
        title: "Complement Your Pest Management Services",
        description:
          "AI mowing technology works alongside your pest control services to create a comprehensive outdoor solution.",
        points: [
          "Offer a complete property management package that handles pests and lawn maintenance",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional pest control",
          "Create year-round value for seasonal customers",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Pest Control Services",
      description:
        "AI mowing technology complements your existing pest control services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during regular pest control visits",
        "Combine pest management and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my pest control business?",
        answer:
          "It creates an additional revenue stream and increases customer retention. By offering both pest control and lawn maintenance, you become a more valuable partner to your customers, reducing cancellations and increasing lifetime value.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular pest control visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this help with pest management?",
        answer:
          "Regular mowing helps reduce tick and mosquito populations by eliminating tall grass habitats. It's a natural complement to your pest control services and helps create a more comprehensive solution for your customers.",
      },
    ],
    marketStats: {
      size: "The US pest control market is valued at $20 billion annually and growing.",
      growth: "The industry is experiencing 5.2% annual growth, with increasing demand for comprehensive services.",
      businesses: "Over 20,000 pest control companies operate in the US, with increasing consolidation.",
      trends: [
        "Increasing demand for integrated pest management solutions",
        "Growing customer preference for subscription-based services",
        "Rising labor costs driving interest in automation",
        "Shift toward preventative rather than reactive pest control",
        "Increasing focus on environmentally friendly pest management",
      ],
    },
  },
  "mosquito-control": {
    title: "Mosquito Control",
    description:
      "Expand your mosquito control business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Droplets className="h-6 w-6" />,
    heroImage: "/images/pros/mosquito-control-pro.jpg",
    benefits: [
      {
        title: "Complement Your Mosquito Control Services",
        description:
          "AI mowing technology works alongside your mosquito treatments to create a comprehensive outdoor solution.",
        points: [
          "Offer a complete outdoor living package that handles mosquitoes and lawn maintenance",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional mosquito control",
          "Create year-round value for seasonal customers",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Mosquito Control Services",
      description:
        "AI mowing technology complements your existing mosquito control services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during regular mosquito treatment visits",
        "Combine mosquito management and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my mosquito control business?",
        answer:
          "It creates an additional revenue stream and increases customer retention. By offering both mosquito control and lawn maintenance, you become a more valuable partner to your customers, reducing cancellations and increasing lifetime value.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular mosquito treatment visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this help with mosquito control?",
        answer:
          "Regular mowing helps reduce mosquito breeding areas by eliminating tall grass habitats. It's a natural complement to your mosquito control services and helps create a more comprehensive solution for your customers.",
      },
    ],
  },
  "irrigation-sprinklers": {
    title: "Irrigation & Sprinklers",
    description:
      "Expand your irrigation business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Droplets className="h-6 w-6" />,
    heroImage: "/images/pros/irrigation-pro.jpg",
    benefits: [
      {
        title: "Complement Your Irrigation Services",
        description:
          "AI mowing technology works alongside your irrigation systems to create a comprehensive lawn care solution.",
        points: [
          "Offer a complete lawn management package that handles watering and cutting",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional irrigation services",
          "Create year-round value for seasonal customers",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Irrigation Services",
      description:
        "AI mowing technology complements your existing irrigation services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during regular irrigation system visits",
        "Combine watering management and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my irrigation business?",
        answer:
          "It creates an additional revenue stream and increases customer retention. By offering both irrigation and lawn maintenance, you become a more valuable partner to your customers, reducing cancellations and increasing lifetime value.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular irrigation system visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this integrate with irrigation systems?",
        answer:
          "The AI mowers work perfectly with irrigation systems, as they can mow regardless of when watering occurs. This creates a fully automated lawn care solution that handles both watering and cutting without customer effort.",
      },
    ],
  },
  "landscape-design": {
    title: "Landscape Design",
    description:
      "Expand your landscape design business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Sprout className="h-6 w-6" />,
    heroImage: "/images/pros/landscape-design-pro.jpg",
    benefits: [
      {
        title: "Complement Your Landscape Design Services",
        description:
          "AI mowing technology works alongside your landscape design and maintenance services to create a comprehensive outdoor solution.",
        points: [
          "Offer a complete landscape package that includes design, installation, and ongoing maintenance",
          "Increase customer retention by providing continuous value after the initial design project",
          "Differentiate from competitors who only offer traditional landscape design",
          "Create recurring revenue from one-time design clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Landscape Design Services",
      description:
        "AI mowing technology complements your existing landscape design services, creating a complete solution for your customers.",
      points: [
        "Design landscapes with AI mowing in mind, creating optimal layouts for automated maintenance",
        "Offer ongoing maintenance packages that include AI mowing after completing design projects",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my landscape design business?",
        answer:
          "It creates an additional recurring revenue stream and increases customer retention. By offering both design and ongoing maintenance, you become a more valuable partner to your customers, extending the relationship beyond the initial project.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular landscape maintenance visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this affect landscape design?",
        answer:
          "You can design landscapes with AI mowing in mind, creating optimal layouts for automated maintenance. This allows for more creative designs that don't require extensive manual mowing, while ensuring the landscape will be properly maintained.",
      },
    ],
  },
  "tree-care": {
    title: "Tree Care",
    description:
      "Expand your tree care business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Tree className="h-6 w-6" />,
    heroImage: "/images/pros/tree-care-pro.jpg",
    benefits: [
      {
        title: "Complement Your Tree Care Services",
        description:
          "AI mowing technology works alongside your tree care services to create a comprehensive outdoor solution.",
        points: [
          "Offer a complete property care package that includes tree maintenance and lawn cutting",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional tree care",
          "Create year-round value for seasonal customers",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Tree Care Services",
      description:
        "AI mowing technology complements your existing tree care services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during regular tree care visits",
        "Combine tree maintenance and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my tree care business?",
        answer:
          "It creates an additional revenue stream and increases customer retention. By offering both tree care and lawn maintenance, you become a more valuable partner to your customers, reducing cancellations and increasing lifetime value.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular tree care visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this work with tree care?",
        answer:
          "The AI mowers navigate around trees and landscaping features, making them a perfect complement to tree care services. They ensure the areas around trees stay neatly trimmed, enhancing the overall appearance of the property.",
      },
    ],
  },
  "pool-spa-maintenance": {
    title: "Pool & Spa Maintenance",
    description:
      "Expand your pool and spa business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Waves className="h-6 w-6" />,
    heroImage: "/images/pros/pool-spa-pro.jpg",
    benefits: [
      {
        title: "Complement Your Pool & Spa Services",
        description:
          "AI mowing technology works alongside your pool and spa services to create a comprehensive outdoor solution.",
        points: [
          "Offer a complete outdoor living package that includes pool maintenance and lawn cutting",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional pool services",
          "Create year-round value for seasonal customers",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Pool & Spa Services",
      description:
        "AI mowing technology complements your existing pool and spa services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during regular pool service visits",
        "Combine pool maintenance and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my pool business?",
        answer:
          "It creates an additional revenue stream and increases customer retention. By offering both pool maintenance and lawn care, you become a more valuable partner to your customers, reducing cancellations and increasing lifetime value.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular pool service visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this complement pool services?",
        answer:
          "Pool owners invest in their outdoor living spaces and want them to look great. By offering both pool maintenance and automated lawn care, you provide a complete solution that keeps their entire outdoor area looking pristine with minimal effort.",
      },
    ],
  },
  "pressure-washing": {
    title: "Pressure Washing",
    description:
      "Expand your pressure washing business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Droplets className="h-6 w-6" />,
    heroImage: "/images/pros/pressure-washing-pro.jpg",
    benefits: [
      {
        title: "Complement Your Pressure Washing Services",
        description:
          "AI mowing technology works alongside your pressure washing services to create a comprehensive property maintenance solution.",
        points: [
          "Offer a complete property care package that includes exterior cleaning and lawn maintenance",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional pressure washing",
          "Create recurring revenue from one-time pressure washing clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Pressure Washing Services",
      description:
        "AI mowing technology complements your existing pressure washing services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during regular pressure washing visits",
        "Combine exterior cleaning and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my pressure washing business?",
        answer:
          "It creates an additional recurring revenue stream and increases customer retention. By offering both pressure washing and ongoing lawn maintenance, you become a more valuable partner to your customers, extending the relationship beyond one-time services.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular pressure washing visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this complement pressure washing?",
        answer:
          "Customers who invest in pressure washing care about their property's appearance. By offering automated mowing, you help them maintain that clean, well-kept appearance between pressure washing services, creating more consistent value.",
      },
    ],
  },
  "gutter-cleaning": {
    title: "Gutter Cleaning",
    description:
      "Expand your gutter cleaning business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Droplets className="h-6 w-6" />,
    heroImage: "/images/pros/gutter-cleaning-pro.png",
    benefits: [
      {
        title: "Complement Your Gutter Cleaning Services",
        description:
          "AI mowing technology works alongside your gutter cleaning services to create a comprehensive property maintenance solution.",
        points: [
          "Offer a complete property care package that includes gutter maintenance and lawn cutting",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional gutter cleaning",
          "Create recurring revenue from seasonal gutter cleaning clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Gutter Cleaning Services",
      description:
        "AI mowing technology complements your existing gutter cleaning services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during regular gutter cleaning visits",
        "Combine gutter maintenance and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my gutter cleaning business?",
        answer:
          "It creates an additional recurring revenue stream and increases customer retention. By offering both gutter cleaning and ongoing lawn maintenance, you become a more valuable partner to your customers, extending the relationship beyond seasonal services.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular gutter cleaning visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this complement gutter cleaning?",
        answer:
          "Gutter cleaning is often seasonal, while lawn maintenance is needed year-round. By offering both services, you create more consistent touchpoints with customers and transform seasonal relationships into ongoing partnerships.",
      },
    ],
  },
  "window-washing": {
    title: "Window Washing",
    description:
      "Expand your window washing business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Droplets className="h-6 w-6" />,
    heroImage: "/images/pros/window-washing-pro.jpg",
    benefits: [
      {
        title: "Complement Your Window Washing Services",
        description:
          "AI mowing technology works alongside your window washing services to create a comprehensive property maintenance solution.",
        points: [
          "Offer a complete property care package that includes window cleaning and lawn maintenance",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional window washing",
          "Create recurring revenue from one-time window washing clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Window Washing Services",
      description:
        "AI mowing technology complements your existing window washing services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during regular window washing visits",
        "Combine window cleaning and automated mowing in a single subscription",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my window washing business?",
        answer:
          "It creates an additional recurring revenue stream and increases customer retention. By offering both window washing and ongoing lawn maintenance, you become a more valuable partner to your customers, extending the relationship beyond one-time services.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during your regular window washing visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this complement window washing?",
        answer:
          "Customers who invest in clean windows care about their property's appearance. By offering automated mowing, you help them maintain that clean, well-kept appearance between window washing services, creating more consistent value.",
      },
    ],
  },
  "exterior-painting": {
    title: "Exterior Painting",
    description:
      "Expand your exterior painting business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Paintbrush className="h-6 w-6" />,
    heroImage: "/images/pros/exterior-painting-pro.jpg",
    benefits: [
      {
        title: "Complement Your Exterior Painting Services",
        description:
          "AI mowing technology works alongside your painting services to create a comprehensive property maintenance solution.",
        points: [
          "Offer a complete property care package that includes painting and ongoing lawn maintenance",
          "Increase customer retention by providing continuous value after painting projects",
          "Differentiate from competitors who only offer traditional painting services",
          "Create recurring revenue from one-time painting clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Exterior Painting Services",
      description:
        "AI mowing technology complements your existing painting services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during follow-up painting visits",
        "Offer ongoing lawn maintenance packages after completing painting projects",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my painting business?",
        answer:
          "It creates an additional recurring revenue stream and increases customer retention. By offering both painting and ongoing lawn maintenance, you become a more valuable partner to your customers, extending the relationship beyond the initial project.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during follow-up visits or regular maintenance checks. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this complement painting services?",
        answer:
          "After investing in a fresh exterior paint job, customers want their property to continue looking its best. Automated mowing helps maintain that well-kept appearance, preserving and enhancing the value of the painting work you've done.",
      },
    ],
  },
  "holiday-lighting": {
    title: "Holiday Lighting",
    description:
      "Expand your holiday lighting business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Lightbulb className="h-6 w-6" />,
    heroImage: "/images/pros/holiday-lighting-pro.jpg",
    benefits: [
      {
        title: "Complement Your Holiday Lighting Services",
        description:
          "AI mowing technology works alongside your seasonal lighting services to create a year-round property maintenance solution.",
        points: [
          "Offer a complete property care package that includes seasonal lighting and ongoing lawn maintenance",
          "Increase customer retention by providing value beyond the holiday season",
          "Differentiate from competitors who only offer seasonal lighting services",
          "Create year-round revenue from seasonal lighting clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Holiday Lighting Services",
      description:
        "AI mowing technology complements your existing lighting services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during lighting installation and removal visits",
        "Offer year-round lawn maintenance to balance your seasonal lighting business",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my holiday lighting business?",
        answer:
          "It creates an additional recurring revenue stream and reduces seasonal business fluctuations. By offering both holiday lighting and year-round lawn maintenance, you become a more valuable partner to your customers, extending the relationship beyond the holiday season.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during lighting installation, removal, or maintenance visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this help with seasonal business fluctuations?",
        answer:
          "Holiday lighting is highly seasonal, while lawn maintenance is needed year-round. By offering both services, you create more consistent revenue throughout the year and maintain regular contact with your customers even in the off-season.",
      },
    ],
  },
  "outdoor-lighting": {
    title: "Outdoor Lighting",
    description:
      "Expand your outdoor lighting business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Lightbulb className="h-6 w-6" />,
    heroImage: "/images/pros/outdoor-lighting-pro.jpg",
    benefits: [
      {
        title: "Complement Your Outdoor Lighting Services",
        description:
          "AI mowing technology works alongside your lighting services to create a comprehensive property enhancement solution.",
        points: [
          "Offer a complete property care package that includes lighting and lawn maintenance",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional lighting services",
          "Create recurring revenue from one-time lighting installation clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Outdoor Lighting Services",
      description:
        "AI mowing technology complements your existing lighting services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during lighting installation and maintenance visits",
        "Combine lighting design and automated mowing in a single property enhancement package",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my outdoor lighting business?",
        answer:
          "It creates an additional recurring revenue stream and increases customer retention. By offering both lighting and ongoing lawn maintenance, you become a more valuable partner to your customers, extending the relationship beyond the initial installation.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during lighting maintenance visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this complement outdoor lighting?",
        answer:
          "Customers who invest in outdoor lighting care about their property's appearance. By offering automated mowing, you help them maintain a well-kept lawn that showcases their lighting investment, creating a more complete outdoor aesthetic.",
      },
    ],
  },
  "driveway-sealing": {
    title: "Driveway Sealing",
    description:
      "Expand your driveway sealing business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Car className="h-6 w-6" />,
    heroImage: "/images/pros/driveway-sealing-pro.jpg",
    benefits: [
      {
        title: "Complement Your Driveway Sealing Services",
        description:
          "AI mowing technology works alongside your driveway services to create a comprehensive property maintenance solution.",
        points: [
          "Offer a complete property care package that includes driveway maintenance and lawn cutting",
          "Increase customer retention by providing continuous value between sealing services",
          "Differentiate from competitors who only offer traditional driveway sealing",
          "Create recurring revenue from periodic sealing clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Driveway Sealing Services",
      description:
        "AI mowing technology complements your existing driveway services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during driveway service visits",
        "Offer ongoing lawn maintenance between periodic driveway sealing services",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my driveway sealing business?",
        answer:
          "It creates an additional recurring revenue stream and increases customer retention. By offering both driveway sealing and ongoing lawn maintenance, you become a more valuable partner to your customers, maintaining contact between sealing services.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during driveway service visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this complement driveway sealing?",
        answer:
          "Customers who invest in driveway sealing care about their property's appearance and value. By offering automated mowing, you help them maintain that well-kept appearance across their entire property, creating a more complete maintenance solution.",
      },
    ],
  },
  "snow-removal": {
    title: "Snow Removal",
    description:
      "Expand your snow removal business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Snowflake className="h-6 w-6" />,
    heroImage: "/images/pros/snow-removal-pro.jpg",
    benefits: [
      {
        title: "Complement Your Snow Removal Services",
        description:
          "AI mowing technology works alongside your seasonal snow services to create a year-round property maintenance solution.",
        points: [
          "Offer a complete property care package that handles both winter snow and summer lawn maintenance",
          "Increase customer retention by providing value beyond the winter season",
          "Differentiate from competitors who only offer seasonal snow removal",
          "Create year-round revenue from seasonal snow removal clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Snow Removal Services",
      description:
        "AI mowing technology complements your existing snow removal services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during the off-season",
        "Offer year-round property maintenance to balance your seasonal snow business",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my snow removal business?",
        answer:
          "It creates an additional recurring revenue stream and reduces seasonal business fluctuations. By offering both snow removal and summer lawn maintenance, you become a more valuable partner to your customers, extending the relationship year-round.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during the summer months when you're not focused on snow removal. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this help with seasonal business fluctuations?",
        answer:
          "Snow removal is highly seasonal, while lawn maintenance is needed throughout the growing season. By offering both services, you create more consistent revenue throughout the year and maintain regular contact with your customers even in the off-season.",
      },
    ],
  },
  "solar-panel-cleaning": {
    title: "Solar Panel Cleaning",
    description:
      "Expand your solar panel cleaning business with AI mowing technology and create a new recurring revenue stream with zero inventory costs.",
    icon: <Sun className="h-6 w-6" />,
    heroImage: "/images/pros/solar-panel-cleaning-pro.png",
    benefits: [
      {
        title: "Complement Your Solar Panel Cleaning Services",
        description:
          "AI mowing technology works alongside your solar services to create a comprehensive property maintenance solution.",
        points: [
          "Offer a complete eco-friendly property package that includes solar panel maintenance and automated lawn care",
          "Increase customer retention by providing multiple essential services",
          "Differentiate from competitors who only offer traditional solar panel cleaning",
          "Create more frequent touchpoints with periodic cleaning clients",
        ],
      },
      {
        title: "Increase Revenue Per Customer",
        description: "Add a profitable new service line with minimal additional labor costs.",
        points: [
          "Earn $50 profit per mower per month with minimal additional work",
          "Increase your average revenue per customer by 30-50%",
          "Create predictable recurring revenue streams",
          "Reduce seasonal revenue fluctuations",
        ],
      },
    ],
    integration: {
      title: "Perfect Integration with Solar Panel Cleaning Services",
      description:
        "AI mowing technology complements your existing solar services, creating a complete solution for your customers.",
      points: [
        "Your technicians can perform basic mower maintenance during solar panel cleaning visits",
        "Combine solar panel maintenance and automated mowing in a single eco-friendly package",
        "Use your existing customer relationships to introduce this innovative technology",
        "We provide all the training and support materials your team needs",
      ],
    },
    faqs: [
      {
        question: "How does this benefit my solar panel cleaning business?",
        answer:
          "It creates an additional recurring revenue stream and increases customer retention. By offering both solar panel cleaning and ongoing lawn maintenance, you become a more valuable partner to your customers, with more frequent touchpoints.",
      },
      {
        question: "Do I need to stock inventory of mowers?",
        answer:
          "No. We handle all inventory and shipping directly to your customers. You never need to purchase, store, or transport any mowers.",
      },
      {
        question: "What maintenance is required?",
        answer:
          "Basic maintenance includes blade replacement (every 2-3 months), cleaning, and occasional software updates. These can be performed during solar panel cleaning visits. We provide all replacement parts at no cost to you.",
      },
      {
        question: "How does this complement solar panel cleaning?",
        answer:
          "Both services appeal to environmentally conscious homeowners. AI mowers are battery-powered and emission-free, making them a perfect complement to solar energy. Together, they create a complete eco-friendly property maintenance solution.",
      },
    ],
  },
}
