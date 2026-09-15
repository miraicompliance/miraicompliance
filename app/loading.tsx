import styles from "@/components/marketing.module.css";

export default function Loading() {
  return <main className={styles.loadingPage} role="status" aria-live="polite">
    <span className="sr-only">Loading page</span>
    <div className={styles.loadingHeader}><span className={styles.skeletonLogo} /><span className={styles.skeletonNav} /></div>
    <section className={styles.loadingHero}>
      <div className={styles.loadingCopy}><span className={styles.skeletonEyebrow} /><span className={styles.skeletonTitle} /><span className={styles.skeletonTitleShort} /><span className={styles.skeletonText} /><span className={styles.skeletonTextShort} /><span className={styles.skeletonButton} /></div>
      <span className={styles.skeletonArt} />
    </section>
  </main>;
}
