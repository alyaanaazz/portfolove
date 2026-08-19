// src/components/sections/certifications-section.tsx

"use client";
import { SectionReveal } from "@/components/ui/section-reveal";
import { certifications } from "@/data/certifications";
import { CertificationCard } from "@/components/ui/certification-card";
import { useState } from "react";
import type { Certification } from "@/data/certifications";

export function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);
  const sortedCerts = [...certifications].sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime());
  const displayed = showAll ? sortedCerts : sortedCerts.slice(0, 2);
  if (!certifications || certifications.length === 0) return null;

  return (
    <SectionReveal id="certifications" className="mt-16 border-t border-black/10 pt-12 dark:border-white/10 md:mt-20 md:pt-16">
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
            Licenses & Certifications
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-4xl">
            Credentials that count.
          </h2>
          <p className="mt-3 text-base text-zinc-700 dark:text-zinc-300 max-w-2xl">
            Credentials and certifications that support my work across technology.
          </p>
        </div>
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {displayed.map((cert: Certification) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
        {certifications.length > 2 && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/[0.03] px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:border-black/20 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-white dark:hover:border-white/20"
            >
              {showAll ? "Show fewer" : "See all certifications"}
            </button>
          </div>
        )}
      </div>
    </SectionReveal>
  );
}

