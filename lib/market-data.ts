// Top 100 US markets by population with additional metadata for targeting
export interface Market {
  city: string
  state: string
  region: "Northeast" | "Southeast" | "Midwest" | "Southwest" | "West"
  population: number
  medianIncome: number
  homeownershipRate: number
  averageLawnSize: "small" | "medium" | "large"
  seasonalityScore: number // 1-10 scale (1 = year-round service, 10 = highly seasonal)
  competitionLevel: "low" | "medium" | "high"
  tags: string[] // Additional characteristics like "affluent", "tech-savvy", "eco-conscious", etc.
}

export const topUSMarkets: Market[] = [
  {
    city: "New York",
    state: "NY",
    region: "Northeast",
    population: 8804190,
    medianIncome: 67046,
    homeownershipRate: 0.33,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "high",
    tags: ["urban", "affluent", "high-density"],
  },
  {
    city: "Los Angeles",
    state: "CA",
    region: "West",
    population: 3898747,
    medianIncome: 65290,
    homeownershipRate: 0.37,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "high",
    tags: ["urban", "eco-conscious", "drought-prone"],
  },
  {
    city: "Chicago",
    state: "IL",
    region: "Midwest",
    population: 2746388,
    medianIncome: 62097,
    homeownershipRate: 0.45,
    averageLawnSize: "small",
    seasonalityScore: 8,
    competitionLevel: "high",
    tags: ["urban", "seasonal"],
  },
  {
    city: "Houston",
    state: "TX",
    region: "Southwest",
    population: 2304580,
    medianIncome: 53600,
    homeownershipRate: 0.42,
    averageLawnSize: "medium",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["suburban", "hot-climate"],
  },
  {
    city: "Phoenix",
    state: "AZ",
    region: "Southwest",
    population: 1608139,
    medianIncome: 57459,
    homeownershipRate: 0.54,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "medium",
    tags: ["desert", "drought-prone", "retirement"],
  },
  {
    city: "Philadelphia",
    state: "PA",
    region: "Northeast",
    population: 1603797,
    medianIncome: 47127,
    homeownershipRate: 0.53,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["urban", "historic", "seasonal"],
  },
  {
    city: "San Antonio",
    state: "TX",
    region: "Southwest",
    population: 1434625,
    medianIncome: 53420,
    homeownershipRate: 0.55,
    averageLawnSize: "medium",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["hot-climate", "growing"],
  },
  {
    city: "San Diego",
    state: "CA",
    region: "West",
    population: 1386932,
    medianIncome: 83454,
    homeownershipRate: 0.47,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "high",
    tags: ["coastal", "affluent", "drought-prone"],
  },
  {
    city: "Dallas",
    state: "TX",
    region: "Southwest",
    population: 1304379,
    medianIncome: 54747,
    homeownershipRate: 0.41,
    averageLawnSize: "medium",
    seasonalityScore: 4,
    competitionLevel: "medium",
    tags: ["urban", "hot-climate", "growing"],
  },
  {
    city: "San Jose",
    state: "CA",
    region: "West",
    population: 1013240,
    medianIncome: 117324,
    homeownershipRate: 0.57,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "high",
    tags: ["tech-savvy", "affluent", "drought-prone"],
  },
  {
    city: "Austin",
    state: "TX",
    region: "Southwest",
    population: 961855,
    medianIncome: 75752,
    homeownershipRate: 0.45,
    averageLawnSize: "medium",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["tech-savvy", "eco-conscious", "growing"],
  },
  {
    city: "Jacksonville",
    state: "FL",
    region: "Southeast",
    population: 911507,
    medianIncome: 55807,
    homeownershipRate: 0.59,
    averageLawnSize: "medium",
    seasonalityScore: 2,
    competitionLevel: "medium",
    tags: ["humid", "growing", "retirement"],
  },
  {
    city: "Fort Worth",
    state: "TX",
    region: "Southwest",
    population: 895008,
    medianIncome: 64567,
    homeownershipRate: 0.59,
    averageLawnSize: "medium",
    seasonalityScore: 4,
    competitionLevel: "medium",
    tags: ["suburban", "hot-climate", "growing"],
  },
  {
    city: "Columbus",
    state: "OH",
    region: "Midwest",
    population: 889079,
    medianIncome: 54902,
    homeownershipRate: 0.45,
    averageLawnSize: "medium",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["seasonal", "growing"],
  },
  {
    city: "Indianapolis",
    state: "IN",
    region: "Midwest",
    population: 876384,
    medianIncome: 49987,
    homeownershipRate: 0.54,
    averageLawnSize: "medium",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["seasonal", "suburban"],
  },
  {
    city: "Charlotte",
    state: "NC",
    region: "Southeast",
    population: 874579,
    medianIncome: 65359,
    homeownershipRate: 0.53,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "medium",
    tags: ["growing", "banking", "humid"],
  },
  {
    city: "San Francisco",
    state: "CA",
    region: "West",
    population: 873965,
    medianIncome: 119136,
    homeownershipRate: 0.38,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "high",
    tags: ["urban", "tech-savvy", "affluent"],
  },
  {
    city: "Seattle",
    state: "WA",
    region: "West",
    population: 737015,
    medianIncome: 97185,
    homeownershipRate: 0.46,
    averageLawnSize: "small",
    seasonalityScore: 6,
    competitionLevel: "high",
    tags: ["tech-savvy", "eco-conscious", "rainy"],
  },
  {
    city: "Denver",
    state: "CO",
    region: "West",
    population: 715522,
    medianIncome: 72661,
    homeownershipRate: 0.5,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["outdoor-lifestyle", "growing", "seasonal"],
  },
  {
    city: "Washington",
    state: "DC",
    region: "Northeast",
    population: 689545,
    medianIncome: 92266,
    homeownershipRate: 0.42,
    averageLawnSize: "small",
    seasonalityScore: 6,
    competitionLevel: "high",
    tags: ["urban", "affluent", "seasonal"],
  },
  {
    city: "Boston",
    state: "MA",
    region: "Northeast",
    population: 675647,
    medianIncome: 76298,
    homeownershipRate: 0.35,
    averageLawnSize: "small",
    seasonalityScore: 8,
    competitionLevel: "high",
    tags: ["urban", "seasonal", "historic"],
  },
  {
    city: "El Paso",
    state: "TX",
    region: "Southwest",
    population: 678815,
    medianIncome: 48866,
    homeownershipRate: 0.63,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "low",
    tags: ["desert", "border-city"],
  },
  {
    city: "Nashville",
    state: "TN",
    region: "Southeast",
    population: 670820,
    medianIncome: 62087,
    homeownershipRate: 0.54,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "medium",
    tags: ["growing", "music-industry", "humid"],
  },
  {
    city: "Portland",
    state: "OR",
    region: "West",
    population: 652503,
    medianIncome: 73159,
    homeownershipRate: 0.53,
    averageLawnSize: "small",
    seasonalityScore: 6,
    competitionLevel: "medium",
    tags: ["eco-conscious", "rainy", "outdoor-lifestyle"],
  },
  {
    city: "Las Vegas",
    state: "NV",
    region: "West",
    population: 641903,
    medianIncome: 58713,
    homeownershipRate: 0.53,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["desert", "tourism", "drought-prone"],
  },
  {
    city: "Detroit",
    state: "MI",
    region: "Midwest",
    population: 639111,
    medianIncome: 32498,
    homeownershipRate: 0.48,
    averageLawnSize: "small",
    seasonalityScore: 8,
    competitionLevel: "low",
    tags: ["urban", "seasonal", "revitalizing"],
  },
  {
    city: "Memphis",
    state: "TN",
    region: "Southeast",
    population: 633104,
    medianIncome: 41228,
    homeownershipRate: 0.46,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "low",
    tags: ["humid", "mississippi-river"],
  },
  {
    city: "Louisville",
    state: "KY",
    region: "Southeast",
    population: 617638,
    medianIncome: 54357,
    homeownershipRate: 0.63,
    averageLawnSize: "medium",
    seasonalityScore: 6,
    competitionLevel: "medium",
    tags: ["seasonal", "bourbon-country"],
  },
  {
    city: "Milwaukee",
    state: "WI",
    region: "Midwest",
    population: 577222,
    medianIncome: 43125,
    homeownershipRate: 0.44,
    averageLawnSize: "small",
    seasonalityScore: 8,
    competitionLevel: "medium",
    tags: ["seasonal", "lakefront", "brewing"],
  },
  {
    city: "Albuquerque",
    state: "NM",
    region: "Southwest",
    population: 560513,
    medianIncome: 53936,
    homeownershipRate: 0.6,
    averageLawnSize: "small",
    seasonalityScore: 4,
    competitionLevel: "low",
    tags: ["desert", "dry-climate"],
  },
  {
    city: "Tucson",
    state: "AZ",
    region: "Southwest",
    population: 542629,
    medianIncome: 45227,
    homeownershipRate: 0.51,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "low",
    tags: ["desert", "retirement", "university-town"],
  },
  {
    city: "Fresno",
    state: "CA",
    region: "West",
    population: 542107,
    medianIncome: 50432,
    homeownershipRate: 0.46,
    averageLawnSize: "medium",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["agricultural", "drought-prone", "central-valley"],
  },
  {
    city: "Sacramento",
    state: "CA",
    region: "West",
    population: 524943,
    medianIncome: 65046,
    homeownershipRate: 0.49,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["government", "drought-prone", "growing"],
  },
  {
    city: "Kansas City",
    state: "MO",
    region: "Midwest",
    population: 508090,
    medianIncome: 56179,
    homeownershipRate: 0.53,
    averageLawnSize: "medium",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["seasonal", "barbecue", "midwest-values"],
  },
  {
    city: "Mesa",
    state: "AZ",
    region: "Southwest",
    population: 504258,
    medianIncome: 61640,
    homeownershipRate: 0.65,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "medium",
    tags: ["retirement", "desert", "suburban"],
  },
  {
    city: "Atlanta",
    state: "GA",
    region: "Southeast",
    population: 498715,
    medianIncome: 65345,
    homeownershipRate: 0.43,
    averageLawnSize: "medium",
    seasonalityScore: 4,
    competitionLevel: "high",
    tags: ["urban", "humid", "business-hub"],
  },
  {
    city: "Omaha",
    state: "NE",
    region: "Midwest",
    population: 486051,
    medianIncome: 60092,
    homeownershipRate: 0.58,
    averageLawnSize: "medium",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["seasonal", "midwest-values", "insurance-hub"],
  },
  {
    city: "Colorado Springs",
    state: "CO",
    region: "West",
    population: 478961,
    medianIncome: 67719,
    homeownershipRate: 0.59,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["military", "outdoor-lifestyle", "seasonal"],
  },
  {
    city: "Raleigh",
    state: "NC",
    region: "Southeast",
    population: 467665,
    medianIncome: 69720,
    homeownershipRate: 0.52,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "medium",
    tags: ["tech-savvy", "research-triangle", "growing"],
  },
  {
    city: "Miami",
    state: "FL",
    region: "Southeast",
    population: 467963,
    medianIncome: 42966,
    homeownershipRate: 0.3,
    averageLawnSize: "small",
    seasonalityScore: 1,
    competitionLevel: "high",
    tags: ["coastal", "tropical", "international"],
  },
  {
    city: "Long Beach",
    state: "CA",
    region: "West",
    population: 466742,
    medianIncome: 67804,
    homeownershipRate: 0.4,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "high",
    tags: ["coastal", "port-city", "drought-prone"],
  },
  {
    city: "Virginia Beach",
    state: "VA",
    region: "Southeast",
    population: 459470,
    medianIncome: 78136,
    homeownershipRate: 0.65,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "medium",
    tags: ["military", "coastal", "tourist"],
  },
  {
    city: "Oakland",
    state: "CA",
    region: "West",
    population: 440646,
    medianIncome: 80143,
    homeownershipRate: 0.4,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "high",
    tags: ["urban", "tech-adjacent", "drought-prone"],
  },
  {
    city: "Minneapolis",
    state: "MN",
    region: "Midwest",
    population: 429954,
    medianIncome: 65889,
    homeownershipRate: 0.47,
    averageLawnSize: "small",
    seasonalityScore: 9,
    competitionLevel: "medium",
    tags: ["seasonal", "lakes", "corporate-hub"],
  },
  {
    city: "Tampa",
    state: "FL",
    region: "Southeast",
    population: 399700,
    medianIncome: 55634,
    homeownershipRate: 0.48,
    averageLawnSize: "small",
    seasonalityScore: 1,
    competitionLevel: "medium",
    tags: ["coastal", "humid", "retirement"],
  },
  {
    city: "Tulsa",
    state: "OK",
    region: "Southwest",
    population: 413066,
    medianIncome: 49158,
    homeownershipRate: 0.51,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "low",
    tags: ["oil-industry", "growing", "affordable"],
  },
  {
    city: "Arlington",
    state: "TX",
    region: "Southwest",
    population: 398112,
    medianIncome: 63091,
    homeownershipRate: 0.57,
    averageLawnSize: "medium",
    seasonalityScore: 4,
    competitionLevel: "medium",
    tags: ["suburban", "sports", "hot-climate"],
  },
  {
    city: "New Orleans",
    state: "LA",
    region: "Southeast",
    population: 383997,
    medianIncome: 41604,
    homeownershipRate: 0.47,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["historic", "tourism", "humid"],
  },
  {
    city: "Wichita",
    state: "KS",
    region: "Midwest",
    population: 397532,
    medianIncome: 52620,
    homeownershipRate: 0.6,
    averageLawnSize: "medium",
    seasonalityScore: 6,
    competitionLevel: "low",
    tags: ["aerospace", "plains", "seasonal"],
  },
  {
    city: "Bakersfield",
    state: "CA",
    region: "West",
    population: 403455,
    medianIncome: 63139,
    homeownershipRate: 0.59,
    averageLawnSize: "medium",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["agricultural", "oil-industry", "drought-prone"],
  },
  {
    city: "Cleveland",
    state: "OH",
    region: "Midwest",
    population: 372624,
    medianIncome: 32053,
    homeownershipRate: 0.42,
    averageLawnSize: "small",
    seasonalityScore: 8,
    competitionLevel: "medium",
    tags: ["seasonal", "lakefront", "revitalizing"],
  },
  {
    city: "Aurora",
    state: "CO",
    region: "West",
    population: 386261,
    medianIncome: 69235,
    homeownershipRate: 0.59,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["suburban", "growing", "seasonal"],
  },
  {
    city: "Anaheim",
    state: "CA",
    region: "West",
    population: 346824,
    medianIncome: 76075,
    homeownershipRate: 0.47,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "high",
    tags: ["tourism", "suburban", "drought-prone"],
  },
  {
    city: "Honolulu",
    state: "HI",
    region: "West",
    population: 350964,
    medianIncome: 71465,
    homeownershipRate: 0.5,
    averageLawnSize: "small",
    seasonalityScore: 1,
    competitionLevel: "high",
    tags: ["tropical", "tourism", "island"],
  },
  {
    city: "Santa Ana",
    state: "CA",
    region: "West",
    population: 310227,
    medianIncome: 70084,
    homeownershipRate: 0.46,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "high",
    tags: ["urban", "diverse", "drought-prone"],
  },
  {
    city: "St. Louis",
    state: "MO",
    region: "Midwest",
    population: 301578,
    medianIncome: 43896,
    homeownershipRate: 0.43,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["seasonal", "mississippi-river", "revitalizing"],
  },
  {
    city: "Riverside",
    state: "CA",
    region: "West",
    population: 331360,
    medianIncome: 69045,
    homeownershipRate: 0.55,
    averageLawnSize: "medium",
    seasonalityScore: 2,
    competitionLevel: "medium",
    tags: ["inland-empire", "hot-climate", "drought-prone"],
  },
  {
    city: "Corpus Christi",
    state: "TX",
    region: "Southwest",
    population: 326586,
    medianIncome: 56333,
    homeownershipRate: 0.57,
    averageLawnSize: "medium",
    seasonalityScore: 2,
    competitionLevel: "low",
    tags: ["coastal", "hot-climate", "oil-industry"],
  },
  {
    city: "Lexington",
    state: "KY",
    region: "Southeast",
    population: 322570,
    medianIncome: 58069,
    homeownershipRate: 0.54,
    averageLawnSize: "large",
    seasonalityScore: 6,
    competitionLevel: "medium",
    tags: ["horse-country", "university-town", "seasonal"],
  },
  {
    city: "Pittsburgh",
    state: "PA",
    region: "Northeast",
    population: 302971,
    medianIncome: 50536,
    homeownershipRate: 0.47,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["seasonal", "revitalizing", "tech-growing"],
  },
  {
    city: "Anchorage",
    state: "AK",
    region: "West",
    population: 291247,
    medianIncome: 84928,
    homeownershipRate: 0.62,
    averageLawnSize: "medium",
    seasonalityScore: 9,
    competitionLevel: "low",
    tags: ["extreme-seasonal", "outdoor-lifestyle", "remote"],
  },
  {
    city: "Stockton",
    state: "CA",
    region: "West",
    population: 320804,
    medianIncome: 58393,
    homeownershipRate: 0.48,
    averageLawnSize: "medium",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["agricultural", "central-valley", "drought-prone"],
  },
  {
    city: "Cincinnati",
    state: "OH",
    region: "Midwest",
    population: 309317,
    medianIncome: 43585,
    homeownershipRate: 0.38,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["seasonal", "river-city", "revitalizing"],
  },
  {
    city: "St. Paul",
    state: "MN",
    region: "Midwest",
    population: 311527,
    medianIncome: 59712,
    homeownershipRate: 0.5,
    averageLawnSize: "small",
    seasonalityScore: 9,
    competitionLevel: "medium",
    tags: ["seasonal", "twin-cities", "government"],
  },
  {
    city: "Toledo",
    state: "OH",
    region: "Midwest",
    population: 270871,
    medianIncome: 40640,
    homeownershipRate: 0.51,
    averageLawnSize: "medium",
    seasonalityScore: 8,
    competitionLevel: "low",
    tags: ["seasonal", "lakefront", "manufacturing"],
  },
  {
    city: "Newark",
    state: "NJ",
    region: "Northeast",
    population: 311549,
    medianIncome: 37642,
    homeownershipRate: 0.22,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["urban", "nyc-adjacent", "seasonal"],
  },
  {
    city: "Greensboro",
    state: "NC",
    region: "Southeast",
    population: 299035,
    medianIncome: 49392,
    homeownershipRate: 0.52,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "medium",
    tags: ["humid", "furniture-industry", "growing"],
  },
  {
    city: "Plano",
    state: "TX",
    region: "Southwest",
    population: 287677,
    medianIncome: 96348,
    homeownershipRate: 0.6,
    averageLawnSize: "medium",
    seasonalityScore: 4,
    competitionLevel: "high",
    tags: ["affluent", "suburban", "corporate-hub"],
  },
  {
    city: "Henderson",
    state: "NV",
    region: "West",
    population: 320189,
    medianIncome: 74147,
    homeownershipRate: 0.59,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["desert", "las-vegas-adjacent", "growing"],
  },
  {
    city: "Lincoln",
    state: "NE",
    region: "Midwest",
    population: 289102,
    medianIncome: 59228,
    homeownershipRate: 0.57,
    averageLawnSize: "medium",
    seasonalityScore: 7,
    competitionLevel: "low",
    tags: ["seasonal", "university-town", "government"],
  },
  {
    city: "Buffalo",
    state: "NY",
    region: "Northeast",
    population: 278349,
    medianIncome: 40331,
    homeownershipRate: 0.4,
    averageLawnSize: "small",
    seasonalityScore: 8,
    competitionLevel: "medium",
    tags: ["seasonal", "snow-belt", "revitalizing"],
  },
  {
    city: "Fort Wayne",
    state: "IN",
    region: "Midwest",
    population: 270402,
    medianIncome: 49411,
    homeownershipRate: 0.62,
    averageLawnSize: "medium",
    seasonalityScore: 7,
    competitionLevel: "low",
    tags: ["seasonal", "manufacturing", "affordable"],
  },
  {
    city: "Jersey City",
    state: "NJ",
    region: "Northeast",
    population: 292449,
    medianIncome: 76497,
    homeownershipRate: 0.29,
    averageLawnSize: "small",
    seasonalityScore: 7,
    competitionLevel: "high",
    tags: ["urban", "nyc-adjacent", "seasonal"],
  },
  {
    city: "Chula Vista",
    state: "CA",
    region: "West",
    population: 275487,
    medianIncome: 83866,
    homeownershipRate: 0.59,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "high",
    tags: ["suburban", "border-adjacent", "drought-prone"],
  },
  {
    city: "Orlando",
    state: "FL",
    region: "Southeast",
    population: 307573,
    medianIncome: 51757,
    homeownershipRate: 0.35,
    averageLawnSize: "medium",
    seasonalityScore: 1,
    competitionLevel: "high",
    tags: ["tourism", "humid", "growing"],
  },
  {
    city: "St. Petersburg",
    state: "FL",
    region: "Southeast",
    population: 258308,
    medianIncome: 56127,
    homeownershipRate: 0.63,
    averageLawnSize: "small",
    seasonalityScore: 1,
    competitionLevel: "medium",
    tags: ["coastal", "retirement", "tourism"],
  },
  {
    city: "Norfolk",
    state: "VA",
    region: "Southeast",
    population: 242742,
    medianIncome: 51590,
    homeownershipRate: 0.43,
    averageLawnSize: "small",
    seasonalityScore: 5,
    competitionLevel: "medium",
    tags: ["military", "coastal", "naval-base"],
  },
  {
    city: "Chandler",
    state: "AZ",
    region: "Southwest",
    population: 275987,
    medianIncome: 82925,
    homeownershipRate: 0.64,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "medium",
    tags: ["tech-industry", "desert", "growing"],
    url: "/partners/markets/arizona/chandler",
  },
  {
    city: "Laredo",
    state: "TX",
    region: "Southwest",
    population: 255205,
    medianIncome: 47478,
    homeownershipRate: 0.63,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "low",
    tags: ["border-city", "hot-climate", "hispanic"],
  },
  {
    city: "Madison",
    state: "WI",
    region: "Midwest",
    population: 269840,
    medianIncome: 65332,
    homeownershipRate: 0.45,
    averageLawnSize: "medium",
    seasonalityScore: 8,
    competitionLevel: "medium",
    tags: ["university-town", "government", "seasonal"],
  },
  {
    city: "Winston-Salem",
    state: "NC",
    region: "Southeast",
    population: 249545,
    medianIncome: 45268,
    homeownershipRate: 0.55,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "medium",
    tags: ["tobacco-industry", "humid", "growing"],
  },
  {
    city: "Lubbock",
    state: "TX",
    region: "Southwest",
    population: 257141,
    medianIncome: 50453,
    homeownershipRate: 0.53,
    averageLawnSize: "medium",
    seasonalityScore: 4,
    competitionLevel: "low",
    tags: ["university-town", "agricultural", "plains"],
  },
  {
    city: "Baton Rouge",
    state: "LA",
    region: "Southeast",
    population: 227470,
    medianIncome: 44470,
    homeownershipRate: 0.49,
    averageLawnSize: "medium",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["humid", "university-town", "government"],
  },
  {
    city: "Durham",
    state: "NC",
    region: "Southeast",
    population: 278993,
    medianIncome: 58156,
    homeownershipRate: 0.48,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "medium",
    tags: ["research-triangle", "university-town", "tech-savvy"],
  },
  {
    city: "Garland",
    state: "TX",
    region: "Southwest",
    population: 246018,
    medianIncome: 63939,
    homeownershipRate: 0.63,
    averageLawnSize: "medium",
    seasonalityScore: 4,
    competitionLevel: "medium",
    tags: ["suburban", "dallas-adjacent", "hot-climate"],
  },
  {
    city: "Glendale",
    state: "AZ",
    region: "Southwest",
    population: 248325,
    medianIncome: 57073,
    homeownershipRate: 0.56,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "medium",
    tags: ["desert", "sports-venues", "suburban"],
  },
  {
    city: "Reno",
    state: "NV",
    region: "West",
    population: 255601,
    medianIncome: 58790,
    homeownershipRate: 0.47,
    averageLawnSize: "small",
    seasonalityScore: 6,
    competitionLevel: "medium",
    tags: ["tourism", "growing", "high-desert"],
  },
  {
    city: "Hialeah",
    state: "FL",
    region: "Southeast",
    population: 223109,
    medianIncome: 38637,
    homeownershipRate: 0.45,
    averageLawnSize: "small",
    seasonalityScore: 1,
    competitionLevel: "medium",
    tags: ["hispanic", "miami-adjacent", "tropical"],
  },
  {
    city: "Chesapeake",
    state: "VA",
    region: "Southeast",
    population: 244835,
    medianIncome: 78640,
    homeownershipRate: 0.73,
    averageLawnSize: "medium",
    seasonalityScore: 5,
    competitionLevel: "medium",
    tags: ["suburban", "military", "growing"],
  },
  {
    city: "Scottsdale",
    state: "AZ",
    region: "Southwest",
    population: 241361,
    medianIncome: 88213,
    homeownershipRate: 0.65,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "high",
    tags: ["affluent", "tourism", "desert"],
  },
  {
    city: "North Las Vegas",
    state: "NV",
    region: "West",
    population: 262527,
    medianIncome: 60683,
    homeownershipRate: 0.6,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "medium",
    tags: ["desert", "growing", "las-vegas-adjacent"],
  },
  {
    city: "Irving",
    state: "TX",
    region: "Southwest",
    population: 256684,
    medianIncome: 64868,
    homeownershipRate: 0.37,
    averageLawnSize: "medium",
    seasonalityScore: 4,
    competitionLevel: "medium",
    tags: ["corporate-hub", "dallas-adjacent", "diverse"],
  },
  {
    city: "Fremont",
    state: "CA",
    region: "West",
    population: 230504,
    medianIncome: 133354,
    homeownershipRate: 0.6,
    averageLawnSize: "small",
    seasonalityScore: 3,
    competitionLevel: "high",
    tags: ["tech-savvy", "bay-area", "drought-prone"],
    url: "/partners/markets/california/fremont",
  },
  {
    city: "Irvine",
    state: "CA",
    region: "West",
    population: 307670,
    medianIncome: 105126,
    homeownershipRate: 0.48,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "high",
    tags: ["affluent", "planned-community", "tech-industry"],
  },
  {
    city: "Birmingham",
    state: "AL",
    region: "Southeast",
    population: 200733,
    medianIncome: 38832,
    homeownershipRate: 0.45,
    averageLawnSize: "medium",
    seasonalityScore: 4,
    competitionLevel: "medium",
    tags: ["humid", "revitalizing", "historic"],
  },
  {
    city: "Rochester",
    state: "NY",
    region: "Northeast",
    population: 205695,
    medianIncome: 37395,
    homeownershipRate: 0.36,
    averageLawnSize: "small",
    seasonalityScore: 8,
    competitionLevel: "medium",
    tags: ["seasonal", "snow-belt", "university-town"],
  },
  {
    city: "San Bernardino",
    state: "CA",
    region: "West",
    population: 215784,
    medianIncome: 45834,
    homeownershipRate: 0.47,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "medium",
    tags: ["inland-empire", "hot-climate", "drought-prone"],
  },
  {
    city: "Spokane",
    state: "WA",
    region: "West",
    population: 222081,
    medianIncome: 50306,
    homeownershipRate: 0.55,
    averageLawnSize: "medium",
    seasonalityScore: 7,
    competitionLevel: "medium",
    tags: ["seasonal", "outdoor-lifestyle", "growing"],
  },
  {
    city: "Gilbert",
    state: "AZ",
    region: "Southwest",
    population: 267918,
    medianIncome: 96857,
    homeownershipRate: 0.73,
    averageLawnSize: "small",
    seasonalityScore: 2,
    competitionLevel: "medium",
    tags: ["affluent", "family-oriented", "desert"],
  },
  {
    city: "Arlington",
    state: "VA",
    region: "Northeast",
    population: 236842,
    medianIncome: 120071,
    homeownershipRate: 0.44,
    averageLawnSize: "small",
    seasonalityScore: 6,
    competitionLevel: "high",
    tags: ["affluent", "government", "dc-adjacent"],
  },
]

