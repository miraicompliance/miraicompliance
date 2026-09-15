"use client";

import type { ReactNode } from "react";
import { CircleAlert, CircleCheck } from "lucide-react";
import { MotionConfig } from "motion/react";
import { Toaster } from "sonner";
import styles from "./marketing.module.css";

export function UiFeedback({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">
    {children}
    <Toaster
      position="top-right"
      closeButton
      icons={{
        success: <CircleCheck size={18} aria-hidden="true" />,
        error: <CircleAlert size={18} aria-hidden="true" />,
      }}
      toastOptions={{
        duration: 5000,
        classNames: {
          toast: styles.toast,
          title: styles.toastTitle,
          description: styles.toastDescription,
          icon: styles.toastIcon,
          closeButton: styles.toastClose,
        },
      }}
    />
  </MotionConfig>;
}
