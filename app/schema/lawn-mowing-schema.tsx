// This file contains all schema markup for lawn mowing services

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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lawn Mowing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Daily Robot Lawn Mowing Service Near Me",
          description: "Daily lawn mowing with AI-powered robot mower",
        },
        price: "79",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Same Day Lawn Mowing Service Near Me",
          description: "Same-day setup and service for your lawn",
        },
        price: "249",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "One Time Lawn Mowing Service Near Me",
          description: "One-time lawn mowing service without subscription",
        },
        price: "99",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  },
}

// FAQ Schema for Zero Position and Voice Search Optimization
export const LawnMowingFAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much is lawn mowing service near me in Richmond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our robot lawn mowing service costs just $79/month for standard residential properties in Richmond. This includes daily mowing, maintenance, and support. Traditional lawn mowing services in Richmond typically cost $40-60 per visit or $160-240 monthly for weekly service. Our robot mower provides daily cutting at a fraction of the cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer same day lawn mowing service near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! We offer same-day setup and service for our robot lawn mowers in most Richmond neighborhoods. Call us before noon, and we can often install your robot mower system the same day. Our team provides quick professional installation so you can start enjoying your perfectly maintained lawn immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What is the cheapest lawn mowing service near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our robot lawn mowing service at $79/month is one of the most affordable options in Richmond when you consider the daily service frequency. Traditional lawn services charging $40-60 per visit only come weekly, making our daily service significantly more cost-effective. We also offer flexible payment options and no long-term contracts.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide lawn mowing repair near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide complete maintenance and repair services for all our robot mowers at no additional cost. If you're currently dealing with a broken traditional lawn mower, consider switching to our hassle-free robot mower service instead of paying for expensive repairs. Our subscription includes all maintenance, repairs, and even replacement if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get one time lawn mowing service near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While our primary service is a monthly subscription for daily robot mowing, we do offer one-time services for special situations. For $99, we can provide a one-time mowing service. However, most customers find our $79/month subscription with daily mowing to be a better value compared to traditional one-time services.",
      },
    },
    {
      "@type": "Question",
      name: "What neighborhoods do you serve for lawn mowing in Richmond?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide lawn mowing services throughout Richmond including The Fan, Church Hill, Carytown, Bellevue, Battery Park, Forest Hill, Ginter Park, and many more neighborhoods within 5-8 miles of downtown Richmond. Our service area covers most residential areas in Richmond and surrounding communities.",
      },
    },
    {
      "@type": "Question",
      name: "How does your robot lawn mowing service work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our robot mowers use advanced GPS and AI technology to navigate your lawn, avoiding obstacles and maintaining the perfect cutting height. They operate quietly, even in light rain, and return to their charging station automatically. The installation process takes about 2 hours, and then the robot mower works daily to keep your lawn perfectly maintained.",
      },
    },
    {
      "@type": "Question",
      name: "Are robot lawn mowers better than traditional lawn mowing services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, robot lawn mowers offer several advantages over traditional services. They provide daily cutting instead of weekly, creating a healthier, denser lawn. They operate quietly, produce zero emissions, and work in most weather conditions. Our customers report healthier lawns with fewer weeds and better drought resistance after switching to daily robot mowing.",
      },
    },
    {
      "@type": "Question",
      name: "What are your lawn mowing service prices near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our robot lawn mowing service costs $79/month with no long-term contract. This includes daily mowing, all maintenance, and support. There's an optional one-time professional installation fee of $249. Compared to traditional lawn services that charge $160-240 monthly for weekly mowing, our daily service provides superior results at a lower cost.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have lawn mowing jobs near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're always looking for qualified technicians to join our team for robot mower installation and maintenance. While our robot mowers reduce the need for traditional mowing jobs, we do hire tech-savvy individuals who can help with installation, maintenance, and customer support. Visit our careers page to see current openings.",
      },
    },
  ],
}

// Local Business Schema with Service Offerings
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
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Daily Robot Lawn Mowing Service",
        description: "AI-powered robot mower that cuts your lawn daily",
      },
      price: "79",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Lawn Mower Repair Alternative",
        description: "Instead of repairing your old mower, switch to our robot service",
      },
      price: "79",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Same Day Lawn Mowing Setup",
        description: "Get your robot mower installed and running today",
      },
      price: "249",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  ],
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
        name: "John Smith",
      },
      datePublished: "2023-06-15",
      reviewBody:
        "Best lawn mowing service near me! The robot mower keeps my lawn looking perfect every day. Worth every penny at $79/month.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah Johnson",
      },
      datePublished: "2023-07-22",
      reviewBody:
        "I was looking for cheap lawn mowing near me and found this service. While the upfront cost seemed higher than traditional services, the daily mowing makes it much more valuable.",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Michael Brown",
      },
      datePublished: "2023-08-05",
      reviewBody:
        "My lawn mower needed repair, and instead of fixing it, I tried this robot service. Best decision ever! No more repairs or maintenance to worry about.",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
  },
}

