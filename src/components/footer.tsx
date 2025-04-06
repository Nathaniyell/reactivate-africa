import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1b4d2e] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold">Reactivate Africa</h2>
            <p className="text-sm">Foundation</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
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
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="mr-2" size={18} />
                <span>info@reactivateafrica.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={18} />
                <span>+234-808-475-3771</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

