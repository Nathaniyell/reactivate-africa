import Link from "next/link"

export default function CTASectionNew() {
  return (
    <section className="py-16 bg-[#1b4d2e] text-white">
      <div className="container mx-auto px-4 text-center">
        <Link
          href="/get-involved"
          className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-3 px-8 rounded-md transition-colors inline-block"
        >
          Partner with Us
        </Link>
      </div>
    </section>
  )
}

