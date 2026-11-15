import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/how-it-works",
    "/features",
    "/integrations",
    "/switching",
    "/industries",
    ...industries.map((i) => `/industries/${i.slug}`),
    "/pricing",
    "/customer-stories",
    "/book-a-demo",
  ];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/book-a-demo" ? 0.9 : 0.7,
  }));
}
