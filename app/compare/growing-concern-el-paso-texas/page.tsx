import GaryVComparison from "@/components/gary-v-comparison"

export default function GrowingConcernElPasoPage() {
  const comparisonData = {
    competitor: {
      name: "Growing Concern",
      description: "Traditional lawn care service in El Paso, Texas",
      pros: ["Local business", "Basic lawn maintenance"],
      cons: ["Weather dependent", "Limited availability", "Inconsistent quality"],
      pricing: {
        basic: 125,
        premium: 210,
      },
      reviews: [
        {
          text: "They did an okay job but had to reschedule twice due to equipment issues.",
          author: "El Paso Resident",
          rating: 3,
        },
      ],
    },
    sweatyJob: {
      pros: ["24/7 service", "Weather independent", "App monitoring", "No contracts"],
      cons: ["Initial setup required"],
      pricing: {
        basic: 99,
        premium: 149,
      },
    },
    cityData: {
      name: "El Paso",
      state: "Texas",
      population: 682669,
      medianIncome: 48866,
      homeownershipRate: 62,
      wikipediaExtract:
        "El Paso is a city in and the county seat of El Paso County, situated in the far western corner of the U.S. state of Texas. It has a distinctive desert climate with hot summers and mild winters.",
      pointsOfInterest: ["Franklin Mountains State Park", "El Paso Zoo", "Chamizal National Memorial"],
      mapCenter: {
        lat: 31.7619,
        lng: -106.485,
      },
    },
  }

  return <GaryVComparison comparisonData={comparisonData} />
}
