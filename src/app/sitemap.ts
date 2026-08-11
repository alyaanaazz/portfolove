import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/experience", "/work", "/blog"];
  const projectRoutes = projects.map((project) => `/work/${project.slug}`);

  return [...routes, ...projectRoutes].map((route) => ({
    url: `${profile.siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