// Function to filter markets based on service vertical
export function getRelevantMarkets(serviceVertical: string, limit = 20): Market[] {
  let filteredMarkets: Market[] = []

  // Define filters based on service vertical
  switch (serviceVertical) {
    case "lawn-care":
      // Prioritize markets with larger lawns, less seasonality, higher income
      filteredMarkets = topUSMarkets
        .filter((m) => m.averageLawnSize !== "small" || m.homeownershipRate > 0.5)
        .sort((a, b) => b.homeownershipRate - a.homeownershipRate + (b.medianIncome - a.medianIncome) / 50000)
      break

    case "pest-control":
      // Prioritize humid, hot markets with higher pest issues
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.tags.some((tag) => ["humid", "hot-climate", "tropical"].includes(tag)) ||
            m.region === "Southeast" ||
            m.region === "Southwest",
        )
        .sort((a, b) => a.seasonalityScore - b.seasonalityScore + (b.population - a.population) / 1000000)
      break

    case "mosquito-control":
      // Prioritize humid, rainy markets
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.tags.some((tag) => ["humid", "rainy", "tropical"].includes(tag)) ||
            m.region === "Southeast" ||
            ["FL", "LA", "MS", "AL", "GA", "SC", "NC", "TX"].includes(m.state),
        )
        .sort((a, b) => a.seasonalityScore - b.seasonalityScore + (b.population - a.population) / 1000000)
      break

    case "irrigation-sprinklers":
      // Prioritize drought-prone areas and hot climates
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.tags.some((tag) => ["drought-prone", "hot-climate", "desert"].includes(tag)) ||
            ["CA", "AZ", "NV", "TX", "CO", "UT"].includes(m.state),
        )
        .sort((a, b) => a.seasonalityScore - b.seasonalityScore + (b.medianIncome - a.medianIncome) / 50000)
      break

    case "landscape-design":
      // Prioritize affluent areas with higher home ownership
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.medianIncome > 70000 ||
            m.homeownershipRate > 0.55 ||
            m.tags.some((tag) => ["affluent", "planned-community", "growing"].includes(tag)),
        )
        .sort((a, b) => (b.medianIncome - a.medianIncome) / 50000 + (b.homeownershipRate - a.homeownershipRate))
      break

    case "tree-care":
      // Prioritize areas with established neighborhoods and seasonal weather
      filteredMarkets = topUSMarkets
        .filter(
          (m) => m.homeownershipRate > 0.5 || m.tags.some((tag) => ["seasonal", "suburban", "historic"].includes(tag)),
        )
        .sort((a, b) => b.homeownershipRate - a.homeownershipRate + (b.seasonalityScore - a.seasonalityScore) / 10)
      break

    case "pool-spa-maintenance":
      // Prioritize warm weather markets with higher income
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.seasonalityScore < 4 ||
            ["FL", "CA", "AZ", "NV", "TX", "GA"].includes(m.state) ||
            m.tags.some((tag) => ["hot-climate", "affluent", "retirement"].includes(tag)),
        )
        .sort((a, b) => a.seasonalityScore - b.seasonalityScore + (b.medianIncome - a.medianIncome) / 100000)
      break

    case "pressure-washing":
      // Prioritize humid areas and areas with higher home values
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.tags.some((tag) => ["humid", "coastal", "rainy"].includes(tag)) ||
            m.region === "Southeast" ||
            m.homeownershipRate > 0.55,
        )
        .sort((a, b) => b.homeownershipRate - a.homeownershipRate + (b.medianIncome - a.medianIncome) / 50000)
      break

    case "gutter-cleaning":
      // Prioritize areas with seasonal leaf fall and precipitation
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.seasonalityScore > 5 ||
            m.tags.some((tag) => ["seasonal", "rainy", "suburban"].includes(tag)) ||
            ["Northeast", "Midwest", "Southeast"].includes(m.region),
        )
        .sort((a, b) => b.seasonalityScore - a.seasonalityScore + (b.homeownershipRate - a.homeownershipRate))
      break

    case "window-washing":
      // Prioritize urban areas with commercial buildings and affluent suburbs
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.population > 500000 ||
            m.medianIncome > 70000 ||
            m.tags.some((tag) => ["urban", "affluent", "corporate-hub"].includes(tag)),
        )
        .sort((a, b) => (b.population - a.population) / 1000000 + (b.medianIncome - a.medianIncome) / 100000)
      break

    case "exterior-painting":
      // Prioritize areas with seasonal weather that affects paint
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.seasonalityScore > 4 ||
            m.homeownershipRate > 0.55 ||
            m.tags.some((tag) => ["seasonal", "suburban", "growing"].includes(tag)),
        )
        .sort((a, b) => b.homeownershipRate - a.homeownershipRate + (b.seasonalityScore - a.seasonalityScore) / 10)
      break

    case "holiday-lighting":
      // Prioritize affluent areas with seasonal changes
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.seasonalityScore > 5 ||
            m.medianIncome > 70000 ||
            m.tags.some((tag) => ["affluent", "suburban", "seasonal"].includes(tag)),
        )
        .sort((a, b) => (b.seasonalityScore - a.seasonalityScore) / 10 + (b.medianIncome - a.medianIncome) / 100000)
      break

    case "outdoor-lighting":
      // Prioritize affluent areas with security concerns
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.medianIncome > 70000 ||
            m.homeownershipRate > 0.55 ||
            m.tags.some((tag) => ["affluent", "suburban", "growing"].includes(tag)),
        )
        .sort((a, b) => (b.medianIncome - a.medianIncome) / 50000 + (b.homeownershipRate - a.homeownershipRate))
      break

    case "driveway-sealing":
      // Prioritize areas with seasonal weather that affects driveways
      filteredMarkets = topUSMarkets
        .filter(
          (m) => m.seasonalityScore > 5 || m.homeownershipRate > 0.55 || ["Northeast", "Midwest"].includes(m.region),
        )
        .sort((a, b) => (b.seasonalityScore - a.seasonalityScore) / 10 + (b.homeownershipRate - a.homeownershipRate))
      break

    case "snow-removal":
      // Prioritize snowy markets
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.seasonalityScore > 7 ||
            m.tags.some((tag) => ["snow-belt", "seasonal"].includes(tag)) ||
            ["Northeast", "Midwest"].includes(m.region),
        )
        .sort((a, b) => b.seasonalityScore - a.seasonalityScore + (b.population - a.population) / 1000000)
      break

    case "solar-panel-cleaning":
      // Prioritize sunny markets with solar adoption
      filteredMarkets = topUSMarkets
        .filter(
          (m) =>
            m.seasonalityScore < 4 ||
            m.tags.some((tag) => ["sunny", "eco-conscious", "tech-savvy"].includes(tag)) ||
            ["CA", "AZ", "NV", "TX", "FL", "CO"].includes(m.state),
        )
        .sort((a, b) => a.seasonalityScore - b.seasonalityScore + (b.medianIncome - a.medianIncome) / 50000)
      break

    default:
      // Default to population-based sorting if no specific vertical
      filteredMarkets = [...topUSMarkets].sort((a, b) => b.population - a.population)
  }

  // Return the top markets based on limit
  return filteredMarkets.slice(0, limit)
}

// Group markets by region
export function getMarketsByRegion(markets: Market[]): Record<string, Market[]> {
  const regions: Record<string, Market[]> = {
    Northeast: [],
    Southeast: [],
    Midwest: [],
    Southwest: [],
    West: [],
  }

  markets.forEach((market) => {
    regions[market.region].push(market)
  })

  return regions
}
