"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ClipboardList, FileSearch, Phone, PhoneCall } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { contact, type ServiceKey } from "@/lib/content";
import { leadSuccessStorageKey } from "@/lib/lead-feedback";
import { TrackedLink } from "./tracked-link";
import styles from "./marketing.module.css";

const nextSteps = [
  { title: "We review the enquiry", body: "The product, activity and requested service are checked first.", icon: FileSearch },
  { title: "A consultant contacts you", body: "We use the phone number or email supplied with the form.", icon: PhoneCall },
  { title: "You receive the next steps", body: "We outline the information and documents needed to proceed.", icon: ClipboardList },
];

export function ThankYouExperience({ service, serviceKey }: { service: string; serviceKey: ServiceKey }) {
  useEffect(() => {
    try {
      const expectedPath = sessionStorage.getItem(leadSuccessStorageKey);
      if (expectedPath === window.location.pathname) {
        sessionStorage.removeItem(leadSuccessStorageKey);
        toast.success("Enquiry received", { id: "lead-success", description: "We’ll review your details and contact you shortly." });
      }
    } catch {
      // Storage may be unavailable in privacy-restricted browsers; the page remains the confirmation.
    }
  }, []);

  return <main className={styles.thankYou}>
    <motion.section
      className={styles.thankYouPanel}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.thankYouMain}>
        <motion.span className={styles.statusSeal} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.12, type: "spring", stiffness: 240, damping: 18 }}>
          <CheckCircle2 aria-hidden="true" />
        </motion.span>
        <span className={styles.thankYouKicker}>Enquiry received</span>
        <h1>Thank you. We have your request.</h1>
        <p>We have received your {service} enquiry. A consultant will review the details and contact you using the information provided.</p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} href="/">Return home <ArrowRight size={18} /></Link>
          <TrackedLink className={styles.secondaryButton} href={contact.phoneHref} eventName="phone_click" service={serviceKey}><Phone size={17} /> Call {contact.phoneDisplay}</TrackedLink>
        </div>
      </div>
      <aside className={styles.nextSteps}>
        <span>What happens next</span>
        <ol>{nextSteps.map(({ title, body, icon: Icon }, index) => <motion.li key={title} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.18 + index * 0.08, duration: 0.38 }}><Icon aria-hidden="true" /><div><strong>{title}</strong><p>{body}</p></div></motion.li>)}</ol>
      </aside>
    </motion.section>
  </main>;
}
