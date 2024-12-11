import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const publicUrl = "https://next-store-fatih-delice.vercel.app/";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${publicUrl}/sitemap.xml`,
  };
}
