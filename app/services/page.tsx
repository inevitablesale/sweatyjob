import ServicesPageClient from "./ServicesPageClient"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Robot Mower Service in Richmond, VA | SweatyJob",
  description:
    "Revolutionary AI robot mower service in Richmond neighborhoods. Daily mowing with advanced technology for a perfect lawn without the work.",
  keywords:
    "robot mower richmond va, ai lawn service, automated lawn care richmond, robot lawn service richmond va, smart yard service",
}

export default function ServicesPage() {
  return (
    <div>
      <ServicesPageClient />
      <div className="mb-12 p-6 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Service</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="/robot-mower-in-action.png"
                alt="Lawn mower repair alternative"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-2">Lawn Mower Repair Alternative</h3>
            <p className="text-gray-600 mb-4">
              Why spend hundreds on lawn mower repairs when you can have a perfectly maintained lawn with our robot
              mowing service? No repairs, no maintenance, just results.
            </p>
            <Link href="/repair" className="text-green-600 font-medium hover:underline">
              Learn more about our repair alternative →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
