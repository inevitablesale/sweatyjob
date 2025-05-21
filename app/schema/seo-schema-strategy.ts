// This file contains all schema markup for the SEO strategy targeting high-volume keywords

// Main Service Schema - Targets "lawn mowing service near me" (60.5K searches)
export const LawnMowingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Robot Lawn Mowing Service Near Me",
  serviceType: "Lawn Mowing",
  description:
    "Professional robot lawn mowing service in Richmond, VA. Daily mowing with AI technology for a perfect lawn without the work. Starting at $79/month.",
  provider: {
    "@type": "LocalBusiness",
    name: "SweatyJob",
    telephone: "+18045739825",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Richmond",
      addressRegion: "VA",
      postalCode: "23220",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.5407",
      longitude: "-77.4360",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/sweatyjob",
      "https://www.instagram.com/sweatyjob",
      "https://twitter.com/sweatyjob",
    ],
  },
  areaServed: [
    "Richmond, VA",
    "Bellevue, Richmond, VA",
    "Battery Park, Richmond, VA",
    "Forest Hill, Richmond, VA",
    "Ginter Park, Richmond, VA",
    "The Fan, Richmond, VA",
    "Church Hill, Richmond, VA",
    "Carytown, Richmond, VA",
  ],
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
    description: "Monthly robot lawn mowing service subscription",
    availability: "https://schema.org/InStock",
  },
}

// Repair Alternative Schema - Targets "lawn mowing repair near me" (74K searches)
export const LawnMowerRepairAlternativeSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Lawn Mower Repair Alternative",
  serviceType: "Robot Lawn Mowing",
  description:
    "Instead of expensive lawn mower repairs, switch to our robot mowing service. No more repair costs, no more maintenance headaches. Just $79/month for perfect lawn care.",
  provider: {
    "@type": "LocalBusiness",
    name: "SweatyJob",
    telephone: "+18045739825",
    priceRange: "$$$",
  },
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
    description: "Monthly robot lawn mowing service subscription - no repairs needed",
    availability: "https://schema.org/InStock",
  },
  // Comparison with repair services
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Average Lawn Mower Repair Cost",
      value: "$150-300 per repair",
    },
    {
      "@type": "PropertyValue",
      name: "Robot Mowing Service Cost",
      value: "$79 per month, all maintenance included",
    },
  ],
}

// Robot Mower Schema - Targets "lawn mowing robot" (60.5K searches)
export const RobotMowerProductSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SweatyJob Robot Lawn Mower Service",
  image: "https://sweatyjob.com/images/robot-mower.jpg",
  description: "AI-powered robot lawn mower service that cuts your grass daily for a perfect lawn without the work.",
  brand: {
    "@type": "Brand",
    name: "SweatyJob",
  },
  offers: {
    "@type": "Offer",
    url: "https://sweatyjob.com/purchase/smart-yard",
    priceCurrency: "USD",
    price: "79",
    priceValidUntil: "2024-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Thomas Wilson",
      },
      datePublished: "2023-05-12",
      reviewBody:
        "I was looking for lawn mowing service near me and found SweatyJob. The robot mower has transformed my lawn - it's greener, healthier, and I never have to think about mowing again.",
    },
  ],
}

