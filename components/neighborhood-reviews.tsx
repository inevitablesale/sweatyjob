"use client"

import { useState } from "react"
import { Star, ThumbsUp } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Function to get neighborhood-specific reviews
export function getNeighborhoodReviews(neighborhood: string) {
  const allReviews = {
    "Battery Park": [
      {
        id: "bp-1",
        name: "Marcus J.",
        date: "2 weeks ago",
        rating: 5,
        avatar: "/confident-african-american-professional.png",
        review:
          "I was skeptical about a bicycle-powered lawn service, but Chris showed up on time and did an amazing job on my front yard. He took his time with the edges and even cleaned up all the clippings from my walkway. Love the eco-friendly approach and the personal touch. Already booked him for next month.",
        helpful: 7,
        verified: true,
      },
      {
        id: "bp-2",
        name: "Tanya W.",
        date: "1 month ago",
        rating: 5,
        avatar: "/confident-blonde-professional.png",
        review:
          "Chris is a breath of fresh air in Battery Park! I love watching him pedal up with his trailer full of equipment. He's been maintaining my lawn for about 6 weeks now, and the difference is noticeable. My neighbors on Overbrook Road have asked for his info. Highly recommend if you want someone who really cares about the details.",
        helpful: 4,
        verified: true,
      },
      {
        id: "bp-3",
        name: "Darnell T.",
        date: "3 weeks ago",
        rating: 4,
        avatar: "/confident-businessman.png",
        review:
          "Good service near Hotchkiss Field. Chris is reliable and does quality work. The only reason for 4 stars instead of 5 is that sometimes he takes longer than expected, but honestly that's because he's being thorough. Would recommend to anyone in Battery Park looking for lawn care.",
        helpful: 2,
        verified: true,
      },
    ],
    Bellevue: [
      {
        id: "bv-1",
        name: "Sarah M.",
        date: "6 weeks ago",
        rating: 5,
        avatar: "/confident-brunette-professional.png",
        review:
          "I found Chris through a neighbor on MacArthur Avenue and I'm so glad I did! He's been cutting my lawn for about 6 weeks now. His bicycle setup is not only environmentally friendly but also much quieter than traditional lawn services. He's very particular about getting the lines straight and the edges perfect. My yard has never looked better!",
        helpful: 9,
        verified: true,
      },
      {
        id: "bv-2",
        name: "Robert K.",
        date: "1 month ago",
        rating: 5,
        avatar: "/confident-executive.png",
        review:
          "Chris has been maintaining our corner lot on Fauquier Avenue for the past two months. He's always on time, communicates well, and does exceptional work. I appreciate that he takes the time to do the job right rather than rushing through it. The bicycle and trailer setup is a conversation starter in the neighborhood!",
        helpful: 5,
        verified: true,
      },
      {
        id: "bv-3",
        name: "Melissa P.",
        date: "3 weeks ago",
        rating: 4,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+woman+30s+red+hair",
        review:
          "I've used Chris's services twice now for my Bellevue home. He's very attentive to detail and takes pride in his work. The only reason I'm giving 4 stars instead of 5 is that scheduling can be a bit difficult as he's getting more popular in the neighborhood. Worth the wait though!",
        helpful: 3,
        verified: true,
      },
    ],
    "Laburnum Park": [
      {
        id: "lp-1",
        name: "David H.",
        date: "7 weeks ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+man+40s+salt+pepper+hair",
        review:
          "Chris has been cutting my lawn on Westwood Avenue for about 7 weeks now. I was one of his first customers in Laburnum Park and have already referred him to three neighbors. His bicycle setup is perfect for our historic district - quiet, non-disruptive, and environmentally friendly. He's very respectful of our property and takes extra care around our garden beds.",
        helpful: 8,
        verified: true,
      },
      {
        id: "lp-2",
        name: "Jennifer L.",
        date: "5 weeks ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+woman+30s+long+hair",
        review:
          "I hired Chris after seeing him work on my neighbor's yard. He's been maintaining our lawn near Laburnum Avenue for over a month now. He's very thorough and takes his time to ensure everything is perfect. I appreciate his attention to detail, especially around our historic home's landscaping features. The bicycle setup is charming and fits our neighborhood aesthetic.",
        helpful: 6,
        verified: true,
      },
      {
        id: "lp-3",
        name: "Michael R.",
        date: "2 weeks ago",
        rating: 4,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+man+30s+short+hair",
        review:
          "Chris has been maintaining our yard near Hermitage Road for about a month. He's reliable, communicative, and does quality work. The bicycle-pulled equipment is surprisingly effective. Only giving 4 stars because sometimes it takes him longer than expected to complete the job, but the results are worth it.",
        helpful: 3,
        verified: true,
      },
    ],
    "Ginter Park": [
      {
        id: "gp-1",
        name: "Elizabeth T.",
        date: "2 months ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+woman+50s+elegant",
        review:
          "Chris was one of my first finds when I moved to Seminary Avenue. He's been maintaining our lawn for about 8 weeks now. His bicycle setup initially made me skeptical, but he handles our large Ginter Park lot with ease. He's meticulous about the edges and takes extra care around our historic home's landscaping. I've already recommended him to several neighbors.",
        helpful: 11,
        verified: true,
      },
      {
        id: "gp-2",
        name: "William B.",
        date: "6 weeks ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+man+60s+distinguished",
        review:
          "We have a challenging yard on Chamberlayne Avenue with lots of obstacles and slopes. Chris has been handling it beautifully for the past month and a half. He takes his time to ensure everything is perfect, and the results speak for themselves. His eco-friendly approach with the bicycle trailer fits perfectly with our values. Highly recommend!",
        helpful: 7,
        verified: true,
      },
      {
        id: "gp-3",
        name: "Patricia N.",
        date: "3 weeks ago",
        rating: 4,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+woman+40s+business+attire",
        review:
          "Chris has been maintaining our yard near Hawthorne Avenue for about a month. He's very detail-oriented and takes pride in his work. The bicycle setup is charming and much quieter than traditional lawn services. The only reason for 4 stars is that he's getting quite busy, so scheduling can sometimes be a challenge.",
        helpful: 4,
        verified: true,
      },
    ],
    "Sherwood Park": [
      {
        id: "sp-1",
        name: "James W.",
        date: "7 weeks ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+man+40s+casual",
        review:
          "Chris has been taking care of our lawn on Sherwood Avenue for about 7 weeks. His bicycle setup initially made me wonder if he could handle our large yard, but he's proven me wrong! He's thorough, detail-oriented, and leaves our lawn looking immaculate. The eco-friendly approach is a bonus, and my kids love watching him arrive with his bike and trailer.",
        helpful: 9,
        verified: true,
      },
      {
        id: "sp-2",
        name: "Karen D.",
        date: "5 weeks ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+woman+50s+short+hair",
        review:
          "We've been using Chris's services for our corner lot near Griffin Avenue for over a month now. He's reliable, communicative, and does exceptional work. I appreciate that he takes the time to do the job right rather than rushing through it. Several neighbors have asked for his contact info after seeing our lawn. Highly recommend!",
        helpful: 6,
        verified: true,
      },
      {
        id: "sp-3",
        name: "Thomas H.",
        date: "3 weeks ago",
        rating: 4,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+man+30s+casual+friendly",
        review:
          "Chris has been maintaining our yard near Brookland Park Boulevard for about a month. His work is excellent and his bicycle setup is perfect for our neighborhood - quiet and non-disruptive. The only reason for 4 stars is that as a one-man operation, he sometimes gets backed up if the weather is bad, but he always communicates clearly about scheduling.",
        helpful: 3,
        verified: true,
      },
    ],
    Rosedale: [
      {
        id: "rd-1",
        name: "Nicole J.",
        date: "6 weeks ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+woman+30s+natural+hair",
        review:
          "Chris has been maintaining our lawn on Rosedale Avenue for about 6 weeks now. He's reliable, thorough, and takes pride in his work. His bicycle setup is not only environmentally friendly but also perfect for navigating our neighborhood's narrow streets. I've already recommended him to several neighbors who have been equally impressed.",
        helpful: 8,
        verified: true,
      },
      {
        id: "rd-2",
        name: "Anthony M.",
        date: "4 weeks ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+man+40s+latino",
        review:
          "We hired Chris after seeing him work on a neighbor's yard near Mechanicsville Turnpike. He's been cutting our lawn for about a month now. He's very detail-oriented and takes his time to ensure everything is perfect. The bicycle and trailer setup is unique and much quieter than traditional lawn services. Highly recommend!",
        helpful: 5,
        verified: true,
      },
      {
        id: "rd-3",
        name: "Stephanie L.",
        date: "2 weeks ago",
        rating: 4,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+woman+20s+casual",
        review:
          "Chris has been maintaining our yard near Carlisle Avenue for about a month. His work is excellent and he's very responsive to communication. The bicycle setup is charming and effective. The only reason for 4 stars is that as his business grows, scheduling flexibility is becoming more limited, but the quality makes it worth the wait.",
        helpful: 3,
        verified: true,
      },
    ],
    "Bryan Parkway": [
      {
        id: "bp-1",
        name: "Daniel C.",
        date: "8 weeks ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+man+30s+asian",
        review:
          "Chris has been maintaining our lawn near Bryan Park Avenue for about 2 months now. He was one of my first discoveries after moving to the neighborhood. His bicycle setup is perfect for our area - environmentally friendly and quiet. He takes extra care around our garden beds and always leaves the yard looking immaculate. I've already referred him to several neighbors.",
        helpful: 10,
        verified: true,
      },
      {
        id: "bp-2",
        name: "Laura S.",
        date: "5 weeks ago",
        rating: 5,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+woman+40s+professional",
        review:
          "We have a challenging yard on Westbrook Avenue with lots of slopes and garden features. Chris has been handling it beautifully for over a month now. He's meticulous, reliable, and takes pride in his work. The bicycle and trailer setup is not only eco-friendly but also less disruptive to our quiet street. Highly recommend!",
        helpful: 7,
        verified: true,
      },
      {
        id: "bp-3",
        name: "Richard B.",
        date: "3 weeks ago",
        rating: 4,
        avatar: "/placeholder.svg?height=100&width=100&query=professional+headshot+man+50s+casual+outdoorsy",
        review:
          "Chris has been cutting our lawn near Bellevue Avenue for about a month. His work is excellent and he's very thorough. The bicycle setup is unique and fits well with our neighborhood's character. The only reason for 4 stars is that scheduling can sometimes be challenging as he's getting more popular in the area, but the quality makes it worth the wait.",
        helpful: 4,
        verified: true,
      },
    ],
    // Add more neighborhoods as needed
  }

  // Return reviews for the specified neighborhood, or an empty array if not found
  return allReviews[neighborhood as keyof typeof allReviews] || []
}

