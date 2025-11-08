"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative"
          aria-label={`Navigate to ${section.label}`}
        >
          {/* Dot */}
          <motion.div
            className={`w-3 h-3 rounded-full border-2 transition-colors ${
              activeSection === section.id
                ? "border-primary bg-primary"
                : "border-gray bg-transparent hover:border-primary"
            }`}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.9 }}
          />

          {/* Label */}
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-sm font-bebas uppercase tracking-wider text-gray opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {section.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
