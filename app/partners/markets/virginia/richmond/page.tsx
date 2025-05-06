import CityComparisonPage from "@/components/city-comparison-page"

export const metadata = {
  title: "Lawn Care Services in Richmond, Virginia | Sweaty Job",
  description:
    "Discover how Sweaty Job is revolutionizing lawn care in Richmond with smart, automated solutions that save time and money.",
}

export default function RichmondPage() {
  const richmondData = {
    name: "Richmond",
    state: "Virginia",
    population: 226610,
    medianIncome: 51285,
    homeownershipRate: 42,
    wikipediaExtract:
      "Richmond is the capital city of the Commonwealth of Virginia in the United States. It is the center of the Richmond Metropolitan Statistical Area and the Greater Richmond Region. Richmond was incorporated in 1742 and has been an independent city since 1871.",
    pointsOfInterest: ["Carytown", "Belle Isle", "Virginia Museum of Fine Arts", "Maymont Park", "The Fan District"],
    reviews: [
      {
        quote: "Traditional lawn services were always hit or miss in Richmond's unpredictable weather.",
        author: "David L., The Fan",
      },
      {
        quote: "With my busy schedule at VCU, I never had time to maintain my lawn properly.",
        author: "Sarah M., Church Hill",
      },
    ],
    mapCenter: [-77.436, 37.5407], // [longitude, latitude]
  }

  const comparisonData = {
    traditional: {
      Scheduling: "Weekly or bi-weekly appointments",
      Reliability: "Subject to weather delays and staffing issues",
      Quality: "Inconsistent, especially during peak season",
      Pricing: "$50-70 per visit",
      Availability: "Limited slots in spring and summer",
    },
    sweatyJob: {
      Scheduling: "Fully automated, customizable frequency",
      Reliability: "Operates in light rain and various conditions",
      Quality: "Precision cutting with smart navigation",
      Pricing: "$42/week, subscription model",
      Availability: "Always available, no scheduling needed",
    },
  }

  return <CityComparisonPage cityData={richmondData} comparisonData={comparisonData} />
}
