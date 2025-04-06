import { Mail, Phone, Globe, Instagram } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#2E4700] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Get in touch with us to learn more about our programs or how you can get involved.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#2E4700] mb-6">Get In Touch</h2>
                <p className="text-gray-700 mb-8">
                  Have questions about our programs or want to get involved? We&apos;d love to hear from you. Fill out the
                  form or use our contact information to reach out.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-[#F08232] mt-1 flex-shrink-0" size={24} />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#2E4700]">Email</h3>
                    <p className="text-gray-700">reactivafrica@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-[#F08232] mt-1 flex-shrink-0" size={24} />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#2E4700]">Phone</h3>
                    <p className="text-gray-700">+234 808 475 3771</p>
                    <p className="text-gray-700">+234 704 133 4617</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="text-[#F08232] mt-1 flex-shrink-0" size={24} />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#2E4700]">Website</h3>
                    <p className="text-gray-700">https://reactivate-africa-foundation.business.site/</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Instagram className="text-[#F08232] mt-1 flex-shrink-0" size={24} />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2 text-[#2E4700]">Social Media</h3>
                    <p className="text-gray-700">@ReactivateAfrica</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#2E4700] mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E4700]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E4700]"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E4700]"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E4700]"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-2 px-6 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2E4700] mb-4">Our Location</h2>
            <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
          </div>

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center text-gray-500">
            Map will be displayed here
          </div>
        </div>
      </section>
    </>
  )
}

