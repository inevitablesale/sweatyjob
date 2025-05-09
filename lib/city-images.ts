// Helper function to get city images consistently across the application
export function getCityImageUrl(city: string, state: string, size: "small" | "medium" | "large" = "medium"): string {
  // Normalize city and state names
  const normalizedCity = city.toLowerCase().trim()
  const normalizedState = state.toLowerCase().trim()
  const key = `${normalizedCity}, ${normalizedState}`

  // Define image dimensions based on size
  const dimensions = {
    small: { width: 400, height: 200 },
    medium: { width: 800, height: 400 },
    large: { width: 1200, height: 600 },
  }

  const { width, height } = dimensions[size]

  // Map of cities to high-quality Unsplash images
  const cityImages: Record<string, string> = {
    "dallas, texas": `/placeholder.svg?height=${height}&width=${width}&query=Dallas+Texas+skyline+city`,
    "portland, oregon": `/placeholder.svg?height=${height}&width=${width}&query=Portland+Oregon+city+downtown`,
    "austin, texas": `/placeholder.svg?height=${height}&width=${width}&query=Austin+Texas+skyline+city`,
    "seattle, washington": `/placeholder.svg?height=${height}&width=${width}&query=Seattle+Washington+skyline+city`,
    "chicago, illinois": `/placeholder.svg?height=${height}&width=${width}&query=Chicago+Illinois+skyline+city`,
    "new york, new york": `/placeholder.svg?height=${height}&width=${width}&query=New+York+City+skyline`,
    "los angeles, california": `/placeholder.svg?height=${height}&width=${width}&query=Los+Angeles+California+skyline`,
    "san francisco, california": `/placeholder.svg?height=${height}&width=${width}&query=San+Francisco+California+skyline`,
    "miami, florida": `/placeholder.svg?height=${height}&width=${width}&query=Miami+Florida+skyline+beach`,
    "denver, colorado": `/placeholder.svg?height=${height}&width=${width}&query=Denver+Colorado+skyline+mountains`,
    "boston, massachusetts": `/placeholder.svg?height=${height}&width=${width}&query=Boston+Massachusetts+skyline+harbor`,
    "philadelphia, pennsylvania": `/placeholder.svg?height=${height}&width=${width}&query=Philadelphia+Pennsylvania+skyline`,
    "washington, district of columbia": `/placeholder.svg?height=${height}&width=${width}&query=Washington+DC+monuments`,
    "atlanta, georgia": `/placeholder.svg?height=${height}&width=${width}&query=Atlanta+Georgia+skyline+city`,
    "houston, texas": `/placeholder.svg?height=${height}&width=${width}&query=Houston+Texas+skyline+city`,
    "phoenix, arizona": `/placeholder.svg?height=${height}&width=${width}&query=Phoenix+Arizona+desert+city`,
    "san diego, california": `/placeholder.svg?height=${height}&width=${width}&query=San+Diego+California+beach+city`,
    "las vegas, nevada": `/placeholder.svg?height=${height}&width=${width}&query=Las+Vegas+Nevada+strip+night`,
    "nashville, tennessee": `/placeholder.svg?height=${height}&width=${width}&query=Nashville+Tennessee+music+city`,
    "richmond, virginia": `/placeholder.svg?height=${height}&width=${width}&query=Richmond+Virginia+river+city`,
  }

  // Check if we have a specific image for this city
  if (cityImages[key]) {
    return cityImages[key]
  }

  // If no specific image, generate a placeholder with the city name
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(`${city} ${state} city`)}`
}
