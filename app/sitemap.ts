import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site-config";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        SITE_URL + "/opengraph-image",
        "https://plus.unsplash.com/premium_photo-1683141091801-abc4d06a9c50?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  ];
}
