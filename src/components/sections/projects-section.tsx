import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionReveal } from "@/components/ui/section-reveal";

export function ProjectsSection({ showAll = false }: { showAll?: boolean }) {
  const sortedProjects = [...projects].sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  const visibleProjects = showAll ? sortedProjects : sortedProjects.slice(0, 2);

  return (
    <SectionReveal id="work" className="mt-16 border-t border-black/10 pt-12 dark:border-white/10 md:mt-20 md:pt-16">
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
            Selected Work
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-4xl">
            Projects built from structured ideas.
          </h2>
        </div>
        {!showAll && (
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
            View all work <ArrowRight size={16} aria-hidden="true" />
          </Link>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project) => {
          const previewMedia = project.gallery[0] ?? project.image;

          return (
          <article
            key={project.slug}
            className="group overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
          >
            <Link href={`/work/${project.slug}`} className="block focus:outline-none focus:ring-2 focus:ring-maroon-800/50">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                {previewMedia.match(/\.(mp4|webm)$/i) ? (
                  <video
                    src={previewMedia}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <Image
                    src={previewMedia}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-500">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-zinc-700 dark:text-zinc-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-black/10 px-3 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            <div className="flex gap-3 px-6 pb-6">
              {project.links.github && !project.links.github.startsWith("[") && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} GitHub`} className="text-zinc-500 hover:text-zinc-950 dark:hover:text-white">
                  <GitBranch size={18} aria-hidden="true" />
                </a>
              )}
              {project.links.live && !project.links.live.startsWith("[") && (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} live demo`} className="text-zinc-500 hover:text-zinc-950 dark:hover:text-white">
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
              )}
              {project.links.medium && !project.links.medium.startsWith("[") && (
                <a href={project.links.medium} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} Medium article`} className="text-zinc-500 hover:text-zinc-950 dark:hover:text-white">
                  <Image src="/images/medium.png" alt="" width={18} height={18} className="object-contain opacity-70 transition hover:opacity-100 dark:invert" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
          );
        })}
      </div>
    </SectionReveal>
  );
}
