"use client";
import HeroSection from "@/components/component-hero";
import CTASection from "@/components/cta-section";
import { ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from 'swiper/modules';
import "swiper/css";
import Image from "next/image";
import { programs, tagline } from "@/lib/data";

export default function ProgramsPage() {
  return (
    <div>
      <HeroSection tagline={tagline} isContactPage />
      <section className="max-w-6xl mx-auto py-16 bg-white">
        <div className="container mx-auto px-2 md:px-4">
          <div className="space-y-12 max-w-5xl mx-auto">
            {programs.map((program) => (
              <div
                key={program.id}
                id={program.id}
                className="scroll-mt-20 bg-white p-4 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-[#892626] mb-4">{program.title}</h3>
                <div className="w-16 h-1 bg-[#F08232] mb-6"></div>
                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>

                
                <div className="mb-6">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Autoplay, EffectFade]}
                    className="h-full w-full"
                  >
                    {program.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                          <Image
                            src={image}
                            alt={`${program.title} image ${index + 1}`}
                            fill
                            priority
                            className="object-cover"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {program.features && (
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                        <span className="ml-2 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {program.objectives && (
                  <>
                    <h4 className="text-lg font-semibold text-[#2E4700] mb-3">
                      {program.objectivesTitle || "Program Objectives:"}
                    </h4>
                    <ul className="space-y-3">
                      {program.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={18} />
                          <span className="ml-2 text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  );
}
