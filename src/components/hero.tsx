"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero() {
  const backgroundImages = [
    
    '/raf2.jpg',
    '/raf3.jpg',
    '/raf4.jpg',
    '/raf6.jpg',
  ];

  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden h-[80vh] min-h-[600px]">
      {/* Swiper Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1500}
          loop={true}
          className="h-full w-full"
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={index} className="h-full w-full">
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>


        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold [text-shadow:2px_4px_2px_rgba(0,0,0,0.3)] mb-12">
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
  );
}