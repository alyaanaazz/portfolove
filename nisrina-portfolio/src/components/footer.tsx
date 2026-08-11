import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/social-icon";
import { LocalTime } from "@/components/ui/local-time";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-black/10 py-8 dark:border-white/10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-6 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between md:px-12">
        <div>
          <p className="font-medium text-zinc-950 dark:text-white">{profile.name}</p>
          <p className="mt-1">Designed & Built with Curiosity. {new Date().getFullYear()}</p>
          <div className="mt-6">
            <LocalTime />
          </div>
        </div>
        <div className="flex gap-3">
          {profile.socialLinks.map((link) => (
            <SocialIcon key={link.label} link={link} />
          ))}
        </div>
      </div>
    </footer>
  );
}
