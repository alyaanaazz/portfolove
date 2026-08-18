import { Award, ExternalLink, FileText } from "lucide-react";
import { SectionReveal } from "@/components/ui/section-reveal";

const awards = [
  {
    title: "Finalist of BYTESFEST 2026 Hackathon",
    context: "HMP MIKROPTIK UNS",
    year: "2026",
    description:
      "Recognized as a finalist in BYTESFEST 2026 Hackathon, organized by HMP MIKROPTIK UNS.",
    credentialUrl:
      "https://kegiatan.fkip.uns.ac.id/verify/20260726060490151",
    credentialId: "20260726060490151",
    certificateUrl:
      "https://drive.google.com/file/d/1gJxZogJ_SjnPA-UB1B4d5yE9vF25uSiW/view?usp=sharing",
  },
];

export function AwardsSection() {
  return (
    <SectionReveal
      id="awards"
      className="mt-16 border-t border-black/10 pt-12 dark:border-white/10 md:mt-20 md:pt-16"
    >
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
          Award
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-4xl">
          Recognition and milestones.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {[...awards].sort((a, b) => b.year.localeCompare(a.year)).map((award) => (
          <article
            key={award.title}
            className="rounded-2xl border border-black/10 bg-black/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-maroon-800/30 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-maroon-300/30"
          >
            <Award
              className="text-maroon-800 dark:text-maroon-300"
              size={24}
              aria-hidden="true"
            />

            <h3 className="mt-5 text-xl font-semibold text-zinc-950 dark:text-white">
              {award.title}
            </h3>

            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              {award.context} / {award.year}
            </p>

            <p className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
              {award.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={award.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-zinc-800 transition-colors hover:bg-black/[0.05] dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/[0.06]"
              >
                <ExternalLink size={15} aria-hidden="true" />
                Verify Credential
              </a>

              <a
                href={award.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02] dark:bg-white dark:text-zinc-950"
              >
                <FileText size={15} aria-hidden="true" />
                View Certificate
              </a>
            </div>

            <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
              Credential ID: {award.credentialId}
            </p>
          </article>
        ))}
      </div>
    </SectionReveal>
  );
}