interface NeighborhoodReviewsProps {
  neighborhood: string
}

export default function NeighborhoodReviews({ neighborhood }: NeighborhoodReviewsProps) {
  const reviews = getNeighborhoodReviews(neighborhood)
  const [helpfulClicked, setHelpfulClicked] = useState<Record<string, boolean>>({})

  const handleHelpfulClick = (reviewId: string) => {
    setHelpfulClicked((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }))
  }

  if (reviews.length === 0) {
    return null
  }

  return (
    <div className="bg-slate-800 rounded-lg p-6 mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">What {neighborhood} Residents Are Saying</h2>

      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-slate-700 pb-6 last:border-0 last:pb-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.name} />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center">
                    <p className="font-medium text-white mr-2">{review.name}</p>
                    {review.verified && (
                      <span className="bg-green-900/30 text-green-400 text-xs px-2 py-0.5 rounded-full">Verified</span>
                    )}
                  </div>
                  <p className="text-sm text-slate-400">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-slate-300 mb-4">{review.review}</p>

            <button
              onClick={() => handleHelpfulClick(review.id)}
              className={`flex items-center text-sm ${
                helpfulClicked[review.id] ? "text-blue-400" : "text-slate-400 hover:text-slate-300"
              }`}
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>Helpful ({helpfulClicked[review.id] ? review.helpful + 1 : review.helpful})</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
