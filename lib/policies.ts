export type PolicySection = {
  title: string;
  paragraphs: string[];
  points?: string[];
};

export const privacySections: PolicySection[] = [
  {
    title: "Information we collect",
    paragraphs: ["We collect information you choose to provide when you enquire about a service, including your name, email address, phone number, message and the service you are interested in."],
    points: ["Basic contact and business enquiry details", "Landing-page and referral information", "Advertising identifiers and allowlisted campaign parameters when present", "Technical information ordinarily sent by your browser"],
  },
  {
    title: "How we use information",
    paragraphs: ["We use this information to respond to enquiries, assess requested services, provide consultancy support, maintain business records, improve our website and measure campaign performance."],
  },
  {
    title: "Sharing and service providers",
    paragraphs: ["We do not sell personal information. We may share only what is reasonably required with hosting, email, analytics or professional service providers that support our operations, or where disclosure is required by law."],
  },
  {
    title: "Cookies and measurement",
    paragraphs: ["The website may use cookies and similar technologies for essential operation, analytics and advertising measurement. Campaign parameters may be retained with an enquiry so its source can be understood."],
  },
  {
    title: "Security and retention",
    paragraphs: ["We use reasonable technical and organisational safeguards. No online system can guarantee absolute security. Information is retained only for as long as reasonably needed for the enquiry, our services, legal obligations and legitimate business records."],
  },
  {
    title: "Your choices",
    paragraphs: ["You may ask about, correct or request deletion of personal information we hold, subject to applicable legal and record-keeping requirements. You may also ask us to stop marketing contact."],
  },
  {
    title: "External links and updates",
    paragraphs: ["Other websites linked from this site follow their own privacy practices. We may update this notice when our services or legal requirements change; the current version will remain published here."],
  },
];

export const termsSections: PolicySection[] = [
  {
    title: "Nature of our services",
    paragraphs: ["Mirai Compliance is an independent private consultancy. We provide assessment, documentation and application support. We are not a government authority and do not issue registrations, licences, certificates or approvals."],
  },
  {
    title: "No guarantee of outcome",
    paragraphs: ["Applications are reviewed by the relevant authority. An outcome, processing time or authority decision cannot be guaranteed. Any expected schedule is an estimate based on the information available at that time."],
  },
  {
    title: "Client responsibilities",
    paragraphs: ["You are responsible for providing complete, accurate and lawful information, documents, samples and authorisations when requested. Delays or errors caused by missing, inaccurate or late information remain the client’s responsibility."],
  },
  {
    title: "Fees and government charges",
    paragraphs: ["Professional fees, authority fees, testing charges and other third-party costs will be identified where applicable. Work may begin only after the agreed payment and required information are received."],
  },
  {
    title: "Intellectual property and site use",
    paragraphs: ["Website copy, design and original materials belong to Mirai Compliance unless stated otherwise. You may not misuse the site, interfere with its operation, submit unlawful material or reproduce protected content without permission."],
  },
  {
    title: "Liability and external services",
    paragraphs: ["To the extent permitted by law, Mirai Compliance is not responsible for indirect loss, authority decisions, third-party systems, testing outcomes or delays outside our reasonable control. External links and third-party services are governed by their own terms."],
  },
  {
    title: "Governing law and changes",
    paragraphs: ["These terms are governed by the laws of India, with disputes subject to the courts of Delhi. We may update these terms by publishing a revised version on this page."],
  },
];

export const refundSections: PolicySection[] = [
  {
    title: "Professional fees",
    paragraphs: ["Professional fees cover assessment, coordination, documentation and application work. Once work has started or resources have been allocated, those fees are ordinarily non-refundable."],
  },
  {
    title: "Government and third-party charges",
    paragraphs: ["Authority fees, testing fees, certification charges, courier charges and other third-party payments are non-refundable once paid or committed, unless the receiving organisation returns them to us."],
  },
  {
    title: "Cancellation by the client",
    paragraphs: ["A cancellation request should be sent in writing as early as possible. If no work has started and no external cost has been incurred, we will review whether a refund is available after deducting any applicable payment or administrative charges."],
  },
  {
    title: "Rejection, query or delay",
    paragraphs: ["A rejection, authority query, testing result or processing delay does not by itself create a right to a refund because the decision and timing remain with the relevant authority or third party."],
  },
  {
    title: "Events outside reasonable control",
    paragraphs: ["We are not responsible for disruption caused by authority portals, legal changes, natural events, strikes, internet failures or other events outside our reasonable control. We will communicate practical next steps where possible."],
  },
  {
    title: "Questions and disputes",
    paragraphs: ["Contact us before raising a payment dispute so we can review the service record and work completed. Approved refunds, if any, will be returned through an appropriate available payment method."],
  },
];
