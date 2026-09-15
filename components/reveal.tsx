"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export function Reveal({ children, className, id, delay = 0, amount = 0.16 }: { children: ReactNode; className?: string; id?: string; delay?: number; amount?: number }) {
  return <motion.div
    className={className}
    id={id}
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
  >{children}</motion.div>;
}
