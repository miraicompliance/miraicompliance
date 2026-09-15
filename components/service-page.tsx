import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, FileText, Phone, ShieldCheck } from "lucide-react";
import type { ServicePageContent } from "@/lib/content";
import { contact } from "@/lib/content";
import { Footer, Header } from "./site-shell";
import { LeadForm } from "./lead-form";
import { TrackedLink } from "./tracked-link";
import { Reveal } from "./reveal";
import styles from "./marketing.module.css";

export function serviceMetadata(content: ServicePageContent, canonical: string, index = true): Metadata {
  return {
    title: content.title,
    description: content.description,
    alternates: { canonical },
    robots: { index, follow: true },
    openGraph: { title: content.title, description: content.description, url: canonical },
  };
}

export function ServicePage({ content, campaign = false }: { content: ServicePageContent; campaign?: boolean }) {
  const schema = {
    "@context": "https://schema.org", "@type": "Service", name: content.eyebrow,
    description: content.description, provider: { "@type": "Organization", name: "Mirai Compliance", url: "https://miraicompliance.com/" },
    areaServed: "India",
  };

  return <>
    <Header minimal={campaign} service={content.key} />
    <main>
      <section className={`${styles.serviceHero} ${campaign ? styles.campaignHero : ""}`}>
        <Reveal className={styles.serviceHeroCopy}>
          <span className={styles.eyebrow}>{content.eyebrow}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
          <div className={styles.audienceList}>{content.audience.map((item) => <span key={item}><Check size={15} /> {item}</span>)}</div>
          <div className={styles.heroActions}>
            <a href="#enquiry" className={styles.primaryButton}>Check your requirement <ArrowRight size={18} /></a>
            <TrackedLink href={contact.phoneHref} eventName="phone_click" service={content.key} className={styles.secondaryButton}><Phone size={17} /> Call an expert</TrackedLink>
          </div>
        </Reveal>
        <Reveal className={styles.serviceFormWrap} id="enquiry" delay={0.08}><LeadForm service={content.key} title={`Discuss ${content.eyebrow}`} /></Reveal>
      </section>

      {campaign ? <aside className={styles.campaignNotice}><ShieldCheck /><p><strong>Independent consultancy.</strong> We provide assessment, documentation and application support. Approval and timelines remain with the relevant authority.</p></aside> : null}

      <section className={styles.serviceOverview}>
        <Reveal className={styles.sectionHeading}><div><span className={styles.eyebrow}>The requirement</span><h2>Know what applies before you file.</h2></div><p>Every application starts with the product, business role and supporting record. We organise these details before work progresses.</p></Reveal>
        <Reveal className={styles.overviewGrid} delay={0.06}>{content.sections.map((section) => <article key={section.title}><h3>{section.title}</h3><p>{section.body}</p>{section.points ? <ul>{section.points.map((point) => <li key={point}><Check size={16} /> {point}</li>)}</ul> : null}</article>)}</Reveal>
      </section>

      <section className={styles.processBand}>
        <div><span className={styles.eyebrow}>How the work moves</span><h2>A clear process, one step at a time.</h2></div>
        <ol>{content.process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
      </section>

      <section className={styles.documentsSection}>
        <div className={styles.documentsArt}><Image src="/images/hero-compliance.png" alt="Organised compliance documents illustration" width={1448} height={1086} /></div>
        <div><span className={styles.eyebrow}>Prepare the record</span><h2>Common documents to keep ready.</h2><p>The final checklist depends on the applicant, product and applicable route.</p><ul>{content.documents.map((document) => <li key={document}><FileText size={17} /> {document}</li>)}</ul></div>
      </section>

      <section className={styles.faqSection}>
        <div><span className={styles.eyebrow}>Useful answers</span><h2>Questions businesses ask first.</h2></div>
        <div className={styles.faqList}>{content.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className={styles.serviceCta}><div><ClipboardCheck /><span>Start with an applicability review</span><h2>Bring the product details. We’ll help organise the next step.</h2></div><div className={styles.heroActions}><a href="#enquiry" className={styles.primaryButton}>Request consultation <ArrowRight size={18} /></a><Link href="/#services" className={styles.secondaryButton}>View other services</Link></div></section>
    </main>
    {campaign ? <div className={styles.mobileActionBar}><TrackedLink href={contact.phoneHref} eventName="phone_click" service={content.key}>Call now</TrackedLink><TrackedLink href={contact.whatsapp} eventName="whatsapp_click" service={content.key} target="_blank" rel="noreferrer">WhatsApp</TrackedLink></div> : null}
    <Footer service={content.key} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </>;
}
