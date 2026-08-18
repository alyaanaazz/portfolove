"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  useAnimationFrame,
} from "framer-motion";
import Image from "next/image";
import { profile } from "@/data/profile";
import { SocialIcon } from "@/components/ui/social-icon";
import { useEffect, useRef, useState, useCallback } from "react";

// ─── Spring configs ────────────────────────────────────────────────────────
const HOVER_SPRING   = { stiffness: 220, damping: 28, mass: 0.6 };
const LEAVE_SPRING   = { stiffness: 80,  damping: 22, mass: 0.8 };
const LIGHT_SPRING   = { stiffness: 140, damping: 28, mass: 0.5 };
const FLOAT_SPRING   = { stiffness: 40,  damping: 18, mass: 1.2 };

export function HeroCard() {
  const reduceMotion = useReducedMotion();
  const [isTouch, setIsTouch] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(pointer: coarse)").matches : false
  );
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");
    const handleChange = (event: MediaQueryListEvent) => setIsTouch(event.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // ─── Cursor motion values (normalized –0.5 … +0.5) ─────────────────────
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Springs for cursor – tighter on enter, looser on leave
  const [cursorSpringCfg, setCursorSpringCfg] = useState(LEAVE_SPRING);
  const cursorXSpring = useSpring(cursorX, cursorSpringCfg);
  const cursorYSpring = useSpring(cursorY, cursorSpringCfg);

  // ─── Idle float motion values ────────────────────────────────────────────
  const idleY     = useMotionValue(0);   // px
  const idleRotZ  = useMotionValue(0);   // deg
  const idleRotX  = useMotionValue(0);   // deg subtle
  const idleRotY  = useMotionValue(0);   // deg subtle

  const idleYSpring    = useSpring(idleY,    FLOAT_SPRING);
  const idleRotZSpring = useSpring(idleRotZ, FLOAT_SPRING);
  const idleRotXSpring = useSpring(idleRotX, FLOAT_SPRING);
  const idleRotYSpring = useSpring(idleRotY, FLOAT_SPRING);

  // ─── Hover scale ─────────────────────────────────────────────────────────
  const hoverScale = useMotionValue(1);
  const hoverScaleSpring = useSpring(hoverScale, { stiffness: 180, damping: 22 });

  // ─── Ambient light motion values ─────────────────────────────────────────
  const ambLightX = useMotionValue(50);  // percent
  const ambLightY = useMotionValue(40);
  const ambLightXSpring = useSpring(ambLightX, { stiffness: 25, damping: 20 });
  const ambLightYSpring = useSpring(ambLightY, { stiffness: 25, damping: 20 });

  // Cursor-follow light (percent, 0-100)
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);
  const lightXSpring = useSpring(lightX, LIGHT_SPRING);
  const lightYSpring = useSpring(lightY, LIGHT_SPRING);
  const lightOpacity = useMotionValue(0);
  const lightOpacitySpring = useSpring(lightOpacity, { stiffness: 120, damping: 24 });

  // ─── Derived card rotation from cursor ───────────────────────────────────
  const cursorRotX = useTransform(cursorYSpring, [-0.5, 0.5], [8, -8]);
  const cursorRotY = useTransform(cursorXSpring, [-0.5, 0.5], [-8, 8]);

  // ─── Combine idle + cursor rotations ─────────────────────────────────────
  // We blend: when hovered=true, idle contributions fade toward 0
  const hoverBlend = useMotionValue(0); // 0 = idle, 1 = hover
  const hoverBlendSpring = useSpring(hoverBlend, { stiffness: 100, damping: 22 });

  const finalRotX = useTransform(
    [cursorRotX, idleRotXSpring, hoverBlendSpring],
    ([cRX, iRX, blend]) => (cRX as number) * (blend as number) + (iRX as number) * (1 - (blend as number))
  );
  const finalRotY = useTransform(
    [cursorRotY, idleRotYSpring, hoverBlendSpring],
    ([cRY, iRY, blend]) => (cRY as number) * (blend as number) + (iRY as number) * (1 - (blend as number))
  );
  const finalRotZ = useTransform(
    [idleRotZSpring, hoverBlendSpring],
    ([iRZ, blend]) => (iRZ as number) * (1 - (blend as number))
  );
  const finalTranslateY = useTransform(
    [idleYSpring, hoverBlendSpring],
    ([iY, blend]) => (iY as number) * (1 - (blend as number))
  );

  // ─── Glossy cursor light ─────────────────────────────────────────────────
  const cursorShine = useTransform(
    [lightXSpring, lightYSpring, lightOpacitySpring],
    ([lx, ly, lo]) =>
      `radial-gradient(circle at ${lx}% ${ly}%, rgba(255,255,255,${(lo as number) * 0.18}), rgba(120,150,220,${(lo as number) * 0.06}) 30%, transparent 55%)`
  );

  // Specular highlight
  const specularShine = useTransform(
    [lightXSpring, lightYSpring, lightOpacitySpring],
    ([lx, ly, lo]) =>
      `radial-gradient(ellipse 60% 40% at ${lx}% ${ly}%, rgba(255,255,255,${(lo as number) * 0.09}), transparent 60%)`
  );

  // ─── Ambient glow (navy/maroon) ───────────────────────────────────────────
  const ambientGlow = useTransform(
    [ambLightXSpring, ambLightYSpring],
    ([ax, ay]) =>
      `radial-gradient(ellipse 70% 55% at ${ax}% ${ay}%, rgba(60,30,50,0.38), transparent 65%), ` +
      `radial-gradient(ellipse 50% 40% at ${100 - (ax as number)}% ${100 - (ay as number)}%, rgba(20,30,70,0.28), transparent 60%)`
  );

  // ─── Dynamic shadow ───────────────────────────────────────────────────────
  const cardShadow = useTransform(
    [hoverScaleSpring, lightOpacitySpring],
    ([sc, lo]) => {
      const lift = ((sc as number) - 1) * 3000;
      const spread = 40 + (lo as number) * 20;
      const alpha = 0.55 + (lo as number) * 0.2;
      return `0 ${20 + lift}px ${spread + lift}px -10px rgba(0,0,0,${alpha}), 0 4px 12px -2px rgba(0,0,0,0.3)`;
    }
  );

  // ─── Idle float animation using useAnimationFrame ────────────────────────
  const floatTimeRef = useRef(0);

  useAnimationFrame((t) => {
    if (reduceMotion || isHovered) return;

    const seconds = t / 1000;
    floatTimeRef.current = seconds;

    // Very slow organic float
    const slowY    = Math.sin(seconds * 0.45) * 6 + Math.sin(seconds * 0.17) * 2;
    const slowRotZ = Math.sin(seconds * 0.38) * 0.4 + Math.cos(seconds * 0.22) * 0.15;
    const slowRotX = Math.sin(seconds * 0.29) * 0.8 + Math.cos(seconds * 0.19) * 0.3;
    const slowRotY = Math.cos(seconds * 0.33) * 0.7 + Math.sin(seconds * 0.14) * 0.25;

    // Ambient light drifts slowly
    const aLX = 50 + Math.sin(seconds * 0.18) * 22 + Math.cos(seconds * 0.11) * 10;
    const aLY = 40 + Math.cos(seconds * 0.15) * 20 + Math.sin(seconds * 0.08) * 8;

    idleY.set(slowY);
    idleRotZ.set(slowRotZ);
    idleRotX.set(slowRotX);
    idleRotY.set(slowRotY);
    ambLightX.set(aLX);
    ambLightY.set(aLY);
  });

  // ─── Handlers ─────────────────────────────────────────────────────────────
  const handleMouseEnter = useCallback(() => {
    if (reduceMotion || isTouch) return;
    setIsHovered(true);
    setCursorSpringCfg(HOVER_SPRING);
    hoverBlend.set(1);
    hoverScale.set(1.018);
    lightOpacity.set(1);
  }, [reduceMotion, isTouch, hoverBlend, hoverScale, lightOpacity]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || isTouch) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top) / rect.height;
    cursorX.set(nx - 0.5);
    cursorY.set(ny - 0.5);
    lightX.set(nx * 100);
    lightY.set(ny * 100);
  }, [reduceMotion, isTouch, cursorX, cursorY, lightX, lightY]);

  const handleMouseLeave = useCallback(() => {
    if (reduceMotion || isTouch) return;
    setIsHovered(false);
    setCursorSpringCfg(LEAVE_SPRING);
    hoverBlend.set(0);
    hoverScale.set(1);
    lightOpacity.set(0);
    cursorX.set(0);
    cursorY.set(0);
  }, [reduceMotion, isTouch, hoverBlend, hoverScale, lightOpacity, cursorX, cursorY]);

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <motion.div
      ref={cardRef}
      style={{ perspective: 1200 }}
      className="group relative mx-auto aspect-[4/5] w-full max-w-sm md:mx-0"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Floating + rotating card shell ─────────────────────────────── */}
      <motion.div
        style={{
          rotateX: reduceMotion ? 0 : finalRotX,
          rotateY: reduceMotion ? 0 : finalRotY,
          rotateZ: reduceMotion ? 0 : finalRotZ,
          y:       reduceMotion ? 0 : finalTranslateY,
          scale:   reduceMotion ? 1 : hoverScaleSpring,
          boxShadow: reduceMotion ? "0 20px 40px -10px rgba(0,0,0,0.5)" : cardShadow,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-black/10 bg-zinc-950 dark:border-white/10"
      >
        {/* ── Profile image (static, no parallax) ──────────────────────── */}
        <div className="absolute inset-0">
          <Image
            src={profile.profileImage}
            alt="Portrait of Nisrina Alya Nabilah"
            fill
            priority
            sizes="(min-width: 768px) 384px, 90vw"
            className="object-cover scale-[1.08]"
          />
        </div>

        {/* ── Ambient navy / maroon glow ────────────────────────────────── */}
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-[5]"
            style={{ background: ambientGlow }}
          />
        )}

        {/* ── Card gradient overlay ────────────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0 z-[6] bg-[linear-gradient(180deg,rgba(5,7,11,0.04),rgba(5,7,11,0.22)_45%,rgba(5,7,11,0.92))]" />

        {/* ── Top ambient rim ───────────────────────────────────────────── */}
        <div className="pointer-events-none absolute inset-x-5 top-5 z-[7] h-20 rounded-full bg-white/10 blur-2xl" />

        {/* ── Cursor-following gloss reflection ────────────────────────── */}
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute -inset-px z-[8] mix-blend-screen"
            style={{ background: cursorShine }}
          />
        )}

        {/* ── Specular highlight ────────────────────────────────────────── */}
        {!reduceMotion && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-[9] mix-blend-screen"
            style={{ background: specularShine }}
          />
        )}

        {/* ── Text content (elevated Z) ─────────────────────────────────── */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-end p-7"
          style={{
            translateZ: 40,
            transformStyle: "preserve-3d",
          }}
        >
          <p className="mb-auto w-fit rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur shadow-sm">
            {profile.location}
          </p>
          <h3 className="text-2xl font-semibold tracking-normal text-white">{profile.name}</h3>
          <p className="mt-1 text-zinc-300">{profile.role}</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-300">{profile.tagline}</p>
          <div className="mt-6 flex gap-3">
            {profile.socialLinks.map((link) => (
              <SocialIcon key={link.label} link={link} variant="outline" />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
