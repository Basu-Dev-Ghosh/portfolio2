"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function SplitText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
}: SplitTextProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
}
