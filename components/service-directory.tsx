"use client";

import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { serviceCards } from "@/lib/content";
import { useDeferredValue, useState } from "react";
import styles from "./marketing.module.css";

export function SearchableServiceDirectory() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const matches = serviceCards.filter((service) => `${service.title} ${service.summary}`.toLowerCase().includes(deferredQuery));

  return <div>
    <label className={styles.serviceSearch}><Search aria-hidden="true" /><span className="sr-only">Search services</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by service or requirement" /></label>
    {matches.length ? <div className={styles.serviceGrid}>{matches.map(({ key, title, summary, href, icon: Icon }) =>
      <Link href={href} className={styles.serviceCard} key={key}>
        <span className={styles.iconBox}><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{summary}</p><span className={styles.cardLink}>Explore service <ArrowUpRight size={16} aria-hidden="true" /></span>
      </Link>)}</div> : <p className={styles.noServices}>No exact match. Tell us about the product or activity in your enquiry.</p>}
  </div>;
}
