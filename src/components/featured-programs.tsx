import Link from "next/link"

export default function FeaturedPrograms() {
  return (
    <section className="py-16 bg-[#faf7ed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1b4d2e] mb-4">Featured Programs</h2>
          <div className="w-20 h-1 bg-[#F08232] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-gray-600">
            Our initiatives are designed to empower young Africans through education, entrepreneurship, and leadership
            development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Program Image</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1b4d2e] mb-2">International Youth SDGs Talkfest</h3>
              <p className="text-gray-600 mb-4">
                An annual gathering bringing together youth leaders to explore strategies for advancing the UN
                Sustainable Development Goals.
              </p>
              <Link href="/programs#sdg-talkfest" className="text-[#F08232] font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Program Image</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1b4d2e] mb-2">Green Teens Initiative</h3>
              <p className="text-gray-600 mb-4">
                A comprehensive social impact program addressing academic challenges and skill gaps among teenagers in
                vulnerable communities.
              </p>
              <Link href="/programs#green-teens" className="text-[#F08232] font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">Program Image</div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1b4d2e] mb-2">RAF Changemakers Fellowship</h3>
              <p className="text-gray-600 mb-4">
                Dedicated to promoting sustainable development by equipping young Africans with in-demand
                entrepreneurship and tech skills.
              </p>
              <Link href="/programs#changemakers" className="text-[#F08232] font-medium hover:underline">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

