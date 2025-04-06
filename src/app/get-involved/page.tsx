import Link from "next/link"

export default function GetInvolvedPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#1b4d2e] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Join us in our mission to empower young Africans and drive sustainable change across the continent.
          </p>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-[#faf7ed]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1b4d2e] mb-8 text-center">Ways to Support Our Work</h2>

            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1b4d2e] mb-4">Partner with Us</h3>
                <p className="text-gray-700 mb-6">
                  We welcome partnerships with organizations, institutions, and businesses that share our vision for
                  youth empowerment and sustainable development in Africa.
                </p>
                <Link
                  href="/contact"
                  className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-2 px-6 rounded-md transition-colors inline-block"
                >
                  Become a Partner
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1b4d2e] mb-4">Volunteer</h3>
                <p className="text-gray-700 mb-6">
                  Share your skills, time, and expertise with us. We have various volunteer opportunities available,
                  from program support to mentorship and technical assistance.
                </p>
                <Link
                  href="/contact"
                  className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-2 px-6 rounded-md transition-colors inline-block"
                >
                  Volunteer with Us
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1b4d2e] mb-4">Donate</h3>
                <p className="text-gray-700 mb-6">
                  Your financial support helps us expand our programs and reach more young people across Africa. Every
                  contribution makes a difference.
                </p>
                <Link
                  href="/contact"
                  className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-2 px-6 rounded-md transition-colors inline-block"
                >
                  Make a Donation
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#1b4d2e] mb-4">Spread the Word</h3>
                <p className="text-gray-700 mb-6">
                  Help us amplify our message by sharing our work with your network. Follow us on social media and join
                  our community of supporters.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-[#1b4d2e] hover:text-[#F08232]">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a href="#" className="text-[#1b4d2e] hover:text-[#F08232]">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-[#1b4d2e] hover:text-[#F08232]">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M4.848 2.771A2.229 2.229 0 017.07 .55h9.86a2.229 2.229 0 012.222 2.221v9.861a2.229 2.229 0 01-2.222 2.222H7.07a2.229 2.229 0 01-2.222-2.222V2.771zm3.355.42a.75.75 0 00-.748.35.75.75 0 00-.35.748v9.86a.75.75 0 00.35.748.75.75 0 00.748.35h9.86a.75.75 0 00.748-.35.75.75 0 00.35-.748V4.29a.75.75 0 00-.35-.748.75.75 0 00-.748-.35H8.203zm3.807 1.08a5.207 5.207 0 00-3.807.058c-2.456 0-2.784.011-3.807.058a3.098 3.098 0 00-1.857.344 3.097 3.097 0 00-1.15.748 3.097 3.097 0 00-.748 1.15c-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041v.08c0 2.597.01 2.917.058 3.96.045.976.207 1.505.344 1.858a3.097 3.097 0 00.748 1.15 3.098 3.098 0 001.15.748c.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058 2.456 0 2.784-.011 3.807-.058a3.098 3.098 0 001.857-.344 3.097 3.097 0 001.15-.748 3.097 3.097 0 00.748-1.15c.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

