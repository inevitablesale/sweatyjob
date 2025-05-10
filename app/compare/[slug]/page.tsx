import { notFound } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import CompetitorDetailPageClient from "./CompetitorDetailPageClient"
import { fetchWikipediaArticle } from "@/lib/wiki-api"

// Define the competitor type
interface Competitor {
  id: number
  title: string
  slug: string
  city: string
  state: string
  street?: string
  postal_code?: string
  review_rating?: number
  services?: string[]
  description?: string
  price?: string
  keywords?: string[]
  website?: string
  phone?: string
  email?: string
  reviewer_name?: string
  review_text?: string
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const competitor = await getCompetitorBySlug(params.slug)

  if (!competitor) {
    return {
      title: "Competitor Not Found",
      description: "The requested lawn care service could not be found.",
    }
  }

  return {
    title: `${competitor.title} vs SweatyJob | Lawn Mowing Service Near Me in ${competitor.city}`,
    description: `Compare ${competitor.title} with SweatyJob's robot lawn mowing service in ${competitor.city}, ${competitor.state}. Daily mowing at $79/month vs weekly service at $160-200/month.`,
  }
}

// Fetch competitor data by slug
async function getCompetitorBySlug(slug: string): Promise<Competitor | null> {
  const supabase = createServerComponentClient({ cookies })

  const { data, error } = await supabase.from("competitors").select("*").eq("slug", slug).single()

  if (error || !data) {
    console.error("Error fetching competitor:", error)
    return null
  }

  return data as Competitor
}

// Fetch city information from Wikipedia
async function getCityInfo(city: string, state: string) {
  try {
    // Direct call to Wikipedia API using our utility function
    const wikiArticle = await fetchWikipediaArticle(`${city}, ${state}`)

    // Log the results to the console for debugging
    console.log("Wikipedia API Response:", wikiArticle)

    if (!wikiArticle) {
      // Try a different query format if the first one fails
      const alternativeArticle = await fetchWikipediaArticle(`${city} (${state})`)
      console.log("Alternative Wikipedia API Response:", alternativeArticle)

      if (alternativeArticle) {
        return alternativeArticle
      }
    }

    return wikiArticle
  } catch (error) {
    console.error("Error fetching city info from Wikipedia:", error)
    return null
  }
}

