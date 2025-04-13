import Link from "next/link"
import { Users, Rocket, BarChart3, BookOpen } from "lucide-react"

export default function ProgramsGrid() {
  const programs = [
    {
      id: 1,
      name: "SDGs Talkfest",
      icon: BookOpen
    },
    {
      id: 2,
      name: "Green Teens",
      icon: Users
    },
    {
      id: 3,
      name: "YEALX",
      icon: Rocket
    },
    {
      id: 4,
      name: "SDG Connect",
      icon: BarChart3
    }
  ]

  return (
    <section className="py-16 bg-[#eee]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#f3693a] mb-8 text-center">Our Programs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:w-10/12 mx-auto gap-6">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100"
            >
              <div className="bg-[#f3693a]/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <program.icon className="text-[#f3693a]" size={20} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{program.name}</h3>
              <p className="text-gray-600 text-sm mt-2">Sample program description</p>
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
  )
}