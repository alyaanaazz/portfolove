import type { LucideIcon } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "medium" | "mail";
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  designPhilosophy: string;
  developmentPhilosophy: string;
  currentInterests: string[];
  affiliations: {
    label: string;
    href: string;
    logo: string;
  }[];
  location: string;
  timezone: string;
  email: string;
  mediumUsername: string;
  cvPath: string;
  profileImage: string;
  idCardImage?: string;
  siteUrl: string;
  sourceCodeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    medium: string;
    email: string;
  };
  socialLinks: SocialLink[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  year: string;
  date?: string;
  role: string;
  category: string;
  image: string;
  technologies: string[];
  featured: boolean;
  problem: string;
  process: string;
  solution: string;
  result: string;
  gallery: string[];
  links: {
    live?: string;
    github?: string;
    medium?: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  logo?: string;
  gallery?: string[];
  achievements: string[];
  technologies: string[];
};

export type TechItem = {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Language" | "Framework" | "Mobile" | "Environment";
  icon: string;
  url?: string;
  color?: string;
};

export type TechMarqueeRow = {
  direction: "left" | "right";
  duration: number;
  offset: string;
};

export type MediumPost = {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  thumbnail: string | null;
  excerpt: string;
  readingTime: string;
  author: string;
};

export type IconMap = Record<string, LucideIcon>;
