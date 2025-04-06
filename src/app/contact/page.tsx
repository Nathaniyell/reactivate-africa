import { Mail, Phone, Globe, Instagram, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: <Mail className="text-[#F08232]" size={24} />,
    title: "Email",
    details: ["reactivafrica@gmail.com"],
    link: "mailto:reactivafrica@gmail.com"
  },
  {
    icon: <Phone className="text-[#F08232]" size={24} />,
    title: "Phone",
    details: ["+234 808 475 3771", "+234 704 133 4617"],
    link: "tel:+2348084753771"
  },
  {
    icon: <Globe className="text-[#F08232]" size={24} />,
    title: "Website",
    details: ["reactivate-africa-foundation.org"],
    link: "https://reactivate-africa-foundation.business.site/"
  },
  {
    icon: <Instagram className="text-[#F08232]" size={24} />,
    title: "Social Media",
    details: ["@ReactivateAfrica"],
    link: "https://instagram.com/ReactivateAfrica"
  },
  {
    icon: <MapPin className="text-[#F08232]" size={24} />,
    title: "Address",
    details: ["123 Foundation Street", "Lagos, Nigeria"]
  },
  {
    icon: <Clock className="text-[#F08232]" size={24} />,
    title: "Working Hours",
    details: ["Monday - Friday: 9am - 5pm", "Saturday: 10am - 2pm"]
  }
];

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="bg-[#2E4700] text-white py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100">
            Get in touch with us to learn more about our programs or how you can get involved.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2E4700] mb-4">How to Reach Us</h2>
              <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
              <p className="mt-6 text-gray-700 max-w-2xl mx-auto">
                We&apos;re always happy to connect with partners, volunteers, and supporters. Here are all the ways you can reach our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-start">
                    <div className="p-2 rounded-full bg-[#F08232]/10">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-[#2E4700]">{item.title}</h3>
                      <div className="space-y-1">
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-700">
                            {item.link ? (
                              <Link href={item.link} className="hover:text-[#F08232] transition-colors">
                                {detail}
                              </Link>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#2E4700] mb-4">Our Location</h2>
              <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                {/* Replace with actual Map component */}
                <div className="p-8 text-center">
                  <MapPin className="mx-auto text-gray-400" size={48} />
                  <p className="mt-4">Map will be displayed here</p>
                  <p className="text-sm mt-2">123 Foundation Street, Lagos, Nigeria</p>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="https://maps.google.com"
                  className="bg-[#2E4700] hover:bg-[#1E3700] text-white font-medium py-3 px-6 rounded-full transition-colors text-center"
                >
                  Get Directions
                </Link>
                <Link
                  href="tel:+2348084753771"
                  className="bg-white border border-[#2E4700] text-[#2E4700] hover:bg-gray-50 font-medium py-3 px-6 rounded-full transition-colors text-center"
                >
                  Call for Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#2E4700] text-white p-12 rounded-xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="mb-8 text-gray-100 max-w-2xl mx-auto">
              Join us in our mission to empower young Africans through education and entrepreneurship.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/volunteer"
                className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
              >
                Volunteer With Us
              </Link>
              <Link
                href="/donate"
                className="bg-white text-[#2E4700] hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors inline-block"
              >
                Make a Donation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}