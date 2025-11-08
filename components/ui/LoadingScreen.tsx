"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-dark flex items-center justify-center"
        >
          <div className="text-center space-y-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-bebas text-6xl text-primary">
                BASUDEV<span className="text-white">.DEV</span>
              </h1>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 mx-auto space-y-4">
              <div className="h-1 bg-dark-light rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Percentage */}
              <motion.div
                className="font-bebas text-2xl text-gray"
                key={Math.floor(progress)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {Math.floor(progress)}%
              </motion.div>
            </div>

            {/* Loading Text */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray uppercase tracking-wider text-sm"
            >
              Loading Experience...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
