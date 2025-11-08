"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / documentHeight) * 100;

      setScrollProgress(progress);
      setIsVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial check

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-full bg-primary text-dark flex items-center justify-center shadow-lg hover:shadow-primary/50 transition-shadow"
          aria-label="Back to top"
        >
          {/* Progress Circle */}
          <svg
            className="absolute inset-0 w-full h-full -rotate-90"
            viewBox="0 0 56 56"
          >
            <circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="rgba(0, 0, 0, 0.2)"
              strokeWidth="2"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="rgba(0, 0, 0, 0.6)"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                pathLength: scrollProgress / 100,
              }}
              strokeDasharray="164"
              strokeDashoffset="0"
            />
          </svg>

          <ArrowUp className="w-6 h-6 relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
