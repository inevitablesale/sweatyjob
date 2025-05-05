"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, CheckCircle, Info } from "lucide-react"

export default function InstallationGuide() {
  const [activeTab, setActiveTab] = useState("location")

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Robotic Mower Installation Guide</h2>

      <Tabs defaultValue="location" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="location">Location</TabsTrigger>
          <TabsTrigger value="positioning">Positioning</TabsTrigger>
          <TabsTrigger value="mapping">Mapping</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
        </TabsList>

        <TabsContent value="location">
          <Card>
            <CardHeader>
              <CardTitle>Choosing the Right Location</CardTitle>
              <CardDescription>
                Proper placement of the charging station is critical for reliable operation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Wi-Fi Signal Strength</AlertTitle>
                <AlertDescription>
                  Choose a location with strong Wi-Fi signal coverage for reliable connectivity.
                </AlertDescription>
              </Alert>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Do's:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Place on flat, level ground</li>
                    <li>Ensure clear line of sight to the sky (for GPS/RTK models)</li>
                    <li>Position away from large metal objects</li>
                    <li>Maintain at least 3 feet clearance from walls</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Don'ts:</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Avoid placing under trees or overhangs</li>
                    <li>Don't place near sprinkler systems</li>
                    <li>Avoid areas prone to flooding</li>
                    <li>Don't place near large metal objects</li>
                  </ul>
                </div>
              </div>

              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Important</AlertTitle>
                <AlertDescription>
                  For RTK-based systems, maintain a clear view of the sky with no obstructions within a 120° angle.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-end">
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md"
                onClick={() => setActiveTab("positioning")}
              >
                Next: Positioning
              </button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="positioning">
          <Card>
            <CardHeader>
              <CardTitle>Proper Positioning</CardTitle>
              <CardDescription>Correct positioning ensures optimal navigation and coverage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">High-Altitude Installation (Preferred)</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Mount 6-8 feet above ground level</li>
                    <li>Ensure no obstructions within 120° field of view</li>
                    <li>Secure firmly to prevent movement from wind</li>
                    <li>Consider seasonal changes (leaf growth, etc.)</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-medium">Ground Installation (Alternative)</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Keep at least 17 feet from metal fences/doors</li>
                    <li>Avoid glass surfaces and water features</li>
                    <li>Position perpendicular to the ground</li>
                    <li>Maintain distance from tall buildings</li>
                  </ul>
                </div>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Distance Calculation</AlertTitle>
                <AlertDescription>
                  For obstacles, maintain a minimum distance of 1.7 times the height of the obstacle.
                  <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                    <div>4 ft obstacle = 7 ft distance</div>
                    <div>8 ft obstacle = 14 ft distance</div>
                    <div>12 ft obstacle = 21 ft distance</div>
                    <div>16 ft obstacle = 28 ft distance</div>
                  </div>
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button className="px-4 py-2 border border-gray-300 rounded-md" onClick={() => setActiveTab("location")}>
                Previous: Location
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md" onClick={() => setActiveTab("mapping")}>
                Next: Mapping
              </button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="mapping">
          <Card>
            <CardHeader>
              <CardTitle>Lawn Mapping Process</CardTitle>
              <CardDescription>Creating accurate maps ensures efficient mowing patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Preparation</AlertTitle>
                <AlertDescription>
                  Before mapping, remove debris, toys, wires, stones, and other obstacles from the lawn. Ensure no
                  children or pets are present.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h3 className="font-medium">Mapping Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">App-Driven Mapping</h4>
                    <p>Use the mobile app to control the mower along the boundary of the lawn.</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Follow on-screen instructions</li>
                      <li>Move at a steady pace</li>
                      <li>Complete the loop to finish mapping</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Manual Mapping</h4>
                    <p>Physically guide the mower around the perimeter of the lawn.</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Use the provided guide tool</li>
                      <li>Maintain consistent speed</li>
                      <li>Return to starting point</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Mapping Obstacles</h3>
                <p>For areas you want the mower to avoid (flower beds, ponds, etc.):</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Select "Create Obstacle" in the app</li>
                  <li>Guide the mower around the perimeter of the obstacle</li>
                  <li>Complete the loop to define the no-go zone</li>
                  <li>Confirm the obstacle area in the app</li>
                </ol>
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Best Practice</AlertTitle>
                <AlertDescription>
                  Leave at least 4 inches (10 cm) of clearance when mapping along walls, fences, or other obstacles.
                </AlertDescription>
              </Alert>
            </CardContent>
            <CardFooter className="flex justify-between">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md"
                onClick={() => setActiveTab("positioning")}
              >
                Previous: Positioning
              </button>
              <button
                className="px-4 py-2 bg-green-600 text-white rounded-md"
                onClick={() => setActiveTab("maintenance")}
              >
                Next: Maintenance
              </button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Guidelines</CardTitle>
              <CardDescription>Regular maintenance ensures optimal performance and longevity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Weekly Maintenance</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Clean the upper body with a damp cloth</li>
                    <li>Remove debris from wheels</li>
                    <li>Check for damaged blades</li>
                    <li>Clean the charging contacts</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Monthly Maintenance</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Inspect the blade disc for balance</li>
                    <li>Check wheel alignment</li>
                    <li>Clean sensors thoroughly</li>
                    <li>Update firmware if available</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Seasonal Maintenance</h3>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Replace blades (every 3 months)</li>
                    <li>Lubricate steering wheels</li>
                    <li>Check battery health</li>
                    <li>Inspect for wear and tear</li>
                  </ul>
                </div>
              </div>

              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Blade Replacement Safety</AlertTitle>
                <AlertDescription>
                  Always wear protective gloves when replacing blades. Use only manufacturer-approved replacement parts.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h3 className="font-medium">Winter Storage</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fully charge the battery before storage</li>
                  <li>Clean thoroughly before storing</li>
                  <li>Store in a dry location between 32°F and 113°F (0°C to 45°C)</li>
                  <li>Recharge the battery every 60 days during storage</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex justify-start">
              <button className="px-4 py-2 border border-gray-300 rounded-md" onClick={() => setActiveTab("mapping")}>
                Previous: Mapping
              </button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
