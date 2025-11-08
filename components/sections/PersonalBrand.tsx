"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const profileImages = [
  "/images/hero/profile.jpg",
  "/images/hero/profile2.jpg",
  "/images/hero/profile3.jpg",
  "/images/hero/profile4.jpg",
  "/images/hero/profile5.jpg",
  "/images/hero/profile6.jpg",
];

export default function PersonalBrand() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [currentProfile, setCurrentProfile] = useState(0);

  // Auto-rotate profile images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfile((prev) => (prev + 1) % profileImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-dark-lighter relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 ${inView ? "animate-slide-up" : "opacity-0"}`}
        >
          <span className="font-bebas text-primary text-lg uppercase tracking-wider">
            Personal Brand
          </span>
          <h2 className="font-bebas text-display uppercase mt-4 mb-6">
            Meet <span className="text-primary">Basudev</span>
          </h2>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* RGB Setup Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] bg-dark rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/images/hero/setup3_vid.mp4" type="video/mp4" />
            </video>

            {/* Video Label */}
            <div className="absolute top-4 left-4 bg-dark/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <p className="font-bebas text-primary text-xs uppercase">🎨 RGB Setup</p>
            </div>
          </motion.div>

          {/* Profile Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative aspect-[4/5] bg-dark rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProfile}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <Image
                  src={profileImages[currentProfile]}
                  alt="Basudev Ghosh"
                  fill
                  unoptimized
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-dark/70 backdrop-blur-sm px-3 py-2 rounded-full">
              {profileImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProfile(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentProfile ? "bg-primary w-4" : "bg-gray-dark hover:bg-gray"
                  }`}
                />
              ))}
            </div>

            {/* Label */}
            <div className="absolute top-4 left-4 bg-dark/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <p className="font-bebas text-primary text-xs uppercase">Profile</p>
            </div>
          </motion.div>

          {/* Setup Image 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] bg-dark rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10 group"
          >
            <Image
              src="/images/about/setup3.jpg"
              alt="Workspace Setup"
              fill
              unoptimized
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-dark/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <p className="font-bebas text-primary text-xs uppercase">Setup 1</p>
            </div>
          </motion.div>

          {/* Setup Image 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-[4/5] bg-dark rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10 group"
          >
            <Image
              src="/images/about/setup2.jpg"
              alt="Workspace Setup 2"
              fill
              unoptimized
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-dark/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <p className="font-bebas text-primary text-xs uppercase">Setup 2</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="font-bebas text-3xl md:text-4xl uppercase text-primary">
            Where Innovation Meets Design
          </p>
          <p className="text-gray text-lg mt-2">
            Crafting code in a workspace built for creativity
          </p>
        </motion.div>
      </div>
    </section>
  );
}
