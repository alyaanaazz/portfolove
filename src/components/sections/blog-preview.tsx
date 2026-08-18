import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { profile } from "@/data/profile";
import type { MediumPost } from "@/types/portfolio";
import { SectionReveal } from "@/components/ui/section-reveal";

export function BlogPreview({ posts }: { posts: MediumPost[] }) {
  const featured = posts[0];
  const rest = posts.slice(1, 3);

  return (
    <SectionReveal id="blog" className="mt-16 border-t border-black/10 pt-12 dark:border-white/10 md:mt-20 md:pt-16">
      <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
            Latest Writing
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-4xl">
            Notes from design, code, and product.
          </h2>
        </div>
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white">
          View all <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
      {featured ? (
        <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group grid overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 ${
              featured.thumbnail ? "md:grid-cols-2" : ""
            }`}
          >
            {featured.thumbnail && <ArticleImage post={featured} priority />}
            <div className="flex min-h-80 flex-col justify-end p-7">
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                {featured.author} / {formatDate(featured.pubDate)}
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white">{featured.title}</h3>
              <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 group-hover:text-zinc-950 dark:text-white">
                Read article <ArrowRight size={16} aria-hidden="true" />
              </span>
            </div>
          </a>
          <div className="grid gap-6">
            {rest.map((post) => (
              <ArticleCard key={post.link} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-8 dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-zinc-700 dark:text-zinc-300">
            Medium posts are unavailable right now, but the rest of the portfolio is still ready.
          </p>
          <a href={profile.socials.medium} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-950 dark:text-white">
            Open Medium <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      )}
    </SectionReveal>
  );
}

export function ArticleCard({ post }: { post: MediumPost }) {
  return (
    <a
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group grid overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 ${
        post.thumbnail ? "sm:grid-cols-[0.8fr_1fr]" : ""
      }`}
    >
      {post.thumbnail && <ArticleImage post={post} />}
      <div className="p-5">
        <p className="text-xs text-zinc-500">{formatDate(post.pubDate)} / {post.readingTime}</p>
        <h3 className="mt-3 text-lg font-semibold text-zinc-950 dark:text-white">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
      </div>
    </a>
  );
}

function ArticleImage({ post, priority = false }: { post: MediumPost; priority?: boolean }) {
  if (!post.thumbnail) return null;

  return (
    <div className="relative min-h-52 overflow-hidden bg-zinc-900">
      <Image
        src={post.thumbnail}
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 40vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </div>
  );
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric" }).format(new Date(value));
}
