import CityComparisonPage from "@/components/city-comparison-page"

export const metadata = {
  title: "Lawn Care Services in Columbus, Ohio | Sweaty Job",
  description:
    "Discover how Sweaty Job is revolutionizing lawn care in Columbus with smart, automated solutions that save time and money.",
}

export default function ColumbusPage() {
  const columbusData = {
    name: "Columbus",
    state: "Ohio",
    population: 878553,
    medianIncome: 53745,
    homeownershipRate: 45,
    wikipediaExtract:
      "Columbus is the state capital and the most populous city in the U.S. state of Ohio. With a 2020 census population of 905,748, it is the 14th-most populous city in the U.S., the second-most populous city in the Midwest, and the third-most populous state capital.",
    pointsOfInterest: [
      "Short North Arts District",
      "German Village",
      "Scioto Mile",
      "Franklin Park Conservatory",
      "Ohio State University",
    ],
    reviews: [
      {
        quote: "They did a good job, but were hard to schedule again.",
        author: "Michael S., Clintonville",
      },
      {
        quote: "I was tired of chasing down lawn companies that never showed up on time.",
        author: "Jennifer T., Bexley",
      },
    ],
    mapCenter: [-82.9988, 39.9612], // [longitude, latitude]
  }

  const comparisonData = {
    traditional: {
      Scheduling: "Call to book, often with long wait times",
      Reliability: "Weather-dependent, frequent cancellations",
      Quality: "Varies by crew and day",
      Pricing: "$45-65 per visit",
      Availability: "Limited slots, especially during peak season",
    },
    sweatyJob: {
      Scheduling: "Automated, set-it-and-forget-it",
      Reliability: "Works in most weather conditions",
      Quality: "Consistent, precision cutting",
      Pricing: "$39/week, all-inclusive",
      Availability: "24/7 operation, no waiting",
    },
  }

  return <CityComparisonPage cityData={columbusData} comparisonData={comparisonData} />
}
