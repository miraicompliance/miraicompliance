import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer, Header } from "@/components/site-shell";
import styles from "@/components/marketing.module.css";

export default function NotFound() {
  return <><Header /><main className={styles.thankYou}><div><span className={styles.eyebrow}>404</span><h1>This page could not be found.</h1><p>The address may have changed, or the page may no longer be available.</p><div className={styles.heroActions}><Link href="/" className={styles.primaryButton}><ArrowLeft size={18} /> Return home</Link></div></div></main><Footer /></>;
}
