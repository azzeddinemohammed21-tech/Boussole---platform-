import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://boussole-platform.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
