import type { Metadata } from "next";
import { ProjectsSection } from "@/components/sections/projects-section";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Work - ${profile.name}`,
  description: `Selected projects by ${profile.name}.`,
};

export default function WorkPage() {
  return (
    <div className="pt-10">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
          Work
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-7xl">
          Selected work.
        </h1>
      </header>
      <ProjectsSection showAll />
    </div>
  );
}
