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
  const duration = speed;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: duration,
            ease: "linear",
          },
        }}
      >
        {/* Duplicate content for seamless loop */}
        <div className="flex">{children}</div>
        <div className="flex">{children}</div>
      </motion.div>
    </div>
  );
}
