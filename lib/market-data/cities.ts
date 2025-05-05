import type { MarketData } from "@/types/market-page.types"

export const cityData: Record<string, MarketData> = {
  "fremont-california": {
    city: "Fremont",
    state: "California",
    population: 230000,
    homeownershipRate: 60,
    medianLawnSize: 2500, // sq ft
    medianHomeValue: 1290000,
    medianIncome: 187500,
    educationRate: 63, // percentage with bachelor's degree
    growingSeason: { start: "January", end: "December", length: 11 }, // months
    annualRainfall: 16.0, // inches
    marketSize: 19.2, // billions USD
    growthRate: 5.5, // percentage
    residentialShare: 75, // percentage
    commercialShare: 20, // percentage
    corporateShare: 3, // percentage
    municipalShare: 2, // percentage
    coordinates: [-121.9713, 37.5284], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: ["94536", "94537", "94538", "94539", "94555"],
    competitorCount: 35, // estimated number of lawn care businesses
    averageCustomersPerBusiness: 110, // estimated
    averageRevenuePerCustomer: 78, // USD per service
    techAdoptionRate: 42, // percentage
    waterConservationPotential: 45, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 30 },
      { month: "Feb", demand: 40 },
      { month: "Mar", demand: 65 },
      { month: "Apr", demand: 85 },
      { month: "May", demand: 95 },
      { month: "Jun", demand: 100 },
      { month: "Jul", demand: 90 },
      { month: "Aug", demand: 85 },
      { month: "Sep", demand: 75 },
      { month: "Oct", demand: 60 },
      { month: "Nov", demand: 40 },
      { month: "Dec", demand: 25 },
    ],
    majorEmployers: [
      "Tesla",
      "Lam Research",
      "Western Digital",
      "Meta",
      "Apple",
      "Seagate Technology",
      "Boston Scientific",
    ],
    plannedCommunities: 12,
    totalHOAs: 25,
    evAdoptionRate: 8.2, // percentage
    waterRestrictions: "Stringent", // Drought restrictions
    climateType: "Mediterranean",
    heroImageUrl: "https://v0.blob.com/Hs9Kd.png", // Updated to absolute URL
    accentColor: "blue",
    recentLayoffs: [
      {
        company: "Tesla",
        details:
          "Ongoing global cuts (up to 10%). Fremont Gigafactory affected – hundreds of roles cut in early 2024–2025.",
      },
      {
        company: "Lam Research",
        details: "Reduced ~7% of global staff. Fremont HQ impacted, affecting ~500 jobs.",
      },
    ],
  },
  "san-jose-california": {
    city: "San Jose",
    state: "California",
    population: 990000,
    homeownershipRate: 56,
    medianLawnSize: 2200, // sq ft
    medianHomeValue: 1190000,
    medianIncome: 141600,
    educationRate: 45, // percentage with bachelor's degree
    growingSeason: { start: "January", end: "December", length: 11 }, // months
    annualRainfall: 17.2, // inches
    marketSize: 19.2, // billions USD
    growthRate: 4.5, // percentage
    residentialShare: 70, // percentage
    commercialShare: 25, // percentage
    corporateShare: 3, // percentage
    municipalShare: 2, // percentage
    coordinates: [-121.89303, 37.33548], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: [
      "95110",
      "95111",
      "95112",
      "95113",
      "95116",
      "95117",
      "95118",
      "95125",
      "95126",
      "95128",
      "95131",
      "95132",
      "95133",
      "95134",
      "95135",
      "95136",
      "95138",
      "95139",
      "95148",
    ],
    competitorCount: 120, // estimated number of lawn care businesses
    averageCustomersPerBusiness: 95, // estimated
    averageRevenuePerCustomer: 85, // USD per service
    techAdoptionRate: 48, // percentage
    waterConservationPotential: 42, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 25 },
      { month: "Feb", demand: 35 },
      { month: "Mar", demand: 60 },
      { month: "Apr", demand: 80 },
      { month: "May", demand: 95 },
      { month: "Jun", demand: 100 },
      { month: "Jul", demand: 90 },
      { month: "Aug", demand: 85 },
      { month: "Sep", demand: 75 },
      { month: "Oct", demand: 60 },
      { month: "Nov", demand: 40 },
      { month: "Dec", demand: 25 },
    ],
    majorEmployers: ["Cisco", "Adobe", "eBay", "PayPal", "Zoom", "Western Digital", "Broadcom"],
    plannedCommunities: 18,
    totalHOAs: 45,
    evAdoptionRate: 9.5, // percentage
    waterRestrictions: "Stringent", // Drought restrictions
    climateType: "Mediterranean",
    heroImageUrl: "https://v0.blob.com/Kj7Ls.png", // Updated to absolute URL
    accentColor: "teal",
    recentLayoffs: [
      {
        company: "HP Inc.",
        details: "Announced 2,000 layoffs in 2025 globally; Bay Area impacted.",
      },
      {
        company: "Adobe",
        details: "Cut 100+ positions in San Jose in early 2025 as part of reorg.",
      },
    ],
  },
  "gilbert-arizona": {
    city: "Gilbert",
    state: "Arizona",
    population: 275000,
    homeownershipRate: 70,
    medianLawnSize: 3800, // sq ft
    medianHomeValue: 430000,
    medianIncome: 121000,
    educationRate: 48, // percentage with bachelor's degree
    growingSeason: { start: "February", end: "November", length: 10 }, // months
    annualRainfall: 9.5, // inches
    marketSize: 8.4, // millions USD
    growthRate: 4.5, // percentage
    residentialShare: 80, // percentage
    commercialShare: 15, // percentage
    corporateShare: 3, // percentage
    municipalShare: 2, // percentage
    coordinates: [-111.789, 33.3528], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: ["85233", "85234", "85295", "85296", "85297", "85298"],
    competitorCount: 45, // estimated number of lawn care businesses
    averageCustomersPerBusiness: 85, // estimated
    averageRevenuePerCustomer: 45, // USD per service
    techAdoptionRate: 32, // percentage
    waterConservationPotential: 38, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 20 },
      { month: "Feb", demand: 40 },
      { month: "Mar", demand: 75 },
      { month: "Apr", demand: 90 },
      { month: "May", demand: 80 },
      { month: "Jun", demand: 40 },
      { month: "Jul", demand: 30 },
      { month: "Aug", demand: 35 },
      { month: "Sep", demand: 60 },
      { month: "Oct", demand: 85 },
      { month: "Nov", demand: 60 },
      { month: "Dec", demand: 25 },
    ],
    majorEmployers: ["Banner Health", "Mercy Gilbert Medical Center", "Gilbert Public Schools", "GoDaddy", "Deloitte"],
    plannedCommunities: 22,
    totalHOAs: 38,
    evAdoptionRate: 3.8, // percentage
    waterRestrictions: "Moderate", // Drought restrictions
    climateType: "Desert",
    heroImageUrl: "https://v0.blob.com/Pq2Rt.png", // Updated to absolute URL
    accentColor: "amber",
  },
  "chandler-arizona": {
    city: "Chandler",
    state: "Arizona",
    population: 270000,
    homeownershipRate: 64,
    medianLawnSize: 3200, // sq ft
    medianHomeValue: 400000,
    medianIncome: 90000,
    educationRate: 42, // percentage with bachelor's degree
    growingSeason: { start: "February", end: "November", length: 10 }, // months
    annualRainfall: 9.2, // inches
    marketSize: 7.8, // millions USD
    growthRate: 4.2, // percentage
    residentialShare: 72, // percentage
    commercialShare: 18, // percentage
    corporateShare: 7, // percentage
    municipalShare: 3, // percentage
    coordinates: [-111.8413, 33.3062], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: ["85224", "85225", "85226", "85244", "85246", "85248", "85249", "85286"],
    competitorCount: 42,
    averageCustomersPerBusiness: 78,
    averageRevenuePerCustomer: 50, // USD
    techAdoptionRate: 28, // percentage
    waterConservationPotential: 32, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 20 },
      { month: "Feb", demand: 40 },
      { month: "Mar", demand: 75 },
      { month: "Apr", demand: 90 },
      { month: "May", demand: 80 },
      { month: "Jun", demand: 40 },
      { month: "Jul", demand: 30 },
      { month: "Aug", demand: 35 },
      { month: "Sep", demand: 60 },
      { month: "Oct", demand: 85 },
      { month: "Nov", demand: 60 },
      { month: "Dec", demand: 25 },
    ],
    majorEmployers: [
      "Intel",
      "Northrop Grumman",
      "PayPal",
      "Wells Fargo",
      "Boeing",
      "Microchip Technology",
      "Verizon Wireless",
    ],
    plannedCommunities: 18,
    totalHOAs: 32,
    evAdoptionRate: 3.5, // percentage
    waterRestrictions: "Moderate", // Drought restrictions
    climateType: "Desert",
    heroImageUrl: "https://v0.blob.com/Xm3Vw.png", // Updated to absolute URL
    accentColor: "green",
    recentLayoffs: [
      {
        company: "Intel",
        details: "Chandler campus affected by global 20% workforce reduction (hundreds laid off).",
      },
      {
        company: "Microchip Technology",
        details: "Part of 2,000 job global layoff – Chandler HQ affected.",
      },
    ],
  },
  "scottsdale-arizona": {
    city: "Scottsdale",
    state: "Arizona",
    population: 255000,
    homeownershipRate: 65,
    medianLawnSize: 3500, // sq ft
    medianHomeValue: 590000,
    medianIncome: 112000,
    educationRate: 56, // percentage with bachelor's degree
    growingSeason: { start: "February", end: "November", length: 10 }, // months
    annualRainfall: 9.8, // inches
    marketSize: 9.2, // millions USD
    growthRate: 4.8, // percentage
    residentialShare: 65, // percentage
    commercialShare: 25, // percentage
    corporateShare: 5, // percentage
    municipalShare: 5, // percentage
    coordinates: [-111.9261, 33.4942], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: ["85250", "85251", "85254", "85255", "85257", "85258", "85259", "85260"],
    competitorCount: 58,
    averageCustomersPerBusiness: 65,
    averageRevenuePerCustomer: 95, // USD
    techAdoptionRate: 35, // percentage
    waterConservationPotential: 40, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 25 },
      { month: "Feb", demand: 45 },
      { month: "Mar", demand: 80 },
      { month: "Apr", demand: 95 },
      { month: "May", demand: 85 },
      { month: "Jun", demand: 45 },
      { month: "Jul", demand: 35 },
      { month: "Aug", demand: 40 },
      { month: "Sep", demand: 65 },
      { month: "Oct", demand: 90 },
      { month: "Nov", demand: 65 },
      { month: "Dec", demand: 30 },
    ],
    majorEmployers: ["HonorHealth", "CVS Health", "Vanguard", "Mayo Clinic", "Nationwide Insurance"],
    plannedCommunities: 24,
    totalHOAs: 45,
    evAdoptionRate: 4.2, // percentage
    waterRestrictions: "Moderate", // Drought restrictions
    climateType: "Desert",
    heroImageUrl: "https://v0.blob.com/Zn4Wx.png", // Updated to absolute URL
    accentColor: "purple",
    recentLayoffs: [
      {
        company: "Onsemi",
        details: "Cut more than 50 roles in CA offices, with Scottsdale HQ restructuring.",
      },
    ],
  },
  "plano-texas": {
    city: "Plano",
    state: "Texas",
    population: 290000,
    homeownershipRate: 65,
    medianLawnSize: 4200, // sq ft
    medianHomeValue: 400000,
    medianIncome: 100000,
    educationRate: 58, // percentage with bachelor's degree
    growingSeason: { start: "March", end: "November", length: 9 }, // months
    annualRainfall: 38.0, // inches
    marketSize: 12.5, // millions USD
    growthRate: 3.8, // percentage
    residentialShare: 70, // percentage
    commercialShare: 25, // percentage
    corporateShare: 3, // percentage
    municipalShare: 2, // percentage
    coordinates: [-96.6989, 33.0198], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: ["75023", "75024", "75025", "75074", "75075", "75086", "75093", "75094"],
    competitorCount: 65,
    averageCustomersPerBusiness: 95,
    averageRevenuePerCustomer: 55, // USD
    techAdoptionRate: 38, // percentage
    waterConservationPotential: 28, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 15 },
      { month: "Feb", demand: 25 },
      { month: "Mar", demand: 60 },
      { month: "Apr", demand: 85 },
      { month: "May", demand: 100 },
      { month: "Jun", demand: 95 },
      { month: "Jul", demand: 90 },
      { month: "Aug", demand: 85 },
      { month: "Sep", demand: 80 },
      { month: "Oct", demand: 65 },
      { month: "Nov", demand: 35 },
      { month: "Dec", demand: 15 },
    ],
    majorEmployers: [
      "Toyota North America",
      "JPMorgan Chase",
      "Capital One",
      "Ericsson",
      "Liberty Mutual",
      "JCPenney",
      "Frito-Lay",
    ],
    plannedCommunities: 15,
    totalHOAs: 28,
    evAdoptionRate: 3.2, // percentage
    waterRestrictions: "Minimal",
    climateType: "Humid Subtropical",
    heroImageUrl: "https://v0.blob.com/Qp5Ty.png", // Updated to absolute URL
    accentColor: "green",
    recentLayoffs: [
      {
        company: "JPMorgan Chase",
        details: "Laid off DCE (Data Center Engineering) staff in early 2025.",
      },
      {
        company: "JCPenney",
        details: "250 corporate layoffs post-merger, HQ in Plano.",
      },
    ],
  },
  "anchorage-alaska": {
    city: "Anchorage",
    state: "Alaska",
    population: 290000,
    homeownershipRate: 64,
    medianLawnSize: 5500, // sq ft
    medianHomeValue: 350000,
    medianIncome: 88000,
    educationRate: 34, // percentage with bachelor's degree
    growingSeason: { start: "June", end: "September", length: 4 }, // months
    annualRainfall: 17.0, // inches
    marketSize: 4.2, // millions USD
    growthRate: 1.8, // percentage
    residentialShare: 75, // percentage
    commercialShare: 15, // percentage
    corporateShare: 5, // percentage
    municipalShare: 5, // percentage
    coordinates: [-149.9003, 61.2181], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: [
      "99501",
      "99502",
      "99503",
      "99504",
      "99505",
      "99506",
      "99507",
      "99508",
      "99509",
      "99510",
      "99511",
      "99513",
      "99515",
      "99516",
      "99517",
      "99518",
      "99519",
      "99520",
    ],
    competitorCount: 28,
    averageCustomersPerBusiness: 45,
    averageRevenuePerCustomer: 85, // USD
    techAdoptionRate: 22, // percentage
    waterConservationPotential: 15, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 0 },
      { month: "Feb", demand: 0 },
      { month: "Mar", demand: 0 },
      { month: "Apr", demand: 5 },
      { month: "May", demand: 35 },
      { month: "Jun", demand: 100 },
      { month: "Jul", demand: 95 },
      { month: "Aug", demand: 90 },
      { month: "Sep", demand: 60 },
      { month: "Oct", demand: 10 },
      { month: "Nov", demand: 0 },
      { month: "Dec", demand: 0 },
    ],
    majorEmployers: [
      "Providence Health & Services",
      "Anchorage School District",
      "Ted Stevens Anchorage International Airport",
      "GCI",
      "Alaska Regional Hospital",
    ],
    plannedCommunities: 8,
    totalHOAs: 15,
    evAdoptionRate: 1.2, // percentage
    waterRestrictions: "None",
    climateType: "Subarctic",
    heroImageUrl: "https://v0.blob.com/Vk6Uz.png", // Updated to absolute URL
    accentColor: "blue",
    recentLayoffs: [
      {
        company: "Anchorage School District",
        details: "360+ teacher/staff layoffs due to $43M shortfall.",
      },
      {
        company: "Federal Agencies",
        details: "US Forest/National Park Services: 60+ staff affected.",
      },
    ],
  },
  "chesapeake-virginia": {
    city: "Chesapeake",
    state: "Virginia",
    population: 250000,
    homeownershipRate: 70,
    medianLawnSize: 6200, // sq ft
    medianHomeValue: 300000,
    medianIncome: 80000,
    educationRate: 32, // percentage with bachelor's degree
    growingSeason: { start: "March", end: "November", length: 9 }, // months
    annualRainfall: 48.0, // inches
    marketSize: 6.8, // millions USD
    growthRate: 3.2, // percentage
    residentialShare: 78, // percentage
    commercialShare: 15, // percentage
    corporateShare: 2, // percentage
    municipalShare: 5, // percentage
    coordinates: [-76.2875, 36.7682], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: ["23320", "23321", "23322", "23323", "23324", "23325"],
    competitorCount: 45,
    averageCustomersPerBusiness: 85,
    averageRevenuePerCustomer: 45, // USD
    techAdoptionRate: 25, // percentage
    waterConservationPotential: 22, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 10 },
      { month: "Feb", demand: 15 },
      { month: "Mar", demand: 45 },
      { month: "Apr", demand: 75 },
      { month: "May", demand: 95 },
      { month: "Jun", demand: 100 },
      { month: "Jul", demand: 95 },
      { month: "Aug", demand: 90 },
      { month: "Sep", demand: 80 },
      { month: "Oct", demand: 60 },
      { month: "Nov", demand: 30 },
      { month: "Dec", demand: 15 },
    ],
    majorEmployers: [
      "Northrop Grumman",
      "Chesapeake Regional Healthcare",
      "Chesapeake Public Schools",
      "City of Chesapeake",
      "Dollar Tree",
    ],
    plannedCommunities: 12,
    totalHOAs: 22,
    evAdoptionRate: 2.5, // percentage
    waterRestrictions: "Minimal",
    climateType: "Humid Subtropical",
    heroImageUrl: "https://v0.blob.com/Wl7Va.png", // Updated to absolute URL
    accentColor: "green",
    recentLayoffs: [
      {
        company: "Veterans Affairs",
        details: "Staffing reduced to 150 (from 550 planned) at new Chesapeake VA clinic.",
      },
    ],
  },
  "chula-vista-california": {
    city: "Chula Vista",
    state: "California",
    population: 290000,
    homeownershipRate: 60,
    medianLawnSize: 2800, // sq ft
    medianHomeValue: 600000,
    medianIncome: 78000,
    educationRate: 28, // percentage with bachelor's degree
    growingSeason: { start: "January", end: "December", length: 12 }, // months
    annualRainfall: 10.0, // inches
    marketSize: 8.5, // millions USD
    growthRate: 3.5, // percentage
    residentialShare: 75, // percentage
    commercialShare: 20, // percentage
    corporateShare: 2, // percentage
    municipalShare: 3, // percentage
    coordinates: [-117.0842, 32.6401], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: ["91909", "91910", "91911", "91913", "91914", "91915"],
    competitorCount: 52,
    averageCustomersPerBusiness: 75,
    averageRevenuePerCustomer: 65, // USD
    techAdoptionRate: 32, // percentage
    waterConservationPotential: 38, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 40 },
      { month: "Feb", demand: 45 },
      { month: "Mar", demand: 60 },
      { month: "Apr", demand: 75 },
      { month: "May", demand: 90 },
      { month: "Jun", demand: 95 },
      { month: "Jul", demand: 90 },
      { month: "Aug", demand: 85 },
      { month: "Sep", demand: 80 },
      { month: "Oct", demand: 70 },
      { month: "Nov", demand: 55 },
      { month: "Dec", demand: 45 },
    ],
    majorEmployers: [
      "Sweetwater Union High School District",
      "Chula Vista Elementary School District",
      "Sharp Chula Vista Medical Center",
      "Collins Aerospace",
      "Southwestern College",
    ],
    plannedCommunities: 14,
    totalHOAs: 28,
    evAdoptionRate: 5.8, // percentage
    waterRestrictions: "Moderate",
    climateType: "Mediterranean",
    heroImageUrl: "https://v0.blob.com/Yj8Wb.png", // Updated to absolute URL
    accentColor: "teal",
    recentLayoffs: [
      {
        company: "Collins Aerospace",
        details: "119 layoffs effective May 2025 at Chula Vista plant.",
      },
    ],
  },
  "virginia-beach-virginia": {
    city: "Virginia Beach",
    state: "Virginia",
    population: 450000,
    homeownershipRate: 66,
    medianLawnSize: 5800, // sq ft
    medianHomeValue: 290000,
    medianIncome: 76000,
    educationRate: 36, // percentage with bachelor's degree
    growingSeason: { start: "March", end: "November", length: 9 }, // months
    annualRainfall: 45.0, // inches
    marketSize: 14.2, // millions USD
    growthRate: 3.4, // percentage
    residentialShare: 72, // percentage
    commercialShare: 20, // percentage
    corporateShare: 3, // percentage
    municipalShare: 5, // percentage
    coordinates: [-75.978, 36.8529], // [longitude, latitude]
    zoom: 11,
    serviceableZipCodes: [
      "23450",
      "23451",
      "23452",
      "23453",
      "23454",
      "23455",
      "23456",
      "23457",
      "23458",
      "23459",
      "23460",
      "23461",
      "23462",
      "23463",
      "23464",
    ],
    competitorCount: 85,
    averageCustomersPerBusiness: 95,
    averageRevenuePerCustomer: 50, // USD
    techAdoptionRate: 28, // percentage
    waterConservationPotential: 25, // percentage
    seasonalDemand: [
      { month: "Jan", demand: 10 },
      { month: "Feb", demand: 15 },
      { month: "Mar", demand: 45 },
      { month: "Apr", demand: 75 },
      { month: "May", demand: 95 },
      { month: "Jun", demand: 100 },
      { month: "Jul", demand: 95 },
      { month: "Aug", demand: 90 },
      { month: "Sep", demand: 80 },
      { month: "Oct", demand: 60 },
      { month: "Nov", demand: 30 },
      { month: "Dec", demand: 15 },
    ],
    majorEmployers: [
      "Naval Air Station Oceana",
      "Sentara Healthcare",
      "Virginia Beach City Public Schools",
      "Joint Expeditionary Base Little Creek-Fort Story",
      "City of Virginia Beach",
    ],
    plannedCommunities: 18,
    totalHOAs: 32,
    evAdoptionRate: 2.8, // percentage
    waterRestrictions: "Minimal",
    climateType: "Humid Subtropical",
    heroImageUrl: "https://v0.blob.com/Xn9Xc.png", // Updated to absolute URL
    accentColor: "blue",
    recentLayoffs: [
      {
        company: "Veterans Affairs",
        details: "Part of up to 83,000 federal layoffs; Virginia Beach clinics may see cuts.",
      },
    ],
  },
}

