"use client";

import { useInView } from "react-intersection-observer";
import { Code, Cloud, Database, Layers, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/data";
import Link from "next/link";
import ParallaxScroll from "@/components/effects/ParallaxScroll";

const iconMap: Record<string, any> = {
  code: Code,
  cloud: Cloud,
  database: Database,
  layers: Layers,
};

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="services"
      className="section-padding bg-dark-lighter relative overflow-hidden"
    >
      {/* Diagonal Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            background: `repeating-linear-gradient(
              45deg,
              #b8d626,
              #b8d626 10px,
              transparent 10px,
              transparent 20px
            )`,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-20 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <span className="font-bebas text-primary text-lg uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="font-bebas text-display uppercase mt-4 mb-6">
            Services & <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-gray text-xl max-w-3xl mx-auto">
            From concept to deployment, I provide comprehensive software
            development services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <div
                key={service.title}
                className={`group relative bg-dark rounded-3xl p-10 border-2 border-gray-dark/20 hover:border-primary transition-all duration-500 ${
                  inView ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <ParallaxScroll offset={50} speed={1.2}>
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                      <Icon className="w-10 h-10 text-primary group-hover:text-dark transition-colors" />
                    </div>
                  </ParallaxScroll>

                  {/* Title */}
                  <h3 className="font-bebas text-3xl uppercase mb-4 text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0">
                          ▸
                        </span>
                        <span className="text-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                  >
                    <span>Discuss Your Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Corner Number */}
                <div className="absolute top-6 right-6 font-bebas text-6xl text-primary/10 group-hover:text-primary/20 transition-colors">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-dark rounded-3xl p-12 border border-gray-dark/20">
          <h3 className="font-bebas text-4xl uppercase mb-6">
            Have a <span className="text-primary">Custom Project</span> in Mind?
          </h3>
          <p className="text-gray text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help bring your ideas to life with clean,
            scalable code and modern technologies.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-dark font-bebas text-xl uppercase tracking-wider px-12 py-6 rounded-full hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
