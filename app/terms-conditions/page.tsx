import { PolicyPage, policyMetadata } from "@/components/policy-page";
import { termsSections } from "@/lib/policies";

export const metadata = policyMetadata("Terms & Conditions", "Terms governing the Mirai Compliance website and independent consultancy services.", "/terms-conditions/");

export default function TermsPage() {
  return <PolicyPage eyebrow="Terms" title="Terms & conditions" introduction="These terms govern use of the Mirai Compliance website and the basis on which our independent consultancy services are provided." sections={termsSections} />;
}
