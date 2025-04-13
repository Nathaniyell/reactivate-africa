import Link from "next/link"

export default function AboutSnippet() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-r from-[#f3693a] to-[#f7923e] h-40 md:h-64 rounded-md"></div>
          <div>
            <h2 className="text-3xl font-bold text-[#f3693a] mb-4">About Us</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
            Reactivate Africa Foundation is a non-profit organization established in 2019 with a mission to empower young Africans to drive sustainable change in their communities through entrepreneurship, education, and leadership innovations. Recognizing that investing in youth is fundamental to national development and societal progress, we design our programs and initiatives to promote quality education, social innovation, leadership, and global opportunities for young people. Our efforts aim to enhance social awareness, employability, and overall livelihoods, creating a ripple effect of positive transformation across Africa.
            </p>
            <Link 
              href="/about" 
              className="text-[#f7923e] font-medium hover:text-[#f3693a] transition-colors"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}