"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { tagline } from "@/lib/data";


function useTypewriter(text: string, speed: number = 100) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text, speed]);

  return { displayedText, isTypingComplete };
}

export default function Hero() {
  const backgroundImages = [
    '/raf1.jpg',
    '/raf2.jpg',
    '/raf_girls.jpg',
    '/raf_talk.jpg',
  ];

  
  const { displayedText, isTypingComplete } = useTypewriter(tagline, 100);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (isTypingComplete) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTypingComplete]);

  return (
    <section className="relative text-white py-20 md:py-32 overflow-hidden h-[80vh] min-h-[600px]">
  
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold [text-shadow:2px_4px_2px_rgba(0,0,0,0.3)] mb-12 min-h-[1.5em]">
            {displayedText}
            {!isTypingComplete && <span className="animate-pulse">|</span>}
          </h1>
          
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/get-involved"
                className="inline-block bg-white hover:bg-gray-100 text-[#f3693a] font-bold py-3 px-8 rounded-md shadow-sm transition-colors duration-300"
              >
                Support Our Work
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}