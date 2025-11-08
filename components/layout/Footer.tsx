"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter, Heart, Zap, Instagram } from "lucide-react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { useInView } from "react-intersection-observer";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  instagram: Instagram,
};

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <footer ref={ref} className="bg-dark-lighter border-t border-primary/10 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(184, 214, 38, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container-custom py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <Link
              href="/"
              className="group font-bebas text-4xl transition-colors inline-block mb-4 relative"
            >
              <motion.span
                className="text-primary group-hover:text-primary-dark transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                BASUDEV
              </motion.span>
              <span className="text-white">.DEV</span>

              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "60%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            <p className="text-gray leading-relaxed max-w-md mb-6">
              {SITE_CONFIG.description}
            </p>

            <motion.div
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-semibold">Available for Projects</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-bebas text-xl uppercase tracking-wider mb-6 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="group text-gray hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-gray group-hover:bg-primary"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bebas text-xl uppercase tracking-wider mb-6 text-primary">
              Connect
            </h3>

            <div className="flex gap-3 mb-6">
              {SOCIAL_LINKS.map((social, index) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap];
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-dark flex items-center justify-center rounded-xl hover:bg-primary hover:text-dark transition-all group border border-gray-dark/20 hover:border-primary"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            <motion.p
              className="text-gray text-sm"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                {SITE_CONFIG.email}
              </a>
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-dark/20 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray text-sm text-center md:text-left">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>

          <motion.p
            className="text-gray text-sm flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-primary fill-primary" />
            </motion.span>{" "}
            using Next.js & TypeScript
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
