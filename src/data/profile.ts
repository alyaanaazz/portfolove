import type { Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Nisrina Alya Nabilah",
  role: "Product & Developer",
  tagline: "A master of many arts, a prisoner of none.",
  bio: "I am a Third Year Computer Science student at Universitas Indonesia, bridging the gap between product management, engineering, and design. I design with intention and build with curiosity, focusing on creating systems that are as beautiful as they are resilient.",
  designPhilosophy: "I am drawn to product work that turns unclear needs into useful decisions, balancing user context, business goals, and feasible execution.",
  developmentPhilosophy: "I build with maintainability in mind: clear data, focused components, and systems that are easy to extend.",
  currentInterests: ["Product systems", "Human-centered AI", "Editorial interfaces", "Developer tooling"],
  affiliations: [
    {
      label: "Universitas Indonesia",
      href: "https://www.ui.ac.id",
      logo: "/images/experience/ui.png",
    },
    {
      label: "BEM Fasilkom UI",
      href: "https://bem.cs.ui.ac.id/about",
      logo: "/images/experience/bem.png",
    },
    {
      label: "BETIS Fasilkom UI",
      href: "https://www.instagram.com/betisfasilkomui",
      logo: "/images/experience/betis.png",
    },
    {
      label: "COMPFEST",
      href: "https://compfest.id",
      logo: "/images/experience/cf18.png",
    },
  ],
  location: "Jakarta, Indonesia",
  timezone: "Asia/Jakarta",
  email: "nisrinaalyanabilah@gmail.com",
  mediumUsername: "nisrina.alya",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://nisrinaalya.site",
  sourceCodeUrl: "https://github.com/alyaanaazz/portfolove",
  profileImage: "/images/profile.png",
  socials: {
    github: "https://github.com/alyaanaazz",
    linkedin: "https://www.linkedin.com/in/nisrina-alya",
    medium: "https://medium.com/@nisrina.alya",
    email: "mailto:nisrinaalyanabilah@gmail.com",
  },
  socialLinks: [
    { label: "GitHub", href: "https://github.com/alyaanaazz", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nisrina-alya", icon: "linkedin" },
    { label: "Medium", href: "https://medium.com/@nisrina.alya", icon: "medium" },
    { label: "Email", href: "mailto:nisrinaalyanabilah@gmail.com", icon: "mail" },
  ],
  cvPath: "/cv/nisrina-alya-nabilah-cv.pdf",
};
