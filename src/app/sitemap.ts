import type { MetadataRoute } from "next";
import { coffeeMachines, coffeeBeans, usedMachines } from "@/data/products";

// Real modification dates instead of `new Date()` on every build. Stamping
// "today" on every URL each deploy trains Google to ignore <lastmod> entirely.
// Bump `lastContentUpdate` when catalogue / page content actually changes;
// the legal pages get their own (rarely-changing) date.
const lastContentUpdate = new Date("2026-09-07");
const legalLastUpdate = new Date("2026-06-01");
const blogLastUpdate = new Date("2026-08-15");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.gintz.co.il";
  const now = lastContentUpdate;

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/machines`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/roastery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/business-solutions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/business-solutions/hightech`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/business-solutions/factories`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/business-solutions/clinics`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/business-solutions/rental`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/business-solutions/small-office`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/business-solutions/medium-office`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/business-solutions/large-office`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...coffeeMachines.map((m) => ({
      url: `${base}/machines/${m.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...coffeeBeans.map((b) => ({
      url: `${base}/beans/${b.id}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...usedMachines.map((m) => ({
      url: `${base}/bargains/${m.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    {
      url: `${base}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/beans`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/bargains`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${base}/blog`,
      lastModified: blogLastUpdate,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${base}/blog/choosing-office-coffee-machine`,
      lastModified: blogLastUpdate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/office-coffee-budget-guide`,
      lastModified: blogLastUpdate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/beans-vs-capsules`,
      lastModified: blogLastUpdate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/how-much-coffee-does-an-office-need`,
      lastModified: blogLastUpdate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/blog/matching-coffee-to-taste`,
      lastModified: blogLastUpdate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/terms`,
      lastModified: legalLastUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/accessibility`,
      lastModified: legalLastUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
