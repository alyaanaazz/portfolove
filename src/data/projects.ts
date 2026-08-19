// src/data/projects.ts

import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "disaster-lens",
    title: "DisasterLens",
    description:
      "A real-time, decentralized disaster detection system built with YOLOv8 and edge computing to detect environmental anomalies while optimizing AI models for resource-constrained environments.",
    year: "2026",
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
      "Successfully pitched the project through the Find IT! UGM 2026 Hackathon and secured a Top 15 position.",
    gallery: ["/images/projects/disasterlens.png"],
    links: {
      live: "http://ristek.link/PandoraTop15-FindIT2026",
    },
  },

  {
    slug: "yomu",
    title: "Yomu",
    description:
      "Yomu is a gamified web-based learning platform designed to build information literacy habits by encouraging users to read and understand content thoroughly before answering quizzes.",
    year: "2026",
    date: "2026-06",
    role: "Full-Stack Developer",
    category: "Web Application",
    image: "/images/projects/yomu-1.png",
    technologies: [
      "Java",
      "Django",
      "JavaScript",
      "Web Development",
      "CI/CD",
    ],
    featured: true,
    problem:
      "In an era of information overload, people can easily consume and share information without fully understanding or verifying it, contributing to the spread of misinformation. This highlighted the need for a learning platform that could encourage users to read, process, and understand information more carefully rather than simply consume it.",
    process:
      "As a Full-Stack Engineer & Product Manager, with a focus on the Quiz and Gamification features, I translated the learning objectives into interactive product experiences. I designed and developed the quiz flow, including the mechanism that hides source content once a quiz begins to encourage information retention, while integrating achievements, daily missions, and competitive mechanics to motivate continued engagement. I also contributed to aligning these features with the broader product requirements and system modules.",
    solution:
      "We developed Yomu, a gamified web-based learning platform designed to build information literacy habits through structured reading and interactive quizzes. The platform combines a Literacy Engine, Quiz System, Achievements, Daily Missions, and competitive League and Clan systems to make critical information processing more engaging and habitual.",
    result:
      "Yomu transformed information literacy from a passive reading activity into an interactive and motivating learning experience, encouraging users to develop more thorough reading habits through gamification. Through this project, I strengthened my ability to bridge product strategy, user engagement, and full-stack development, particularly in designing features where technical implementation directly supports desired user behaviour.",
    gallery: ["/images/projects/yomu-1.png", "/images/projects/yomu.png"],
    links: {
      github: "https://github.com/adpro-2026-B19-project/yomu.git",
      live: "https://yomu.up.railway.app/",
    },
  },

  {
    slug: "askmo",
    title: "ASKMO",
    description:
      "ASKMO is a personalized sports platform that helps users discover and save their favorite courts and coaches, manage their profiles and transaction history, and receive personalized assistance through MOMO, an AI-powered chatbot specialized in sports recommendations and fitness guidance.",
    year: "2025",
    date: "2025-12",
    role: "Full-Stack Developer",
    category: "Mobile & Web Application",
    image: "/images/projects/ASKMO.mp4",
    technologies: [
      "Web Development",
      "Mobile Development",
      "Django",
      "Flutter",
      "Python",
      "CI/CD",
      "GitHub Actions",
      "Bitrise",
    ],
    featured: true,
    problem:
      "Finding suitable sports facilities and coaches can be fragmented across different platforms, making it difficult for users to discover options, save their preferences, and manage their sports activities in one place. This created an opportunity for a more personalized and convenient sports platform that could support users throughout their sports journey.",
    process:
      "As a Full-Stack Developer, I took ownership of the Wishlist and MOMO features, while also contributing to the Home, Profile, Chatbot, and Transaction History features. I developed and integrated these features into the platform, contributed to the Figma design, conducted field debugging and coaching, and supported the project through deployment. For MOMO, I worked on integrating the AI-powered chatbot experience to help users find sports facilities and coaches based on their preferences.",
    solution:
      "We developed ASKMO, a personalized sports platform that allows users to discover and save their favorite courts and coaches, manage their profiles and transaction history, and interact with MOMO, an AI-powered sports assistant. MOMO provides personalized recommendations based on factors such as sport preferences, location, availability, and budget, while also offering fitness and nutrition guidance.",
    result:
      "ASKMO brought multiple sports needs into a single personalized platform, combining discovery, personalization, transactions, and AI assistance in one experience. Through this project, I strengthened my ability to develop end-to-end full-stack features, integrate AI into user-facing products, and adapt technical solutions based on real-world testing and user needs.",
    gallery: ["/images/projects/ASKMO.mp4", "/images/projects/askmo-1.png"],
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
    year: "2026",
    date: "2026-02",
    role: "Fullstack Developer",
    category: "Web Application",
    image: "/images/projects/jejakair.png",
    technologies: [
      "Market & User Research",
      "Web Development",
      "Roadmapping",
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
    year: "2026",
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
    gallery: ["/images/projects/Blusukan.mp4", "/images/projects/blusukan-1.png"],
    links: {
      github:
        "https://github.com/pandoruy-pingin-menang-pls/blusukan-fe",
      live:
        "https://github.com/pandoruy-pingin-menang-pls/blusukan-fe/releases/tag/v1.0.0-build19",
    },
  },

  {
  slug: "triageai-er-predict",
  title: "TriageAI / ER-Predict",
  description:
    "An AI-powered healthcare concept designed to address emergency department overcrowding by connecting real-time patient severity assessment with predictive capacity management. The concept combines TriageAI, which prioritizes patients and predicts short-term deterioration risk, with ER-Predict, which forecasts patient arrivals and resource demand up to 24 hours ahead, creating a proactive approach to emergency care management.",
  year: "2026",
  date: "2026-06",
  role: "Researcher / Product & Concept Designer",
  category: "AI Healthcare / Research",
  image: "/images/projects/triageai.mp4",
  technologies: [
    "AI",
    "Natural Language Processing",
    "Machine Learning",
    "Temporal Fusion Transformer",
    "Product Design",
    "Healthcare Systems"
  ],
  featured: false,
  problem:
    "Emergency departments frequently experience overcrowding during health crises, seasonal outbreaks, and mass casualty events, while traditional triage remains heavily dependent on manual assessment and hospital resource planning tends to be reactive. This creates a risk of delayed care for high-acuity patients and inefficient allocation of beds, staff, and critical supplies.",
  process:
    "As a Researcher and Product & Concept Designer, I explored the intersection of emergency care, clinical AI, and predictive analytics to identify opportunities for a more proactive emergency department workflow. I researched existing triage and forecasting approaches, mapped the relationship between patient-level clinical risk and department-level capacity, and translated these insights into a two-module product concept. I contributed to defining the system architecture, AI workflow, safety mechanisms, data strategy, and evaluation metrics while ensuring that AI remained a decision-support tool with clinicians in the loop.",
  solution:
    "We proposed TriageAI / ER-Predict, an integrated AI system consisting of two complementary modules. TriageAI uses patient-reported symptoms, vital signs, and medical history to estimate urgency and short-term deterioration risk, while ER-Predict forecasts patient arrivals and downstream resource demand over a 24-hour horizon using historical trends, weather, calendar, and regional health data. The two modules are connected through a hospital dashboard to support both clinical prioritization and proactive capacity planning.",
  result:
    "The concept establishes a framework for shifting emergency department management from reactive response toward predictive and proactive decision-making. The proposed system targets improved triage accuracy, reduced waiting times for high-risk patients, and fewer severe resource shortages, while incorporating privacy-by-design and human-in-the-loop safety mechanisms. Through this project, I strengthened my ability to translate complex research and AI capabilities into a structured product concept that addresses a high-impact real-world problem.",
  gallery: ["/images/projects/triageai.png"],
  links: {
    live: "https://drive.google.com/file/d/1E_WtNcq8Mc0IirmwvW_BXKwG2llq1c4g/view?usp=sharing",
  },
},

  {
    slug: "pathback",
    title: "PathBack",
    description:
      "PathBack is a dual-ecosystem solution connecting caregivers and community helpers through a QR-enabled emergency bracelet, live GPS monitoring, critical alerts, ETA estimation, and location history.",
    year: "2026",
    date: "2026-06",
    role: "Designer & Researcher",
    category: "Web Application",
    image: "/images/projects/pathback-1.png",
    technologies: [
      "Web Development",
      "Product Management",
      "Product Requirements",
      "User Stories",
      "Roadmapping",
    ],
    featured: true,
    problem:
      "People with dementia who experience wandering can face serious safety risks, while caregivers often lack a fast and reliable way to locate and respond to them during emergencies. This highlighted the need for a solution that could connect patient identification, emergency assistance, and caregiver monitoring in one accessible ecosystem.",
    process:
      "As the Designer & Researcher, I conducted research to understand the needs of people with dementia, caregivers, and potential community helpers. I translated these insights into product requirements and user flows, then designed the UI/UX experience for both sides of the ecosystem, focusing on accessibility, clarity, and ease of use in high-stress situations.",
    solution:
      "We developed PathBack, a dual-ecosystem digital solution that connects caregivers with community helpers through a QR-enabled emergency bracelet. The solution provides quick access to essential patient information, emergency assistance, live GPS monitoring, critical alerts, and location history.",
    result:
      "The final design achieved a SUS score of 77.33 (Good / Grade C), with positive feedback on its ease of use and feature effectiveness. More importantly, the design serves as the foundation for the application solution our team is currently developing, translating research insights into a practical and user-centered safety system.",
    gallery: ["/images/projects/pathback.png", "/images/projects/pathback-1.png"],
    links: {
      github: "https://github.com/benedictasherinn/sister-protect",
      live: "https://sister-protect.vercel.app/",
    },
  },

  {
    slug: "portfolio",
    title: "Nisrina's Personal Portfolio",
    description:
      "A self-initiated personal portfolio designed and developed to showcase my journey across Product Management, Software Engineering, and UI/UX Design. Built as a reflection of my identity as a Product Engineer, the portfolio brings together selected projects, experiences, technical skills, and writing while demonstrating how I bridge user needs, product thinking, and technical execution. I designed and developed the platform end-to-end, from information architecture and visual design to implementation and deployment, creating a living portfolio that evolves alongside my skills and experiences.",
    year: "2026",
    date: "2026-08",
    role: "Web Developer",
    category: "Web Application",
    image: "/images/projects/portfolio.mp4",
    technologies: [
      "Web Development",
      "Next JS",
      "Typescript",
      "Tailwind CSS"
    ],
    featured: true,
    problem:
      "As a Computer Science student exploring product management, software engineering, data science and UI/UX, I wanted a way to present these disciplines as one coherent skill set rather than as separate experiences. A conventional portfolio focused only on projects or technical skills would not fully reflect how I approach problems across the product lifecycle.",
    process:
      "I designed and developed my personal portfolio as a self-initiated project, taking ownership of both the product and technical direction. I structured the portfolio around my identity as a Product Engineer, combining project case studies, technical skills, leadership experiences, and written reflections. I designed the interface and implemented the website using modern web technologies, while iterating on the content and information architecture to make my work easier to understand and navigate.",
    solution:
      "The result is a personal portfolio that brings together my work across Product Management, Development, and UI/UX, with dedicated sections for selected projects, experience, certifications, and writing. Rather than simply listing what I have done, the portfolio is designed to communicate how I think, build, and learn across different disciplines.",
    result:
      "The portfolio became a living representation of my growth, allowing me to continuously document new projects, technical capabilities, and experiences in one place. Through building it, I strengthened my ability to think about a product from both the builder's and user's perspective, while learning how thoughtful information architecture, visual design, and technical implementation can work together to communicate a personal story effectively.",
    gallery: ["/images/projects/portfolio.mp4"],
    links: {
      github: "https://github.com/alyaanaazz/portfolove",
      live: "https://nisrinaalya.site",
    },
  },

  {
    slug: "sispro",
    title: "SisPro",
    description:
      "SisPro (Sister Protect) is a mobile-first web platform designed to help women feel safer while travelling, especially at night. It combines safe-route recommendations, anonymous incident reporting, an SOS feature, and trip monitoring to provide users with faster and more accessible support when they feel unsafe.",
    year: "2026",
    date: "2026-08",
    role: "Product Manager",
    category: "Web Application",
    image: "/images/projects/sispro.png",
    technologies: [
      "Web Development",
      "Product Management",
      "Product Requirements",
      "User Stories",
      "Roadmapping",
    ],
    featured: true,
    problem:
      "Women often feel unsafe while travelling, particularly at night, yet they may not have access to a simple and reliable way to prevent risks, report incidents, or seek immediate assistance. This highlighted the need for a solution that could support women not only during emergencies, but throughout their entire journey.",
    process:
      "As the Product Manager, I translated this problem into clear product requirements by identifying key user pain points and defining how the platform could address them. I developed the PRD, user stories, application use cases, and risk & mitigation strategies, while also contributing to the GTM and market sizing strategy. Throughout development, I monitored the backend and frontend implementation to ensure that the technical execution remained aligned with the product requirements and user needs.",
    solution:
      "We developed SisPro (Sister Protect), a mobile-first web platform that integrates safe-route recommendations, anonymous incident reporting, SOS assistance, and trip monitoring into one solution. The platform is designed to provide preventive support before and during a journey while enabling users to access assistance quickly when they feel unsafe.",
    result:
      "SisPro transformed a broad concern around women's travel safety into a structured, user-centered digital solution that addresses prevention, reporting, and emergency response within a single platform. Through this project, I strengthened my ability to bridge user needs, product strategy, and technical execution, while learning how to turn a real-world social problem into a feasible product.",
    gallery: ["/images/projects/sispro.png", "/images/projects/sispro-1.png"],
    links: {
      github: "https://github.com/benedictasherinn/sister-protect",
      live: "https://sister-protect.vercel.app/",
    },
  },
];