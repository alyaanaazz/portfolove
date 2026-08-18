"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  siBootstrap,
  siCss,
  siDjango,
  siDocker,
  siExpress,
  siFigma,
  siFirebase,
  siFlutter,
  siFramer,
  siGit,
  siGithub,
  siGo,
  siHtml5,
  siJavascript,
  siKotlin,
  siLaravel,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siReacthookform,
  siReactquery,
  siRedux,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVuedotjs,
  type SimpleIcon,
} from "simple-icons";
import { Network } from "lucide-react";

import { techStack, techStackMarqueeRows } from "@/data/tech-stack";
import { SectionReveal } from "@/components/ui/section-reveal";
import type { TechItem, TechMarqueeRow } from "@/types/portfolio";

const brandIcons: Record<string, SimpleIcon> = {
  siBootstrap,
  siCss,
  siDjango,
  siDocker,
  siExpress,
  siFigma,
  siFirebase,
  siFlutter,
  siFramer,
  siGit,
  siGithub,
  siGo,
  siHtml5,
  siJavascript,
  siKotlin,
  siLaravel,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siReacthookform,
  siReactquery,
  siRedux,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVuedotjs,
};

type MarqueeStyle = CSSProperties & {
  "--marquee-duration": string;
  "--marquee-offset": string;
  "--marquee-distance": string;
};

function distributeRows(items: TechItem[], rowCount: number) {
  return items.reduce<TechItem[][]>(
    (rows, item, index) => {
      rows[index % rowCount].push(item);
      return rows;
    },
    Array.from({ length: rowCount }, () => [])
  );
}

function TechLogo({ tech }: { tech: TechItem }) {
  const icon = brandIcons[tech.icon];

  if (!icon) {
    return (
      <Network
        size={23}
        strokeWidth={1.8}
        aria-hidden="true"
        className="text-maroon-800 dark:text-maroon-300"
      />
    );
  }

  const color = tech.color ?? `#${icon.hex}`;

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 md:h-7 md:w-7"
      style={{ color }}
    >
      <path fill="currentColor" d={icon.path} />
    </svg>
  );
}

function TechCard({
  tech,
  duplicate = false,
}: {
  tech: TechItem;
  duplicate?: boolean;
}) {
  const className =
    "tech-bubble group relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full " +
    "border border-white/70 bg-zinc-100 text-zinc-900 " +
    "shadow-[inset_2px_2px_5px_rgba(255,255,255,0.95),inset_-3px_-4px_7px_rgba(8,17,28,0.12),0_5px_10px_rgba(8,17,28,0.12)] " +
    "transition-all duration-300 hover:-translate-y-1 hover:scale-105 " +
    "hover:shadow-[inset_2px_2px_5px_rgba(255,255,255,1),inset_-3px_-4px_8px_rgba(8,17,28,0.14),0_8px_16px_rgba(8,17,28,0.18)] " +
    "focus:outline-none focus:ring-2 focus:ring-maroon-800/40 " +
    "md:h-14 md:w-14 " +
    "dark:border-white/15 dark:bg-white/[0.09] dark:text-white " +
    "dark:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.14),inset_-3px_-4px_8px_rgba(0,0,0,0.4),0_5px_12px_rgba(0,0,0,0.3)]";

  const content = (
    <>
      {/* Bubble highlight */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-[2px] rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(circle at 30% 22%, rgba(255,255,255,.95), rgba(255,255,255,.3) 28%, transparent 58%)",
        }}
      />

      <span className="relative z-10 flex items-center justify-center">
        <TechLogo tech={tech} />
      </span>

      {/* Tooltip */}
      <span
        className="
          pointer-events-none absolute left-1/2 top-full z-30 mt-2
          -translate-x-1/2 translate-y-1
          whitespace-nowrap rounded-md
          bg-zinc-950 px-2 py-1
          text-[10px] font-medium text-white
          opacity-0 shadow-lg
          transition-all duration-200
          group-hover:translate-y-0 group-hover:opacity-100
          dark:bg-white dark:text-zinc-900
        "
      >
        {tech.name}
      </span>
    </>
  );

  if (!tech.url) {
    return (
      <div
        className={className}
        title={tech.name}
        aria-hidden={duplicate}
        aria-label={duplicate ? undefined : tech.name}
      >
        {content}
      </div>
    );
  }

  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={tech.name}
      aria-label={`${tech.name} website`}
      aria-hidden={duplicate}
      tabIndex={duplicate ? -1 : undefined}
    >
      {content}
    </a>
  );
}

