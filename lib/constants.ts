import { SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Basudev Ghosh",
  title: "Full Stack Developer",
  location: "India",
  email: "basu1735@gmail.com",
  phone: "+91 6295610296",
  tagline: "Building intelligent solutions with AI & clean code",
  description:
    "Full-stack developer specializing in Python, AI/ML, RAG systems, ETL pipelines, Data Engineering, Next.js, and chatbot development. Passionate about building scalable, intelligent applications.",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/basudev-ghosh/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/Basu-Dev-Ghosh",
    icon: "github",
  },
  {
    name: "Email",
    url: "mailto:basu1735@gmail.com",
    icon: "mail",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/basudev___ghosh?igshid=MmVlMjlkMTBhMg==",
    icon: "instagram",
  },
];

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];
