import { Mail, Phone,  Instagram, MapPin, Clock } from "lucide-react";
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

      {/* Let's Connect Section (with Contact Info) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#2E4700] to-[#1a2e00] text-white py-24 md:py-32">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#F08232] mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#F08232] mix-blend-overlay filter blur-3xl"></div>
        </div>

        {/* Diagonal pattern */}
        <div className="absolute inset-0 opacity-5 bg-[length:40px_40px] bg-[linear-gradient(to_right,#f7f7f7_1px,transparent_1px),linear-gradient(to_bottom,#f7f7f7_1px,transparent_1px)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-[#F08232]/20 backdrop-blur-sm rounded-full border border-[#F08232]/30">
              <span className="text-[#F7C04A] font-medium">Get in touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Let&apos;s <span className="text-[#F7C04A]">Connect</span> With Us
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-100 mb-12">
              Reach out to start a conversation about partnerships, volunteering, or supporting our mission.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 text-left">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-[#F08232]/20 text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-[#F7C04A]">{item.title}</h3>
                  <div className="space-y-1 text-gray-100">
                    {item.details.map((detail, i) => (
                      <p key={i}>
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
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-8 h-12 border-2 border-[#F7C04A] rounded-full mx-auto flex justify-center">
              <div className="w-1 h-2 bg-[#F7C04A] rounded-full mt-2"></div>
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
                href=""
                className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
              >
                Volunteer With Us
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
