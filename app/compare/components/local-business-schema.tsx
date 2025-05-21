"use client"

export default function LocalBusinessSchema({ city }: { city: string }) {
  const cityName = city.charAt(0).toUpperCase() + city.slice(1).replace("-", " ")
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BestMow Robotic Lawn Service",
    description: `BestMow provides robotic lawn mowers in ${cityName}. Compare traditional lawn care service to robotic mowing.`,
    url: `https://sweatyjob.com/compare?city=${city}`,
    logo: "https://www.bestmow.com/cdn/shop/files/faveicon3.png?v=1737859762&width=760",
    telephone: "+1-804-573-9825",
    email: "job@sweatyjob.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: "",
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
      "https://www.youtube.com/@sweatyjob",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
