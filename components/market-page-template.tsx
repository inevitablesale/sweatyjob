import type { MarketPageProps } from "@/types/market-page.types"
import { Button } from "@/components/ui/button"
import { PhoneIcon, MapPinIcon, CalendarIcon } from "lucide-react"
import MarketStatsCard from "./market-stats-card"
import MarketResearchStats from "./market-research-stats"
import MarketOpportunity from "./market-opportunity"
import IndustryShowcase from "./industry-showcase"
import CityDataDisplay from "./city-data-display"
import PhoneCaptureForm from "./phone-capture-form"
import PartnerCertificationBadges from "./partner-certification-badges"

export function MarketPageTemplate({
  cityName,
  stateName,
  heroImage,
  cityDescription,
  marketStats,
  competitorName,
  competitorDescription,
  industryPartners,
  cityData,
  \,
}: MarketPageProps)
=>
{
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] md:h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Robotic Lawn Care in {cityName}, {stateName}
          </h1>
          <p className="text-xl text-white max-w-2xl mb-8">
            Become the exclusive SweatyJob partner in one of America's most promising markets
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <PhoneIcon className="mr-2 h-5 w-5" /> Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
              <MapPinIcon className="mr-2 h-5 w-5" /> View Market Data
            </Button>
          </div>
        </div>
      </section>

      {/* City Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">The {cityName} Opportunity</h2>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">{cityDescription}</p>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Market Statistics</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {marketStats.map((stat, index) => (
                    <MarketStatsCard
                      key={index}
                      title={stat.title}
                      value={stat.value}
                      subtitle={stat.subtitle}
                      description={stat.description}
                      icon={stat.icon}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Reserve Your Territory</h3>
              <p className="text-gray-700 mb-6">
                Be the first to bring autonomous lawn care to {cityName}. Fill out the form to learn about our exclusive
                partnership opportunity.
              </p>
              <PhoneCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why SweatyJob Outperforms the Competition</h2>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">SweatyJob vs. {competitorName}</h3>
              <p className="text-gray-700 mb-6">{competitorDescription}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">SweatyJob Advantage</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>Autonomous robotic mowers with AI navigation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>24/7 silent operation - mow at night, no disruptions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>Zero emissions, eco-friendly operation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 font-bold mr-2">✓</span>
                      <span>Subscription model with recurring revenue</span>
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-lg mb-2">{competitorName} Disadvantages</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 font-bold mr-2">✗</span>
                      <span>Manual labor with high operational costs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 font-bold mr-2">✗</span>
                      <span>Noisy gas-powered equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 font-bold mr-2">✗</span>
                      <span>Carbon emissions and environmental impact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 font-bold mr-2">✗</span>
                      <span>One-time service revenue model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Research */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">{cityName} Market Research</h2>
          <MarketResearchStats marketSize="$5.4 Billion by 2026" growthRate="CAGR of 12.5% (2023-2028)" />
        </div>
      </section>

      {/* Local Data */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">LOCAL HOMEOWNER DATA</h2>
          <p className="text-center text-lg mb-8">
            We understand {cityName} better than {competitorName} ever will. Our technology is tailored to local
            conditions.
          </p>

          <CityDataDisplay cityName={cityName} stateName={stateName} />
        </div>
      </section>

      {/* Industry Partners */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Industry Partners</h2>
          <IndustryShowcase partners={industryPartners} />
          <div className="mt-12">
            <PartnerCertificationBadges />
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">The {cityName} Opportunity</h2>
          <MarketOpportunity />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Lawn Care in {cityName}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the SweatyJob partner network and secure exclusive rights to the {cityName} market before your
            competition does.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
              <PhoneIcon className="mr-2 h-5 w-5" /> Schedule a Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-800">
              <CalendarIcon className="mr-2 h-5 w-5" /> View Partner Requirements
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