// FAQ Schema - Targets multiple high-volume keywords
export const LawnMowingFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does lawn mowing service cost near me in Richmond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our robot lawn mowing service costs just $79/month for standard residential properties in Richmond. This includes daily mowing, maintenance, and support. Traditional lawn mowing services in Richmond typically cost $40-60 per visit or $160-240 monthly for weekly service. Our robot mower provides daily cutting at a fraction of the cost.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find lawn mower repair near me in Richmond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While there are several lawn mower repair shops in Richmond, many homeowners are switching to our robot mowing service instead of dealing with repairs. At $79/month, our service eliminates the need for repairs, maintenance, gas, and oil. You'll never have to worry about lawn mower repairs again.",
      },
    },
    {
      "@type": "Question",
      name: "How do robot lawn mowers work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Robot lawn mowers use advanced sensors and GPS technology to navigate your lawn, cutting grass to a precise height daily. They operate automatically, returning to their charging station when needed. Our robot mowers can handle slopes up to 35 degrees, work in most weather conditions, and are whisper-quiet. The daily micro-cutting creates a healthier, denser lawn.",
      },
    },
    {
      "@type": "Question",
      name: "Is robot lawn mowing better than traditional lawn mowing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, robot lawn mowing offers several advantages over traditional services. Daily cutting (versus weekly) creates a healthier, denser lawn. Robot mowers operate quietly, produce zero emissions, and work in most weather conditions. There's no scheduling hassle, and the consistent cutting height creates a carpet-like appearance that traditional mowing can't match.",
      },
    },
    {
      "@type": "Question",
      name: "How much does lawn mowing equipment cost compared to a robot service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality lawn mowing equipment can cost $300-1,500 upfront, plus ongoing expenses for gas, oil, maintenance, and repairs. Our robot mowing service is just $79/month with no additional costs. Over time, the robot service is more cost-effective while saving you 35+ hours of work each season.",
      },
    },
    {
      "@type": "Question",
      name: "Can I rent a lawn mower instead of buying one?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While lawn mower rentals are available in Richmond, they typically cost $40-80 per day. Our robot mowing service at $79/month provides daily mowing for less than the cost of two rental days, with no pickup/return hassle or maintenance concerns.",
      },
    },
    {
      "@type": "Question",
      name: "How do I mow wet grass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mowing wet grass with traditional mowers can damage your lawn and clog your equipment. Our robot mowers are designed to handle light moisture and automatically adjust to weather conditions. They're programmed to avoid mowing during heavy rain and resume when conditions improve.",
      },
    },
  ],
}

// Comparison Schema - Targets multiple comparison keywords
export const LawnMowingComparisonSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Robot Lawn Mowing Service",
  description: "Daily robot lawn mowing service for Richmond homeowners",
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
    description: "Monthly subscription",
  },
  // Comparison table data
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Comparison",
      value: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "Product",
              name: "Robot Lawn Mowing",
              description: "Daily cutting, no maintenance, $79/month",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "Product",
              name: "Traditional Lawn Service",
              description: "Weekly cutting, $160-240/month",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "Product",
              name: "DIY with Lawn Tractor",
              description: "$1,500+ upfront, plus maintenance and your time",
            },
          },
        ],
      },
    },
  ],
}

// Local Business Schema - Targets "lawn mowing service near me"
export const LawnMowingLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SweatyJob Robot Lawn Mowing",
  image: "https://sweatyjob.com/images/robot-mower.jpg",
  telephone: "+18045739825",
  email: "info@sweatyjob.com",
  url: "https://sweatyjob.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main Street",
    addressLocality: "Richmond",
    addressRegion: "VA",
    postalCode: "23220",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "37.5407",
    longitude: "-77.4360",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$$",
  servesCuisine: "Lawn Care",
  // Service areas for local SEO
  areaServed: [
    {
      "@type": "City",
      name: "Richmond",
      containsPlace: [
        {
          "@type": "Place",
          name: "The Fan",
        },
        {
          "@type": "Place",
          name: "Church Hill",
        },
        {
          "@type": "Place",
          name: "Carytown",
        },
        {
          "@type": "Place",
          name: "Bellevue",
        },
        {
          "@type": "Place",
          name: "Battery Park",
        },
        {
          "@type": "Place",
          name: "Forest Hill",
        },
        {
          "@type": "Place",
          name: "Ginter Park",
        },
      ],
    },
  ],
}

// Speakable Schema for Voice Search Optimization
export const SpeakableLawnMowingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-content", "h1", ".faq-question", ".faq-answer"],
  },
  name: "Robot Lawn Mowing Service Near Me in Richmond, VA",
  description:
    "Find affordable robot lawn mowing service near you in Richmond. Daily mowing, no repairs needed, starting at $79/month.",
}

// Video Schema for Demo Video
export const LawnMowingVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Robot Lawn Mowing Service Demo",
  description: "See how our robot mower service works to keep your lawn perfectly maintained every day.",
  thumbnailUrl: "https://sweatyjob.com/images/video-thumbnail.jpg",
  uploadDate: "2023-03-15",
  duration: "PT2M30S",
  contentUrl:
    "https://www.bestmow.com/cdn/shop/videos/c/vp/04894b9bd6f141c7820bf2e063b88bfe/04894b9bd6f141c7820bf2e063b88bfe.HD-1080p-7.2Mbps-44563246.mp4?v=0",
  embedUrl: "https://www.youtube.com/embed/Qdj6_J33Ags",
}
