"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import { useThemeMode } from "@/components/providers";

const links = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const { theme, setTheme } = useThemeMode();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-max -translate-x-1/2 rounded-full border border-black/10 bg-[#f7f7f5]/70 p-1.5 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-black/25"
      aria-label="Primary navigation"
    >
      <div className="hidden items-center gap-1 md:flex">
        {links.map((link) => {
          const active = pathname === link.href || (link.href.startsWith("/#") && pathname === "/");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-maroon-800/50 ${
                active ? "text-zinc-950 dark:text-white" : "text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-200"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-black/5 dark:bg-white/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.label}
            </Link>
          );
        })}
        <div className="mx-2 h-4 w-px bg-black/10 dark:bg-white/20" />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full p-2 text-zinc-500 transition-colors hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:hover:text-white"
          aria-label="Toggle theme"
          suppressHydrationWarning
        >
          {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
        </button>
      </div>
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full p-2 text-zinc-500 transition-colors hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:hover:text-white"
          aria-label="Toggle theme"
          suppressHydrationWarning
        >
          {theme === "dark" ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
        </button>
        <button
          onClick={() => setOpen((value) => !value)}
          className="rounded-full p-2 text-zinc-600 transition-colors hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:text-zinc-300 dark:hover:text-white"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <div className="absolute left-0 right-0 top-14 rounded-2xl border border-black/10 bg-[#f7f7f5]/95 p-2 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-[#05070b]/95 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-700 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-maroon-800/50 dark:text-zinc-300 dark:hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
