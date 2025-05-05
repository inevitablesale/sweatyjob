import type { Metadata } from "next"
import RobotMowersClientPage from "./RobotMowersClientPage"

export const metadata: Metadata = {
  title: "SmartYard Robot Lawn Mowing Service | AI-Powered Mowers in Richmond, VA",
  description:
    "Experience the future of lawn care with our SmartYard robot lawn mowing service. Daily cutting, perfect results, no work for you. Starting at $79/month in Richmond.",
  keywords: "lawn mowing robot, robot lawn mowing, SmartYard, automatic lawn mowing, lawn mowing roomba",
  openGraph: {
    images: [
      {
        url: "https://sjc.microlink.io/ig0XUyoCut0OFQNOPrbB0OvmMhNnJZYdHim0PJaD2frKiA-jRrBXZqxFFzQsygkv9y0bokg4Y3CU9RX9mUJO3Q.jpeg",
        width: 1200,
        height: 630,
        alt: "SmartYard Robot Lawn Mowing Service",
      },
    ],
  },
}

export default function RobotMowersPage() {
  return <RobotMowersClientPage />
}
