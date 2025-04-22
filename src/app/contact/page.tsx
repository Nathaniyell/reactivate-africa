import CTASection from "@/components/cta-section";
import { address } from "@/lib/data";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    icon: <Mail className="text-white" size={24} />,
    title: "Email",
    details: ["reactivafrica@gmail.com", "info@reactivateafrica.org"],
    link: "mailto:reactivafrica@gmail.com",
  },
  {
    icon: <Phone className="text-white" size={24} />,
    title: "Phone",
    details: ["+234 704 133 4617"],
    link: "tel:+2347041334617",
  },
  {
    icon: <MapPin className="text-white" size={24} />,
    title: "Address",
    details: [`${address}`],
  },
  {
    icon: <Clock className="text-white" size={24} />,
    title: "Working Hours",
    details: ["Monday - Friday: 9am - 5pm", "Saturday: 10am - 2pm"],
  },
];

export default function ContactPage() {
  return (
    <div className="">

      {/* Let's Connect Section */}
      <section className="relative overflow-hidden bg-[#f7923e] text-white py-24 md:py-32">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#892626] mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-[#892626] mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white font-medium">Get in touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#ffffcc]">
                Connect
              </span>{" "}
              With Us
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-12">
              Reach out to start a conversation about partnerships, volunteering, or supporting our mission.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:w-8/12 mx-auto gap-8">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#F08232]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                    <div className="space-y-1 text-white/90">
                      {item.details.map((detail, i) => (
                        <p key={i}>
                          {item.link ? (
                            <Link href={item.link} className="hover:text-white transition-colors">
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
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#892626] mb-4">Our Location</h2>
              <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                <div className="p-8 text-center">
                  <MapPin className="mx-auto text-[#892626]" size={48} />
                  <p className="mt-4 text-gray-600">Map will be displayed here</p>
                  <p className="text-sm mt-2 text-gray-500">{address}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="https://maps.google.com"
                  className="bg-[#892626] hover:bg-[#6e1f1f] text-white font-medium py-3 px-6 rounded-full transition-colors text-center"
                >
                  Get Directions
                </Link>
                <Link
                  href="tel:+2348084753771"
                  className="bg-white border border-[#892626] text-[#892626] hover:bg-gray-50 font-medium py-3 px-6 rounded-full transition-colors text-center"
                >
                  Call for Directions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection btnTitle="Volunteer" />
    </div>
  );
}