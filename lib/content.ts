import { BadgeCheck, FileCheck2, Globe2, PackageCheck, Radio, Recycle, Scale, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const contact = {
  phoneDisplay: "+91 96256 93781",
  phoneHref: "tel:+919625693781",
  whatsapp: "https://wa.me/919625693781?text=Hello%2C%20I%20would%20like%20guidance%20on%20a%20compliance%20requirement.",
  email: "contact@miraicompliance.com",
  address: "Best Sky Tower, NSP, Pitampura, Delhi 110034, India",
};

export type ServiceKey = "epr" | "lmpc" | "bis" | "wpc" | "trademark" | "general";
export type ServiceCard = { key: ServiceKey; title: string; summary: string; href: string; icon: LucideIcon };

export const serviceCards: ServiceCard[] = [
  { key: "epr", title: "EPR registration & compliance", summary: "Category assessment, CPCB portal registration, query support, returns and ongoing obligations for plastic, e-waste, batteries, tyres, used oil and ELV.", href: "/google-ads/epr-consultant/", icon: Recycle },
  { key: "lmpc", title: "LMPC registration & label review", summary: "Registration and packaged-commodity declaration support for importers, manufacturers, packers and brand owners.", href: "/google-ads/lmpc-consultant/", icon: Scale },
  { key: "bis", title: "BIS product certification", summary: "Product-standard mapping and application support for Scheme I/ISI, CRS and FMCS routes, including testing and authority queries.", href: "/bis-certification-services/", icon: BadgeCheck },
  { key: "wpc", title: "WPC ETA approval", summary: "Frequency-band assessment, RF test-report review and ETA application support for eligible wireless and radio-frequency products.", href: "/wpc-eta-approval-consultant/", icon: Radio },
  { key: "trademark", title: "Trademark search & filing", summary: "Preliminary search, class selection, TM-A filing and application tracking for names, logos and eligible brand identifiers.", href: "/online-trademark-registration/", icon: ShieldCheck },
];

export const leadServiceOptions: { value: ServiceKey; label: string }[] = [
  { value: "epr", label: "EPR registration & compliance" },
  { value: "lmpc", label: "LMPC registration & label review" },
  { value: "bis", label: "BIS product certification" },
  { value: "wpc", label: "WPC ETA approval" },
  { value: "trademark", label: "Trademark registration" },
  { value: "general", label: "Not sure / general enquiry" },
];

export type PageSection = { title: string; body: string; points?: string[] };
export type Faq = { question: string; answer: string };
export type SectionIntro = { eyebrow: string; title: string; description?: string };
export type ServicePageContent = {
  key: Exclude<ServiceKey, "general">;
  eyebrow: string;
  title: string;
  description: string;
  audience: string[];
  overview: SectionIntro;
  sections: PageSection[];
  processIntro: SectionIntro;
  process: string[];
  documentsIntro: SectionIntro;
  documents: string[];
  faqIntro: SectionIntro;
  faqs: Faq[];
  cta: { eyebrow: string; title: string };
  thankYouPath: string;
};

export const eprContent: ServicePageContent = {
  key: "epr",
  eyebrow: "Extended Producer Responsibility",
  title: "EPR Registration and Ongoing Compliance Support",
  description: "Identify the EPR framework that applies to your products and business role. Mirai Compliance supports category assessment, CPCB portal registration, document and data preparation, query responses, returns and continuing obligations.",
  audience: ["Producers and manufacturers", "Importers", "Brand owners", "E-commerce businesses"],
  overview: {
    eyebrow: "EPR services",
    title: "Support matched to your waste category and business role.",
    description: "EPR requirements vary by regulated waste stream, applicant type and the products or packaging placed on the Indian market. We define the applicable work before preparing a filing.",
  },
  sections: [
    { title: "Who may need EPR registration", body: "Registration and compliance obligations may apply when a business manufactures, imports, produces or sells regulated products or packaging under its own brand.", points: ["Producers and manufacturers", "Importers and brand owners", "Recyclers, refurbishers or processors where applicable", "Online sellers introducing regulated products"] },
    { title: "What Mirai provides", body: "We convert the applicable framework into a documented application and compliance work plan for your organisation.", points: ["Applicant-role and category assessment", "CPCB portal registration and application preparation", "Product, packaging and quantity-data review", "Authority-query and clarification support"] },
    { title: "EPR categories supported", body: "The application route and ongoing obligations are handled separately for each regulated waste category.", points: ["Plastic packaging", "Electrical and electronic equipment", "Battery and waste tyre", "Used oil and end-of-life vehicle categories"] },
    { title: "Support after registration", body: "Registration may be followed by target, certificate, record-keeping and return obligations. We help organise the applicable post-registration cycle.", points: ["Target and obligation review", "Recycler and certificate record coordination", "Periodic or annual return support", "Renewal and portal-update assistance"] },
  ],
  processIntro: { eyebrow: "EPR work plan", title: "From category assessment to continuing compliance.", description: "Each stage is aligned to the applicable portal and the information available for the business." },
  process: ["Confirm applicant role", "Map the waste category", "Prepare documents and data", "File and answer queries", "Support returns and targets"],
  documentsIntro: { eyebrow: "EPR document checklist", title: "Prepare the company, product and quantity record.", description: "The exact checklist changes by category and applicant type. We confirm the applicable documents before filing." },
  documents: ["Certificate of incorporation or business registration", "Company PAN, GST and registered-office proof", "IEC for importers", "Authorised-signatory identity and authorisation", "Product, brand and category details", "Sales, import, packaging or waste quantity data", "Existing environmental consents or registrations where applicable", "Prior EPR records, recycler details or supporting agreements where applicable"],
  faqIntro: { eyebrow: "EPR questions", title: "What businesses need to know before filing." },
  faqs: [
    { question: "Who may need EPR registration?", answer: "The obligation can apply to producers, manufacturers, importers, brand owners and other entities dealing with regulated products or packaging. Applicability depends on the waste category and the role performed by the business." },
    { question: "Which EPR categories does Mirai support?", answer: "Mirai supports assessment and application work for plastic packaging, e-waste, batteries, tyres, used oil and end-of-life vehicle categories, subject to the current rules and portal requirements." },
    { question: "Is an EPR registration the end of compliance?", answer: "Usually not. Depending on the category, continuing responsibilities may include targets, EPR certificates, transaction records, periodic returns, renewals and portal updates." },
    { question: "Can Mirai issue an EPR certificate?", answer: "No. Mirai Compliance is an independent consultancy. Registration and regulatory decisions remain with CPCB or the relevant authority." },
  ],
  cta: { eyebrow: "Start with EPR applicability", title: "Share your product category and business role for an EPR document review." },
  thankYouPath: "/thanyou-epr-consultant/",
};

export const lmpcContent: ServicePageContent = {
  key: "lmpc",
  eyebrow: "Legal Metrology Packaged Commodities",
  title: "LMPC Registration and Label Compliance for Packaged Goods",
  description: "Get support with Legal Metrology applicability, manufacturer, packer or importer registration, packaged-commodity declarations and filing documentation before products enter the Indian market.",
  audience: ["Importers", "Manufacturers", "Packers and repackers", "Retail and e-commerce brands"],
  overview: {
    eyebrow: "Legal Metrology services",
    title: "Registration and package declarations addressed together.",
    description: "LMPC work begins by confirming the applicant's role, the nature of the pre-packaged commodity and the declarations that must appear on the package.",
  },
  sections: [
    { title: "Who may require registration", body: "Manufacturers, packers and importers of pre-packaged commodities may require registration under the applicable Legal Metrology framework.", points: ["Importers of pre-packaged commodities", "Domestic manufacturers and packers", "Repackers and private-label businesses", "Brands selling packaged goods through retail or e-commerce"] },
    { title: "What Mirai provides", body: "We review the business and package information, prepare the supporting record and coordinate the applicable registration process.", points: ["Applicant-role and product applicability review", "Manufacturer, packer or importer registration support", "Application and supporting-document preparation", "Authority-query and amendment coordination"] },
    { title: "Package declaration review", body: "A registration does not replace compliant declarations. We review supplied artwork and labels against the requirements relevant to the packaged commodity.", points: ["Manufacturer, packer or importer identity", "Net quantity and unit presentation", "Month and year, MRP and consumer-care details where applicable", "Country-of-origin and other applicable declarations"] },
    { title: "Related Legal Metrology support", body: "Some products or instruments require a separate assessment beyond packaged-commodity registration.", points: ["Label and artwork correction review", "Registration amendment or update support", "Model-approval applicability for specified instruments", "Documentation for additional state or central requirements where applicable"] },
  ],
  processIntro: { eyebrow: "LMPC work plan", title: "From product and label review to a prepared registration filing.", description: "We organise the application around the applicant role, business locations and packaged-commodity details." },
  process: ["Confirm applicant role", "Review products and labels", "Prepare registration documents", "Submit the applicable filing", "Coordinate queries or updates"],
  documentsIntro: { eyebrow: "LMPC document checklist", title: "Business records and package artwork to keep ready.", description: "The final list depends on whether the applicant is an importer, manufacturer, packer or another covered entity." },
  documents: ["Certificate of incorporation or business registration", "GST certificate and PAN", "IEC for importers", "Registered-office and premises proof", "Applicant identity and authorised-signatory documents", "Product list and package labels or artwork", "Manufacturer or packing-unit details", "Authorisation letter and other declarations where applicable"],
  faqIntro: { eyebrow: "LMPC questions", title: "Registration, labels and model approval explained." },
  faqs: [
    { question: "Who commonly needs LMPC registration?", answer: "Importers, manufacturers, packers and repackers of pre-packaged commodities may require registration depending on their role, products and business locations." },
    { question: "Does LMPC registration make every label compliant?", answer: "No. Registration and package declarations are related but separate requirements. Product labels should be reviewed for the declarations applicable to the commodity and transaction." },
    { question: "Is model approval the same as LMPC registration?", answer: "No. Model approval concerns specified weighing or measuring instruments, while packaged-commodity registration generally concerns manufacturers, packers and importers and their declarations." },
    { question: "Does Mirai guarantee registration or processing time?", answer: "No. Mirai prepares and coordinates the application as an independent consultant. Decisions and processing timelines remain with the relevant authority." },
  ],
  cta: { eyebrow: "Review your LMPC requirement", title: "Share your product, business role and sample label for an initial assessment." },
  thankYouPath: "/thankyou-lmpc/",
};

export const bisContent: ServicePageContent = {
  key: "bis",
  eyebrow: "Bureau of Indian Standards",
  title: "BIS Certification Support for Indian and Foreign Manufacturers",
  description: "Determine the Indian Standard and certification route that apply to your product. Mirai supports Scheme I/ISI, CRS and FMCS assessment, testing coordination, application documentation and BIS queries.",
  audience: ["Indian manufacturers", "Foreign manufacturers", "Importers and AIRs", "Product brands"],
  overview: {
    eyebrow: "BIS certification services",
    title: "The product, standard and manufacturing location define the route.",
    description: "BIS requirements are product-specific. We first map the product to the relevant Indian Standard and determine whether Scheme I, CRS, FMCS or another route applies.",
  },
  sections: [
    { title: "Who may need BIS certification", body: "Manufacturers of products covered by mandatory requirements may need an active BIS licence or registration before supplying the Indian market.", points: ["Indian product manufacturers", "Foreign manufacturing units", "Electronics and IT product manufacturers", "Importers coordinating with an overseas manufacturer"] },
    { title: "Schemes we assess", body: "The correct conformity-assessment route depends on the product, applicable Quality Control Order and manufacturing location.", points: ["Scheme I product certification and ISI marking", "Compulsory Registration Scheme for notified electronics and IT goods", "Foreign Manufacturers Certification Scheme", "Product-specific conformity routes where applicable"] },
    { title: "What Mirai provides", body: "We organise the technical, testing and business record required for the identified BIS route.", points: ["Product-to-standard and scheme mapping", "Testing and recognised-laboratory coordination", "Application, forms and document review", "BIS query, inspection and follow-up coordination"] },
    { title: "Foreign manufacturer support", body: "Foreign applications can require additional manufacturing records and an Authorised Indian Representative, depending on the route.", points: ["AIR eligibility and nomination-document review", "Factory and manufacturing-process records", "Product testing and sample coordination", "Application and inspection preparation"] },
  ],
  processIntro: { eyebrow: "BIS work plan", title: "From standard mapping to authority review.", description: "The sequence is adjusted to the applicable scheme and product-specific requirements." },
  process: ["Map product and standard", "Confirm the BIS scheme", "Prepare testing and records", "Submit the application", "Coordinate queries or inspection"],
  documentsIntro: { eyebrow: "BIS document checklist", title: "Technical, manufacturing and business records for the selected scheme.", description: "Product-specific manuals and scheme requirements determine the final checklist." },
  documents: ["Business incorporation and manufacturing-unit details", "Product specifications, construction details and critical components", "Applicable Indian Standard and product scope", "Test reports from an applicable recognised laboratory", "Manufacturing process and quality-control information", "Brand or trademark authorisation where applicable", "AIR nomination and foreign-manufacturer documents where applicable", "Application forms and authorised-signatory records"],
  faqIntro: { eyebrow: "BIS questions", title: "Standards, schemes and applicant responsibilities." },
  faqs: [
    { question: "Does every product require BIS certification?", answer: "No. BIS certification is generally voluntary, but specified products are made mandatory through applicable requirements such as Quality Control Orders. Product and standard mapping is the first step." },
    { question: "What is the difference between ISI, CRS and FMCS?", answer: "They are different BIS routes. Scheme I commonly relates to use of the Standard Mark, CRS covers notified electronics and IT goods, and FMCS applies to eligible foreign manufacturers outside the CRS product route." },
    { question: "Can an importer obtain BIS certification without the manufacturer?", answer: "BIS product certification is generally connected to the manufacturer and manufacturing location. An importer may coordinate the process or act as an AIR where eligible, but the applicable manufacturer remains central to the application." },
    { question: "Who issues the BIS licence or registration?", answer: "The Bureau of Indian Standards is the issuing authority. Mirai Compliance provides independent assessment, documentation and application-coordination support." },
  ],
  cta: { eyebrow: "Check BIS applicability", title: "Share the product, model and manufacturing country for a scheme assessment." },
  thankYouPath: "/thankyou-bis-certification/",
};

export const wpcContent: ServicePageContent = {
  key: "wpc",
  eyebrow: "Wireless Planning & Coordination",
  title: "WPC ETA Approval Support for Wireless and RF Products",
  description: "Assess the wireless technology and frequency band used by your product, review the RF test record and prepare the documentation required for an applicable Equipment Type Approval filing.",
  audience: ["Importers", "Manufacturers", "Electronics brands", "Wireless equipment sellers"],
  overview: {
    eyebrow: "WPC ETA services",
    title: "Start with the radio technology, frequency band and product configuration.",
    description: "ETA applicability depends on what the device transmits, the frequency range it uses and whether the equipment falls within the permitted self-declaration route.",
  },
  sections: [
    { title: "Products commonly assessed", body: "Commercial finished products using wireless technologies in licence-exempt bands are commonly reviewed for ETA applicability.", points: ["Wi-Fi and Bluetooth devices", "Smartphones, laptops and tablets", "Smart watches, speakers and headsets", "Printers, scanners, cameras and other short-range devices"] },
    { title: "What Mirai provides", body: "We compare the technical documents with the applicable ETA route and organise the applicant record for submission.", points: ["Device and frequency-band assessment", "RF test-report and technical-literature review", "Applicant and manufacturer-authorisation documents", "ETA application and clarification support"] },
    { title: "Technical review before filing", body: "Product names, model numbers, frequency ranges and manufacturer details should remain consistent across the application record.", points: ["RF technologies and operating bands", "Test standard, laboratory and report details", "Model and brand consistency", "Importer or authorised Indian representative information"] },
    { title: "When the standard route may not apply", body: "Radar, jamming devices, drones, satellite equipment and products outside licence-exempt bands can require a different regulatory assessment.", points: ["Product-specific WPC or DoT requirement review", "Import and market-use context", "Additional licence or authorisation assessment", "Clarification of the appropriate next filing"] },
  ],
  processIntro: { eyebrow: "WPC ETA work plan", title: "From frequency assessment to an organised ETA application.", description: "We check the technical record first so product and applicant details remain consistent in the filing." },
  process: ["Review the product", "Confirm RF bands", "Check the test report", "Prepare the ETA filing", "Coordinate clarifications"],
  documentsIntro: { eyebrow: "WPC document checklist", title: "RF evidence and applicant information for ETA review.", description: "The final requirement depends on the product and whether the applicant is the importer, manufacturer or authorised representative." },
  documents: ["RF test report", "Product technical literature or datasheet", "Model, brand and product photographs where applicable", "Manufacturer authorisation for the Indian representative", "Certificate of incorporation or business registration", "IEC and GST details for importers", "Applicant identity and authorised-signatory details", "Existing WPC or related approvals where applicable"],
  faqIntro: { eyebrow: "WPC ETA questions", title: "Applicability, reports and filing responsibility." },
  faqs: [
    { question: "Which products may require WPC ETA?", answer: "Eligible commercial finished products using radio technologies in licence-exempt frequency bands—such as many Wi-Fi or Bluetooth devices—may require ETA review before import, sale or use in India." },
    { question: "Is an RF test report required?", answer: "An RF test report is a core document for the ETA service. The report and technical literature should identify the relevant technology, frequency range, model and manufacturer consistently." },
    { question: "Can every wireless product use the self-declaration route?", answer: "No. The DoT identifies exceptions and products that may require another route, including radar, jamming devices, drones and satellite equipment. Applicability should be checked for the exact product." },
    { question: "Who issues ETA?", answer: "ETA is issued by the WPC Wing of the Department of Telecommunications. Mirai provides independent technical-document and application support." },
  ],
  cta: { eyebrow: "Check WPC ETA applicability", title: "Share the product datasheet and RF test report for an initial review." },
  thankYouPath: "/thankyou-wpc-eta-approval/",
};

export const trademarkContent: ServicePageContent = {
  key: "trademark",
  eyebrow: "Trademark Registration",
  title: "Trademark Search, Classification and Filing Support in India",
  description: "Prepare a trademark application for a name, logo or other eligible brand identifier with preliminary search, class selection, applicant-document review, TM-A filing and application tracking.",
  audience: ["Startups and founders", "Companies and firms", "Product brands", "Service businesses"],
  overview: {
    eyebrow: "Trademark filing services",
    title: "Define the mark, owner and commercial scope before filing.",
    description: "A stronger application begins with the correct applicant, a clear representation of the mark and classes that match the goods or services the business intends to protect.",
  },
  sections: [
    { title: "Marks and applicants supported", body: "Individuals and organisations can apply for eligible brand identifiers used or proposed to be used for specified goods or services.", points: ["Business and product names", "Logos and device marks", "Taglines and other eligible identifiers", "Individuals, startups, firms, companies and foreign applicants"] },
    { title: "What Mirai provides", body: "We organise the search, classification and filing information needed for a trademark application.", points: ["Preliminary availability and similarity search", "Nice class and goods or services description guidance", "Word-mark or logo-filing assessment", "TM-A preparation, filing and status tracking"] },
    { title: "Information decided before filing", body: "The application scope depends on ownership, the mark format, the selected classes and whether prior use is claimed.", points: ["Correct proprietor or applicant", "Word, logo or combined representation", "Single-class or multi-class scope", "Proposed-to-be-used or prior-use claim"] },
    { title: "Support after application", body: "Filing creates an application number but does not guarantee registration. The Registry may examine the application or require a response.", points: ["Application-status monitoring", "Examination-report coordination", "Objection-response document support", "Hearing or opposition coordination with an appropriate professional where required"] },
  ],
  processIntro: { eyebrow: "Trademark work plan", title: "From preliminary search to application tracking.", description: "Each filing is prepared around the proprietor, mark representation and selected classes." },
  process: ["Understand the mark", "Search similar records", "Select the classes", "Prepare and file TM-A", "Track examination"],
  documentsIntro: { eyebrow: "Trademark document checklist", title: "Applicant, mark and use information to keep ready.", description: "The required record changes according to the applicant category and whether the mark is already in use." },
  documents: ["Applicant identity and address details", "Certificate of incorporation, partnership or business proof", "Clear word mark, logo or device representation", "Description of the relevant goods or services", "Startup or MSME proof where applicable", "Prior-use date, affidavit and supporting evidence where claimed", "Authorisation or power of attorney where applicable", "Priority or foreign-application information where applicable"],
  faqIntro: { eyebrow: "Trademark questions", title: "Search, classes and the application process." },
  faqs: [
    { question: "Does a trademark search guarantee registration?", answer: "No. A preliminary search helps identify similar records, but the Trade Marks Registry examines the application and third parties may oppose it after publication." },
    { question: "How are trademark classes selected?", answer: "Trademark applications identify goods and services through the Nice Classification. Classes 1–34 cover goods and classes 35–45 cover services; the selected descriptions should reflect the required commercial scope." },
    { question: "Can a name and logo be filed separately?", answer: "Yes. Separate word-mark and logo applications may offer different scopes of protection. The appropriate approach depends on how the brand is used and what the applicant wants to protect." },
    { question: "What happens after TM-A filing?", answer: "The application is assigned a number and proceeds through formal and substantive examination. It may be accepted, queried or objected to, and accepted applications are published for possible opposition before registration." },
  ],
  cta: { eyebrow: "Prepare your trademark filing", title: "Share the proposed name or logo and the goods or services it will identify." },
  thankYouPath: "/thankyou-consultation/",
};

export const trustPoints = [
  { title: "Applicability and route assessment", body: "We identify the relevant registration, certification scheme or filing route before documents are prepared.", icon: FileCheck2 },
  { title: "Documents, testing and filing", body: "We create the checklist, review the supporting record and coordinate application or testing requirements.", icon: PackageCheck },
  { title: "Queries and ongoing compliance", body: "We support authority clarifications, status communication, returns, renewals and updates where they apply.", icon: Globe2 },
];
