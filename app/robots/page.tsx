import type { Metadata } from "next"
import RobotMowersClientPage from "./RobotMowersClientPage"

export const metadata: Metadata = {
  title: "Robot Lawn Mowers & Weeding Robots | SweatyJob",
  description:
    "Discover the future of lawn care with autonomous robot lawn mowers and weeding robots. Learn about the latest technology that keeps your lawn perfectly maintained with minimal effort.",
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
