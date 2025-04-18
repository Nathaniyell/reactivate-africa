"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

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
  
  const impacted = useCountUp(5000, 4000, isInView); // 4 seconds
  const sdgAgents = useCountUp(6800, 8000, isInView); // 8 seconds

  return (
    <section ref={ref} className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 place-items-center gap-12">
          <div>
            <h2 className="text-7xl md:text-9xl text-neutral-900">
              {impacted.toLocaleString()}+
            </h2>
            <p className="text-3xl mt-2 text-gray-700 font-medium">people impacted</p>
          </div>

          <div>
            <h2 className="text-7xl md:text-9xl text-neutral-900">
              {sdgAgents.toLocaleString()}
            </h2>
            <p className="text-3xl mt-2 text-gray-700 font-medium">SDG Agents by 2029</p>
          </div>
        </div>
      </div>
    </section>
  );
}