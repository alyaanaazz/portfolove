import { Download, Eye } from "lucide-react";
import { HeroCard } from "@/components/hero-card";
import { TypingStatement } from "@/components/ui/typing-text";
import { profile } from "@/data/profile";

export function HeroSection() {
  const positioningHeadline =
    "Thriving across the full product spectrum, adaptable to any challenge.";
  const positioningBody =
    "A Product Engineer who speaks both human and code. Bridging the gap between user empathy and technical resilience. The focus isn't just on building elegant interfaces, but engineering scalable products that solve real-world problems.";

  return (
    <section id="home" className="grid min-h-[calc(100svh-8rem)] grid-cols-1 items-center gap-12 pb-8 md:grid-cols-[1.05fr_0.95fr]">
      <div className="space-y-7">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
          Product / Developer
        </p>
        <div className="space-y-5">
          <h1 className="max-w-3xl text-5xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-7xl lg:text-8xl">
            Hi, I&apos;m Nisrina.
          </h1>
          <TypingStatement
            headline={positioningHeadline}
            body={positioningBody}
            headlineClassName="max-w-xl text-xl leading-8 text-zinc-700 dark:text-zinc-300 md:text-2xl md:leading-10"
            bodyClassName="max-w-xl leading-7 text-zinc-600 dark:text-zinc-400"
          />
        </div>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href={profile.cvPath}
            download
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            <Download size={18} aria-hidden="true" />
            Download CV
          </a>
          <a
            href={profile.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:border-black/20 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/20"
          >
            <Eye size={18} aria-hidden="true" />
            View CV
          </a>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <HeroCard />
      </div>
    </section>
  );
}
