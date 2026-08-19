"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images } from "lucide-react";
import { useState } from "react";

import { SectionReveal } from "@/components/ui/section-reveal";
import { MediaGalleryModal } from "@/components/ui/media-gallery-modal";
import { experience } from "@/data/experience";


export function ExperienceSection({ showAll = false }: { showAll?: boolean }) {
  const displayed = showAll ? experience : experience.slice(0, 3);
  const sectionClassName = showAll
    ? "pt-10"
    : "mt-16 border-t border-black/10 pt-12 dark:border-white/10 md:mt-20 md:pt-16";
  const headingClassName = showAll
    ? "mt-4 text-5xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-7xl"
    : "mt-4 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-4xl";
  const [activeGallery, setActiveGallery] = useState<{
    title: string;
    media: string[];
  } | null>(null);

  return (
    <SectionReveal id="experience" className={sectionClassName}>
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
            Experience
          </p>
          <h2 className={headingClassName}>
            Work shaped through teams, products, and programs.
          </h2>
        </div>
        {!showAll && (
          <Link href="/experience" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
            See all experience <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
      <div className="space-y-5">
        {displayed.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="grid gap-5 rounded-2xl border border-black/10 bg-black/[0.03] p-6 transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 md:grid-cols-[0.8fr_1.4fr]"
          >
            <div>
              {item.logo && (
                <Image 
                  src={item.logo} 
                  alt={item.company} 
                  width={48} 
                  height={48} 
                  className="mb-4 h-12 w-12 rounded-full object-cover" 
                />
              )}
              <p className="text-sm text-zinc-500 dark:text-zinc-500">
                {item.startDate} - {item.endDate}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">{item.role}</h3>
              <p className="mt-1 text-zinc-600 dark:text-zinc-400">
                {item.company} / {item.type}
              </p>
              <p className="mt-1 text-sm text-zinc-500">{item.location}</p>
            </div>
            <div>
              <p className="leading-7 text-zinc-700 dark:text-zinc-300">{item.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>- {achievement}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-black/10 px-3 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                    {tech}
                  </span>
                ))}
              </div>
              {item.gallery && item.gallery.length > 0 && (
                <button
                  type="button"
                  onClick={() => setActiveGallery({ title: `${item.company} gallery`, media: item.gallery ?? [] })}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-black/20 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:border-white/10 dark:text-zinc-300 dark:hover:border-white/20 dark:hover:text-white"
                >
                  <Images size={16} aria-hidden="true" />
                  Gallery
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
      <MediaGalleryModal gallery={activeGallery} onClose={() => setActiveGallery(null)} />
    </SectionReveal>
  );
}

