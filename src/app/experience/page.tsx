import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience-section";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Experience - ${profile.name}`,
  description: `Experience and roles held by ${profile.name}.`,
};

export default function ExperiencePage() {
  return (
    <div>
      <ExperienceSection showAll />
    </div>
  );
}

