import { ServicePage, serviceMetadata } from "@/components/service-page";
import { lmpcContent } from "@/lib/content";

export const metadata = serviceMetadata(lmpcContent, "/google-ads/lmpc-consultant/");

export default function LmpcCampaignPage() {
  return <ServicePage content={lmpcContent} campaign />;
}
