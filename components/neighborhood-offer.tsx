"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, MapPin, X, Scissors } from "lucide-react"
import { PhoneCaptureForm } from "@/components/phone-capture-form"
import { neighborhoodZipCodes } from "@/app/neighborhoods/zip-codes"

interface NeighborhoodOfferProps {
  neighborhood: string
}

export function NeighborhoodOffer({ neighborhood }: NeighborhoodOfferProps) {
  const [dismissed, setDismissed] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  if (dismissed) return null

  const zipCode = neighborhoodZipCodes[neighborhood] || "23220"

  return (
    <Card className="bg-gradient-to-r from-green-900 to-blue-900 border-none shadow-xl mb-8 overflow-hidden relative">
      {submitted ? (
        <CardContent className="p-6">
          <div className="flex flex-col items-center justify-center text-center py-4">
            <div className="bg-white/20 rounded-full p-3 mb-4">
              <Sparkles className="h-8 w-8 text-yellow-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
            <p className="text-white/90 max-w-md">
              Your free robotic lawn mowing trial in {neighborhood} has been reserved. We'll contact you shortly to
              schedule your free consultation and setup.
            </p>
          </div>
        </CardContent>
      ) : (
        <>
          <button
            onClick={() => setDismissed(true)}
            className="absolute top-2 right-2 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Dismiss offer"
          >
            <X className="h-4 w-4 text-white/70" />
          </button>

          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Badge className="bg-yellow-500 text-black font-bold px-3 py-1 text-sm">LAWN MOWING SPECIAL</Badge>
              <div className="flex items-center text-white/80 text-sm">
                <MapPin className="h-3 w-3 mr-1" />
                {zipCode} Residents Only
              </div>
            </div>
            <CardTitle className="text-white text-2xl mt-2 flex items-center">
              <Scissors className="h-5 w-5 mr-2" />
              Lawn Mowing Service in {neighborhood}
            </CardTitle>
            <CardDescription className="text-white/80">FREE 30-Day Robotic Mower Trial - No Obligation</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-white mb-3 font-medium">Enter your phone number for a free lawn mowing quote:</p>
              <PhoneCaptureForm
                source={`lawn-mowing-${neighborhood.toLowerCase().replace(/\s+/g, "-")}-${zipCode}`}
                serviceType="Lawn Mowing"
                location={neighborhood}
                buttonText="Get Free Quote"
                dark={true}
                showThankYou={false}
                skipRedirect={true}
                onSuccess={() => setSubmitted(true)}
              />
            </div>
          </CardContent>

          <CardFooter className="pt-0 pb-4">
            <p className="text-white/70 text-xs">
              *Limited time offer for {neighborhood} residents. Professional lawn mowing service with our robotic mower
              technology. Try for 30 days with no obligation. Serving all Richmond neighborhoods.
            </p>
          </CardFooter>
        </>
      )}
    </Card>
  )
}
