"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import Button from "@/components/ui/Button";
import TiltCard from "@/components/ui/TiltCard";
import ParallaxScroll from "@/components/effects/ParallaxScroll";

const categories = ["All", "Featured", "Enterprise", "AI/ML", "Security"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.tags.includes(activeCategory));

  return (
    <section id="projects" className="section-padding bg-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8d626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div ref={ref} className={`text-center mb-16 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <span className="font-bebas text-primary text-lg uppercase tracking-wider">
            My Work
          </span>
          <h2 className="font-bebas text-display uppercase mt-4 mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray text-xl max-w-3xl mx-auto">
            Real-world solutions I've architected and built for enterprise clients, handling millions
            of requests and processing massive datasets.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-16 ${inView ? "animate-slide-up delay-200" : "opacity-0"}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-bebas text-lg uppercase tracking-wider px-6 py-3 rounded-full transition-all ${
                activeCategory === category
                  ? "bg-primary text-dark"
                  : "bg-dark-light text-gray hover:text-primary border border-gray-dark/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link href="/projects">
            <Button variant="outline" size="lg">
              View All Projects <ArrowRight className="inline ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  inView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <TiltCard className="h-full">
        <div
          className="group relative bg-dark-light rounded-2xl overflow-hidden border border-gray-dark/20 hover:border-primary/50 transition-all duration-500 h-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-dark">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          className={`object-cover grayscale transition-all duration-700 ${
            isHovered ? "grayscale-0 scale-110" : ""
          }`}
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-60"
          }`}
        />

        {/* Tags */}
        <div className="absolute top-4 left-4 flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary text-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Year */}
        <div className="absolute bottom-4 right-4">
          <span className="font-bebas text-6xl text-primary/30">{project.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        <h3 className="font-bebas text-3xl uppercase text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-gray leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="text-xs bg-dark px-3 py-1 rounded-full text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="text-xs bg-dark px-3 py-1 rounded-full text-gray">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-4">
          <Link
            href={`/projects/${project.id}`}
            className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold"
          >
            <ArrowRight className="w-4 h-4" />
            <span>View Details</span>
          </Link>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray hover:text-primary transition-colors font-semibold"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray hover:text-primary transition-colors font-semibold"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
        </div>
      </TiltCard>
    </motion.div>
  );
}