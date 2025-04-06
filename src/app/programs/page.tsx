import { ChevronRight } from "lucide-react";
import Link from "next/link";


const programs = [
  {
    id: "sdg-talkfest",
    title: "INTERNATIONAL YOUTH SDGs TALKFEST",
    description: "Launched in 2023, the International Youth SDGs Talkfest is an annual gathering in commemoration of International Youth Day. The event brings together youth leaders, policymakers, and young scholars to explore strategies for advancing the United Nations Sustainable Development Goals through youth-led initiatives. The Talkfest also celebrates the outstanding contributions of young Africans in driving positive change within their communities.",
    objectivesTitle: "Key Objectives:",
    objectives: [
      "Recognize and harness youth potential for sustainable development.",
      "Increase awareness and action toward the SDGs.",
      "Foster collaboration and innovation among young change-makers.",
      "Empower youth with skills and resources to drive community transformation."
    ]
  },
  {
    id: "green-teens",
    title: "GREEN TEENS INITIATIVE",
    description: "A comprehensive social impact program addressing academic challenges, gender-based issues, and skill gaps among teenagers in vulnerable communities. The initiative provides a structured support system, fostering awareness of social issues, offering skill acquisition opportunities, scholarships, and mentorship, and facilitating learning aid to reduce school dropout rates.",
    objectivesTitle: "Program Objectives:",
    objectives: [
      "Promote academic inclusion through scholarships and welfare support.",
      "Educate teenagers on conscious living and avoiding social vices.",
      "Provide skill acquisition opportunities for self-reliance and career growth.",
      "Support teachers in public schools with professional development opportunities."
    ]
  },
  {
    id: "sdg-connect",
    title: "SDG CONNECT",
    description: "SDG Connect is a flagship initiative committed to driving the United Nations Sustainable Development Goals (SDGs) in African communities over a five-year period ending in December 2029. The program leverages:",
    features: [
      "Monthly webinar series to educate individuals on the SDGs.",
      "Quarterly SDG Impact Challenges to encourage youth-led initiatives that support SDG implementation."
    ],
    objectivesTitle: "Impact Goals by 2029:",
    objectives: [
      "Mobilize at least 6,800 SDG action agents.",
      "Implement 210 tangible sustainability initiatives.",
      "Expand participation across multiple African countries."
    ]
  },
  {
    id: "yealx-africa",
    title: "YOUTH ENTREPRENEURSHIP, ACADEMIC & LEADERSHIP EXCELLENCE (YEALX-AFRICA)",
    description: "YEALX-Africa is a platform fostering social innovation and entrepreneurship among young people, equipping them with the knowledge and skills to drive sustainable development. The program aims to:",
    objectives: [
      "Engage 1,000 young people annually in leadership, entrepreneurship, and education.",
      "Support youth-led ventures and economic growth.",
      "Recognize and award outstanding young entrepreneurs and leaders making a difference in their communities."
    ]
  },
  {
    id: "changemakers",
    title: "RAF CHANGEMAKERS FELLOWSHIP",
    description: "The RAF Changemakers Fellowship is dedicated to promoting sustainable development by equipping young Africans with in-demand entrepreneurship and tech skills. Since 2019, we have partnered with reputable tech firms like Wedigraf Technologies to offer fully-funded programs that foster self-reliance and economic empowerment."
  }
];

export default function ProgramsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="bg-[#2E4700] text-white py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-100">
            Discover our initiatives designed to empower young Africans through education, entrepreneurship, and leadership.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div 
                key={program.id}
                id={program.id}
                className="scroll-mt-20 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#2E4700] mb-4">{program.title}</h3>
                <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                
                {program.features && (
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {program.objectives && (
                  <>
                    <h4 className="text-lg font-semibold text-[#2E4700] mb-3">
                      {program.objectivesTitle || "Program Objectives:"}
                    </h4>
                    <ul className="space-y-3">
                      {program.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                          <span className="ml-2 text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[#2E4700] mb-6">Want to Get Involved?</h2>
            <p className="mb-8 text-gray-700">
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
        </div>
      </section>
    </div>
  );
}