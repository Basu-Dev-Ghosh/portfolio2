"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shape 1 - Circle */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shape 2 - Circle */}
      <motion.div
        className="absolute top-2/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 100, -70, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Shape 3 - Circle */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-primary/5 blur-3xl"
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 90, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
}
