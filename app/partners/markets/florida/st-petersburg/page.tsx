import LocalAreaMap from "@/components/local-area-map"

export default function Page() {
  return (
    <div>
      <h1>St. Petersburg</h1>
      <LocalAreaMap
        center={{ lat: 27.7676, lng: -82.6403 }} // St. Petersburg coordinates
        cityName="St. Petersburg"
      />
    </div>
  )
}
