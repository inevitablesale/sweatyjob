export interface MarketData {
  // Basic city information
  city: string
  state: string
  population: number
  homeownershipRate: number
  medianLawnSize: number // sq ft
  medianHomeValue: number
  medianIncome?: number
  educationRate?: number // percentage with bachelor's degree

  // Climate and geography
  growingSeason: {
    start: string
    end: string
    length: number // months
  }
  annualRainfall: number // inches
  waterConservationPotential: number // percentage
  climateType?: string // e.g., "Desert", "Mediterranean"
  waterRestrictions?: string // e.g., "Stringent", "Moderate"

  // Market information
  marketSize: number // millions USD
  growthRate: number // percentage
  residentialShare: number // percentage
  commercialShare: number // percentage
  corporateShare?: number // percentage
  municipalShare?: number // percentage

  // Service area
  coordinates: [number, number] // [latitude, longitude]
  zoom: number
  serviceableZipCodes: string[]

  // Competition
  competitorCount: number
  averageCustomersPerBusiness: number
  averageRevenuePerCustomer: number // USD

  // Technology adoption
  techAdoptionRate?: number // percentage
  evAdoptionRate?: number // percentage

  // Community information
  plannedCommunities?: number
  totalHOAs?: number

  // Seasonal demand
  seasonalDemand: Array<{ month: string; demand: number }>

  // Major employers
  majorEmployers?: string[]

  // Recent layoffs (optional)
  recentLayoffs?: Array<{
    company: string
    details: string
  }>

  // Image URL for the hero section
  heroImageUrl: string

  // Page accent color (optional, defaults to green)
  accentColor?: "green" | "blue" | "amber" | "purple" | "teal"
}

export interface MarketPageProps {
  data: MarketData
}
