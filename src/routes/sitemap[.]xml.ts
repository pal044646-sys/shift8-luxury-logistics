import { createFileRoute } from "@tanstack/react-router";
import { CITIES, DESTINATIONS, SERVICES, BLOG_POSTS, ROUTES, SITE } from "@/data/seo";

const BASE_URL = SITE.domain;

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/packers-and-movers", changefreq: "monthly", priority: "0.9" },
          { path: "/routes", changefreq: "monthly", priority: "0.9" },
          { path: "/enquiry", changefreq: "yearly", priority: "0.5" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          ...CITIES.map((c) => ({
            path: `/packers-and-movers/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.9",
          })),
          ...ROUTES.map((r) => ({
            path: `/routes/${r.slug}`,
            changefreq: "monthly" as const,
            priority: "0.9",
          })),
          ...DESTINATIONS.map((d) => ({
            path: `/haridwar-to/${d.slug}`,
            changefreq: "monthly" as const,
            priority: "0.9",
          })),
          ...SERVICES.map((s) => ({
            path: `/services/${s.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...BLOG_POSTS.map((p) => ({
            path: `/blog/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
