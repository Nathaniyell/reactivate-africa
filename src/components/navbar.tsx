"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { X, Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path
 
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

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
        {/* Logo */}
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
          <span className="text-xl font-semibold text-[#f3693a]">
            Reactivate Africa <br className="xl:hidden" />Foundation
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-gray-700 hover:text-[#f3693a] transition-colors py-2 px-1 font-medium ${isActive(item.href) && "!text-[#f3693a]"
                }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#f3693a]"></span>
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-[#f3693a] hover:bg-[#f7923e] text-white px-4 py-2 rounded-lg transition-colors font-medium ml-4 shadow-md hidden md:block xl:hidden"
          >
            Contact
          </Link>
        </nav>
        <Link
            href="/contact"
            className="bg-[#f3693a] hover:bg-[#f7923e] text-white px-4 py-2 rounded-lg transition-colors font-medium ml-4 shadow-md hidden xl:block"
          >
            Contact
          </Link>



        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#f3693a] p-2 rounded-lg hover:bg-[#f3693a]/10 transition-colors"
            aria-label="Toggle menu"
          >
             <Menu size={28} />
          </button>
        </div>

        <div className={`fixed inset-0 bg-white z-50 flex flex-col pt-6 px-6 md:hidden transition-all duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

          
          <div className="w-full flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#f3693a] p-2 rounded-lg hover:bg-[#f3693a]/10 transition-colors"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 w-full max-w-md">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-gray-700 hover:text-[#f3693a] text-xl font-medium py-2 border-b border-gray-100 transition-colors ${isActive(item.href) && "!text-[#f3693a]"
                  }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#f3693a]"></span>
                )}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#f3693a] hover:bg-[#f7923e] text-white text-xl font-medium py-3 rounded-lg transition-colors text-center mt-4 shadow-md"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}