import { ServicePage, serviceMetadata } from "@/components/service-page";
import { bisContent } from "@/lib/content";

export const metadata = serviceMetadata(bisContent, "/bis-certification-services/");

export default function BisPage() {
  return <ServicePage content={bisContent} />;
}
