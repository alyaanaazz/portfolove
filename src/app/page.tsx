import { AboutSection } from "@/components/sections/about-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { AwardsSection } from "@/components/sections/awards-section";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { TechStackSection } from "@/components/sections/tech-stack-section";
import { profile } from "@/data/profile";
import { getLatestMediumPosts } from "@/lib/medium";

export const revalidate = 3600;

export default async function Home() {
  const posts = await getLatestMediumPosts(process.env.MEDIUM_USERNAME || profile.mediumUsername, 3);

  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection />
      <ExperienceSection />
      <AwardsSection />
      <CertificationsSection />
      <BlogPreview posts={posts} />
      <ContactSection />
    </div>
  );
}
