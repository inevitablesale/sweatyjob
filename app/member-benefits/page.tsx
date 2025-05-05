import Image from "next/image"
import { Sparkles, Droplets, Heart, Percent, CheckCircle2 } from "lucide-react"
import { PhoneCaptureForm } from "@/components/phone-capture-form"

export default function MemberBenefitsPage() {
  const memberServices = [
    {
      title: "Window Cleaning",
      description: "Crystal clear windows inside and out for a brighter, cleaner home.",
      regularPrice: "$150",
      memberPrice: "$120",
      discount: "20% off",
      icon: <Sparkles className="h-6 w-6 text-sweat-500" />,
      image: "/images/services/window-cleaning.jpg",
    },
    {
      title: "Pressure Washing",
      description: "Revitalize your home's exterior surfaces with professional pressure washing.",
      regularPrice: "$200",
      memberPrice: "$150",
      discount: "25% off",
      icon: <Droplets className="h-6 w-6 text-sweat-500" />,
      image: "/images/services/pressure-washing.jpg",
    },
    {
      title: "Flower Bed Maintenance",
      description: "Keep your garden beds looking beautiful with professional maintenance and care.",
      regularPrice: "$150",
      memberPrice: "$100",
      discount: "33% off",
      icon: <Heart className="h-6 w-6 text-sweat-500" />,
      image: "/images/services/flower-bed-maintenance.jpg",
    },
    {
      title: "Deck Staining",
      description: "Protect and beautify your deck with our professional staining service.",
      regularPrice: "$400",
      memberPrice: "$300",
      discount: "25% off",
      icon: <Percent className="h-6 w-6 text-sweat-500" />,
      image: "/images/services/deck-staining.jpg",
    },
  ]

  const membershipBenefits = [
    {
      title: "Exclusive Discounts",
      description: "Save 20-33% on all home services you already need.",
    },
    {
      title: "Priority Scheduling",
      description: "Members get first access to booking slots before they open to the public.",
    },
    {
      title: "Dedicated Support",
      description: "Direct line to our customer service team for faster response times.",
    },
    {
      title: "Seasonal Promotions",
      description: "Special member-only offers throughout the year.",
    },
    {
      title: "Referral Rewards",
      description: "Earn credits for every friend you refer who becomes a member.",
    },
    {
      title: "Free Consultations",
      description: "Complimentary home service assessments and quotes.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-night-900">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-night-900/90 via-night-900/80 to-night-900"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-sweat-500/10 text-sweat-500 rounded-full text-sm font-medium mb-4">
              EXCLUSIVE MEMBERSHIP
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              <span className="text-gradient">Member Benefits</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
              Unlock exclusive perks and savings with your SweatyJob membership. More than just lawn care—it's a
              complete home service solution.
            </p>
            <div className="max-w-md mx-auto">
              <PhoneCaptureForm source="member_benefits_hero" buttonText="Join Now" dark={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="py-24 bg-night-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-sweat-500/10 text-sweat-500 rounded-full text-sm font-medium mb-4">
              MEMBERSHIP PERKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Everything Included With Your Membership</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your SweatyJob membership is designed to give you more than just a perfect lawn. Enjoy these exclusive
              benefits:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-night-700/50 rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl"
              >
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-sweat-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Services Section */}
      <section className="py-24 bg-night-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-sweat-500/10 text-sweat-500 rounded-full text-sm font-medium mb-4">
              EXCLUSIVE DISCOUNTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Save on Premium Home Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Members enjoy 20-33% discounts on these premium home services that would otherwise eat up your weekends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {memberServices.map((service, index) => (
              <div
                key={index}
                className="bg-night-800/60 rounded-xl overflow-hidden border border-night-700 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl"
              >
                <div className="relative h-48 w-full">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                  <div className="absolute top-3 right-3 bg-sweat-500 text-night-900 px-3 py-1 rounded-full text-sm font-bold">
                    {service.discount}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-sweat-500/10 p-3 rounded-full mr-3">{service.icon}</div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Regular Price</p>
                      <p className="text-gray-300 line-through">{service.regularPrice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Member Price</p>
                      <p className="text-xl font-bold text-sweat-500">{service.memberPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers Section */}
      <section className="py-24 bg-night-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-sweat-500/10 text-sweat-500 rounded-full text-sm font-medium mb-4">
              MEMBERSHIP OPTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Choose Your Membership Level</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the membership tier that best fits your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-night-700/50 rounded-xl p-8 border border-night-600 transform transition-all duration-300 hover:translate-y-[-8px]">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Complete Membership</h3>
                <p className="text-gray-300 mb-4">Lawn care + member benefits</p>
                <div className="text-4xl font-bold text-white">
                  $120<span className="text-xl text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Billed May-October</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Daily automated mowing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Monthly weed eating & edging</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">20-33% off all home services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Dedicated support line</span>
                </li>
              </ul>
              <PhoneCaptureForm source="complete_membership" buttonText="Join Now" dark={true} />
            </div>

            <div className="bg-night-700/50 rounded-xl p-8 border border-night-600 transform transition-all duration-300 hover:translate-y-[-8px]">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Benefits Only</h3>
                <p className="text-gray-300 mb-4">Just the member perks</p>
                <div className="text-4xl font-bold text-white">
                  $10<span className="text-xl text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">Billed monthly</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">20-33% off all home services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Priority scheduling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Dedicated support line</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Seasonal promotions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-sweat-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Referral rewards program</span>
                </li>
              </ul>
              <PhoneCaptureForm source="benefits_only" buttonText="Join Now" dark={true} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-night-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-gradient-to-r from-sweat-600 to-sweat-500 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Unlock These Benefits?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join today and start enjoying exclusive member perks and savings on premium home services.
              </p>
              <div className="max-w-md mx-auto mb-8">
                <PhoneCaptureForm source="member_benefits_page" buttonText="Join Now" dark={true} />
              </div>
              <p className="text-white/70">No commitment required. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
