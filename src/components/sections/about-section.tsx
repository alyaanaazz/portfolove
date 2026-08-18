import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionReveal } from "@/components/ui/section-reveal";
import { AboutIdCard } from "@/components/ui/about-id-card";

export function AboutSection() {
  return (
    <SectionReveal id="about" className="mt-16 border-t border-black/10 pt-12 dark:border-white/10 md:mt-20 md:pt-16">
      <div className="grid gap-10 md:grid-cols-[0.8fr_1.4fr] md:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
            About
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-4xl">
            Designing with intention, building with curiosity.
          </h2>
          <AboutIdCard />
        </div>
        <div className="space-y-8 text-base leading-8 text-zinc-700 dark:text-zinc-300 md:text-lg">
          <p>
            I am a Third Year Computer Science student at{" "}
            <a
              href={profile.affiliations[0].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-zinc-950 underline decoration-black/20 underline-offset-4 transition hover:decoration-maroon-800 dark:text-white dark:decoration-white/20"
            >
              {profile.affiliations[0].label}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-black/10 bg-white/70 align-middle dark:border-white/10 dark:bg-white/10">
                <Image src={profile.affiliations[0].logo} alt="" width={16} height={16} className="h-4 w-4 object-contain" aria-hidden="true" />
              </span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            , bridging the gap between product management, engineering, and design. I design with intention and build with curiosity, focusing on creating systems that are as beautiful as they are resilient.
          </p>
          <p>
            Currently expanding impact as the Manager of Academy at{" "}
            <a
              href={profile.affiliations[3].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-zinc-950 underline decoration-black/20 underline-offset-4 transition hover:decoration-maroon-800 dark:text-white dark:decoration-white/20"
            >
              {profile.affiliations[3].label}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-black/10 bg-white/70 align-middle dark:border-white/10 dark:bg-white/10">
                <Image src={profile.affiliations[3].logo} alt="" width={16} height={16} className="h-4 w-4 object-contain" aria-hidden="true" />
              </span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>{" "}
            and Project Manager at{" "}
            <a
              href={profile.affiliations[1].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-zinc-950 underline decoration-black/20 underline-offset-4 transition hover:decoration-maroon-800 dark:text-white dark:decoration-white/20"
            >
              {profile.affiliations[1].label}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-black/10 bg-white/70 align-middle dark:border-white/10 dark:bg-white/10">
                <Image src={profile.affiliations[1].logo} alt="" width={16} height={16} className="h-4 w-4 object-contain" aria-hidden="true" />
              </span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>{" "}
            2026, combining technical foundation with strong organizational and leadership skills. Experienced in managing educational programs such as{" "}
            <a
              href={profile.affiliations[2].href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-zinc-950 underline decoration-black/20 underline-offset-4 transition hover:decoration-maroon-800 dark:text-white dark:decoration-white/20"
            >
              {profile.affiliations[2].label}
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-black/10 bg-white/70 align-middle dark:border-white/10 dark:bg-white/10">
                <Image src={profile.affiliations[2].logo} alt="" width={16} height={16} className="h-4 w-4 object-contain" aria-hidden="true" />
              </span>
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
            , fostering collaborative team environments, and driving impactful initiatives.
          </p>
          <p>
            Always eager to explore emerging technologies, bridge technical gaps, and collaborate with driven professionals to create meaningful solutions.
          </p>
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
