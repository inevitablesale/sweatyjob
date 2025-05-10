"use client"

export default function LocalBusinessSchema({ city }: { city: string }) {
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ")
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SweatyJob Robotic Lawn Service",
    description: `SweatyJob provides robotic lawn mowing services in ${cityName}. Compare our service to traditional lawn care companies.`,
    url: `https://sweatyjob.com/compare?city=${city}`,
    logo: "https://sweatyjob.com/images/sweatyjob-logo.png",
    telephone: "+1-800-SWEATYJ",
    email: "info@sweatyjob.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: "VA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.5407",
      longitude: "-77.4360",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [
      "https://www.facebook.com/sweatyjob",
      "https://www.instagram.com/sweatyjob",
      "https://twitter.com/sweatyjob",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
