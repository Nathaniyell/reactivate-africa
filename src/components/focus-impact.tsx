import { BookOpen, Users, Flag, GraduationCap, DollarSign, Compass } from "lucide-react"

export default function FocusImpact() {
  return (
    <section className="py-16 bg-[#faf7ed]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Focus Areas */}
          <div>
            <h2 className="text-3xl font-bold text-[#1b4d2e] mb-8">Focus Areas</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#faf7ed] border border-gray-200 p-4 rounded-md text-center">
                <div className="bg-[#1b4d2e] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="text-white" size={16} />
                </div>
                <h3 className="text-sm font-semibold text-[#1b4d2e]">Education</h3>
              </div>

              <div className="bg-[#faf7ed] border border-gray-200 p-4 rounded-md text-center">
                <div className="bg-[#1b4d2e] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="text-white" size={16} />
                </div>
                <h3 className="text-sm font-semibold text-[#1b4d2e]">Youth Dev.</h3>
              </div>

              <div className="bg-[#faf7ed] border border-gray-200 p-4 rounded-md text-center">
                <div className="bg-[#1b4d2e] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Flag className="text-white" size={16} />
                </div>
                <h3 className="text-sm font-semibold text-[#1b4d2e]">Sustainability</h3>
              </div>
            </div>
          </div>

          {/* Impact Pathways */}
          <div>
            <h2 className="text-3xl font-bold text-[#1b4d2e] mb-8">Impact Pathways</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#faf7ed] border border-gray-200 p-4 rounded-md text-center">
                <div className="bg-[#1b4d2e] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="text-white" size={16} />
                </div>
                <h3 className="text-sm font-semibold text-[#1b4d2e]">Educational Support</h3>
              </div>

              <div className="bg-[#faf7ed] border border-gray-200 p-4 rounded-md text-center">
                <div className="bg-[#1b4d2e] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="text-white" size={16} />
                </div>
                <h3 className="text-sm font-semibold text-[#1b4d2e]">Gender Ecosystem</h3>
              </div>

              <div className="bg-[#faf7ed] border border-gray-200 p-4 rounded-md text-center">
                <div className="bg-[#1b4d2e] w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Compass className="text-white" size={16} />
                </div>
                <h3 className="text-sm font-semibold text-[#1b4d2e]">Social Innovation</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

