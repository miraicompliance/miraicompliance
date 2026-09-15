"use server";

import { createHash, randomUUID } from "node:crypto";
import { Resend } from "resend";
import { z } from "zod";
import type { ServiceKey } from "@/lib/content";

export type LeadFormState = {
  status: "idle" | "error" | "success";
  message: string;
  thankYouPath?: string;
};

export type LeadSubmission = {
  name: string;
  email: string;
  phone: string;
  message?: string;
  service: ServiceKey;
  landingPath: string;
  referrer?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  consent: true;
};

const leadSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(24).regex(/^[+()\-\s0-9]+$/, "Enter a valid phone number"),
  message: z.string().trim().max(1200).optional(),
  service: z.enum(["epr", "lmpc", "bis", "wpc", "trademark", "general"]),
  landingPath: z.string().trim().startsWith("/").max(180),
  referrer: z.string().trim().max(500).optional(),
  gclid: z.string().trim().max(220).optional(),
  gbraid: z.string().trim().max(220).optional(),
  wbraid: z.string().trim().max(220).optional(),
  utmSource: z.string().trim().max(160).optional(),
  utmMedium: z.string().trim().max(160).optional(),
  utmCampaign: z.string().trim().max(220).optional(),
  utmTerm: z.string().trim().max(220).optional(),
  utmContent: z.string().trim().max(220).optional(),
  consent: z.literal("on"),
});

const thankYouPaths: Record<ServiceKey, string> = {
  epr: "/thanyou-epr-consultant/",
  lmpc: "/thankyou-lmpc/",
  bis: "/thankyou-bis-certification/",
  wpc: "/thankyou-wpc-eta-approval/",
  trademark: "/",
  general: "/",
};

const runtime = globalThis as typeof globalThis & { miraiLeadDedupe?: Map<string, number> };
runtime.miraiLeadDedupe ??= new Map<string, number>();
const leadDedupe = runtime.miraiLeadDedupe;

function value(formData: FormData, key: string) {
  const entry = formData.get(key);
  return typeof entry === "string" ? entry : "";
}

function escapeHtml(input: string) {
  return input.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] ?? character);
}

export async function submitLead(_: LeadFormState, formData: FormData): Promise<LeadFormState> {
  const service = value(formData, "service") as ServiceKey;
  const fallbackPath = thankYouPaths[service] ?? "/";

  if (value(formData, "website")) return { status: "success", message: "Thank you.", thankYouPath: fallbackPath };

  const startedAt = Number(value(formData, "startedAt"));
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1200) {
    return { status: "error", message: "Please wait a moment and try again." };
  }

  const parsed = leadSchema.safeParse({
    name: value(formData, "name"), email: value(formData, "email"), phone: value(formData, "phone"),
    message: value(formData, "message") || undefined, service: value(formData, "service"),
    landingPath: value(formData, "landingPath"), referrer: value(formData, "referrer") || undefined,
    gclid: value(formData, "gclid") || undefined, gbraid: value(formData, "gbraid") || undefined, wbraid: value(formData, "wbraid") || undefined,
    utmSource: value(formData, "utmSource") || undefined, utmMedium: value(formData, "utmMedium") || undefined,
    utmCampaign: value(formData, "utmCampaign") || undefined, utmTerm: value(formData, "utmTerm") || undefined,
    utmContent: value(formData, "utmContent") || undefined, consent: value(formData, "consent"),
  });

  if (!parsed.success) return { status: "error", message: parsed.error.issues[0]?.message ?? "Check the highlighted information." };

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL ?? "Mirai Compliance <forms@miraicompliance.com>";
  const configuredRecipients = process.env.LEAD_TO_EMAIL ?? "contact@miraicompliance.com";
  const to = [...new Set(configuredRecipients.split(",").map((email) => email.trim()).filter(Boolean))];
  if (!to.length) to.push("contact@miraicompliance.com");
  if (!apiKey) return { status: "error", message: "Online enquiries are temporarily unavailable. Please call or use WhatsApp." };

  const lead: LeadSubmission = { ...parsed.data, consent: true };
  const dedupeKey = createHash("sha256").update(`${lead.service}|${lead.email.toLowerCase()}|${lead.phone}`).digest("hex");
  const lastSent = leadDedupe.get(dedupeKey);
  if (lastSent && Date.now() - lastSent < 10 * 60 * 1000) return { status: "success", message: "Your enquiry has already been received.", thankYouPath: fallbackPath };

  const leadId = randomUUID();
  const attribution = [lead.gclid && `GCLID: ${lead.gclid}`, lead.gbraid && `GBRAID: ${lead.gbraid}`, lead.wbraid && `WBRAID: ${lead.wbraid}`, lead.utmSource && `Source: ${lead.utmSource}`, lead.utmMedium && `Medium: ${lead.utmMedium}`, lead.utmCampaign && `Campaign: ${lead.utmCampaign}`, lead.utmTerm && `Term: ${lead.utmTerm}`, lead.utmContent && `Content: ${lead.utmContent}`].filter(Boolean) as string[];

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from, to, replyTo: lead.email, subject: `New ${lead.service.toUpperCase()} enquiry · ${leadId.slice(0, 8)}`,
      html: `<h1>New consultation request</h1><p><strong>Service:</strong> ${escapeHtml(lead.service.toUpperCase())}</p><p><strong>Name:</strong> ${escapeHtml(lead.name)}<br><strong>Email:</strong> ${escapeHtml(lead.email)}<br><strong>Phone:</strong> ${escapeHtml(lead.phone)}</p><p><strong>Message:</strong><br>${escapeHtml(lead.message || "Not provided").replace(/\n/g, "<br>")}</p><p><strong>Landing page:</strong> ${escapeHtml(lead.landingPath)}<br><strong>Referrer:</strong> ${escapeHtml(lead.referrer || "Direct")}</p>${attribution.length ? `<p><strong>Attribution:</strong><br>${attribution.map(escapeHtml).join("<br>")}</p>` : ""}<p>Lead ID: ${leadId}</p>`,
    });
    if (result.error) return { status: "error", message: "We could not send your enquiry. Please call or use WhatsApp." };
  } catch {
    return { status: "error", message: "We could not send your enquiry. Please call or use WhatsApp." };
  }
  leadDedupe.set(dedupeKey, Date.now());
  return { status: "success", message: "Your enquiry has been received.", thankYouPath: fallbackPath };
}
