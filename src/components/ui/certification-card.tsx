// src/components/ui/certification-card.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
  cert: Certification;
}

export function CertificationCard({ cert }: CertificationCardProps) {
  const { name, issuer, issueDate, credentialId, credentialUrl, logo, type } = cert;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] p-6 transition-shadow hover:border-black/20 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20"
    >
      {/* Badge */}
      <span className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ${type === "license" ? "bg-maroon-800/20 text-maroon-800 dark:bg-maroon-800/30 dark:text-maroon-300" : "bg-navy-800/20 text-navy-800 dark:bg-navy-800/30 dark:text-navy-300"}`}>
        {type}
      </span>

      {/* Logo */}
      {logo && (
        <div className="mb-4 flex items-start">
          <Image 
            src={logo} 
            alt={issuer} 
            width={48} 
            height={48} 
            className="h-12 w-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
        </div>
      )}

      <h3 className="max-w-[calc(100%-7rem)] text-lg font-semibold leading-7 text-zinc-950 dark:text-white">{name}</h3>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{issuer}</p>
      <p className="mt-3 text-xs text-zinc-500">Issued: {issueDate}</p>
      {credentialId && (
        <p className="mt-1 break-words text-xs text-zinc-500">Credential ID: {credentialId}</p>
      )}
      {credentialUrl && (
        <motion.a
          href={credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: 3 }}
          className="mt-auto inline-flex w-fit items-center gap-1 pt-5 text-sm font-medium text-maroon-800 hover:underline dark:text-maroon-300"
        >
          View Credential <ArrowUpRight size={14} aria-hidden="true" />
        </motion.a>
      )}
    </motion.div>
  );
}

