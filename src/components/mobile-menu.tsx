"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-[#2E4700]">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col pt-20 px-6">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-[#2E4700]">
            <X size={24} />
          </button>
          <nav className="flex flex-col space-y-6">
            <Link
              href="#about"
              className="text-[#2E4700] hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="#vision"
              className="text-[#2E4700] hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              Vision & Mission
            </Link>
            <Link
              href="#programs"
              className="text-[#2E4700] hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link
              href="#team"
              className="text-[#2E4700] hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link
              href="#contact"
              className="text-[#2E4700] hover:text-[#F08232] text-xl font-medium transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

