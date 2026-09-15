import type { Metadata } from "next";
import type { ServiceKey } from "@/lib/content";
import { Footer, Header } from "./site-shell";
import { ThankYouExperience } from "./thank-you-experience";

export const thankYouMetadata: Metadata = { title: "Thank You", robots: { index: false, follow: false } };

export function ThankYouPage({ service, serviceKey }: { service: string; serviceKey: ServiceKey }) {
  return <>
    <Header minimal service={serviceKey} />
    <ThankYouExperience service={service} serviceKey={serviceKey} />
    <Footer service={serviceKey} />
  </>;
}
