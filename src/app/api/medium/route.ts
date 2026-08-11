import { NextResponse } from "next/server";
import { profile } from "@/data/profile";
import { getLatestMediumPosts } from "@/lib/medium";

export const revalidate = 3600;

export async function GET() {
  const username = process.env.MEDIUM_USERNAME || profile.mediumUsername;
  const posts = await getLatestMediumPosts(username, 12);

  return NextResponse.json({
    username,
    posts,
  });
}
