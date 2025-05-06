import GaryVComparison from "@/components/gary-v-comparison"

export default function ComparisonPage() {
  const comparisonData = {
    competitor: {
      name: "Souhegan Lawn Care",
      description: "Traditional lawn care service in Windsor, Ontario",
      pros: ["Locally owned and operated", "Seasonal packages available", "Additional landscaping services"],
      cons: [
        "Weather-dependent scheduling",
        "Limited availability during peak season",
        "Manual equipment requires crew presence",
      ],
      pricing: {
        basic: 45,
        premium: 75,
      },
      reviews: [
        {
          text: "They did a good job, but were hard to schedule again",
          author: "Windsor Resident",
          rating: 3,
        },
      ],
    },
    sweatyJob: {
      pros: [
        "24/7 automated service",
        "Weather-independent operation",
        "App-based monitoring and control",
        "No contracts required",
      ],
      cons: ["Initial setup required", "Best for regular maintenance, not one-time cleanups"],
      pricing: {
        basic: 39,
        premium: 69,
      },
    },
    cityData: {
      name: "Windsor",
      state: "Ontario",
      population: 217188,
      medianIncome: 59990,
      homeownershipRate: 68,
      wikipediaExtract:
        "Windsor is a city in southwestern Ontario, Canada. It is on the south bank of the Detroit River, directly across from Detroit, Michigan, United States. Windsor is a major contributor to Canada's automotive industry and has a storied history and a diverse culture",
      pointsOfInterest: ["Riverfront Trail", "Ojibway Nature Centre", "Windsor Sculpture Park", "Coventry Gardens"],
      mapCenter: {
        lat: 42.3149,
        lng: -83.0364,
      },
    },
  }

  return <GaryVComparison comparisonData={comparisonData} />
}
