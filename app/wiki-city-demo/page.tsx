"use client"

import type React from "react"

import { useState } from "react"
import WikiCityTemplate from "@/components/wiki-city-template"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function WikiCityDemo() {
  const [cityName, setCityName] = useState("Richmond")
  const [stateName, setStateName] = useState("Virginia")
  const [coordinates, setCoordinates] = useState<[number, number]>([-77.436, 37.5407])
  const [currentCity, setCurrentCity] = useState("Richmond")
  const [currentState, setCurrentState] = useState("Virginia")
  const [currentCoordinates, setCurrentCoordinates] = useState<[number, number]>([-77.436, 37.5407])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentCity(cityName)
    setCurrentState(stateName)
    setCurrentCoordinates(coordinates)
  }

  // Predefined cities for quick selection
  const predefinedCities = [
    { city: "Richmond", state: "Virginia", coordinates: [-77.436, 37.5407] },
    { city: "Fremont", state: "California", coordinates: [-121.9885, 37.5485] },
    { city: "Chandler", state: "Arizona", coordinates: [-111.8413, 33.3062] },
    { city: "San Jose", state: "California", coordinates: [-121.8863, 37.3382] },
    { city: "Virginia Beach", state: "Virginia", coordinates: [-75.978, 36.8529] },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">City Information Explorer</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search for a City</CardTitle>
          <CardDescription>Enter a city name to view its information</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium mb-1">
                  City Name
                </label>
                <Input
                  id="city"
                  value={cityName}
                  onChange={(e) => setCityName(e.target.value)}
                  placeholder="Enter city name"
                  required
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium mb-1">
                  State
                </label>
                <Input
                  id="state"
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  placeholder="Enter state name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Quick Select</label>
              <div className="flex flex-wrap gap-2">
                {predefinedCities.map((city, index) => (
                  <Button
                    key={index}
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setCityName(city.city)
                      setStateName(city.state)
                      setCoordinates(city.coordinates)
                    }}
                  >
                    {city.city}, {city.state}
                  </Button>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full md:w-auto md:self-end">
              View City Information
            </Button>
          </form>
        </CardContent>
      </Card>

      <WikiCityTemplate cityName={currentCity} stateName={currentState} coordinates={currentCoordinates} />
    </div>
  )
}
