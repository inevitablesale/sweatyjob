"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon, MapPinIcon, CalendarIcon, BookOpenIcon, LandmarkIcon, UsersIcon } from "lucide-react"
import ColorfulMap from "./colorful-map"
import type { WikipediaArticle } from "@/lib/wiki-api"

interface WikiCityTemplateProps {
  cityName: string
  stateName: string
  coordinates?: [number, number]
}

export default function WikiCityTemplate({ cityName, stateName, coordinates }: WikiCityTemplateProps) {
  const [wikiData, setWikiData] = useState<WikipediaArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    async function fetchWikiData() {
      try {
        setLoading(true)
        setError(null)

        // Use our API route to fetch Wikipedia data
        const fullTitle = `${cityName}, ${stateName}`
        const response = await fetch(`/api/wikipedia/article?title=${encodeURIComponent(fullTitle)}`)

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.error || `Failed to fetch data for ${fullTitle}`)
        }

        const data = await response.json()
        setWikiData(data)
      } catch (err) {
        console.error("Error fetching Wikipedia data:", err)
        setError(`Failed to load information for ${cityName}, ${stateName}. Please try again later.`)
      } finally {
        setLoading(false)
      }
    }

    fetchWikiData()
  }, [cityName, stateName])

  // In a real implementation, you would fetch these from Wikipedia or another source
  const cityFacts = [
    { icon: <CalendarIcon className="h-5 w-5" />, label: "Established", value: "1737" },
    { icon: <UsersIcon className="h-5 w-5" />, label: "Population", value: "230,436" },
    { icon: <MapPinIcon className="h-5 w-5" />, label: "Area", value: "62.5 sq mi (162 km²)" },
    { icon: <LandmarkIcon className="h-5 w-5" />, label: "Mayor", value: "Levar Stoney" },
  ]

  // Mock neighborhoods data
  const neighborhoods = [
    { name: "Battery Park", coordinates: [-77.4598, 37.5407], color: "#22c55e" },
    { name: "Bellevue", coordinates: [-77.4498, 37.5507], color: "#ef4444" },
    { name: "Ginter Park", coordinates: [-77.4398, 37.5607], color: "#3b82f6" },
    { name: "Sherwood Park", coordinates: [-77.4298, 37.5307], color: "#f59e0b" },
    { name: "Rosedale", coordinates: [-77.4198, 37.5207], color: "#8b5cf6" },
  ]

  if (loading) {
    return (
      <div className="container mx-auto py-8">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Skeleton className="h-[400px] w-full mb-6" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <div>
            <Skeleton className="h-[200px] w-full mb-4" />
            <Skeleton className="h-8 w-full mb-2" />
            <Skeleton className="h-24 w-full mb-4" />
            <Skeleton className="h-8 w-full mb-2" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <Alert variant="destructive">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-2">{wikiData?.title || `${cityName}, ${stateName}`}</h1>
      <p className="text-xl text-muted-foreground mb-8">
        {wikiData?.description || `City in ${stateName}, United States`}
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="neighborhoods">Neighborhoods</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              {wikiData?.thumbnail ? (
                <div className="relative h-[400px] w-full mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={wikiData.thumbnail.source || "/placeholder.svg"}
                    alt={wikiData.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative h-[400px] w-full mb-6 rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={`/abstract-geometric-shapes.png?height=400&width=600&query=${encodeURIComponent(cityName)}%20${encodeURIComponent(stateName)}%20city%20skyline`}
                    alt={`${cityName}, ${stateName}`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="prose max-w-none">
                <p className="text-lg">
                  {wikiData?.extract || `Information about ${cityName}, ${stateName} is currently unavailable.`}
                </p>
              </div>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>City Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {cityFacts.map((fact, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 text-primary">{fact.icon}</div>
                        <div className="flex justify-between w-full">
                          <span className="font-medium">{fact.label}:</span>
                          <span>{fact.value}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                  <CardDescription>Map of {wikiData?.title || `${cityName}, ${stateName}`}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ColorfulMap
                    center={
                      coordinates || [wikiData?.coordinates?.lon || -77.436, wikiData?.coordinates?.lat || 37.5407]
                    }
                    zoom={11}
                    markers={[
                      {
                        coordinates: coordinates || [
                          wikiData?.coordinates?.lon || -77.436,
                          wikiData?.coordinates?.lat || 37.5407,
                        ],
                        color: "#ef4444",
                        title: wikiData?.title || `${cityName}, ${stateName}`,
                      },
                    ]}
                    height="200px"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="neighborhoods" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Neighborhoods in {wikiData?.title || `${cityName}, ${stateName}`}</CardTitle>
              <CardDescription>Explore the diverse neighborhoods of {cityName}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <ColorfulMap
                  center={coordinates || [wikiData?.coordinates?.lon || -77.436, wikiData?.coordinates?.lat || 37.5407]}
                  zoom={12}
                  markers={neighborhoods.map((n) => ({
                    coordinates: n.coordinates,
                    color: n.color,
                    title: n.name,
                    description: `Explore services in ${n.name}`,
                  }))}
                  height="400px"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {neighborhoods.map((neighborhood, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <CardTitle className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: neighborhood.color }}></div>
                        {neighborhood.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        {neighborhood.name} is a charming area with unique character and amenities.
                      </p>
                      <div className="flex justify-between text-sm">
                        <span>Services Available</span>
                        <span className="font-medium">View Details →</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Services in {wikiData?.title || `${cityName}, ${stateName}`}</CardTitle>
              <CardDescription>Lawn care and home services available in this area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2 bg-green-50 dark:bg-green-950/30">
                    <CardTitle className="text-green-600 dark:text-green-400">Robot Mowing</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="mb-4">Automated lawn care with our advanced robot mowers.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Weekly service available</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Eco-friendly solution</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span>Smart scheduling</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2 bg-blue-50 dark:bg-blue-950/30">
                    <CardTitle className="text-blue-600 dark:text-blue-400">Lawn Care</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="mb-4">Complete lawn maintenance and care services.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span>Fertilization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span>Weed control</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span>Seasonal treatments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2 bg-amber-50 dark:bg-amber-950/30">
                    <CardTitle className="text-amber-600 dark:text-amber-400">Landscaping</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="mb-4">Professional landscaping and garden design.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span>Garden design</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span>Hardscaping</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <span>Planting services</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>History of {wikiData?.title || `${cityName}, ${stateName}`}</CardTitle>
              <CardDescription>Learn about the rich history of this city</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p>
                  {cityName} has a rich and diverse history dating back to its founding. The area was originally
                  inhabited by indigenous peoples before European settlement began in the early 18th century.
                </p>

                <h3>Early Settlement</h3>
                <p>
                  The city was officially founded in the early 18th century and quickly became an important center for
                  trade and commerce. Its strategic location along major waterways contributed to its growth and
                  development.
                </p>

                <h3>Modern Development</h3>
                <p>
                  Throughout the 20th century, {cityName} experienced significant growth and transformation. The city
                  expanded its boundaries, developed new neighborhoods, and established itself as a cultural and
                  economic hub in the region.
                </p>

                <h3>Today</h3>
                <p>
                  Today, {cityName} is a vibrant urban center with a diverse population and a strong economy. The city
                  continues to evolve while preserving its historical heritage and unique character.
                </p>

                <div className="flex items-center justify-center my-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpenIcon className="h-4 w-4" />
                    <span>Source: Wikipedia and local historical records</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Explore More About {wikiData?.title || `${cityName}, ${stateName}`}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Local Attractions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Discover the top attractions and points of interest in {cityName}.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Museums and Galleries</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Parks and Recreation</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Historical Landmarks</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Local Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Find the best service providers in {cityName}.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Lawn Care Specialists</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Home Maintenance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Professional Services</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Connect with local community resources in {cityName}.</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Community Centers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Local Government</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Educational Institutions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
