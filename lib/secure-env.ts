/**
 * Secure environment variable handler
 * This provides an additional layer of security by abstracting environment variable access
 */

export const getSecureEnvVariable = (key: string): string | undefined => {
  // This function centralizes access to sensitive environment variables
  // and can be extended with additional security measures if needed
  return process.env[key]
}

// Map service specific functions
export const getMapServiceKey = (): string => {
  const key = getSecureEnvVariable("MAPBOX_ACCESS_TOKEN")
  if (!key) {
    console.error("Map service key not found in environment variables")
    return ""
  }
  return key
}
