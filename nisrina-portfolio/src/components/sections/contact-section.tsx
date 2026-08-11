import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/social-icon";
import { SectionReveal } from "@/components/ui/section-reveal";
import { ArrowUpRight, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <SectionReveal id="contact" className="border-t border-black/10 pt-24 dark:border-white/10 md:pt-32">
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
          <div className="flex gap-3">
            {profile.socialLinks.map((link) => (
              <SocialIcon key={link.label} link={link} />
            ))}
          </div>
          <a
            href={profile.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
          >
            Read on Medium <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}
