// src/data/projects.ts

import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "disaster-lens",
    title: "DisasterLens",
    description:
      "A real-time, decentralized disaster detection system built with YOLOv8 and edge computing to detect environmental anomalies while optimizing AI models for resource-constrained environments.",
    year: "2025",
    date: "2026-04",
    role: "Core Engineer & Researcher",
    category: "AI & Computer Vision",
    image: "/images/projects/disasterlens.png",
    technologies: [
      "Python",
      "YOLOv8",
      "Edge AI",
      "Computer Vision",
      "Machine Learning",
    ],
    featured: true,
    problem:
      "Disaster detection systems often depend on centralized infrastructure and computationally expensive models, creating challenges for real-time detection in resource-constrained environments.",
    process:
      "Conceptualized and developed a decentralized disaster detection approach using computer vision and edge computing, focusing on real-time environmental anomaly detection and model optimization.",
    solution:
      "Built a disaster detection system utilizing YOLOv8 and edge computing to enable real-time detection while optimizing the model for constrained computational environments.",
    result:
      "Successfully pitched the project through the Find IT! UGM 2025 Hackathon and secured a Top 15 position.",
    gallery: ["/images/projects/disasterlens.png"],
    links: {
      live: "http://ristek.link/PandoraTop15-FindIT2026",
    },
  },

  {
    slug: "yomu",
    title: "Yomu",
    description:
      "A web-based reading application built with a focus on robust architecture, responsive interfaces, and reliable software delivery.",
    year: "2026",
    date: "2026-06",
    role: "Full-Stack Developer",
    category: "Web Application",
    image: "/images/projects/yomu.png",
    technologies: [
      "Java",
      "Django",
      "JavaScript",
      "Web Development",
      "CI/CD",
    ],
    featured: true,
    problem:
      "The project required a reliable web application architecture capable of supporting a functional and responsive reading experience.",
    process:
      "Contributed to the full-stack development process by designing robust application architecture and implementing responsive user interfaces while maintaining code quality and functional stability.",
    solution:
      "Built and integrated web application functionality with a focus on responsive UI implementation, architectural reliability, and high-quality code delivery.",
    result:
      "Delivered a functional web application with a production deployment on Railway.",
    gallery: ["/images/projects/yomu.png"],
    links: {
      github: "https://github.com/adpro-2026-B19-project/yomu.git",
      live: "https://yomu.up.railway.app/",
    },
  },

  {
    slug: "askmo",
    title: "ASKMO",
    description:
      "A cross-platform application ecosystem consisting of a Django-based web application and Flutter mobile application, designed with synchronized data and consistent user experiences across platforms.",
    year: "2025",
    date: "2025-12",
    role: "Full-Stack Developer",
    category: "Mobile & Web Application",
    image: "/images/projects/ASKMO.mp4",
    technologies: [
      "Django",
      "Flutter",
      "Python",
      "CI/CD",
      "GitHub Actions",
      "Bitrise",
    ],
    featured: true,
    problem:
      "The project required a coordinated web and mobile application ecosystem with consistent data synchronization and cross-platform behavior.",
    process:
      "Developed both web and mobile components, worked through state management and UI implementation challenges, and configured automated release workflows using Bitrise and GitHub Actions.",
    solution:
      "Built a Django web application alongside a Flutter mobile application while establishing CI/CD pipelines and addressing complex front-end and state-management issues.",
    result:
      "Delivered a synchronized web and mobile application ecosystem with automated release workflows.",
    gallery: ["/images/projects/ASKMO.mp4"],
    links: {
      github: "https://github.com/pbp-kelompok-c04/askmo",
      live: "https://github.com/pbp-kelompok-c04/askmo-mobile",
    },
  },

  {
    slug: "jejakair",
    title: "JejakAir",
    description:
      "Application research projects focused on creating intuitive and accessible digital experiences through user research and Human-Computer Interaction principles.",
    year: "2025",
    date: "2025-11",
    role: "Application Researcher",
    category: "UX Research",
    image: "/images/projects/jejakair.png",
    technologies: [
      "UX Research",
      "Human-Computer Interaction",
      "User-Centered Design",
      "Gestalt Theory",
      "Miller's Law",
    ],
    featured: false,
    problem:
      "The applications required intuitive interaction flows that could reduce cognitive load while remaining accessible and understandable to users.",
    process:
      "Conducted user research and applied Human-Computer Interaction principles including User-Centered Design, Gestalt theory, and Miller's Law. Evaluated cognitive load and system flow throughout the conceptualization process.",
    solution:
      "Developed application concepts and mockups based on user-centered research and established HCI principles to improve usability and accessibility.",
    result:
      "Produced research-driven application concepts with a focus on intuitive interaction, accessibility, and cognitive load reduction.",
    gallery: ["/images/projects/jejakair.png"],
    links: {
      live: "http://ristek.link/DeckJejakAir",
      github: "https://github.com/pandora-hackathon/jejak-air",
    },
  },

  {
    slug: "blusukan",
    title: "Blusukan",
    description:
      "A mobile application designed for traditional merchants and platform administrators, combining structured product planning, user flows, and hackathon-driven technical constraints.",
    year: "2025",
    date: "2026-07",
    role: "Product & Full-Stack Developer",
    category: "Mobile Application",
    image: "/images/projects/Blusukan.mp4",
    technologies: [
      "Mobile Development",
      "Product Management",
      "Product Requirements",
      "User Stories",
      "Roadmapping",
    ],
    featured: false,
    problem:
      "The project required a mobile product that could address the needs of traditional merchants while also supporting platform administrators within a constrained hackathon environment.",
    process:
      "Defined the Product Requirements Document, mapped user stories and core features, designed user flows for different user groups, and developed phased product roadmaps aligned with business and technical goals.",
    solution:
      "Structured the product around clearly defined user requirements, comprehensive positioning strategies, phased roadmaps, and the implementation of constraints introduced by the hackathon committee.",
    result:
      "Delivered a functional mobile application release as part of the hackathon project.",
    gallery: ["/images/projects/Blusukan.mp4"],
    links: {
      github:
        "https://github.com/pandoruy-pingin-menang-pls/blusukan-fe",
      live:
        "https://github.com/pandoruy-pingin-menang-pls/blusukan-fe/releases/tag/v1.0.0-build19",
    },
  },
];