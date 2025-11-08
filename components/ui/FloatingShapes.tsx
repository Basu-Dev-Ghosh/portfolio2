"use client";

import { motion } from "framer-motion";

export default function FloatingShapes() {
  const shapes = [
    { size: 80, top: "10%", left: "5%", duration: 20, delay: 0 },
    { size: 60, top: "70%", left: "10%", duration: 25, delay: 2 },
    { size: 100, top: "30%", right: "8%", duration: 22, delay: 1 },
    { size: 70, top: "80%", right: "15%", duration: 28, delay: 3 },
    { size: 50, top: "50%", left: "15%", duration: 24, delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-primary/5 blur-2xl"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
}
