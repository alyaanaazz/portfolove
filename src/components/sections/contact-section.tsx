import Image from "next/image";
import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/social-icon";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ArrowUpRight, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <SectionReveal id="contact" className="mt-16 border-t border-black/10 pb-8 pt-12 dark:border-white/10 md:mt-20 md:pb-10 md:pt-16">
      <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
            Contact
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-6xl">
            Let&apos;s build something thoughtful.
          </h2>
        </div>
        <div className="flex w-full max-w-sm flex-col items-stretch gap-4 md:justify-self-end">
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-black/10 bg-white/60 px-6 py-4 text-lg font-semibold text-zinc-600 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/[0.08] dark:hover:text-white"
          >
            Reach out
            <Image src="/images/linkedin.png" alt="" width={22} height={22} className="rounded-[4px] object-contain" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-4 text-sm font-semibold text-zinc-600 shadow-sm transition hover:-translate-y-0.5 hover:border-black/20 hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-white/20 dark:hover:bg-white/[0.08] dark:hover:text-white"
          >
            <Mail size={18} aria-hidden="true" />
            <span className="break-all">{profile.email}</span>
          </a>
          <div className="flex justify-center gap-3 pt-2">
            {profile.socialLinks.map((link) => (
              <SocialIcon key={link.label} link={link} />
            ))}
          </div>
          <a
            href={profile.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Read on Medium <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
