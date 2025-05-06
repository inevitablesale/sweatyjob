import MarketMapClient from "./market-map-client"

interface MarketMapProps {
  center: [number, number]
  zoom: number
  markers?: Array<{
    coordinates: [number, number]
    title: string
  }>
}

export default function MarketMap({ center, zoom, markers }: MarketMapProps) {
  return (
    <div className="w-full my-8">
      <MarketMapClient center={center} zoom={zoom} markers={markers} />
    </div>
  )
}
