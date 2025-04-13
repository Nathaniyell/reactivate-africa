import {
  BookOpen,
  Users,
  Flag,
  GraduationCap,
  DollarSign,
  Compass,
} from "lucide-react";
import React from "react";

export default function FocusImpact() {
  return (
    <section className="py-16 bg-[#892626]">
      <div className="w-10/12 mx-auto px-4">
        <div className="grid gap-16">
          {/* Focus Areas */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Focus Areas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <BookOpen size={18} />, title: "Education", iconBg: "#f7923e" },
                { icon: <Users size={18} />, title: "Youth Dev.", iconBg: "#f7923e" },
                { icon: <Flag size={18} />, title: "Sustainability", iconBg: "#f7923e" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#faf7ed] border border-[#f7923e]/30 p-5 rounded-md text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    {React.cloneElement(item.icon, { className: "text-white" })}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Pathways */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10 text-center">
              Impact Pathways
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: <GraduationCap size={18} />, title: "Educational Support", iconBg: "#f7923e" },
                { icon: <DollarSign size={18} />, title: "Gender Ecosystem", iconBg: "#f7923e" },
                { icon: <Compass size={18} />, title: "Social Innovation", iconBg: "#f7923e" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#faf7ed] border border-[#f7923e]/30 p-5 rounded-md text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{ backgroundColor: item.iconBg }}
                  >
                    {React.cloneElement(item.icon, { className: "text-white" })}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
