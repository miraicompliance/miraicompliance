import { BadgeCheck, Boxes, FileCheck2, Globe2, PackageCheck, Radio, Recycle, Scale, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const contact = {
  phoneDisplay: "+91 96256 93781",
  phoneHref: "tel:+919625693781",
  whatsapp: "https://wa.me/919625693781?text=Hello%2C%20I%20would%20like%20guidance%20on%20a%20compliance%20requirement.",
  email: "contact@miraicompliance.com",
  address: "Mangolpuri, Delhi 110083, India",
};

export type ServiceKey = "epr" | "lmpc" | "bis" | "wpc" | "trademark" | "general";
export type ServiceCard = { key: ServiceKey; title: string; summary: string; href: string; icon: LucideIcon };

export const serviceCards: ServiceCard[] = [
  { key: "epr", title: "EPR compliance", summary: "Registration and ongoing support for plastic, e-waste, batteries, tyres, used oil and ELV categories.", href: "/google-ads/epr-consultant/", icon: Recycle },
  { key: "lmpc", title: "LMPC registration", summary: "Legal Metrology support for importers, manufacturers and packers of pre-packaged goods.", href: "/google-ads/lmpc-consultant/", icon: Scale },
  { key: "bis", title: "BIS certification", summary: "Structured support for applicable BIS product certification and registration schemes.", href: "/bis-certification-services/", icon: BadgeCheck },
  { key: "wpc", title: "WPC ETA approval", summary: "Guidance for wireless and radio-frequency products entering the Indian market.", href: "/wpc-eta-approval-consultant/", icon: Radio },
  { key: "trademark", title: "Trademark registration", summary: "Search, filing and application coordination to help protect names, logos and brand assets.", href: "/online-trademark-registration/", icon: ShieldCheck },
  { key: "general", title: "Business compliance", summary: "A practical starting point when you are unsure which registrations or approvals apply.", href: "/#consultation", icon: Boxes },
];

export type PageSection = { title: string; body: string; points?: string[] };
export type Faq = { question: string; answer: string };
export type ServicePageContent = {
  key: Exclude<ServiceKey, "general">;
  eyebrow: string;
  title: string;
  description: string;
  audience: string[];
  sections: PageSection[];
  process: string[];
  documents: string[];
  faqs: Faq[];
  thankYouPath: string;
};

export const eprContent: ServicePageContent = {
  key: "epr", eyebrow: "Extended Producer Responsibility", title: "EPR compliance, made clear.",
  description: "Understand the category, documents and ongoing obligations that apply to your products. Our consultants coordinate the process from assessment through filing and post-registration support.",
  audience: ["Manufacturers", "Importers", "Brand owners", "E-commerce businesses"],
  sections: [
    { title: "What EPR covers", body: "Extended Producer Responsibility places responsibility for end-of-life waste management on businesses that introduce regulated products or packaging into the market.", points: ["Plastic packaging", "Electrical and electronic equipment", "Batteries and tyres", "Used oil and end-of-life vehicles"] },
    { title: "What we help with", body: "We translate the applicable framework into a practical work plan for your business and product category.", points: ["Applicability and category assessment", "Portal registration and application preparation", "Document review and query coordination", "Returns and ongoing compliance support"] },
  ],
  process: ["Assess applicability", "Review documents", "Prepare application", "Coordinate queries", "Support ongoing compliance"],
  documents: ["Company PAN and GST details", "Business registration documents", "IEC for importers", "Product and packaging information", "Sales or import data", "Authorised signatory details"],
  faqs: [
    { question: "Who may need EPR registration?", answer: "The requirement can apply to producers, importers and brand owners of regulated products or packaging. The exact category depends on the product and business activity." },
    { question: "Is registration the end of the process?", answer: "Not always. Many EPR frameworks include targets, records and periodic return obligations after registration." },
    { question: "Can Mirai issue the certificate?", answer: "No. Mirai Compliance is an independent consultancy. Decisions and approvals remain with the relevant authority." },
  ],
  thankYouPath: "/thanyou-epr-consultant/",
};

export const lmpcContent: ServicePageContent = {
  key: "lmpc", eyebrow: "Legal Metrology", title: "LMPC guidance for packaged goods.",
  description: "Get practical support for Legal Metrology registration, declarations and documentation before importing, manufacturing or packing pre-packaged commodities in India.",
  audience: ["Importers", "Manufacturers", "Packers and repackers", "Retail and e-commerce brands"],
  sections: [
    { title: "Where LMPC applies", body: "Businesses dealing with pre-packaged commodities may need registration and compliant package declarations under the Legal Metrology framework.", points: ["Importer registration", "Manufacturer or packer registration", "Package declaration review", "Model approval guidance for applicable instruments"] },
    { title: "What we help with", body: "We help identify the correct route, prepare the supporting record and coordinate responses throughout the filing process.", points: ["Applicability review", "NSWS and filing support", "Label and declaration review", "Authority query coordination"] },
  ],
  process: ["Classify the business role", "Review labels and records", "Prepare filing", "Coordinate queries", "Maintain compliant records"],
  documents: ["IEC for importers", "GST certificate", "Business registration proof", "Product and packaging details", "Applicant identity and address proof", "Authorisation letter where applicable"],
  faqs: [
    { question: "Who commonly needs LMPC registration?", answer: "Importers, manufacturers, packers and repackers of pre-packaged commodities may fall within the framework, depending on their activity and product." },
    { question: "Is model approval the same as LMPC registration?", answer: "No. Model approval concerns specified weighing or measuring instruments, while LMPC registration generally relates to pre-packaged commodities and declarations." },
    { question: "Does Mirai guarantee approval or timing?", answer: "No. Approval and processing timelines are controlled by the relevant authority and depend on the application and supporting documents." },
  ],
  thankYouPath: "/thankyou-lmpc/",
};

export const bisContent: ServicePageContent = {
  key: "bis", eyebrow: "Bureau of Indian Standards", title: "A structured path to BIS compliance.",
  description: "Identify the applicable BIS scheme and prepare the technical and business documentation needed for a complete submission.",
  audience: ["Indian manufacturers", "Foreign manufacturers", "Importers", "Product brands"],
  sections: [
    { title: "Start with the product", body: "The applicable standard and certification route depend on the product, manufacturing location and intended market.", points: ["Product and standard mapping", "Scheme applicability", "Testing coordination", "Application documentation"] },
    { title: "Support through review", body: "We organise the submission and help coordinate application queries, inspections or laboratory requirements where applicable." },
  ],
  process: ["Map the standard", "Confirm scheme", "Prepare testing", "File application", "Coordinate review"],
  documents: ["Business registration documents", "Manufacturing details", "Product specifications", "Test reports where applicable", "Authorisation records", "Factory information"],
  faqs: [
    { question: "Does every product require BIS certification?", answer: "No. Applicability depends on the product and current mandatory certification requirements." },
    { question: "Who issues BIS certification?", answer: "The Bureau of Indian Standards is the issuing authority. Mirai Compliance provides independent consulting and application support." },
  ],
  thankYouPath: "/thankyou-bis-certification/",
};

export const wpcContent: ServicePageContent = {
  key: "wpc", eyebrow: "Wireless Planning & Coordination", title: "WPC ETA support for wireless products.",
  description: "Prepare for market entry with clear guidance on Equipment Type Approval for applicable radio-frequency and wireless equipment.",
  audience: ["Importers", "Manufacturers", "Electronics brands", "Wireless equipment sellers"],
  sections: [
    { title: "Determine applicability", body: "ETA requirements depend on the radio technology, frequency band, technical specification and product configuration.", points: ["Frequency and module review", "Product classification", "Technical document checklist", "Application coordination"] },
    { title: "Keep the submission aligned", body: "We review reports and supporting records for consistency before filing and help coordinate authority queries." },
  ],
  process: ["Review product", "Confirm frequency", "Check test record", "Prepare application", "Coordinate review"],
  documents: ["RF test report", "Product technical literature", "Manufacturer authorisation", "Company registration documents", "IEC for importers", "Applicant details"],
  faqs: [
    { question: "Which products may require ETA?", answer: "Products using de-licensed radio-frequency bands—such as certain Wi-Fi or Bluetooth devices—may require review for ETA applicability." },
    { question: "Is WPC approval a product warranty?", answer: "No. It is a regulatory approval process and does not replace product quality or safety obligations." },
  ],
  thankYouPath: "/thankyou-wpc-eta-approval/",
};

export const trademarkContent: ServicePageContent = {
  key: "trademark", eyebrow: "Brand Protection", title: "Register your trademark with clarity.",
  description: "Plan the search, classification and filing process for a name, logo or other eligible brand identifier.",
  audience: ["Startups", "Established companies", "Founders", "Product and service brands"],
  sections: [
    { title: "A stronger application starts with research", body: "A preliminary search and correct class selection help reveal conflicts and define the scope of the proposed mark.", points: ["Preliminary mark search", "Class selection guidance", "Application preparation", "Examination-response support"] },
    { title: "Know what registration means", body: "Trademark registration is an authority-led legal process. Timelines and outcomes depend on examination, objections and third-party opposition." },
  ],
  process: ["Understand the mark", "Search records", "Select classes", "File application", "Track examination"],
  documents: ["Applicant identity details", "Business registration proof", "Logo or word mark", "Description of goods or services", "Use evidence where applicable", "Authorisation document"],
  faqs: [
    { question: "Can a trademark search guarantee registration?", answer: "No. A search helps identify obvious conflicts, but acceptance remains subject to examination and possible opposition." },
    { question: "Can I apply for both a name and logo?", answer: "They may be protected through separate filings depending on the required scope. A consultant can help compare the options." },
  ],
  thankYouPath: "/",
};

export const trustPoints = [
  { title: "Requirement-first advice", body: "We begin with applicability and the actual business activity—not a generic package.", icon: FileCheck2 },
  { title: "Clear document control", body: "Checklists, reviews and status updates keep each filing organised and understandable.", icon: PackageCheck },
  { title: "Independent guidance", body: "We explain our role clearly. Approval always remains with the relevant authority.", icon: Globe2 },
];
