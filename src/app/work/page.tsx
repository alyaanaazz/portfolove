import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Work - ${profile.name}`,
  description: `Masterpieces by ${profile.name}.`,
};

export default function WorkPage() {
  return (
    <ProjectsSection showAll />
  );
}
