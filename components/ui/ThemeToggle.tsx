"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/providers/ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-12 h-12 rounded-xl bg-dark-light dark:bg-dark-light border-2 border-gray-dark/20 hover:border-primary/50 transition-colors flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : 180,
          scale: theme === "light" ? 1 : 0,
        }}
        transition={{ duration: 0.3, type: "spring" }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-primary" />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 0 : -180,
          scale: theme === "dark" ? 1 : 0,
        }}
        transition={{ duration: 0.3, type: "spring" }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-primary" />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/20 blur-md"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
