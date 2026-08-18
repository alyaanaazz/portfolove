// src/data/certifications.ts

export type Certification = {
  id: string;
  type: "license" | "certification";
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string | null;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
  category?: string;
  skills?: string[];
  description?: string;
  featured?: boolean;
};

export const certifications: Certification[] = [
  {
    id: "ai-agent-for-developers",
    type: "certification",
    name: "AI Productivity and AI API Integration for Developers",
    issuer: "Hacktiv8 Indonesia",
    issueDate: "August 2026",
    credentialId: "AI Productivity and AI API Integration for Developers",
    credentialUrl:
      "https://students.hacktiv8.com/certificates/0039dde8-8c89-4cf7-8ae1-5ae73903a7d2",
    logo: "/images/certifications/hacktiv8.png",
    category: " AI Engineer",
    featured: true,
  },

  {
    id: "bytesfest-2026-finalist",
    type: "certification",
    name: "Finalist Hackathon BYTESFEST 2026 by HMP MIKROPTIK UNS",
    issuer: "Universitas Sebelas Maret",
    issueDate: "July 2026",
    credentialId: "20260726060490151",
    credentialUrl:
      "https://kegiatan.fkip.uns.ac.id/verify/20260726060490151",
    logo: "/images/certifications/uns.png",
    category: "Hackathon",
    featured: true,
  },

  {
    id: "hacktiv8-digital-marketing",
    type: "certification",
    name: "Building a Profitable Business with Digital Marketing",
    issuer: "Hacktiv8 Indonesia",
    issueDate: "July 2026",
    credentialId: "UC-edc75a6f-f8c8-468d-9d1c-5a912148e25b",
    credentialUrl:
      "https://ude.my/UC-edc75a6f-f8c8-468d-9d1c-5a912148e25b",
    logo: "/images/certifications/hacktiv8.png",
    category: "Digital Marketing",
    skills: [
      "Digital Marketing",
      "Marketing Strategy",
    ],
    featured: false,
  },

  {
    id: "hacktiv8-react-native",
    type: "certification",
    name: "Function and Usage of React Native",
    issuer: "Hacktiv8 Indonesia",
    issueDate: "July 2026",
    credentialId: "UC-112ca02e-7d5f-43e4-b46a-b8f4490522bc",
    credentialUrl:
      "https://ude.my/UC-112ca02e-7d5f-43e4-b46a-b8f4490522bc",
    logo: "/images/certifications/hacktiv8.png",
    category: "Mobile Development",
    skills: [
      "React Native",
      "Front-end Engineering",
    ],
    featured: false,
  },

  {
    id: "hacktiv8-machine-learning-python",
    type: "certification",
    name: "Learning Machine Learning using Python",
    issuer: "Hacktiv8 Indonesia",
    issueDate: "June 2026",
    credentialId: "UC-a5961e62-7951-4c18-9fa6-94532b80a878",
    credentialUrl:
      "https://ude.my/UC-a5961e62-7951-4c18-9fa6-94532b80a878",
    logo: "/images/certifications/hacktiv8.png",
    category: "Machine Learning",
    skills: [
      "Machine Learning",
      "Python",
    ],
    featured: false,
  },

  {
    id: "ibm-ai-agent",
    type: "certification",
    name: "Intelligent by Design: Build an AI Agent",
    issuer: "IBM",
    issueDate: "July 2026",
    credentialId: "ALM-COURSE_3946359",
    credentialUrl: "https://www.credly.com/go/dcVUfWxR",
    logo: "/images/certifications/ibm.png",
    category: "Artificial Intelligence",
    skills: [
      "Artificial Intelligence (AI)",
      "AI Agents",
    ],
    featured: true,
  },

  {
    id: "hacktiv8-team-staff-management",
    type: "certification",
    name: "Team and Staff Management",
    issuer: "Hacktiv8 Indonesia",
    issueDate: "July 2026",
    credentialId: "UC-209e8352-ee81-41a9-87d1-39a6c7a67be6",
    credentialUrl:
      "https://ude.my/UC-209e8352-ee81-41a9-87d1-39a6c7a67be6",
    logo: "/images/certifications/hacktiv8.png",
    category: "Leadership & Management",
    skills: [
      "Project Management",
      "Team Management",
    ],
    featured: false,
  },

  {
    id: "dicoding-basic-javascript",
    type: "certification",
    name: "Basic JavaScript Programming",
    issuer: "Dicoding Indonesia",
    issueDate: "May 2026",
    expirationDate: "May 2029",
    credentialUrl:
      "https://www.dicoding.com/certificates/N9ZON9K76XG5",
    logo: "/images/certifications/dicoding.png",
    category: "Programming",
    skills: [
      "JavaScript",
    ],
    featured: false,
  },

  {
    id: "dicoding-basic-web-development",
    type: "certification",
    name: "Basic Web Development",
    issuer: "Dicoding Indonesia",
    issueDate: "March 2026",
    expirationDate: "March 2029",
    credentialUrl:
      "https://www.dicoding.com/certificates/53XE1DO0KZRN",
    logo: "/images/certifications/dicoding.png",
    category: "Web Development",
    skills: [
      "Web Development",
    ],
    featured: false,
  },

  {
    id: "dicoding-financial-literacy",
    type: "certification",
    name: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    issueDate: "March 2026",
    expirationDate: "March 2029",
    credentialUrl:
      "https://www.dicoding.com/certificates/07Z678NEJPQR",
    logo: "/images/certifications/dicoding.png",
    category: "Financial Literacy",
    skills: [
      "Financial Literacy",
      "Financial Analysis",
    ],
    featured: false,
  },

  {
    id: "revou-software-engineer",
    type: "certification",
    name: "Software Engineer Coding Camp",
    issuer: "RevoU",
    issueDate: "August 2025",
    credentialId: "CCSE280725-01-1-00077",
    credentialUrl:
      "https://drive.google.com/file/d/1CU0-fz-jQXFT5UxlHFGVg9xccHrLCn9c/view?usp=drivesdk",
    logo: "/images/certifications/revou.png",
    category: "Software Engineering",
    skills: [
      "Programming",
      "Software Engineering Practices",
    ],
    featured: true,
  },

  {
    id: "ukbi-2022",
    type: "license",
    name: "Uji Kemahiran Berbahasa Indonesia (UKBI)",
    issuer:
      "Kementerian Pendidikan dan Kebudayaan (Ministry of Education and Culture Republic of Indonesia)",
    issueDate: "March 2022",
    credentialId: "SD-BB-0129784",
    logo: "/images/certifications/kemendikbud.png",
    category: "Language",
    skills: [
      "Bahasa Indonesia",
    ],
    featured: false,
  },
];