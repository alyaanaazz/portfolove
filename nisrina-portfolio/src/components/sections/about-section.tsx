import { profile } from "@/data/profile";
import { SectionReveal } from "@/components/ui/section-reveal";
import { HeroCard } from "@/components/hero-card";

export function AboutSection() {
  return (
    <SectionReveal id="about" className="border-t border-black/10 pt-24 dark:border-white/10 md:pt-32">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-4xl">
            Designing with intention, building with curiosity.
          </h2>
        </div>
        <div className="space-y-8 text-base leading-8 text-zinc-700 dark:text-zinc-300 md:text-lg">
          <p>{profile.bio}</p>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-950 dark:text-white">
                Product
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {profile.designPhilosophy}
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-950 dark:text-white">
                Development
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                {profile.developmentPhilosophy}
              </p>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-3">
            {profile.currentInterests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-black/10 px-4 py-2 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}
