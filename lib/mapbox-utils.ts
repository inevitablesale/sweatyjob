// Richmond, VA coordinates
export const RICHMOND_CENTER = {
  lat: 37.5407,
  lng: -77.436,
}

// Service radius in miles
export const SERVICE_RADIUS = 3

// Convert miles to meters for calculations
export const milesToMeters = (miles: number): number => {
  return miles * 1609.34
}

// Calculate distance between two coordinates using Haversine formula
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371e3 // Earth's radius in meters
  const φ1 = (lat1 * Math.PI) / 180
  const φ2 = (lat2 * Math.PI) / 180
  const Δφ = ((lat2 - lat1) * Math.PI) / 180
  const Δλ = ((lon2 - lon1) * Math.PI) / 180

  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c // in meters

  return distance
}

// Check if an address is within service area
export function isWithinServiceArea(lat: number, lng: number): boolean {
  const distanceInMeters = calculateDistance(RICHMOND_CENTER.lat, RICHMOND_CENTER.lng, lat, lng)
  const serviceRadiusInMeters = milesToMeters(SERVICE_RADIUS)
  return distanceInMeters <= serviceRadiusInMeters
}

// Format coordinates for Supabase JSONB storage
export function formatCoordinatesForStorage(lat: number, lng: number) {
  return { latitude: lat, longitude: lng }
}
