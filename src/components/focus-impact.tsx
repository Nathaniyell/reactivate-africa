import { focusAreas, strategies } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import React from "react";

export default function FocusImpact() {


  return (
    <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-[#892626] mb-4">OUR FOCUS AREAS</h2>
          <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
          <ul className="space-y-3">
            {focusAreas.map((area, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                <span className="ml-2 text-gray-700">{area}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-[#892626] mb-4">OUR STRATEGY</h2>
          <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
          <ul className="space-y-3">
            {strategies.map((strategy, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                <span className="ml-2 text-gray-700">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
  );
}
