"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxScrollProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  speed?: number; // 0.5 = slow, 1 = normal, 2 = fast
}

export default function ParallaxScroll({
  children,
  offset = 100,
  className = "",
  speed = 1,
}: ParallaxScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // More dramatic range with speed multiplier
  const adjustedOffset = offset * speed;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-adjustedOffset, adjustedOffset]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
