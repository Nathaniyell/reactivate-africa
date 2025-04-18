"use client"
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

type ScrollAnimationWrapperProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  scale?: number;
  opacity?: number;
  rotate?: number;
  once?: boolean;
  className?: string;
};

const ScrollAnimationWrapper = ({
  children,
  delay = 0.5,
  duration = 0.6,
  x = 0,
  y = 20,
  scale = 1,
  opacity = 1,
  rotate = 0,
  once = true,
  className = "",
}: ScrollAnimationWrapperProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { 
      opacity: 0, 
      y: y, 
      x: x,
      scale: scale,
      rotate: rotate 
    },
    visible: {
      opacity: opacity,
      y: 0,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;