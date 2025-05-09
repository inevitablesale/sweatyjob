"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import VideoModal from "../../components/video-modal"

export default function RobotMowersClientPage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideo(videoUrl)
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    setCurrentVideo("")
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Robotic Lawn Mowers</h1>
              <p className="text-xl text-white mb-8">
                Experience the future of lawn care with our SmartYard AI-powered robot mowers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/purchase/smart-yard"
                  className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium text-lg inline-block text-center"
                >
                  Shop Now
                </Link>
                <button
                  onClick={() => openVideoModal("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-lg font-medium text-lg inline-block text-center"
                >
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image src="/robot-lawn-mower.png" alt="Robot Lawn Mower" fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Smart Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Efficient Cutting</h3>
              <p className="text-gray-600">
                Advanced blade technology ensures a perfect cut every time, maintaining your lawn at the ideal height.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Navigation</h3>
              <p className="text-gray-600">
                AI-powered navigation systems create optimal mowing patterns and avoid obstacles with precision.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scheduled Mowing</h3>
              <p className="text-gray-600">
                Set it and forget it with customizable mowing schedules that work around your lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Robot Mower Models</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Model 1 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src="/images/husqvarna-automower.png"
                  alt="SmartYard Basic Model"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SmartYard Basic</h3>
                <p className="text-gray-600 mb-4">Perfect for small to medium yards up to 0.25 acres.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">$999</span>
                  <Link
                    href="/purchase/smart-yard?model=basic"
                    className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Model 2 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 bg-gray-100">
                <Image src="/images/worx-landroid.png" alt="SmartYard Pro Model" fill className="object-contain p-4" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SmartYard Pro</h3>
                <p className="text-gray-600 mb-4">Ideal for medium to large yards up to 0.5 acres.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">$1,499</span>
                  <Link
                    href="/purchase/smart-yard?model=pro"
                    className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>

            {/* Model 3 */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 bg-gray-100">
                <Image src="/images/robomow.png" alt="SmartYard Elite Model" fill className="object-contain p-4" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">SmartYard Elite</h3>
                <p className="text-gray-600 mb-4">For large yards and complex landscapes up to 1 acre.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-600">$1,999</span>
                  <Link
                    href="/purchase/smart-yard?model=elite"
                    className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src="/robot-mower-action.png"
                alt="Robot Mower in Action"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div>
              <ol className="space-y-6">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Boundary Setup</h3>
                    <p className="text-gray-600">
                      Install the boundary wire around your lawn to define the mowing area.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">App Configuration</h3>
                    <p className="text-gray-600">Use our mobile app to set schedules and customize mowing patterns.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Automated Mowing</h3>
                    <p className="text-gray-600">
                      Your robot mower works autonomously, returning to its charging station when needed.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Enjoy Your Free Time</h3>
                    <p className="text-gray-600">Relax while your lawn is perfectly maintained without your effort.</p>
                  </div>
                </li>
              </ol>
              <button
                onClick={() => openVideoModal("https://www.youtube.com/embed/dQw4w9WgXcQ")}
                className="mt-8 bg-green-600 text-white hover:bg-green-700 px-6 py-3 rounded-lg font-medium inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Installation Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">JD</span>
                </div>
                <div>
                  <h3 className="font-semibold">John Doe</h3>
                  <p className="text-sm text-gray-500">Richmond, VA</p>
                </div>
              </div>
              <p className="text-gray-600">
                "My SmartYard robot mower has completely transformed my weekends. I used to spend hours mowing my lawn,
                but now I can enjoy my free time while my lawn looks better than ever."
              </p>
              <div className="flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">JS</span>
                </div>
                <div>
                  <h3 className="font-semibold">Jane Smith</h3>
                  <p className="text-sm text-gray-500">Ginter Park</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The SmartYard Elite has been a game-changer for our large property. It navigates our complex landscape
                with ease, and the app makes it simple to adjust settings. Worth every penny!"
              </p>
              <div className="flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">RJ</span>
                </div>
                <div>
                  <h3 className="font-semibold">Robert Johnson</h3>
                  <p className="text-sm text-gray-500">Battery Park</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As someone with allergies, the SmartYard robot mower has been a lifesaver. I no longer have to deal
                with grass clippings and pollen while mowing. My lawn looks immaculate year-round."
              </p>
              <div className="flex mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold mb-2">Cutting System</h3>
                  <p className="text-gray-600">
                    Triple-blade cutting system with floating deck design for even cutting on uneven terrain.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold mb-2">Navigation</h3>
                  <p className="text-gray-600">
                    GPS-assisted navigation with boundary wire system and obstacle detection sensors.
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold mb-2">Battery Life</h3>
                  <p className="text-gray-600">
                    Up to 3 hours of continuous operation with quick-charge technology (80% in 45 minutes).
                  </p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold mb-2">Weather Resistance</h3>
                  <p className="text-gray-600">
                    IPX5 water resistance rating, capable of operating in light rain and temperatures from 35°F to
                    105°F.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Connectivity</h3>
                  <p className="text-gray-600">
                    Wi-Fi and Bluetooth connectivity for app control and over-the-air updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96">
              <Image
                src="/robot-mower-closeup.png"
                alt="Robot Mower Technical Details"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">How does the boundary system work?</h3>
              <p className="text-gray-600">
                The boundary wire creates an invisible perimeter that the robot mower detects. This keeps the mower
                within your lawn area and can also be used to protect flower beds, ponds, and other areas you want the
                mower to avoid.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Is the robot mower safe around children and pets?</h3>
              <p className="text-gray-600">
                Yes, our robot mowers are equipped with multiple safety features, including lift sensors that
                immediately stop the blades if the mower is lifted, obstacle detection to avoid collisions, and
                PIN-protected controls to prevent unauthorized use.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What maintenance is required?</h3>
              <p className="text-gray-600">
                Minimal maintenance is required. We recommend cleaning the underside of the mower and replacing the
                blades every 2-3 months during the mowing season. The app will send you reminders when maintenance is
                needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Can it handle slopes and uneven terrain?</h3>
              <p className="text-gray-600">
                Our robot mowers can handle slopes up to 35% (20 degrees) and navigate most uneven terrain. The floating
                deck design ensures an even cut regardless of small bumps and dips in your lawn.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">What happens if it rains?</h3>
              <p className="text-gray-600">
                Our robot mowers have rain sensors and will automatically return to their charging station when it
                starts raining. They'll resume mowing once conditions are dry enough, ensuring optimal cutting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Lawn Care Experience?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have reclaimed their weekends and enjoy perfectly maintained lawns
            year-round.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/purchase/smart-yard"
              className="bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-medium text-lg inline-block"
            >
              Shop Robot Mowers
            </Link>
            <Link
              href="/book"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-lg font-medium text-lg inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} videoUrl={currentVideo} />}
    </div>
  )
}
