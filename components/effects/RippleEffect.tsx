"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export default function RippleEffect({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const addRipple = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} onClick={addRipple}>
      {children}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-primary/30"
            initial={{
              width: 0,
              height: 0,
              x: ripple.x,
              y: ripple.y,
              opacity: 1,
            }}
            animate={{
              width: 400,
              height: 400,
              x: ripple.x - 200,
              y: ripple.y - 200,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ pointerEvents: "none" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
