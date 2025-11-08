"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Calendar, Users, TrendingUp } from "lucide-react";
import { PROJECTS } from "@/lib/data";

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = PROJECTS.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-dark-lighter overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8d626' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container-custom relative z-10">
          <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bebas text-lg uppercase tracking-wider">Back to Projects</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-primary text-dark text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-bebas text-display uppercase mb-6">
              {project.title}
            </h1>

            <p className="text-2xl text-gray max-w-4xl mb-8">
              {project.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-primary" />
                <div>
                  <div className="text-gray text-sm uppercase tracking-wider">Year</div>
                  <div className="font-bebas text-xl text-white">{project.year}</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-dark font-bebas text-xl uppercase tracking-wider px-8 py-4 rounded-full hover:bg-primary-dark transition-all hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary font-bebas text-xl uppercase tracking-wider px-8 py-4 rounded-full hover:bg-primary hover:text-dark transition-all"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video rounded-3xl overflow-hidden border-2 border-gray-dark/20"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="section-padding bg-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="font-bebas text-4xl uppercase text-primary mb-6">Project Overview</h2>
                <div className="prose prose-invert prose-lg max-w-none">
                  <p className="text-gray leading-relaxed whitespace-pre-line">
                    {project.longDescription}
                  </p>
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h2 className="font-bebas text-4xl uppercase text-primary mb-6">Technology Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {project.technologies.map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.03 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="bg-dark-light p-4 rounded-xl border border-gray-dark/20 hover:border-primary/50 transition-all text-center"
                    >
                      <span className="text-white font-semibold">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-dark-light p-8 rounded-2xl border border-gray-dark/20 sticky top-8"
              >
                <h3 className="font-bebas text-2xl uppercase text-white mb-6">Project Highlights</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-gray text-sm uppercase tracking-wider mb-1">Impact</div>
                      <div className="text-white font-semibold">High Performance</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-gray text-sm uppercase tracking-wider mb-1">Type</div>
                      <div className="text-white font-semibold">Enterprise</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-dark/20">
                  <div className="text-gray text-sm uppercase tracking-wider mb-3">Categories</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-dark px-3 py-1 rounded-full text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary rounded-3xl p-12 text-center"
          >
            <h2 className="font-bebas text-display uppercase text-dark mb-6">
              Interested in a Similar Project?
            </h2>
            <p className="text-xl text-dark/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help you build something equally impressive for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-dark text-primary font-bebas text-xl uppercase tracking-wider px-10 py-5 rounded-full hover:bg-dark/90 transition-all hover:scale-105"
              >
                <span>Get in Touch</span>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-dark text-dark font-bebas text-xl uppercase tracking-wider px-10 py-5 rounded-full hover:bg-dark hover:text-primary transition-all"
              >
                <span>More Projects</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
