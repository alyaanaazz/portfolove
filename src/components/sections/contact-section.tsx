import Image from "next/image";
import { profile } from "@/data/profile";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ArrowUpRight, GitBranch, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <SectionReveal id="contact" className="mt-16 border-t border-black/10 pt-12 dark:border-white/10 md:mt-20 md:pt-16">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-6xl">
            Let&apos;s build something thoughtful.
          </h2>
        </div>
        <div className="space-y-6">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 sm:w-auto"
          >
            <Mail size={18} aria-hidden="true" />
            {profile.email}
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white/50 px-6 py-4 text-lg font-semibold text-zinc-500 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-white/20 dark:hover:text-white sm:w-auto"
          >
            Reach out
            <Image src="/images/linkedin.png" alt="" width={22} height={22} className="rounded-[4px] object-contain" aria-hidden="true" />
          </a>
          <a
            href={profile.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Read on Medium <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a
            href={profile.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-base font-medium tracking-[0.08em] text-zinc-700 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            <GitBranch size={20} aria-hidden="true" />
            Source code
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
