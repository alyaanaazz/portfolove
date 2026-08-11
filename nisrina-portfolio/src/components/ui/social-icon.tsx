import Image from "next/image";
import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";
import type { SocialLink } from "@/types/portfolio";

function ImageIcon({ src, alt, size = 18, rounded = false }: { src: string; alt: string; size?: number | string; rounded?: boolean }) {
  return (
    <Image 
      src={src} 
      alt={alt} 
      width={Number(size)} 
      height={Number(size)} 
      className={`object-contain ${rounded ? "rounded-[4px]" : ""}`} 
    />
  );
}

function MediumIconSVG({ size = 18, ...props }: any) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      {...props}
    >
      <path d="M4 20V4h4.5L12 13.5 15.5 4H20v16h-3V9l-3.5 9h-3L7 9v11H4z" />
    </svg>
  );
}

const imageIcons = {
  github: (props: any) => <ImageIcon src="/images/github.png" alt="GitHub" rounded {...props} />,
  linkedin: (props: any) => <ImageIcon src="/images/linkedin.png" alt="LinkedIn" rounded {...props} />,
  medium: (props: any) => <ImageIcon src="/images/medium.png" alt="Medium" {...props} />,
  mail: (props: any) => <ImageIcon src="/images/mail.png" alt="Mail" rounded {...props} />,
};

const outlineIcons = {
  github: GitBranch,
  linkedin: BriefcaseBusiness,
  medium: MediumIconSVG,
  mail: Mail,
};

export function SocialIcon({ link, variant = "image" }: { link: SocialLink; variant?: "image" | "outline" }) {
  const Icon = variant === "outline" ? outlineIcons[link.icon] : imageIcons[link.icon];

  return (
    <a
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={link.label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-zinc-600 transition hover:-translate-y-0.5 hover:border-black/20 hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:hover:border-white/20 dark:hover:text-white"
    >
      <Icon size={18} aria-hidden="true" />
    </a>
  );
}
