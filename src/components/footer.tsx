import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1b4d2e] to-[#0d301a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6 hover:bg-[rgba(0,0,0,0.3)] transform-all ease-in-out rounded-xl hover:py-2 hover:px-2 hover:px-2 duration-300">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-lg mr-4">
                <Image
                  width={50}
                  height={50}
                  src="/reactivate-logo.jpg"
                  alt="Reactivate Africa Logo"
                  className="bject-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-[#d1fae5]">
                  Reactivate Africa
                </h2>
                <p className="text-sm text-gray-300">Empowering Africa&apos;s Future</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Transforming lives through education, entrepreneurship, and leadership development initiatives.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#F08232] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F08232] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F08232] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#F08232] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-[#F08232]/30">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-3 hover:bg-[rgba(0,0,0,0.3)] transform-all ease-in-out rounded-xl hover:py-2 hover:px-2 duration-300">
              <Link href="/" className="text-gray-300 hover:text-[#F08232] transition-colors flex items-center group">
                <span className="w-1 h-1 bg-[#F08232] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-[#F08232] transition-colors flex items-center group">
                <span className="w-1 h-1 bg-[#F08232] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About
              </Link>
              <Link href="/programs" className="text-gray-300 hover:text-[#F08232] transition-colors flex items-center group">
                <span className="w-1 h-1 bg-[#F08232] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Programs
              </Link>
              <Link href="/team" className="text-gray-300 hover:text-[#F08232] transition-colors flex items-center group">
                <span className="w-1 h-1 bg-[#F08232] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Team
              </Link>
              <Link href="/get-involved" className="text-gray-300 hover:text-[#F08232] transition-colors flex items-center group">
                <span className="w-1 h-1 bg-[#F08232] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Get Involved
              </Link>
            </nav>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-[#F08232]/30">Contact Us</h3>
            <div className="space-y-4 hover:bg-[rgba(0,0,0,0.3)] transform-all ease-in-out rounded-xl hover:py-2 hover:px-2 duration-300">
              <div className="flex items-start">
                <MapPin className="mt-1 mr-3 flex-shrink-0 text-[#F08232]" size={18} />
                <span className="text-gray-300">123 Empowerment Avenue, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-[#F08232]" size={18} />
                <a href="mailto:info@reactivateafrica.org" className="text-gray-300 hover:text-[#F08232] transition-colors">
                  info@reactivateafrica.org
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="mr-3 text-[#F08232]" size={18} />
                <a href="tel:+234 704 133 4617" className="text-gray-300 hover:text-[#F08232] transition-colors">
                +234 704 133 4617
                </a>
              </div>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-[#F08232]/30">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and opportunities.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F08232] text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#F08232] hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Reactivate Africa Foundation. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/privacy-policy" className="hover:text-[#F08232] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#F08232] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}