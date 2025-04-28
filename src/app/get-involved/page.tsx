import HeroSection from "@/components/component-hero"
import Link from "next/link"
import { FaLinkedin, FaXTwitter, FaFacebook, FaUsers, FaHandshakeSimple } from "react-icons/fa6";
import { GrShare } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { phoneNumber, tagline } from "@/lib/data";
export default function GetInvolvedPage() {

  
  const involvementOptions = [
    {
      title: "Partner with Us",
      description: "We welcome partnerships with organizations, institutions, and businesses that share our vision for youth empowerment and sustainable development in Africa.",
      linkText: "Become a Partner",
      icon: <FaHandshakeSimple className="text-4xl text-[#892626]" />, 
      message: "Hello, I'd like to explore a partnership with you!"
    },
    {
      title: "Donate",
      description: "Your financial support helps us expand our programs and reach more young people across Africa. Every contribution makes a difference.",
      linkText: "Make a Donation",
      icon: <IoIosHeart className="text-4xl text-[#892626]" />,
      message: "Hello, I would like to make a donation to support your cause."
    },
    {
      title: "Volunteer",
      description: "Share your skills, time, and expertise with us. We have various volunteer opportunities available, from program support to mentorship and technical assistance.",
      linkText: "Volunteer with Us",
      icon: <FaUsers className="text-4xl text-[#892626]" />, 
      message: "Hi, I am interested in volunteering with your organization."
    },
    {
      title: "Spread the Word",
      description: "Help us amplify our message by sharing our work with your network. Follow us on social media and join our community of supporters.",
      linkText: "Spread the Word",
      icon: <GrShare className="text-4xl text-[#892626]" />, 
      message: "", 
      socialLinks: true
    },
  ];
  return (
    <>
      <HeroSection
      backgroundImage="/hero2.jpg"
        title="Get"
        title2="Involved"
        tagline2={tagline}
      />

     
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

                 
                  {!option.socialLinks ? (
                    <Link
                      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(option.message)}`}
                      className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-2 px-6 rounded-md transition-colors inline-block"
                      target="_blank"
                    >
                      {option.linkText}
                    </Link>
                  ) : (
                  
                    <div className="flex space-x-4">
                      <a
                        href="https://www.facebook.com/share/192DDjjaFc/"
                        className="text-[#892626] hover:text-[#F08232]"
                      >
                        <span className="sr-only">Facebook</span>
                       <FaFacebook className="text-4xl" />
                      </a>
                      <a
                        href="https://x.com/ReactivateAfric?t=R5WsmcApATVRcIB3jIIqXg&s=09"
                        className="text-[#892626] hover:text-[#F08232]"
                      >
                        <span className="sr-only">Twitter</span>
                      <FaXTwitter className="text-4xl" />
                      </a>
                      <a
                        href="https://www.instagram.com/reactivateafrica?igsh=Y2F5YzR3MmpiN3Np"
                        className="text-[#892626] hover:text-[#F08232]"
                      >
                        <span className="sr-only">Instagram</span>
                        <FaInstagram className="text-4xl" />
                        
                      </a>
                      <a
                        href="https://www.linkedin.com/company/reactivate-africa-foundation/"
                        className="text-[#892626] hover:text-[#F08232]"
                      >
                        <span className="sr-only">Linkedin</span>
                        <FaLinkedin className="text-4xl" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
