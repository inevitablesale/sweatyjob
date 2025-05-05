"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function TroubleshootingGuide() {
  const [searchTerm, setSearchTerm] = useState("")

  const troubleshootingData = [
    {
      category: "Charging & Battery Issues",
      problems: [
        {
          problem: "Mower won't charge",
          causes: [
            "Power supply failure",
            "Charging contacts dirty or disconnected",
            "Battery temperature too high/low",
          ],
          solutions: [
            "Check power supply and connections",
            "Clean charging contacts with a dry cloth",
            "Allow battery to return to normal temperature range (0-40°C)",
          ],
        },
        {
          problem: "Short battery life",
          causes: ["Battery health degraded", "Cutting in tall or wet grass", "Operating in extreme temperatures"],
          solutions: [
            "Replace battery if health is below 70%",
            "Increase cutting height for tall grass",
            "Operate in moderate temperatures for optimal performance",
          ],
        },
        {
          problem: "Mower shuts off when docking",
          causes: ["Overheating protection activated", "Charging contacts dirty", "Software issue"],
          solutions: [
            "Allow mower to cool down before charging",
            "Clean charging contacts",
            "Update firmware to latest version",
          ],
        },
      ],
    },
    {
      category: "Navigation & Mapping Issues",
      problems: [
        {
          problem: "Mower gets stuck frequently",
          causes: ["Uneven terrain or obstacles", "Cutting height set too low", "Wheel traction issues"],
          solutions: [
            "Mark problem areas as no-go zones",
            "Increase cutting height",
            "Clean wheels and check for debris",
          ],
        },
        {
          problem: "Mower misses areas",
          causes: ["Incomplete mapping", "GPS signal interference", "Battery died during mowing"],
          solutions: [
            "Remap the lawn completely",
            "Check for signal obstructions",
            "Ensure battery is fully charged before mowing",
          ],
        },
        {
          problem: "Mower won't return to charging station",
          causes: ["Charging station moved", "Path blocked", "Navigation system error"],
          solutions: [
            "Ensure charging station hasn't been moved",
            "Clear path to charging station",
            "Restart mower and check for system updates",
          ],
        },
      ],
    },
    {
      category: "Cutting & Performance Issues",
      problems: [
        {
          problem: "Uneven cutting results",
          causes: ["Dull or damaged blades", "Uneven terrain", "Mowing pattern issues"],
          solutions: [
            "Replace blades (recommended every 3 months)",
            "Adjust cutting height for terrain",
            "Ensure complete lawn mapping",
          ],
        },
        {
          problem: "Unusual noise or vibration",
          causes: ["Damaged blade disc", "Foreign object caught in blades", "Motor issues"],
          solutions: [
            "Inspect and replace blade disc if damaged",
            "Remove any debris from cutting system",
            "Contact service if motor issues persist",
          ],
        },
        {
          problem: "Mower stops frequently",
          causes: ["Obstacle detection too sensitive", "Grass too tall", "System overheating"],
          solutions: [
            "Adjust obstacle sensitivity settings",
            "Increase cutting height for tall grass",
            "Allow mower to cool down in shade",
          ],
        },
      ],
    },
    {
      category: "Connectivity Issues",
      problems: [
        {
          problem: "Wi-Fi connection problems",
          causes: ["Weak signal at charging station", "Router compatibility issues", "Incorrect network credentials"],
          solutions: [
            "Relocate charging station for better signal",
            "Ensure router supports 2.4GHz networks",
            "Verify network name and password",
          ],
        },
        {
          problem: "App cannot connect to mower",
          causes: ["Bluetooth connection issues", "Mower powered off", "App needs update"],
          solutions: [
            "Stay within 10 feet of mower for Bluetooth connection",
            "Ensure mower is powered on",
            "Update app to latest version",
          ],
        },
        {
          problem: "GPS signal issues",
          causes: ["Obstructions blocking signal", "Poor satellite coverage", "RTK base station issues"],
          solutions: [
            "Ensure clear view of sky",
            "Wait for better satellite coverage",
            "Check RTK base station positioning and connections",
          ],
        },
      ],
    },
  ]

  const filteredData = searchTerm
    ? troubleshootingData
        .map((category) => ({
          ...category,
          problems: category.problems.filter(
            (problem) =>
              problem.problem.toLowerCase().includes(searchTerm.toLowerCase()) ||
              problem.causes.some((cause) => cause.toLowerCase().includes(searchTerm.toLowerCase())) ||
              problem.solutions.some((solution) => solution.toLowerCase().includes(searchTerm.toLowerCase())),
          ),
        }))
        .filter((category) => category.problems.length > 0)
    : troubleshootingData

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <h2 className="text-3xl font-bold text-center mb-8">Robotic Mower Troubleshooting Guide</h2>

      <div className="relative mb-8">
        <Input
          type="text"
          placeholder="Search for issues, causes, or solutions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        {searchTerm && (
          <Button variant="ghost" size="sm" className="absolute right-2 top-2" onClick={() => setSearchTerm("")}>
            Clear
          </Button>
        )}
      </div>

      {filteredData.length === 0 ? (
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-gray-500">No results found. Try a different search term.</p>
          </CardContent>
        </Card>
      ) : (
        <Accordion type="single" collapsible className="w-full">
          {filteredData.map((category, categoryIndex) => (
            <AccordionItem key={categoryIndex} value={`category-${categoryIndex}`}>
              <AccordionTrigger className="text-lg font-medium">{category.category}</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-2">
                  {category.problems.map((problem, problemIndex) => (
                    <Card key={problemIndex} className="border-l-4 border-l-green-500">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{problem.problem}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Possible Causes:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {problem.causes.map((cause, causeIndex) => (
                              <li key={causeIndex}>{cause}</li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Solutions:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {problem.solutions.map((solution, solutionIndex) => (
                              <li key={solutionIndex}>{solution}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="text-lg font-medium text-blue-800 mb-2">Partner Support Tip</h3>
        <p className="text-blue-700">
          When troubleshooting with customers, always verify the mower's firmware is up to date before proceeding with
          other solutions. Many issues can be resolved with the latest software updates.
        </p>
      </div>
    </div>
  )
}
