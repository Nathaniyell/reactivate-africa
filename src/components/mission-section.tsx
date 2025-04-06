export default function MissionSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E4700] mb-4">Our Mission</h2>
            <div className="w-20 h-1 bg-[#F08232] mb-6"></div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              To inspire, nurture, and equip young Africans with the resources, awareness and platform necessary to
              transform education, entrepreneurship, and leadership outcomes, while driving social change.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#F08232]">
              <p className="italic text-gray-700">
              &quot;Investing in youth is fundamental to national development and societal progress.&quot;
              </p>
            </div>
          </div>

          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center text-gray-400">
            Mission Image
          </div>
        </div>
      </div>
    </section>
  )
}

