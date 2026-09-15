import { ServicePage, serviceMetadata } from "@/components/service-page";
import { eprContent } from "@/lib/content";

export const metadata = serviceMetadata(eprContent, "/google-ads/epr-consultant/", false);

export default function LegacyEprPage() {
  return <ServicePage content={eprContent} campaign />;
}
