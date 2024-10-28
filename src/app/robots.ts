import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/public/images",
    },
    sitemap: "https://soller-rho.vercel.app/",
  };
}
