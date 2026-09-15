import type { MetadataRoute } from "next";

const paths = [
  "/", "/google-ads/epr-consultant/", "/google-ads/lmpc-consultant/", "/bis-certification-services/",
  "/wpc-eta-approval-consultant/", "/online-trademark-registration/", "/privacy-policy/",
  "/terms-conditions/", "/refund-and-cancellations-policy/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://miraicompliance.com").replace(/\/$/, "");
  return paths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date("2026-09-15"), changeFrequency: path === "/" ? "weekly" : "monthly", priority: path === "/" ? 1 : path.startsWith("/google-ads/") ? 0.9 : 0.7 }));
}
