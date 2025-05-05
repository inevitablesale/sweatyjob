"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { format, addDays, isBefore, startOfToday } from "date-fns"
import { CalendarIcon, Clock, Loader2 } from "lucide-react"

interface AppointmentTimeSelectorProps {
  onTimeSelected: (date: string, time: string) => void
}

export function AppointmentTimeSelector({ onTimeSelected }: AppointmentTimeSelectorProps) {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [availableTimes, setAvailableTimes] = useState<string[]>([])
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Fetch available times when date changes
  useEffect(() => {
    if (!date) return

    const fetchAvailableTimes = async () => {
      setIsLoading(true)
      setError(null)
      setAvailableTimes([])
      setSelectedTime(null)

      try {
        const response = await fetch(`/api/appointments/available-times?date=${format(date, "yyyy-MM-dd")}`)

        if (!response.ok) {
          throw new Error("Failed to fetch available times")
        }

        const data = await response.json()

        // Sort times chronologically
        const sortedTimes = [...(data.availableTimes || [])].sort((a, b) => {
          const [aHour, aMinute] = a.split(":").map(Number)
          const [bHour, bMinute] = b.split(":").map(Number)

          if (aHour !== bHour) return aHour - bHour
          return aMinute - bMinute
        })

        setAvailableTimes(sortedTimes)
      } catch (error: any) {
        console.error("Error fetching available times:", error)
        setError(error.message || "Failed to fetch available times")
      } finally {
        setIsLoading(false)
      }
    }

    fetchAvailableTimes()
  }, [date])

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    if (date) {
      onTimeSelected(format(date, "yyyy-MM-dd"), time)
    }
  }

  // Convert 24-hour format to 12-hour format
  const formatTime = (time: string): string => {
    const [hours, minutes] = time.split(":").map(Number)
    const period = hours >= 12 ? "PM" : "AM"
    const hours12 = hours % 12 || 12 // Convert 0 to 12 for 12 AM
    return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`
  }

  // Only allow selecting dates from tomorrow up to 30 days in the future
  const today = startOfToday()
  const tomorrow = addDays(today, 1)
  const thirtyDaysFromNow = addDays(today, 30)

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="bg-night-700/50 rounded-lg p-4 md:w-1/2">
        <h3 className="font-medium text-white mb-4 flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2 text-sweat-500" /> Select a Date
        </h3>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) => isBefore(date, tomorrow) || isBefore(thirtyDaysFromNow, date)}
          className="bg-night-800 border border-night-700 rounded-lg p-3"
        />

        {date && (
          <div className="mt-4 bg-night-800/50 p-3 rounded-lg border border-night-700">
            <p className="text-sweat-500 font-medium">Selected: {format(date, "EEEE, MMMM d, yyyy")}</p>
          </div>
        )}
      </div>

      {date && (
        <div className="bg-night-700/50 rounded-lg p-4 md:w-1/2">
          <h3 className="font-medium text-white mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-sweat-500" /> Select a Time
          </h3>

          {isLoading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-sweat-500" />
            </div>
          ) : error ? (
            <div className="text-red-500 text-center py-4">{error}</div>
          ) : availableTimes.length === 0 ? (
            <div className="text-gray-300 text-center py-4">
              No available times for this date. Please select another date.
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-3">
                {availableTimes.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={
                      selectedTime === time
                        ? "bg-sweat-500 hover:bg-sweat-600 text-white"
                        : "bg-night-800 border-night-700 text-gray-300 hover:text-white hover:bg-night-700"
                    }
                    onClick={() => handleTimeSelect(time)}
                  >
                    {formatTime(time)}
                  </Button>
                ))}
              </div>

              {selectedTime && (
                <div className="mt-4 bg-night-800/50 p-3 rounded-lg border border-night-700">
                  <p className="text-sweat-500 font-medium">Selected time: {formatTime(selectedTime)}</p>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}
