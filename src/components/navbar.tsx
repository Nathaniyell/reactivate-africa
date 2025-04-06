"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-gradient-to-r from-[#1b4d2e] to-[#2d7d46] text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <Link href="/" className="flex items-center">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <Image 
              width={50} 
              height={50} 
              src='/reactivate-logo.jpg' 
              alt="Reactivate Africa Logo" 
              className="object-contain"
            />
          </div>
          <span className="ml-3 text-xl font-bold hidden sm:block">Reactivate Africa</span>
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-white hover:text-[#F08232] transition-colors duration-300 py-2 px-1 font-medium">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#F08232] transition-colors duration-300 py-2 px-1 font-medium">
            About
          </Link>
          <Link href="/programs" className="text-white hover:text-[#F08232] transition-colors duration-300 py-2 px-1 font-medium">
            Programs
          </Link>
          <Link href="/team" className="text-white hover:text-[#F08232] transition-colors duration-300 py-2 px-1 font-medium">
            Team
          </Link>
          <Link href="/get-involved" className="text-white hover:text-[#F08232] transition-colors duration-300 py-2 px-1 font-medium">
            Get Involved
          </Link>
          <Link href="/contact" className="bg-[#F08232] hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium ml-4">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#1b4d2e] to-[#2d7d46] z-50 flex flex-col items-center pt-24 px-6 md:hidden">
          <nav className="flex flex-col space-y-8 w-full max-w-md">
            <Link
              href="/"
              className="text-white hover:text-[#F08232] text-2xl font-medium transition-colors py-2 border-b border-white/10"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#F08232] text-2xl font-medium transition-colors py-2 border-b border-white/10"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-white hover:text-[#F08232] text-2xl font-medium transition-colors py-2 border-b border-white/10"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link
              href="/team"
              className="text-white hover:text-[#F08232] text-2xl font-medium transition-colors py-2 border-b border-white/10"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link
              href="/get-involved"
              className="text-white hover:text-[#F08232] text-2xl font-medium transition-colors py-2 border-b border-white/10"
              onClick={toggleMenu}
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="bg-[#F08232] hover:bg-orange-600 text-white text-2xl font-medium py-3 rounded-lg transition-colors text-center mt-4"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}