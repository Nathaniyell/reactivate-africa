import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ProgramsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#2E4700] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="max-w-3xl mx-auto text-lg">
            Discover our initiatives designed to empower young Africans through education, entrepreneurship, and
            leadership.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Program 1 */}
            <div id="sdg-talkfest" className="scroll-mt-20">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#2E4700] mb-4">INTERNATIONAL YOUTH SDGs TALKFEST</h3>
                <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Launched in 2023, the International Youth SDGs Talkfest is an annual gathering in commemoration of
                  International Youth Day. The event brings together youth leaders, policymakers, and young scholars to
                  explore strategies for advancing the United Nations Sustainable Development Goals through youth-led
                  initiatives. The Talkfest also celebrates the outstanding contributions of young Africans in driving
                  positive change within their communities.
                </p>
                <h4 className="text-lg font-semibold text-[#2E4700] mb-2">Key Objectives:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Recognize and harness youth potential for sustainable development.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">Increase awareness and action toward the SDGs.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Foster collaboration and innovation among young change-makers.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Empower youth with skills and resources to drive community transformation.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Program 2 */}
            <div id="green-teens" className="scroll-mt-20">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#2E4700] mb-4">GREEN TEENS INITIATIVE</h3>
                <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A comprehensive social impact program addressing academic challenges, gender-based issues, and skill
                  gaps among teenagers in vulnerable communities. The initiative provides a structured support system,
                  fostering awareness of social issues, offering skill acquisition opportunities, scholarships, and
                  mentorship, and facilitating learning aid to reduce school dropout rates.
                </p>
                <h4 className="text-lg font-semibold text-[#2E4700] mb-2">Program Objectives:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Promote academic inclusion through scholarships and welfare support.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Educate teenagers on conscious living and avoiding social vices.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Provide skill acquisition opportunities for self-reliance and career growth.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Support teachers in public schools with professional development opportunities.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Program 3 */}
            <div id="sdg-connect" className="scroll-mt-20">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#2E4700] mb-4">SDG CONNECT</h3>
                <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  SDG Connect is a flagship initiative committed to driving the United Nations Sustainable Development
                  Goals (SDGs) in African communities over a five-year period ending in December 2029. The program
                  leverages:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Monthly webinar series to educate individuals on the SDGs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Quarterly SDG Impact Challenges to encourage youth-led initiatives that support SDG
                      implementation.
                    </span>
                  </li>
                </ul>
                <h4 className="text-lg font-semibold text-[#2E4700] mb-2">Impact Goals by 2029:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">Mobilize at least 6,800 SDG action agents.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">Implement 210 tangible sustainability initiatives.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">Expand participation across multiple African countries.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Program 4 */}
            <div id="yealx-africa" className="scroll-mt-20">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#2E4700] mb-4">
                  YOUTH ENTREPRENEURSHIP, ACADEMIC & LEADERSHIP EXCELLENCE (YEALX-AFRICA)
                </h3>
                <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  YEALX-Africa is a platform fostering social innovation and entrepreneurship among young people,
                  equipping them with the knowledge and skills to drive sustainable development. The program aims to:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Engage 1,000 young people annually in leadership, entrepreneurship, and education.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">Support youth-led ventures and economic growth.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">
                      Recognize and award outstanding young entrepreneurs and leaders making a difference in their
                      communities.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Program 5 */}
            <div id="changemakers" className="scroll-mt-20">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-[#2E4700] mb-4">RAF CHANGEMAKERS FELLOWSHIP</h3>
                <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
                <p className="text-gray-700 leading-relaxed">
                  The RAF Changemakers Fellowship is dedicated to promoting sustainable development by equipping young
                  Africans with in-demand entrepreneurship and tech skills. Since 2019, we have partnered with reputable
                  tech firms like Wedigraf Technologies to offer fully-funded programs that foster self-reliance and
                  economic empowerment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#2E4700] mb-6">Want to Get Involved?</h2>
          <p className="max-w-3xl mx-auto mb-8 text-gray-700">
            Join us in our mission to empower young Africans. Whether you want to volunteer, partner with us, or support
            our initiatives, we&apos;d love to hear from you.
          </p>
          <Link
            href="/contact"
            className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}

