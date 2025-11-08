export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  year: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
