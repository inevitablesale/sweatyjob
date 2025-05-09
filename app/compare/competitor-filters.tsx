"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface CompetitorFiltersProps {
  cities: string[]
  states: string[]
  selectedCity?: string
  selectedState?: string
  sortBy?: string
  sortOrder?: string
}

export function CompetitorFilters({
  cities,
  states,
  selectedCity,
  selectedState,
  sortBy = "title",
  sortOrder = "asc",
}: CompetitorFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [city, setCity] = useState(selectedCity || "")
  const [state, setState] = useState(selectedState || "")
  const [sort, setSort] = useState(sortBy)
  const [order, setOrder] = useState(sortOrder)

  // Update the URL when filters change
  const updateFilters = () => {
    const params = new URLSearchParams(searchParams)

    if (city) {
      params.set("city", city)
    } else {
      params.delete("city")
    }

    if (state) {
      params.set("state", state)
    } else {
      params.delete("state")
    }

    params.set("sort", sort)
    params.set("order", order)

    router.push(`${pathname}?${params.toString()}`)
  }

  // Apply filters when button is clicked
  const handleApplyFilters = () => {
    updateFilters()
  }

  // Reset all filters
  const handleResetFilters = () => {
    setCity("")
    setState("")
    setSort("title")
    setOrder("asc")

    router.push(pathname)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <Select value={city} onValueChange={setCity}>
            <SelectTrigger>
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <Select value={state} onValueChange={setState}>
            <SelectTrigger>
              <SelectValue placeholder="All States" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort By</label>
          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger>
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="title">Company Name</SelectItem>
              <SelectItem value="city">City</SelectItem>
              <SelectItem value="state">State</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Order</label>
          <Select value={order} onValueChange={setOrder}>
            <SelectTrigger>
              <SelectValue placeholder="Order" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">Ascending</SelectItem>
              <SelectItem value="desc">Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end mt-4 space-x-2">
        <Button variant="outline" onClick={handleResetFilters}>
          Reset
        </Button>
        <Button onClick={handleApplyFilters}>Apply Filters</Button>
      </div>
    </div>
  )
}
