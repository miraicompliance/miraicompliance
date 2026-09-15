import { PolicyPage, policyMetadata } from "@/components/policy-page";
import { privacySections } from "@/lib/policies";

export const metadata = policyMetadata("Privacy Policy", "How Mirai Compliance collects, uses and protects information submitted through this website.", "/privacy-policy/");

export default function PrivacyPolicyPage() {
  return <PolicyPage eyebrow="Privacy" title="Privacy policy" introduction="This notice explains what information we collect through this website, why we use it and the choices available to you." sections={privacySections} />;
}
