import HeroSection from "@/components/component-hero"
import Link from "next/link"
import { Handshake, Heart, Users, Share2 } from 'lucide-react';  

export default function GetInvolvedPage() {
  
  const whatsappNumber = '+2348084753771'; 


  const involvementOptions = [
    {
      title: "Partner with Us",
      description: "We welcome partnerships with organizations, institutions, and businesses that share our vision for youth empowerment and sustainable development in Africa.",
      linkText: "Become a Partner",
      icon: <Handshake className="text-4xl text-[#892626]" />, 
      message: "Hello, I'd like to explore a partnership with you!"
    },
    {
      title: "Donate",
      description: "Your financial support helps us expand our programs and reach more young people across Africa. Every contribution makes a difference.",
      linkText: "Make a Donation",
      icon: <Heart className="text-4xl text-[#892626]" />, 
      message: "Hello, I would like to make a donation to support your cause."
    },
    {
      title: "Volunteer",
      description: "Share your skills, time, and expertise with us. We have various volunteer opportunities available, from program support to mentorship and technical assistance.",
      linkText: "Volunteer with Us",
      icon: <Users className="text-4xl text-[#892626]" />, 
      message: "Hi, I am interested in volunteering with your organization."
    },
    {
      title: "Spread the Word",
      description: "Help us amplify our message by sharing our work with your network. Follow us on social media and join our community of supporters.",
      linkText: "Spread the Word",
      icon: <Share2 className="text-4xl text-[#892626]" />, 
      message: "Hi, I want to help spread the word about your organization!"
    },
  ];

  return (
    <>
      <HeroSection
        title="Get"
        title2="Involved"
        tagline="Join us in our mission to empower young Africans and drive sustainable change across the continent."
      />

      {/* Ways to Get Involved */}
      <section className="py-16 bg-[#faf7ed]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#892626] mb-8 text-center">Ways to Support Our Work</h2>

            <div className="space-y-8">
              {involvementOptions.map((option, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="flex items-center mb-4">
                    {option.icon}
                    <h3 className="text-2xl font-bold text-[#892626] ml-4">{option.title}</h3>
                  </div>
                  <p className="text-gray-700 mb-6">{option.description}</p>
                  <Link
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(option.message)}`}
                    className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-2 px-6 rounded-md transition-colors inline-block"
                  >
                    {option.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
