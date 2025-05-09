"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

// Sample testimonials - replace with real ones
const TESTIMONIALS = [
  {
    id: 1,
    name: "Michael Johnson",
    location: "Richmond, VA",
    image: "/confident-businessman.png",
    quote:
      "I switched from TruGreen to SweatyJob's robot mower and I'm saving $900/year with a BETTER looking lawn. My neighbors are jealous!",
    rating: 5,
    previousService: "TruGreen",
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Bellevue, VA",
    image: "/confident-professional-woman.png",
    quote:
      "The silence alone is worth it! No more loud mowers waking up my kids on Saturday mornings. My lawn looks PERFECT every single day.",
    rating: 5,
    previousService: "Weed Man",
  },
  {
    id: 3,
    name: "David Chen",
    location: "Battery Park, VA",
    image: "/professional-man-business-casual.png",
    quote:
      "As a busy professional, I don't have time to manage lawn care. This robot does it ALL automatically and it's cheaper than my old service!",
    rating: 5,
    previousService: "Spring-Green",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length)
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            PEOPLE ARE <span className="text-green-500">DITCHING</span> TRADITIONAL SERVICES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            They switched to AI robotic mowing and they're never going back!
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8 text-white" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8 text-white" />
          </button>

          {/* Testimonial cards */}
          <div className="overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-black border border-gray-800 rounded-xl p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/3">
                    <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden border-4 border-green-500">
                      <Image
                        src={TESTIMONIALS[current].image || "/placeholder.svg"}
                        alt={TESTIMONIALS[current].name}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <div className="text-center mt-4">
                      <div className="font-bold text-xl">{TESTIMONIALS[current].name}</div>
                      <div className="text-gray-400">{TESTIMONIALS[current].location}</div>

                      <div className="flex justify-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < TESTIMONIALS[current].rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`}
                          />
                        ))}
                      </div>

                      <div className="mt-2 bg-red-700/30 text-red-400 px-3 py-1 rounded-full inline-block">
                        Ditched: {TESTIMONIALS[current].previousService}
                      </div>
                    </div>
                  </div>

                  <div className="w-full md:w-2/3">
                    <div className="text-4xl font-serif text-green-400 absolute opacity-30">"</div>
                    <blockquote className="text-xl md:text-2xl italic pl-8 relative">
                      "{TESTIMONIALS[current].quote}"
                    </blockquote>

                    <div className="mt-8 flex">
                      <div className="border-t-2 border-green-500 w-16"></div>
                    </div>

                    <div className="mt-4">
                      <a
                        href="/book"
                        className="bg-green-500 hover:bg-green-600 text-black font-bold px-6 py-2 rounded-lg inline-block"
                      >
                        GET THE SAME RESULTS
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === current ? "bg-green-500" : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
