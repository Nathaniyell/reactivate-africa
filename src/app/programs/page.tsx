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
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="space-y-16">
          {programs.map((program) => (
            <div
              key={program.id}
              id={program.id}
              className="space-y-8 bg-white p-2 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div>
                <h3 className="text-3xl font-bold text-[#892626]">{program.title}</h3>
                <div className="w-20 h-1 bg-[#F08232] mt-2"></div>
              </div>
              {/* Mobile Slider (below md) */}
              <div className="md:hidden relative w-full h-[300px] rounded-xl overflow-hidden">
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
                      <Image
                        src={image}
                        alt={`${program.title} image ${index + 1}`}
                        fill
                        priority
                        className="object-contain bg-gray-50"
                        sizes="100vw"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Desktop Grid (md and above) */}
              <div className="hidden md:block">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {program.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center"
                    >
                      <Image
                        src={image}
                        alt={`${program.title} image ${index + 1}`}
                        width={600}
                        height={400}
                        priority
                        className="object-contain max-w-full max-h-full p-2 hover:scale-105 transition-transform duration-300"
                        style={{
                          width: 'auto',
                          height: 'auto'
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Rest of your content remains the same */}
              <div className="space-y-2">
                {/* <div>
                  <h3 className="text-3xl font-bold text-[#892626]">{program.title}</h3>
                  <div className="w-20 h-1 bg-[#F08232] mt-2"></div>
                </div> */}

                <p className="text-gray-700 leading-relaxed text-lg">{program.description}</p>

                {program.features && (
                  <ul className="space-y-3">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={20} />
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {program.objectives && (
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-[#2E4700]">
                      {program.objectivesTitle || "Program Objectives:"}
                    </h4>
                    <ul className="space-y-3">
                      {program.objectives.map((objective, index) => (
                        <li key={index} className="flex items-start">
                          <ChevronRight className="text-[#F08232] mt-1 flex-shrink-0" size={20} />
                          <span className="ml-3 text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </div>
  );
}