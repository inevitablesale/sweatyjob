import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f1524] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">SweatyJob</h2>
            <p className="text-gray-400 mb-6">
              Revolutionizing lawn care and outdoor services in Richmond, VA with technology and exceptional service.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-white">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/robots/price" className="text-gray-400 hover:text-white">
                  Robot Lawnmower Price
                </Link>
              </li>
              <li>
                <Link href="/robots/lawn-mowing" className="text-gray-400 hover:text-white">
                  Robot Lawn Mowing
                </Link>
              </li>
              <li>
                <Link href="/robots/lawn-mower-repair" className="text-gray-400 hover:text-white">
                  Lawn Mower Repair
                </Link>
              </li>
              <li>
                <Link href="/robots/lawn-mower-rental" className="text-gray-400 hover:text-white">
                  Lawn Mower For Rental
                </Link>
              </li>
              <li>
                <Link href="/services/pressure-washing" className="text-gray-400 hover:text-white">
                  Pressure Washing
                </Link>
              </li>
              <li>
                <Link href="/services/window-cleaning" className="text-gray-400 hover:text-white">
                  Window Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/grill-scrubbing" className="text-gray-400 hover:text-white">
                  Grill Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h2 className="text-xl font-bold mb-4">Service Areas</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/neighborhoods/the-fan" className="text-gray-400 hover:text-white">
                  The Fan District
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/church-hill" className="text-gray-400 hover:text-white">
                  Church Hill
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/ginter-park" className="text-gray-400 hover:text-white">
                  Ginter Park
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/woodland-heights" className="text-gray-400 hover:text-white">
                  Woodland Heights
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/battery-park" className="text-gray-400 hover:text-white">
                  Battery Park
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods" className="text-gray-400 hover:text-white">
                  View All Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="mr-3 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <a href="tel:+18045739825" className="text-white hover:text-yellow-400">
                    (804) 573-9825
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <a href="mailto:job@sweatyjob.com" className="text-white hover:text-yellow-400">
                    job@sweatyjob.com
                  </a>
                </div>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-yellow-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-400">Address</div>
                  <p className="text-white">Richmond, VA 23220</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