// HowTo Schema for Zero Position and Voice Search
export const LawnMowingHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How To Get Started With Robot Lawn Mowing Service Near You",
  description: "Step-by-step guide to setting up robot lawn mowing service for your Richmond home",
  totalTime: "PT2H",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: "79",
  },
  tool: [
    {
      "@type": "HowToTool",
      name: "Phone",
    },
    {
      "@type": "HowToTool",
      name: "Internet connection",
    },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Contact SweatyJob",
      text: "Call (804) 573-9825 or visit our website to schedule your robot mower installation.",
      image: "https://sweatyjob.com/images/contact-us.jpg",
      url: "https://sweatyjob.com/contact",
    },
    {
      "@type": "HowToStep",
      name: "Schedule Installation",
      text: "Choose a convenient time for our technicians to install your robot mower system. Same-day installation is often available.",
      image: "https://sweatyjob.com/images/schedule.jpg",
      url: "https://sweatyjob.com/schedule",
    },
    {
      "@type": "HowToStep",
      name: "Professional Setup",
      text: "Our technicians will install the charging station and configure the robot mower for your specific lawn in about 2 hours.",
      image: "https://sweatyjob.com/images/installation.jpg",
      url: "https://sweatyjob.com/installation",
    },
    {
      "@type": "HowToStep",
      name: "Enjoy Your Perfect Lawn",
      text: "Your robot mower will now maintain your lawn daily, automatically returning to its charging station when needed.",
      image: "https://sweatyjob.com/images/perfect-lawn.jpg",
      url: "https://sweatyjob.com/results",
    },
  ],
}

// Product Schema for the Robot Mower
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

// Breadcrumb Schema for SEO
export const LawnMowingBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://sweatyjob.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://sweatyjob.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Lawn Mowing Service Near Me",
      item: "https://sweatyjob.com/services/lawn-mowing",
    },
  ],
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
  embedUrl: "https://www.youtube.com/embed/abc123",
}

// JobPosting Schema for "lawn mowing jobs near me" searches
export const LawnMowingJobsSchema = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Robot Lawn Mower Technician",
  description:
    "Join our team installing and maintaining robot lawn mowers throughout Richmond. Technical aptitude required. Full-time and part-time positions available.",
  datePosted: "2023-09-01",
  validThrough: "2023-12-31",
  employmentType: "FULL_TIME",
  hiringOrganization: {
    "@type": "Organization",
    name: "SweatyJob",
    sameAs: "https://sweatyjob.com",
    logo: "https://sweatyjob.com/images/logo.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main Street",
      addressLocality: "Richmond",
      addressRegion: "VA",
      postalCode: "23220",
      addressCountry: "US",
    },
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "USD",
    value: {
      "@type": "QuantitativeValue",
      value: "45000",
      unitText: "YEAR",
    },
  },
  skills: "Lawn care, robotics, customer service, technical troubleshooting",
  qualifications: "Experience with lawn care equipment, basic technical skills, valid driver's license",
  educationRequirements: "High school diploma or equivalent",
  experienceRequirements: "1+ years in lawn care or technical field",
}

// NEW: Speakable Schema for Voice Search Optimization
export const SpeakableLawnMowingSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [
      ".voice-search-heading",
      ".voice-search-paragraph",
      ".voice-search-faq-question",
      ".voice-search-faq-answer",
    ],
  },
  name: "Compare Robot Lawn Mowing Services",
  description:
    "Compare robot lawn mowing services with traditional lawn care. Daily mowing at $79/month versus weekly service at $160-240/month.",
}

// NEW: Comparison Table Schema for Service Comparison
export const LawnServiceComparisonSchema = {
  "@context": "https://schema.org",
  "@type": "Table",
  about: "Lawn Mowing Service Comparison",
  abstract: "Comparison of robot lawn mowing services versus traditional lawn care services in Richmond, VA",
  isPartOf: {
    "@type": "WebPage",
    name: "Compare Lawn Mowing Services Near Me",
  },
  mainContentOfPage: {
    "@type": "WebPageElement",
    cssSelector: ".comparison-table",
  },
}
