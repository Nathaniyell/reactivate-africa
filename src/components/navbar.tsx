"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Team", href: "/team" },
    { name: "Get Involved", href: "/get-involved" },
  ]

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        
        <Link href="/" className="flex items-center gap-2">
          <div className="p-1">
            <Image 
              width={50} 
              height={50} 
              src="/reactivate-logo.jpg" 
              alt="Reactivate Africa Logo" 
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold hidden sm:block text-[#f3693a]">
            Reactivate Africa
          </span>
        </Link>

        
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-[#f3693a] transition-colors py-2 px-1 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#f3693a] hover:bg-[#f7923e] text-white px-4 py-2 rounded-lg transition-colors font-medium ml-4 shadow-md"
          >
            Contact
          </Link>
        </nav>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#f3693a] p-2 rounded-lg hover:bg-[#f3693a]/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        
        {isOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col items-center pt-24 px-6 md:hidden">
            <nav className="flex flex-col space-y-6 w-full max-w-md">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[#f3693a] text-xl font-medium py-2 border-b border-gray-100 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-[#f3693a] hover:bg-[#f7923e] text-white text-xl font-medium py-3 rounded-lg transition-colors text-center mt-4 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}