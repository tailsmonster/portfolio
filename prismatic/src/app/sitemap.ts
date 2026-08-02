import type { MetadataRoute } from "next";
import posts from "@/data/posts";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = ["", "/archive", "/timeline", "/dispatch"].map(
    (route) => ({
      url: `${site.url}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: route === "" ? 1 : 0.8,
    }),
  );

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${site.url}/dispatch/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
