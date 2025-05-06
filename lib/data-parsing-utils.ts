/**
 * Safely parses a JSON string or returns a default value if parsing fails
 * @param jsonString The JSON string to parse
 * @param defaultValue The default value to return if parsing fails
 * @returns The parsed JSON or the default value
 */
export function safeJsonParse<T>(jsonString: string | null | undefined, defaultValue: T): T {
  if (!jsonString) return defaultValue

  try {
    return JSON.parse(jsonString) as T
  } catch (error) {
    console.error("Error parsing JSON:", error)
    return defaultValue
  }
}

/**
 * Safely extracts an array from various data formats
 * @param data The data which could be an array, JSON string, or single item
 * @param defaultValue The default value to return if extraction fails
 * @returns An array extracted from the data
 */
export function safeArrayExtract<T>(data: any, defaultValue: T[] = []): T[] {
  try {
    // If it's already an array, use it directly
    if (Array.isArray(data)) {
      return data
    }
    // If it's a string that looks like JSON, try to parse it
    else if (typeof data === "string" && (data.trim().startsWith("[") || data.trim().startsWith("{"))) {
      const parsed = JSON.parse(data)
      return Array.isArray(parsed) ? parsed : [parsed]
    }
    // Otherwise treat it as a single item
    else if (data !== null && data !== undefined) {
      return [data]
    }
    return defaultValue
  } catch (error) {
    console.error("Error extracting array:", error)
    return defaultValue
  }
}

/**
 * Safely extracts property values from an array of objects
 * @param array The array of objects
 * @param propertyName The name of the property to extract
 * @returns An array of property values
 */
export function extractPropertyFromArray<T>(array: any[] | null | undefined, propertyName: string): T[] {
  if (!array || !Array.isArray(array)) return []

  return array.map((item) => {
    if (typeof item === "object" && item !== null && propertyName in item) {
      return item[propertyName]
    }
    return item
  }) as T[]
}
