import Link from "next/link";
import { Mail } from "lucide-react";
import { FaLinkedin, FaXTwitter, FaFacebook, FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import { address, tagline } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#892626] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      
          <div className="space-y-6 hover:bg-[#ffffff1a] transform-all ease-in-out rounded-xl hover:py-2 hover:px-2 duration-300">
            <div className="flex items-center">
              <div className="bg-white p-2 rounded-lg mr-4">
                <Image
                  width={50}
                  height={50}
                  src="/reactivate-logo.jpg"
                  alt="Reactivate Africa Logo"
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#f7923e] to-[#e18f49]">
                  Reactivate Africa Foundation
                </h2>
                <p className="text-sm text-white/80">{tagline}</p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed">
              Transforming lives through education, entrepreneurship, leadership and social development initiatives.
            </p>

            <div className="flex space-x-4">
              {[
                { icon: <FaFacebook size={28} />, href: "https://www.facebook.com/share/192DDjjaFc/" },
                { icon: <FaXTwitter size={28} />, href: "https://x.com/ReactivateAfric?t=R5WsmcApATVRcIB3jIIqXg&s=09" },
                { icon: <FaInstagram size={28} />, href: "https://www.instagram.com/reactivateafrica?igsh=Y2F5YzR3MmpiN3Np" },
                { icon: <FaLinkedin size={28} />, href: "https://www.linkedin.com/company/reactivate-africa-foundation/" },
              ].map((item, index) => (
                <a key={index} href={item.href} className="text-white/80 hover:text-[#f7923e] transition-colors">
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-[#f7923e]/30">Quick Links</h3>
            <nav className="grid grid-cols-1 gap-3 hover:bg-[#ffffff1a] transform-all ease-in-out rounded-xl hover:py-2 hover:px-2 duration-300">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about-us" },
                { label: "Our Programs & Projects", href: "/our-programs-and-projects" },
                { label: "Our Team", href: "/our-team" },
                { label: "Get Involved", href: "/get-involved" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white/80 hover:text-[#f7923e] transition-colors flex items-center group"
                >
                  <span className="w-1 h-1 bg-[#f7923e] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-[#f7923e]/30">Contact Us</h3>
            <div className="space-y-4 hover:bg-[#ffffff1a] transform-all ease-in-out rounded-xl hover:py-2 hover:px-2 duration-300">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0 text-[#f7923e]" size={18} />
               
                <span className="text-white/80">{address}</span>
              </div>
              <div className="flex items-center">
                <Mail className="mr-3 text-[#f7923e]" size={18} />
              <div className="space-y-2 flex flex-col">
                <a href="mailto:info@reactivateafrica.org" className="text-white/80 hover:text-[#f7923e] transition-colors">
                  info@reactivateafrica.org
                </a>
                <a href="mailto:reactivafrica@gmail.com" className="text-white/80 hover:text-[#f7923e] transition-colors">
                  reactivafrica@gmail.com
                </a>
              </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-[#f7923e]" size={18} />
                <a href="tel:+2347041334617" className="text-white/80 hover:text-[#f7923e] transition-colors">
                  +234 704 133 4617
                </a>
              </div>
            </div>
          </div>

         
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Reactivate Africa Foundation. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/" className="hover:text-[#f7923e] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:text-[#f7923e] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
