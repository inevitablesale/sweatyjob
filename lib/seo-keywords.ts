// Map of keyword variations for robot lawn mower
export const robotLawnMowerKeywords = [
  "Robot Lawnmower",
  "Robot Lawnmower Reviews",
  "Robot Lawnmower Sale",
  "Robot Lawnmower Price",
  "Robot Lawnmower Review",
  "Toro Robot Lawnmower",
  "Gardena Robot Lawnmower",
  "Solar Robot Lawnmower",
  "Best Robot Lawnmower",
  "Robot Lawnmower Deals",
  "Electric Robot Lawnmower",
]

// Map of keyword variations for lawn mower repair
export const lawnMowerRepairKeywords = [
  "Lawn Mower Repair Near Me",
  "Lawn Mower Repair Near Me Mobile",
  "Lawn Mower Repair",
  "Lawn Mower Repair And Servicing",
  "Lawn Mower Repair And Service",
  "Lawn Mower Repair Services",
  "Lawn Mower Repair Service Near Me",
  "Lawn Mower Repair And Service Near Me",
  "Lawn Mower Repair Store",
  "Lawn Mower Repair Shops",
  "Mobile Lawn Mower Repair Near Me",
  "Lawn Mower Repair Store Near Me",
  "Lawn Mower Repair Mobile",
  "Lawn Mower Repair Shop",
  "Lawn Mower Repair Shops Near Me",
]

// Map of keyword variations for lawn mower rental
export const lawnMowerRentalKeywords = [
  "Lawn Mower Rental",
  "Lawn Mower Rental Near Me",
  "Lawn Mower Rental At Home Depot",
  "Riding Lawn Mower Rental",
  "Lawn Mower Rental Home Depot",
  "Ride Lawn Mower Rental",
  "Home Depot Lawn Mower Rental",
  "Lawn Mower For Rental",
]

// Function to get a keyword based on the current path
export function getKeywordByPath(path: string, keywordList: string[]): string {
  // Create a deterministic but seemingly random selection based on the path
  // This ensures the same page always gets the same keyword
  const pathSum = path.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)
  const index = pathSum % keywordList.length
  return keywordList[index]
}

// Specific functions for each keyword type
export function getRobotLawnMowerKeyword(path: string): string {
  return getKeywordByPath(path, robotLawnMowerKeywords)
}

export function getLawnMowerRepairKeyword(path: string): string {
  return getKeywordByPath(path, lawnMowerRepairKeywords)
}

export function getLawnMowerRentalKeyword(path: string): string {
  return getKeywordByPath(path, lawnMowerRentalKeywords)
}
