import CityComparisonPage from "@/components/city-comparison-page"

export const metadata = {
  title: "Lawn Care Services in Austin, Texas | Sweaty Job",
  description:
    "Discover how Sweaty Job is revolutionizing lawn care in Austin with smart, automated solutions that save time and money.",
}

export default function AustinPage() {
  const austinData = {
    name: "Austin",
    state: "Texas",
    population: 961855,
    medianIncome: 71576,
    homeownershipRate: 45,
    wikipediaExtract:
      "Austin is the capital city of the U.S. state of Texas, as well as the seat and largest city of Travis County, with portions extending into Hays and Williamson counties. It is the 11th-most populous city in the United States and the 4th-most populous city in Texas.",
    pointsOfInterest: ["Zilker Park", "South Congress Avenue", "Lady Bird Lake", "Barton Springs Pool", "The Domain"],
    reviews: [
      {
        quote: "In Austin's heat, traditional lawn care was a nightmare to schedule and maintain.",
        author: "Robert J., Tarrytown",
      },
      {
        quote: "Between work and Austin's music scene, I never had time for yard work.",
        author: "Maria C., East Austin",
      },
    ],
    mapCenter: [-97.7431, 30.2672], // [longitude, latitude]
  }

  const comparisonData = {
    traditional: {
      Scheduling: "Manual booking, often with waitlists",
      Reliability: "Frequent cancellations during extreme heat",
      Quality: "Varies based on crew and season",
      Pricing: "$55-75 per visit",
      Availability: "Limited, especially during drought seasons",
    },
    sweatyJob: {
      Scheduling: "Automated with smart weather adaptation",
      Reliability: "Heat-optimized operation with drought settings",
      Quality: "Consistent, water-conserving precision cuts",
      Pricing: "$45/week, with drought-season adjustments",
      Availability: "Year-round service, adapts to Austin climate",
    },
  }

  return <CityComparisonPage cityData={austinData} comparisonData={comparisonData} />
}
