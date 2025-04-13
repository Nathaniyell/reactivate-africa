import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-[#892626] mb-6">Want to Get Involved?</h2>
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
  )
}