// Updated function to be more flexible in finding cities
export function getCityData(state: string, city: string): MarketData | null {
  // Try the standard format first
  const standardKey = `${city.toLowerCase()}-${state.toLowerCase()}`
  if (cityData[standardKey]) {
    return cityData[standardKey]
  }

  // Special case for San Jose
  if (
    (city.toLowerCase() === "san" && state.toLowerCase() === "jose") ||
    (city.toLowerCase() === "jose" && state.toLowerCase() === "san")
  ) {
    return cityData["san-jose-california"]
  }

  // If not found, try to find by city and state regardless of format
  for (const [key, data] of Object.entries(cityData)) {
    // Check if both city and state match (case insensitive)
    if (
      data.city.toLowerCase() === city.toLowerCase().replace(/-/g, " ") ||
      data.city.toLowerCase().replace(/\s+/g, "-") === city.toLowerCase() ||
      data.city.toLowerCase().includes(city.toLowerCase())
    ) {
      if (
        data.state.toLowerCase() === state.toLowerCase().replace(/-/g, " ") ||
        data.state.toLowerCase().replace(/\s+/g, "-") === state.toLowerCase() ||
        data.state.toLowerCase().includes(state.toLowerCase())
      ) {
        return data
      }
    }

    // Check if the parameters might be reversed
    if (
      data.city.toLowerCase() === state.toLowerCase().replace(/-/g, " ") ||
      data.city.toLowerCase().replace(/\s+/g, "-") === state.toLowerCase() ||
      data.city.toLowerCase().includes(state.toLowerCase())
    ) {
      if (
        data.state.toLowerCase() === city.toLowerCase().replace(/-/g, " ") ||
        data.state.toLowerCase().replace(/\s+/g, "-") === city.toLowerCase() ||
        data.state.toLowerCase().includes(city.toLowerCase())
      ) {
        return data
      }
    }
  }

  return null
}

export function getAllCityPaths(): { state: string; city: string }[] {
  return Object.entries(cityData).map(([key, data]) => {
    // Use the actual city and state names from the data
    // and convert them to URL-friendly format
    return {
      state: data.state.toLowerCase().replace(/\s+/g, "-"),
      city: data.city.toLowerCase().replace(/\s+/g, "-"),
    }
  })
}
