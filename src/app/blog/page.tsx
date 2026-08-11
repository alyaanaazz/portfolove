import type { Metadata } from "next";
import { ArticleCard } from "@/components/sections/blog-preview";
import { profile } from "@/data/profile";
import { getLatestMediumPosts } from "@/lib/medium";

export const metadata: Metadata = {
  title: `Blog - ${profile.name}`,
  description: `Latest writing from ${profile.name}.`,
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getLatestMediumPosts(process.env.MEDIUM_USERNAME || profile.mediumUsername, 12);

  return (
    <div className="pt-10">
      <header className="mb-12 max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
          Blog
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-7xl">
          Latest writing.
        </h1>
        <p className="mt-5 text-lg leading-8 text-zinc-700 dark:text-zinc-300">
          An editorial index of Medium articles, fetched server-side and linked back to the original posts.
        </p>
      </header>
      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <ArticleCard key={post.link} post={post} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-black/10 bg-black/[0.03] p-8 dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-zinc-700 dark:text-zinc-300">Medium posts are unavailable right now.</p>
          <a href={profile.socials.medium} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex text-sm font-semibold text-zinc-950 dark:text-white">
            Open Medium
          </a>
        </div>
      )}
    </div>
  );
}
