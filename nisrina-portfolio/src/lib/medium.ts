import Parser from "rss-parser";
import type { MediumPost } from "@/types/portfolio";

const parser = new Parser({
  customFields: {
    item: [["content:encoded", "contentEncoded"]],
  },
});

export const mediumRevalidateSeconds = 60 * 60;

export async function getLatestMediumPosts(username: string, limit = 3): Promise<MediumPost[]> {
  const cleanUsername = username.replace(/^@/, "");
  const feedUrl = `https://medium.com/feed/@${cleanUsername}`;

  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: mediumRevalidateSeconds },
      signal: AbortSignal.timeout(6000),
    });

    if (!response.ok) {
      return [];
    }

    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return feed.items.slice(0, limit).map((item) => {
      const content = getItemContent(item);
      const excerpt = stripHtml(content).slice(0, 160).trim();

      return {
        title: item.title || "Untitled article",
        link: item.link || `https://medium.com/@${cleanUsername}`,
        pubDate: item.pubDate || new Date().toISOString(),
        categories: item.categories || [],
        thumbnail: extractImage(content),
        excerpt: excerpt ? `${excerpt}${excerpt.length >= 160 ? "..." : ""}` : "Read the full article on Medium.",
        readingTime: estimateReadingTime(stripHtml(content)),
        author: "Nisrina Alya Nabilah",
      };
    });
  } catch {
    return [];
  }
}

function getItemContent(item: Parser.Item & { contentEncoded?: string }) {
  return item.contentEncoded || item.content || item.contentSnippet || "";
}

function extractImage(content: string) {
  return content.match(/<img[^>]+src="([^">]+)"/)?.[1] || null;
}

function stripHtml(content: string) {
  return content.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
}

function estimateReadingTime(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}
