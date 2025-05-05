"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"

export default function MarketOpportunity() {
  const marketSizeData = [
    { year: "2024", value: 1826 },
    { year: "2025", value: 2023 },
    { year: "2026", value: 2241 },
    { year: "2027", value: 2483 },
    { year: "2028", value: 2751 },
    { year: "2029", value: 3048 },
    { year: "2030", value: 3377 },
    { year: "2031", value: 3742 },
    { year: "2032", value: 4146 },
  ]

  const marketShareData = [
    { name: "Residential", value: 60, color: "#10B981" },
    { name: "Commercial", value: 20, color: "#3B82F6" },
    { name: "Golf & Sports", value: 10, color: "#F59E0B" },
    { name: "Municipal", value: 5, color: "#8B5CF6" },
    { name: "Rental", value: 5, color: "#EC4899" },
  ]

  const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#8B5CF6", "#EC4899"]

  const revenueStreamsData = [
    { name: "Equipment Sales", value: 35, description: "Selling robotic mowers to customers" },
    { name: "Installation", value: 25, description: "Professional setup and configuration services" },
    { name: "Maintenance", value: 20, description: "Regular service contracts and repairs" },
    { name: "Monitoring", value: 10, description: "Remote monitoring and management services" },
    { name: "Rental", value: 10, description: "Short-term rental programs for seasonal needs" },
  ]

  const benefitsData = [
    {
      title: "Labor Savings",
      value: "$15K-30K",
      description: "Each mower can replace 2-3 workers annually",
    },
    {
      title: "Fuel Savings",
      value: "90%",
      description: "Electric mowers drastically reduce fuel costs",
    },
    {
      title: "Maintenance",
      value: "40%",
      description: "Lower maintenance costs vs. traditional mowers",
    },
    {
      title: "Precision",
      value: "3-5mm",
      description: "Consistent cutting height for premium results",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Robotic Mower Market Opportunity</h2>

      <Tabs defaultValue="market" className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="market">Market Size</TabsTrigger>
          <TabsTrigger value="segments">Market Segments</TabsTrigger>
          <TabsTrigger value="revenue">Revenue Streams</TabsTrigger>
          <TabsTrigger value="benefits">Client Benefits</TabsTrigger>
        </TabsList>

        <TabsContent value="market">
          <Card>
            <CardHeader>
              <CardTitle>Global Robotic Mower Market Growth</CardTitle>
              <CardDescription>Market projected to reach $4.6 billion by 2032 with 10.8% CAGR</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={marketSizeData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: "Market Size ($ Millions)", angle: -90, position: "insideLeft" }} />
                    <Tooltip formatter={(value) => [`$${value}M`, "Market Size"]} />
                    <Bar dataKey="value" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">North America Market</h3>
                  <p>$568 million in 2024</p>
                  <p>9.26% projected CAGR through 2032</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Key Growth Drivers</h3>
                  <ul className="list-disc pl-5">
                    <li>Labor shortages in landscaping</li>
                    <li>Rising labor costs</li>
                    <li>Environmental regulations</li>
                    <li>Smart home integration</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="segments">
          <Card>
            <CardHeader>
              <CardTitle>Market Segments</CardTitle>
              <CardDescription>Understanding the different customer segments and their needs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={marketShareData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {marketShareData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, "Market Share"]} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2 text-green-600">Residential (60%)</h3>
                    <p>Homeowners seeking convenience and consistent lawn care</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Suburban homes with 0.25-1 acre lawns</li>
                      <li>Smart home enthusiasts</li>
                      <li>Busy professionals with limited time</li>
                    </ul>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2 text-blue-600">Commercial (20%)</h3>
                    <p>Businesses looking to reduce labor costs and improve efficiency</p>
                    <ul className="list-disc pl-5 mt-2">
                      <li>Landscaping companies</li>
                      <li>Property management firms</li>
                      <li>Corporate campuses</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2 text-amber-500">Golf & Sports (10%)</h3>
                  <p>Precision mowing for athletic fields and courses</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Golf courses</li>
                    <li>Sports complexes</li>
                    <li>School athletic fields</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2 text-purple-600">Municipal (5%)</h3>
                  <p>Public spaces requiring consistent maintenance</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>City parks</li>
                    <li>Government facilities</li>
                    <li>Public recreation areas</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2 text-pink-600">Rental (5%)</h3>
                  <p>Short-term usage without full ownership commitment</p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Equipment rental companies</li>
                    <li>Seasonal property owners</li>
                    <li>Event venues</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="revenue">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Streams for Partners</CardTitle>
              <CardDescription>Multiple ways to generate income from robotic mower services</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={revenueStreamsData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {revenueStreamsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Revenue Share"]} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Equipment Sales</h3>
                  <p>Profit margins: 15-30%</p>
                  <p>Average sale: $1,500-$3,000</p>
                  <p>Opportunity for accessories and add-ons</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Installation Services</h3>
                  <p>Average revenue: $200-$500 per installation</p>
                  <p>1-3 hours of labor per job</p>
                  <p>Opportunity for upselling premium mapping</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Maintenance Contracts</h3>
                  <p>Monthly recurring: $20-$50</p>
                  <p>Seasonal tune-ups: $75-$150</p>
                  <p>Blade replacement: $30-$60 every 3 months</p>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">Monitoring Services</h3>
                  <p>Monthly subscription: $15-$30</p>
                  <p>Remote diagnostics and troubleshooting</p>
                  <p>Performance optimization and reporting</p>
                </div>
              </div>

              <div className="border rounded-lg p-4 mt-4">
                <h3 className="font-medium mb-2">Rental Programs</h3>
                <p>Weekly rental: $100-$200</p>
                <p>Monthly rental: $300-$600</p>
                <p>Seasonal rental (3 months): $800-$1,500</p>
                <p>Rent-to-own options for qualified customers</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benefits">
          <Card>
            <CardHeader>
              <CardTitle>Client Benefits & ROI</CardTitle>
              <CardDescription>Compelling reasons for clients to invest in robotic mowing solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefitsData.map((benefit, index) => (
                  <div key={index} className="border rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-medium">{benefit.title}</h3>
                      <span className="text-2xl font-bold text-green-600">{benefit.value}</span>
                    </div>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-medium">Additional Benefits</h3>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Environmental Impact</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Zero emissions during operation</li>
                    <li>Reduced noise pollution (60dB vs. 95dB for gas mowers)</li>
                    <li>No fuel spills or contamination</li>
                    <li>Grass clippings act as natural fertilizer</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Operational Advantages</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Consistent mowing schedule regardless of weather or staffing</li>
                    <li>Ability to mow during off-hours (early morning, evening)</li>
                    <li>Reduced liability from worker injuries</li>
                    <li>Scalable solution for multiple properties</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-2">Return on Investment Timeline</h4>
                  <p>Most commercial clients see full ROI within:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Small properties (under 1 acre):</strong> 12-18 months
                    </li>
                    <li>
                      <strong>Medium properties (1-3 acres):</strong> 8-14 months
                    </li>
                    <li>
                      <strong>Large properties (3+ acres):</strong> 6-12 months
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