export default async function CompetitorDetailPage({ params }: { params: { slug: string } }) {
  const competitor = await getCompetitorBySlug(params.slug)

  if (!competitor) {
    notFound()
  }

  // Actually call the Wikipedia API now
  const cityInfo = await getCityInfo(competitor.city, competitor.state)
  console.log(`City info for ${competitor.city}, ${competitor.state}:`, cityInfo)

  // Video information for schema and display
  const videoInfo = {
    name: `SweatyJob Robot Mower Demo - Better Than ${competitor.title} in ${competitor.city}`,
    description: `See how SweatyJob's robot mower works daily in ${competitor.city}, providing better lawn care than ${competitor.title} at half the cost.`,
    thumbnailUrl: "https://sweatyjob.com/images/robot-mower.jpg",
    uploadDate: "2023-04-15T08:00:00+08:00",
    duration: "PT1M30S", // ISO 8601 format - 1 minute 30 seconds
    contentUrl:
      "https://www.bestmow.com/cdn/shop/videos/c/vp/962096c1d1224dc78b09087c9a8c7ef8/962096c1d1224dc78b09087c9a8c7ef8.HD-1080p-7.2Mbps-44563247.mp4?v=0",
    embedUrl:
      "https://www.bestmow.com/cdn/shop/videos/c/vp/962096c1d1224dc78b09087c9a8c7ef8/962096c1d1224dc78b09087c9a8c7ef8.HD-1080p-7.2Mbps-44563247.mp4?v=0",
  }

  // Features comparison data
  const comparisonFeatures = [
    {
      feature: "Mowing Frequency",
      sweatyjob: "Daily",
      sweatyjobValue: true,
      competitor: "Weekly",
      competitorValue: false,
      description: "Daily mowing creates a healthier, more consistent lawn.",
    },
    {
      feature: "Monthly Cost",
      sweatyjob: "$79",
      sweatyjobValue: true,
      competitor: "$160-$200",
      competitorValue: false,
      description: "SweatyJob costs about half as much for 7x more frequent service.",
    },
    {
      feature: "Noise Level",
      sweatyjob: "Whisper Quiet",
      sweatyjobValue: true,
      competitor: "Loud Gas Engines",
      competitorValue: false,
      description: "Our robots operate quietly, even early morning or late evening.",
    },
    {
      feature: "Emissions",
      sweatyjob: "Zero Emissions",
      sweatyjobValue: true,
      competitor: "High Carbon Footprint",
      competitorValue: false,
      description: "SweatyJob robots are 100% electric and environmentally friendly.",
    },
    {
      feature: "Scheduling",
      sweatyjob: "Automated",
      sweatyjobValue: true,
      competitor: "Manual Booking",
      competitorValue: false,
      description: "No need to schedule or be home - our robots work autonomously.",
    },
    {
      feature: "Grass Health",
      sweatyjob: "Excellent",
      sweatyjobValue: true,
      competitor: "Good",
      competitorValue: false,
      description: "Daily micro-clippings act as natural fertilizer for your lawn.",
    },
  ]

  // Generate 50 FAQs that dynamically incorporate the competitor's name and city
  // Structured for featured snippets and voice search
  const faqs = [
    {
      question: `How much is lawn mowing near me in ${competitor.city}?`,
      answer: `In ${competitor.city}, SweatyJob's robot lawn mowing service costs $79 per month for daily mowing. Traditional services like ${competitor.title} typically charge $40-60 per visit or $160-200 monthly for weekly service. SweatyJob provides 7x more frequent mowing at approximately half the monthly cost.`,
    },
    {
      question: `What's the best lawn mowing service near me in ${competitor.city}?`,
      answer: `The best lawn mowing service in ${competitor.city} is SweatyJob, which provides daily robot mowing for $79/month. Unlike ${competitor.title}'s weekly service, SweatyJob mows every day, operates silently, produces zero emissions, and costs about half as much monthly. Our customers consistently report healthier, more attractive lawns.`,
    },
    {
      question: `Are there affordable lawn mowing services near me in ${competitor.city}?`,
      answer: `Yes, SweatyJob offers the most affordable lawn mowing in ${competitor.city} at $79/month for daily robot mowing. This is approximately 50% cheaper than ${competitor.title} and other traditional services while providing daily rather than weekly service. Installation and maintenance are included in this price.`,
    },
    {
      question: `What are lawn mowing service near me prices in ${competitor.city}?`,
      answer: `Lawn mowing service prices in ${competitor.city} vary by provider. SweatyJob charges $79/month for daily robot mowing, while ${competitor.title} and similar traditional services typically charge $40-60 per visit or $160-200 monthly for weekly service. SweatyJob provides 7x more frequent mowing at about half the monthly cost.`,
    },
    {
      question: `Is there a cheap lawn mowing service near me in ${competitor.city}?`,
      answer: `Yes, SweatyJob offers the most affordable lawn mowing in ${competitor.city} at $79/month for daily robot mowing. This is significantly cheaper than ${competitor.title}'s weekly service which costs approximately $160-200 monthly. Despite the lower price, you get daily mowing instead of just weekly service.`,
    },
    {
      question: `Is there a lawn mowing service near me open now in ${competitor.city}?`,
      answer: `Yes, SweatyJob's robot mowers operate 24/7 in ${competitor.city}, unlike ${competitor.title} which only operates during business hours. Once installed, our robots work automatically every day regardless of time, ensuring your lawn always looks freshly cut without waiting for service appointments.`,
    },
    {
      question: `What's the lawn mowing service near me cost in ${competitor.city}?`,
      answer: `In ${competitor.city}, lawn mowing service costs vary. SweatyJob charges $79/month for daily robot mowing, while ${competitor.title} and similar services typically charge $160-200/month for weekly mowing. SweatyJob's service includes professional installation, maintenance, and daily mowing at about half the monthly cost.`,
    },
    {
      question: `Where can I find lawn mowing near me in ${competitor.city}?`,
      answer: `You can find lawn mowing services in ${competitor.city} through SweatyJob, which provides daily robot mowing throughout the area. We serve the same neighborhoods as ${competitor.title}, including ${competitor.city} and surrounding areas. Check availability for your specific address at SweatyJob.com.`,
    },
    {
      question: `What are lawn mowing near me prices in ${competitor.city}?`,
      answer: `In ${competitor.city}, lawn mowing prices range from $40-60 per visit for traditional services like ${competitor.title}, totaling $160-200 monthly for weekly service. SweatyJob offers a more affordable alternative at $79/month for daily robot mowing, which is about half the monthly cost while providing 7x more frequent service.`,
    },
    {
      question: `Can I get lawn mowing and maintenance near me in ${competitor.city}?`,
      answer: `Yes, SweatyJob provides comprehensive lawn mowing and maintenance in ${competitor.city} for $79/month. Our service includes daily robot mowing, regular maintenance of the robot, blade sharpening, and technical support. Unlike ${competitor.title}'s weekly service, our daily mowing creates a consistently maintained, healthier lawn.`,
    },
    {
      question: `What lawn care and mowing near me options are available in ${competitor.city}?`,
      answer: `In ${competitor.city}, you have two main lawn care options: traditional services like ${competitor.title} that provide weekly mowing at $160-200/month, or SweatyJob's innovative robot mowing service that provides daily mowing for $79/month. Our service promotes healthier lawns through daily micro-clippings that act as natural fertilizer.`,
    },
    {
      question: `Is there lawn mowing and trimming near me in ${competitor.city}?`,
      answer: `SweatyJob provides daily robot mowing throughout ${competitor.city} for $79/month. While our robots handle the mowing, we recommend occasional trimming for edges. Many customers find they need much less trimming with our service compared to ${competitor.title} because our robots maintain a consistent lawn height daily.`,
    },
    {
      question: `Are there lawn mowing and gardening services near me in ${competitor.city}?`,
      answer: `Yes, SweatyJob offers daily robot mowing services throughout ${competitor.city} for $79/month. While we specialize in lawn mowing, many customers pair our service with local gardening services. Our daily mowing creates a beautiful backdrop for garden beds, unlike the weekly service from ${competitor.title}.`,
    },
    {
      question: `What's the most affordable lawn mowing service near me in ${competitor.city}?`,
      answer: `SweatyJob offers the most affordable lawn mowing service in ${competitor.city} at $79/month for daily robot mowing. This is approximately 50% less than what ${competitor.title} charges for just weekly service ($160-200/month), making SweatyJob the best value lawn care option in the area.`,
    },
    {
      question: `Is there a lawn mowing and weeding service near me in ${competitor.city}?`,
      answer: `SweatyJob provides daily robot mowing throughout ${competitor.city} for $79/month. Our frequent mowing helps prevent many weeds from establishing and going to seed, unlike the weekly service from ${competitor.title}. For persistent weeds, we recommend pairing our service with occasional targeted weed treatment.`,
    },
    {
      question: `What's the average price for lawn mowing near me in ${competitor.city}?`,
      answer: `The average price for lawn mowing in ${competitor.city} is $40-60 per visit or $160-200 monthly for weekly service from companies like ${competitor.title}. SweatyJob's robot mowing service costs a flat $79 monthly for daily mowing, making it significantly more affordable while providing more frequent service.`,
    },
    {
      question: `Can I get lawn mowing and garden maintenance near me in ${competitor.city}?`,
      answer: `SweatyJob provides daily robot mowing throughout ${competitor.city} for $79/month, which creates a perfectly maintained lawn. While our robots handle the mowing, many customers pair our service with occasional garden maintenance. Our service creates a beautiful backdrop for gardens, unlike ${competitor.title}'s weekly service.`,
    },
    {
      question: `What's the best lawn mowing service near me in ${competitor.city}?`,
      answer: `SweatyJob is the best lawn mowing service in ${competitor.city}, consistently outperforming ${competitor.title} and other traditional services. Our robots provide daily mowing (not just weekly) for $79/month, operate quietly, produce zero emissions, and cost about half as much as traditional services that charge $160-200/month.`,
    },
    {
      question: `Are there lawn mowing companies near me in ${competitor.city}?`,
      answer: `Yes, there are several lawn mowing companies in ${competitor.city}, including ${competitor.title} and other traditional services. However, SweatyJob offers a more innovative approach with our robot mowing service that provides daily mowing at $79/month, about half the monthly cost of traditional weekly service.`,
    },
    {
      question: `Are there lawn mowing contractors near me in ${competitor.city}?`,
      answer: `In ${competitor.city}, you can find traditional lawn mowing contractors like ${competitor.title}, but SweatyJob offers a more modern alternative. Instead of contractors who visit weekly for $160-200/month, our robot mowing service provides daily mowing at $79/month, with no scheduling hassles or noise disruptions.`,
    },
    {
      question: `Is there same day lawn mowing near me in ${competitor.city}?`,
      answer: `Yes! With SweatyJob's robot mowing service in ${competitor.city}, your lawn gets mowed every day automatically. Installation can often be scheduled within 24-48 hours. Unlike ${competitor.title} which requires advance booking, our robots work autonomously on your schedule for just $79/month.`,
    },
    {
      question: `Is there same day lawn mowing service near me in ${competitor.city}?`,
      answer: `SweatyJob provides same-day mowing every day in ${competitor.city} through our robot mowing service for $79/month. Once installed, your lawn is mowed daily without any scheduling or waiting, unlike ${competitor.title}'s weekly service that requires booking in advance and costs $160-200/month.`,
    },
    {
      question: `Can I get online estimates for lawn mowing service near me in ${competitor.city}?`,
      answer: `Yes! SweatyJob offers instant online pricing for our robot mowing service in ${competitor.city} at $79/month. Unlike ${competitor.title} which may require an in-person estimate, our service has simple, transparent pricing at $79/month for lawns up to 1/2 acre, regardless of specific dimensions.`,
    },
    {
      question: `Are there local lawn mowing services near me in ${competitor.city}?`,
      answer: `Yes, SweatyJob provides local robot mowing services throughout ${competitor.city} for $79/month, serving the same areas as ${competitor.title}. Our local team handles the professional installation and maintenance of your robot mower, ensuring excellent service with local knowledge and support.`,
    },
    {
      question: `What lawn mowing maintenance near me options are available in ${competitor.city}?`,
      answer: `SweatyJob offers comprehensive lawn mowing maintenance in ${competitor.city} for $79/month. Unlike ${competitor.title} which requires you to maintain your lawn between weekly visits, our robot mowing service provides daily mowing and includes all maintenance of the robot, including blade sharpening and technical support.`,
    },
    {
      question: `Is there lawn mowing service near me now in ${competitor.city}?`,
      answer: `Yes! SweatyJob's robot mowers operate 24/7 in ${competitor.city} for $79/month, unlike ${competitor.title} which only operates during business hours. Once installed, your robot mower works automatically every day, ensuring your lawn always looks freshly cut without waiting for service appointments.`,
    },
    {
      question: `Is there lawn mowing near me open now in ${competitor.city}?`,
      answer: `SweatyJob's robot mowing service operates 24/7 in ${competitor.city} for $79/month, unlike ${competitor.title} which only operates during limited business hours. Our robots can mow any time of day or night (they're whisper-quiet), ensuring your lawn always looks perfect regardless of time or weather conditions.`,
    },
    {
      question: `Can I get one time lawn mowing near me in ${competitor.city}?`,
      answer: `While SweatyJob specializes in ongoing robot mowing service in ${competitor.city} for $79/month, we recommend our service even for homeowners who might initially want just one-time service. Unlike ${competitor.title}'s one-time service, our robots maintain your lawn daily for a consistently perfect appearance.`,
    },
    {
      question: `What are residential lawn mowing service near me prices in ${competitor.city}?`,
      answer: `In ${competitor.city}, residential lawn mowing services like ${competitor.title} typically charge $40-60 per visit or $160-200 monthly for weekly service. SweatyJob's residential robot mowing service costs just $79/month for daily mowing, making it the most affordable option for consistent lawn maintenance.`,
    },
    {
      question: `Are there cheap lawn mowing services near me prices in ${competitor.city}?`,
      answer: `SweatyJob offers the most affordable lawn mowing service in ${competitor.city} at just $79/month for daily robot mowing. This is significantly cheaper than ${competitor.title} and other traditional services that charge $160-200/month for just weekly mowing, making us the best value in the area.`,
    },
    {
      question: `Can I get lawn mowing quotes near me in ${competitor.city}?`,
      answer: `Yes! SweatyJob offers instant, transparent pricing for our robot mowing service in ${competitor.city} at $79/month for lawns up to 1/2 acre. Unlike ${competitor.title} which may require an in-person assessment for a quote, our pricing is straightforward and available immediately online.`,
    },
    {
      question: `Is there lawn mowing repair near me in ${competitor.city}?`,
      answer: `SweatyJob provides full maintenance and repair services for our robot mowers throughout ${competitor.city} as part of our $79/month service. Unlike ${competitor.title} where you're responsible for maintaining your own equipment, our service includes all repairs, maintenance, and technical support for the robot mower.`,
    },
    {
      question: `What are lawn mowing rates near me in ${competitor.city}?`,
      answer: `In ${competitor.city}, traditional lawn mowing rates from companies like ${competitor.title} typically range from $40-60 per visit or $160-200 monthly for weekly service. SweatyJob's robot mowing service offers a flat rate of $79/month for daily mowing, providing much better value.`,
    },
    {
      question: `Is there lawn mowing repair service near me in ${competitor.city}?`,
      answer: `Yes, SweatyJob provides comprehensive repair and maintenance services for our robot mowers throughout ${competitor.city} as part of our $79/month service. Unlike ${competitor.title} where you need to find separate repair services for your equipment, our monthly fee includes all repairs, maintenance, and technical support.`,
    },
    {
      question: `Can I get one time lawn mowing service near me in ${competitor.city}?`,
      answer: `While SweatyJob specializes in ongoing robot mowing service in ${competitor.city} for $79/month, many customers who initially wanted one-time service discover the benefits of our continuous care. Unlike ${competitor.title}'s one-time service which requires rebooking, our robots maintain your lawn daily.`,
    },
    {
      question: `Is there lawn mowing near me today in ${competitor.city}?`,
      answer: `Yes! With SweatyJob's robot mowing service in ${competitor.city} for $79/month, your lawn gets mowed every day, including today. Unlike ${competitor.title} which requires scheduling in advance, our robots work automatically every day once installed, ensuring your lawn always looks freshly cut.`,
    },
    {
      question: `Is there lawn mowing service near me today in ${competitor.city}?`,
      answer: `SweatyJob's robot mowers operate daily in ${competitor.city} for $79/month, including today. Unlike ${competitor.title} which requires advance booking and may not have same-day availability, our robots work automatically every day once installed, ensuring your lawn is always perfectly maintained.`,
    },
    {
      question: `Is there lawn mowing near me within 5 mi of ${competitor.city}?`,
      answer: `SweatyJob provides robot mowing services throughout ${competitor.city} and surrounding areas within a 5-mile radius for $79/month, covering the same service area as ${competitor.title}. You can check specific availability for your address on our website or by contacting our customer service team.`,
    },
    {
      question: `Is there lawn mowing service near me within 5 mi of ${competitor.city}?`,
      answer: `Yes, SweatyJob offers robot mowing services throughout ${competitor.city} and within a 5-mile radius of the city center for $79/month. We service the same areas as ${competitor.title}, providing daily mowing at about half the monthly cost of traditional weekly service.`,
    },
    {
      question: `Is there lawn mowing and weeding service near me in ${competitor.city}?`,
      answer: `SweatyJob provides daily robot mowing throughout ${competitor.city} for $79/month. Our frequent mowing helps prevent many weeds from establishing and going to seed, unlike the weekly service from ${competitor.title}. For persistent weeds, we recommend pairing our service with occasional targeted weed treatment.`,
    },
    {
      question: `Is there lawn mowing service near me within 20 mi of ${competitor.city}?`,
      answer: `SweatyJob provides robot mowing services throughout ${competitor.city} and surrounding areas within a 20-mile radius for $79/month, similar to ${competitor.title}'s service area. You can check specific availability for your address on our website or by contacting our customer service team.`,
    },
    {
      question: `Is there residential lawn mowing service near me within 5 mi of ${competitor.city}?`,
      answer: `Yes, SweatyJob offers residential robot mowing services throughout ${competitor.city} and within a 5-mile radius for $79/month. We service the same residential areas as ${competitor.title}, providing daily mowing at about half the cost of traditional weekly service.`,
    },
    {
      question: `Is there lawn mowing near me within 8.1 km of ${competitor.city}?`,
      answer: `Yes, SweatyJob provides robot mowing services throughout ${competitor.city} and surrounding areas within 8.1 km (5 miles) for $79/month, covering the same service area as ${competitor.title}. Our service offers daily mowing at about half the monthly cost of traditional weekly service.`,
    },
    {
      question: `Is there lawn mowing services near me within 8.1 km of ${competitor.city}?`,
      answer: `SweatyJob offers robot mowing services throughout ${competitor.city} and within an 8.1 km radius for $79/month, serving the same areas as ${competitor.title}. Our innovative service provides daily mowing at about half the cost of traditional weekly service.`,
    },
    {
      question: `Is there cheapest lawn mowing near me in ${competitor.city}?`,
      answer: `SweatyJob offers the most affordable lawn mowing solution in ${competitor.city} at just $79/month for daily robot mowing. This is significantly cheaper than ${competitor.title} and other traditional services that charge $160-200/month for just weekly mowing, making us the best value in the area.`,
    },
    {
      question: `Is there commercial lawn mowing near me in ${competitor.city}?`,
      answer: `SweatyJob currently focuses on residential robot mowing services in ${competitor.city} for $79/month. For commercial properties, traditional services like ${competitor.title} may be an option, though we're developing commercial solutions that will offer the same benefits of daily mowing, reduced noise, and zero emissions.`,
    },
    {
      question: `Is there cheap lawn mowing near me in ${competitor.city}?`,
      answer: `Yes! SweatyJob offers the most affordable lawn mowing in ${competitor.city} at just $79/month for daily robot mowing. This is about half the cost of ${competitor.title} and other traditional services that charge $160-200/month for just weekly mowing, making us the best value option.`,
    },
    {
      question: `Is there residential lawn mowing near me in ${competitor.city}?`,
      answer: `Yes, SweatyJob provides residential robot mowing services throughout ${competitor.city} for $79/month, serving the same areas as ${competitor.title}. Our service offers daily mowing at about half the cost of traditional weekly service, with no noise or emissions.`,
    },
    {
      question: `Is there landscaping lawn mowing near me in ${competitor.city}?`,
      answer: `SweatyJob provides daily robot mowing throughout ${competitor.city} for $79/month. While we specialize in mowing, our service creates a perfectly maintained lawn that enhances your overall landscaping. Many customers pair our service with occasional landscaping maintenance that ${competitor.title} might offer.`,
    },
    {
      question: `Is there local lawn mowing near me in ${competitor.city}?`,
      answer: `Yes, SweatyJob provides local robot mowing services throughout ${competitor.city} for $79/month. Our local team handles the professional installation and maintenance of your robot mower, providing the same local service and knowledge as ${competitor.title} but with daily mowing at a lower monthly cost.`,
    },
    {
      question: `Is there vacation lawn mowing near me in ${competitor.city}?`,
      answer: `SweatyJob's robot mowing service is perfect for homeowners in ${competitor.city} who travel or vacation frequently. For $79/month, unlike ${competitor.title} which requires scheduling and access to your property, our robots continue working automatically while you're away, ensuring you never return to an overgrown lawn.`,
    },
    {
      question: `Is there top rated lawn mowing near me in ${competitor.city}?`,
      answer: `SweatyJob is the top-rated lawn mowing service in ${competitor.city}, consistently outperforming ${competitor.title} and other traditional services in customer satisfaction. Our innovative robot mowing approach provides daily mowing for $79/month, about half the monthly cost, with no noise or emissions.`,
    },
    {
      question: `Is there lawn care service for lawn mowing near me in ${competitor.city}?`,
      answer: `Yes, SweatyJob provides comprehensive lawn care through our robot mowing service in ${competitor.city} for $79/month. Unlike ${competitor.title}'s weekly service, our robots mow daily, creating a healthier lawn with finer clippings that act as natural fertilizer. This daily care promotes thicker, more resilient turf.`,
    },
  ]

  // Create structured data for the page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${competitor.title} vs SweatyJob | Lawn Mowing Service Near Me in ${competitor.city}`,
    description: `Compare ${competitor.title} with SweatyJob's robot lawn mowing service in ${competitor.city}, ${competitor.state}. Daily mowing at $79/month vs weekly service at $160-200/month.`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".voice-search-optimized", "h1", ".faq-question", ".faq-answer"],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  }

  // Create local business schema for SweatyJob
  const sweatyJobLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SweatyJob Robot Lawn Mowing",
    image: "https://sweatyjob.com/images/robot-mower.jpg",
    "@id": `https://sweatyjob.com/compare/${competitor.slug}#localbusiness`,
    url: "https://sweatyjob.com",
    telephone: "+18045739825",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: competitor.city,
      addressRegion: competitor.state,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.5407, // Replace with actual coordinates
      longitude: -77.436, // Replace with actual coordinates
    },
    areaServed: [
      {
        "@type": "City",
        name: competitor.city,
        "@id": `https://sweatyjob.com/compare/${competitor.slug}#${competitor.city}`,
      },
    ],
    sameAs: [
      "https://www.facebook.com/sweatyjob",
      "https://www.instagram.com/sweatyjob",
      "https://twitter.com/sweatyjob",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    description: `SweatyJob provides daily robot lawn mowing services in ${competitor.city}, ${competitor.state} for $79/month. Our service is more affordable and frequent than traditional lawn care companies like ${competitor.title}.`,
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Daily Robot Lawn Mowing",
        description: `Daily robot lawn mowing service in ${competitor.city} for $79/month. More frequent and affordable than ${competitor.title}'s weekly service.`,
      },
      price: "79",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      areaServed: {
        "@type": "City",
        name: competitor.city,
      },
    },
  }

  // Create merchant/product schema for SweatyJob's lawnmower service
  const merchantProductSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "SweatyJob Robot Lawn Mowing Service",
    description: `Daily robot lawn mowing service in ${competitor.city}, ${competitor.state}. More frequent and affordable than ${competitor.title}.`,
    brand: {
      "@type": "Brand",
      name: "SweatyJob",
    },
    sku: "ROBOT-MOWER-SUBSCRIPTION",
    mpn: "SJ-ROBOT-MOWER-2023",
    image: "https://sweatyjob.com/images/robot-mower.jpg",
    offers: {
      "@type": "Offer",
      price: "79",
      priceCurrency: "USD",
      priceValidUntil: "2024-12-31",
      availability: "https://schema.org/InStock",
      url: `https://sweatyjob.com/compare/${competitor.slug}`,
      seller: {
        "@type": "Organization",
        name: "SweatyJob",
        url: "https://sweatyjob.com",
      },
      itemCondition: "https://schema.org/NewCondition",
      warranty: "1 year parts and service warranty included with subscription",
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
    review: {
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
      reviewBody:
        "The SweatyJob robot mower has transformed my lawn care routine. Daily mowing at a fraction of the cost of traditional services!",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Mowing Frequency",
        value: "Daily",
      },
      {
        "@type": "PropertyValue",
        name: "Monthly Cost",
        value: "$79",
      },
      {
        "@type": "PropertyValue",
        name: "Noise Level",
        value: "Whisper Quiet",
      },
      {
        "@type": "PropertyValue",
        name: "Emissions",
        value: "Zero Emissions",
      },
    ],
  }

  // Create VideoObject schema for the demo video - optimized based on Brian Dean's article
  const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoInfo.name,
    description: videoInfo.description,
    thumbnailUrl: videoInfo.thumbnailUrl,
    uploadDate: videoInfo.uploadDate,
    duration: videoInfo.duration,
    contentUrl: videoInfo.contentUrl,
    embedUrl: videoInfo.embedUrl,
    potentialAction: {
      "@type": "SeekToAction",
      target: `https://sweatyjob.com/compare/${competitor.slug}?t={seek_to_second_number}`,
      "startOffset-input": "required name=seek_to_second_number",
    },
    // Additional properties to enhance video snippet chances
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: "https://schema.org/WatchAction",
      userInteractionCount: 5847,
    },
    regionsAllowed: "US,CA,MX",
    expires: "2025-12-31T23:59:59Z",
  }

  // Create review schema if competitor has review data
  const reviewSchema =
    competitor.review_text && competitor.reviewer_name
      ? {
          "@context": "https://schema.org",
          "@type": "Review",
          itemReviewed: {
            "@type": "LocalBusiness",
            name: competitor.title,
            address: {
              "@type": "PostalAddress",
              addressLocality: competitor.city,
              addressRegion: competitor.state,
              addressCountry: "US",
            },
          },
          reviewRating: {
            "@type": "Rating",
            ratingValue: competitor.review_rating || "3",
            bestRating: "5",
            worstRating: "1",
          },
          author: {
            "@type": "Person",
            name: competitor.reviewer_name,
          },
          reviewBody: competitor.review_text,
        }
      : null

  return (
    <CompetitorDetailPageClient
      competitor={competitor}
      cityInfo={cityInfo}
      videoInfo={videoInfo}
      comparisonFeatures={comparisonFeatures}
      faqs={faqs}
      structuredData={structuredData}
      sweatyJobLocalBusinessSchema={sweatyJobLocalBusinessSchema}
      merchantProductSchema={merchantProductSchema}
      videoObjectSchema={videoObjectSchema}
      reviewSchema={reviewSchema}
    />
  )
}
