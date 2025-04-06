import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-[#2E4700] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Together, we can empower young Africans to drive sustainable change in their communities. Get involved today!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Contact Us
          </Link>
          <Link
            href="/programs"
            className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-colors inline-block"
          >
            Our Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

