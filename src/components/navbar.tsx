"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="bg-[#1b4d2e] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex flex-col">
          <h1 className="text-xl font-bold">Reactivate Africa</h1>
          <span className="text-sm">Foundation</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-[#F08232] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-[#F08232] transition-colors">
            About
          </Link>
          <Link href="/programs" className="text-white hover:text-[#F08232] transition-colors">
            Programs
          </Link>
          <Link href="/team" className="text-white hover:text-[#F08232] transition-colors">
            Team
          </Link>
          <Link href="/get-involved" className="text-white hover:text-[#F08232] transition-colors">
            Get Involved
          </Link>
          <Link href="/contact" className="text-white hover:text-[#F08232] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-[#1b4d2e] z-50 flex flex-col pt-20 px-6 md:hidden">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-6">
            <Link
              href="/"
              className="text-white hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/programs"
              className="text-white hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link
              href="/team"
              className="text-white hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link
              href="/get-involved"
              className="text-white hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              Get Involved
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-[#F08232] text-xl font-medium transition-colors"
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

