import { profile } from "@/data/profile";
import { LocalTime } from "@/components/ui/local-time";
import { GitBranch } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-black/10 py-8 dark:border-white/10 md:mt-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-12">
        <div>
          <p className="font-medium text-zinc-950 dark:text-white">{profile.name}</p>
          <p className="mt-1">Designed & Built with Curiosity. {new Date().getFullYear()}</p>
          <div className="mt-6">
            <LocalTime />
          </div>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <a
            href={profile.sourceCodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex gap-3 text-base font-medium tracking-[0.08em] text-zinc-700 underline underline-offset-4 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            <GitBranch size={20} aria-hidden="true" />
            Source code
          </a>
        </div>
      </div>
    </footer>
  );
}
