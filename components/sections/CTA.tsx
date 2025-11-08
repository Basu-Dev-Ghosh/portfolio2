"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useInView } from "react-intersection-observer";
import RippleEffect from "@/components/effects/RippleEffect";

export default function CTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="section-padding bg-dark relative overflow-hidden"
    >
      {/* Ripple Effect */}
      <RippleEffect>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(184, 214, 38, 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(184, 214, 38, 0.5) 1px, transparent 1px)`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-bebas text-lg uppercase tracking-wider text-primary">
                Available for Work
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-bebas text-display uppercase leading-tight mb-6"
            >
              Let's Build Something{" "}
              <span className="text-primary inline-block">
                <motion.span
                  animate={
                    inView
                      ? {
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }
                      : {}
                  }
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #b8d626, #c4db2e, #d4eb3e, #c4db2e, #b8d626)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Extraordinary
                </motion.span>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray mb-12 max-w-2xl mx-auto"
            >
              Have a project in mind? Let's discuss how I can help you build
              scalable, maintainable applications that drive real business
              value.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/contact" className="group relative">
                <motion.div
                  className="absolute inset-0 bg-primary rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-primary text-dark font-bebas text-xl uppercase tracking-wider px-10 py-5 rounded-full flex items-center gap-3 shadow-lg hover:shadow-primary/50 transition-all"
                >
                  <Zap className="w-5 h-5" />
                  <span>Start a Project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </Link>

              <Link href="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary text-primary font-bebas text-xl uppercase tracking-wider px-10 py-5 rounded-full hover:bg-primary hover:text-dark transition-all flex items-center gap-3"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-dark/20"
            >
              {[
                { label: "Response Time", value: "<24h" },
                { label: "Success Rate", value: "100%" },
                { label: "Projects Delivered", value: "50+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="font-bebas text-4xl md:text-5xl text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </RippleEffect>
    </section>
  );
}
