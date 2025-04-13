import { programs } from "@/lib/data";
import Link from "next/link";


export default function FeaturedPrograms() {
  return (
    <section className="py-16 bg-[#faf7ed]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#892626] mb-4">
            Our Programs
          </h2>
          <div className="w-20 h-1 bg-[#f3693a] mx-auto mb-4"></div>
          <p className="max-w-3xl mx-auto text-[#6b7280]">
            Our initiatives are designed to empower young Africans through education, entrepreneurship, and leadership
            development.
          </p>
        </div>

        <div className="lg:w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.slice(0, 2).map((program, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow overflow-hidden border border-[#e18f49]/20 hover:shadow-md transition-shadow duration-300"
            >
              <div
                className="h-48 bg-cover bg-center relative flex items-center justify-center"
                style={{ backgroundImage: `url(${program.images[0]})` }}
              >
                <div className="text-[#892626] font-semibold text-lg sr-only">{program.title}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#892626] mb-2">{program.title}</h3>
                <p className="text-gray-700 mb-4">{program.description}</p>
                <Link
                  href="/programs"
                  className="text-[#f3693a] font-medium hover:text-[#f7923e] transition-colors flex items-center"
                >
                  Learn More <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/programs"
            className="bg-[#f3693a] hover:bg-[#f7923e] text-white font-bold py-3 px-8 rounded-md transition-colors inline-block"
          >
            Explore All Programs
          </Link>
        </div>
      </div>
    </section>
  );
}
