import { ServicePage, serviceMetadata } from "@/components/service-page";
import { trademarkContent } from "@/lib/content";

export const metadata = serviceMetadata(trademarkContent, "/online-trademark-registration/");

export default function TrademarkPage() {
  return <ServicePage content={trademarkContent} />;
}
