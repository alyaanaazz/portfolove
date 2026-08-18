import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  const previewMedia = project.gallery[0] ?? project.image;

  return {
    title: `${project.title} - ${profile.name}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: previewMedia.match(/\.(mp4|webm)$/i) ? undefined : [previewMedia],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const detailBlocks = [
    { title: "Problem", body: project.problem },
    { title: "Process", body: project.process },
    { title: "Solution", body: project.solution },
    { title: "Result", body: project.result },
  ];

  return (
    <article className="pt-10">
      <Link href="/work" className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
        <ArrowLeft size={16} aria-hidden="true" />
        Back to work
      </Link>
      <header className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
            {project.category} / {project.year}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">{project.description}</p>
        </div>
        <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.03]">
          <dl className="grid gap-4 text-sm">
            <div>
              <dt className="text-zinc-500">Role</dt>
              <dd className="mt-1 font-medium text-zinc-950 dark:text-white">{project.role}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-black/10 px-3 py-1 text-xs text-zinc-600 dark:border-white/10 dark:text-zinc-400">
                    {tech}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <div className="mt-6 flex gap-3">
            {project.links.github && !project.links.github.startsWith("[") && (
              <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold dark:border-white/10">
                <GitBranch size={16} aria-hidden="true" /> GitHub
              </a>
            )}
            {project.links.live && !project.links.live.startsWith("[") && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold dark:border-white/10">
                <ExternalLink size={16} aria-hidden="true" /> Live
              </a>
            )}
            {project.links.medium && !project.links.medium.startsWith("[") && (
              <a href={project.links.medium} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold dark:border-white/10">
                <Image src="/images/medium.png" alt="" width={16} height={16} className="object-contain dark:invert" aria-hidden="true" /> Medium
              </a>
            )}
          </div>
        </div>
      </header>
      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {detailBlocks.map((block) => (
          <div key={block.title} className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">{block.title}</h2>
            <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">{block.body}</p>
          </div>
        ))}
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">Gallery</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {project.gallery.map((image) => (
            <div key={image} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-black/10 bg-zinc-200 dark:border-white/10 dark:bg-zinc-900">
              {image.match(/\.(mp4|webm)$/i) ? (
                <video
                  src={image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image src={image} alt={`${project.title} gallery image`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
              )}
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
