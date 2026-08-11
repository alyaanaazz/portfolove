import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/experience-section";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Experience - ${profile.name}`,
  description: `Experience and roles held by ${profile.name}.`,
};

export default function ExperiencePage() {
  return (
    <div className="pt-10">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
          Experience
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-7xl">
          All experience.
        </h1>
      </header>
      <ExperienceSection showAll />
    </div>
  );
}

