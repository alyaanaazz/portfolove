"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { profile } from "@/data/profile";

const chips = ["Product", "Development", "UI/UX"];

export function AboutIdCard() {
  const reduceMotion = useReducedMotion();
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 180, damping: 24, mass: 0.5 });
  const smoothY = useSpring(cursorY, { stiffness: 180, damping: 24, mass: 0.5 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    cursorX.set((event.clientX - rect.left) / rect.width - 0.5);
    cursorY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    cursorX.set(0);
    cursorY.set(0);
  }

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 w-full max-w-[18rem] sm:max-w-[19rem] md:mt-10"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.015,
          boxShadow: "0 28px 70px -34px rgba(5, 7, 11, 0.55)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-[1.4rem] border border-black/10 bg-white/45 p-5 shadow-[0_18px_55px_-38px_rgba(5,7,11,0.6)] backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-white/[0.055]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.44),transparent_48%),radial-gradient(circle_at_22%_16%,rgba(126,184,218,0.22),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(100,29,50,0.14),transparent_42%)] dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_50%),radial-gradient(circle_at_22%_16%,rgba(126,184,218,0.14),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(212,131,154,0.12),transparent_42%)]" />
        <div className="relative" style={{ transform: "translateZ(28px)" }}>
          <div className="flex items-start justify-between gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-black/10 bg-zinc-100 shadow-sm dark:border-white/10 dark:bg-white/10">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <motion.span
              variants={{
                hover: { y: -2 },
              }}
              className="rounded-full border border-maroon-800/15 bg-maroon-800/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-maroon-800 dark:border-maroon-300/20 dark:bg-maroon-300/10 dark:text-maroon-300"
            >
              ID
            </motion.span>
          </div>

          <div className="mt-8">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
              Portfolio card
            </p>
            <h3 className="mt-3 text-xl font-semibold leading-tight text-zinc-950 dark:text-white">
              {profile.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
              Computer Science Student
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400">
              <MapPin size={14} aria-hidden="true" />
              {profile.location}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((chip, index) => (
              <motion.span
                key={chip}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                className="rounded-full border border-black/10 bg-white/55 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/[0.07] dark:text-zinc-300"
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
