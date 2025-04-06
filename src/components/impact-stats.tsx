export default function ImpactStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2E4700] mb-4">Our Impact</h2>
          <div className="w-20 h-1 bg-[#F08232] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F08232] mb-2">5,000+</div>
            <p className="text-[#2E4700] font-medium">Individuals Impacted</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F08232] mb-2">4</div>
            <p className="text-[#2E4700] font-medium">Major Programs</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F08232] mb-2">2019</div>
            <p className="text-[#2E4700] font-medium">Year Established</p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#F08232] mb-2">5</div>
            <p className="text-[#2E4700] font-medium">Focus Areas</p>
          </div>
        </div>
      </div>
    </section>
  )
}

