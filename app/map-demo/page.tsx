"use client"

import { useState } from "react"
import ColorfulMap from "@/components/colorful-map"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function MapDemo() {
  const [mapStyle, setMapStyle] = useState<
    "streets" | "outdoors" | "light" | "dark" | "satellite" | "satellite-streets"
  >("streets")

  // Sample data for Richmond neighborhoods
  const richmondNeighborhoods = [
    {
      coordinates: [-77.4598, 37.5407], // Battery Park
      color: "#22c55e", // Green
      title: "Battery Park",
      description: "Robot mowing services available",
    },
    {
      coordinates: [-77.4498, 37.5507], // Bellevue
      color: "#ef4444", // Red
      title: "Bellevue",
      description: "Lawn mowing services available",
    },
    {
      coordinates: [-77.4398, 37.5607], // Ginter Park
      color: "#3b82f6", // Blue
      title: "Ginter Park",
      description: "Full lawn care services available",
    },
    {
      coordinates: [-77.4298, 37.5307], // Sherwood Park
      color: "#f59e0b", // Amber
      title: "Sherwood Park",
      description: "Landscaping services available",
    },
    {
      coordinates: [-77.4198, 37.5207], // Rosedale
      color: "#8b5cf6", // Purple
      title: "Rosedale",
      description: "Garden maintenance services available",
    },
    {
      coordinates: [-77.4698, 37.5107], // The Fan
      color: "#22c55e", // Green
      title: "The Fan",
      description: "Robot mowing services available",
    },
    {
      coordinates: [-77.4798, 37.5307], // Church Hill
      color: "#ef4444", // Red
      title: "Church Hill",
      description: "Lawn mowing services available",
    },
    {
      coordinates: [-77.4898, 37.5507], // Jackson Ward
      color: "#3b82f6", // Blue
      title: "Jackson Ward",
      description: "Full lawn care services available",
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Interactive Neighborhood Map</h1>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle>Map Style</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={mapStyle} onValueChange={(value: any) => setMapStyle(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select map style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="streets">Streets</SelectItem>
                <SelectItem value="outdoors">Outdoors</SelectItem>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="satellite">Satellite</SelectItem>
                <SelectItem value="satellite-streets">Satellite Streets</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader className="pb-2">
            <CardTitle>Legend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span>Robot Mowing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                <span>Lawn Mowing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                <span>Lawn Care</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                <span>Landscaping</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <span>Garden</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <ColorfulMap
            center={[-77.4598, 37.5407]}
            zoom={12}
            markers={richmondNeighborhoods}
            style={mapStyle}
            height="600px"
          />
        </CardContent>
      </Card>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Available Services by Neighborhood</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {richmondNeighborhoods.map((neighborhood, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: neighborhood.color }}></div>
                  {neighborhood.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{neighborhood.description}</p>
                <Button className="mt-3 w-full" variant="outline">
                  View Services
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
