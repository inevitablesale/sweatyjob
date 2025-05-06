"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Award, Trophy, Zap } from "lucide-react"
import Link from "next/link"

const PartnerCertificationBadges = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)

  const certificationLevels = [
    {
      id: "starter",
      name: "Starter",
      icon: <Zap className="h-5 w-5" />,
      color: "bg-gradient-to-br from-green-400 to-green-600",
      textColor: "text-green-400",
      borderColor: "border-green-400",
      requirements: "No experience required",
      benefits: [
        "Complete training program",
        "Marketing materials",
        "Customer support access",
        "Basic territory protection",
      ],
      description:
        "Perfect for new entrepreneurs with zero clients. Start your lawn care business with our complete support system.",
    },
    {
      id: "bronze",
      name: "Bronze",
      icon: <CheckCircle className="h-5 w-5" />,
      color: "bg-gradient-to-br from-amber-700 to-amber-900",
      textColor: "text-amber-700",
      borderColor: "border-amber-700",
      requirements: "5+ active customers",
      benefits: [
        "All Starter benefits",
        "Priority customer support",
        "Exclusive promotions",
        "Monthly training sessions",
      ],
      description:
        "For partners who have demonstrated initial success with at least 5 active customers. Unlock additional support resources.",
    },
    {
      id: "silver",
      name: "Silver",
      icon: <Star className="h-5 w-5" />,
      color: "bg-gradient-to-br from-slate-400 to-slate-600",
      textColor: "text-slate-400",
      borderColor: "border-slate-400",
      requirements: "25+ active customers",
      benefits: [
        "All Bronze benefits",
        "Dedicated account manager",
        "Co-marketing opportunities",
        "Enhanced territory protection",
      ],
      description:
        "For established partners with a growing customer base. Receive personalized support and expanded marketing resources.",
    },
    {
      id: "gold",
      name: "Gold",
      icon: <Award className="h-5 w-5" />,
      color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      textColor: "text-yellow-400",
      borderColor: "border-yellow-400",
      requirements: "50+ active customers",
      benefits: [
        "All Silver benefits",
        "Advanced business analytics",
        "Exclusive product access",
        "Regional leadership opportunities",
      ],
      description:
        "For high-performing partners who have built a substantial customer base. Gain access to exclusive tools and opportunities.",
    },
    {
      id: "platinum",
      name: "Platinum",
      icon: <Trophy className="h-5 w-5" />,
      color: "bg-gradient-to-br from-purple-400 to-purple-600",
      textColor: "text-purple-400",
      borderColor: "border-purple-400",
      requirements: "100+ active customers",
      benefits: [
        "All Gold benefits",
        "Strategic business planning",
        "National marketing campaigns",
        "Advisory board membership",
      ],
      description:
        "Our highest tier for elite partners who have demonstrated exceptional success and leadership in the industry.",
    },
  ]

  return (
    <div className="space-y-8">
      {/* Certification Badges */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {certificationLevels.map((level) => (
          <motion.div
            key={level.id}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedLevel(level.id === selectedLevel ? null : level.id)}
            className="cursor-pointer"
          >
            <div
              className={`w-24 h-24 rounded-full flex items-center justify-center ${level.color} ${
                selectedLevel === level.id ? "ring-4 ring-white" : ""
              }`}
            >
              <div className="text-white text-center">
                <div className="flex justify-center mb-1">{level.icon}</div>
                <div className="text-sm font-bold">{level.name}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Selected Level Details */}
      {selectedLevel && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {certificationLevels
            .filter((level) => level.id === selectedLevel)
            .map((level) => (
              <Card key={level.id} className={`bg-night-900 border ${level.borderColor} shadow-lg`}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-10 h-10 rounded-full ${level.color} flex items-center justify-center mr-4`}>
                      {level.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${level.textColor}`}>{level.name} Partner</h3>
                      <Badge variant="outline" className="mt-1">
                        {level.requirements}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-white mb-4">{level.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {level.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className={`h-4 w-4 ${level.textColor} mr-2 mt-0.5 flex-shrink-0`} />
                        <span className="text-white text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link
                      href={`/partners/certification/${level.id}?level=${level.id}`}
                      className={`inline-flex items-center px-4 py-2 rounded-md ${level.color} text-white text-sm font-medium`}
                    >
                      Get {level.name} Certified
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
        </motion.div>
      )}
    </div>
  )
}

export default PartnerCertificationBadges
