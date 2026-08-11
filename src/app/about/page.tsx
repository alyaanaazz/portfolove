import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `About - ${profile.name}`,
  description: `About ${profile.name}, product and developer.`,
};

export default function AboutPage() {
  return (
    <div className="pt-10">
      <AboutSection />
      <ContactSection />
    </div>
  );
}
