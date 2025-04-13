import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#f3693a] to-[#f7923e] text-white py-20 md:py-32">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold [text-shadow:2px_4px_2px_#0d301a] mb-12"> 
        Inspiring Youth-led Change
      </h1>
      <Link
        href="/get-involved"
        className="bg-white hover:bg-gray-100 text-[#f3693a] font-bold py-3 px-8 rounded-md shadow-sm"
      >
        Support Our Work
      </Link>
    </div>
  </div>
</section>
  )
}