import { PolicyPage, policyMetadata } from "@/components/policy-page";
import { refundSections } from "@/lib/policies";

export const metadata = policyMetadata("Refund & Cancellation Policy", "Refund and cancellation terms for Mirai Compliance professional services and external charges.", "/refund-and-cancellations-policy/");

export default function RefundPage() {
  return <PolicyPage eyebrow="Service terms" title="Refund & cancellation policy" introduction="This policy explains how cancellation requests, professional fees and third-party charges are handled." sections={refundSections} />;
}
