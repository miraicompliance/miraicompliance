import Image from "next/image";
import Link from "next/link";
import { Mail, Menu, Phone, X } from "lucide-react";
import { contact, serviceCards } from "@/lib/content";
import { TrackedLink } from "./tracked-link";
import { SearchableServiceDirectory } from "./service-directory";
import styles from "./marketing.module.css";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return <Link href="/" className={styles.logo} aria-label="Mirai Compliance home">
    <span className={`${styles.logoArt} ${inverse ? styles.logoInverse : ""}`}>
      <Image src="/images/mirai-logo.png" alt="Mirai Compliance" width={1238} height={312} priority className={styles.logoBase} />
      <span className={styles.logoMark} aria-hidden="true"><Image src="/images/mirai-logo.png" alt="" width={1238} height={312} priority /></span>
    </span>
  </Link>;
}

export function Header({ minimal = false, service = "general" }: { minimal?: boolean; service?: string }) {
  return <header className={styles.header}><div className={styles.headerInner}>
    <Logo />
    {!minimal ? <nav className={styles.desktopNav} aria-label="Primary navigation">
      <details className={styles.servicesMenu}><summary>Services</summary><div>{serviceCards.slice(0, 5).map((service) => <Link href={service.href} key={service.key}>{service.title}</Link>)}</div></details><Link href="/#process">How it works</Link><Link href="/#industries">Industries</Link><Link href="/#about">About</Link>
    </nav> : <span className={styles.independentTag}>Independent consultancy</span>}
    <TrackedLink href={contact.phoneHref} eventName="phone_click" service={service} className={styles.headerPhone}><Phone size={17} aria-hidden="true" /> {contact.phoneDisplay}</TrackedLink>
    {!minimal ? <details className={styles.mobileMenu}>
      <summary aria-label="Open navigation"><Menu aria-hidden="true" /><X aria-hidden="true" /></summary>
      <nav aria-label="Mobile navigation"><Link href="/#services">All services</Link>{serviceCards.slice(0, 5).map((item) => <Link href={item.href} key={item.key}>{item.title}</Link>)}<Link href="/#process">How it works</Link><Link href="/#industries">Industries</Link><Link href="/#about">About</Link><TrackedLink href={contact.phoneHref} eventName="phone_click" service={service}>Call {contact.phoneDisplay}</TrackedLink></nav>
    </details> : null}
  </div></header>;
}

export function Footer({ service = "general" }: { service?: string }) {
  return <footer className={styles.footer}>
    <div className={styles.footerGrid}>
      <div><Logo inverse /><p className={styles.footerIntro}>Clear, structured support for regulatory registrations, certifications and compliance documentation.</p></div>
      <div><h2>Services</h2><ul>{serviceCards.slice(0, 5).map((item) => <li key={item.key}><Link href={item.href}>{item.title}</Link></li>)}</ul></div>
      <div><h2>Information</h2><ul><li><Link href="/privacy-policy/">Privacy policy</Link></li><li><Link href="/terms-conditions/">Terms & conditions</Link></li><li><Link href="/refund-and-cancellations-policy/">Refund policy</Link></li></ul></div>
      <div><h2>Contact</h2><ul>
        <li><TrackedLink href={contact.phoneHref} eventName="phone_click" service={service}><Phone size={15} /> {contact.phoneDisplay}</TrackedLink></li>
        <li><TrackedLink href={`mailto:${contact.email}`} eventName="email_click" service={service}><Mail size={15} /> {contact.email}</TrackedLink></li>
        <li>{contact.address}</li>
      </ul></div>
    </div>
    <div className={styles.disclaimer}><strong>Important:</strong> Mirai Compliance is an independent private consulting and advisory firm. We do not issue government certificates, licences, registrations or official documents. Decisions remain with the relevant authorities.</div>
    <div className={styles.footerBottom}><span>© {new Date().getFullYear()} Mirai Compliance</span><span>Compliance today. Clarity tomorrow.</span></div>
  </footer>;
}

export function ServiceDirectory() {
  return <SearchableServiceDirectory />;
}
