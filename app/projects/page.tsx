"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Code2 } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import Card3D from "@/components/ui/Card3D";

const categories = ["All", "Featured", "Enterprise", "AI/ML", "Security", "Data Engineering"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.tags.includes(activeCategory));

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-dark-lighter overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8d626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
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
            <h1 className="font-bebas text-display uppercase mb-6">
              Project <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-gray max-w-3xl">
              Real-world enterprise solutions I've architected and built. Each project represents months of work,
              millions of data points processed, and real business value delivered.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-dark p-6 rounded-xl border border-gray-dark/20">
              <div className="font-bebas text-4xl text-primary mb-2">{PROJECTS.length}+</div>
              <div className="text-gray uppercase tracking-wider text-sm">Projects</div>
            </div>
            <div className="bg-dark p-6 rounded-xl border border-gray-dark/20">
              <div className="font-bebas text-4xl text-primary mb-2">5M+</div>
              <div className="text-gray uppercase tracking-wider text-sm">Records/Day</div>
            </div>
            <div className="bg-dark p-6 rounded-xl border border-gray-dark/20">
              <div className="font-bebas text-4xl text-primary mb-2">99.9%</div>
              <div className="text-gray uppercase tracking-wider text-sm">Uptime</div>
            </div>
            <div className="bg-dark p-6 rounded-xl border border-gray-dark/20">
              <div className="font-bebas text-4xl text-primary mb-2">10K+</div>
              <div className="text-gray uppercase tracking-wider text-sm">Requests/Min</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center mb-12">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-bebas text-lg uppercase tracking-wider px-6 py-3 rounded-full transition-all ${
                    activeCategory === category
                      ? "bg-primary text-dark shadow-lg shadow-primary/30"
                      : "bg-dark-light text-gray hover:text-primary border border-gray-dark/20 hover:border-primary/50"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-gray">
              <span className="font-bebas text-2xl text-primary">{filteredProjects.length}</span> Projects
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card3D>
                  <div className="group relative bg-dark-light rounded-2xl overflow-hidden border border-gray-dark/20 hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden bg-dark">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent" />

                      {/* Year Badge */}
                      <div className="absolute top-4 right-4 bg-primary text-dark font-bebas text-xl px-4 py-2 rounded-lg">
                        {project.year}
                      </div>

                      {/* Tags */}
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="bg-dark/80 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-primary/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="font-bebas text-3xl uppercase text-white group-hover:text-primary transition-colors mb-4">
                        {project.title}
                      </h3>

                      <p className="text-gray leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-dark px-3 py-1 rounded-full text-gray hover:text-primary transition-colors border border-gray-dark/20"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="text-xs bg-dark px-3 py-1 rounded-full text-primary">
                            +{project.technologies.length - 6}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 pt-4 border-t border-gray-dark/20">
                        <Link
                          href={`/projects/${project.id}`}
                          className="flex-1 flex items-center justify-center gap-2 bg-primary text-dark font-bebas text-lg uppercase tracking-wider px-6 py-3 rounded-lg hover:bg-primary-dark transition-all group/btn"
                        >
                          <Code2 className="w-4 h-4" />
                          <span>View Details</span>
                        </Link>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-dark flex items-center justify-center rounded-lg hover:bg-primary hover:text-dark transition-all"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-dark flex items-center justify-center rounded-lg hover:bg-primary hover:text-dark transition-all"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">=</div>
              <h3 className="font-bebas text-4xl uppercase text-gray mb-4">No Projects Found</h3>
              <p className="text-gray-dark">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
