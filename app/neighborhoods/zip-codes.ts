// Map of neighborhoods to zip codes
export const neighborhoodZipCodes: Record<string, string> = {
  "Battery Park": "23222",
  Bellevue: "23227",
  "Laburnum Park": "23227",
  "Ginter Park": "23228",
  "Sherwood Park": "23227",
  Rosedale: "23228",
  "Bryan Parkway": "23226",
  "The Fan": "23220",
  "Church Hill": "23223",
  "Museum District": "23221",
  Carytown: "23221",
  "Scotts Addition": "23230",
  "Jackson Ward": "23219",
  "Shockoe Bottom": "23219",
  Manchester: "23224",
  "Oregon Hill": "23220",
  Carver: "23220",
  Randolph: "23220",
  "Woodland Heights": "23225",
  "Forest Hill": "23225",
  "Westover Hills": "23225",
  "Windsor Farms": "23221",
  Northside: "23227",
}

// Get seasonal offer based on neighborhood
export function getSeasonalOffer(neighborhood: string) {
  const month = new Date().getMonth() + 1 // 1-12

  // Default offers by season
  if (month >= 3 && month <= 5) {
    // Spring (March-May)
    return {
      service: "Window Cleaning",
      discount: "20% OFF",
      description: "Spring Window Cleaning Special",
    }
  } else if (month >= 6 && month <= 8) {
    // Summer (June-August)
    return {
      service: "Pressure Washing",
      discount: "15% OFF",
      description: "Summer Pressure Washing Special",
    }
  } else if (month >= 9 && month <= 11) {
    // Fall (September-November)
    return {
      service: "Gutter Cleaning",
      discount: "20% OFF",
      description: "Fall Gutter Cleaning Special",
    }
  } else {
    // Winter (December-February)
    return {
      service: "Carpet Cleaning",
      discount: "25% OFF",
      description: "Winter Carpet Cleaning Special",
    }
  }
}
