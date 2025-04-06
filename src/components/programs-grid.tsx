import Link from "next/link"
import { Users, Rocket, BarChart3, BookOpen } from "lucide-react"

export default function ProgramsGrid() {
  return (
    <section className="py-16 bg-[#faf7ed]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#1b4d2e] mb-8">Our Programs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#faf7ed] border border-gray-200 p-6 rounded-md text-center">
            <div className="bg-[#1b4d2e] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-[#1b4d2e]">SDGs Talkfest</h3>
          </div>

          <div className="bg-[#faf7ed] border border-gray-200 p-6 rounded-md text-center">
            <div className="bg-[#1b4d2e] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-[#1b4d2e]">Green Teens</h3>
          </div>

          <div className="bg-[#faf7ed] border border-gray-200 p-6 rounded-md text-center">
            <div className="bg-[#1b4d2e] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-[#1b4d2e]">YEALX</h3>
          </div>

          <div className="bg-[#faf7ed] border border-gray-200 p-6 rounded-md text-center">
            <div className="bg-[#1b4d2e] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="text-white" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-[#1b4d2e]">SDG Connect</h3>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/programs"
            className="bg-[#1b4d2e] hover:bg-[#143823] text-white font-bold py-3 px-8 rounded-md transition-colors inline-block"
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

