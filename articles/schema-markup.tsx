// This file contains the schema markup for the articles
// You can include this in the head section of your pages

export const OtoLawnWateringGuideSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long should I water my lawn in Richmond's summer heat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For Richmond's summer heat, water deeply but infrequently. Tall fescue lawns typically need about 1-1.5 inches of water per week, which translates to about 30 minutes of watering 3-4 times per week during the hottest months. Bermuda and Zoysia grasses need slightly less. Always water in early morning (5-9am) to reduce evaporation and fungal disease risk in Virginia's humidity.",
      },
    },
    {
      "@type": "Question",
      name: "Should I water my lawn differently during Virginia's humid periods?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, during Virginia's particularly humid periods, reduce watering frequency but maintain the same depth. High humidity reduces evaporation, meaning your lawn needs less supplemental water. Watch for signs of fungal disease, which thrives in humid conditions. Smart systems like OtO automatically adjust to humidity levels, reducing water usage during these periods while maintaining lawn health.",
      },
    },
    {
      "@type": "Question",
      name: "How can I tell if my lawn is getting enough water?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for these signs to determine if your lawn is properly watered: grass maintains a vibrant green color (not blue-gray); blades stand upright and don't fold lengthwise; footprints disappear quickly after walking on the lawn; and a screwdriver easily penetrates 6-8 inches into the soil. If you're seeing brown patches, first check if it's drought stress or a fungal issue—in Richmond's humidity, brown patch fungus is common and is actually worsened by overwatering.",
      },
    },
    {
      "@type": "Question",
      name: "How do I adjust my watering schedule during a Richmond heat wave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During a Richmond heat wave (95°F+), increase watering frequency but not necessarily duration. For tall fescue, consider adding one extra watering session per week. Water in the earliest part of the morning (ideally starting at 5am) to maximize absorption before the heat intensifies. Focus on maintaining consistent soil moisture rather than reacting to visible lawn stress, which indicates damage has already occurred. Smart systems like OtO will automatically adjust to heat waves based on local weather data.",
      },
    },
  ],
}

export const DandyEcoFriendlyWeedControlSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I really control weeds without traditional herbicides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can effectively control weeds without traditional chemical herbicides. A combination approach works best: cultural practices like proper mowing height and overseeding create a dense lawn that naturally suppresses weeds; organic herbicides can target breakthrough weeds; and new technology like the Dandy weed robot can precisely identify and treat weeds with 90% less herbicide. Richmond's clay soil actually helps in this regard, as a properly maintained lawn on clay soil can develop a dense root system that leaves little room for weeds to establish.",
      },
    },
    {
      "@type": "Question",
      name: "Are organic herbicides effective on tough Richmond weeds like crabgrass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Organic herbicides can be effective against tough Richmond weeds like crabgrass, but timing and application method are crucial. For established crabgrass, high-concentration vinegar solutions (20-30%) with added orange oil are most effective when applied directly to the weed during warm, sunny days. For prevention, corn gluten meal applied in early spring can reduce crabgrass by up to 60%. The Dandy weed robot enhances organic herbicide effectiveness by precisely identifying crabgrass and applying the solution directly to the plant, even using less product while achieving better results than broadcast application methods.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to transition to an eco-friendly weed control program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Transitioning to an eco-friendly weed control program typically takes 1-2 growing seasons for full effectiveness. The first season focuses on improving soil health, establishing proper cultural practices, and addressing existing weed populations. By the second season, you'll typically see significant improvement as your lawn becomes denser and more resilient. The transition period can be shortened by using precision technology like Dandy, which provides immediate targeted control while you build up your lawn's natural weed resistance. Richmond's long growing season actually helps with this transition, giving you more time to establish healthy turf.",
      },
    },
    {
      "@type": "Question",
      name: "Will reducing herbicides attract more insects to my lawn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reducing synthetic herbicides typically leads to a healthier ecosystem with more beneficial insects rather than pest problems. Many synthetic lawn chemicals kill beneficial insects like predatory beetles and parasitic wasps that naturally control pest populations. As you transition to eco-friendly practices, you'll likely notice increased biodiversity, including pollinators and natural pest predators. If specific pest issues do arise, targeted organic pest control methods can address them without disrupting the entire ecosystem. Many Richmond homeowners report fewer pest problems after transitioning away from synthetic lawn chemicals.",
      },
    },
  ],
}

export const WateringZonesHowToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Create Custom Watering Zones for Oddly-Shaped Richmond Yards",
  description:
    "A step-by-step guide to mapping and creating efficient watering zones for irregularly shaped yards in Richmond neighborhoods.",
  step: [
    {
      "@type": "HowToStep",
      name: "Create a basic sketch of your property",
      text: "Draw the outline of your yard, including the house and other structures.",
    },
    {
      "@type": "HowToStep",
      name: "Mark permanent features",
      text: "Add driveways, walkways, patios, trees, and garden beds to your sketch.",
    },
    {
      "@type": "HowToStep",
      name: "Identify different grass and plant types",
      text: "Note areas with different vegetation that have varying water needs.",
    },
    {
      "@type": "HowToStep",
      name: "Note sunny and shady areas",
      text: "Mark areas that receive full sun, partial sun, and full shade.",
    },
    {
      "@type": "HowToStep",
      name: "Mark slopes and drainage patterns",
      text: "Indicate any slopes, low spots, or areas where water naturally flows or collects.",
    },
    {
      "@type": "HowToStep",
      name: "Identify problem areas",
      text: "Mark spots that are consistently too dry or too wet with your current watering method.",
    },
    {
      "@type": "HowToStep",
      name: "Divide into potential watering zones",
      text: "Based on all the above factors, draw boundaries for areas that should receive similar amounts of water.",
    },
  ],
}
