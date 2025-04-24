"use client"

import { address } from "@/lib/data"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: <Mail size={24} className="text-[#f7923e]" />,
    title: "Email",
    details: [
      { label: "reactivafrica@gmail.com", link: "mailto:reactivafrica@gmail.com" },
      { label: "info@reactivateafrica.org", link: "mailto:info@reactivateafrica.org" },
    ],
  },
  {
    icon: <Phone size={24} className="text-[#f7923e]" />,
    title: "Phone",
    details: [
      { label: "+234 704 133 4617", link: "tel:+2347041334617" },
    ],
  },
  {
    icon: <MapPin size={24} className="text-[#f7923e]" />,
    title: "Address",
    details: [
      { label: address },
    ],
  },
  {
    icon: <Clock size={24} className="text-[#f7923e]" />,
    title: "Working Hours",
    details: [
      { label: "Monday - Friday: 9am - 5pm" },
      { label: "Saturday: 10am - 2pm" },
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-20 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#892626] mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Let’s connect! Reach out to us for inquiries, support, or collaboration opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white shadow-sm rounded-xl p-6 border border-gray-100 hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#f7923e]/10 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                </div>
              </div>
              <div className="ml-14 space-y-2 text-gray-600">
                {item.details.map((detail, i) => (
                  <p key={i}>
                    {"link" in detail ? (
                      <Link
                        href={detail.link}
                        className="text-[#f7923e] hover:underline"
                      >
                        {detail.label}
                      </Link>
                    ) : (
                      detail.label
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
