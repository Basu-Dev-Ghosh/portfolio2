"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export default function InfiniteMarquee({
  children,
  speed = 50,
  direction = "left",
  className = "",
}: InfiniteMarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <div className="flex gap-8">{children}</div>
        <div className="flex gap-8">{children}</div>
      </motion.div>
    </div>
  );
}
