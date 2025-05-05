"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-sm py-2 shadow-md" : "bg-black/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="text-2xl md:text-3xl font-bold">
            <span className="text-yellow-400">Sweaty</span>
            <span className="text-white">Job</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/robots" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Lawn Mowing Robot
          </Link>
          <Link href="/neighborhoods" className="text-white hover:text-yellow-400 transition-colors font-medium">
            For Homeowners
          </Link>
          <Link href="/realtor" className="text-white hover:text-yellow-400 transition-colors font-medium">
            For Property Managers
          </Link>
          <Link href="/partners" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Become a Partner
          </Link>
          <Button asChild className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            <a href="tel:8045739825">Call Chris</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/robots"
              className="text-white hover:text-yellow-400 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Lawn Mowing Robot
            </Link>
            <Link
              href="/neighborhoods"
              className="text-white hover:text-yellow-400 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              For Homeowners
            </Link>
            <Link
              href="/realtor"
              className="text-white hover:text-yellow-400 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              For Property Managers
            </Link>
            <Link
              href="/partners"
              className="text-white hover:text-yellow-400 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Become a Partner
            </Link>
            <Button
              asChild
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <a href="tel:8045739825">Call Chris</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
