"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award } from "lucide-react";
import { useInView } from "react-intersection-observer";
import CountUp from "@/components/animations/CountUp";
import ParallaxScroll from "@/components/effects/ParallaxScroll";

const stats = [
  { icon: Code2, label: "Projects Delivered", value: 50, suffix: "+" },
  { icon: Rocket, label: "Years Experience", value: 3, suffix: "+" },
  { icon: Users, label: "Happy Clients", value: 20, suffix: "+" },
  { icon: Award, label: "Technologies", value: 30, suffix: "+" },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="about"
      className="section-padding bg-dark-lighter relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="relative">
              {/* Main Image */}
              <ParallaxScroll offset={120} speed={2.8}>
                <motion.div
                  className="relative aspect-[4/5] bg-dark-light rounded-2xl overflow-hidden border border-gray-dark/20 group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/about/working.jpg"
                    alt="Basudev working on code"
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </ParallaxScroll>

              {/* Floating Card - Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-2xl shadow-primary/30 max-w-xs"
              >
                <p className="font-bebas text-lg text-dark uppercase mb-2">
                  Current Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "FastAPI",
                    "Next.js",
                    "PostgreSQL",
                    "Kubernetes",
                  ].map((tech, idx) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + idx * 0.05 }}
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      className="bg-dark text-primary text-xs px-3 py-1 rounded-full font-semibold cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Secondary Images */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                className="aspect-square bg-dark-light rounded-xl overflow-hidden border border-gray-dark/20 group"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/images/about/setup.jpg"
                  alt="Development setup"
                  width={500}
                  height={300}
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </motion.div>
              <motion.div
                className="aspect-square bg-primary/20 rounded-xl flex items-center justify-center p-6"
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <p className="font-bebas text-4xl text-center text-primary leading-tight">
                  CLEAN CODE MATTERS
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Section Label */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="font-bebas text-primary text-lg uppercase tracking-wider border-l-4 border-primary pl-4">
                About Me
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="font-bebas text-display uppercase leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Building <span className="text-primary">Scalable Solutions</span>{" "}
              with <span className="text-primary">Clean Code</span>
            </motion.h2>

            {/* Description */}
            <div className="space-y-4 text-gray text-lg leading-relaxed">
              <p>
                I'm{" "}
                <span className="text-white font-semibold">Basudev Ghosh</span>,
                a software developer at{" "}
                <span className="text-primary">Hilal Software Corp</span>, where
                I architect and build enterprise-level applications that process
                millions of data points daily.
              </p>

              <p>
                My expertise lies in creating{" "}
                <span className="text-white">
                  high-performance backend systems
                </span>{" "}
                with Python and FastAPI, combined with modern frontend
                experiences using Next.js. I specialize in:
              </p>

              <ul className="space-y-2 pl-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    <strong className="text-white">
                      Complex Data Pipelines:
                    </strong>{" "}
                    Processing Amazon seller data with Prefect orchestration and
                    dbt transformations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    <strong className="text-white">
                      Enterprise Authentication:
                    </strong>{" "}
                    RBAC systems with JWT, OAuth2, and multi-tenant support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    <strong className="text-white">AI Integration:</strong>{" "}
                    RAG-powered chatbots with multi-channel support and
                    real-time messaging
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">▸</span>
                  <span>
                    <strong className="text-white">
                      Cloud Infrastructure:
                    </strong>{" "}
                    Kubernetes orchestration on Azure with CI/CD automation
                  </span>
                </li>
              </ul>

              <p>
                I believe in{" "}
                <span className="text-primary font-semibold">
                  pragmatic solutions
                </span>{" "}
                over over-engineering, and I'm passionate about writing
                maintainable code that scales with your business.
              </p>
            </div>

            {/* Education */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <p className="font-bebas text-2xl text-primary uppercase">
                Education
              </p>
              <div className="space-y-3">
                <div className="bg-dark-light/50 p-4 rounded-lg border border-gray-dark/20">
                  <h4 className="text-white font-semibold text-lg">
                    B.Tech in Computer Science & Engineering
                  </h4>
                  <p className="text-gray">
                    Heritage Institute of Technology (H.I.T), Kolkata
                  </p>
                  <p className="text-gray text-sm">CGPA: 7.2 | Present</p>
                </div>
                <div className="bg-dark-light/50 p-4 rounded-lg border border-gray-dark/20">
                  <h4 className="text-white font-semibold text-lg">
                    Polytechnic in Computer Science & Technology
                  </h4>
                  <p className="text-gray">
                    I.C.V.P, Jhargram
                  </p>
                  <p className="text-gray text-sm">CGPA: 8.0 | Aug 2022</p>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              className="border-l-4 border-primary pl-6 py-4 bg-dark-light/50 rounded-r-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ x: 5, borderLeftColor: "rgb(184 214 38)" }}
            >
              <p className="font-bebas text-2xl text-primary uppercase mb-2">
                My Philosophy
              </p>
              <p className="text-gray italic">
                "Write code that your future self will thank you for. Keep it
                simple, keep it clean, and always prioritize maintainability
                over cleverness."
              </p>
            </motion.blockquote>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center p-8 bg-dark-light rounded-xl border border-gray-dark/20 hover:border-primary/50 transition-all group"
              >
                <motion.div
                  className="w-16 h-16 bg-dark rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-primary group-hover:text-dark transition-colors" />
                </motion.div>
                <div className="font-bebas text-5xl text-white mb-2 group-hover:text-primary transition-colors">
                  <CountUp end={stat.value} />
                  {stat.suffix}
                </div>
                <p className="text-gray text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
