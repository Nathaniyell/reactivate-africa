import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-[#1b4d2e] text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Inspiring Youth-led
            <br />
            Change Across Africa
          </h1>
          <div className="mt-8">
            <Link
              href="/get-involved"
              className="bg-[#F08232] hover:bg-[#e07122] text-white font-bold py-3 px-8 rounded-md transition-colors inline-block text-center"
            >
              Support Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

