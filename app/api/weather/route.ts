import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const city = searchParams.get("city")
  const state = searchParams.get("state")

  if (!city || !state) {
    return NextResponse.json({ error: "City and state are required" }, { status: 400 })
  }

  try {
    // Use Open-Meteo API which doesn't require an API key
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=37.5407&longitude=-77.4360&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FNew_York",
    )

    if (!response.ok) {
      throw new Error(`Weather API responded with status: ${response.status}`)
    }

    const data = await response.json()

    // Transform the data to match our expected format
    const weatherInfo = getWeatherDescription(data.current.weather_code)

    const transformedData = {
      temperature: Math.round(data.current.temperature_2m),
      condition: weatherInfo.description,
      description: weatherInfo.description,
      icon: weatherInfo.icon,
    }

    return NextResponse.json(transformedData)
  } catch (error) {
    console.error("Error fetching weather:", error)
    return NextResponse.json({ error: "Failed to fetch weather data" }, { status: 500 })
  }
}

// Weather code mapping for Open-Meteo API
function getWeatherDescription(code: number): { description: string; icon: string } {
  const weatherCodes: Record<number, { description: string; icon: string }> = {
    0: { description: "Clear sky", icon: "☀️" },
    1: { description: "Mainly clear", icon: "🌤️" },
    2: { description: "Partly cloudy", icon: "⛅" },
    3: { description: "Overcast", icon: "☁️" },
    45: { description: "Fog", icon: "🌫️" },
    48: { description: "Depositing rime fog", icon: "🌫️" },
    51: { description: "Light drizzle", icon: "🌦️" },
    53: { description: "Moderate drizzle", icon: "🌦️" },
    55: { description: "Dense drizzle", icon: "🌧️" },
    56: { description: "Light freezing drizzle", icon: "🌨️" },
    57: { description: "Dense freezing drizzle", icon: "🌨️" },
    61: { description: "Slight rain", icon: "🌦️" },
    63: { description: "Moderate rain", icon: "🌧️" },
    65: { description: "Heavy rain", icon: "🌧️" },
    66: { description: "Light freezing rain", icon: "🌨️" },
    67: { description: "Heavy freezing rain", icon: "🌨️" },
    71: { description: "Slight snow fall", icon: "🌨️" },
    73: { description: "Moderate snow fall", icon: "🌨️" },
    75: { description: "Heavy snow fall", icon: "❄️" },
    77: { description: "Snow grains", icon: "❄️" },
    80: { description: "Slight rain showers", icon: "🌦️" },
    81: { description: "Moderate rain showers", icon: "🌧️" },
    82: { description: "Violent rain showers", icon: "🌧️" },
    85: { description: "Slight snow showers", icon: "🌨️" },
    86: { description: "Heavy snow showers", icon: "❄️" },
    95: { description: "Thunderstorm", icon: "⛈️" },
    96: { description: "Thunderstorm with slight hail", icon: "⛈️" },
    99: { description: "Thunderstorm with heavy hail", icon: "⛈️" },
  }

  return weatherCodes[code] || { description: "Unknown", icon: "❓" }
}
