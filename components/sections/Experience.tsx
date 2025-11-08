"use client";

import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import ParallaxScroll from "@/components/effects/ParallaxScroll";

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={ref} className={`mb-20 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="font-bebas text-primary text-lg uppercase tracking-wider">
            Work History
          </span>
          <h2 className="font-bebas text-display uppercase mt-4 mb-6">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-gray text-xl max-w-3xl">
            Building enterprise-grade solutions and leading technical initiatives across multiple
            high-impact projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <div
              key={index}
              className={`relative ${inView ? "animate-slide-up" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Timeline Line */}
              {index < EXPERIENCE.length - 1 && (
                <div className="hidden lg:block absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Timeline Dot & Meta */}
                <div className="lg:col-span-3">
                  <div className="flex lg:flex-col gap-4">
                    {/* Timeline Dot */}
                    <ParallaxScroll offset={60} speed={1.3}>
                      <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <Briefcase className="w-8 h-8 text-dark" />
                      </div>
                    </ParallaxScroll>

                    {/* Meta Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-gray mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="lg:col-span-9">
                  <div className="bg-dark-light rounded-2xl p-8 border border-gray-dark/20 hover:border-primary/50 transition-all duration-500 group">
                    {/* Company & Position */}
                    <div className="mb-6">
                      <h3 className="font-bebas text-4xl uppercase text-white group-hover:text-primary transition-colors mb-2">
                        {exp.position}
                      </h3>
                      <p className="text-primary text-xl font-semibold">{exp.company}</p>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-4 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex gap-3 text-gray">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies Used */}
                    <div>
                      <p className="font-bebas text-sm uppercase tracking-wider text-gray mb-3">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-dark px-4 py-2 rounded-lg text-sm text-primary border border-primary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Resume CTA */}
        <div className="mt-16 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-primary text-dark font-bebas text-xl uppercase tracking-wider px-12 py-6 rounded-full hover:bg-primary-dark hover:scale-105 transition-all duration-300"
          >
            <Briefcase className="w-6 h-6" />
            <span>Download Full Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}