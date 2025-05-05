"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set the launch date to April 28, 2025
    const launchDate = new Date("April 28, 2025 00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = launchDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-night-800/80 backdrop-blur-md rounded-full px-6 py-3 border border-night-700">
      <div className="flex items-center space-x-6">
        <div className="text-sweat-500 font-medium">Richmond Launch:</div>

        <div className="flex items-center space-x-4">
          <TimeUnit value={timeLeft.days} label="days" />
          <TimeUnit value={timeLeft.hours} label="hrs" />
          <TimeUnit value={timeLeft.minutes} label="mins" />
          <TimeUnit value={timeLeft.seconds} label="secs" />
        </div>
      </div>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex items-baseline">
      <motion.span
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-mono text-white font-medium"
      >
        {value.toString().padStart(2, "0")}
      </motion.span>
      <span className="text-gray-400 text-sm ml-1">{label}</span>
    </div>
  )
}
