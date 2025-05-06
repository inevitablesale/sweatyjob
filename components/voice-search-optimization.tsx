"use client"

import { useEffect } from "react"

interface VoiceSearchProps {
  competitor: {
    name: string
    city: string
    state: string
  }
  seoKeywords: {
    robotLawnMower: string
    lawnMowerRepair: string
    lawnMowerRental: string
  }
}

export default function VoiceSearchOptimization({ competitor, seoKeywords }: VoiceSearchProps) {
  useEffect(() => {
    // Add speakable schema for voice search
    const speakableSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: [".voice-search-target", "h1", ".faq-question"],
      },
      url: `https://sweatyjob.com/compare/${competitor.name.toLowerCase().replace(/\s+/g, "-")}`,
    }

    const scriptTag = document.createElement("script")
    scriptTag.type = "application/ld+json"
    scriptTag.text = JSON.stringify(speakableSchema)
    document.head.appendChild(scriptTag)

    return () => {
      if (document.head.contains(scriptTag)) {
        document.head.removeChild(scriptTag)
      }
    }
  }, [competitor])

  // Hidden content optimized for voice search queries
  return (
    <div className="sr-only">
      <div className="voice-search-target">
        <p>
          Compare SweatyJob and {competitor.name} lawn care services in {competitor.city}, {competitor.state}.
        </p>
        <p>
          SweatyJob offers daily robotic lawn mowing for $79 per month, while {competitor.name} provides traditional
          lawn care services.
        </p>
        <p>SweatyJob's {seoKeywords.robotLawnMower} provides daily cutting, zero emissions, and quiet operation.</p>
        <p>
          SweatyJob also offers {seoKeywords.lawnMowerRepair} and {seoKeywords.lawnMowerRental} services in{" "}
          {competitor.city}.
        </p>
      </div>
    </div>
  )
}
