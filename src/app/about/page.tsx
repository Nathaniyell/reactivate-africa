import HeroSection from "@/components/component-hero";
import Pathways from "@/components/impact-pathways";
import { ChevronRight } from "lucide-react";


const coreValues = [
  {
    title: "Innovation",
    description: "We employ creative and forward-thinking approaches to achieve impactful results."
  },
  {
    title: "Partnership",
    description: "We collaborate with individuals, organizations, and governments to maximize success in all our projects."
  },
  {
    title: "Respect",
    description: "We uphold professionalism and mutual respect in our engagements with partners, donors, and stakeholders."
  },
  {
    title: "Inclusivity",
    description: "We promote equal opportunities, ensuring a level playing field for all."
  },
  {
    title: "Teamwork",
    description: "We foster collaboration and synergy across all levels of our organization."
  }
];



const focusAreas = [
  "Education",
  "Gender & Social Support",
  "Entrepreneurship & Leadership",
  "Sustainable Development",
  "Youth Development"
];

const strategies = [
  "Campaigns & Advocacy",
  "Strategic Partnerships & Collaborations",
  "Training & Mentorship",
  "Community Engagement"
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto">
       <HeroSection
        title="About"
        title2="Us"
        tagline="Learn about our mission, vision, and the impact we're making across Africa."
      />
      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2E4700] mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Reactivate Africa Foundation is a non-profit organization established in 2019 with a mission to empower
                young Africans to drive sustainable change in their communities through entrepreneurship, education, and
                leadership innovations. Recognizing that investing in youth is fundamental to national development and
                societal progress, we design our programs and initiatives to promote quality education, social innovation,
                leadership, and global opportunities for young people.
              </p>
              <p>
                Our efforts aim to enhance social awareness, employability, and overall livelihoods, creating a ripple
                effect of positive transformation across Africa.
              </p>
              <p>
                With a forward-thinking approach, we support young talents and skills, enabling them to contribute to the
                realization of the Sustainable Development Goals (SDGs) through youth-led initiatives. To date, our
                programs have directly and indirectly impacted over 5,000 individuals across Africa. We remain committed
                to inspiring and equipping young people with the tools necessary to lead ethically and build sustainable
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-[#2E4700] mb-4">OUR VISION</h2>
              <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
              <p className="text-gray-700 leading-relaxed">
                To become Africa&apos;s leading mechanism promoting quality education, entrepreneurship, and leadership,
                leveraging innovative ideas to drive the continent&apos;s development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-2xl font-bold text-[#2E4700] mb-4">OUR MISSION</h2>
              <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
              <p className="text-gray-700 leading-relaxed">
                To inspire, nurture, and equip young Africans with the resources, awareness and platform necessary to
                transform education, entrepreneurship, and leadership outcomes, while driving social change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E4700] mb-4">OUR CORE VALUES</h2>
            <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-[#2E4700] mb-3">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Pathways Section */}
      <Pathways />

      {/* Focus Areas & Strategy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-[#2E4700] mb-4">OUR FOCUS AREAS</h2>
              <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
              <ul className="space-y-3">
                {focusAreas.map((area, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-[#2E4700] mb-4">OUR STRATEGY</h2>
              <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
              <ul className="space-y-3">
                {strategies.map((strategy, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                    <span className="ml-2 text-gray-700">{strategy}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}