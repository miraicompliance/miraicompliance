import type { Metadata } from "next";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import { UiFeedback } from "@/components/ui-feedback";
import "./globals.css";

const geist = localFont({ src: "../public/fonts/geist-latin.woff2", variable: "--font-geist", display: "swap", weight: "100 900" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://miraicompliance.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Mirai Compliance | Regulatory & Certification Support", template: "%s | Mirai Compliance" },
  description: "Independent compliance consultants supporting Indian businesses with registrations, certifications, documentation and regulatory filings.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_IN", siteName: "Mirai Compliance" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-T54SFBMZ";
  return <html lang="en" className={geist.variable}><body><UiFeedback>{children}</UiFeedback></body>{gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}</html>;
}
