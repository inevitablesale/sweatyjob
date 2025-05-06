// Smart content templates that use variables instead of direct API text

interface CityData {
  name: string
  state: string
  population?: number
  medianIncome?: number
  medianHomeValue?: number
  homeownershipRate?: number
  wikipediaExtract?: string
}

interface CompetitorData {
  name: string
  reviewText?: string
  reviewerName?: string
  rating?: number
  priceLevel?: string
  category?: string
}

// Generate intro paragraph about the city
export const generateCityIntro = (cityData: CityData): string => {
  if (!cityData.wikipediaExtract) {
    return `${cityData.name}, ${cityData.state} is a vibrant community with homeowners who take pride in their properties. With SweatyJob's robot lawn mowing service, residents can enjoy more of what ${cityData.name} has to offer while maintaining beautiful lawns.`
  }

  // Extract first two sentences from Wikipedia
  const sentences = cityData.wikipediaExtract.split(/[.!?]+/).filter((s) => s.trim().length > 0)
  const firstTwoSentences = sentences.slice(0, 2).join(". ") + "."

  return `${firstTwoSentences} For homeowners in this beautiful area, lawn care is an important part of maintaining property values and community aesthetics. SweatyJob's robot lawn mowing service helps ${cityData.name} residents enjoy more of their time while keeping their lawns in perfect condition.`
}

// Generate market insights based on census data
export const generateMarketInsights = (cityData: CityData): string => {
  const insights = []

  if (cityData.population) {
    const populationCategory =
      cityData.population > 500000
        ? "major metropolitan area"
        : cityData.population > 100000
          ? "mid-sized city"
          : cityData.population > 20000
            ? "growing community"
            : "close-knit community"

    insights.push(
      `As a ${populationCategory} with approximately ${cityData.population.toLocaleString()} residents, ${cityData.name} homeowners value efficient lawn care solutions.`,
    )
  }

  if (cityData.medianHomeValue) {
    const homeValueCategory =
      cityData.medianHomeValue > 500000
        ? "premium"
        : cityData.medianHomeValue > 300000
          ? "high-value"
          : cityData.medianHomeValue > 200000
            ? "well-maintained"
            : "diverse"

    insights.push(
      `With a median home value of $${cityData.medianHomeValue.toLocaleString()}, ${cityData.name} features ${homeValueCategory} properties where curb appeal and lawn aesthetics are important considerations.`,
    )
  }

  if (cityData.homeownershipRate) {
    const homeownershipCategory =
      cityData.homeownershipRate > 0.7
        ? "predominantly owner-occupied"
        : cityData.homeownershipRate > 0.5
          ? "balanced mix of owners and renters"
          : "rental-focused"

    insights.push(
      `The ${Math.round(cityData.homeownershipRate * 100)}% homeownership rate indicates a ${homeownershipCategory} housing market, where ${cityData.homeownershipRate > 0.5 ? "many residents invest in long-term lawn care solutions" : "property managers seek efficient maintenance options"}.`,
    )
  }

  return insights.join(" ")
}

// Generate competitor comparison text
export const generateCompetitorComparison = (competitor: CompetitorData, cityData: CityData): string => {
  const priceCategory =
    competitor.priceLevel === "$$$"
      ? "premium-priced"
      : competitor.priceLevel === "$$"
        ? "mid-range"
        : competitor.priceLevel === "$"
          ? "budget-friendly"
          : "standard"

  const serviceType = competitor.category?.toLowerCase().includes("lawn")
    ? "traditional lawn care"
    : competitor.category?.toLowerCase().includes("landscape")
      ? "landscaping"
      : "outdoor maintenance"

  return `${competitor.name} offers ${priceCategory} ${serviceType} services to ${cityData.name} residents. While they provide ${competitor.rating && competitor.rating > 4 ? "well-regarded" : "standard"} service, their approach differs significantly from SweatyJob's automated daily mowing. Traditional services like ${competitor.name} typically visit properties weekly or bi-weekly, leaving lawns to grow between visits. SweatyJob's robot mowers maintain your lawn at the perfect height every day, resulting in a healthier, denser turf that's more resistant to weeds and drought.`
}

// Generate weather-specific lawn care tips
export const generateWeatherTips = (temperature: number, condition: string, cityName: string): string => {
  if (condition.toLowerCase().includes("rain")) {
    return `With rainy conditions in ${cityName} today, traditional lawn mowers would likely reschedule. SweatyJob's weather-smart robots can safely mow in light rain, ensuring your lawn stays maintained regardless of weather.`
  }

  if (temperature > 85) {
    return `At ${temperature}°F, ${cityName} is experiencing hot weather today. SweatyJob's daily micro-cutting approach is ideal for these conditions, as it reduces stress on grass compared to infrequent, heavy cutting that traditional services provide.`
  }

  if (temperature < 50) {
    return `With cooler ${temperature}°F temperatures in ${cityName}, grass growth slows but doesn't stop. SweatyJob's robots automatically adjust cutting height and frequency based on growth rates, something traditional services rarely accommodate.`
  }

  return `Today's ${temperature}°F ${condition.toLowerCase()} conditions in ${cityName} are perfect for SweatyJob's robot mowers to maintain your lawn while you focus on enjoying your day.`
}

// Generate points of interest context
export const generatePoiContext = (pois: any[], cityName: string): string => {
  if (!pois || pois.length === 0) {
    return `${cityName} offers many attractions and amenities for residents to enjoy. With SweatyJob handling your lawn care automatically, you'll have more time to explore everything your community has to offer.`
  }

  const categories = pois.reduce((acc: Record<string, number>, poi: any) => {
    const category = poi.type || "attraction"
    acc[category] = (acc[category] || 0) + 1
    return acc
  }, {})

  const topCategories = Object.entries(categories)
    .sort((a, b) => (b[1] as number) - (a[1] as number))
    .slice(0, 3)
    .map(([category]) => category)

  return `${cityName} offers residents ${topCategories.join(", ")} and more to enjoy. While traditional lawn care services like ${cityName}'s local providers require you to plan around their schedule, SweatyJob's automated service works independently, giving you more time to enjoy all that ${cityName} has to offer.`
}
