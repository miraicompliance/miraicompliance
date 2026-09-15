import type { Metadata } from "next";
import { Mail } from "lucide-react";
import type { PolicySection } from "@/lib/policies";
import { contact } from "@/lib/content";
import { Footer, Header } from "./site-shell";
import { TrackedLink } from "./tracked-link";
import styles from "./marketing.module.css";

export function policyMetadata(title: string, description: string, canonical: string): Metadata {
  return { title, description, alternates: { canonical }, openGraph: { title, description, url: canonical } };
}

export function PolicyPage({ eyebrow, title, introduction, sections }: { eyebrow: string; title: string; introduction: string; sections: PolicySection[] }) {
  return <>
    <Header />
    <main>
      <section className={styles.policyHero}><span className={styles.eyebrow}>{eyebrow}</span><h1>{title}</h1><p>{introduction}</p><span>Last updated: 15 September 2026</span></section>
      <section className={styles.policyBody}>
        {sections.map((section) => <article key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.points ? <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul> : null}</article>)}
        <aside><Mail aria-hidden="true" /><div><h2>Contact us</h2><p>Questions about this policy can be sent to <TrackedLink href={`mailto:${contact.email}`} eventName="email_click">{contact.email}</TrackedLink>.</p></div></aside>
      </section>
    </main>
    <Footer />
  </>;
}
