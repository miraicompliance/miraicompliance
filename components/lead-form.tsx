"use client";

import { useActionState, useEffect, useRef } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { submitLead, type LeadFormState } from "@/app/actions";
import { leadServiceOptions, type ServiceKey } from "@/lib/content";
import { leadSuccessStorageKey } from "@/lib/lead-feedback";
import styles from "./marketing.module.css";

const initialState: LeadFormState = { status: "idle", message: "" };
const attributionFields = {
  gclid: "gclid", gbraid: "gbraid", wbraid: "wbraid", utmSource: "utm_source",
  utmMedium: "utm_medium", utmCampaign: "utm_campaign", utmTerm: "utm_term", utmContent: "utm_content",
} as const;

export function LeadForm({ service, title = "Request a consultation", selectableService = false }: { service: ServiceKey; title?: string; selectableService?: boolean }) {
  const [state, action, pending] = useActionState(submitLead, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const redirected = useRef(false);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    const assign = (name: string, value: string) => {
      const field = form.elements.namedItem(name);
      if (field instanceof HTMLInputElement) field.value = value;
    };
    const params = new URLSearchParams(window.location.search);
    assign("startedAt", Date.now().toString());
    assign("landingPath", window.location.pathname);
    assign("referrer", document.referrer);
    Object.entries(attributionFields).forEach(([field, parameter]) => assign(field, params.get(parameter) ?? ""));
  }, []);

  useEffect(() => {
    const eventService = state.submittedService ?? service;
    if (state.status === "success" && state.thankYouPath && !redirected.current) {
      redirected.current = true;
      try { sessionStorage.setItem(leadSuccessStorageKey, state.thankYouPath); } catch { /* The redirect remains authoritative. */ }
      sendGTMEvent({ event: "generate_lead", service: eventService, landing_path: window.location.pathname });
      window.location.assign(state.thankYouPath);
    } else if (state.status === "error") {
      sendGTMEvent({ event: "lead_submit_error", service: eventService, landing_path: window.location.pathname });
      toast.error("Enquiry not sent", { id: `lead-error-${eventService}`, description: state.message });
    }
  }, [service, state]);

  return <form ref={formRef} action={action} className={styles.leadForm}>
    <div className={styles.formHeading}><span className={styles.eyebrow}>Private enquiry</span><h2>{title}</h2><p>Share a few details and a consultant will respond.</p></div>
    {selectableService ? <label>Service required<select name="service" defaultValue="general">{leadServiceOptions.map((option) => <option value={option.value} key={option.value}>{option.label}</option>)}</select></label> : <input type="hidden" name="service" value={service} />}
    <input type="hidden" name="startedAt" defaultValue="" />
    <input type="hidden" name="landingPath" defaultValue="/" /><input type="hidden" name="referrer" defaultValue="" />
    {Object.keys(attributionFields).map((key) => <input type="hidden" name={key} defaultValue="" key={key} />)}
    <div className={styles.formRow}><label>Name<input name="name" autoComplete="name" required minLength={2} /></label><label>Work email<input name="email" type="email" autoComplete="email" required /></label></div>
    <label>Phone number<input name="phone" type="tel" autoComplete="tel" required /></label>
    <label>What do you need help with?<textarea name="message" rows={4} maxLength={1200} /></label>
    <label className={styles.honeypot} aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label className={styles.consent}><input type="checkbox" name="consent" required /> <span>I agree to be contacted about this enquiry and have read the <a href="/privacy-policy/">privacy policy</a>.</span></label>
    <button type="submit" disabled={pending}>{pending ? <><LoaderCircle className={styles.spinner} /> Sending…</> : <>Send enquiry <ArrowRight size={18} /></>}</button>
    <p className="sr-only" aria-live="polite">{state.message}</p>
  </form>;
}
