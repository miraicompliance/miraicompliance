"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  eventName?: "phone_click" | "whatsapp_click" | "email_click";
  service?: string;
};

export function TrackedLink({ children, eventName, service = "general", onClick, ...props }: Props) {
  return <a {...props} onClick={(event) => {
    if (eventName) sendGTMEvent({ event: eventName, service, landing_path: window.location.pathname });
    onClick?.(event);
  }}>{children}</a>;
}
