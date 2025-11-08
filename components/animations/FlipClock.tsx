"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FlipClock() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime({
        hours: now.getHours().toString().padStart(2, "0"),
        minutes: now.getMinutes().toString().padStart(2, "0"),
        seconds: now.getSeconds().toString().padStart(2, "0"),
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <TimeUnit value={time.hours} />
      <span className="font-bebas text-xl md:text-2xl text-primary/60">:</span>
      <TimeUnit value={time.minutes} />
      <span className="font-bebas text-xl md:text-2xl text-primary/60">:</span>
      <TimeUnit value={time.seconds} />
    </div>
  );
}

function TimeUnit({ value }: { value: string }) {
  const digits = value.split("");

  return (
    <div className="flex gap-0.5 md:gap-1">
      {digits.map((digit, index) => (
        <Digit key={index} value={digit} />
      ))}
    </div>
  );
}

function Digit({ value }: { value: string }) {
  return (
    <div className="relative w-7 h-9 md:w-8 md:h-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center bg-dark-light/50 border border-primary/20 rounded"
        >
          <span className="font-bebas text-xl md:text-2xl text-primary">
            {value}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
