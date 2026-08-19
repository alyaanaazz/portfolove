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

const ease = [0.16, 1, 0.3, 1] as const;

export function AboutIdCard() {
  const reduceMotion = useReducedMotion();
  const idCardImage = profile.idCardImage ?? profile.profileImage;
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 150, damping: 26, mass: 0.6 });
  const smoothY = useSpring(cursorY, { stiffness: 150, damping: 26, mass: 0.6 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [4.5, -4.5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5.5, 5.5]);

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
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.78, ease }}
      className="mt-8 flex w-full max-w-[17rem] justify-center sm:max-w-[18rem] md:mt-10"
      style={{ perspective: 1100 }}
    >
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -4, 0], rotateZ: [-0.8, 0.8, -0.8] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full origin-top"
      >
        <div className="mx-auto h-16 w-8 rounded-b-xl border-x border-b border-black/10 bg-zinc-950/85 shadow-[0_14px_35px_-28px_rgba(5,7,11,0.9)] dark:border-white/10 dark:bg-black/60">
          <div className="flex h-full items-center justify-center">
            <span className="rotate-90 text-[8px] font-semibold uppercase tracking-[0.26em] text-white/70">
              About
            </span>
          </div>
        </div>
        <div className="mx-auto h-5 w-px bg-black/25 dark:bg-white/25" />
        <div className="mx-auto mb-[-1px] h-3 w-8 rounded-t-full border border-black/10 bg-white/60 backdrop-blur dark:border-white/10 dark:bg-white/10" />

        <motion.div
          variants={{
            hover: {
              scale: 1.018,
              boxShadow: "0 34px 80px -40px rgba(5, 7, 11, 0.62)",
            },
          }}
          whileHover="hover"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: reduceMotion ? 0 : rotateX,
            rotateY: reduceMotion ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          transition={{ duration: 0.28, ease }}
          className="group relative overflow-hidden rounded-[1.35rem] border border-black/10 bg-white/48 p-3 shadow-[0_22px_60px_-42px_rgba(5,7,11,0.72)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.055]"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.48),transparent_45%),radial-gradient(circle_at_28%_22%,rgba(126,184,218,0.28),transparent_34%),radial-gradient(circle_at_82%_82%,rgba(100,29,50,0.16),transparent_40%)] dark:bg-[linear-gradient(145deg,rgba(255,255,255,0.08),transparent_48%),radial-gradient(circle_at_28%_22%,rgba(74,94,91,0.12),transparent_36%),radial-gradient(circle_at_82%_82%,rgba(146,112,90,0.1),transparent_42%)]" />
          <div className="relative" style={{ transform: "translateZ(30px)" }}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] border border-black/10 bg-zinc-100 dark:border-white/10 dark:bg-zinc-900">
              <Image
                src={idCardImage}
                alt={profile.name}
                fill
                sizes="288px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(5,7,11,0.72))]" />
              <div className="absolute inset-x-4 bottom-4">
                <h3 className="text-xl font-semibold leading-tight text-white">
                  {profile.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/78">
                  Computer Science Student
                </p>
              </div>
            </div>

            <div className="px-1 pb-1 pt-4">
              <p className="inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                <MapPin size={14} aria-hidden="true" />
                {profile.location}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {chips.map((chip, index) => (
                  <motion.span
                    key={chip}
                    variants={{ hover: { y: -2 } }}
                    transition={{ duration: 0.2, delay: index * 0.025 }}
                    className="rounded-full border border-black/10 bg-white/55 px-3 py-1.5 text-xs font-medium text-zinc-600 dark:border-white/10 dark:bg-white/[0.07] dark:text-zinc-300"
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
