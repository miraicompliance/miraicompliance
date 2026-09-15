import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Factory, Package, Pill, RadioTower, Recycle, ShoppingBag } from "lucide-react";
import { Footer, Header, ServiceDirectory } from "@/components/site-shell";
import { contact, trustPoints } from "@/lib/content";
import { TrackedLink } from "@/components/tracked-link";
import { Reveal } from "@/components/reveal";
import styles from "@/components/marketing.module.css";

export const metadata: Metadata = {
  title: "Compliance & Certification Consultants in India",
  description: "Practical support for BIS, EPR, LMPC, WPC, trademark and business compliance requirements in India.",
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
    address: { "@type": "PostalAddress", streetAddress: "Mangolpuri", addressLocality: "Delhi", postalCode: "110083", addressCountry: "IN" },
  };
  return <><Header /><main>
    <section className={styles.hero}>
      <Reveal className={styles.heroCopy}>
        <span className={styles.eyebrow}>Regulatory clarity for growing businesses</span>
        <h1>Compliance should move your business forward.</h1>
        <p>Mirai Compliance helps manufacturers, importers and brands understand requirements, prepare documentation and manage regulatory applications with confidence.</p>
        <div className={styles.heroActions}>
          <Link href="#consultation" className={styles.primaryButton}>Discuss your requirement <ArrowRight size={18} /></Link>
          <TrackedLink href={contact.phoneHref} eventName="phone_click" className={styles.secondaryButton}>Call {contact.phoneDisplay}</TrackedLink>
        </div>
        <div className={styles.heroProof}><span><Check size={16} /> Requirement-first guidance</span><span><Check size={16} /> Clear documentation support</span></div>
      </Reveal>
      <Reveal className={styles.heroArt} delay={0.08}>
        <span className={styles.artLabel}>Structured. Transparent. Accountable.</span>
        <Image src="/images/hero-compliance.png" alt="Documents, verification seal and compliance shield illustration" width={1448} height={1086} priority />
      </Reveal>
    </section>
    <section className={styles.logoRail} aria-label="Core service areas"><span>BIS</span><span>EPR</span><span>LMPC</span><span>WPC</span><span>Trademark</span><span>Business compliance</span></section>
    <section className={styles.section} id="services">
      <Reveal className={styles.sectionHeading}><div><span className={styles.eyebrow}>Focused expertise</span><h2>Start with the requirement in front of you.</h2></div><p>Choose a service or tell us what you manufacture, import or sell. We will help identify the appropriate next step.</p></Reveal>
      <Reveal delay={0.06}><ServiceDirectory /></Reveal>
    </section>
    <section className={styles.darkSection} id="about">
      <Reveal className={styles.sectionHeadingDark}><div><span className={styles.eyebrow}>Why Mirai</span><h2>Advice grounded in the actual process.</h2></div><p>Regulatory work is easier to manage when responsibilities, documents and dependencies are visible from the beginning.</p></Reveal>
      <Reveal className={styles.trustGrid} delay={0.06}>{trustPoints.map(({ title, body, icon: Icon }) => <article key={title}><Icon /><h3>{title}</h3><p>{body}</p></article>)}</Reveal>
    </section>
    <section className={styles.processSection} id="process">
      <Reveal className={styles.processCopy}><span className={styles.eyebrow}>A practical workflow</span><h2>From uncertainty to an organised application.</h2>
        <ol className={styles.steps}><li><span>01</span><div><strong>Understand</strong><p>We review the product, business activity and target market.</p></div></li><li><span>02</span><div><strong>Prepare</strong><p>We build a clear checklist and review the supporting record.</p></div></li><li><span>03</span><div><strong>Coordinate</strong><p>We support filing, responses and status communication.</p></div></li></ol>
      </Reveal>
      <Reveal className={styles.processArt} delay={0.06}><Image src="/images/compliance-process.png" alt="Five-step compliance workflow illustration" width={2172} height={724} /></Reveal>
    </section>
    <section className={styles.section} id="industries">
      <Reveal className={styles.sectionHeading}><div><span className={styles.eyebrow}>Industry context matters</span><h2>Support shaped around your product and market.</h2></div><p>Our work spans regulated products, packaging, equipment and business operations across India.</p></Reveal>
      <Reveal className={styles.industryGrid} delay={0.06}>{industries.map(([name, Icon]) => <div key={name}><Icon /><span>{name}</span></div>)}</Reveal>
    </section>
    <section className={styles.consultation} id="consultation">
      <div><span className={styles.eyebrow}>Start with a conversation</span><h2>Tell us what you are trying to bring to market.</h2><p>Share the product, business activity or compliance question. A consultant will review the requirement and respond with the next practical step.</p></div>
      <div className={styles.consultationActions}><TrackedLink href={`mailto:${contact.email}`} eventName="email_click" className={styles.primaryButton}>Email your requirement <ArrowRight size={18} /></TrackedLink><TrackedLink href={contact.whatsapp} eventName="whatsapp_click" target="_blank" rel="noreferrer" className={styles.secondaryButton}>Continue on WhatsApp</TrackedLink></div>
    </section>
  </main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /></>;
}
