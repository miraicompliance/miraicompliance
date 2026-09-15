import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Factory, Package, Pill, RadioTower, Recycle, ShoppingBag } from "lucide-react";
import { Footer, Header, ServiceDirectory } from "@/components/site-shell";
import { contact, trustPoints } from "@/lib/content";
import { TrackedLink } from "@/components/tracked-link";
import { Reveal } from "@/components/reveal";
import { LeadForm } from "@/components/lead-form";
import styles from "@/components/marketing.module.css";

export const metadata: Metadata = {
  title: "BIS, EPR, LMPC, WPC & Trademark Consultants in India",
  description: "Application, documentation and ongoing compliance support for BIS, EPR, LMPC, WPC ETA and trademark requirements in India.",
  alternates: { canonical: "/" },
};

const industries = [
  ["Manufacturing", Factory], ["Electronics", RadioTower], ["Consumer goods", ShoppingBag],
  ["Packaging", Package], ["Recycling", Recycle], ["Healthcare", Pill],
] as const;

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org", "@type": "Organization", name: "Mirai Compliance",
    url: "https://miraicompliance.com/", logo: "https://miraicompliance.com/images/mirai-logo.png",
    email: contact.email, telephone: contact.phoneDisplay,
    address: { "@type": "PostalAddress", streetAddress: "Best Sky Tower, NSP, Pitampura", addressLocality: "Delhi", postalCode: "110034", addressCountry: "IN" },
  };
  return <><Header /><main>
    <section className={`${styles.hero} ${styles.homeHero}`}>
      <Reveal className={styles.heroCopy}>
        <span className={styles.eyebrow}>BIS • EPR • LMPC • WPC • Trademark</span>
        <h1>Compliance registrations and certification support for businesses in India.</h1>
        <p>Mirai Compliance assists manufacturers, importers, brand owners, startups and e-commerce businesses with applicability checks, document preparation, application filing, regulatory query coordination and ongoing compliance.</p>
        <div className={styles.heroActions}>
          <Link href="#enquiry" className={styles.primaryButton}>Fill the enquiry form <ArrowRight size={18} /></Link>
          <TrackedLink href={contact.phoneHref} eventName="phone_click" className={styles.secondaryButton}>Call {contact.phoneDisplay}</TrackedLink>
        </div>
        <div className={styles.heroProof}><span><Check size={16} /> Service-specific assessment</span><span><Check size={16} /> Documentation and filing support</span></div>
      </Reveal>
      <Reveal className={`${styles.serviceFormWrap} ${styles.homeFormWrap}`} id="enquiry" delay={0.08}><LeadForm service="general" title="Tell us what you need help with" selectableService /></Reveal>
    </section>
    <section className={styles.logoRail} aria-label="Core service areas"><span>BIS certification</span><span>EPR compliance</span><span>LMPC registration</span><span>WPC ETA</span><span>Trademark filing</span></section>
    <section className={styles.section} id="services">
      <Reveal className={styles.sectionHeading}><div><span className={styles.eyebrow}>Five focused services</span><h2>Expert Guidance for Certifications &amp; Statutory Compliance</h2></div><p>Choose the registration or certification you need. Each service covers applicability, the required record, application coordination and relevant post-filing support.</p></Reveal>
      <Reveal delay={0.06}><ServiceDirectory /></Reveal>
    </section>
    <section className={styles.darkSection} id="about">
      <Reveal className={styles.sectionHeadingDark}><div><span className={styles.eyebrow}>Defined scope of work</span><h2>What Mirai Compliance Handles for You</h2></div><p>Our role covers the practical work around a regulatory application while the relevant government authority retains control over review, timelines and approval.</p></Reveal>
      <Reveal className={styles.trustGrid} delay={0.06}>{trustPoints.map(({ title, body, icon: Icon }) => <article key={title}><Icon /><h3>{title}</h3><p>{body}</p></article>)}</Reveal>
    </section>
    <section className={styles.processSection} id="process">
      <Reveal className={styles.processCopy}><span className={styles.eyebrow}>A practical compliance workflow</span><h2>Helping Businesses Stay Compliant—the Right Way</h2>
        <ol className={styles.steps}><li><span>01</span><div><strong>Assess applicability</strong><p>We review the product, activity, applicant role and target market.</p></div></li><li><span>02</span><div><strong>Prepare and file</strong><p>We provide the checklist, review the record and coordinate the application.</p></div></li><li><span>03</span><div><strong>Respond and maintain</strong><p>We support regulatory queries and applicable returns, renewals or updates.</p></div></li></ol>
      </Reveal>
      <Reveal className={styles.processArt} delay={0.06}><Image src="/images/compliance-process.png" alt="Five-step compliance workflow illustration" width={2172} height={724} /></Reveal>
    </section>
    <section className={styles.section} id="industries">
      <Reveal className={styles.sectionHeading}><div><span className={styles.eyebrow}>Industry context matters</span><h2>Support shaped around your product and market.</h2></div><p>Our work spans regulated products, packaging, equipment and business operations across India.</p></Reveal>
      <Reveal className={styles.industryGrid} delay={0.06}>{industries.map(([name, Icon]) => <div key={name}><Icon /><span>{name}</span></div>)}</Reveal>
    </section>
    <section className={styles.consultation} id="consultation">
      <div><span className={styles.eyebrow}>Discuss a requirement</span><h2>Have a product, label or application to review?</h2><p>Use the enquiry form to identify the service and share the requirement, or continue on WhatsApp for a direct conversation.</p></div>
      <div className={styles.consultationActions}><Link href="#enquiry" className={styles.primaryButton}>Open enquiry form <ArrowRight size={18} /></Link><TrackedLink href={contact.whatsapp} eventName="whatsapp_click" target="_blank" rel="noreferrer" className={styles.secondaryButton}>Continue on WhatsApp</TrackedLink></div>
    </section>
  </main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></>;
}
