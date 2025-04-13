import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden">
      {/* Background with gradient and image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f3693a] to-[#f7923e]">
        {/* Background image with overlay - replace with your actual image path */}
        <div 
          className="absolute inset-0 bg-[url('/raf.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"
          style={{
            backgroundImage: "url('/raf.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold [text-shadow:2px_4px_2px_rgba(0,0,0,0.2)] mb-12"> 
            Inspiring Youth-led Change
          </h1>
          <Link
            href="/get-involved"
            className="inline-block bg-white hover:bg-gray-100 text-[#f3693a] font-bold py-3 px-8 rounded-md shadow-sm transition-colors duration-300"
          >
            Support Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}