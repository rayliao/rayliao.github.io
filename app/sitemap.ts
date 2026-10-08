import type { MetadataRoute } from "next";
import { getArticleSlugs } from "./common/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rayliao.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/jon`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/family`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/li`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  const shootYears = [2016, 2017, 2018, 2019, 2020, 2021];
  const shootPages: MetadataRoute.Sitemap = shootYears.map((year) => ({
    url: `${baseUrl}/shoot/${year}`,
    lastModified: new Date(year, 11, 31),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const yarArticles: MetadataRoute.Sitemap = getArticleSlugs("yar").map(
    (slug) => ({
      url: `${baseUrl}/yar/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })
  );

  const hakkaArticles: MetadataRoute.Sitemap = getArticleSlugs("hakka").map(
    (slug) => ({
      url: `${baseUrl}/hakka/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })
  );

  return [
    ...staticPages,
    ...shootPages,
    ...yarArticles,
    ...hakkaArticles,
  ];
}
