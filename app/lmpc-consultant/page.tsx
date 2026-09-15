import { ServicePage, serviceMetadata } from "@/components/service-page";
import { lmpcContent } from "@/lib/content";

export const metadata = serviceMetadata(lmpcContent, "/google-ads/lmpc-consultant/", false);

export default function LegacyLmpcPage() {
  return <ServicePage content={lmpcContent} campaign />;
}
