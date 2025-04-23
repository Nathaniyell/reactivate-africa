"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

function useCountUp(to: number, duration: number, startCounting: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let start = 0;
    const increment = to / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(interval);
  }, [to, duration, startCounting]);

  return count;
}

export default function ImpactStatsNew() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const impacted = useCountUp(5000, 4000, isInView);
  const sdgAgents = useCountUp(6800, 8000, isInView);

  return (
    <section ref={ref} className="py-16">
      <div className="container md:w-10/12 mx-auto px-4">
        <div className="grid place-items-center gap-12">
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row md:items-center justify-between w-full">
            <Image src="/raf_mobile2.jpg" alt="raf" width={500} height={200}
              className="object-cover rounded-lg" />
            <div>
              <h2 className="text-7xl md:text-9xl text-neutral-900">
                {impacted.toLocaleString()}+
              </h2>
              <p className="text-3xl mt-2 text-gray-700 font-medium">people impacted</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row-reverse md:items-center justify-between w-full">
            <Image src="/raf_mobile.jpg" alt="raf" width={500} height={200}
              className="object-cover rounded-lg" />
            <div>
              <h2 className="text-7xl md:text-9xl text-neutral-900">
                {sdgAgents.toLocaleString()}
              </h2>
              <p className="text-3xl mt-2 text-gray-700 font-medium">SDG Agents by 2029</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}