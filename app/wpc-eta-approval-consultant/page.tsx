import { ServicePage, serviceMetadata } from "@/components/service-page";
import { wpcContent } from "@/lib/content";

export const metadata = serviceMetadata(wpcContent, "/wpc-eta-approval-consultant/");

export default function WpcPage() {
  return <ServicePage content={wpcContent} />;
}
