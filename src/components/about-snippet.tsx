import Link from "next/link"

export default function AboutSnippet() {
  return (
    <section className="py-16 bg-[#faf7ed]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-[#F08232] h-40 md:h-64 rounded-md"></div>
          <div>
            <h2 className="text-3xl font-bold text-[#1b4d2e] mb-4">About Us</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Reactivate Africa Foundation is a non-profit organization in empowering young Africans to address
              sustainable economy in regional growth, creating more opportunities for development and innovation.
            </p>
            <Link href="/about" className="text-[#1b4d2e] font-medium hover:text-[#F08232] transition-colors">
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

