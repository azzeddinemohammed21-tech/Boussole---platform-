import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://boussole-platform.vercel.app",
      lastModified: new Date(),
    },
  ];
}