function TechSequence({
  items,
  duplicate = false,
  sequenceRef,
}: {
  items: TechItem[];
  duplicate?: boolean;
  sequenceRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div
      ref={sequenceRef}
      aria-hidden={duplicate}
      className="flex shrink-0 items-center gap-4 pr-4 md:gap-5 md:pr-5"
    >
      {items.map((tech, index) => (
        <TechCard
          key={`${duplicate ? "duplicate" : "original"}-${tech.name}-${index}`}
          tech={tech}
          duplicate={duplicate}
        />
      ))}
    </div>
  );
}

function TechRow({
  items,
  config,
}: {
  items: TechItem[];
  config: TechMarqueeRow;
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const sequenceRef = useRef<HTMLDivElement>(null);

  const [sequenceWidth, setSequenceWidth] = useState(0);
  const [repeatCount, setRepeatCount] = useState(5);

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    const sequence = sequenceRef.current;

    if (!viewport || !sequence || items.length === 0) return;

    const measure = () => {
      const viewportWidth = viewport.getBoundingClientRect().width;
      const width = sequence.getBoundingClientRect().width;

      if (!width) return;

      setSequenceWidth(width);

      /*
       * We need enough copies so that:
       *
       * [A][A][A][A][A]
       *  ↑ viewport
       *
       * When A moves away, another A is already behind it.
       */
      const requiredRepeats =
        Math.max(4, Math.ceil(viewportWidth / width) + 3);

      if (requiredRepeats !== repeatCount) {
        setRepeatCount(requiredRepeats);
      }
    };

    measure();

    const observer = new ResizeObserver(measure);

    observer.observe(viewport);
    observer.observe(sequence);

    return () => observer.disconnect();
  }, [items, repeatCount]);

  const style: MarqueeStyle = {
    "--marquee-duration": `${config.duration}s`,
    "--marquee-offset": config.offset,
    "--marquee-distance": `${sequenceWidth}px`,
  };

  return (
    <div
      ref={viewportRef}
      className="tech-marquee-mask relative overflow-hidden py-6"
    >
      <div
        className={`tech-marquee-track flex w-max ${
          config.direction === "right"
            ? "tech-marquee-right"
            : "tech-marquee-left"
        }`}
        style={style}
      >
        {Array.from({ length: repeatCount }).map((_, index) => (
          <TechSequence
            key={`sequence-${index}`}
            items={items}
            duplicate={index !== 0}
            sequenceRef={index === 0 ? sequenceRef : undefined}
          />
        ))}
      </div>
    </div>
  );
}

export function TechStackSection() {
  const desktopRows = distributeRows(
    techStack,
    techStackMarqueeRows.desktop.length
  );

  const mobileRows = distributeRows(
    techStack,
    techStackMarqueeRows.mobile.length
  );

  return (
    <SectionReveal
      id="stack"
      className="mt-16 border-t border-black/10 pt-12 dark:border-white/10 md:mt-20 md:pt-16"
    >
      <div className="mb-12">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-maroon-800 dark:text-maroon-300">
          Tech Stack
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-normal text-zinc-950 dark:text-white md:text-4xl">
          Tools I use to design, build, and ship.
        </h2>
      </div>

      <div className="mx-auto w-full max-w-6xl overflow-hidden pb-12">
        {/* Mobile */}
        <div className="space-y-1 md:hidden">
          {mobileRows.map((items, index) => (
            <TechRow
              key={`mobile-${index}`}
              items={items}
              config={techStackMarqueeRows.mobile[index]}
            />
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden space-y-2 md:block">
          {desktopRows.map((items, index) => (
            <TechRow
              key={`desktop-${index}`}
              items={items}
              config={techStackMarqueeRows.desktop[index]}
            />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
