"use client";

import { useRef, ReactNode, useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Disable parallax on mobile for better performance
  const adjustedOffset = isMobile ? 0 : offset * speed;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-adjustedOffset, adjustedOffset]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y: isMobile ? 0 : y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
