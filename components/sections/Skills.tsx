"use client";

import { useInView } from "react-intersection-observer";
import { SKILLS } from "@/lib/data";
import { Code2, Layers, Database, Cloud, GitBranch, Cpu } from "lucide-react";
import InfiniteMarquee from "@/components/effects/InfiniteMarquee";

const categoryIcons: Record<string, any> = {
  "Backend Development": Code2,
  "Frontend Development": Layers,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  "Data & ML": GitBranch,
  "Architecture & Design": Cpu,
};

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="skills"
      className="section-padding bg-dark-lighter relative overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(184, 214, 38, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(184, 214, 38, 0.3) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
            animation: "grid-move 20s linear infinite",
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
            Technical Expertise
          </span>
          <h2 className="font-bebas text-display uppercase mt-4 mb-6">
            Tech <span className="text-primary">Stack</span> & Skills
          </h2>
          <p className="text-gray text-xl max-w-3xl mx-auto">
            Modern technologies and proven methodologies I use to build robust,
            scalable applications that solve real business problems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((skillCategory, index) => {
            const Icon = categoryIcons[skillCategory.category] || Code2;
            return (
              <div
                key={skillCategory.category}
                className={`group relative bg-dark rounded-2xl p-8 border border-gray-dark/20 hover:border-primary/50 transition-all duration-500 ${
                  inView ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-dark-light rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary group-hover:text-dark transition-colors" />
                    </div>
                    <h3 className="font-bebas text-2xl uppercase text-white group-hover:text-primary transition-colors">
                      {skillCategory.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill) => (
                      <span
                        key={skill}
                        className="bg-dark-light text-gray px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-dark transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-primary/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Tech Marquee */}
        <div className="mt-20">
          <InfiniteMarquee speed={50}>
            <div className="font-bebas text-6xl md:text-8xl uppercase text-primary/10 whitespace-nowrap px-8">
              Python • FastAPI • Next.js • PostgreSQL • Redis • Kubernetes • Azure • Docker • TypeScript • SQLAlchemy • Prefect • dbt
            </div>
          </InfiniteMarquee>
        </div>
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100px);
          }
        }
      `}</style>
    </section>
  );
}
