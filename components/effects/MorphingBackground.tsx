"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function MorphingBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Disable on mobile for performance
  if (isMobile) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl top-[10%] left-[10%]"
          style={{
            background: "radial-gradient(circle, rgba(184, 214, 38, 0.15) 0%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(184, 214, 38, 0.15) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        initial={{ top: "10%", left: "10%" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-80 h-80 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(184, 214, 38, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 80, -80, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        initial={{ top: "50%", right: "10%" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-72 h-72 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(184, 214, 38, 0.12) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 60, -60, 0],
          y: [0, -60, 60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        initial={{ bottom: "10%", left: "50%" }}
      />
    </div>
  );
}
