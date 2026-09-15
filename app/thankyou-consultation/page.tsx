import { ThankYouPage, thankYouMetadata } from "@/components/thank-you-page";

export const metadata = thankYouMetadata;

export default function ConsultationThankYou() {
  return <ThankYouPage service="consultation" serviceKey="general" />;
}
