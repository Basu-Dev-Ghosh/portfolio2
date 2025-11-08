"use client";

import { Fragment } from "react";
import Link from "next/link";
import { X, Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  twitter: Twitter,
  instagram: Instagram,
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Menu Content */}
      <div className="relative h-full flex flex-col bg-dark border-r border-gray-dark/20 w-4/5 max-w-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-dark/20">
          <Link
            href="/"
            className="font-bebas text-2xl text-primary"
            onClick={onClose}
          >
            BASUDEV<span className="text-white">.DEV</span>
          </Link>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-gray hover:text-primary transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block font-bebas text-2xl uppercase tracking-wider text-gray hover:text-primary transition-colors py-3"
                  onClick={onClose}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="mt-8">
            <Link
              href="/contact"
              className="block w-full bg-primary text-dark font-bebas text-xl uppercase tracking-wider px-6 py-4 rounded-full text-center hover:bg-primary-dark transition-colors"
              onClick={onClose}
            >
              Get in Touch
            </Link>
          </div>
        </nav>

        {/* Social Links */}
        <div className="p-6 border-t border-gray-dark/20">
          <p className="font-bebas text-sm uppercase tracking-wider text-gray mb-4">
            Connect With Me
          </p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              const Icon = iconMap[social.icon];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-light rounded-xl flex items-center justify-center hover:bg-primary hover:text-dark transition-all"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}