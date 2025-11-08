"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Code2, Cloud, Database, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data";
import { useInView } from "react-intersection-observer";

const iconMap: Record<string, any> = {
  code: Code2,
  cloud: Cloud,
  database: Database,
  layers: Layers,
};

export default function ServicesPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Header with Animated Background */}
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(184, 214, 38, 0.3) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(184, 214, 38, 0.3) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
              animation: "grid-pulse 4s ease-in-out infinite",
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bebas text-lg uppercase tracking-wider">Back to Home</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block font-bebas text-primary text-lg uppercase tracking-wider mb-4">
              What I Offer
            </span>
            <h1 className="font-bebas text-display uppercase mb-6">
              Services & <span className="text-primary">Expertise</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl mb-8">
              Comprehensive software development services that transform ideas into production-ready applications.
              From backend architecture to cloud deployment, I handle the full stack.
            </p>

            {/* CTA */}
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-dark font-bebas text-xl uppercase tracking-wider px-8 py-4 rounded-full hover:bg-primary-dark transition-all hover:scale-105"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes grid-pulse {
            0%, 100% {
              opacity: 0.05;
            }
            50% {
              opacity: 0.1;
            }
          }
        `}</style>
      </section>

      {/* Services Grid */}
      <section ref={ref} className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon] || Code2;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-dark rounded-3xl p-10 border border-gray-dark/20 hover:border-primary/50 transition-all duration-500 h-full overflow-hidden">
                    {/* Background Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className="w-20 h-20 bg-dark-light rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-10 h-10 text-primary group-hover:text-dark transition-colors" />
                      </motion.div>

                      {/* Title & Description */}
                      <h3 className="font-bebas text-4xl uppercase text-white group-hover:text-primary transition-colors mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.05 }}
                            className="flex items-start gap-3 group/item"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                            <span className="text-gray group-hover/item:text-white transition-colors">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-500" />
                  </div>

                  {/* Hover Border */}
                  <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-bebas text-primary text-lg uppercase tracking-wider">
              How I Work
            </span>
            <h2 className="font-bebas text-display uppercase mt-4 mb-6">
              Development <span className="text-primary">Process</span>
            </h2>
            <p className="text-gray text-xl max-w-3xl mx-auto">
              A transparent, collaborative approach that ensures your project is delivered on time and exceeds expectations.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Discovery", desc: "Understanding your requirements, goals, and technical constraints" },
              { number: "02", title: "Planning", desc: "Architecture design, technology selection, and timeline estimation" },
              { number: "03", title: "Development", desc: "Iterative development with regular updates and code reviews" },
              { number: "04", title: "Deployment", desc: "Production deployment, monitoring setup, and documentation" },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-dark-light rounded-2xl p-8 border border-gray-dark/20 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="font-bebas text-6xl text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bebas text-2xl uppercase text-white group-hover:text-primary transition-colors mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-dark/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-lighter relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="font-bebas text-[20vw] text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            LET'S BUILD
          </div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-bebas text-display uppercase mb-6">
              Ready to Start Your <span className="text-primary">Project?</span>
            </h2>
            <p className="text-xl text-gray mb-12">
              Let's discuss how I can help bring your ideas to life with clean, scalable, production-ready code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-dark font-bebas text-xl uppercase tracking-wider px-10 py-5 rounded-full hover:bg-primary-dark transition-all hover:scale-105"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-bebas text-xl uppercase tracking-wider px-10 py-5 rounded-full hover:bg-primary hover:text-dark transition-all"
              >
                <span>View Projects</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
