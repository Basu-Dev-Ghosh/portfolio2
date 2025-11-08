"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-dark/80 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-black/50"
            : "bg-transparent"
        )}
      >
        <nav className="container-custom py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="group font-bebas text-2xl transition-colors relative"
            >
              <motion.span
                className="text-primary group-hover:text-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                BASUDEV
              </motion.span>
              <span className="text-white">.DEV</span>

              {/* Underline animation */}
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="group relative font-bebas text-lg uppercase tracking-wider text-gray hover:text-primary transition-colors"
                  >
                    {link.name}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* Theme Toggle & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <ThemeToggle />

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
              <Link
                href="/contact"
                className="group relative bg-primary text-dark font-bebas text-lg uppercase tracking-wider px-8 py-4 rounded-full overflow-hidden inline-block"
              >
                <motion.span
                  className="absolute inset-0 bg-primary-dark"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Get in Touch</span>
              </Link>
              </motion.div>
            </div>

            {/* Mobile: Theme Toggle & Menu */}
            <div className="lg:hidden flex items-center gap-3">
              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="text-white w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
