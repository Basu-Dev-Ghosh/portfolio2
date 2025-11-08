"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";
import Button from "@/components/ui/Button";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Typewriter from "@/components/animations/Typewriter";
import SplitText from "@/components/animations/SplitText";
import FlipClock from "@/components/animations/FlipClock";
import ParallaxScroll from "@/components/effects/ParallaxScroll";
import MorphingBackground from "@/components/effects/MorphingBackground";
import FloatingShapes from "@/components/effects/FloatingShapes";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* Morphing Background */}
      <MorphingBackground />

      {/* Floating Shapes */}
      <FloatingShapes />

      {/* Particle Background */}
      <ParticleBackground />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(184, 214, 38, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(184, 214, 38, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 ${mounted ? "animate-fade-in" : "opacity-0"}`}
          >
            {/* Flip Clock */}
            <div className="inline-block">
              <FlipClock />
            </div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-bebas text-hero uppercase leading-none mb-4">
                <SplitText text="SOFTWARE" className="inline-block" />
                <br />
                <span className="text-primary">
                  <SplitText
                    text="DEVELOPER"
                    className="inline-block"
                    delay={0.4}
                  />
                </span>
              </h1>
              <div className="text-xl md:text-2xl text-gray max-w-xl">
                <Typewriter
                  text="Building scalable solutions with clean, maintainable code. Specializing in Python, FastAPI, and Next.js."
                  delay={800}
                  speed={30}
                />
              </div>
            </motion.div>

            {/* Navigation Menu */}
            <nav className="flex flex-col gap-2 font-bebas text-lg">
              <Link
                href="/about"
                className="text-gray-light hover:text-primary transition-colors uppercase tracking-wider"
              >
                [ ABOUT ]
              </Link>
              <Link
                href="/projects"
                className="text-gray-light hover:text-primary transition-colors uppercase tracking-wider"
              >
                [ PROJECTS ]
              </Link>
              <Link
                href="/contact"
                className="text-primary uppercase tracking-wider"
              >
                [ CONTACT ]
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" asChild>
                <Link href="/contact">Let's Work Together</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  Download Resume
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/basudevghosh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-light flex items-center justify-center rounded-full hover:bg-primary hover:text-dark transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/basudev-ghosh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-dark-light flex items-center justify-center rounded-full hover:bg-primary hover:text-dark transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@basudev.in"
                className="w-12 h-12 bg-dark-light flex items-center justify-center rounded-full hover:bg-primary hover:text-dark transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <ParallaxScroll offset={150} speed={2.5}>
              <motion.div
                className="relative aspect-[3/4] max-w-md mx-auto"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Accent Background with 3D effect */}
                <motion.div
                  className="absolute -top-8 -right-8 w-full h-full bg-primary/20 rounded-2xl"
                  style={{
                    rotateX: mousePosition.y * 0.05,
                    rotateY: mousePosition.x * 0.05,
                  }}
                />

                {/* Image Container */}
                <div className="relative w-full h-full bg-dark-light rounded-2xl overflow-hidden border border-gray-dark/20 group">
                  <Image
                    src="/images/hero/profile.jpg"
                    alt="Basudev Ghosh - Software Developer"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    priority
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Info Card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-xl"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="font-bebas text-2xl text-dark uppercase">
                    {SITE_CONFIG.name}
                  </p>
                  <p className="text-dark font-semibold">
                    Based in {SITE_CONFIG.location}
                  </p>
                </motion.div>
              </motion.div>
            </ParallaxScroll>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.div>
    </section>
  );
}
