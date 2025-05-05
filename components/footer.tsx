"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { usePathname } from "next/navigation"
import { getRobotLawnMowerKeyword, getLawnMowerRepairKeyword, getLawnMowerRentalKeyword } from "@/lib/seo-keywords"

export default function Footer() {
  const pathname = usePathname()
  const robotLawnMowerText = getRobotLawnMowerKeyword(pathname)
  const lawnMowerRepairText = getLawnMowerRepairKeyword(pathname)
  const lawnMowerRentalText = getLawnMowerRentalKeyword(pathname)

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">SweatyJob</h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing lawn care and outdoor services in Richmond, VA with technology and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/robots" className="text-gray-400 hover:text-yellow-500">
                  {robotLawnMowerText}
                </Link>
              </li>
              <li>
                <Link href="/robots/lawn-mowing" className="text-gray-400 hover:text-yellow-500">
                  Robot Lawn Mowing
                </Link>
              </li>
              <li>
                <Link href="/robots/lawn-mower-repair" className="text-gray-400 hover:text-yellow-500">
                  {lawnMowerRepairText}
                </Link>
              </li>
              <li>
                <Link href="/robots/lawn-mower-rental" className="text-gray-400 hover:text-yellow-500">
                  {lawnMowerRentalText}
                </Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" className="text-gray-400 hover:text-yellow-500">
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link href="/services/window-cleaning" className="text-gray-400 hover:text-yellow-500">
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/grill-cleaning" className="text-gray-400 hover:text-yellow-500">
                  Grill Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/neighborhoods/fan-district" className="text-gray-400 hover:text-yellow-500">
                  The Fan District
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/church-hill" className="text-gray-400 hover:text-yellow-500">
                  Church Hill
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/ginter-park" className="text-gray-400 hover:text-yellow-500">
                  Ginter Park
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/woodland-heights" className="text-gray-400 hover:text-yellow-500">
                  Woodland Heights
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/battery-park" className="text-gray-400 hover:text-yellow-500">
                  Battery Park
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-gray-400 hover:text-yellow-500">
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-yellow-500 mr-2 mt-1" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel:8045739825" className="hover:text-yellow-500">
                    (804) 573-9825
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-yellow-500 mr-2 mt-1" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:job@sweatyjob.com" className="hover:text-yellow-500">
                    job@sweatyjob.com
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-1" />
                <div>
                  <p className="text-gray-400">Address</p>
                  <p>Richmond, VA 23220</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SweatyJob. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-yellow-500 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-yellow-500 text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-yellow-500 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
