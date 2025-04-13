import Link from "next/link"

export default function FeaturedPrograms() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#892626] mb-4">
            Featured Programs
          </h2>
          <div className="w-20 h-1 bg-[#f3693a] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-[#6b7280]">
            Our initiatives are designed to empower young Africans through education, entrepreneurship, and leadership
            development.
          </p>
        </div>

        <div className="lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Program 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#e18f49]/20 hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-[#f7923e]/20 to-[#e18f49]/10 relative flex items-center justify-center">
              <div className="text-[#892626] font-semibold text-lg">International Youth SDGs Talkfest</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#892626] mb-2">International Youth SDGs Talkfest</h3>
              <p className="text-gray-700 mb-4">
                An annual gathering bringing together youth leaders to explore strategies for advancing the UN
                Sustainable Development Goals.
              </p>
              <Link
                href="/programs#sdg-talkfest"
                className="text-[#f3693a] font-medium hover:text-[#f7923e] transition-colors flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#e18f49]/20 hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-[#f3693a]/20 to-[#f7923e]/10 relative flex items-center justify-center">
              <div className="text-[#892626] font-semibold text-lg">Green Teens Initiative</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#892626] mb-2">Green Teens Initiative</h3>
              <p className="text-gray-700 mb-4">
                A comprehensive social impact program addressing academic challenges and skill gaps among teenagers in
                vulnerable communities.
              </p>
              <Link
                href="/programs#green-teens"
                className="text-[#f3693a] font-medium hover:text-[#f7923e] transition-colors flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>

          {/* Program 3 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#e18f49]/20 hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-[#f7923e]/20 to-[#892626]/10 relative flex items-center justify-center">
              <div className="text-[#892626] font-semibold text-lg">RAF Changemakers Fellowship</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#892626] mb-2">RAF Changemakers Fellowship</h3>
              <p className="text-gray-700 mb-4">
                Dedicated to promoting sustainable development by equipping young Africans with in-demand
                entrepreneurship and tech skills.
              </p>
              <Link
                href="/programs#changemakers"
                className="text-[#f3693a] font-medium hover:text-[#f7923e] transition-colors flex items-center"
              >
                Learn More <span className="ml-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
