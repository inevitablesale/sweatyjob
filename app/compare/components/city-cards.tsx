"use client"

import Image from "next/image"

interface City {
  id: string
  name: string
  state: string
  image: string
}

interface CityCardsProps {
  cities: City[]
  selectedCity: string
  onSelectCity: (cityId: string) => void
}

export default function CityCards({ cities, selectedCity, onSelectCity }: CityCardsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cities.map((city) => (
        <div
          key={city.id}
          onClick={() => onSelectCity(city.id)}
          className={`cursor-pointer rounded-lg overflow-hidden transition-all ${
            selectedCity === city.id ? "ring-4 ring-green-500 scale-105" : "hover:shadow-lg hover:scale-105"
          }`}
        >
          <div className="relative h-32">
            <Image
              src={city.image || "/placeholder.svg"}
              alt={`${city.name}, ${city.state}`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white font-bold">{city.name}</h3>
                <p className="text-white/80 text-sm">{city.state}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
