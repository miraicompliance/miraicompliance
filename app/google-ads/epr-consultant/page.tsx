import { ServicePage, serviceMetadata } from "@/components/service-page";
import { eprContent } from "@/lib/content";

export const metadata = serviceMetadata(eprContent, "/google-ads/epr-consultant/");

export default function EprCampaignPage() {
  return <ServicePage content={eprContent} campaign />;
}
